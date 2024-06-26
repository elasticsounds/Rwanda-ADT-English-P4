pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 8973;
pubcoder.page.title = pubcoder.page.title || "43";
pubcoder.page.number = pubcoder.page.number || 43;
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
var obj70293_onTap_activeActionGroupIndex = -1;
var obj70293_onTap_runningActionsCount = 0;
var obj70293_onTap_loopCount = 0;
var obj70290_onTap_activeActionGroupIndex = -1;
var obj70290_onTap_runningActionsCount = 0;
var obj70290_onTap_loopCount = 0;
var obj70286_onTap_activeActionGroupIndex = -1;
var obj70286_onTap_runningActionsCount = 0;
var obj70286_onTap_loopCount = 0;
var obj70267_onTap_activeActionGroupIndex = -1;
var obj70267_onTap_runningActionsCount = 0;
var obj70267_onTap_loopCount = 0;
var obj70264_onTap_activeActionGroupIndex = -1;
var obj70264_onTap_runningActionsCount = 0;
var obj70264_onTap_loopCount = 0;
var obj70256_onTap_activeActionGroupIndex = -1;
var obj70256_onTap_runningActionsCount = 0;
var obj70256_onTap_loopCount = 0;
var obj70245_onTap_activeActionGroupIndex = -1;
var obj70245_onTap_runningActionsCount = 0;
var obj70245_onTap_loopCount = 0;
var obj70242_onTap_activeActionGroupIndex = -1;
var obj70242_onTap_runningActionsCount = 0;
var obj70242_onTap_loopCount = 0;
var obj70235_onTap_activeActionGroupIndex = -1;
var obj70235_onTap_runningActionsCount = 0;
var obj70235_onTap_loopCount = 0;
var obj70228_onTap_activeActionGroupIndex = -1;
var obj70228_onTap_runningActionsCount = 0;
var obj70228_onTap_loopCount = 0;
var obj70225_onTap_activeActionGroupIndex = -1;
var obj70225_onTap_runningActionsCount = 0;
var obj70225_onTap_loopCount = 0;
var obj70218_onTap_activeActionGroupIndex = -1;
var obj70218_onTap_runningActionsCount = 0;
var obj70218_onTap_loopCount = 0;
var obj70209_onTap_activeActionGroupIndex = -1;
var obj70209_onTap_runningActionsCount = 0;
var obj70209_onTap_loopCount = 0;
var obj70206_onTap_activeActionGroupIndex = -1;
var obj70206_onTap_runningActionsCount = 0;
var obj70206_onTap_loopCount = 0;
var obj70197_onTap_activeActionGroupIndex = -1;
var obj70197_onTap_runningActionsCount = 0;
var obj70197_onTap_loopCount = 0;
var obj70194_onTap_activeActionGroupIndex = -1;
var obj70194_onTap_runningActionsCount = 0;
var obj70194_onTap_loopCount = 0;
var obj70187_onTap_activeActionGroupIndex = -1;
var obj70187_onTap_runningActionsCount = 0;
var obj70187_onTap_loopCount = 0;
var obj70180_onTap_activeActionGroupIndex = -1;
var obj70180_onTap_runningActionsCount = 0;
var obj70180_onTap_loopCount = 0;
var obj70177_onTap_activeActionGroupIndex = -1;
var obj70177_onTap_runningActionsCount = 0;
var obj70177_onTap_loopCount = 0;
var obj70170_onTap_activeActionGroupIndex = -1;
var obj70170_onTap_runningActionsCount = 0;
var obj70170_onTap_loopCount = 0;
var obj70163_onTap_activeActionGroupIndex = -1;
var obj70163_onTap_runningActionsCount = 0;
var obj70163_onTap_loopCount = 0;
var obj70149_onTap_activeActionGroupIndex = -1;
var obj70149_onTap_runningActionsCount = 0;
var obj70149_onTap_loopCount = 0;
var obj70134_onTap_activeActionGroupIndex = -1;
var obj70134_onTap_runningActionsCount = 0;
var obj70134_onTap_loopCount = 0;
var obj70127_onTap_activeActionGroupIndex = -1;
var obj70127_onTap_runningActionsCount = 0;
var obj70127_onTap_loopCount = 0;
var obj70124_onTap_activeActionGroupIndex = -1;
var obj70124_onTap_runningActionsCount = 0;
var obj70124_onTap_loopCount = 0;
var obj70112_onTap_activeActionGroupIndex = -1;
var obj70112_onTap_runningActionsCount = 0;
var obj70112_onTap_loopCount = 0;
var obj70105_onTap_activeActionGroupIndex = -1;
var obj70105_onTap_runningActionsCount = 0;
var obj70105_onTap_loopCount = 0;
var obj70098_onTap_activeActionGroupIndex = -1;
var obj70098_onTap_runningActionsCount = 0;
var obj70098_onTap_loopCount = 0;
var obj70089_onTap_activeActionGroupIndex = -1;
var obj70089_onTap_runningActionsCount = 0;
var obj70089_onTap_loopCount = 0;
var obj70080_onTap_activeActionGroupIndex = -1;
var obj70080_onTap_runningActionsCount = 0;
var obj70080_onTap_loopCount = 0;
var obj70071_onTap_activeActionGroupIndex = -1;
var obj70071_onTap_runningActionsCount = 0;
var obj70071_onTap_loopCount = 0;
var obj70064_onTap_activeActionGroupIndex = -1;
var obj70064_onTap_runningActionsCount = 0;
var obj70064_onTap_loopCount = 0;
var obj70049_onTap_activeActionGroupIndex = -1;
var obj70049_onTap_runningActionsCount = 0;
var obj70049_onTap_loopCount = 0;
var obj70038_onTap_activeActionGroupIndex = -1;
var obj70038_onTap_runningActionsCount = 0;
var obj70038_onTap_loopCount = 0;
var obj70031_onTap_activeActionGroupIndex = -1;
var obj70031_onTap_runningActionsCount = 0;
var obj70031_onTap_loopCount = 0;
var obj70022_onTap_activeActionGroupIndex = -1;
var obj70022_onTap_runningActionsCount = 0;
var obj70022_onTap_loopCount = 0;
var obj70007_onTap_activeActionGroupIndex = -1;
var obj70007_onTap_runningActionsCount = 0;
var obj70007_onTap_loopCount = 0;
var obj70000_onTap_activeActionGroupIndex = -1;
var obj70000_onTap_runningActionsCount = 0;
var obj70000_onTap_loopCount = 0;
var obj69991_onTap_activeActionGroupIndex = -1;
var obj69991_onTap_runningActionsCount = 0;
var obj69991_onTap_loopCount = 0;
var obj69976_onTap_activeActionGroupIndex = -1;
var obj69976_onTap_runningActionsCount = 0;
var obj69976_onTap_loopCount = 0;
var obj69969_onTap_activeActionGroupIndex = -1;
var obj69969_onTap_runningActionsCount = 0;
var obj69969_onTap_loopCount = 0;
var obj69960_onTap_activeActionGroupIndex = -1;
var obj69960_onTap_runningActionsCount = 0;
var obj69960_onTap_loopCount = 0;
var obj69949_onTap_activeActionGroupIndex = -1;
var obj69949_onTap_runningActionsCount = 0;
var obj69949_onTap_loopCount = 0;
var obj69940_onTap_activeActionGroupIndex = -1;
var obj69940_onTap_runningActionsCount = 0;
var obj69940_onTap_loopCount = 0;
var obj69933_onTap_activeActionGroupIndex = -1;
var obj69933_onTap_runningActionsCount = 0;
var obj69933_onTap_loopCount = 0;
var obj69924_onTap_activeActionGroupIndex = -1;
var obj69924_onTap_runningActionsCount = 0;
var obj69924_onTap_loopCount = 0;
var obj69915_onTap_activeActionGroupIndex = -1;
var obj69915_onTap_runningActionsCount = 0;
var obj69915_onTap_loopCount = 0;
var obj69908_onTap_activeActionGroupIndex = -1;
var obj69908_onTap_runningActionsCount = 0;
var obj69908_onTap_loopCount = 0;
var obj69903_onTap_activeActionGroupIndex = -1;
var obj69903_onTap_runningActionsCount = 0;
var obj69903_onTap_loopCount = 0;
var obj69896_onTap_activeActionGroupIndex = -1;
var obj69896_onTap_runningActionsCount = 0;
var obj69896_onTap_loopCount = 0;
var obj69887_onTap_activeActionGroupIndex = -1;
var obj69887_onTap_runningActionsCount = 0;
var obj69887_onTap_loopCount = 0;
var obj69878_onTap_activeActionGroupIndex = -1;
var obj69878_onTap_runningActionsCount = 0;
var obj69878_onTap_loopCount = 0;
var obj69871_onTap_activeActionGroupIndex = -1;
var obj69871_onTap_runningActionsCount = 0;
var obj69871_onTap_loopCount = 0;
var obj69864_onTap_activeActionGroupIndex = -1;
var obj69864_onTap_runningActionsCount = 0;
var obj69864_onTap_loopCount = 0;
var obj69855_onTap_activeActionGroupIndex = -1;
var obj69855_onTap_runningActionsCount = 0;
var obj69855_onTap_loopCount = 0;
var obj69848_onTap_activeActionGroupIndex = -1;
var obj69848_onTap_runningActionsCount = 0;
var obj69848_onTap_loopCount = 0;
var obj69839_onTap_activeActionGroupIndex = -1;
var obj69839_onTap_runningActionsCount = 0;
var obj69839_onTap_loopCount = 0;
var obj69832_onTap_activeActionGroupIndex = -1;
var obj69832_onTap_runningActionsCount = 0;
var obj69832_onTap_loopCount = 0;
var obj69825_onTap_activeActionGroupIndex = -1;
var obj69825_onTap_runningActionsCount = 0;
var obj69825_onTap_loopCount = 0;
var obj69822_onTap_activeActionGroupIndex = -1;
var obj69822_onTap_runningActionsCount = 0;
var obj69822_onTap_loopCount = 0;
var obj69813_onTap_activeActionGroupIndex = -1;
var obj69813_onTap_runningActionsCount = 0;
var obj69813_onTap_loopCount = 0;
var obj69800_onTap_activeActionGroupIndex = -1;
var obj69800_onTap_runningActionsCount = 0;
var obj69800_onTap_loopCount = 0;
var obj69793_onTap_activeActionGroupIndex = -1;
var obj69793_onTap_runningActionsCount = 0;
var obj69793_onTap_loopCount = 0;
var obj69786_onTap_activeActionGroupIndex = -1;
var obj69786_onTap_runningActionsCount = 0;
var obj69786_onTap_loopCount = 0;
var obj69779_onTap_activeActionGroupIndex = -1;
var obj69779_onTap_runningActionsCount = 0;
var obj69779_onTap_loopCount = 0;
var obj69772_onTap_activeActionGroupIndex = -1;
var obj69772_onTap_runningActionsCount = 0;
var obj69772_onTap_loopCount = 0;
var obj69763_onTap_activeActionGroupIndex = -1;
var obj69763_onTap_runningActionsCount = 0;
var obj69763_onTap_loopCount = 0;
var obj69756_onTap_activeActionGroupIndex = -1;
var obj69756_onTap_runningActionsCount = 0;
var obj69756_onTap_loopCount = 0;
var obj69749_onTap_activeActionGroupIndex = -1;
var obj69749_onTap_runningActionsCount = 0;
var obj69749_onTap_loopCount = 0;
var obj69742_onTap_activeActionGroupIndex = -1;
var obj69742_onTap_runningActionsCount = 0;
var obj69742_onTap_loopCount = 0;
var obj69739_onTap_activeActionGroupIndex = -1;
var obj69739_onTap_runningActionsCount = 0;
var obj69739_onTap_loopCount = 0;
var obj69728_onTap_activeActionGroupIndex = -1;
var obj69728_onTap_runningActionsCount = 0;
var obj69728_onTap_loopCount = 0;
var obj69711_onTap_activeActionGroupIndex = -1;
var obj69711_onTap_runningActionsCount = 0;
var obj69711_onTap_loopCount = 0;
var obj69647_onTap_activeActionGroupIndex = -1;
var obj69647_onTap_runningActionsCount = 0;
var obj69647_onTap_loopCount = 0;
var obj69639_onTap_activeActionGroupIndex = -1;
var obj69639_onTap_runningActionsCount = 0;
var obj69639_onTap_loopCount = 0;
var obj87250_onTap_activeActionGroupIndex = -1;
var obj87250_onTap_runningActionsCount = 0;
var obj87250_onTap_loopCount = 0;
var obj87245_onTap_activeActionGroupIndex = -1;
var obj87245_onTap_runningActionsCount = 0;
var obj87245_onTap_loopCount = 0;
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
		
obj70293_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70293_onTap_activeActionGroupIndex = -1;
		$("#obj70293").trigger("obj70293_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70293) {
				console.warn("de-queueing event obj70293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70293_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_70295();
function goToPage_70295() {
	window.obj70293_onTap_runningActionsCount = obj70293_onTap_runningActionsCount + 1;
	$("#anchor258")[0].click();
	window.obj70293_onTap_runningActionsCount = window.obj70293_onTap_runningActionsCount - 1;
if (window.obj70293_onTap_runningActionsCount < 0) {
	window.obj70293_onTap_runningActionsCount = 0;
} else if (window.obj70293_onTap_runningActionsCount == 0) {
	obj70293_onTap_actionGroup1();
}
}





















};
obj70293_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70293_onTap_activeActionGroupIndex = -1;
		$("#obj70293").trigger("obj70293_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70293) {
				console.warn("de-queueing event obj70293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70293_onTap_activeActionGroupIndex = 1;
	





















};
obj70290_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70290_onTap_activeActionGroupIndex = -1;
		$("#obj70290").trigger("obj70290_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70290) {
				console.warn("de-queueing event obj70290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70290_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_70292();
function goToPage_70292() {
	window.obj70290_onTap_runningActionsCount = obj70290_onTap_runningActionsCount + 1;
	$("#anchor259")[0].click();
	window.obj70290_onTap_runningActionsCount = window.obj70290_onTap_runningActionsCount - 1;
if (window.obj70290_onTap_runningActionsCount < 0) {
	window.obj70290_onTap_runningActionsCount = 0;
} else if (window.obj70290_onTap_runningActionsCount == 0) {
	obj70290_onTap_actionGroup1();
}
}





















};
obj70290_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70290_onTap_activeActionGroupIndex = -1;
		$("#obj70290").trigger("obj70290_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70290) {
				console.warn("de-queueing event obj70290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70290_onTap_activeActionGroupIndex = 1;
	





















};
obj70286_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70286_onTap_activeActionGroupIndex = -1;
		$("#obj70286").trigger("obj70286_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70286) {
				console.warn("de-queueing event obj70286." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70286").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70286_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_70288();
function goToPage_70288() {
	window.obj70286_onTap_runningActionsCount = obj70286_onTap_runningActionsCount + 1;
	$("#anchor260")[0].click();
	window.obj70286_onTap_runningActionsCount = window.obj70286_onTap_runningActionsCount - 1;
if (window.obj70286_onTap_runningActionsCount < 0) {
	window.obj70286_onTap_runningActionsCount = 0;
} else if (window.obj70286_onTap_runningActionsCount == 0) {
	obj70286_onTap_actionGroup1();
}
}





















};
obj70286_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70286_onTap_activeActionGroupIndex = -1;
		$("#obj70286").trigger("obj70286_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70286) {
				console.warn("de-queueing event obj70286." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70286").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70286_onTap_activeActionGroupIndex = 1;
	





















};
obj70267_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70267_onTap_activeActionGroupIndex = -1;
		$("#obj70267").trigger("obj70267_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70267) {
				console.warn("de-queueing event obj70267." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70267").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70267_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_70269();
function switchText_70269() {
	window.obj70267_onTap_runningActionsCount = obj70267_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70267_onTap_runningActionsCount = window.obj70267_onTap_runningActionsCount - 1;
if (window.obj70267_onTap_runningActionsCount < 0) {
	window.obj70267_onTap_runningActionsCount = 0;
} else if (window.obj70267_onTap_runningActionsCount == 0) {
	obj70267_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70267_onTap_runningActionsCount = window.obj70267_onTap_runningActionsCount - 1;
if (window.obj70267_onTap_runningActionsCount < 0) {
	window.obj70267_onTap_runningActionsCount = 0;
} else if (window.obj70267_onTap_runningActionsCount == 0) {
	obj70267_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj70267_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70267_onTap_activeActionGroupIndex = -1;
		$("#obj70267").trigger("obj70267_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70267) {
				console.warn("de-queueing event obj70267." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70267").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70267_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70270();
function runjs_70270() {
	window.obj70267_onTap_runningActionsCount = obj70267_onTap_runningActionsCount + 1;

	$("#obj70267").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70267_onTap_runningActionsCount = window.obj70267_onTap_runningActionsCount - 1;
if (window.obj70267_onTap_runningActionsCount < 0) {
	window.obj70267_onTap_runningActionsCount = 0;
} else if (window.obj70267_onTap_runningActionsCount == 0) {
	obj70267_onTap_actionGroup2();
}
	}, 1);
}







};
obj70267_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70267_onTap_activeActionGroupIndex = -1;
		$("#obj70267").trigger("obj70267_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70267) {
				console.warn("de-queueing event obj70267." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70267").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70267_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_70271();
function playAudio_70271() {
	window.obj70267_onTap_runningActionsCount = obj70267_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj70267_onTap_runningActionsCount = window.obj70267_onTap_runningActionsCount - 1;
if (window.obj70267_onTap_runningActionsCount < 0) {
	window.obj70267_onTap_runningActionsCount = 0;
} else if (window.obj70267_onTap_runningActionsCount == 0) {
	obj70267_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70267_onTap_runningActionsCount = window.obj70267_onTap_runningActionsCount - 1;
if (window.obj70267_onTap_runningActionsCount < 0) {
	window.obj70267_onTap_runningActionsCount = 0;
} else if (window.obj70267_onTap_runningActionsCount == 0) {
	obj70267_onTap_actionGroup3();
}
	}
}









};
obj70267_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70267_onTap_activeActionGroupIndex = -1;
		$("#obj70267").trigger("obj70267_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70267) {
				console.warn("de-queueing event obj70267." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70267").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70267_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70272();
function runjs_70272() {
	window.obj70267_onTap_runningActionsCount = obj70267_onTap_runningActionsCount + 1;

	$("#obj70267").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj70267_onTap_runningActionsCount = window.obj70267_onTap_runningActionsCount - 1;
if (window.obj70267_onTap_runningActionsCount < 0) {
	window.obj70267_onTap_runningActionsCount = 0;
} else if (window.obj70267_onTap_runningActionsCount == 0) {
	obj70267_onTap_actionGroup4();
}
	}, 1);
}







};
obj70267_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70267_onTap_activeActionGroupIndex = -1;
		$("#obj70267").trigger("obj70267_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70267) {
				console.warn("de-queueing event obj70267." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70267").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70267_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70273();
function switchText_70273() {
	window.obj70267_onTap_runningActionsCount = obj70267_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70267_onTap_runningActionsCount = window.obj70267_onTap_runningActionsCount - 1;
if (window.obj70267_onTap_runningActionsCount < 0) {
	window.obj70267_onTap_runningActionsCount = 0;
} else if (window.obj70267_onTap_runningActionsCount == 0) {
	obj70267_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70267_onTap_runningActionsCount = window.obj70267_onTap_runningActionsCount - 1;
if (window.obj70267_onTap_runningActionsCount < 0) {
	window.obj70267_onTap_runningActionsCount = 0;
} else if (window.obj70267_onTap_runningActionsCount == 0) {
	obj70267_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj70267_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70267_onTap_activeActionGroupIndex = -1;
		$("#obj70267").trigger("obj70267_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70267) {
				console.warn("de-queueing event obj70267." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70267").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70267_onTap_activeActionGroupIndex = 5;
	





















};
obj70264_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70264_onTap_activeActionGroupIndex = -1;
		$("#obj70264").trigger("obj70264_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70264) {
				console.warn("de-queueing event obj70264." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70264").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70264_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70266();
function runjs_70266() {
	window.obj70264_onTap_runningActionsCount = obj70264_onTap_runningActionsCount + 1;

	$("#obj70264").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70264_onTap_runningActionsCount = window.obj70264_onTap_runningActionsCount - 1;
if (window.obj70264_onTap_runningActionsCount < 0) {
	window.obj70264_onTap_runningActionsCount = 0;
} else if (window.obj70264_onTap_runningActionsCount == 0) {
	obj70264_onTap_actionGroup1();
}
	}, 1);
}







};
obj70264_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70264_onTap_activeActionGroupIndex = -1;
		$("#obj70264").trigger("obj70264_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70264) {
				console.warn("de-queueing event obj70264." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70264").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70264_onTap_activeActionGroupIndex = 1;
	





















};
obj70256_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70256_onTap_activeActionGroupIndex = -1;
		$("#obj70256").trigger("obj70256_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70256) {
				console.warn("de-queueing event obj70256." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70256").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70256_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70258();
function runjs_70258() {
	window.obj70256_onTap_runningActionsCount = obj70256_onTap_runningActionsCount + 1;

	$("#obj70256").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70256_onTap_runningActionsCount = window.obj70256_onTap_runningActionsCount - 1;
if (window.obj70256_onTap_runningActionsCount < 0) {
	window.obj70256_onTap_runningActionsCount = 0;
} else if (window.obj70256_onTap_runningActionsCount == 0) {
	obj70256_onTap_actionGroup1();
}
	}, 1);
}







};
obj70256_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70256_onTap_activeActionGroupIndex = -1;
		$("#obj70256").trigger("obj70256_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70256) {
				console.warn("de-queueing event obj70256." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70256").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70256_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70262();
function switchText_70262() {
	window.obj70256_onTap_runningActionsCount = obj70256_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70256_onTap_runningActionsCount = window.obj70256_onTap_runningActionsCount - 1;
if (window.obj70256_onTap_runningActionsCount < 0) {
	window.obj70256_onTap_runningActionsCount = 0;
} else if (window.obj70256_onTap_runningActionsCount == 0) {
	obj70256_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70256_onTap_runningActionsCount = window.obj70256_onTap_runningActionsCount - 1;
if (window.obj70256_onTap_runningActionsCount < 0) {
	window.obj70256_onTap_runningActionsCount = 0;
} else if (window.obj70256_onTap_runningActionsCount == 0) {
	obj70256_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70256_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70256_onTap_activeActionGroupIndex = -1;
		$("#obj70256").trigger("obj70256_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70256) {
				console.warn("de-queueing event obj70256." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70256").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70256_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_70259();
function runjs_70259() {
	window.obj70256_onTap_runningActionsCount = obj70256_onTap_runningActionsCount + 1;

	$("#obj70254").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70256_onTap_runningActionsCount = window.obj70256_onTap_runningActionsCount - 1;
if (window.obj70256_onTap_runningActionsCount < 0) {
	window.obj70256_onTap_runningActionsCount = 0;
} else if (window.obj70256_onTap_runningActionsCount == 0) {
	obj70256_onTap_actionGroup3();
}
	}, 1);
}







};
obj70256_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70256_onTap_activeActionGroupIndex = -1;
		$("#obj70256").trigger("obj70256_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70256) {
				console.warn("de-queueing event obj70256." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70256").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70256_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70260();
function runjs_70260() {
	window.obj70256_onTap_runningActionsCount = obj70256_onTap_runningActionsCount + 1;

	$("#obj70252").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70256_onTap_runningActionsCount = window.obj70256_onTap_runningActionsCount - 1;
if (window.obj70256_onTap_runningActionsCount < 0) {
	window.obj70256_onTap_runningActionsCount = 0;
} else if (window.obj70256_onTap_runningActionsCount == 0) {
	obj70256_onTap_actionGroup4();
}
	}, 1);
}







};
obj70256_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70256_onTap_activeActionGroupIndex = -1;
		$("#obj70256").trigger("obj70256_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70256) {
				console.warn("de-queueing event obj70256." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70256").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70256_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70261();
function runjs_70261() {
	window.obj70256_onTap_runningActionsCount = obj70256_onTap_runningActionsCount + 1;

	$("#obj69689").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70256_onTap_runningActionsCount = window.obj70256_onTap_runningActionsCount - 1;
if (window.obj70256_onTap_runningActionsCount < 0) {
	window.obj70256_onTap_runningActionsCount = 0;
} else if (window.obj70256_onTap_runningActionsCount == 0) {
	obj70256_onTap_actionGroup5();
}
	}, 1);
}







};
obj70256_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70256_onTap_activeActionGroupIndex = -1;
		$("#obj70256").trigger("obj70256_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70256) {
				console.warn("de-queueing event obj70256." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70256").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70256_onTap_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj69707 
playAudio_70263();
function playAudio_70263() {
	window.obj70256_onTap_runningActionsCount = obj70256_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69707")[0];
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
		    window.obj70256_onTap_runningActionsCount = window.obj70256_onTap_runningActionsCount - 1;
if (window.obj70256_onTap_runningActionsCount < 0) {
	window.obj70256_onTap_runningActionsCount = 0;
} else if (window.obj70256_onTap_runningActionsCount == 0) {
	obj70256_onTap_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70256_onTap_runningActionsCount = window.obj70256_onTap_runningActionsCount - 1;
if (window.obj70256_onTap_runningActionsCount < 0) {
	window.obj70256_onTap_runningActionsCount = 0;
} else if (window.obj70256_onTap_runningActionsCount == 0) {
	obj70256_onTap_actionGroup6();
}
	}
}









};
obj70256_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70256_onTap_activeActionGroupIndex = -1;
		$("#obj70256").trigger("obj70256_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70256) {
				console.warn("de-queueing event obj70256." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70256").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70256_onTap_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90143();
function switchText_90143() {
	window.obj70256_onTap_runningActionsCount = obj70256_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70256_onTap_runningActionsCount = window.obj70256_onTap_runningActionsCount - 1;
if (window.obj70256_onTap_runningActionsCount < 0) {
	window.obj70256_onTap_runningActionsCount = 0;
} else if (window.obj70256_onTap_runningActionsCount == 0) {
	obj70256_onTap_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70256_onTap_runningActionsCount = window.obj70256_onTap_runningActionsCount - 1;
if (window.obj70256_onTap_runningActionsCount < 0) {
	window.obj70256_onTap_runningActionsCount = 0;
} else if (window.obj70256_onTap_runningActionsCount == 0) {
	obj70256_onTap_actionGroup7();
}
		}, 1);
	}
}






};
obj70256_onTap_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70256_onTap_activeActionGroupIndex = -1;
		$("#obj70256").trigger("obj70256_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70256) {
				console.warn("de-queueing event obj70256." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70256").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70256_onTap_activeActionGroupIndex = 7;
	





















};
obj70245_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70245_onTap_activeActionGroupIndex = -1;
		$("#obj70245").trigger("obj70245_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70245) {
				console.warn("de-queueing event obj70245." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70245").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70245_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_70247();
function switchText_70247() {
	window.obj70245_onTap_runningActionsCount = obj70245_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70245_onTap_runningActionsCount = window.obj70245_onTap_runningActionsCount - 1;
if (window.obj70245_onTap_runningActionsCount < 0) {
	window.obj70245_onTap_runningActionsCount = 0;
} else if (window.obj70245_onTap_runningActionsCount == 0) {
	obj70245_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70245_onTap_runningActionsCount = window.obj70245_onTap_runningActionsCount - 1;
if (window.obj70245_onTap_runningActionsCount < 0) {
	window.obj70245_onTap_runningActionsCount = 0;
} else if (window.obj70245_onTap_runningActionsCount == 0) {
	obj70245_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj70245_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70245_onTap_activeActionGroupIndex = -1;
		$("#obj70245").trigger("obj70245_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70245) {
				console.warn("de-queueing event obj70245." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70245").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70245_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70248();
function runjs_70248() {
	window.obj70245_onTap_runningActionsCount = obj70245_onTap_runningActionsCount + 1;

	$("#obj70245").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70245_onTap_runningActionsCount = window.obj70245_onTap_runningActionsCount - 1;
if (window.obj70245_onTap_runningActionsCount < 0) {
	window.obj70245_onTap_runningActionsCount = 0;
} else if (window.obj70245_onTap_runningActionsCount == 0) {
	obj70245_onTap_actionGroup2();
}
	}, 1);
}







};
obj70245_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70245_onTap_activeActionGroupIndex = -1;
		$("#obj70245").trigger("obj70245_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70245) {
				console.warn("de-queueing event obj70245." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70245").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70245_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_70249();
function playAudio_70249() {
	window.obj70245_onTap_runningActionsCount = obj70245_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj70245_onTap_runningActionsCount = window.obj70245_onTap_runningActionsCount - 1;
if (window.obj70245_onTap_runningActionsCount < 0) {
	window.obj70245_onTap_runningActionsCount = 0;
} else if (window.obj70245_onTap_runningActionsCount == 0) {
	obj70245_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70245_onTap_runningActionsCount = window.obj70245_onTap_runningActionsCount - 1;
if (window.obj70245_onTap_runningActionsCount < 0) {
	window.obj70245_onTap_runningActionsCount = 0;
} else if (window.obj70245_onTap_runningActionsCount == 0) {
	obj70245_onTap_actionGroup3();
}
	}
}









};
obj70245_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70245_onTap_activeActionGroupIndex = -1;
		$("#obj70245").trigger("obj70245_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70245) {
				console.warn("de-queueing event obj70245." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70245").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70245_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70250();
function runjs_70250() {
	window.obj70245_onTap_runningActionsCount = obj70245_onTap_runningActionsCount + 1;

	$("#obj70245").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj70245_onTap_runningActionsCount = window.obj70245_onTap_runningActionsCount - 1;
if (window.obj70245_onTap_runningActionsCount < 0) {
	window.obj70245_onTap_runningActionsCount = 0;
} else if (window.obj70245_onTap_runningActionsCount == 0) {
	obj70245_onTap_actionGroup4();
}
	}, 1);
}







};
obj70245_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70245_onTap_activeActionGroupIndex = -1;
		$("#obj70245").trigger("obj70245_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70245) {
				console.warn("de-queueing event obj70245." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70245").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70245_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70251();
function switchText_70251() {
	window.obj70245_onTap_runningActionsCount = obj70245_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70245_onTap_runningActionsCount = window.obj70245_onTap_runningActionsCount - 1;
if (window.obj70245_onTap_runningActionsCount < 0) {
	window.obj70245_onTap_runningActionsCount = 0;
} else if (window.obj70245_onTap_runningActionsCount == 0) {
	obj70245_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70245_onTap_runningActionsCount = window.obj70245_onTap_runningActionsCount - 1;
if (window.obj70245_onTap_runningActionsCount < 0) {
	window.obj70245_onTap_runningActionsCount = 0;
} else if (window.obj70245_onTap_runningActionsCount == 0) {
	obj70245_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj70245_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70245_onTap_activeActionGroupIndex = -1;
		$("#obj70245").trigger("obj70245_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70245) {
				console.warn("de-queueing event obj70245." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70245").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70245_onTap_activeActionGroupIndex = 5;
	





















};
obj70242_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70242_onTap_activeActionGroupIndex = -1;
		$("#obj70242").trigger("obj70242_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70242) {
				console.warn("de-queueing event obj70242." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70242").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70242_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70244();
function runjs_70244() {
	window.obj70242_onTap_runningActionsCount = obj70242_onTap_runningActionsCount + 1;

	$("#obj70242").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70242_onTap_runningActionsCount = window.obj70242_onTap_runningActionsCount - 1;
if (window.obj70242_onTap_runningActionsCount < 0) {
	window.obj70242_onTap_runningActionsCount = 0;
} else if (window.obj70242_onTap_runningActionsCount == 0) {
	obj70242_onTap_actionGroup1();
}
	}, 1);
}







};
obj70242_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70242_onTap_activeActionGroupIndex = -1;
		$("#obj70242").trigger("obj70242_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70242) {
				console.warn("de-queueing event obj70242." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70242").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70242_onTap_activeActionGroupIndex = 1;
	





















};
obj70235_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70235_onTap_activeActionGroupIndex = -1;
		$("#obj70235").trigger("obj70235_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70235) {
				console.warn("de-queueing event obj70235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70235_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_70237();
function switchText_70237() {
	window.obj70235_onTap_runningActionsCount = obj70235_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70235_onTap_runningActionsCount = window.obj70235_onTap_runningActionsCount - 1;
if (window.obj70235_onTap_runningActionsCount < 0) {
	window.obj70235_onTap_runningActionsCount = 0;
} else if (window.obj70235_onTap_runningActionsCount == 0) {
	obj70235_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70235_onTap_runningActionsCount = window.obj70235_onTap_runningActionsCount - 1;
if (window.obj70235_onTap_runningActionsCount < 0) {
	window.obj70235_onTap_runningActionsCount = 0;
} else if (window.obj70235_onTap_runningActionsCount == 0) {
	obj70235_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj70235_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70235_onTap_activeActionGroupIndex = -1;
		$("#obj70235").trigger("obj70235_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70235) {
				console.warn("de-queueing event obj70235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70235_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70238();
function runjs_70238() {
	window.obj70235_onTap_runningActionsCount = obj70235_onTap_runningActionsCount + 1;

	$("#obj70235").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70235_onTap_runningActionsCount = window.obj70235_onTap_runningActionsCount - 1;
if (window.obj70235_onTap_runningActionsCount < 0) {
	window.obj70235_onTap_runningActionsCount = 0;
} else if (window.obj70235_onTap_runningActionsCount == 0) {
	obj70235_onTap_actionGroup2();
}
	}, 1);
}







};
obj70235_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70235_onTap_activeActionGroupIndex = -1;
		$("#obj70235").trigger("obj70235_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70235) {
				console.warn("de-queueing event obj70235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70235_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_70239();
function playAudio_70239() {
	window.obj70235_onTap_runningActionsCount = obj70235_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj70235_onTap_runningActionsCount = window.obj70235_onTap_runningActionsCount - 1;
if (window.obj70235_onTap_runningActionsCount < 0) {
	window.obj70235_onTap_runningActionsCount = 0;
} else if (window.obj70235_onTap_runningActionsCount == 0) {
	obj70235_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70235_onTap_runningActionsCount = window.obj70235_onTap_runningActionsCount - 1;
if (window.obj70235_onTap_runningActionsCount < 0) {
	window.obj70235_onTap_runningActionsCount = 0;
} else if (window.obj70235_onTap_runningActionsCount == 0) {
	obj70235_onTap_actionGroup3();
}
	}
}









};
obj70235_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70235_onTap_activeActionGroupIndex = -1;
		$("#obj70235").trigger("obj70235_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70235) {
				console.warn("de-queueing event obj70235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70235_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70240();
function runjs_70240() {
	window.obj70235_onTap_runningActionsCount = obj70235_onTap_runningActionsCount + 1;

	$("#obj70235").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj70235_onTap_runningActionsCount = window.obj70235_onTap_runningActionsCount - 1;
if (window.obj70235_onTap_runningActionsCount < 0) {
	window.obj70235_onTap_runningActionsCount = 0;
} else if (window.obj70235_onTap_runningActionsCount == 0) {
	obj70235_onTap_actionGroup4();
}
	}, 1);
}







};
obj70235_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70235_onTap_activeActionGroupIndex = -1;
		$("#obj70235").trigger("obj70235_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70235) {
				console.warn("de-queueing event obj70235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70235_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70241();
function switchText_70241() {
	window.obj70235_onTap_runningActionsCount = obj70235_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70235_onTap_runningActionsCount = window.obj70235_onTap_runningActionsCount - 1;
if (window.obj70235_onTap_runningActionsCount < 0) {
	window.obj70235_onTap_runningActionsCount = 0;
} else if (window.obj70235_onTap_runningActionsCount == 0) {
	obj70235_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70235_onTap_runningActionsCount = window.obj70235_onTap_runningActionsCount - 1;
if (window.obj70235_onTap_runningActionsCount < 0) {
	window.obj70235_onTap_runningActionsCount = 0;
} else if (window.obj70235_onTap_runningActionsCount == 0) {
	obj70235_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj70235_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70235_onTap_activeActionGroupIndex = -1;
		$("#obj70235").trigger("obj70235_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70235) {
				console.warn("de-queueing event obj70235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70235_onTap_activeActionGroupIndex = 5;
	





















};
obj70228_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70228_onTap_activeActionGroupIndex = -1;
		$("#obj70228").trigger("obj70228_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70228) {
				console.warn("de-queueing event obj70228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70228_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_70230();
function switchText_70230() {
	window.obj70228_onTap_runningActionsCount = obj70228_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70228_onTap_runningActionsCount = window.obj70228_onTap_runningActionsCount - 1;
if (window.obj70228_onTap_runningActionsCount < 0) {
	window.obj70228_onTap_runningActionsCount = 0;
} else if (window.obj70228_onTap_runningActionsCount == 0) {
	obj70228_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70228_onTap_runningActionsCount = window.obj70228_onTap_runningActionsCount - 1;
if (window.obj70228_onTap_runningActionsCount < 0) {
	window.obj70228_onTap_runningActionsCount = 0;
} else if (window.obj70228_onTap_runningActionsCount == 0) {
	obj70228_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj70228_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70228_onTap_activeActionGroupIndex = -1;
		$("#obj70228").trigger("obj70228_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70228) {
				console.warn("de-queueing event obj70228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70228_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70231();
function runjs_70231() {
	window.obj70228_onTap_runningActionsCount = obj70228_onTap_runningActionsCount + 1;

	$("#obj70228").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70228_onTap_runningActionsCount = window.obj70228_onTap_runningActionsCount - 1;
if (window.obj70228_onTap_runningActionsCount < 0) {
	window.obj70228_onTap_runningActionsCount = 0;
} else if (window.obj70228_onTap_runningActionsCount == 0) {
	obj70228_onTap_actionGroup2();
}
	}, 1);
}







};
obj70228_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70228_onTap_activeActionGroupIndex = -1;
		$("#obj70228").trigger("obj70228_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70228) {
				console.warn("de-queueing event obj70228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70228_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_70232();
function playAudio_70232() {
	window.obj70228_onTap_runningActionsCount = obj70228_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj70228_onTap_runningActionsCount = window.obj70228_onTap_runningActionsCount - 1;
if (window.obj70228_onTap_runningActionsCount < 0) {
	window.obj70228_onTap_runningActionsCount = 0;
} else if (window.obj70228_onTap_runningActionsCount == 0) {
	obj70228_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70228_onTap_runningActionsCount = window.obj70228_onTap_runningActionsCount - 1;
if (window.obj70228_onTap_runningActionsCount < 0) {
	window.obj70228_onTap_runningActionsCount = 0;
} else if (window.obj70228_onTap_runningActionsCount == 0) {
	obj70228_onTap_actionGroup3();
}
	}
}









};
obj70228_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70228_onTap_activeActionGroupIndex = -1;
		$("#obj70228").trigger("obj70228_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70228) {
				console.warn("de-queueing event obj70228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70228_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70233();
function runjs_70233() {
	window.obj70228_onTap_runningActionsCount = obj70228_onTap_runningActionsCount + 1;

	$("#obj70228").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj70228_onTap_runningActionsCount = window.obj70228_onTap_runningActionsCount - 1;
if (window.obj70228_onTap_runningActionsCount < 0) {
	window.obj70228_onTap_runningActionsCount = 0;
} else if (window.obj70228_onTap_runningActionsCount == 0) {
	obj70228_onTap_actionGroup4();
}
	}, 1);
}







};
obj70228_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70228_onTap_activeActionGroupIndex = -1;
		$("#obj70228").trigger("obj70228_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70228) {
				console.warn("de-queueing event obj70228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70228_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70234();
function switchText_70234() {
	window.obj70228_onTap_runningActionsCount = obj70228_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70228_onTap_runningActionsCount = window.obj70228_onTap_runningActionsCount - 1;
if (window.obj70228_onTap_runningActionsCount < 0) {
	window.obj70228_onTap_runningActionsCount = 0;
} else if (window.obj70228_onTap_runningActionsCount == 0) {
	obj70228_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70228_onTap_runningActionsCount = window.obj70228_onTap_runningActionsCount - 1;
if (window.obj70228_onTap_runningActionsCount < 0) {
	window.obj70228_onTap_runningActionsCount = 0;
} else if (window.obj70228_onTap_runningActionsCount == 0) {
	obj70228_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj70228_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70228_onTap_activeActionGroupIndex = -1;
		$("#obj70228").trigger("obj70228_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70228) {
				console.warn("de-queueing event obj70228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70228_onTap_activeActionGroupIndex = 5;
	





















};
obj70225_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70225_onTap_activeActionGroupIndex = -1;
		$("#obj70225").trigger("obj70225_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70225) {
				console.warn("de-queueing event obj70225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70225_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70227();
function runjs_70227() {
	window.obj70225_onTap_runningActionsCount = obj70225_onTap_runningActionsCount + 1;

	$("#obj70225").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70225_onTap_runningActionsCount = window.obj70225_onTap_runningActionsCount - 1;
if (window.obj70225_onTap_runningActionsCount < 0) {
	window.obj70225_onTap_runningActionsCount = 0;
} else if (window.obj70225_onTap_runningActionsCount == 0) {
	obj70225_onTap_actionGroup1();
}
	}, 1);
}







};
obj70225_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70225_onTap_activeActionGroupIndex = -1;
		$("#obj70225").trigger("obj70225_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70225) {
				console.warn("de-queueing event obj70225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70225_onTap_activeActionGroupIndex = 1;
	





















};
obj70218_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70218_onTap_activeActionGroupIndex = -1;
		$("#obj70218").trigger("obj70218_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70218) {
				console.warn("de-queueing event obj70218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70218_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70220();
function runjs_70220() {
	window.obj70218_onTap_runningActionsCount = obj70218_onTap_runningActionsCount + 1;

	$("#obj70218").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70218_onTap_runningActionsCount = window.obj70218_onTap_runningActionsCount - 1;
if (window.obj70218_onTap_runningActionsCount < 0) {
	window.obj70218_onTap_runningActionsCount = 0;
} else if (window.obj70218_onTap_runningActionsCount == 0) {
	obj70218_onTap_actionGroup1();
}
	}, 1);
}







};
obj70218_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70218_onTap_activeActionGroupIndex = -1;
		$("#obj70218").trigger("obj70218_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70218) {
				console.warn("de-queueing event obj70218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70218_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70223();
function switchText_70223() {
	window.obj70218_onTap_runningActionsCount = obj70218_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70218_onTap_runningActionsCount = window.obj70218_onTap_runningActionsCount - 1;
if (window.obj70218_onTap_runningActionsCount < 0) {
	window.obj70218_onTap_runningActionsCount = 0;
} else if (window.obj70218_onTap_runningActionsCount == 0) {
	obj70218_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70218_onTap_runningActionsCount = window.obj70218_onTap_runningActionsCount - 1;
if (window.obj70218_onTap_runningActionsCount < 0) {
	window.obj70218_onTap_runningActionsCount = 0;
} else if (window.obj70218_onTap_runningActionsCount == 0) {
	obj70218_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70218_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70218_onTap_activeActionGroupIndex = -1;
		$("#obj70218").trigger("obj70218_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70218) {
				console.warn("de-queueing event obj70218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70218_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_70221();
function runjs_70221() {
	window.obj70218_onTap_runningActionsCount = obj70218_onTap_runningActionsCount + 1;

	$("#obj70216").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70218_onTap_runningActionsCount = window.obj70218_onTap_runningActionsCount - 1;
if (window.obj70218_onTap_runningActionsCount < 0) {
	window.obj70218_onTap_runningActionsCount = 0;
} else if (window.obj70218_onTap_runningActionsCount == 0) {
	obj70218_onTap_actionGroup3();
}
	}, 1);
}







};
obj70218_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70218_onTap_activeActionGroupIndex = -1;
		$("#obj70218").trigger("obj70218_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70218) {
				console.warn("de-queueing event obj70218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70218_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70222();
function runjs_70222() {
	window.obj70218_onTap_runningActionsCount = obj70218_onTap_runningActionsCount + 1;

	$("#obj69699").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70218_onTap_runningActionsCount = window.obj70218_onTap_runningActionsCount - 1;
if (window.obj70218_onTap_runningActionsCount < 0) {
	window.obj70218_onTap_runningActionsCount = 0;
} else if (window.obj70218_onTap_runningActionsCount == 0) {
	obj70218_onTap_actionGroup4();
}
	}, 1);
}







};
obj70218_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70218_onTap_activeActionGroupIndex = -1;
		$("#obj70218").trigger("obj70218_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70218) {
				console.warn("de-queueing event obj70218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70218_onTap_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj69707 
playAudio_70224();
function playAudio_70224() {
	window.obj70218_onTap_runningActionsCount = obj70218_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69707")[0];
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
		    window.obj70218_onTap_runningActionsCount = window.obj70218_onTap_runningActionsCount - 1;
if (window.obj70218_onTap_runningActionsCount < 0) {
	window.obj70218_onTap_runningActionsCount = 0;
} else if (window.obj70218_onTap_runningActionsCount == 0) {
	obj70218_onTap_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70218_onTap_runningActionsCount = window.obj70218_onTap_runningActionsCount - 1;
if (window.obj70218_onTap_runningActionsCount < 0) {
	window.obj70218_onTap_runningActionsCount = 0;
} else if (window.obj70218_onTap_runningActionsCount == 0) {
	obj70218_onTap_actionGroup5();
}
	}
}









};
obj70218_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70218_onTap_activeActionGroupIndex = -1;
		$("#obj70218").trigger("obj70218_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70218) {
				console.warn("de-queueing event obj70218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70218_onTap_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90148();
function switchText_90148() {
	window.obj70218_onTap_runningActionsCount = obj70218_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70218_onTap_runningActionsCount = window.obj70218_onTap_runningActionsCount - 1;
if (window.obj70218_onTap_runningActionsCount < 0) {
	window.obj70218_onTap_runningActionsCount = 0;
} else if (window.obj70218_onTap_runningActionsCount == 0) {
	obj70218_onTap_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70218_onTap_runningActionsCount = window.obj70218_onTap_runningActionsCount - 1;
if (window.obj70218_onTap_runningActionsCount < 0) {
	window.obj70218_onTap_runningActionsCount = 0;
} else if (window.obj70218_onTap_runningActionsCount == 0) {
	obj70218_onTap_actionGroup6();
}
		}, 1);
	}
}






};
obj70218_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70218_onTap_activeActionGroupIndex = -1;
		$("#obj70218").trigger("obj70218_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70218) {
				console.warn("de-queueing event obj70218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70218_onTap_activeActionGroupIndex = 6;
	





















};
obj70209_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70209_onTap_activeActionGroupIndex = -1;
		$("#obj70209").trigger("obj70209_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70209) {
				console.warn("de-queueing event obj70209." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70209").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70209_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_70211();
function switchText_70211() {
	window.obj70209_onTap_runningActionsCount = obj70209_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70209_onTap_runningActionsCount = window.obj70209_onTap_runningActionsCount - 1;
if (window.obj70209_onTap_runningActionsCount < 0) {
	window.obj70209_onTap_runningActionsCount = 0;
} else if (window.obj70209_onTap_runningActionsCount == 0) {
	obj70209_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70209_onTap_runningActionsCount = window.obj70209_onTap_runningActionsCount - 1;
if (window.obj70209_onTap_runningActionsCount < 0) {
	window.obj70209_onTap_runningActionsCount = 0;
} else if (window.obj70209_onTap_runningActionsCount == 0) {
	obj70209_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj70209_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70209_onTap_activeActionGroupIndex = -1;
		$("#obj70209").trigger("obj70209_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70209) {
				console.warn("de-queueing event obj70209." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70209").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70209_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70212();
function runjs_70212() {
	window.obj70209_onTap_runningActionsCount = obj70209_onTap_runningActionsCount + 1;

	$("#obj70209").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70209_onTap_runningActionsCount = window.obj70209_onTap_runningActionsCount - 1;
if (window.obj70209_onTap_runningActionsCount < 0) {
	window.obj70209_onTap_runningActionsCount = 0;
} else if (window.obj70209_onTap_runningActionsCount == 0) {
	obj70209_onTap_actionGroup2();
}
	}, 1);
}







};
obj70209_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70209_onTap_activeActionGroupIndex = -1;
		$("#obj70209").trigger("obj70209_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70209) {
				console.warn("de-queueing event obj70209." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70209").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70209_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_70213();
function playAudio_70213() {
	window.obj70209_onTap_runningActionsCount = obj70209_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj70209_onTap_runningActionsCount = window.obj70209_onTap_runningActionsCount - 1;
if (window.obj70209_onTap_runningActionsCount < 0) {
	window.obj70209_onTap_runningActionsCount = 0;
} else if (window.obj70209_onTap_runningActionsCount == 0) {
	obj70209_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70209_onTap_runningActionsCount = window.obj70209_onTap_runningActionsCount - 1;
if (window.obj70209_onTap_runningActionsCount < 0) {
	window.obj70209_onTap_runningActionsCount = 0;
} else if (window.obj70209_onTap_runningActionsCount == 0) {
	obj70209_onTap_actionGroup3();
}
	}
}









};
obj70209_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70209_onTap_activeActionGroupIndex = -1;
		$("#obj70209").trigger("obj70209_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70209) {
				console.warn("de-queueing event obj70209." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70209").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70209_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70214();
function runjs_70214() {
	window.obj70209_onTap_runningActionsCount = obj70209_onTap_runningActionsCount + 1;

	$("#obj70209").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj70209_onTap_runningActionsCount = window.obj70209_onTap_runningActionsCount - 1;
if (window.obj70209_onTap_runningActionsCount < 0) {
	window.obj70209_onTap_runningActionsCount = 0;
} else if (window.obj70209_onTap_runningActionsCount == 0) {
	obj70209_onTap_actionGroup4();
}
	}, 1);
}







};
obj70209_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70209_onTap_activeActionGroupIndex = -1;
		$("#obj70209").trigger("obj70209_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70209) {
				console.warn("de-queueing event obj70209." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70209").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70209_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70215();
function switchText_70215() {
	window.obj70209_onTap_runningActionsCount = obj70209_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70209_onTap_runningActionsCount = window.obj70209_onTap_runningActionsCount - 1;
if (window.obj70209_onTap_runningActionsCount < 0) {
	window.obj70209_onTap_runningActionsCount = 0;
} else if (window.obj70209_onTap_runningActionsCount == 0) {
	obj70209_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70209_onTap_runningActionsCount = window.obj70209_onTap_runningActionsCount - 1;
if (window.obj70209_onTap_runningActionsCount < 0) {
	window.obj70209_onTap_runningActionsCount = 0;
} else if (window.obj70209_onTap_runningActionsCount == 0) {
	obj70209_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj70209_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70209_onTap_activeActionGroupIndex = -1;
		$("#obj70209").trigger("obj70209_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70209) {
				console.warn("de-queueing event obj70209." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70209").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70209_onTap_activeActionGroupIndex = 5;
	





















};
obj70206_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70206_onTap_activeActionGroupIndex = -1;
		$("#obj70206").trigger("obj70206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70206) {
				console.warn("de-queueing event obj70206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70206_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70208();
function runjs_70208() {
	window.obj70206_onTap_runningActionsCount = obj70206_onTap_runningActionsCount + 1;

	$("#obj70206").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70206_onTap_runningActionsCount = window.obj70206_onTap_runningActionsCount - 1;
if (window.obj70206_onTap_runningActionsCount < 0) {
	window.obj70206_onTap_runningActionsCount = 0;
} else if (window.obj70206_onTap_runningActionsCount == 0) {
	obj70206_onTap_actionGroup1();
}
	}, 1);
}







};
obj70206_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70206_onTap_activeActionGroupIndex = -1;
		$("#obj70206").trigger("obj70206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70206) {
				console.warn("de-queueing event obj70206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70206_onTap_activeActionGroupIndex = 1;
	





















};
obj70197_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70197_onTap_activeActionGroupIndex = -1;
		$("#obj70197").trigger("obj70197_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70197) {
				console.warn("de-queueing event obj70197." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70197").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70197_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70199();
function runjs_70199() {
	window.obj70197_onTap_runningActionsCount = obj70197_onTap_runningActionsCount + 1;

	$("#obj70197").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70197_onTap_runningActionsCount = window.obj70197_onTap_runningActionsCount - 1;
if (window.obj70197_onTap_runningActionsCount < 0) {
	window.obj70197_onTap_runningActionsCount = 0;
} else if (window.obj70197_onTap_runningActionsCount == 0) {
	obj70197_onTap_actionGroup1();
}
	}, 1);
}







};
obj70197_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70197_onTap_activeActionGroupIndex = -1;
		$("#obj70197").trigger("obj70197_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70197) {
				console.warn("de-queueing event obj70197." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70197").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70197_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70200();
function runjs_70200() {
	window.obj70197_onTap_runningActionsCount = obj70197_onTap_runningActionsCount + 1;

	$("#obj70147").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70197_onTap_runningActionsCount = window.obj70197_onTap_runningActionsCount - 1;
if (window.obj70197_onTap_runningActionsCount < 0) {
	window.obj70197_onTap_runningActionsCount = 0;
} else if (window.obj70197_onTap_runningActionsCount == 0) {
	obj70197_onTap_actionGroup2();
}
	}, 1);
}







};
obj70197_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70197_onTap_activeActionGroupIndex = -1;
		$("#obj70197").trigger("obj70197_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70197) {
				console.warn("de-queueing event obj70197." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70197").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70197_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_70201();
function runjs_70201() {
	window.obj70197_onTap_runningActionsCount = obj70197_onTap_runningActionsCount + 1;

	$("#obj70094").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70197_onTap_runningActionsCount = window.obj70197_onTap_runningActionsCount - 1;
if (window.obj70197_onTap_runningActionsCount < 0) {
	window.obj70197_onTap_runningActionsCount = 0;
} else if (window.obj70197_onTap_runningActionsCount == 0) {
	obj70197_onTap_actionGroup3();
}
	}, 1);
}







};
obj70197_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70197_onTap_activeActionGroupIndex = -1;
		$("#obj70197").trigger("obj70197_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70197) {
				console.warn("de-queueing event obj70197." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70197").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70197_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70202();
function runjs_70202() {
	window.obj70197_onTap_runningActionsCount = obj70197_onTap_runningActionsCount + 1;

	$("#obj70060").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70197_onTap_runningActionsCount = window.obj70197_onTap_runningActionsCount - 1;
if (window.obj70197_onTap_runningActionsCount < 0) {
	window.obj70197_onTap_runningActionsCount = 0;
} else if (window.obj70197_onTap_runningActionsCount == 0) {
	obj70197_onTap_actionGroup4();
}
	}, 1);
}







};
obj70197_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70197_onTap_activeActionGroupIndex = -1;
		$("#obj70197").trigger("obj70197_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70197) {
				console.warn("de-queueing event obj70197." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70197").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70197_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_90594();
function runjs_90594() {
	window.obj70197_onTap_runningActionsCount = obj70197_onTap_runningActionsCount + 1;

	$("#obj69701").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70197_onTap_runningActionsCount = window.obj70197_onTap_runningActionsCount - 1;
if (window.obj70197_onTap_runningActionsCount < 0) {
	window.obj70197_onTap_runningActionsCount = 0;
} else if (window.obj70197_onTap_runningActionsCount == 0) {
	obj70197_onTap_actionGroup5();
}
	}, 1);
}







};
obj70197_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70197_onTap_activeActionGroupIndex = -1;
		$("#obj70197").trigger("obj70197_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70197) {
				console.warn("de-queueing event obj70197." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70197").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70197_onTap_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj69707 
playAudio_70205();
function playAudio_70205() {
	window.obj70197_onTap_runningActionsCount = obj70197_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69707")[0];
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
		    window.obj70197_onTap_runningActionsCount = window.obj70197_onTap_runningActionsCount - 1;
if (window.obj70197_onTap_runningActionsCount < 0) {
	window.obj70197_onTap_runningActionsCount = 0;
} else if (window.obj70197_onTap_runningActionsCount == 0) {
	obj70197_onTap_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70197_onTap_runningActionsCount = window.obj70197_onTap_runningActionsCount - 1;
if (window.obj70197_onTap_runningActionsCount < 0) {
	window.obj70197_onTap_runningActionsCount = 0;
} else if (window.obj70197_onTap_runningActionsCount == 0) {
	obj70197_onTap_actionGroup6();
}
	}
}









};
obj70197_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70197_onTap_activeActionGroupIndex = -1;
		$("#obj70197").trigger("obj70197_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70197) {
				console.warn("de-queueing event obj70197." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70197").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70197_onTap_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_70204();
function switchText_70204() {
	window.obj70197_onTap_runningActionsCount = obj70197_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70197_onTap_runningActionsCount = window.obj70197_onTap_runningActionsCount - 1;
if (window.obj70197_onTap_runningActionsCount < 0) {
	window.obj70197_onTap_runningActionsCount = 0;
} else if (window.obj70197_onTap_runningActionsCount == 0) {
	obj70197_onTap_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70197_onTap_runningActionsCount = window.obj70197_onTap_runningActionsCount - 1;
if (window.obj70197_onTap_runningActionsCount < 0) {
	window.obj70197_onTap_runningActionsCount = 0;
} else if (window.obj70197_onTap_runningActionsCount == 0) {
	obj70197_onTap_actionGroup7();
}
		}, 1);
	}
}






};
obj70197_onTap_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70197_onTap_activeActionGroupIndex = -1;
		$("#obj70197").trigger("obj70197_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70197) {
				console.warn("de-queueing event obj70197." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70197").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70197_onTap_activeActionGroupIndex = 7;
	





















};
obj70194_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70194_onTap_activeActionGroupIndex = -1;
		$("#obj70194").trigger("obj70194_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70194) {
				console.warn("de-queueing event obj70194." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70194").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70194_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70196();
function runjs_70196() {
	window.obj70194_onTap_runningActionsCount = obj70194_onTap_runningActionsCount + 1;

	$("#obj70194").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70194_onTap_runningActionsCount = window.obj70194_onTap_runningActionsCount - 1;
if (window.obj70194_onTap_runningActionsCount < 0) {
	window.obj70194_onTap_runningActionsCount = 0;
} else if (window.obj70194_onTap_runningActionsCount == 0) {
	obj70194_onTap_actionGroup1();
}
	}, 1);
}







};
obj70194_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70194_onTap_activeActionGroupIndex = -1;
		$("#obj70194").trigger("obj70194_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70194) {
				console.warn("de-queueing event obj70194." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70194").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70194_onTap_activeActionGroupIndex = 1;
	





















};
obj70187_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70187_onTap_activeActionGroupIndex = -1;
		$("#obj70187").trigger("obj70187_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70187) {
				console.warn("de-queueing event obj70187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70187_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_70189();
function switchText_70189() {
	window.obj70187_onTap_runningActionsCount = obj70187_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70187_onTap_runningActionsCount = window.obj70187_onTap_runningActionsCount - 1;
if (window.obj70187_onTap_runningActionsCount < 0) {
	window.obj70187_onTap_runningActionsCount = 0;
} else if (window.obj70187_onTap_runningActionsCount == 0) {
	obj70187_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70187_onTap_runningActionsCount = window.obj70187_onTap_runningActionsCount - 1;
if (window.obj70187_onTap_runningActionsCount < 0) {
	window.obj70187_onTap_runningActionsCount = 0;
} else if (window.obj70187_onTap_runningActionsCount == 0) {
	obj70187_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj70187_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70187_onTap_activeActionGroupIndex = -1;
		$("#obj70187").trigger("obj70187_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70187) {
				console.warn("de-queueing event obj70187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70187_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70190();
function runjs_70190() {
	window.obj70187_onTap_runningActionsCount = obj70187_onTap_runningActionsCount + 1;

	$("#obj70187").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70187_onTap_runningActionsCount = window.obj70187_onTap_runningActionsCount - 1;
if (window.obj70187_onTap_runningActionsCount < 0) {
	window.obj70187_onTap_runningActionsCount = 0;
} else if (window.obj70187_onTap_runningActionsCount == 0) {
	obj70187_onTap_actionGroup2();
}
	}, 1);
}







};
obj70187_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70187_onTap_activeActionGroupIndex = -1;
		$("#obj70187").trigger("obj70187_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70187) {
				console.warn("de-queueing event obj70187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70187_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_70191();
function playAudio_70191() {
	window.obj70187_onTap_runningActionsCount = obj70187_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj70187_onTap_runningActionsCount = window.obj70187_onTap_runningActionsCount - 1;
if (window.obj70187_onTap_runningActionsCount < 0) {
	window.obj70187_onTap_runningActionsCount = 0;
} else if (window.obj70187_onTap_runningActionsCount == 0) {
	obj70187_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70187_onTap_runningActionsCount = window.obj70187_onTap_runningActionsCount - 1;
if (window.obj70187_onTap_runningActionsCount < 0) {
	window.obj70187_onTap_runningActionsCount = 0;
} else if (window.obj70187_onTap_runningActionsCount == 0) {
	obj70187_onTap_actionGroup3();
}
	}
}









};
obj70187_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70187_onTap_activeActionGroupIndex = -1;
		$("#obj70187").trigger("obj70187_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70187) {
				console.warn("de-queueing event obj70187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70187_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70192();
function runjs_70192() {
	window.obj70187_onTap_runningActionsCount = obj70187_onTap_runningActionsCount + 1;

	$("#obj70187").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj70187_onTap_runningActionsCount = window.obj70187_onTap_runningActionsCount - 1;
if (window.obj70187_onTap_runningActionsCount < 0) {
	window.obj70187_onTap_runningActionsCount = 0;
} else if (window.obj70187_onTap_runningActionsCount == 0) {
	obj70187_onTap_actionGroup4();
}
	}, 1);
}







};
obj70187_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70187_onTap_activeActionGroupIndex = -1;
		$("#obj70187").trigger("obj70187_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70187) {
				console.warn("de-queueing event obj70187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70187_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70193();
function switchText_70193() {
	window.obj70187_onTap_runningActionsCount = obj70187_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70187_onTap_runningActionsCount = window.obj70187_onTap_runningActionsCount - 1;
if (window.obj70187_onTap_runningActionsCount < 0) {
	window.obj70187_onTap_runningActionsCount = 0;
} else if (window.obj70187_onTap_runningActionsCount == 0) {
	obj70187_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70187_onTap_runningActionsCount = window.obj70187_onTap_runningActionsCount - 1;
if (window.obj70187_onTap_runningActionsCount < 0) {
	window.obj70187_onTap_runningActionsCount = 0;
} else if (window.obj70187_onTap_runningActionsCount == 0) {
	obj70187_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj70187_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70187_onTap_activeActionGroupIndex = -1;
		$("#obj70187").trigger("obj70187_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70187) {
				console.warn("de-queueing event obj70187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70187_onTap_activeActionGroupIndex = 5;
	





















};
obj70180_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70180_onTap_activeActionGroupIndex = -1;
		$("#obj70180").trigger("obj70180_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70180) {
				console.warn("de-queueing event obj70180." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70180").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70180_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_70182();
function switchText_70182() {
	window.obj70180_onTap_runningActionsCount = obj70180_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70180_onTap_runningActionsCount = window.obj70180_onTap_runningActionsCount - 1;
if (window.obj70180_onTap_runningActionsCount < 0) {
	window.obj70180_onTap_runningActionsCount = 0;
} else if (window.obj70180_onTap_runningActionsCount == 0) {
	obj70180_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70180_onTap_runningActionsCount = window.obj70180_onTap_runningActionsCount - 1;
if (window.obj70180_onTap_runningActionsCount < 0) {
	window.obj70180_onTap_runningActionsCount = 0;
} else if (window.obj70180_onTap_runningActionsCount == 0) {
	obj70180_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj70180_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70180_onTap_activeActionGroupIndex = -1;
		$("#obj70180").trigger("obj70180_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70180) {
				console.warn("de-queueing event obj70180." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70180").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70180_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70183();
function runjs_70183() {
	window.obj70180_onTap_runningActionsCount = obj70180_onTap_runningActionsCount + 1;

	$("#obj70180").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70180_onTap_runningActionsCount = window.obj70180_onTap_runningActionsCount - 1;
if (window.obj70180_onTap_runningActionsCount < 0) {
	window.obj70180_onTap_runningActionsCount = 0;
} else if (window.obj70180_onTap_runningActionsCount == 0) {
	obj70180_onTap_actionGroup2();
}
	}, 1);
}







};
obj70180_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70180_onTap_activeActionGroupIndex = -1;
		$("#obj70180").trigger("obj70180_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70180) {
				console.warn("de-queueing event obj70180." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70180").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70180_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_70184();
function playAudio_70184() {
	window.obj70180_onTap_runningActionsCount = obj70180_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj70180_onTap_runningActionsCount = window.obj70180_onTap_runningActionsCount - 1;
if (window.obj70180_onTap_runningActionsCount < 0) {
	window.obj70180_onTap_runningActionsCount = 0;
} else if (window.obj70180_onTap_runningActionsCount == 0) {
	obj70180_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70180_onTap_runningActionsCount = window.obj70180_onTap_runningActionsCount - 1;
if (window.obj70180_onTap_runningActionsCount < 0) {
	window.obj70180_onTap_runningActionsCount = 0;
} else if (window.obj70180_onTap_runningActionsCount == 0) {
	obj70180_onTap_actionGroup3();
}
	}
}









};
obj70180_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70180_onTap_activeActionGroupIndex = -1;
		$("#obj70180").trigger("obj70180_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70180) {
				console.warn("de-queueing event obj70180." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70180").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70180_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70185();
function runjs_70185() {
	window.obj70180_onTap_runningActionsCount = obj70180_onTap_runningActionsCount + 1;

	$("#obj70180").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj70180_onTap_runningActionsCount = window.obj70180_onTap_runningActionsCount - 1;
if (window.obj70180_onTap_runningActionsCount < 0) {
	window.obj70180_onTap_runningActionsCount = 0;
} else if (window.obj70180_onTap_runningActionsCount == 0) {
	obj70180_onTap_actionGroup4();
}
	}, 1);
}







};
obj70180_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70180_onTap_activeActionGroupIndex = -1;
		$("#obj70180").trigger("obj70180_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70180) {
				console.warn("de-queueing event obj70180." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70180").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70180_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70186();
function switchText_70186() {
	window.obj70180_onTap_runningActionsCount = obj70180_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70180_onTap_runningActionsCount = window.obj70180_onTap_runningActionsCount - 1;
if (window.obj70180_onTap_runningActionsCount < 0) {
	window.obj70180_onTap_runningActionsCount = 0;
} else if (window.obj70180_onTap_runningActionsCount == 0) {
	obj70180_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70180_onTap_runningActionsCount = window.obj70180_onTap_runningActionsCount - 1;
if (window.obj70180_onTap_runningActionsCount < 0) {
	window.obj70180_onTap_runningActionsCount = 0;
} else if (window.obj70180_onTap_runningActionsCount == 0) {
	obj70180_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj70180_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70180_onTap_activeActionGroupIndex = -1;
		$("#obj70180").trigger("obj70180_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70180) {
				console.warn("de-queueing event obj70180." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70180").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70180_onTap_activeActionGroupIndex = 5;
	





















};
obj70177_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70177_onTap_activeActionGroupIndex = -1;
		$("#obj70177").trigger("obj70177_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70177) {
				console.warn("de-queueing event obj70177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70177_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70179();
function runjs_70179() {
	window.obj70177_onTap_runningActionsCount = obj70177_onTap_runningActionsCount + 1;

	$("#obj70177").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70177_onTap_runningActionsCount = window.obj70177_onTap_runningActionsCount - 1;
if (window.obj70177_onTap_runningActionsCount < 0) {
	window.obj70177_onTap_runningActionsCount = 0;
} else if (window.obj70177_onTap_runningActionsCount == 0) {
	obj70177_onTap_actionGroup1();
}
	}, 1);
}







};
obj70177_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70177_onTap_activeActionGroupIndex = -1;
		$("#obj70177").trigger("obj70177_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70177) {
				console.warn("de-queueing event obj70177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70177_onTap_activeActionGroupIndex = 1;
	





















};
obj70170_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70170_onTap_activeActionGroupIndex = -1;
		$("#obj70170").trigger("obj70170_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70170) {
				console.warn("de-queueing event obj70170." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70170").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70170_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_70172();
function switchText_70172() {
	window.obj70170_onTap_runningActionsCount = obj70170_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70170_onTap_runningActionsCount = window.obj70170_onTap_runningActionsCount - 1;
if (window.obj70170_onTap_runningActionsCount < 0) {
	window.obj70170_onTap_runningActionsCount = 0;
} else if (window.obj70170_onTap_runningActionsCount == 0) {
	obj70170_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70170_onTap_runningActionsCount = window.obj70170_onTap_runningActionsCount - 1;
if (window.obj70170_onTap_runningActionsCount < 0) {
	window.obj70170_onTap_runningActionsCount = 0;
} else if (window.obj70170_onTap_runningActionsCount == 0) {
	obj70170_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj70170_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70170_onTap_activeActionGroupIndex = -1;
		$("#obj70170").trigger("obj70170_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70170) {
				console.warn("de-queueing event obj70170." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70170").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70170_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70173();
function runjs_70173() {
	window.obj70170_onTap_runningActionsCount = obj70170_onTap_runningActionsCount + 1;

	$("#obj70170").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70170_onTap_runningActionsCount = window.obj70170_onTap_runningActionsCount - 1;
if (window.obj70170_onTap_runningActionsCount < 0) {
	window.obj70170_onTap_runningActionsCount = 0;
} else if (window.obj70170_onTap_runningActionsCount == 0) {
	obj70170_onTap_actionGroup2();
}
	}, 1);
}







};
obj70170_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70170_onTap_activeActionGroupIndex = -1;
		$("#obj70170").trigger("obj70170_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70170) {
				console.warn("de-queueing event obj70170." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70170").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70170_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_70174();
function playAudio_70174() {
	window.obj70170_onTap_runningActionsCount = obj70170_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj70170_onTap_runningActionsCount = window.obj70170_onTap_runningActionsCount - 1;
if (window.obj70170_onTap_runningActionsCount < 0) {
	window.obj70170_onTap_runningActionsCount = 0;
} else if (window.obj70170_onTap_runningActionsCount == 0) {
	obj70170_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70170_onTap_runningActionsCount = window.obj70170_onTap_runningActionsCount - 1;
if (window.obj70170_onTap_runningActionsCount < 0) {
	window.obj70170_onTap_runningActionsCount = 0;
} else if (window.obj70170_onTap_runningActionsCount == 0) {
	obj70170_onTap_actionGroup3();
}
	}
}









};
obj70170_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70170_onTap_activeActionGroupIndex = -1;
		$("#obj70170").trigger("obj70170_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70170) {
				console.warn("de-queueing event obj70170." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70170").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70170_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70175();
function runjs_70175() {
	window.obj70170_onTap_runningActionsCount = obj70170_onTap_runningActionsCount + 1;

	$("#obj70170").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj70170_onTap_runningActionsCount = window.obj70170_onTap_runningActionsCount - 1;
if (window.obj70170_onTap_runningActionsCount < 0) {
	window.obj70170_onTap_runningActionsCount = 0;
} else if (window.obj70170_onTap_runningActionsCount == 0) {
	obj70170_onTap_actionGroup4();
}
	}, 1);
}







};
obj70170_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70170_onTap_activeActionGroupIndex = -1;
		$("#obj70170").trigger("obj70170_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70170) {
				console.warn("de-queueing event obj70170." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70170").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70170_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70176();
function switchText_70176() {
	window.obj70170_onTap_runningActionsCount = obj70170_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70170_onTap_runningActionsCount = window.obj70170_onTap_runningActionsCount - 1;
if (window.obj70170_onTap_runningActionsCount < 0) {
	window.obj70170_onTap_runningActionsCount = 0;
} else if (window.obj70170_onTap_runningActionsCount == 0) {
	obj70170_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70170_onTap_runningActionsCount = window.obj70170_onTap_runningActionsCount - 1;
if (window.obj70170_onTap_runningActionsCount < 0) {
	window.obj70170_onTap_runningActionsCount = 0;
} else if (window.obj70170_onTap_runningActionsCount == 0) {
	obj70170_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj70170_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70170_onTap_activeActionGroupIndex = -1;
		$("#obj70170").trigger("obj70170_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70170) {
				console.warn("de-queueing event obj70170." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70170").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70170_onTap_activeActionGroupIndex = 5;
	





















};
obj70163_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70163_onTap_activeActionGroupIndex = -1;
		$("#obj70163").trigger("obj70163_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70163) {
				console.warn("de-queueing event obj70163." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70163").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70163_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_70165();
function switchText_70165() {
	window.obj70163_onTap_runningActionsCount = obj70163_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70163_onTap_runningActionsCount = window.obj70163_onTap_runningActionsCount - 1;
if (window.obj70163_onTap_runningActionsCount < 0) {
	window.obj70163_onTap_runningActionsCount = 0;
} else if (window.obj70163_onTap_runningActionsCount == 0) {
	obj70163_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70163_onTap_runningActionsCount = window.obj70163_onTap_runningActionsCount - 1;
if (window.obj70163_onTap_runningActionsCount < 0) {
	window.obj70163_onTap_runningActionsCount = 0;
} else if (window.obj70163_onTap_runningActionsCount == 0) {
	obj70163_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj70163_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70163_onTap_activeActionGroupIndex = -1;
		$("#obj70163").trigger("obj70163_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70163) {
				console.warn("de-queueing event obj70163." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70163").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70163_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70166();
function runjs_70166() {
	window.obj70163_onTap_runningActionsCount = obj70163_onTap_runningActionsCount + 1;

	$("#obj70163").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70163_onTap_runningActionsCount = window.obj70163_onTap_runningActionsCount - 1;
if (window.obj70163_onTap_runningActionsCount < 0) {
	window.obj70163_onTap_runningActionsCount = 0;
} else if (window.obj70163_onTap_runningActionsCount == 0) {
	obj70163_onTap_actionGroup2();
}
	}, 1);
}







};
obj70163_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70163_onTap_activeActionGroupIndex = -1;
		$("#obj70163").trigger("obj70163_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70163) {
				console.warn("de-queueing event obj70163." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70163").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70163_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_70167();
function playAudio_70167() {
	window.obj70163_onTap_runningActionsCount = obj70163_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj70163_onTap_runningActionsCount = window.obj70163_onTap_runningActionsCount - 1;
if (window.obj70163_onTap_runningActionsCount < 0) {
	window.obj70163_onTap_runningActionsCount = 0;
} else if (window.obj70163_onTap_runningActionsCount == 0) {
	obj70163_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70163_onTap_runningActionsCount = window.obj70163_onTap_runningActionsCount - 1;
if (window.obj70163_onTap_runningActionsCount < 0) {
	window.obj70163_onTap_runningActionsCount = 0;
} else if (window.obj70163_onTap_runningActionsCount == 0) {
	obj70163_onTap_actionGroup3();
}
	}
}









};
obj70163_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70163_onTap_activeActionGroupIndex = -1;
		$("#obj70163").trigger("obj70163_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70163) {
				console.warn("de-queueing event obj70163." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70163").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70163_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70168();
function runjs_70168() {
	window.obj70163_onTap_runningActionsCount = obj70163_onTap_runningActionsCount + 1;

	$("#obj70163").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj70163_onTap_runningActionsCount = window.obj70163_onTap_runningActionsCount - 1;
if (window.obj70163_onTap_runningActionsCount < 0) {
	window.obj70163_onTap_runningActionsCount = 0;
} else if (window.obj70163_onTap_runningActionsCount == 0) {
	obj70163_onTap_actionGroup4();
}
	}, 1);
}







};
obj70163_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70163_onTap_activeActionGroupIndex = -1;
		$("#obj70163").trigger("obj70163_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70163) {
				console.warn("de-queueing event obj70163." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70163").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70163_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70169();
function switchText_70169() {
	window.obj70163_onTap_runningActionsCount = obj70163_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70163_onTap_runningActionsCount = window.obj70163_onTap_runningActionsCount - 1;
if (window.obj70163_onTap_runningActionsCount < 0) {
	window.obj70163_onTap_runningActionsCount = 0;
} else if (window.obj70163_onTap_runningActionsCount == 0) {
	obj70163_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70163_onTap_runningActionsCount = window.obj70163_onTap_runningActionsCount - 1;
if (window.obj70163_onTap_runningActionsCount < 0) {
	window.obj70163_onTap_runningActionsCount = 0;
} else if (window.obj70163_onTap_runningActionsCount == 0) {
	obj70163_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj70163_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70163_onTap_activeActionGroupIndex = -1;
		$("#obj70163").trigger("obj70163_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70163) {
				console.warn("de-queueing event obj70163." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70163").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70163_onTap_activeActionGroupIndex = 5;
	





















};
obj70149_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70149_onTap_activeActionGroupIndex = -1;
		$("#obj70149").trigger("obj70149_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70149) {
				console.warn("de-queueing event obj70149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70149_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70151();
function runjs_70151() {
	window.obj70149_onTap_runningActionsCount = obj70149_onTap_runningActionsCount + 1;

	$("#obj70149").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70149_onTap_runningActionsCount = window.obj70149_onTap_runningActionsCount - 1;
if (window.obj70149_onTap_runningActionsCount < 0) {
	window.obj70149_onTap_runningActionsCount = 0;
} else if (window.obj70149_onTap_runningActionsCount == 0) {
	obj70149_onTap_actionGroup1();
}
	}, 1);
}







};
obj70149_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70149_onTap_activeActionGroupIndex = -1;
		$("#obj70149").trigger("obj70149_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70149) {
				console.warn("de-queueing event obj70149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70149_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70161();
function switchText_70161() {
	window.obj70149_onTap_runningActionsCount = obj70149_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70149_onTap_runningActionsCount = window.obj70149_onTap_runningActionsCount - 1;
if (window.obj70149_onTap_runningActionsCount < 0) {
	window.obj70149_onTap_runningActionsCount = 0;
} else if (window.obj70149_onTap_runningActionsCount == 0) {
	obj70149_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70149_onTap_runningActionsCount = window.obj70149_onTap_runningActionsCount - 1;
if (window.obj70149_onTap_runningActionsCount < 0) {
	window.obj70149_onTap_runningActionsCount = 0;
} else if (window.obj70149_onTap_runningActionsCount == 0) {
	obj70149_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70149_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70149_onTap_activeActionGroupIndex = -1;
		$("#obj70149").trigger("obj70149_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70149) {
				console.warn("de-queueing event obj70149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70149_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_70152();
function runjs_70152() {
	window.obj70149_onTap_runningActionsCount = obj70149_onTap_runningActionsCount + 1;

	$("#obj70096").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70149_onTap_runningActionsCount = window.obj70149_onTap_runningActionsCount - 1;
if (window.obj70149_onTap_runningActionsCount < 0) {
	window.obj70149_onTap_runningActionsCount = 0;
} else if (window.obj70149_onTap_runningActionsCount == 0) {
	obj70149_onTap_actionGroup3();
}
	}, 1);
}







};
obj70149_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70149_onTap_activeActionGroupIndex = -1;
		$("#obj70149").trigger("obj70149_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70149) {
				console.warn("de-queueing event obj70149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70149_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70153();
function runjs_70153() {
	window.obj70149_onTap_runningActionsCount = obj70149_onTap_runningActionsCount + 1;

	$("#obj70062").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70149_onTap_runningActionsCount = window.obj70149_onTap_runningActionsCount - 1;
if (window.obj70149_onTap_runningActionsCount < 0) {
	window.obj70149_onTap_runningActionsCount = 0;
} else if (window.obj70149_onTap_runningActionsCount == 0) {
	obj70149_onTap_actionGroup4();
}
	}, 1);
}







};
obj70149_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70149_onTap_activeActionGroupIndex = -1;
		$("#obj70149").trigger("obj70149_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70149) {
				console.warn("de-queueing event obj70149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70149_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70154();
function runjs_70154() {
	window.obj70149_onTap_runningActionsCount = obj70149_onTap_runningActionsCount + 1;

	$("#obj70029").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70149_onTap_runningActionsCount = window.obj70149_onTap_runningActionsCount - 1;
if (window.obj70149_onTap_runningActionsCount < 0) {
	window.obj70149_onTap_runningActionsCount = 0;
} else if (window.obj70149_onTap_runningActionsCount == 0) {
	obj70149_onTap_actionGroup5();
}
	}, 1);
}







};
obj70149_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70149_onTap_activeActionGroupIndex = -1;
		$("#obj70149").trigger("obj70149_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70149) {
				console.warn("de-queueing event obj70149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70149_onTap_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_70155();
function runjs_70155() {
	window.obj70149_onTap_runningActionsCount = obj70149_onTap_runningActionsCount + 1;

	$("#obj69998").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70149_onTap_runningActionsCount = window.obj70149_onTap_runningActionsCount - 1;
if (window.obj70149_onTap_runningActionsCount < 0) {
	window.obj70149_onTap_runningActionsCount = 0;
} else if (window.obj70149_onTap_runningActionsCount == 0) {
	obj70149_onTap_actionGroup6();
}
	}, 1);
}







};
obj70149_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70149_onTap_activeActionGroupIndex = -1;
		$("#obj70149").trigger("obj70149_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70149) {
				console.warn("de-queueing event obj70149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70149_onTap_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_70156();
function runjs_70156() {
	window.obj70149_onTap_runningActionsCount = obj70149_onTap_runningActionsCount + 1;

	$("#obj69967").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70149_onTap_runningActionsCount = window.obj70149_onTap_runningActionsCount - 1;
if (window.obj70149_onTap_runningActionsCount < 0) {
	window.obj70149_onTap_runningActionsCount = 0;
} else if (window.obj70149_onTap_runningActionsCount == 0) {
	obj70149_onTap_actionGroup7();
}
	}, 1);
}







};
obj70149_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70149_onTap_activeActionGroupIndex = -1;
		$("#obj70149").trigger("obj70149_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70149) {
				console.warn("de-queueing event obj70149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70149_onTap_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_70157();
function runjs_70157() {
	window.obj70149_onTap_runningActionsCount = obj70149_onTap_runningActionsCount + 1;

	$("#obj69931").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70149_onTap_runningActionsCount = window.obj70149_onTap_runningActionsCount - 1;
if (window.obj70149_onTap_runningActionsCount < 0) {
	window.obj70149_onTap_runningActionsCount = 0;
} else if (window.obj70149_onTap_runningActionsCount == 0) {
	obj70149_onTap_actionGroup8();
}
	}, 1);
}







};
obj70149_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70149_onTap_activeActionGroupIndex = -1;
		$("#obj70149").trigger("obj70149_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70149) {
				console.warn("de-queueing event obj70149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70149_onTap_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_70158();
function runjs_70158() {
	window.obj70149_onTap_runningActionsCount = obj70149_onTap_runningActionsCount + 1;

	$("#obj69894").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70149_onTap_runningActionsCount = window.obj70149_onTap_runningActionsCount - 1;
if (window.obj70149_onTap_runningActionsCount < 0) {
	window.obj70149_onTap_runningActionsCount = 0;
} else if (window.obj70149_onTap_runningActionsCount == 0) {
	obj70149_onTap_actionGroup9();
}
	}, 1);
}







};
obj70149_onTap_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70149_onTap_activeActionGroupIndex = -1;
		$("#obj70149").trigger("obj70149_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70149) {
				console.warn("de-queueing event obj70149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70149_onTap_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_70159();
function runjs_70159() {
	window.obj70149_onTap_runningActionsCount = obj70149_onTap_runningActionsCount + 1;

	$("#obj69846").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70149_onTap_runningActionsCount = window.obj70149_onTap_runningActionsCount - 1;
if (window.obj70149_onTap_runningActionsCount < 0) {
	window.obj70149_onTap_runningActionsCount = 0;
} else if (window.obj70149_onTap_runningActionsCount == 0) {
	obj70149_onTap_actionGroup10();
}
	}, 1);
}







};
obj70149_onTap_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70149_onTap_activeActionGroupIndex = -1;
		$("#obj70149").trigger("obj70149_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70149) {
				console.warn("de-queueing event obj70149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70149_onTap_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_70160();
function runjs_70160() {
	window.obj70149_onTap_runningActionsCount = obj70149_onTap_runningActionsCount + 1;

	$("#obj69703").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70149_onTap_runningActionsCount = window.obj70149_onTap_runningActionsCount - 1;
if (window.obj70149_onTap_runningActionsCount < 0) {
	window.obj70149_onTap_runningActionsCount = 0;
} else if (window.obj70149_onTap_runningActionsCount == 0) {
	obj70149_onTap_actionGroup11();
}
	}, 1);
}







};
obj70149_onTap_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70149_onTap_activeActionGroupIndex = -1;
		$("#obj70149").trigger("obj70149_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70149) {
				console.warn("de-queueing event obj70149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70149_onTap_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj69707 
playAudio_70162();
function playAudio_70162() {
	window.obj70149_onTap_runningActionsCount = obj70149_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69707")[0];
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
		    window.obj70149_onTap_runningActionsCount = window.obj70149_onTap_runningActionsCount - 1;
if (window.obj70149_onTap_runningActionsCount < 0) {
	window.obj70149_onTap_runningActionsCount = 0;
} else if (window.obj70149_onTap_runningActionsCount == 0) {
	obj70149_onTap_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70149_onTap_runningActionsCount = window.obj70149_onTap_runningActionsCount - 1;
if (window.obj70149_onTap_runningActionsCount < 0) {
	window.obj70149_onTap_runningActionsCount = 0;
} else if (window.obj70149_onTap_runningActionsCount == 0) {
	obj70149_onTap_actionGroup12();
}
	}
}









};
obj70149_onTap_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70149_onTap_activeActionGroupIndex = -1;
		$("#obj70149").trigger("obj70149_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70149) {
				console.warn("de-queueing event obj70149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70149_onTap_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_90146();
function switchText_90146() {
	window.obj70149_onTap_runningActionsCount = obj70149_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70149_onTap_runningActionsCount = window.obj70149_onTap_runningActionsCount - 1;
if (window.obj70149_onTap_runningActionsCount < 0) {
	window.obj70149_onTap_runningActionsCount = 0;
} else if (window.obj70149_onTap_runningActionsCount == 0) {
	obj70149_onTap_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70149_onTap_runningActionsCount = window.obj70149_onTap_runningActionsCount - 1;
if (window.obj70149_onTap_runningActionsCount < 0) {
	window.obj70149_onTap_runningActionsCount = 0;
} else if (window.obj70149_onTap_runningActionsCount == 0) {
	obj70149_onTap_actionGroup13();
}
		}, 1);
	}
}






};
obj70149_onTap_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70149_onTap_activeActionGroupIndex = -1;
		$("#obj70149").trigger("obj70149_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70149) {
				console.warn("de-queueing event obj70149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70149_onTap_activeActionGroupIndex = 13;
	





















};
obj70134_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70134_onTap_activeActionGroupIndex = -1;
		$("#obj70134").trigger("obj70134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70134) {
				console.warn("de-queueing event obj70134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70134_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70136();
function runjs_70136() {
	window.obj70134_onTap_runningActionsCount = obj70134_onTap_runningActionsCount + 1;

	$("#obj70134").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70134_onTap_runningActionsCount = window.obj70134_onTap_runningActionsCount - 1;
if (window.obj70134_onTap_runningActionsCount < 0) {
	window.obj70134_onTap_runningActionsCount = 0;
} else if (window.obj70134_onTap_runningActionsCount == 0) {
	obj70134_onTap_actionGroup1();
}
	}, 1);
}







};
obj70134_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70134_onTap_activeActionGroupIndex = -1;
		$("#obj70134").trigger("obj70134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70134) {
				console.warn("de-queueing event obj70134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70134_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70145();
function switchText_70145() {
	window.obj70134_onTap_runningActionsCount = obj70134_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70134_onTap_runningActionsCount = window.obj70134_onTap_runningActionsCount - 1;
if (window.obj70134_onTap_runningActionsCount < 0) {
	window.obj70134_onTap_runningActionsCount = 0;
} else if (window.obj70134_onTap_runningActionsCount == 0) {
	obj70134_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70134_onTap_runningActionsCount = window.obj70134_onTap_runningActionsCount - 1;
if (window.obj70134_onTap_runningActionsCount < 0) {
	window.obj70134_onTap_runningActionsCount = 0;
} else if (window.obj70134_onTap_runningActionsCount == 0) {
	obj70134_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70134_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70134_onTap_activeActionGroupIndex = -1;
		$("#obj70134").trigger("obj70134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70134) {
				console.warn("de-queueing event obj70134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70134_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_70137();
function runjs_70137() {
	window.obj70134_onTap_runningActionsCount = obj70134_onTap_runningActionsCount + 1;

	$("#obj70092").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70134_onTap_runningActionsCount = window.obj70134_onTap_runningActionsCount - 1;
if (window.obj70134_onTap_runningActionsCount < 0) {
	window.obj70134_onTap_runningActionsCount = 0;
} else if (window.obj70134_onTap_runningActionsCount == 0) {
	obj70134_onTap_actionGroup3();
}
	}, 1);
}







};
obj70134_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70134_onTap_activeActionGroupIndex = -1;
		$("#obj70134").trigger("obj70134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70134) {
				console.warn("de-queueing event obj70134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70134_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70138();
function runjs_70138() {
	window.obj70134_onTap_runningActionsCount = obj70134_onTap_runningActionsCount + 1;

	$("#obj70058").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70134_onTap_runningActionsCount = window.obj70134_onTap_runningActionsCount - 1;
if (window.obj70134_onTap_runningActionsCount < 0) {
	window.obj70134_onTap_runningActionsCount = 0;
} else if (window.obj70134_onTap_runningActionsCount == 0) {
	obj70134_onTap_actionGroup4();
}
	}, 1);
}







};
obj70134_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70134_onTap_activeActionGroupIndex = -1;
		$("#obj70134").trigger("obj70134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70134) {
				console.warn("de-queueing event obj70134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70134_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70139();
function runjs_70139() {
	window.obj70134_onTap_runningActionsCount = obj70134_onTap_runningActionsCount + 1;

	$("#obj70020").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70134_onTap_runningActionsCount = window.obj70134_onTap_runningActionsCount - 1;
if (window.obj70134_onTap_runningActionsCount < 0) {
	window.obj70134_onTap_runningActionsCount = 0;
} else if (window.obj70134_onTap_runningActionsCount == 0) {
	obj70134_onTap_actionGroup5();
}
	}, 1);
}







};
obj70134_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70134_onTap_activeActionGroupIndex = -1;
		$("#obj70134").trigger("obj70134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70134) {
				console.warn("de-queueing event obj70134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70134_onTap_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_70140();
function runjs_70140() {
	window.obj70134_onTap_runningActionsCount = obj70134_onTap_runningActionsCount + 1;

	$("#obj69989").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70134_onTap_runningActionsCount = window.obj70134_onTap_runningActionsCount - 1;
if (window.obj70134_onTap_runningActionsCount < 0) {
	window.obj70134_onTap_runningActionsCount = 0;
} else if (window.obj70134_onTap_runningActionsCount == 0) {
	obj70134_onTap_actionGroup6();
}
	}, 1);
}







};
obj70134_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70134_onTap_activeActionGroupIndex = -1;
		$("#obj70134").trigger("obj70134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70134) {
				console.warn("de-queueing event obj70134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70134_onTap_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_70141();
function runjs_70141() {
	window.obj70134_onTap_runningActionsCount = obj70134_onTap_runningActionsCount + 1;

	$("#obj69958").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70134_onTap_runningActionsCount = window.obj70134_onTap_runningActionsCount - 1;
if (window.obj70134_onTap_runningActionsCount < 0) {
	window.obj70134_onTap_runningActionsCount = 0;
} else if (window.obj70134_onTap_runningActionsCount == 0) {
	obj70134_onTap_actionGroup7();
}
	}, 1);
}







};
obj70134_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70134_onTap_activeActionGroupIndex = -1;
		$("#obj70134").trigger("obj70134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70134) {
				console.warn("de-queueing event obj70134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70134_onTap_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_70142();
function runjs_70142() {
	window.obj70134_onTap_runningActionsCount = obj70134_onTap_runningActionsCount + 1;

	$("#obj69922").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70134_onTap_runningActionsCount = window.obj70134_onTap_runningActionsCount - 1;
if (window.obj70134_onTap_runningActionsCount < 0) {
	window.obj70134_onTap_runningActionsCount = 0;
} else if (window.obj70134_onTap_runningActionsCount == 0) {
	obj70134_onTap_actionGroup8();
}
	}, 1);
}







};
obj70134_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70134_onTap_activeActionGroupIndex = -1;
		$("#obj70134").trigger("obj70134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70134) {
				console.warn("de-queueing event obj70134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70134_onTap_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_70143();
function runjs_70143() {
	window.obj70134_onTap_runningActionsCount = obj70134_onTap_runningActionsCount + 1;

	$("#obj69885").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70134_onTap_runningActionsCount = window.obj70134_onTap_runningActionsCount - 1;
if (window.obj70134_onTap_runningActionsCount < 0) {
	window.obj70134_onTap_runningActionsCount = 0;
} else if (window.obj70134_onTap_runningActionsCount == 0) {
	obj70134_onTap_actionGroup9();
}
	}, 1);
}







};
obj70134_onTap_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70134_onTap_activeActionGroupIndex = -1;
		$("#obj70134").trigger("obj70134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70134) {
				console.warn("de-queueing event obj70134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70134_onTap_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_70144();
function runjs_70144() {
	window.obj70134_onTap_runningActionsCount = obj70134_onTap_runningActionsCount + 1;

	$("#obj69705").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70134_onTap_runningActionsCount = window.obj70134_onTap_runningActionsCount - 1;
if (window.obj70134_onTap_runningActionsCount < 0) {
	window.obj70134_onTap_runningActionsCount = 0;
} else if (window.obj70134_onTap_runningActionsCount == 0) {
	obj70134_onTap_actionGroup10();
}
	}, 1);
}







};
obj70134_onTap_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70134_onTap_activeActionGroupIndex = -1;
		$("#obj70134").trigger("obj70134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70134) {
				console.warn("de-queueing event obj70134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70134_onTap_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj69707 
playAudio_70146();
function playAudio_70146() {
	window.obj70134_onTap_runningActionsCount = obj70134_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69707")[0];
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
		    window.obj70134_onTap_runningActionsCount = window.obj70134_onTap_runningActionsCount - 1;
if (window.obj70134_onTap_runningActionsCount < 0) {
	window.obj70134_onTap_runningActionsCount = 0;
} else if (window.obj70134_onTap_runningActionsCount == 0) {
	obj70134_onTap_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70134_onTap_runningActionsCount = window.obj70134_onTap_runningActionsCount - 1;
if (window.obj70134_onTap_runningActionsCount < 0) {
	window.obj70134_onTap_runningActionsCount = 0;
} else if (window.obj70134_onTap_runningActionsCount == 0) {
	obj70134_onTap_actionGroup11();
}
	}
}









};
obj70134_onTap_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70134_onTap_activeActionGroupIndex = -1;
		$("#obj70134").trigger("obj70134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70134) {
				console.warn("de-queueing event obj70134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70134_onTap_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_90145();
function switchText_90145() {
	window.obj70134_onTap_runningActionsCount = obj70134_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70134_onTap_runningActionsCount = window.obj70134_onTap_runningActionsCount - 1;
if (window.obj70134_onTap_runningActionsCount < 0) {
	window.obj70134_onTap_runningActionsCount = 0;
} else if (window.obj70134_onTap_runningActionsCount == 0) {
	obj70134_onTap_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70134_onTap_runningActionsCount = window.obj70134_onTap_runningActionsCount - 1;
if (window.obj70134_onTap_runningActionsCount < 0) {
	window.obj70134_onTap_runningActionsCount = 0;
} else if (window.obj70134_onTap_runningActionsCount == 0) {
	obj70134_onTap_actionGroup12();
}
		}, 1);
	}
}






};
obj70134_onTap_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70134_onTap_activeActionGroupIndex = -1;
		$("#obj70134").trigger("obj70134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70134) {
				console.warn("de-queueing event obj70134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70134_onTap_activeActionGroupIndex = 12;
	





















};
obj70127_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70127_onTap_activeActionGroupIndex = -1;
		$("#obj70127").trigger("obj70127_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70127) {
				console.warn("de-queueing event obj70127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70127_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_70129();
function switchText_70129() {
	window.obj70127_onTap_runningActionsCount = obj70127_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70127_onTap_runningActionsCount = window.obj70127_onTap_runningActionsCount - 1;
if (window.obj70127_onTap_runningActionsCount < 0) {
	window.obj70127_onTap_runningActionsCount = 0;
} else if (window.obj70127_onTap_runningActionsCount == 0) {
	obj70127_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70127_onTap_runningActionsCount = window.obj70127_onTap_runningActionsCount - 1;
if (window.obj70127_onTap_runningActionsCount < 0) {
	window.obj70127_onTap_runningActionsCount = 0;
} else if (window.obj70127_onTap_runningActionsCount == 0) {
	obj70127_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj70127_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70127_onTap_activeActionGroupIndex = -1;
		$("#obj70127").trigger("obj70127_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70127) {
				console.warn("de-queueing event obj70127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70127_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70130();
function runjs_70130() {
	window.obj70127_onTap_runningActionsCount = obj70127_onTap_runningActionsCount + 1;

	$("#obj70127").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70127_onTap_runningActionsCount = window.obj70127_onTap_runningActionsCount - 1;
if (window.obj70127_onTap_runningActionsCount < 0) {
	window.obj70127_onTap_runningActionsCount = 0;
} else if (window.obj70127_onTap_runningActionsCount == 0) {
	obj70127_onTap_actionGroup2();
}
	}, 1);
}







};
obj70127_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70127_onTap_activeActionGroupIndex = -1;
		$("#obj70127").trigger("obj70127_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70127) {
				console.warn("de-queueing event obj70127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70127_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_70131();
function playAudio_70131() {
	window.obj70127_onTap_runningActionsCount = obj70127_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj70127_onTap_runningActionsCount = window.obj70127_onTap_runningActionsCount - 1;
if (window.obj70127_onTap_runningActionsCount < 0) {
	window.obj70127_onTap_runningActionsCount = 0;
} else if (window.obj70127_onTap_runningActionsCount == 0) {
	obj70127_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70127_onTap_runningActionsCount = window.obj70127_onTap_runningActionsCount - 1;
if (window.obj70127_onTap_runningActionsCount < 0) {
	window.obj70127_onTap_runningActionsCount = 0;
} else if (window.obj70127_onTap_runningActionsCount == 0) {
	obj70127_onTap_actionGroup3();
}
	}
}









};
obj70127_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70127_onTap_activeActionGroupIndex = -1;
		$("#obj70127").trigger("obj70127_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70127) {
				console.warn("de-queueing event obj70127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70127_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70132();
function runjs_70132() {
	window.obj70127_onTap_runningActionsCount = obj70127_onTap_runningActionsCount + 1;

	$("#obj70127").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj70127_onTap_runningActionsCount = window.obj70127_onTap_runningActionsCount - 1;
if (window.obj70127_onTap_runningActionsCount < 0) {
	window.obj70127_onTap_runningActionsCount = 0;
} else if (window.obj70127_onTap_runningActionsCount == 0) {
	obj70127_onTap_actionGroup4();
}
	}, 1);
}







};
obj70127_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70127_onTap_activeActionGroupIndex = -1;
		$("#obj70127").trigger("obj70127_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70127) {
				console.warn("de-queueing event obj70127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70127_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70133();
function switchText_70133() {
	window.obj70127_onTap_runningActionsCount = obj70127_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70127_onTap_runningActionsCount = window.obj70127_onTap_runningActionsCount - 1;
if (window.obj70127_onTap_runningActionsCount < 0) {
	window.obj70127_onTap_runningActionsCount = 0;
} else if (window.obj70127_onTap_runningActionsCount == 0) {
	obj70127_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70127_onTap_runningActionsCount = window.obj70127_onTap_runningActionsCount - 1;
if (window.obj70127_onTap_runningActionsCount < 0) {
	window.obj70127_onTap_runningActionsCount = 0;
} else if (window.obj70127_onTap_runningActionsCount == 0) {
	obj70127_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj70127_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70127_onTap_activeActionGroupIndex = -1;
		$("#obj70127").trigger("obj70127_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70127) {
				console.warn("de-queueing event obj70127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70127_onTap_activeActionGroupIndex = 5;
	





















};
obj70124_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70124_onTap_activeActionGroupIndex = -1;
		$("#obj70124").trigger("obj70124_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70124) {
				console.warn("de-queueing event obj70124." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70124").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70124_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70126();
function runjs_70126() {
	window.obj70124_onTap_runningActionsCount = obj70124_onTap_runningActionsCount + 1;

	$("#obj70124").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70124_onTap_runningActionsCount = window.obj70124_onTap_runningActionsCount - 1;
if (window.obj70124_onTap_runningActionsCount < 0) {
	window.obj70124_onTap_runningActionsCount = 0;
} else if (window.obj70124_onTap_runningActionsCount == 0) {
	obj70124_onTap_actionGroup1();
}
	}, 1);
}







};
obj70124_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70124_onTap_activeActionGroupIndex = -1;
		$("#obj70124").trigger("obj70124_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70124) {
				console.warn("de-queueing event obj70124." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70124").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70124_onTap_activeActionGroupIndex = 1;
	





















};
obj70112_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70112_onTap_activeActionGroupIndex = -1;
		$("#obj70112").trigger("obj70112_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70112) {
				console.warn("de-queueing event obj70112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70112_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70114();
function runjs_70114() {
	window.obj70112_onTap_runningActionsCount = obj70112_onTap_runningActionsCount + 1;

	$("#obj70112").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70112_onTap_runningActionsCount = window.obj70112_onTap_runningActionsCount - 1;
if (window.obj70112_onTap_runningActionsCount < 0) {
	window.obj70112_onTap_runningActionsCount = 0;
} else if (window.obj70112_onTap_runningActionsCount == 0) {
	obj70112_onTap_actionGroup1();
}
	}, 1);
}







};
obj70112_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70112_onTap_activeActionGroupIndex = -1;
		$("#obj70112").trigger("obj70112_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70112) {
				console.warn("de-queueing event obj70112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70112_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70122();
function switchText_70122() {
	window.obj70112_onTap_runningActionsCount = obj70112_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70112_onTap_runningActionsCount = window.obj70112_onTap_runningActionsCount - 1;
if (window.obj70112_onTap_runningActionsCount < 0) {
	window.obj70112_onTap_runningActionsCount = 0;
} else if (window.obj70112_onTap_runningActionsCount == 0) {
	obj70112_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70112_onTap_runningActionsCount = window.obj70112_onTap_runningActionsCount - 1;
if (window.obj70112_onTap_runningActionsCount < 0) {
	window.obj70112_onTap_runningActionsCount = 0;
} else if (window.obj70112_onTap_runningActionsCount == 0) {
	obj70112_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70112_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70112_onTap_activeActionGroupIndex = -1;
		$("#obj70112").trigger("obj70112_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70112) {
				console.warn("de-queueing event obj70112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70112_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_70115();
function runjs_70115() {
	window.obj70112_onTap_runningActionsCount = obj70112_onTap_runningActionsCount + 1;

	$("#obj70078").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70112_onTap_runningActionsCount = window.obj70112_onTap_runningActionsCount - 1;
if (window.obj70112_onTap_runningActionsCount < 0) {
	window.obj70112_onTap_runningActionsCount = 0;
} else if (window.obj70112_onTap_runningActionsCount == 0) {
	obj70112_onTap_actionGroup3();
}
	}, 1);
}







};
obj70112_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70112_onTap_activeActionGroupIndex = -1;
		$("#obj70112").trigger("obj70112_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70112) {
				console.warn("de-queueing event obj70112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70112_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70116();
function runjs_70116() {
	window.obj70112_onTap_runningActionsCount = obj70112_onTap_runningActionsCount + 1;

	$("#obj70045").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70112_onTap_runningActionsCount = window.obj70112_onTap_runningActionsCount - 1;
if (window.obj70112_onTap_runningActionsCount < 0) {
	window.obj70112_onTap_runningActionsCount = 0;
} else if (window.obj70112_onTap_runningActionsCount == 0) {
	obj70112_onTap_actionGroup4();
}
	}, 1);
}







};
obj70112_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70112_onTap_activeActionGroupIndex = -1;
		$("#obj70112").trigger("obj70112_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70112) {
				console.warn("de-queueing event obj70112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70112_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70117();
function runjs_70117() {
	window.obj70112_onTap_runningActionsCount = obj70112_onTap_runningActionsCount + 1;

	$("#obj70014").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70112_onTap_runningActionsCount = window.obj70112_onTap_runningActionsCount - 1;
if (window.obj70112_onTap_runningActionsCount < 0) {
	window.obj70112_onTap_runningActionsCount = 0;
} else if (window.obj70112_onTap_runningActionsCount == 0) {
	obj70112_onTap_actionGroup5();
}
	}, 1);
}







};
obj70112_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70112_onTap_activeActionGroupIndex = -1;
		$("#obj70112").trigger("obj70112_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70112) {
				console.warn("de-queueing event obj70112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70112_onTap_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_70118();
function runjs_70118() {
	window.obj70112_onTap_runningActionsCount = obj70112_onTap_runningActionsCount + 1;

	$("#obj69983").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70112_onTap_runningActionsCount = window.obj70112_onTap_runningActionsCount - 1;
if (window.obj70112_onTap_runningActionsCount < 0) {
	window.obj70112_onTap_runningActionsCount = 0;
} else if (window.obj70112_onTap_runningActionsCount == 0) {
	obj70112_onTap_actionGroup6();
}
	}, 1);
}







};
obj70112_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70112_onTap_activeActionGroupIndex = -1;
		$("#obj70112").trigger("obj70112_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70112) {
				console.warn("de-queueing event obj70112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70112_onTap_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_70119();
function runjs_70119() {
	window.obj70112_onTap_runningActionsCount = obj70112_onTap_runningActionsCount + 1;

	$("#obj69947").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70112_onTap_runningActionsCount = window.obj70112_onTap_runningActionsCount - 1;
if (window.obj70112_onTap_runningActionsCount < 0) {
	window.obj70112_onTap_runningActionsCount = 0;
} else if (window.obj70112_onTap_runningActionsCount == 0) {
	obj70112_onTap_actionGroup7();
}
	}, 1);
}







};
obj70112_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70112_onTap_activeActionGroupIndex = -1;
		$("#obj70112").trigger("obj70112_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70112) {
				console.warn("de-queueing event obj70112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70112_onTap_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_70120();
function runjs_70120() {
	window.obj70112_onTap_runningActionsCount = obj70112_onTap_runningActionsCount + 1;

	$("#obj69906").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70112_onTap_runningActionsCount = window.obj70112_onTap_runningActionsCount - 1;
if (window.obj70112_onTap_runningActionsCount < 0) {
	window.obj70112_onTap_runningActionsCount = 0;
} else if (window.obj70112_onTap_runningActionsCount == 0) {
	obj70112_onTap_actionGroup8();
}
	}, 1);
}







};
obj70112_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70112_onTap_activeActionGroupIndex = -1;
		$("#obj70112").trigger("obj70112_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70112) {
				console.warn("de-queueing event obj70112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70112_onTap_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_70121();
function runjs_70121() {
	window.obj70112_onTap_runningActionsCount = obj70112_onTap_runningActionsCount + 1;

	$("#obj69697").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70112_onTap_runningActionsCount = window.obj70112_onTap_runningActionsCount - 1;
if (window.obj70112_onTap_runningActionsCount < 0) {
	window.obj70112_onTap_runningActionsCount = 0;
} else if (window.obj70112_onTap_runningActionsCount == 0) {
	obj70112_onTap_actionGroup9();
}
	}, 1);
}







};
obj70112_onTap_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70112_onTap_activeActionGroupIndex = -1;
		$("#obj70112").trigger("obj70112_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70112) {
				console.warn("de-queueing event obj70112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70112_onTap_activeActionGroupIndex = 9;
	












//	action: playAudio
//	target: obj69707 
playAudio_70123();
function playAudio_70123() {
	window.obj70112_onTap_runningActionsCount = obj70112_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69707")[0];
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
		    window.obj70112_onTap_runningActionsCount = window.obj70112_onTap_runningActionsCount - 1;
if (window.obj70112_onTap_runningActionsCount < 0) {
	window.obj70112_onTap_runningActionsCount = 0;
} else if (window.obj70112_onTap_runningActionsCount == 0) {
	obj70112_onTap_actionGroup10();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70112_onTap_runningActionsCount = window.obj70112_onTap_runningActionsCount - 1;
if (window.obj70112_onTap_runningActionsCount < 0) {
	window.obj70112_onTap_runningActionsCount = 0;
} else if (window.obj70112_onTap_runningActionsCount == 0) {
	obj70112_onTap_actionGroup10();
}
	}
}









};
obj70112_onTap_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70112_onTap_activeActionGroupIndex = -1;
		$("#obj70112").trigger("obj70112_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70112) {
				console.warn("de-queueing event obj70112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70112_onTap_activeActionGroupIndex = 10;
	















//	action: Switch Text
switchText_90149();
function switchText_90149() {
	window.obj70112_onTap_runningActionsCount = obj70112_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70112_onTap_runningActionsCount = window.obj70112_onTap_runningActionsCount - 1;
if (window.obj70112_onTap_runningActionsCount < 0) {
	window.obj70112_onTap_runningActionsCount = 0;
} else if (window.obj70112_onTap_runningActionsCount == 0) {
	obj70112_onTap_actionGroup11();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70112_onTap_runningActionsCount = window.obj70112_onTap_runningActionsCount - 1;
if (window.obj70112_onTap_runningActionsCount < 0) {
	window.obj70112_onTap_runningActionsCount = 0;
} else if (window.obj70112_onTap_runningActionsCount == 0) {
	obj70112_onTap_actionGroup11();
}
		}, 1);
	}
}






};
obj70112_onTap_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70112_onTap_activeActionGroupIndex = -1;
		$("#obj70112").trigger("obj70112_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70112) {
				console.warn("de-queueing event obj70112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70112_onTap_activeActionGroupIndex = 11;
	





















};
obj70105_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70105_onTap_activeActionGroupIndex = -1;
		$("#obj70105").trigger("obj70105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70105) {
				console.warn("de-queueing event obj70105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70105_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_70107();
function switchText_70107() {
	window.obj70105_onTap_runningActionsCount = obj70105_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70105_onTap_runningActionsCount = window.obj70105_onTap_runningActionsCount - 1;
if (window.obj70105_onTap_runningActionsCount < 0) {
	window.obj70105_onTap_runningActionsCount = 0;
} else if (window.obj70105_onTap_runningActionsCount == 0) {
	obj70105_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70105_onTap_runningActionsCount = window.obj70105_onTap_runningActionsCount - 1;
if (window.obj70105_onTap_runningActionsCount < 0) {
	window.obj70105_onTap_runningActionsCount = 0;
} else if (window.obj70105_onTap_runningActionsCount == 0) {
	obj70105_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj70105_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70105_onTap_activeActionGroupIndex = -1;
		$("#obj70105").trigger("obj70105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70105) {
				console.warn("de-queueing event obj70105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70105_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70108();
function runjs_70108() {
	window.obj70105_onTap_runningActionsCount = obj70105_onTap_runningActionsCount + 1;

	$("#obj70105").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70105_onTap_runningActionsCount = window.obj70105_onTap_runningActionsCount - 1;
if (window.obj70105_onTap_runningActionsCount < 0) {
	window.obj70105_onTap_runningActionsCount = 0;
} else if (window.obj70105_onTap_runningActionsCount == 0) {
	obj70105_onTap_actionGroup2();
}
	}, 1);
}







};
obj70105_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70105_onTap_activeActionGroupIndex = -1;
		$("#obj70105").trigger("obj70105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70105) {
				console.warn("de-queueing event obj70105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70105_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_70109();
function playAudio_70109() {
	window.obj70105_onTap_runningActionsCount = obj70105_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj70105_onTap_runningActionsCount = window.obj70105_onTap_runningActionsCount - 1;
if (window.obj70105_onTap_runningActionsCount < 0) {
	window.obj70105_onTap_runningActionsCount = 0;
} else if (window.obj70105_onTap_runningActionsCount == 0) {
	obj70105_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70105_onTap_runningActionsCount = window.obj70105_onTap_runningActionsCount - 1;
if (window.obj70105_onTap_runningActionsCount < 0) {
	window.obj70105_onTap_runningActionsCount = 0;
} else if (window.obj70105_onTap_runningActionsCount == 0) {
	obj70105_onTap_actionGroup3();
}
	}
}









};
obj70105_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70105_onTap_activeActionGroupIndex = -1;
		$("#obj70105").trigger("obj70105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70105) {
				console.warn("de-queueing event obj70105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70105_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70110();
function runjs_70110() {
	window.obj70105_onTap_runningActionsCount = obj70105_onTap_runningActionsCount + 1;

	$("#obj70105").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj70105_onTap_runningActionsCount = window.obj70105_onTap_runningActionsCount - 1;
if (window.obj70105_onTap_runningActionsCount < 0) {
	window.obj70105_onTap_runningActionsCount = 0;
} else if (window.obj70105_onTap_runningActionsCount == 0) {
	obj70105_onTap_actionGroup4();
}
	}, 1);
}







};
obj70105_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70105_onTap_activeActionGroupIndex = -1;
		$("#obj70105").trigger("obj70105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70105) {
				console.warn("de-queueing event obj70105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70105_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70111();
function switchText_70111() {
	window.obj70105_onTap_runningActionsCount = obj70105_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70105_onTap_runningActionsCount = window.obj70105_onTap_runningActionsCount - 1;
if (window.obj70105_onTap_runningActionsCount < 0) {
	window.obj70105_onTap_runningActionsCount = 0;
} else if (window.obj70105_onTap_runningActionsCount == 0) {
	obj70105_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70105_onTap_runningActionsCount = window.obj70105_onTap_runningActionsCount - 1;
if (window.obj70105_onTap_runningActionsCount < 0) {
	window.obj70105_onTap_runningActionsCount = 0;
} else if (window.obj70105_onTap_runningActionsCount == 0) {
	obj70105_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj70105_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70105_onTap_activeActionGroupIndex = -1;
		$("#obj70105").trigger("obj70105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70105) {
				console.warn("de-queueing event obj70105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70105_onTap_activeActionGroupIndex = 5;
	





















};
obj70098_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70098_onTap_activeActionGroupIndex = -1;
		$("#obj70098").trigger("obj70098_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70098) {
				console.warn("de-queueing event obj70098." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70098").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70098_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_70100();
function switchText_70100() {
	window.obj70098_onTap_runningActionsCount = obj70098_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70098_onTap_runningActionsCount = window.obj70098_onTap_runningActionsCount - 1;
if (window.obj70098_onTap_runningActionsCount < 0) {
	window.obj70098_onTap_runningActionsCount = 0;
} else if (window.obj70098_onTap_runningActionsCount == 0) {
	obj70098_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70098_onTap_runningActionsCount = window.obj70098_onTap_runningActionsCount - 1;
if (window.obj70098_onTap_runningActionsCount < 0) {
	window.obj70098_onTap_runningActionsCount = 0;
} else if (window.obj70098_onTap_runningActionsCount == 0) {
	obj70098_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj70098_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70098_onTap_activeActionGroupIndex = -1;
		$("#obj70098").trigger("obj70098_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70098) {
				console.warn("de-queueing event obj70098." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70098").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70098_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70101();
function runjs_70101() {
	window.obj70098_onTap_runningActionsCount = obj70098_onTap_runningActionsCount + 1;

	$("#obj70098").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70098_onTap_runningActionsCount = window.obj70098_onTap_runningActionsCount - 1;
if (window.obj70098_onTap_runningActionsCount < 0) {
	window.obj70098_onTap_runningActionsCount = 0;
} else if (window.obj70098_onTap_runningActionsCount == 0) {
	obj70098_onTap_actionGroup2();
}
	}, 1);
}







};
obj70098_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70098_onTap_activeActionGroupIndex = -1;
		$("#obj70098").trigger("obj70098_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70098) {
				console.warn("de-queueing event obj70098." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70098").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70098_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_70102();
function playAudio_70102() {
	window.obj70098_onTap_runningActionsCount = obj70098_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj70098_onTap_runningActionsCount = window.obj70098_onTap_runningActionsCount - 1;
if (window.obj70098_onTap_runningActionsCount < 0) {
	window.obj70098_onTap_runningActionsCount = 0;
} else if (window.obj70098_onTap_runningActionsCount == 0) {
	obj70098_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70098_onTap_runningActionsCount = window.obj70098_onTap_runningActionsCount - 1;
if (window.obj70098_onTap_runningActionsCount < 0) {
	window.obj70098_onTap_runningActionsCount = 0;
} else if (window.obj70098_onTap_runningActionsCount == 0) {
	obj70098_onTap_actionGroup3();
}
	}
}









};
obj70098_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70098_onTap_activeActionGroupIndex = -1;
		$("#obj70098").trigger("obj70098_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70098) {
				console.warn("de-queueing event obj70098." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70098").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70098_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70103();
function runjs_70103() {
	window.obj70098_onTap_runningActionsCount = obj70098_onTap_runningActionsCount + 1;

	$("#obj70098").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj70098_onTap_runningActionsCount = window.obj70098_onTap_runningActionsCount - 1;
if (window.obj70098_onTap_runningActionsCount < 0) {
	window.obj70098_onTap_runningActionsCount = 0;
} else if (window.obj70098_onTap_runningActionsCount == 0) {
	obj70098_onTap_actionGroup4();
}
	}, 1);
}







};
obj70098_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70098_onTap_activeActionGroupIndex = -1;
		$("#obj70098").trigger("obj70098_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70098) {
				console.warn("de-queueing event obj70098." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70098").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70098_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70104();
function switchText_70104() {
	window.obj70098_onTap_runningActionsCount = obj70098_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70098_onTap_runningActionsCount = window.obj70098_onTap_runningActionsCount - 1;
if (window.obj70098_onTap_runningActionsCount < 0) {
	window.obj70098_onTap_runningActionsCount = 0;
} else if (window.obj70098_onTap_runningActionsCount == 0) {
	obj70098_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70098_onTap_runningActionsCount = window.obj70098_onTap_runningActionsCount - 1;
if (window.obj70098_onTap_runningActionsCount < 0) {
	window.obj70098_onTap_runningActionsCount = 0;
} else if (window.obj70098_onTap_runningActionsCount == 0) {
	obj70098_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj70098_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70098_onTap_activeActionGroupIndex = -1;
		$("#obj70098").trigger("obj70098_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70098) {
				console.warn("de-queueing event obj70098." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70098").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70098_onTap_activeActionGroupIndex = 5;
	





















};
obj70089_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70089_onTap_activeActionGroupIndex = -1;
		$("#obj70089").trigger("obj70089_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70089) {
				console.warn("de-queueing event obj70089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70089_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70091();
function runjs_70091() {
	window.obj70089_onTap_runningActionsCount = obj70089_onTap_runningActionsCount + 1;

	$("#obj70089").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70089_onTap_runningActionsCount = window.obj70089_onTap_runningActionsCount - 1;
if (window.obj70089_onTap_runningActionsCount < 0) {
	window.obj70089_onTap_runningActionsCount = 0;
} else if (window.obj70089_onTap_runningActionsCount == 0) {
	obj70089_onTap_actionGroup1();
}
	}, 1);
}







};
obj70089_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70089_onTap_activeActionGroupIndex = -1;
		$("#obj70089").trigger("obj70089_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70089) {
				console.warn("de-queueing event obj70089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70089_onTap_activeActionGroupIndex = 1;
	





















};
obj70080_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70080_onTap_activeActionGroupIndex = -1;
		$("#obj70080").trigger("obj70080_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70080) {
				console.warn("de-queueing event obj70080." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70080").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70080_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70082();
function runjs_70082() {
	window.obj70080_onTap_runningActionsCount = obj70080_onTap_runningActionsCount + 1;

	$("#obj70080").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70080_onTap_runningActionsCount = window.obj70080_onTap_runningActionsCount - 1;
if (window.obj70080_onTap_runningActionsCount < 0) {
	window.obj70080_onTap_runningActionsCount = 0;
} else if (window.obj70080_onTap_runningActionsCount == 0) {
	obj70080_onTap_actionGroup1();
}
	}, 1);
}







};
obj70080_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70080_onTap_activeActionGroupIndex = -1;
		$("#obj70080").trigger("obj70080_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70080) {
				console.warn("de-queueing event obj70080." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70080").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70080_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70087();
function switchText_70087() {
	window.obj70080_onTap_runningActionsCount = obj70080_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70080_onTap_runningActionsCount = window.obj70080_onTap_runningActionsCount - 1;
if (window.obj70080_onTap_runningActionsCount < 0) {
	window.obj70080_onTap_runningActionsCount = 0;
} else if (window.obj70080_onTap_runningActionsCount == 0) {
	obj70080_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70080_onTap_runningActionsCount = window.obj70080_onTap_runningActionsCount - 1;
if (window.obj70080_onTap_runningActionsCount < 0) {
	window.obj70080_onTap_runningActionsCount = 0;
} else if (window.obj70080_onTap_runningActionsCount == 0) {
	obj70080_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70080_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70080_onTap_activeActionGroupIndex = -1;
		$("#obj70080").trigger("obj70080_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70080) {
				console.warn("de-queueing event obj70080." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70080").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70080_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_70083();
function runjs_70083() {
	window.obj70080_onTap_runningActionsCount = obj70080_onTap_runningActionsCount + 1;

	$("#obj70047").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70080_onTap_runningActionsCount = window.obj70080_onTap_runningActionsCount - 1;
if (window.obj70080_onTap_runningActionsCount < 0) {
	window.obj70080_onTap_runningActionsCount = 0;
} else if (window.obj70080_onTap_runningActionsCount == 0) {
	obj70080_onTap_actionGroup3();
}
	}, 1);
}







};
obj70080_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70080_onTap_activeActionGroupIndex = -1;
		$("#obj70080").trigger("obj70080_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70080) {
				console.warn("de-queueing event obj70080." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70080").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70080_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70084();
function runjs_70084() {
	window.obj70080_onTap_runningActionsCount = obj70080_onTap_runningActionsCount + 1;

	$("#obj70016").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70080_onTap_runningActionsCount = window.obj70080_onTap_runningActionsCount - 1;
if (window.obj70080_onTap_runningActionsCount < 0) {
	window.obj70080_onTap_runningActionsCount = 0;
} else if (window.obj70080_onTap_runningActionsCount == 0) {
	obj70080_onTap_actionGroup4();
}
	}, 1);
}







};
obj70080_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70080_onTap_activeActionGroupIndex = -1;
		$("#obj70080").trigger("obj70080_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70080) {
				console.warn("de-queueing event obj70080." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70080").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70080_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70085();
function runjs_70085() {
	window.obj70080_onTap_runningActionsCount = obj70080_onTap_runningActionsCount + 1;

	$("#obj69985").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70080_onTap_runningActionsCount = window.obj70080_onTap_runningActionsCount - 1;
if (window.obj70080_onTap_runningActionsCount < 0) {
	window.obj70080_onTap_runningActionsCount = 0;
} else if (window.obj70080_onTap_runningActionsCount == 0) {
	obj70080_onTap_actionGroup5();
}
	}, 1);
}







};
obj70080_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70080_onTap_activeActionGroupIndex = -1;
		$("#obj70080").trigger("obj70080_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70080) {
				console.warn("de-queueing event obj70080." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70080").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70080_onTap_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_70086();
function runjs_70086() {
	window.obj70080_onTap_runningActionsCount = obj70080_onTap_runningActionsCount + 1;

	$("#obj69691").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70080_onTap_runningActionsCount = window.obj70080_onTap_runningActionsCount - 1;
if (window.obj70080_onTap_runningActionsCount < 0) {
	window.obj70080_onTap_runningActionsCount = 0;
} else if (window.obj70080_onTap_runningActionsCount == 0) {
	obj70080_onTap_actionGroup6();
}
	}, 1);
}







};
obj70080_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70080_onTap_activeActionGroupIndex = -1;
		$("#obj70080").trigger("obj70080_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70080) {
				console.warn("de-queueing event obj70080." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70080").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70080_onTap_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj69707 
playAudio_70088();
function playAudio_70088() {
	window.obj70080_onTap_runningActionsCount = obj70080_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69707")[0];
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
		    window.obj70080_onTap_runningActionsCount = window.obj70080_onTap_runningActionsCount - 1;
if (window.obj70080_onTap_runningActionsCount < 0) {
	window.obj70080_onTap_runningActionsCount = 0;
} else if (window.obj70080_onTap_runningActionsCount == 0) {
	obj70080_onTap_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70080_onTap_runningActionsCount = window.obj70080_onTap_runningActionsCount - 1;
if (window.obj70080_onTap_runningActionsCount < 0) {
	window.obj70080_onTap_runningActionsCount = 0;
} else if (window.obj70080_onTap_runningActionsCount == 0) {
	obj70080_onTap_actionGroup7();
}
	}
}









};
obj70080_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70080_onTap_activeActionGroupIndex = -1;
		$("#obj70080").trigger("obj70080_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70080) {
				console.warn("de-queueing event obj70080." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70080").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70080_onTap_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_90152();
function switchText_90152() {
	window.obj70080_onTap_runningActionsCount = obj70080_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70080_onTap_runningActionsCount = window.obj70080_onTap_runningActionsCount - 1;
if (window.obj70080_onTap_runningActionsCount < 0) {
	window.obj70080_onTap_runningActionsCount = 0;
} else if (window.obj70080_onTap_runningActionsCount == 0) {
	obj70080_onTap_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70080_onTap_runningActionsCount = window.obj70080_onTap_runningActionsCount - 1;
if (window.obj70080_onTap_runningActionsCount < 0) {
	window.obj70080_onTap_runningActionsCount = 0;
} else if (window.obj70080_onTap_runningActionsCount == 0) {
	obj70080_onTap_actionGroup8();
}
		}, 1);
	}
}






};
obj70080_onTap_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70080_onTap_activeActionGroupIndex = -1;
		$("#obj70080").trigger("obj70080_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70080) {
				console.warn("de-queueing event obj70080." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70080").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70080_onTap_activeActionGroupIndex = 8;
	





















};
obj70071_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70071_onTap_activeActionGroupIndex = -1;
		$("#obj70071").trigger("obj70071_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70071) {
				console.warn("de-queueing event obj70071." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70071").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70071_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_70073();
function switchText_70073() {
	window.obj70071_onTap_runningActionsCount = obj70071_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70071_onTap_runningActionsCount = window.obj70071_onTap_runningActionsCount - 1;
if (window.obj70071_onTap_runningActionsCount < 0) {
	window.obj70071_onTap_runningActionsCount = 0;
} else if (window.obj70071_onTap_runningActionsCount == 0) {
	obj70071_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70071_onTap_runningActionsCount = window.obj70071_onTap_runningActionsCount - 1;
if (window.obj70071_onTap_runningActionsCount < 0) {
	window.obj70071_onTap_runningActionsCount = 0;
} else if (window.obj70071_onTap_runningActionsCount == 0) {
	obj70071_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj70071_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70071_onTap_activeActionGroupIndex = -1;
		$("#obj70071").trigger("obj70071_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70071) {
				console.warn("de-queueing event obj70071." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70071").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70071_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70074();
function runjs_70074() {
	window.obj70071_onTap_runningActionsCount = obj70071_onTap_runningActionsCount + 1;

	$("#obj70071").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70071_onTap_runningActionsCount = window.obj70071_onTap_runningActionsCount - 1;
if (window.obj70071_onTap_runningActionsCount < 0) {
	window.obj70071_onTap_runningActionsCount = 0;
} else if (window.obj70071_onTap_runningActionsCount == 0) {
	obj70071_onTap_actionGroup2();
}
	}, 1);
}







};
obj70071_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70071_onTap_activeActionGroupIndex = -1;
		$("#obj70071").trigger("obj70071_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70071) {
				console.warn("de-queueing event obj70071." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70071").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70071_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_70075();
function playAudio_70075() {
	window.obj70071_onTap_runningActionsCount = obj70071_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj70071_onTap_runningActionsCount = window.obj70071_onTap_runningActionsCount - 1;
if (window.obj70071_onTap_runningActionsCount < 0) {
	window.obj70071_onTap_runningActionsCount = 0;
} else if (window.obj70071_onTap_runningActionsCount == 0) {
	obj70071_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70071_onTap_runningActionsCount = window.obj70071_onTap_runningActionsCount - 1;
if (window.obj70071_onTap_runningActionsCount < 0) {
	window.obj70071_onTap_runningActionsCount = 0;
} else if (window.obj70071_onTap_runningActionsCount == 0) {
	obj70071_onTap_actionGroup3();
}
	}
}









};
obj70071_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70071_onTap_activeActionGroupIndex = -1;
		$("#obj70071").trigger("obj70071_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70071) {
				console.warn("de-queueing event obj70071." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70071").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70071_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70076();
function runjs_70076() {
	window.obj70071_onTap_runningActionsCount = obj70071_onTap_runningActionsCount + 1;

	$("#obj70071").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj70071_onTap_runningActionsCount = window.obj70071_onTap_runningActionsCount - 1;
if (window.obj70071_onTap_runningActionsCount < 0) {
	window.obj70071_onTap_runningActionsCount = 0;
} else if (window.obj70071_onTap_runningActionsCount == 0) {
	obj70071_onTap_actionGroup4();
}
	}, 1);
}







};
obj70071_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70071_onTap_activeActionGroupIndex = -1;
		$("#obj70071").trigger("obj70071_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70071) {
				console.warn("de-queueing event obj70071." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70071").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70071_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70077();
function switchText_70077() {
	window.obj70071_onTap_runningActionsCount = obj70071_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70071_onTap_runningActionsCount = window.obj70071_onTap_runningActionsCount - 1;
if (window.obj70071_onTap_runningActionsCount < 0) {
	window.obj70071_onTap_runningActionsCount = 0;
} else if (window.obj70071_onTap_runningActionsCount == 0) {
	obj70071_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70071_onTap_runningActionsCount = window.obj70071_onTap_runningActionsCount - 1;
if (window.obj70071_onTap_runningActionsCount < 0) {
	window.obj70071_onTap_runningActionsCount = 0;
} else if (window.obj70071_onTap_runningActionsCount == 0) {
	obj70071_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj70071_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70071_onTap_activeActionGroupIndex = -1;
		$("#obj70071").trigger("obj70071_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70071) {
				console.warn("de-queueing event obj70071." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70071").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70071_onTap_activeActionGroupIndex = 5;
	





















};
obj70064_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70064_onTap_activeActionGroupIndex = -1;
		$("#obj70064").trigger("obj70064_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70064) {
				console.warn("de-queueing event obj70064." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70064").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70064_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_70066();
function switchText_70066() {
	window.obj70064_onTap_runningActionsCount = obj70064_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70064_onTap_runningActionsCount = window.obj70064_onTap_runningActionsCount - 1;
if (window.obj70064_onTap_runningActionsCount < 0) {
	window.obj70064_onTap_runningActionsCount = 0;
} else if (window.obj70064_onTap_runningActionsCount == 0) {
	obj70064_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70064_onTap_runningActionsCount = window.obj70064_onTap_runningActionsCount - 1;
if (window.obj70064_onTap_runningActionsCount < 0) {
	window.obj70064_onTap_runningActionsCount = 0;
} else if (window.obj70064_onTap_runningActionsCount == 0) {
	obj70064_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj70064_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70064_onTap_activeActionGroupIndex = -1;
		$("#obj70064").trigger("obj70064_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70064) {
				console.warn("de-queueing event obj70064." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70064").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70064_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70067();
function runjs_70067() {
	window.obj70064_onTap_runningActionsCount = obj70064_onTap_runningActionsCount + 1;

	$("#obj70064").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70064_onTap_runningActionsCount = window.obj70064_onTap_runningActionsCount - 1;
if (window.obj70064_onTap_runningActionsCount < 0) {
	window.obj70064_onTap_runningActionsCount = 0;
} else if (window.obj70064_onTap_runningActionsCount == 0) {
	obj70064_onTap_actionGroup2();
}
	}, 1);
}







};
obj70064_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70064_onTap_activeActionGroupIndex = -1;
		$("#obj70064").trigger("obj70064_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70064) {
				console.warn("de-queueing event obj70064." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70064").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70064_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_70068();
function playAudio_70068() {
	window.obj70064_onTap_runningActionsCount = obj70064_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj70064_onTap_runningActionsCount = window.obj70064_onTap_runningActionsCount - 1;
if (window.obj70064_onTap_runningActionsCount < 0) {
	window.obj70064_onTap_runningActionsCount = 0;
} else if (window.obj70064_onTap_runningActionsCount == 0) {
	obj70064_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70064_onTap_runningActionsCount = window.obj70064_onTap_runningActionsCount - 1;
if (window.obj70064_onTap_runningActionsCount < 0) {
	window.obj70064_onTap_runningActionsCount = 0;
} else if (window.obj70064_onTap_runningActionsCount == 0) {
	obj70064_onTap_actionGroup3();
}
	}
}









};
obj70064_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70064_onTap_activeActionGroupIndex = -1;
		$("#obj70064").trigger("obj70064_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70064) {
				console.warn("de-queueing event obj70064." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70064").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70064_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70069();
function runjs_70069() {
	window.obj70064_onTap_runningActionsCount = obj70064_onTap_runningActionsCount + 1;

	$("#obj70064").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj70064_onTap_runningActionsCount = window.obj70064_onTap_runningActionsCount - 1;
if (window.obj70064_onTap_runningActionsCount < 0) {
	window.obj70064_onTap_runningActionsCount = 0;
} else if (window.obj70064_onTap_runningActionsCount == 0) {
	obj70064_onTap_actionGroup4();
}
	}, 1);
}







};
obj70064_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70064_onTap_activeActionGroupIndex = -1;
		$("#obj70064").trigger("obj70064_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70064) {
				console.warn("de-queueing event obj70064." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70064").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70064_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70070();
function switchText_70070() {
	window.obj70064_onTap_runningActionsCount = obj70064_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70064_onTap_runningActionsCount = window.obj70064_onTap_runningActionsCount - 1;
if (window.obj70064_onTap_runningActionsCount < 0) {
	window.obj70064_onTap_runningActionsCount = 0;
} else if (window.obj70064_onTap_runningActionsCount == 0) {
	obj70064_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70064_onTap_runningActionsCount = window.obj70064_onTap_runningActionsCount - 1;
if (window.obj70064_onTap_runningActionsCount < 0) {
	window.obj70064_onTap_runningActionsCount = 0;
} else if (window.obj70064_onTap_runningActionsCount == 0) {
	obj70064_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj70064_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70064_onTap_activeActionGroupIndex = -1;
		$("#obj70064").trigger("obj70064_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70064) {
				console.warn("de-queueing event obj70064." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70064").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70064_onTap_activeActionGroupIndex = 5;
	





















};
obj70049_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70049_onTap_activeActionGroupIndex = -1;
		$("#obj70049").trigger("obj70049_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70049) {
				console.warn("de-queueing event obj70049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70049_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70051();
function runjs_70051() {
	window.obj70049_onTap_runningActionsCount = obj70049_onTap_runningActionsCount + 1;

	$("#obj70049").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70049_onTap_runningActionsCount = window.obj70049_onTap_runningActionsCount - 1;
if (window.obj70049_onTap_runningActionsCount < 0) {
	window.obj70049_onTap_runningActionsCount = 0;
} else if (window.obj70049_onTap_runningActionsCount == 0) {
	obj70049_onTap_actionGroup1();
}
	}, 1);
}







};
obj70049_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70049_onTap_activeActionGroupIndex = -1;
		$("#obj70049").trigger("obj70049_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70049) {
				console.warn("de-queueing event obj70049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70049_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70056();
function switchText_70056() {
	window.obj70049_onTap_runningActionsCount = obj70049_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70049_onTap_runningActionsCount = window.obj70049_onTap_runningActionsCount - 1;
if (window.obj70049_onTap_runningActionsCount < 0) {
	window.obj70049_onTap_runningActionsCount = 0;
} else if (window.obj70049_onTap_runningActionsCount == 0) {
	obj70049_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70049_onTap_runningActionsCount = window.obj70049_onTap_runningActionsCount - 1;
if (window.obj70049_onTap_runningActionsCount < 0) {
	window.obj70049_onTap_runningActionsCount = 0;
} else if (window.obj70049_onTap_runningActionsCount == 0) {
	obj70049_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj70049_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70049_onTap_activeActionGroupIndex = -1;
		$("#obj70049").trigger("obj70049_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70049) {
				console.warn("de-queueing event obj70049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70049_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_70052();
function runjs_70052() {
	window.obj70049_onTap_runningActionsCount = obj70049_onTap_runningActionsCount + 1;

	$("#obj70018").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70049_onTap_runningActionsCount = window.obj70049_onTap_runningActionsCount - 1;
if (window.obj70049_onTap_runningActionsCount < 0) {
	window.obj70049_onTap_runningActionsCount = 0;
} else if (window.obj70049_onTap_runningActionsCount == 0) {
	obj70049_onTap_actionGroup3();
}
	}, 1);
}







};
obj70049_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70049_onTap_activeActionGroupIndex = -1;
		$("#obj70049").trigger("obj70049_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70049) {
				console.warn("de-queueing event obj70049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70049_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70053();
function runjs_70053() {
	window.obj70049_onTap_runningActionsCount = obj70049_onTap_runningActionsCount + 1;

	$("#obj69987").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70049_onTap_runningActionsCount = window.obj70049_onTap_runningActionsCount - 1;
if (window.obj70049_onTap_runningActionsCount < 0) {
	window.obj70049_onTap_runningActionsCount = 0;
} else if (window.obj70049_onTap_runningActionsCount == 0) {
	obj70049_onTap_actionGroup4();
}
	}, 1);
}







};
obj70049_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70049_onTap_activeActionGroupIndex = -1;
		$("#obj70049").trigger("obj70049_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70049) {
				console.warn("de-queueing event obj70049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70049_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70054();
function runjs_70054() {
	window.obj70049_onTap_runningActionsCount = obj70049_onTap_runningActionsCount + 1;

	$("#obj69956").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70049_onTap_runningActionsCount = window.obj70049_onTap_runningActionsCount - 1;
if (window.obj70049_onTap_runningActionsCount < 0) {
	window.obj70049_onTap_runningActionsCount = 0;
} else if (window.obj70049_onTap_runningActionsCount == 0) {
	obj70049_onTap_actionGroup5();
}
	}, 1);
}







};
obj70049_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70049_onTap_activeActionGroupIndex = -1;
		$("#obj70049").trigger("obj70049_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70049) {
				console.warn("de-queueing event obj70049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70049_onTap_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_70055();
function runjs_70055() {
	window.obj70049_onTap_runningActionsCount = obj70049_onTap_runningActionsCount + 1;

	$("#obj69693").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj70049_onTap_runningActionsCount = window.obj70049_onTap_runningActionsCount - 1;
if (window.obj70049_onTap_runningActionsCount < 0) {
	window.obj70049_onTap_runningActionsCount = 0;
} else if (window.obj70049_onTap_runningActionsCount == 0) {
	obj70049_onTap_actionGroup6();
}
	}, 1);
}







};
obj70049_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70049_onTap_activeActionGroupIndex = -1;
		$("#obj70049").trigger("obj70049_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70049) {
				console.warn("de-queueing event obj70049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70049_onTap_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj69707 
playAudio_70057();
function playAudio_70057() {
	window.obj70049_onTap_runningActionsCount = obj70049_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69707")[0];
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
		    window.obj70049_onTap_runningActionsCount = window.obj70049_onTap_runningActionsCount - 1;
if (window.obj70049_onTap_runningActionsCount < 0) {
	window.obj70049_onTap_runningActionsCount = 0;
} else if (window.obj70049_onTap_runningActionsCount == 0) {
	obj70049_onTap_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70049_onTap_runningActionsCount = window.obj70049_onTap_runningActionsCount - 1;
if (window.obj70049_onTap_runningActionsCount < 0) {
	window.obj70049_onTap_runningActionsCount = 0;
} else if (window.obj70049_onTap_runningActionsCount == 0) {
	obj70049_onTap_actionGroup7();
}
	}
}









};
obj70049_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70049_onTap_activeActionGroupIndex = -1;
		$("#obj70049").trigger("obj70049_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70049) {
				console.warn("de-queueing event obj70049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70049_onTap_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_90151();
function switchText_90151() {
	window.obj70049_onTap_runningActionsCount = obj70049_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70049_onTap_runningActionsCount = window.obj70049_onTap_runningActionsCount - 1;
if (window.obj70049_onTap_runningActionsCount < 0) {
	window.obj70049_onTap_runningActionsCount = 0;
} else if (window.obj70049_onTap_runningActionsCount == 0) {
	obj70049_onTap_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70049_onTap_runningActionsCount = window.obj70049_onTap_runningActionsCount - 1;
if (window.obj70049_onTap_runningActionsCount < 0) {
	window.obj70049_onTap_runningActionsCount = 0;
} else if (window.obj70049_onTap_runningActionsCount == 0) {
	obj70049_onTap_actionGroup8();
}
		}, 1);
	}
}






};
obj70049_onTap_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70049_onTap_activeActionGroupIndex = -1;
		$("#obj70049").trigger("obj70049_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70049) {
				console.warn("de-queueing event obj70049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70049_onTap_activeActionGroupIndex = 8;
	





















};
obj70038_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70038_onTap_activeActionGroupIndex = -1;
		$("#obj70038").trigger("obj70038_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70038) {
				console.warn("de-queueing event obj70038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70038_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_70040();
function switchText_70040() {
	window.obj70038_onTap_runningActionsCount = obj70038_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70038_onTap_runningActionsCount = window.obj70038_onTap_runningActionsCount - 1;
if (window.obj70038_onTap_runningActionsCount < 0) {
	window.obj70038_onTap_runningActionsCount = 0;
} else if (window.obj70038_onTap_runningActionsCount == 0) {
	obj70038_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70038_onTap_runningActionsCount = window.obj70038_onTap_runningActionsCount - 1;
if (window.obj70038_onTap_runningActionsCount < 0) {
	window.obj70038_onTap_runningActionsCount = 0;
} else if (window.obj70038_onTap_runningActionsCount == 0) {
	obj70038_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj70038_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70038_onTap_activeActionGroupIndex = -1;
		$("#obj70038").trigger("obj70038_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70038) {
				console.warn("de-queueing event obj70038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70038_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70041();
function runjs_70041() {
	window.obj70038_onTap_runningActionsCount = obj70038_onTap_runningActionsCount + 1;

	$("#obj70038").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70038_onTap_runningActionsCount = window.obj70038_onTap_runningActionsCount - 1;
if (window.obj70038_onTap_runningActionsCount < 0) {
	window.obj70038_onTap_runningActionsCount = 0;
} else if (window.obj70038_onTap_runningActionsCount == 0) {
	obj70038_onTap_actionGroup2();
}
	}, 1);
}







};
obj70038_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70038_onTap_activeActionGroupIndex = -1;
		$("#obj70038").trigger("obj70038_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70038) {
				console.warn("de-queueing event obj70038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70038_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_70042();
function playAudio_70042() {
	window.obj70038_onTap_runningActionsCount = obj70038_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj70038_onTap_runningActionsCount = window.obj70038_onTap_runningActionsCount - 1;
if (window.obj70038_onTap_runningActionsCount < 0) {
	window.obj70038_onTap_runningActionsCount = 0;
} else if (window.obj70038_onTap_runningActionsCount == 0) {
	obj70038_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70038_onTap_runningActionsCount = window.obj70038_onTap_runningActionsCount - 1;
if (window.obj70038_onTap_runningActionsCount < 0) {
	window.obj70038_onTap_runningActionsCount = 0;
} else if (window.obj70038_onTap_runningActionsCount == 0) {
	obj70038_onTap_actionGroup3();
}
	}
}









};
obj70038_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70038_onTap_activeActionGroupIndex = -1;
		$("#obj70038").trigger("obj70038_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70038) {
				console.warn("de-queueing event obj70038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70038_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70043();
function runjs_70043() {
	window.obj70038_onTap_runningActionsCount = obj70038_onTap_runningActionsCount + 1;

	$("#obj70038").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj70038_onTap_runningActionsCount = window.obj70038_onTap_runningActionsCount - 1;
if (window.obj70038_onTap_runningActionsCount < 0) {
	window.obj70038_onTap_runningActionsCount = 0;
} else if (window.obj70038_onTap_runningActionsCount == 0) {
	obj70038_onTap_actionGroup4();
}
	}, 1);
}







};
obj70038_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70038_onTap_activeActionGroupIndex = -1;
		$("#obj70038").trigger("obj70038_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70038) {
				console.warn("de-queueing event obj70038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70038_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70044();
function switchText_70044() {
	window.obj70038_onTap_runningActionsCount = obj70038_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70038_onTap_runningActionsCount = window.obj70038_onTap_runningActionsCount - 1;
if (window.obj70038_onTap_runningActionsCount < 0) {
	window.obj70038_onTap_runningActionsCount = 0;
} else if (window.obj70038_onTap_runningActionsCount == 0) {
	obj70038_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70038_onTap_runningActionsCount = window.obj70038_onTap_runningActionsCount - 1;
if (window.obj70038_onTap_runningActionsCount < 0) {
	window.obj70038_onTap_runningActionsCount = 0;
} else if (window.obj70038_onTap_runningActionsCount == 0) {
	obj70038_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj70038_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70038_onTap_activeActionGroupIndex = -1;
		$("#obj70038").trigger("obj70038_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70038) {
				console.warn("de-queueing event obj70038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70038_onTap_activeActionGroupIndex = 5;
	





















};
obj70031_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70031_onTap_activeActionGroupIndex = -1;
		$("#obj70031").trigger("obj70031_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70031) {
				console.warn("de-queueing event obj70031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70031_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_70033();
function switchText_70033() {
	window.obj70031_onTap_runningActionsCount = obj70031_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70031_onTap_runningActionsCount = window.obj70031_onTap_runningActionsCount - 1;
if (window.obj70031_onTap_runningActionsCount < 0) {
	window.obj70031_onTap_runningActionsCount = 0;
} else if (window.obj70031_onTap_runningActionsCount == 0) {
	obj70031_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70031_onTap_runningActionsCount = window.obj70031_onTap_runningActionsCount - 1;
if (window.obj70031_onTap_runningActionsCount < 0) {
	window.obj70031_onTap_runningActionsCount = 0;
} else if (window.obj70031_onTap_runningActionsCount == 0) {
	obj70031_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj70031_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70031_onTap_activeActionGroupIndex = -1;
		$("#obj70031").trigger("obj70031_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70031) {
				console.warn("de-queueing event obj70031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70031_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70034();
function runjs_70034() {
	window.obj70031_onTap_runningActionsCount = obj70031_onTap_runningActionsCount + 1;

	$("#obj70031").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70031_onTap_runningActionsCount = window.obj70031_onTap_runningActionsCount - 1;
if (window.obj70031_onTap_runningActionsCount < 0) {
	window.obj70031_onTap_runningActionsCount = 0;
} else if (window.obj70031_onTap_runningActionsCount == 0) {
	obj70031_onTap_actionGroup2();
}
	}, 1);
}







};
obj70031_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70031_onTap_activeActionGroupIndex = -1;
		$("#obj70031").trigger("obj70031_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70031) {
				console.warn("de-queueing event obj70031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70031_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_70035();
function playAudio_70035() {
	window.obj70031_onTap_runningActionsCount = obj70031_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj70031_onTap_runningActionsCount = window.obj70031_onTap_runningActionsCount - 1;
if (window.obj70031_onTap_runningActionsCount < 0) {
	window.obj70031_onTap_runningActionsCount = 0;
} else if (window.obj70031_onTap_runningActionsCount == 0) {
	obj70031_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70031_onTap_runningActionsCount = window.obj70031_onTap_runningActionsCount - 1;
if (window.obj70031_onTap_runningActionsCount < 0) {
	window.obj70031_onTap_runningActionsCount = 0;
} else if (window.obj70031_onTap_runningActionsCount == 0) {
	obj70031_onTap_actionGroup3();
}
	}
}









};
obj70031_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70031_onTap_activeActionGroupIndex = -1;
		$("#obj70031").trigger("obj70031_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70031) {
				console.warn("de-queueing event obj70031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70031_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70036();
function runjs_70036() {
	window.obj70031_onTap_runningActionsCount = obj70031_onTap_runningActionsCount + 1;

	$("#obj70031").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj70031_onTap_runningActionsCount = window.obj70031_onTap_runningActionsCount - 1;
if (window.obj70031_onTap_runningActionsCount < 0) {
	window.obj70031_onTap_runningActionsCount = 0;
} else if (window.obj70031_onTap_runningActionsCount == 0) {
	obj70031_onTap_actionGroup4();
}
	}, 1);
}







};
obj70031_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70031_onTap_activeActionGroupIndex = -1;
		$("#obj70031").trigger("obj70031_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70031) {
				console.warn("de-queueing event obj70031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70031_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70037();
function switchText_70037() {
	window.obj70031_onTap_runningActionsCount = obj70031_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70031_onTap_runningActionsCount = window.obj70031_onTap_runningActionsCount - 1;
if (window.obj70031_onTap_runningActionsCount < 0) {
	window.obj70031_onTap_runningActionsCount = 0;
} else if (window.obj70031_onTap_runningActionsCount == 0) {
	obj70031_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70031_onTap_runningActionsCount = window.obj70031_onTap_runningActionsCount - 1;
if (window.obj70031_onTap_runningActionsCount < 0) {
	window.obj70031_onTap_runningActionsCount = 0;
} else if (window.obj70031_onTap_runningActionsCount == 0) {
	obj70031_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj70031_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70031_onTap_activeActionGroupIndex = -1;
		$("#obj70031").trigger("obj70031_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70031) {
				console.warn("de-queueing event obj70031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70031_onTap_activeActionGroupIndex = 5;
	





















};
obj70022_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70022_onTap_activeActionGroupIndex = -1;
		$("#obj70022").trigger("obj70022_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70022) {
				console.warn("de-queueing event obj70022." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70022").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70022_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_70024();
function switchText_70024() {
	window.obj70022_onTap_runningActionsCount = obj70022_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70022_onTap_runningActionsCount = window.obj70022_onTap_runningActionsCount - 1;
if (window.obj70022_onTap_runningActionsCount < 0) {
	window.obj70022_onTap_runningActionsCount = 0;
} else if (window.obj70022_onTap_runningActionsCount == 0) {
	obj70022_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70022_onTap_runningActionsCount = window.obj70022_onTap_runningActionsCount - 1;
if (window.obj70022_onTap_runningActionsCount < 0) {
	window.obj70022_onTap_runningActionsCount = 0;
} else if (window.obj70022_onTap_runningActionsCount == 0) {
	obj70022_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj70022_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70022_onTap_activeActionGroupIndex = -1;
		$("#obj70022").trigger("obj70022_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70022) {
				console.warn("de-queueing event obj70022." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70022").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70022_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70025();
function runjs_70025() {
	window.obj70022_onTap_runningActionsCount = obj70022_onTap_runningActionsCount + 1;

	$("#obj70022").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70022_onTap_runningActionsCount = window.obj70022_onTap_runningActionsCount - 1;
if (window.obj70022_onTap_runningActionsCount < 0) {
	window.obj70022_onTap_runningActionsCount = 0;
} else if (window.obj70022_onTap_runningActionsCount == 0) {
	obj70022_onTap_actionGroup2();
}
	}, 1);
}







};
obj70022_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70022_onTap_activeActionGroupIndex = -1;
		$("#obj70022").trigger("obj70022_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70022) {
				console.warn("de-queueing event obj70022." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70022").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70022_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_70026();
function playAudio_70026() {
	window.obj70022_onTap_runningActionsCount = obj70022_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj70022_onTap_runningActionsCount = window.obj70022_onTap_runningActionsCount - 1;
if (window.obj70022_onTap_runningActionsCount < 0) {
	window.obj70022_onTap_runningActionsCount = 0;
} else if (window.obj70022_onTap_runningActionsCount == 0) {
	obj70022_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70022_onTap_runningActionsCount = window.obj70022_onTap_runningActionsCount - 1;
if (window.obj70022_onTap_runningActionsCount < 0) {
	window.obj70022_onTap_runningActionsCount = 0;
} else if (window.obj70022_onTap_runningActionsCount == 0) {
	obj70022_onTap_actionGroup3();
}
	}
}









};
obj70022_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70022_onTap_activeActionGroupIndex = -1;
		$("#obj70022").trigger("obj70022_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70022) {
				console.warn("de-queueing event obj70022." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70022").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70022_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70027();
function runjs_70027() {
	window.obj70022_onTap_runningActionsCount = obj70022_onTap_runningActionsCount + 1;

	$("#obj70022").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj70022_onTap_runningActionsCount = window.obj70022_onTap_runningActionsCount - 1;
if (window.obj70022_onTap_runningActionsCount < 0) {
	window.obj70022_onTap_runningActionsCount = 0;
} else if (window.obj70022_onTap_runningActionsCount == 0) {
	obj70022_onTap_actionGroup4();
}
	}, 1);
}







};
obj70022_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70022_onTap_activeActionGroupIndex = -1;
		$("#obj70022").trigger("obj70022_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70022) {
				console.warn("de-queueing event obj70022." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70022").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70022_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70028();
function switchText_70028() {
	window.obj70022_onTap_runningActionsCount = obj70022_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70022_onTap_runningActionsCount = window.obj70022_onTap_runningActionsCount - 1;
if (window.obj70022_onTap_runningActionsCount < 0) {
	window.obj70022_onTap_runningActionsCount = 0;
} else if (window.obj70022_onTap_runningActionsCount == 0) {
	obj70022_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70022_onTap_runningActionsCount = window.obj70022_onTap_runningActionsCount - 1;
if (window.obj70022_onTap_runningActionsCount < 0) {
	window.obj70022_onTap_runningActionsCount = 0;
} else if (window.obj70022_onTap_runningActionsCount == 0) {
	obj70022_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj70022_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70022_onTap_activeActionGroupIndex = -1;
		$("#obj70022").trigger("obj70022_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70022) {
				console.warn("de-queueing event obj70022." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70022").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70022_onTap_activeActionGroupIndex = 5;
	





















};
obj70007_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70007_onTap_activeActionGroupIndex = -1;
		$("#obj70007").trigger("obj70007_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70007) {
				console.warn("de-queueing event obj70007." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70007").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70007_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_70009();
function switchText_70009() {
	window.obj70007_onTap_runningActionsCount = obj70007_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70007_onTap_runningActionsCount = window.obj70007_onTap_runningActionsCount - 1;
if (window.obj70007_onTap_runningActionsCount < 0) {
	window.obj70007_onTap_runningActionsCount = 0;
} else if (window.obj70007_onTap_runningActionsCount == 0) {
	obj70007_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70007_onTap_runningActionsCount = window.obj70007_onTap_runningActionsCount - 1;
if (window.obj70007_onTap_runningActionsCount < 0) {
	window.obj70007_onTap_runningActionsCount = 0;
} else if (window.obj70007_onTap_runningActionsCount == 0) {
	obj70007_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj70007_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70007_onTap_activeActionGroupIndex = -1;
		$("#obj70007").trigger("obj70007_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70007) {
				console.warn("de-queueing event obj70007." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70007").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70007_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70010();
function runjs_70010() {
	window.obj70007_onTap_runningActionsCount = obj70007_onTap_runningActionsCount + 1;

	$("#obj70007").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70007_onTap_runningActionsCount = window.obj70007_onTap_runningActionsCount - 1;
if (window.obj70007_onTap_runningActionsCount < 0) {
	window.obj70007_onTap_runningActionsCount = 0;
} else if (window.obj70007_onTap_runningActionsCount == 0) {
	obj70007_onTap_actionGroup2();
}
	}, 1);
}







};
obj70007_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70007_onTap_activeActionGroupIndex = -1;
		$("#obj70007").trigger("obj70007_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70007) {
				console.warn("de-queueing event obj70007." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70007").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70007_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_70011();
function playAudio_70011() {
	window.obj70007_onTap_runningActionsCount = obj70007_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj70007_onTap_runningActionsCount = window.obj70007_onTap_runningActionsCount - 1;
if (window.obj70007_onTap_runningActionsCount < 0) {
	window.obj70007_onTap_runningActionsCount = 0;
} else if (window.obj70007_onTap_runningActionsCount == 0) {
	obj70007_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70007_onTap_runningActionsCount = window.obj70007_onTap_runningActionsCount - 1;
if (window.obj70007_onTap_runningActionsCount < 0) {
	window.obj70007_onTap_runningActionsCount = 0;
} else if (window.obj70007_onTap_runningActionsCount == 0) {
	obj70007_onTap_actionGroup3();
}
	}
}









};
obj70007_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70007_onTap_activeActionGroupIndex = -1;
		$("#obj70007").trigger("obj70007_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70007) {
				console.warn("de-queueing event obj70007." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70007").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70007_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70012();
function runjs_70012() {
	window.obj70007_onTap_runningActionsCount = obj70007_onTap_runningActionsCount + 1;

	$("#obj70007").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj70007_onTap_runningActionsCount = window.obj70007_onTap_runningActionsCount - 1;
if (window.obj70007_onTap_runningActionsCount < 0) {
	window.obj70007_onTap_runningActionsCount = 0;
} else if (window.obj70007_onTap_runningActionsCount == 0) {
	obj70007_onTap_actionGroup4();
}
	}, 1);
}







};
obj70007_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70007_onTap_activeActionGroupIndex = -1;
		$("#obj70007").trigger("obj70007_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70007) {
				console.warn("de-queueing event obj70007." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70007").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70007_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70013();
function switchText_70013() {
	window.obj70007_onTap_runningActionsCount = obj70007_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70007_onTap_runningActionsCount = window.obj70007_onTap_runningActionsCount - 1;
if (window.obj70007_onTap_runningActionsCount < 0) {
	window.obj70007_onTap_runningActionsCount = 0;
} else if (window.obj70007_onTap_runningActionsCount == 0) {
	obj70007_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70007_onTap_runningActionsCount = window.obj70007_onTap_runningActionsCount - 1;
if (window.obj70007_onTap_runningActionsCount < 0) {
	window.obj70007_onTap_runningActionsCount = 0;
} else if (window.obj70007_onTap_runningActionsCount == 0) {
	obj70007_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj70007_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70007_onTap_activeActionGroupIndex = -1;
		$("#obj70007").trigger("obj70007_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70007) {
				console.warn("de-queueing event obj70007." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70007").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70007_onTap_activeActionGroupIndex = 5;
	





















};
obj70000_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70000_onTap_activeActionGroupIndex = -1;
		$("#obj70000").trigger("obj70000_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70000) {
				console.warn("de-queueing event obj70000." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70000").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70000_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_70002();
function switchText_70002() {
	window.obj70000_onTap_runningActionsCount = obj70000_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70000_onTap_runningActionsCount = window.obj70000_onTap_runningActionsCount - 1;
if (window.obj70000_onTap_runningActionsCount < 0) {
	window.obj70000_onTap_runningActionsCount = 0;
} else if (window.obj70000_onTap_runningActionsCount == 0) {
	obj70000_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70000_onTap_runningActionsCount = window.obj70000_onTap_runningActionsCount - 1;
if (window.obj70000_onTap_runningActionsCount < 0) {
	window.obj70000_onTap_runningActionsCount = 0;
} else if (window.obj70000_onTap_runningActionsCount == 0) {
	obj70000_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj70000_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70000_onTap_activeActionGroupIndex = -1;
		$("#obj70000").trigger("obj70000_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70000) {
				console.warn("de-queueing event obj70000." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70000").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70000_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70003();
function runjs_70003() {
	window.obj70000_onTap_runningActionsCount = obj70000_onTap_runningActionsCount + 1;

	$("#obj70000").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj70000_onTap_runningActionsCount = window.obj70000_onTap_runningActionsCount - 1;
if (window.obj70000_onTap_runningActionsCount < 0) {
	window.obj70000_onTap_runningActionsCount = 0;
} else if (window.obj70000_onTap_runningActionsCount == 0) {
	obj70000_onTap_actionGroup2();
}
	}, 1);
}







};
obj70000_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70000_onTap_activeActionGroupIndex = -1;
		$("#obj70000").trigger("obj70000_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70000) {
				console.warn("de-queueing event obj70000." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70000").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70000_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_70004();
function playAudio_70004() {
	window.obj70000_onTap_runningActionsCount = obj70000_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj70000_onTap_runningActionsCount = window.obj70000_onTap_runningActionsCount - 1;
if (window.obj70000_onTap_runningActionsCount < 0) {
	window.obj70000_onTap_runningActionsCount = 0;
} else if (window.obj70000_onTap_runningActionsCount == 0) {
	obj70000_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70000_onTap_runningActionsCount = window.obj70000_onTap_runningActionsCount - 1;
if (window.obj70000_onTap_runningActionsCount < 0) {
	window.obj70000_onTap_runningActionsCount = 0;
} else if (window.obj70000_onTap_runningActionsCount == 0) {
	obj70000_onTap_actionGroup3();
}
	}
}









};
obj70000_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70000_onTap_activeActionGroupIndex = -1;
		$("#obj70000").trigger("obj70000_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70000) {
				console.warn("de-queueing event obj70000." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70000").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70000_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70005();
function runjs_70005() {
	window.obj70000_onTap_runningActionsCount = obj70000_onTap_runningActionsCount + 1;

	$("#obj70000").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj70000_onTap_runningActionsCount = window.obj70000_onTap_runningActionsCount - 1;
if (window.obj70000_onTap_runningActionsCount < 0) {
	window.obj70000_onTap_runningActionsCount = 0;
} else if (window.obj70000_onTap_runningActionsCount == 0) {
	obj70000_onTap_actionGroup4();
}
	}, 1);
}







};
obj70000_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70000_onTap_activeActionGroupIndex = -1;
		$("#obj70000").trigger("obj70000_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70000) {
				console.warn("de-queueing event obj70000." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70000").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70000_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70006();
function switchText_70006() {
	window.obj70000_onTap_runningActionsCount = obj70000_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj70000_onTap_runningActionsCount = window.obj70000_onTap_runningActionsCount - 1;
if (window.obj70000_onTap_runningActionsCount < 0) {
	window.obj70000_onTap_runningActionsCount = 0;
} else if (window.obj70000_onTap_runningActionsCount == 0) {
	obj70000_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70000_onTap_runningActionsCount = window.obj70000_onTap_runningActionsCount - 1;
if (window.obj70000_onTap_runningActionsCount < 0) {
	window.obj70000_onTap_runningActionsCount = 0;
} else if (window.obj70000_onTap_runningActionsCount == 0) {
	obj70000_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj70000_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70000_onTap_activeActionGroupIndex = -1;
		$("#obj70000").trigger("obj70000_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70000) {
				console.warn("de-queueing event obj70000." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70000").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70000_onTap_activeActionGroupIndex = 5;
	





















};
obj69991_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69991_onTap_activeActionGroupIndex = -1;
		$("#obj69991").trigger("obj69991_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69991) {
				console.warn("de-queueing event obj69991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69991_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69993();
function switchText_69993() {
	window.obj69991_onTap_runningActionsCount = obj69991_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69991_onTap_runningActionsCount = window.obj69991_onTap_runningActionsCount - 1;
if (window.obj69991_onTap_runningActionsCount < 0) {
	window.obj69991_onTap_runningActionsCount = 0;
} else if (window.obj69991_onTap_runningActionsCount == 0) {
	obj69991_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69991_onTap_runningActionsCount = window.obj69991_onTap_runningActionsCount - 1;
if (window.obj69991_onTap_runningActionsCount < 0) {
	window.obj69991_onTap_runningActionsCount = 0;
} else if (window.obj69991_onTap_runningActionsCount == 0) {
	obj69991_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69991_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69991_onTap_activeActionGroupIndex = -1;
		$("#obj69991").trigger("obj69991_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69991) {
				console.warn("de-queueing event obj69991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69991_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69994();
function runjs_69994() {
	window.obj69991_onTap_runningActionsCount = obj69991_onTap_runningActionsCount + 1;

	$("#obj69991").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69991_onTap_runningActionsCount = window.obj69991_onTap_runningActionsCount - 1;
if (window.obj69991_onTap_runningActionsCount < 0) {
	window.obj69991_onTap_runningActionsCount = 0;
} else if (window.obj69991_onTap_runningActionsCount == 0) {
	obj69991_onTap_actionGroup2();
}
	}, 1);
}







};
obj69991_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69991_onTap_activeActionGroupIndex = -1;
		$("#obj69991").trigger("obj69991_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69991) {
				console.warn("de-queueing event obj69991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69991_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69995();
function playAudio_69995() {
	window.obj69991_onTap_runningActionsCount = obj69991_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69991_onTap_runningActionsCount = window.obj69991_onTap_runningActionsCount - 1;
if (window.obj69991_onTap_runningActionsCount < 0) {
	window.obj69991_onTap_runningActionsCount = 0;
} else if (window.obj69991_onTap_runningActionsCount == 0) {
	obj69991_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69991_onTap_runningActionsCount = window.obj69991_onTap_runningActionsCount - 1;
if (window.obj69991_onTap_runningActionsCount < 0) {
	window.obj69991_onTap_runningActionsCount = 0;
} else if (window.obj69991_onTap_runningActionsCount == 0) {
	obj69991_onTap_actionGroup3();
}
	}
}









};
obj69991_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69991_onTap_activeActionGroupIndex = -1;
		$("#obj69991").trigger("obj69991_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69991) {
				console.warn("de-queueing event obj69991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69991_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69996();
function runjs_69996() {
	window.obj69991_onTap_runningActionsCount = obj69991_onTap_runningActionsCount + 1;

	$("#obj69991").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69991_onTap_runningActionsCount = window.obj69991_onTap_runningActionsCount - 1;
if (window.obj69991_onTap_runningActionsCount < 0) {
	window.obj69991_onTap_runningActionsCount = 0;
} else if (window.obj69991_onTap_runningActionsCount == 0) {
	obj69991_onTap_actionGroup4();
}
	}, 1);
}







};
obj69991_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69991_onTap_activeActionGroupIndex = -1;
		$("#obj69991").trigger("obj69991_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69991) {
				console.warn("de-queueing event obj69991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69991_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69997();
function switchText_69997() {
	window.obj69991_onTap_runningActionsCount = obj69991_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69991_onTap_runningActionsCount = window.obj69991_onTap_runningActionsCount - 1;
if (window.obj69991_onTap_runningActionsCount < 0) {
	window.obj69991_onTap_runningActionsCount = 0;
} else if (window.obj69991_onTap_runningActionsCount == 0) {
	obj69991_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69991_onTap_runningActionsCount = window.obj69991_onTap_runningActionsCount - 1;
if (window.obj69991_onTap_runningActionsCount < 0) {
	window.obj69991_onTap_runningActionsCount = 0;
} else if (window.obj69991_onTap_runningActionsCount == 0) {
	obj69991_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69991_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69991_onTap_activeActionGroupIndex = -1;
		$("#obj69991").trigger("obj69991_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69991) {
				console.warn("de-queueing event obj69991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69991_onTap_activeActionGroupIndex = 5;
	





















};
obj69976_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69976_onTap_activeActionGroupIndex = -1;
		$("#obj69976").trigger("obj69976_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69976) {
				console.warn("de-queueing event obj69976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69976_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69978();
function switchText_69978() {
	window.obj69976_onTap_runningActionsCount = obj69976_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69976_onTap_runningActionsCount = window.obj69976_onTap_runningActionsCount - 1;
if (window.obj69976_onTap_runningActionsCount < 0) {
	window.obj69976_onTap_runningActionsCount = 0;
} else if (window.obj69976_onTap_runningActionsCount == 0) {
	obj69976_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69976_onTap_runningActionsCount = window.obj69976_onTap_runningActionsCount - 1;
if (window.obj69976_onTap_runningActionsCount < 0) {
	window.obj69976_onTap_runningActionsCount = 0;
} else if (window.obj69976_onTap_runningActionsCount == 0) {
	obj69976_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69976_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69976_onTap_activeActionGroupIndex = -1;
		$("#obj69976").trigger("obj69976_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69976) {
				console.warn("de-queueing event obj69976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69976_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69979();
function runjs_69979() {
	window.obj69976_onTap_runningActionsCount = obj69976_onTap_runningActionsCount + 1;

	$("#obj69976").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69976_onTap_runningActionsCount = window.obj69976_onTap_runningActionsCount - 1;
if (window.obj69976_onTap_runningActionsCount < 0) {
	window.obj69976_onTap_runningActionsCount = 0;
} else if (window.obj69976_onTap_runningActionsCount == 0) {
	obj69976_onTap_actionGroup2();
}
	}, 1);
}







};
obj69976_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69976_onTap_activeActionGroupIndex = -1;
		$("#obj69976").trigger("obj69976_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69976) {
				console.warn("de-queueing event obj69976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69976_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69980();
function playAudio_69980() {
	window.obj69976_onTap_runningActionsCount = obj69976_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69976_onTap_runningActionsCount = window.obj69976_onTap_runningActionsCount - 1;
if (window.obj69976_onTap_runningActionsCount < 0) {
	window.obj69976_onTap_runningActionsCount = 0;
} else if (window.obj69976_onTap_runningActionsCount == 0) {
	obj69976_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69976_onTap_runningActionsCount = window.obj69976_onTap_runningActionsCount - 1;
if (window.obj69976_onTap_runningActionsCount < 0) {
	window.obj69976_onTap_runningActionsCount = 0;
} else if (window.obj69976_onTap_runningActionsCount == 0) {
	obj69976_onTap_actionGroup3();
}
	}
}









};
obj69976_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69976_onTap_activeActionGroupIndex = -1;
		$("#obj69976").trigger("obj69976_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69976) {
				console.warn("de-queueing event obj69976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69976_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69981();
function runjs_69981() {
	window.obj69976_onTap_runningActionsCount = obj69976_onTap_runningActionsCount + 1;

	$("#obj69976").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69976_onTap_runningActionsCount = window.obj69976_onTap_runningActionsCount - 1;
if (window.obj69976_onTap_runningActionsCount < 0) {
	window.obj69976_onTap_runningActionsCount = 0;
} else if (window.obj69976_onTap_runningActionsCount == 0) {
	obj69976_onTap_actionGroup4();
}
	}, 1);
}







};
obj69976_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69976_onTap_activeActionGroupIndex = -1;
		$("#obj69976").trigger("obj69976_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69976) {
				console.warn("de-queueing event obj69976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69976_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69982();
function switchText_69982() {
	window.obj69976_onTap_runningActionsCount = obj69976_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69976_onTap_runningActionsCount = window.obj69976_onTap_runningActionsCount - 1;
if (window.obj69976_onTap_runningActionsCount < 0) {
	window.obj69976_onTap_runningActionsCount = 0;
} else if (window.obj69976_onTap_runningActionsCount == 0) {
	obj69976_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69976_onTap_runningActionsCount = window.obj69976_onTap_runningActionsCount - 1;
if (window.obj69976_onTap_runningActionsCount < 0) {
	window.obj69976_onTap_runningActionsCount = 0;
} else if (window.obj69976_onTap_runningActionsCount == 0) {
	obj69976_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69976_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69976_onTap_activeActionGroupIndex = -1;
		$("#obj69976").trigger("obj69976_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69976) {
				console.warn("de-queueing event obj69976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69976_onTap_activeActionGroupIndex = 5;
	





















};
obj69969_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69969_onTap_activeActionGroupIndex = -1;
		$("#obj69969").trigger("obj69969_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69969) {
				console.warn("de-queueing event obj69969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69969_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69971();
function switchText_69971() {
	window.obj69969_onTap_runningActionsCount = obj69969_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69969_onTap_runningActionsCount = window.obj69969_onTap_runningActionsCount - 1;
if (window.obj69969_onTap_runningActionsCount < 0) {
	window.obj69969_onTap_runningActionsCount = 0;
} else if (window.obj69969_onTap_runningActionsCount == 0) {
	obj69969_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69969_onTap_runningActionsCount = window.obj69969_onTap_runningActionsCount - 1;
if (window.obj69969_onTap_runningActionsCount < 0) {
	window.obj69969_onTap_runningActionsCount = 0;
} else if (window.obj69969_onTap_runningActionsCount == 0) {
	obj69969_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69969_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69969_onTap_activeActionGroupIndex = -1;
		$("#obj69969").trigger("obj69969_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69969) {
				console.warn("de-queueing event obj69969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69969_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69972();
function runjs_69972() {
	window.obj69969_onTap_runningActionsCount = obj69969_onTap_runningActionsCount + 1;

	$("#obj69969").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69969_onTap_runningActionsCount = window.obj69969_onTap_runningActionsCount - 1;
if (window.obj69969_onTap_runningActionsCount < 0) {
	window.obj69969_onTap_runningActionsCount = 0;
} else if (window.obj69969_onTap_runningActionsCount == 0) {
	obj69969_onTap_actionGroup2();
}
	}, 1);
}







};
obj69969_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69969_onTap_activeActionGroupIndex = -1;
		$("#obj69969").trigger("obj69969_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69969) {
				console.warn("de-queueing event obj69969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69969_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69973();
function playAudio_69973() {
	window.obj69969_onTap_runningActionsCount = obj69969_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69969_onTap_runningActionsCount = window.obj69969_onTap_runningActionsCount - 1;
if (window.obj69969_onTap_runningActionsCount < 0) {
	window.obj69969_onTap_runningActionsCount = 0;
} else if (window.obj69969_onTap_runningActionsCount == 0) {
	obj69969_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69969_onTap_runningActionsCount = window.obj69969_onTap_runningActionsCount - 1;
if (window.obj69969_onTap_runningActionsCount < 0) {
	window.obj69969_onTap_runningActionsCount = 0;
} else if (window.obj69969_onTap_runningActionsCount == 0) {
	obj69969_onTap_actionGroup3();
}
	}
}









};
obj69969_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69969_onTap_activeActionGroupIndex = -1;
		$("#obj69969").trigger("obj69969_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69969) {
				console.warn("de-queueing event obj69969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69969_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69974();
function runjs_69974() {
	window.obj69969_onTap_runningActionsCount = obj69969_onTap_runningActionsCount + 1;

	$("#obj69969").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69969_onTap_runningActionsCount = window.obj69969_onTap_runningActionsCount - 1;
if (window.obj69969_onTap_runningActionsCount < 0) {
	window.obj69969_onTap_runningActionsCount = 0;
} else if (window.obj69969_onTap_runningActionsCount == 0) {
	obj69969_onTap_actionGroup4();
}
	}, 1);
}







};
obj69969_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69969_onTap_activeActionGroupIndex = -1;
		$("#obj69969").trigger("obj69969_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69969) {
				console.warn("de-queueing event obj69969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69969_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69975();
function switchText_69975() {
	window.obj69969_onTap_runningActionsCount = obj69969_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69969_onTap_runningActionsCount = window.obj69969_onTap_runningActionsCount - 1;
if (window.obj69969_onTap_runningActionsCount < 0) {
	window.obj69969_onTap_runningActionsCount = 0;
} else if (window.obj69969_onTap_runningActionsCount == 0) {
	obj69969_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69969_onTap_runningActionsCount = window.obj69969_onTap_runningActionsCount - 1;
if (window.obj69969_onTap_runningActionsCount < 0) {
	window.obj69969_onTap_runningActionsCount = 0;
} else if (window.obj69969_onTap_runningActionsCount == 0) {
	obj69969_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69969_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69969_onTap_activeActionGroupIndex = -1;
		$("#obj69969").trigger("obj69969_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69969) {
				console.warn("de-queueing event obj69969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69969_onTap_activeActionGroupIndex = 5;
	





















};
obj69960_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69960_onTap_activeActionGroupIndex = -1;
		$("#obj69960").trigger("obj69960_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69960) {
				console.warn("de-queueing event obj69960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69960_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69962();
function switchText_69962() {
	window.obj69960_onTap_runningActionsCount = obj69960_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69960_onTap_runningActionsCount = window.obj69960_onTap_runningActionsCount - 1;
if (window.obj69960_onTap_runningActionsCount < 0) {
	window.obj69960_onTap_runningActionsCount = 0;
} else if (window.obj69960_onTap_runningActionsCount == 0) {
	obj69960_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69960_onTap_runningActionsCount = window.obj69960_onTap_runningActionsCount - 1;
if (window.obj69960_onTap_runningActionsCount < 0) {
	window.obj69960_onTap_runningActionsCount = 0;
} else if (window.obj69960_onTap_runningActionsCount == 0) {
	obj69960_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69960_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69960_onTap_activeActionGroupIndex = -1;
		$("#obj69960").trigger("obj69960_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69960) {
				console.warn("de-queueing event obj69960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69960_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69963();
function runjs_69963() {
	window.obj69960_onTap_runningActionsCount = obj69960_onTap_runningActionsCount + 1;

	$("#obj69960").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69960_onTap_runningActionsCount = window.obj69960_onTap_runningActionsCount - 1;
if (window.obj69960_onTap_runningActionsCount < 0) {
	window.obj69960_onTap_runningActionsCount = 0;
} else if (window.obj69960_onTap_runningActionsCount == 0) {
	obj69960_onTap_actionGroup2();
}
	}, 1);
}







};
obj69960_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69960_onTap_activeActionGroupIndex = -1;
		$("#obj69960").trigger("obj69960_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69960) {
				console.warn("de-queueing event obj69960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69960_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69964();
function playAudio_69964() {
	window.obj69960_onTap_runningActionsCount = obj69960_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69960_onTap_runningActionsCount = window.obj69960_onTap_runningActionsCount - 1;
if (window.obj69960_onTap_runningActionsCount < 0) {
	window.obj69960_onTap_runningActionsCount = 0;
} else if (window.obj69960_onTap_runningActionsCount == 0) {
	obj69960_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69960_onTap_runningActionsCount = window.obj69960_onTap_runningActionsCount - 1;
if (window.obj69960_onTap_runningActionsCount < 0) {
	window.obj69960_onTap_runningActionsCount = 0;
} else if (window.obj69960_onTap_runningActionsCount == 0) {
	obj69960_onTap_actionGroup3();
}
	}
}









};
obj69960_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69960_onTap_activeActionGroupIndex = -1;
		$("#obj69960").trigger("obj69960_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69960) {
				console.warn("de-queueing event obj69960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69960_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69965();
function runjs_69965() {
	window.obj69960_onTap_runningActionsCount = obj69960_onTap_runningActionsCount + 1;

	$("#obj69960").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69960_onTap_runningActionsCount = window.obj69960_onTap_runningActionsCount - 1;
if (window.obj69960_onTap_runningActionsCount < 0) {
	window.obj69960_onTap_runningActionsCount = 0;
} else if (window.obj69960_onTap_runningActionsCount == 0) {
	obj69960_onTap_actionGroup4();
}
	}, 1);
}







};
obj69960_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69960_onTap_activeActionGroupIndex = -1;
		$("#obj69960").trigger("obj69960_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69960) {
				console.warn("de-queueing event obj69960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69960_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69966();
function switchText_69966() {
	window.obj69960_onTap_runningActionsCount = obj69960_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69960_onTap_runningActionsCount = window.obj69960_onTap_runningActionsCount - 1;
if (window.obj69960_onTap_runningActionsCount < 0) {
	window.obj69960_onTap_runningActionsCount = 0;
} else if (window.obj69960_onTap_runningActionsCount == 0) {
	obj69960_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69960_onTap_runningActionsCount = window.obj69960_onTap_runningActionsCount - 1;
if (window.obj69960_onTap_runningActionsCount < 0) {
	window.obj69960_onTap_runningActionsCount = 0;
} else if (window.obj69960_onTap_runningActionsCount == 0) {
	obj69960_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69960_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69960_onTap_activeActionGroupIndex = -1;
		$("#obj69960").trigger("obj69960_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69960) {
				console.warn("de-queueing event obj69960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69960_onTap_activeActionGroupIndex = 5;
	





















};
obj69949_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69949_onTap_activeActionGroupIndex = -1;
		$("#obj69949").trigger("obj69949_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69949) {
				console.warn("de-queueing event obj69949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69949_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69951();
function switchText_69951() {
	window.obj69949_onTap_runningActionsCount = obj69949_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69949_onTap_runningActionsCount = window.obj69949_onTap_runningActionsCount - 1;
if (window.obj69949_onTap_runningActionsCount < 0) {
	window.obj69949_onTap_runningActionsCount = 0;
} else if (window.obj69949_onTap_runningActionsCount == 0) {
	obj69949_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69949_onTap_runningActionsCount = window.obj69949_onTap_runningActionsCount - 1;
if (window.obj69949_onTap_runningActionsCount < 0) {
	window.obj69949_onTap_runningActionsCount = 0;
} else if (window.obj69949_onTap_runningActionsCount == 0) {
	obj69949_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69949_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69949_onTap_activeActionGroupIndex = -1;
		$("#obj69949").trigger("obj69949_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69949) {
				console.warn("de-queueing event obj69949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69949_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69952();
function runjs_69952() {
	window.obj69949_onTap_runningActionsCount = obj69949_onTap_runningActionsCount + 1;

	$("#obj69949").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69949_onTap_runningActionsCount = window.obj69949_onTap_runningActionsCount - 1;
if (window.obj69949_onTap_runningActionsCount < 0) {
	window.obj69949_onTap_runningActionsCount = 0;
} else if (window.obj69949_onTap_runningActionsCount == 0) {
	obj69949_onTap_actionGroup2();
}
	}, 1);
}







};
obj69949_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69949_onTap_activeActionGroupIndex = -1;
		$("#obj69949").trigger("obj69949_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69949) {
				console.warn("de-queueing event obj69949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69949_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69953();
function playAudio_69953() {
	window.obj69949_onTap_runningActionsCount = obj69949_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69949_onTap_runningActionsCount = window.obj69949_onTap_runningActionsCount - 1;
if (window.obj69949_onTap_runningActionsCount < 0) {
	window.obj69949_onTap_runningActionsCount = 0;
} else if (window.obj69949_onTap_runningActionsCount == 0) {
	obj69949_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69949_onTap_runningActionsCount = window.obj69949_onTap_runningActionsCount - 1;
if (window.obj69949_onTap_runningActionsCount < 0) {
	window.obj69949_onTap_runningActionsCount = 0;
} else if (window.obj69949_onTap_runningActionsCount == 0) {
	obj69949_onTap_actionGroup3();
}
	}
}









};
obj69949_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69949_onTap_activeActionGroupIndex = -1;
		$("#obj69949").trigger("obj69949_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69949) {
				console.warn("de-queueing event obj69949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69949_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69954();
function runjs_69954() {
	window.obj69949_onTap_runningActionsCount = obj69949_onTap_runningActionsCount + 1;

	$("#obj69949").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69949_onTap_runningActionsCount = window.obj69949_onTap_runningActionsCount - 1;
if (window.obj69949_onTap_runningActionsCount < 0) {
	window.obj69949_onTap_runningActionsCount = 0;
} else if (window.obj69949_onTap_runningActionsCount == 0) {
	obj69949_onTap_actionGroup4();
}
	}, 1);
}







};
obj69949_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69949_onTap_activeActionGroupIndex = -1;
		$("#obj69949").trigger("obj69949_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69949) {
				console.warn("de-queueing event obj69949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69949_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69955();
function switchText_69955() {
	window.obj69949_onTap_runningActionsCount = obj69949_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69949_onTap_runningActionsCount = window.obj69949_onTap_runningActionsCount - 1;
if (window.obj69949_onTap_runningActionsCount < 0) {
	window.obj69949_onTap_runningActionsCount = 0;
} else if (window.obj69949_onTap_runningActionsCount == 0) {
	obj69949_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69949_onTap_runningActionsCount = window.obj69949_onTap_runningActionsCount - 1;
if (window.obj69949_onTap_runningActionsCount < 0) {
	window.obj69949_onTap_runningActionsCount = 0;
} else if (window.obj69949_onTap_runningActionsCount == 0) {
	obj69949_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69949_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69949_onTap_activeActionGroupIndex = -1;
		$("#obj69949").trigger("obj69949_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69949) {
				console.warn("de-queueing event obj69949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69949_onTap_activeActionGroupIndex = 5;
	





















};
obj69940_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69940_onTap_activeActionGroupIndex = -1;
		$("#obj69940").trigger("obj69940_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69940) {
				console.warn("de-queueing event obj69940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69940_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69942();
function switchText_69942() {
	window.obj69940_onTap_runningActionsCount = obj69940_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69940_onTap_runningActionsCount = window.obj69940_onTap_runningActionsCount - 1;
if (window.obj69940_onTap_runningActionsCount < 0) {
	window.obj69940_onTap_runningActionsCount = 0;
} else if (window.obj69940_onTap_runningActionsCount == 0) {
	obj69940_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69940_onTap_runningActionsCount = window.obj69940_onTap_runningActionsCount - 1;
if (window.obj69940_onTap_runningActionsCount < 0) {
	window.obj69940_onTap_runningActionsCount = 0;
} else if (window.obj69940_onTap_runningActionsCount == 0) {
	obj69940_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69940_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69940_onTap_activeActionGroupIndex = -1;
		$("#obj69940").trigger("obj69940_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69940) {
				console.warn("de-queueing event obj69940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69940_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69943();
function runjs_69943() {
	window.obj69940_onTap_runningActionsCount = obj69940_onTap_runningActionsCount + 1;

	$("#obj69940").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69940_onTap_runningActionsCount = window.obj69940_onTap_runningActionsCount - 1;
if (window.obj69940_onTap_runningActionsCount < 0) {
	window.obj69940_onTap_runningActionsCount = 0;
} else if (window.obj69940_onTap_runningActionsCount == 0) {
	obj69940_onTap_actionGroup2();
}
	}, 1);
}







};
obj69940_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69940_onTap_activeActionGroupIndex = -1;
		$("#obj69940").trigger("obj69940_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69940) {
				console.warn("de-queueing event obj69940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69940_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69944();
function playAudio_69944() {
	window.obj69940_onTap_runningActionsCount = obj69940_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69940_onTap_runningActionsCount = window.obj69940_onTap_runningActionsCount - 1;
if (window.obj69940_onTap_runningActionsCount < 0) {
	window.obj69940_onTap_runningActionsCount = 0;
} else if (window.obj69940_onTap_runningActionsCount == 0) {
	obj69940_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69940_onTap_runningActionsCount = window.obj69940_onTap_runningActionsCount - 1;
if (window.obj69940_onTap_runningActionsCount < 0) {
	window.obj69940_onTap_runningActionsCount = 0;
} else if (window.obj69940_onTap_runningActionsCount == 0) {
	obj69940_onTap_actionGroup3();
}
	}
}









};
obj69940_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69940_onTap_activeActionGroupIndex = -1;
		$("#obj69940").trigger("obj69940_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69940) {
				console.warn("de-queueing event obj69940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69940_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69945();
function runjs_69945() {
	window.obj69940_onTap_runningActionsCount = obj69940_onTap_runningActionsCount + 1;

	$("#obj69940").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69940_onTap_runningActionsCount = window.obj69940_onTap_runningActionsCount - 1;
if (window.obj69940_onTap_runningActionsCount < 0) {
	window.obj69940_onTap_runningActionsCount = 0;
} else if (window.obj69940_onTap_runningActionsCount == 0) {
	obj69940_onTap_actionGroup4();
}
	}, 1);
}







};
obj69940_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69940_onTap_activeActionGroupIndex = -1;
		$("#obj69940").trigger("obj69940_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69940) {
				console.warn("de-queueing event obj69940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69940_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69946();
function switchText_69946() {
	window.obj69940_onTap_runningActionsCount = obj69940_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69940_onTap_runningActionsCount = window.obj69940_onTap_runningActionsCount - 1;
if (window.obj69940_onTap_runningActionsCount < 0) {
	window.obj69940_onTap_runningActionsCount = 0;
} else if (window.obj69940_onTap_runningActionsCount == 0) {
	obj69940_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69940_onTap_runningActionsCount = window.obj69940_onTap_runningActionsCount - 1;
if (window.obj69940_onTap_runningActionsCount < 0) {
	window.obj69940_onTap_runningActionsCount = 0;
} else if (window.obj69940_onTap_runningActionsCount == 0) {
	obj69940_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69940_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69940_onTap_activeActionGroupIndex = -1;
		$("#obj69940").trigger("obj69940_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69940) {
				console.warn("de-queueing event obj69940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69940_onTap_activeActionGroupIndex = 5;
	





















};
obj69933_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69933_onTap_activeActionGroupIndex = -1;
		$("#obj69933").trigger("obj69933_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69933) {
				console.warn("de-queueing event obj69933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69933_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69935();
function switchText_69935() {
	window.obj69933_onTap_runningActionsCount = obj69933_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69933_onTap_runningActionsCount = window.obj69933_onTap_runningActionsCount - 1;
if (window.obj69933_onTap_runningActionsCount < 0) {
	window.obj69933_onTap_runningActionsCount = 0;
} else if (window.obj69933_onTap_runningActionsCount == 0) {
	obj69933_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69933_onTap_runningActionsCount = window.obj69933_onTap_runningActionsCount - 1;
if (window.obj69933_onTap_runningActionsCount < 0) {
	window.obj69933_onTap_runningActionsCount = 0;
} else if (window.obj69933_onTap_runningActionsCount == 0) {
	obj69933_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69933_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69933_onTap_activeActionGroupIndex = -1;
		$("#obj69933").trigger("obj69933_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69933) {
				console.warn("de-queueing event obj69933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69933_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69936();
function runjs_69936() {
	window.obj69933_onTap_runningActionsCount = obj69933_onTap_runningActionsCount + 1;

	$("#obj69933").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69933_onTap_runningActionsCount = window.obj69933_onTap_runningActionsCount - 1;
if (window.obj69933_onTap_runningActionsCount < 0) {
	window.obj69933_onTap_runningActionsCount = 0;
} else if (window.obj69933_onTap_runningActionsCount == 0) {
	obj69933_onTap_actionGroup2();
}
	}, 1);
}







};
obj69933_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69933_onTap_activeActionGroupIndex = -1;
		$("#obj69933").trigger("obj69933_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69933) {
				console.warn("de-queueing event obj69933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69933_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69937();
function playAudio_69937() {
	window.obj69933_onTap_runningActionsCount = obj69933_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69933_onTap_runningActionsCount = window.obj69933_onTap_runningActionsCount - 1;
if (window.obj69933_onTap_runningActionsCount < 0) {
	window.obj69933_onTap_runningActionsCount = 0;
} else if (window.obj69933_onTap_runningActionsCount == 0) {
	obj69933_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69933_onTap_runningActionsCount = window.obj69933_onTap_runningActionsCount - 1;
if (window.obj69933_onTap_runningActionsCount < 0) {
	window.obj69933_onTap_runningActionsCount = 0;
} else if (window.obj69933_onTap_runningActionsCount == 0) {
	obj69933_onTap_actionGroup3();
}
	}
}









};
obj69933_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69933_onTap_activeActionGroupIndex = -1;
		$("#obj69933").trigger("obj69933_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69933) {
				console.warn("de-queueing event obj69933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69933_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69938();
function runjs_69938() {
	window.obj69933_onTap_runningActionsCount = obj69933_onTap_runningActionsCount + 1;

	$("#obj69933").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69933_onTap_runningActionsCount = window.obj69933_onTap_runningActionsCount - 1;
if (window.obj69933_onTap_runningActionsCount < 0) {
	window.obj69933_onTap_runningActionsCount = 0;
} else if (window.obj69933_onTap_runningActionsCount == 0) {
	obj69933_onTap_actionGroup4();
}
	}, 1);
}







};
obj69933_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69933_onTap_activeActionGroupIndex = -1;
		$("#obj69933").trigger("obj69933_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69933) {
				console.warn("de-queueing event obj69933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69933_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69939();
function switchText_69939() {
	window.obj69933_onTap_runningActionsCount = obj69933_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69933_onTap_runningActionsCount = window.obj69933_onTap_runningActionsCount - 1;
if (window.obj69933_onTap_runningActionsCount < 0) {
	window.obj69933_onTap_runningActionsCount = 0;
} else if (window.obj69933_onTap_runningActionsCount == 0) {
	obj69933_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69933_onTap_runningActionsCount = window.obj69933_onTap_runningActionsCount - 1;
if (window.obj69933_onTap_runningActionsCount < 0) {
	window.obj69933_onTap_runningActionsCount = 0;
} else if (window.obj69933_onTap_runningActionsCount == 0) {
	obj69933_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69933_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69933_onTap_activeActionGroupIndex = -1;
		$("#obj69933").trigger("obj69933_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69933) {
				console.warn("de-queueing event obj69933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69933_onTap_activeActionGroupIndex = 5;
	





















};
obj69924_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69924_onTap_activeActionGroupIndex = -1;
		$("#obj69924").trigger("obj69924_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69924) {
				console.warn("de-queueing event obj69924." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69924").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69924_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69926();
function switchText_69926() {
	window.obj69924_onTap_runningActionsCount = obj69924_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69924_onTap_runningActionsCount = window.obj69924_onTap_runningActionsCount - 1;
if (window.obj69924_onTap_runningActionsCount < 0) {
	window.obj69924_onTap_runningActionsCount = 0;
} else if (window.obj69924_onTap_runningActionsCount == 0) {
	obj69924_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69924_onTap_runningActionsCount = window.obj69924_onTap_runningActionsCount - 1;
if (window.obj69924_onTap_runningActionsCount < 0) {
	window.obj69924_onTap_runningActionsCount = 0;
} else if (window.obj69924_onTap_runningActionsCount == 0) {
	obj69924_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69924_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69924_onTap_activeActionGroupIndex = -1;
		$("#obj69924").trigger("obj69924_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69924) {
				console.warn("de-queueing event obj69924." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69924").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69924_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69927();
function runjs_69927() {
	window.obj69924_onTap_runningActionsCount = obj69924_onTap_runningActionsCount + 1;

	$("#obj69924").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69924_onTap_runningActionsCount = window.obj69924_onTap_runningActionsCount - 1;
if (window.obj69924_onTap_runningActionsCount < 0) {
	window.obj69924_onTap_runningActionsCount = 0;
} else if (window.obj69924_onTap_runningActionsCount == 0) {
	obj69924_onTap_actionGroup2();
}
	}, 1);
}







};
obj69924_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69924_onTap_activeActionGroupIndex = -1;
		$("#obj69924").trigger("obj69924_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69924) {
				console.warn("de-queueing event obj69924." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69924").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69924_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69928();
function playAudio_69928() {
	window.obj69924_onTap_runningActionsCount = obj69924_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69924_onTap_runningActionsCount = window.obj69924_onTap_runningActionsCount - 1;
if (window.obj69924_onTap_runningActionsCount < 0) {
	window.obj69924_onTap_runningActionsCount = 0;
} else if (window.obj69924_onTap_runningActionsCount == 0) {
	obj69924_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69924_onTap_runningActionsCount = window.obj69924_onTap_runningActionsCount - 1;
if (window.obj69924_onTap_runningActionsCount < 0) {
	window.obj69924_onTap_runningActionsCount = 0;
} else if (window.obj69924_onTap_runningActionsCount == 0) {
	obj69924_onTap_actionGroup3();
}
	}
}









};
obj69924_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69924_onTap_activeActionGroupIndex = -1;
		$("#obj69924").trigger("obj69924_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69924) {
				console.warn("de-queueing event obj69924." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69924").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69924_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69929();
function runjs_69929() {
	window.obj69924_onTap_runningActionsCount = obj69924_onTap_runningActionsCount + 1;

	$("#obj69924").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69924_onTap_runningActionsCount = window.obj69924_onTap_runningActionsCount - 1;
if (window.obj69924_onTap_runningActionsCount < 0) {
	window.obj69924_onTap_runningActionsCount = 0;
} else if (window.obj69924_onTap_runningActionsCount == 0) {
	obj69924_onTap_actionGroup4();
}
	}, 1);
}







};
obj69924_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69924_onTap_activeActionGroupIndex = -1;
		$("#obj69924").trigger("obj69924_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69924) {
				console.warn("de-queueing event obj69924." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69924").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69924_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69930();
function switchText_69930() {
	window.obj69924_onTap_runningActionsCount = obj69924_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69924_onTap_runningActionsCount = window.obj69924_onTap_runningActionsCount - 1;
if (window.obj69924_onTap_runningActionsCount < 0) {
	window.obj69924_onTap_runningActionsCount = 0;
} else if (window.obj69924_onTap_runningActionsCount == 0) {
	obj69924_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69924_onTap_runningActionsCount = window.obj69924_onTap_runningActionsCount - 1;
if (window.obj69924_onTap_runningActionsCount < 0) {
	window.obj69924_onTap_runningActionsCount = 0;
} else if (window.obj69924_onTap_runningActionsCount == 0) {
	obj69924_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69924_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69924_onTap_activeActionGroupIndex = -1;
		$("#obj69924").trigger("obj69924_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69924) {
				console.warn("de-queueing event obj69924." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69924").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69924_onTap_activeActionGroupIndex = 5;
	





















};
obj69915_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69915_onTap_activeActionGroupIndex = -1;
		$("#obj69915").trigger("obj69915_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69915) {
				console.warn("de-queueing event obj69915." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69915").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69915_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69917();
function switchText_69917() {
	window.obj69915_onTap_runningActionsCount = obj69915_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69915_onTap_runningActionsCount = window.obj69915_onTap_runningActionsCount - 1;
if (window.obj69915_onTap_runningActionsCount < 0) {
	window.obj69915_onTap_runningActionsCount = 0;
} else if (window.obj69915_onTap_runningActionsCount == 0) {
	obj69915_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69915_onTap_runningActionsCount = window.obj69915_onTap_runningActionsCount - 1;
if (window.obj69915_onTap_runningActionsCount < 0) {
	window.obj69915_onTap_runningActionsCount = 0;
} else if (window.obj69915_onTap_runningActionsCount == 0) {
	obj69915_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69915_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69915_onTap_activeActionGroupIndex = -1;
		$("#obj69915").trigger("obj69915_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69915) {
				console.warn("de-queueing event obj69915." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69915").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69915_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69918();
function runjs_69918() {
	window.obj69915_onTap_runningActionsCount = obj69915_onTap_runningActionsCount + 1;

	$("#obj69915").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69915_onTap_runningActionsCount = window.obj69915_onTap_runningActionsCount - 1;
if (window.obj69915_onTap_runningActionsCount < 0) {
	window.obj69915_onTap_runningActionsCount = 0;
} else if (window.obj69915_onTap_runningActionsCount == 0) {
	obj69915_onTap_actionGroup2();
}
	}, 1);
}







};
obj69915_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69915_onTap_activeActionGroupIndex = -1;
		$("#obj69915").trigger("obj69915_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69915) {
				console.warn("de-queueing event obj69915." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69915").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69915_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69919();
function playAudio_69919() {
	window.obj69915_onTap_runningActionsCount = obj69915_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69915_onTap_runningActionsCount = window.obj69915_onTap_runningActionsCount - 1;
if (window.obj69915_onTap_runningActionsCount < 0) {
	window.obj69915_onTap_runningActionsCount = 0;
} else if (window.obj69915_onTap_runningActionsCount == 0) {
	obj69915_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69915_onTap_runningActionsCount = window.obj69915_onTap_runningActionsCount - 1;
if (window.obj69915_onTap_runningActionsCount < 0) {
	window.obj69915_onTap_runningActionsCount = 0;
} else if (window.obj69915_onTap_runningActionsCount == 0) {
	obj69915_onTap_actionGroup3();
}
	}
}









};
obj69915_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69915_onTap_activeActionGroupIndex = -1;
		$("#obj69915").trigger("obj69915_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69915) {
				console.warn("de-queueing event obj69915." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69915").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69915_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69920();
function runjs_69920() {
	window.obj69915_onTap_runningActionsCount = obj69915_onTap_runningActionsCount + 1;

	$("#obj69915").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69915_onTap_runningActionsCount = window.obj69915_onTap_runningActionsCount - 1;
if (window.obj69915_onTap_runningActionsCount < 0) {
	window.obj69915_onTap_runningActionsCount = 0;
} else if (window.obj69915_onTap_runningActionsCount == 0) {
	obj69915_onTap_actionGroup4();
}
	}, 1);
}







};
obj69915_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69915_onTap_activeActionGroupIndex = -1;
		$("#obj69915").trigger("obj69915_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69915) {
				console.warn("de-queueing event obj69915." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69915").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69915_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69921();
function switchText_69921() {
	window.obj69915_onTap_runningActionsCount = obj69915_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69915_onTap_runningActionsCount = window.obj69915_onTap_runningActionsCount - 1;
if (window.obj69915_onTap_runningActionsCount < 0) {
	window.obj69915_onTap_runningActionsCount = 0;
} else if (window.obj69915_onTap_runningActionsCount == 0) {
	obj69915_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69915_onTap_runningActionsCount = window.obj69915_onTap_runningActionsCount - 1;
if (window.obj69915_onTap_runningActionsCount < 0) {
	window.obj69915_onTap_runningActionsCount = 0;
} else if (window.obj69915_onTap_runningActionsCount == 0) {
	obj69915_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69915_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69915_onTap_activeActionGroupIndex = -1;
		$("#obj69915").trigger("obj69915_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69915) {
				console.warn("de-queueing event obj69915." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69915").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69915_onTap_activeActionGroupIndex = 5;
	





















};
obj69908_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69908_onTap_activeActionGroupIndex = -1;
		$("#obj69908").trigger("obj69908_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69908) {
				console.warn("de-queueing event obj69908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69908_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69910();
function switchText_69910() {
	window.obj69908_onTap_runningActionsCount = obj69908_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69908_onTap_runningActionsCount = window.obj69908_onTap_runningActionsCount - 1;
if (window.obj69908_onTap_runningActionsCount < 0) {
	window.obj69908_onTap_runningActionsCount = 0;
} else if (window.obj69908_onTap_runningActionsCount == 0) {
	obj69908_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69908_onTap_runningActionsCount = window.obj69908_onTap_runningActionsCount - 1;
if (window.obj69908_onTap_runningActionsCount < 0) {
	window.obj69908_onTap_runningActionsCount = 0;
} else if (window.obj69908_onTap_runningActionsCount == 0) {
	obj69908_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69908_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69908_onTap_activeActionGroupIndex = -1;
		$("#obj69908").trigger("obj69908_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69908) {
				console.warn("de-queueing event obj69908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69908_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69911();
function runjs_69911() {
	window.obj69908_onTap_runningActionsCount = obj69908_onTap_runningActionsCount + 1;

	$("#obj69908").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69908_onTap_runningActionsCount = window.obj69908_onTap_runningActionsCount - 1;
if (window.obj69908_onTap_runningActionsCount < 0) {
	window.obj69908_onTap_runningActionsCount = 0;
} else if (window.obj69908_onTap_runningActionsCount == 0) {
	obj69908_onTap_actionGroup2();
}
	}, 1);
}







};
obj69908_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69908_onTap_activeActionGroupIndex = -1;
		$("#obj69908").trigger("obj69908_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69908) {
				console.warn("de-queueing event obj69908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69908_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69912();
function playAudio_69912() {
	window.obj69908_onTap_runningActionsCount = obj69908_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69908_onTap_runningActionsCount = window.obj69908_onTap_runningActionsCount - 1;
if (window.obj69908_onTap_runningActionsCount < 0) {
	window.obj69908_onTap_runningActionsCount = 0;
} else if (window.obj69908_onTap_runningActionsCount == 0) {
	obj69908_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69908_onTap_runningActionsCount = window.obj69908_onTap_runningActionsCount - 1;
if (window.obj69908_onTap_runningActionsCount < 0) {
	window.obj69908_onTap_runningActionsCount = 0;
} else if (window.obj69908_onTap_runningActionsCount == 0) {
	obj69908_onTap_actionGroup3();
}
	}
}









};
obj69908_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69908_onTap_activeActionGroupIndex = -1;
		$("#obj69908").trigger("obj69908_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69908) {
				console.warn("de-queueing event obj69908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69908_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69913();
function runjs_69913() {
	window.obj69908_onTap_runningActionsCount = obj69908_onTap_runningActionsCount + 1;

	$("#obj69908").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69908_onTap_runningActionsCount = window.obj69908_onTap_runningActionsCount - 1;
if (window.obj69908_onTap_runningActionsCount < 0) {
	window.obj69908_onTap_runningActionsCount = 0;
} else if (window.obj69908_onTap_runningActionsCount == 0) {
	obj69908_onTap_actionGroup4();
}
	}, 1);
}







};
obj69908_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69908_onTap_activeActionGroupIndex = -1;
		$("#obj69908").trigger("obj69908_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69908) {
				console.warn("de-queueing event obj69908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69908_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69914();
function switchText_69914() {
	window.obj69908_onTap_runningActionsCount = obj69908_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69908_onTap_runningActionsCount = window.obj69908_onTap_runningActionsCount - 1;
if (window.obj69908_onTap_runningActionsCount < 0) {
	window.obj69908_onTap_runningActionsCount = 0;
} else if (window.obj69908_onTap_runningActionsCount == 0) {
	obj69908_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69908_onTap_runningActionsCount = window.obj69908_onTap_runningActionsCount - 1;
if (window.obj69908_onTap_runningActionsCount < 0) {
	window.obj69908_onTap_runningActionsCount = 0;
} else if (window.obj69908_onTap_runningActionsCount == 0) {
	obj69908_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69908_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69908_onTap_activeActionGroupIndex = -1;
		$("#obj69908").trigger("obj69908_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69908) {
				console.warn("de-queueing event obj69908." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69908").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69908_onTap_activeActionGroupIndex = 5;
	





















};
obj69903_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69903_onTap_activeActionGroupIndex = -1;
		$("#obj69903").trigger("obj69903_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69903) {
				console.warn("de-queueing event obj69903." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69903").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69903_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69905();
function runjs_69905() {
	window.obj69903_onTap_runningActionsCount = obj69903_onTap_runningActionsCount + 1;

	$("#obj69903").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj69903_onTap_runningActionsCount = window.obj69903_onTap_runningActionsCount - 1;
if (window.obj69903_onTap_runningActionsCount < 0) {
	window.obj69903_onTap_runningActionsCount = 0;
} else if (window.obj69903_onTap_runningActionsCount == 0) {
	obj69903_onTap_actionGroup1();
}
	}, 1);
}







};
obj69903_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69903_onTap_activeActionGroupIndex = -1;
		$("#obj69903").trigger("obj69903_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69903) {
				console.warn("de-queueing event obj69903." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69903").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69903_onTap_activeActionGroupIndex = 1;
	





















};
obj69896_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69896_onTap_activeActionGroupIndex = -1;
		$("#obj69896").trigger("obj69896_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69896) {
				console.warn("de-queueing event obj69896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69896_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69898();
function switchText_69898() {
	window.obj69896_onTap_runningActionsCount = obj69896_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69896_onTap_runningActionsCount = window.obj69896_onTap_runningActionsCount - 1;
if (window.obj69896_onTap_runningActionsCount < 0) {
	window.obj69896_onTap_runningActionsCount = 0;
} else if (window.obj69896_onTap_runningActionsCount == 0) {
	obj69896_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69896_onTap_runningActionsCount = window.obj69896_onTap_runningActionsCount - 1;
if (window.obj69896_onTap_runningActionsCount < 0) {
	window.obj69896_onTap_runningActionsCount = 0;
} else if (window.obj69896_onTap_runningActionsCount == 0) {
	obj69896_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69896_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69896_onTap_activeActionGroupIndex = -1;
		$("#obj69896").trigger("obj69896_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69896) {
				console.warn("de-queueing event obj69896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69896_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69899();
function runjs_69899() {
	window.obj69896_onTap_runningActionsCount = obj69896_onTap_runningActionsCount + 1;

	$("#obj69896").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69896_onTap_runningActionsCount = window.obj69896_onTap_runningActionsCount - 1;
if (window.obj69896_onTap_runningActionsCount < 0) {
	window.obj69896_onTap_runningActionsCount = 0;
} else if (window.obj69896_onTap_runningActionsCount == 0) {
	obj69896_onTap_actionGroup2();
}
	}, 1);
}







};
obj69896_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69896_onTap_activeActionGroupIndex = -1;
		$("#obj69896").trigger("obj69896_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69896) {
				console.warn("de-queueing event obj69896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69896_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69900();
function playAudio_69900() {
	window.obj69896_onTap_runningActionsCount = obj69896_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69896_onTap_runningActionsCount = window.obj69896_onTap_runningActionsCount - 1;
if (window.obj69896_onTap_runningActionsCount < 0) {
	window.obj69896_onTap_runningActionsCount = 0;
} else if (window.obj69896_onTap_runningActionsCount == 0) {
	obj69896_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69896_onTap_runningActionsCount = window.obj69896_onTap_runningActionsCount - 1;
if (window.obj69896_onTap_runningActionsCount < 0) {
	window.obj69896_onTap_runningActionsCount = 0;
} else if (window.obj69896_onTap_runningActionsCount == 0) {
	obj69896_onTap_actionGroup3();
}
	}
}









};
obj69896_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69896_onTap_activeActionGroupIndex = -1;
		$("#obj69896").trigger("obj69896_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69896) {
				console.warn("de-queueing event obj69896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69896_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69901();
function runjs_69901() {
	window.obj69896_onTap_runningActionsCount = obj69896_onTap_runningActionsCount + 1;

	$("#obj69896").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69896_onTap_runningActionsCount = window.obj69896_onTap_runningActionsCount - 1;
if (window.obj69896_onTap_runningActionsCount < 0) {
	window.obj69896_onTap_runningActionsCount = 0;
} else if (window.obj69896_onTap_runningActionsCount == 0) {
	obj69896_onTap_actionGroup4();
}
	}, 1);
}







};
obj69896_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69896_onTap_activeActionGroupIndex = -1;
		$("#obj69896").trigger("obj69896_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69896) {
				console.warn("de-queueing event obj69896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69896_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69902();
function switchText_69902() {
	window.obj69896_onTap_runningActionsCount = obj69896_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69896_onTap_runningActionsCount = window.obj69896_onTap_runningActionsCount - 1;
if (window.obj69896_onTap_runningActionsCount < 0) {
	window.obj69896_onTap_runningActionsCount = 0;
} else if (window.obj69896_onTap_runningActionsCount == 0) {
	obj69896_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69896_onTap_runningActionsCount = window.obj69896_onTap_runningActionsCount - 1;
if (window.obj69896_onTap_runningActionsCount < 0) {
	window.obj69896_onTap_runningActionsCount = 0;
} else if (window.obj69896_onTap_runningActionsCount == 0) {
	obj69896_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69896_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69896_onTap_activeActionGroupIndex = -1;
		$("#obj69896").trigger("obj69896_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69896) {
				console.warn("de-queueing event obj69896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69896_onTap_activeActionGroupIndex = 5;
	





















};
obj69887_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69887_onTap_activeActionGroupIndex = -1;
		$("#obj69887").trigger("obj69887_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69887) {
				console.warn("de-queueing event obj69887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69887_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69889();
function switchText_69889() {
	window.obj69887_onTap_runningActionsCount = obj69887_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69887_onTap_runningActionsCount = window.obj69887_onTap_runningActionsCount - 1;
if (window.obj69887_onTap_runningActionsCount < 0) {
	window.obj69887_onTap_runningActionsCount = 0;
} else if (window.obj69887_onTap_runningActionsCount == 0) {
	obj69887_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69887_onTap_runningActionsCount = window.obj69887_onTap_runningActionsCount - 1;
if (window.obj69887_onTap_runningActionsCount < 0) {
	window.obj69887_onTap_runningActionsCount = 0;
} else if (window.obj69887_onTap_runningActionsCount == 0) {
	obj69887_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69887_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69887_onTap_activeActionGroupIndex = -1;
		$("#obj69887").trigger("obj69887_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69887) {
				console.warn("de-queueing event obj69887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69887_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69890();
function runjs_69890() {
	window.obj69887_onTap_runningActionsCount = obj69887_onTap_runningActionsCount + 1;

	$("#obj69887").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69887_onTap_runningActionsCount = window.obj69887_onTap_runningActionsCount - 1;
if (window.obj69887_onTap_runningActionsCount < 0) {
	window.obj69887_onTap_runningActionsCount = 0;
} else if (window.obj69887_onTap_runningActionsCount == 0) {
	obj69887_onTap_actionGroup2();
}
	}, 1);
}







};
obj69887_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69887_onTap_activeActionGroupIndex = -1;
		$("#obj69887").trigger("obj69887_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69887) {
				console.warn("de-queueing event obj69887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69887_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69891();
function playAudio_69891() {
	window.obj69887_onTap_runningActionsCount = obj69887_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69887_onTap_runningActionsCount = window.obj69887_onTap_runningActionsCount - 1;
if (window.obj69887_onTap_runningActionsCount < 0) {
	window.obj69887_onTap_runningActionsCount = 0;
} else if (window.obj69887_onTap_runningActionsCount == 0) {
	obj69887_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69887_onTap_runningActionsCount = window.obj69887_onTap_runningActionsCount - 1;
if (window.obj69887_onTap_runningActionsCount < 0) {
	window.obj69887_onTap_runningActionsCount = 0;
} else if (window.obj69887_onTap_runningActionsCount == 0) {
	obj69887_onTap_actionGroup3();
}
	}
}









};
obj69887_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69887_onTap_activeActionGroupIndex = -1;
		$("#obj69887").trigger("obj69887_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69887) {
				console.warn("de-queueing event obj69887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69887_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69892();
function runjs_69892() {
	window.obj69887_onTap_runningActionsCount = obj69887_onTap_runningActionsCount + 1;

	$("#obj69887").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69887_onTap_runningActionsCount = window.obj69887_onTap_runningActionsCount - 1;
if (window.obj69887_onTap_runningActionsCount < 0) {
	window.obj69887_onTap_runningActionsCount = 0;
} else if (window.obj69887_onTap_runningActionsCount == 0) {
	obj69887_onTap_actionGroup4();
}
	}, 1);
}







};
obj69887_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69887_onTap_activeActionGroupIndex = -1;
		$("#obj69887").trigger("obj69887_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69887) {
				console.warn("de-queueing event obj69887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69887_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69893();
function switchText_69893() {
	window.obj69887_onTap_runningActionsCount = obj69887_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69887_onTap_runningActionsCount = window.obj69887_onTap_runningActionsCount - 1;
if (window.obj69887_onTap_runningActionsCount < 0) {
	window.obj69887_onTap_runningActionsCount = 0;
} else if (window.obj69887_onTap_runningActionsCount == 0) {
	obj69887_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69887_onTap_runningActionsCount = window.obj69887_onTap_runningActionsCount - 1;
if (window.obj69887_onTap_runningActionsCount < 0) {
	window.obj69887_onTap_runningActionsCount = 0;
} else if (window.obj69887_onTap_runningActionsCount == 0) {
	obj69887_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69887_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69887_onTap_activeActionGroupIndex = -1;
		$("#obj69887").trigger("obj69887_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69887) {
				console.warn("de-queueing event obj69887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69887_onTap_activeActionGroupIndex = 5;
	





















};
obj69878_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69878_onTap_activeActionGroupIndex = -1;
		$("#obj69878").trigger("obj69878_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69878) {
				console.warn("de-queueing event obj69878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69878_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69880();
function switchText_69880() {
	window.obj69878_onTap_runningActionsCount = obj69878_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69878_onTap_runningActionsCount = window.obj69878_onTap_runningActionsCount - 1;
if (window.obj69878_onTap_runningActionsCount < 0) {
	window.obj69878_onTap_runningActionsCount = 0;
} else if (window.obj69878_onTap_runningActionsCount == 0) {
	obj69878_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69878_onTap_runningActionsCount = window.obj69878_onTap_runningActionsCount - 1;
if (window.obj69878_onTap_runningActionsCount < 0) {
	window.obj69878_onTap_runningActionsCount = 0;
} else if (window.obj69878_onTap_runningActionsCount == 0) {
	obj69878_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69878_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69878_onTap_activeActionGroupIndex = -1;
		$("#obj69878").trigger("obj69878_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69878) {
				console.warn("de-queueing event obj69878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69878_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69881();
function runjs_69881() {
	window.obj69878_onTap_runningActionsCount = obj69878_onTap_runningActionsCount + 1;

	$("#obj69878").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69878_onTap_runningActionsCount = window.obj69878_onTap_runningActionsCount - 1;
if (window.obj69878_onTap_runningActionsCount < 0) {
	window.obj69878_onTap_runningActionsCount = 0;
} else if (window.obj69878_onTap_runningActionsCount == 0) {
	obj69878_onTap_actionGroup2();
}
	}, 1);
}







};
obj69878_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69878_onTap_activeActionGroupIndex = -1;
		$("#obj69878").trigger("obj69878_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69878) {
				console.warn("de-queueing event obj69878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69878_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69882();
function playAudio_69882() {
	window.obj69878_onTap_runningActionsCount = obj69878_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69878_onTap_runningActionsCount = window.obj69878_onTap_runningActionsCount - 1;
if (window.obj69878_onTap_runningActionsCount < 0) {
	window.obj69878_onTap_runningActionsCount = 0;
} else if (window.obj69878_onTap_runningActionsCount == 0) {
	obj69878_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69878_onTap_runningActionsCount = window.obj69878_onTap_runningActionsCount - 1;
if (window.obj69878_onTap_runningActionsCount < 0) {
	window.obj69878_onTap_runningActionsCount = 0;
} else if (window.obj69878_onTap_runningActionsCount == 0) {
	obj69878_onTap_actionGroup3();
}
	}
}









};
obj69878_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69878_onTap_activeActionGroupIndex = -1;
		$("#obj69878").trigger("obj69878_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69878) {
				console.warn("de-queueing event obj69878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69878_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69883();
function runjs_69883() {
	window.obj69878_onTap_runningActionsCount = obj69878_onTap_runningActionsCount + 1;

	$("#obj69878").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69878_onTap_runningActionsCount = window.obj69878_onTap_runningActionsCount - 1;
if (window.obj69878_onTap_runningActionsCount < 0) {
	window.obj69878_onTap_runningActionsCount = 0;
} else if (window.obj69878_onTap_runningActionsCount == 0) {
	obj69878_onTap_actionGroup4();
}
	}, 1);
}







};
obj69878_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69878_onTap_activeActionGroupIndex = -1;
		$("#obj69878").trigger("obj69878_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69878) {
				console.warn("de-queueing event obj69878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69878_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69884();
function switchText_69884() {
	window.obj69878_onTap_runningActionsCount = obj69878_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69878_onTap_runningActionsCount = window.obj69878_onTap_runningActionsCount - 1;
if (window.obj69878_onTap_runningActionsCount < 0) {
	window.obj69878_onTap_runningActionsCount = 0;
} else if (window.obj69878_onTap_runningActionsCount == 0) {
	obj69878_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69878_onTap_runningActionsCount = window.obj69878_onTap_runningActionsCount - 1;
if (window.obj69878_onTap_runningActionsCount < 0) {
	window.obj69878_onTap_runningActionsCount = 0;
} else if (window.obj69878_onTap_runningActionsCount == 0) {
	obj69878_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69878_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69878_onTap_activeActionGroupIndex = -1;
		$("#obj69878").trigger("obj69878_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69878) {
				console.warn("de-queueing event obj69878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69878_onTap_activeActionGroupIndex = 5;
	





















};
obj69871_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69871_onTap_activeActionGroupIndex = -1;
		$("#obj69871").trigger("obj69871_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69871) {
				console.warn("de-queueing event obj69871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69871_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69873();
function switchText_69873() {
	window.obj69871_onTap_runningActionsCount = obj69871_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69871_onTap_runningActionsCount = window.obj69871_onTap_runningActionsCount - 1;
if (window.obj69871_onTap_runningActionsCount < 0) {
	window.obj69871_onTap_runningActionsCount = 0;
} else if (window.obj69871_onTap_runningActionsCount == 0) {
	obj69871_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69871_onTap_runningActionsCount = window.obj69871_onTap_runningActionsCount - 1;
if (window.obj69871_onTap_runningActionsCount < 0) {
	window.obj69871_onTap_runningActionsCount = 0;
} else if (window.obj69871_onTap_runningActionsCount == 0) {
	obj69871_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69871_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69871_onTap_activeActionGroupIndex = -1;
		$("#obj69871").trigger("obj69871_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69871) {
				console.warn("de-queueing event obj69871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69871_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69874();
function runjs_69874() {
	window.obj69871_onTap_runningActionsCount = obj69871_onTap_runningActionsCount + 1;

	$("#obj69871").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69871_onTap_runningActionsCount = window.obj69871_onTap_runningActionsCount - 1;
if (window.obj69871_onTap_runningActionsCount < 0) {
	window.obj69871_onTap_runningActionsCount = 0;
} else if (window.obj69871_onTap_runningActionsCount == 0) {
	obj69871_onTap_actionGroup2();
}
	}, 1);
}







};
obj69871_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69871_onTap_activeActionGroupIndex = -1;
		$("#obj69871").trigger("obj69871_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69871) {
				console.warn("de-queueing event obj69871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69871_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69875();
function playAudio_69875() {
	window.obj69871_onTap_runningActionsCount = obj69871_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69871_onTap_runningActionsCount = window.obj69871_onTap_runningActionsCount - 1;
if (window.obj69871_onTap_runningActionsCount < 0) {
	window.obj69871_onTap_runningActionsCount = 0;
} else if (window.obj69871_onTap_runningActionsCount == 0) {
	obj69871_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69871_onTap_runningActionsCount = window.obj69871_onTap_runningActionsCount - 1;
if (window.obj69871_onTap_runningActionsCount < 0) {
	window.obj69871_onTap_runningActionsCount = 0;
} else if (window.obj69871_onTap_runningActionsCount == 0) {
	obj69871_onTap_actionGroup3();
}
	}
}









};
obj69871_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69871_onTap_activeActionGroupIndex = -1;
		$("#obj69871").trigger("obj69871_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69871) {
				console.warn("de-queueing event obj69871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69871_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69876();
function runjs_69876() {
	window.obj69871_onTap_runningActionsCount = obj69871_onTap_runningActionsCount + 1;

	$("#obj69871").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69871_onTap_runningActionsCount = window.obj69871_onTap_runningActionsCount - 1;
if (window.obj69871_onTap_runningActionsCount < 0) {
	window.obj69871_onTap_runningActionsCount = 0;
} else if (window.obj69871_onTap_runningActionsCount == 0) {
	obj69871_onTap_actionGroup4();
}
	}, 1);
}







};
obj69871_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69871_onTap_activeActionGroupIndex = -1;
		$("#obj69871").trigger("obj69871_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69871) {
				console.warn("de-queueing event obj69871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69871_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69877();
function switchText_69877() {
	window.obj69871_onTap_runningActionsCount = obj69871_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69871_onTap_runningActionsCount = window.obj69871_onTap_runningActionsCount - 1;
if (window.obj69871_onTap_runningActionsCount < 0) {
	window.obj69871_onTap_runningActionsCount = 0;
} else if (window.obj69871_onTap_runningActionsCount == 0) {
	obj69871_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69871_onTap_runningActionsCount = window.obj69871_onTap_runningActionsCount - 1;
if (window.obj69871_onTap_runningActionsCount < 0) {
	window.obj69871_onTap_runningActionsCount = 0;
} else if (window.obj69871_onTap_runningActionsCount == 0) {
	obj69871_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69871_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69871_onTap_activeActionGroupIndex = -1;
		$("#obj69871").trigger("obj69871_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69871) {
				console.warn("de-queueing event obj69871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69871_onTap_activeActionGroupIndex = 5;
	





















};
obj69864_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69864_onTap_activeActionGroupIndex = -1;
		$("#obj69864").trigger("obj69864_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69864) {
				console.warn("de-queueing event obj69864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69864_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69866();
function switchText_69866() {
	window.obj69864_onTap_runningActionsCount = obj69864_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69864_onTap_runningActionsCount = window.obj69864_onTap_runningActionsCount - 1;
if (window.obj69864_onTap_runningActionsCount < 0) {
	window.obj69864_onTap_runningActionsCount = 0;
} else if (window.obj69864_onTap_runningActionsCount == 0) {
	obj69864_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69864_onTap_runningActionsCount = window.obj69864_onTap_runningActionsCount - 1;
if (window.obj69864_onTap_runningActionsCount < 0) {
	window.obj69864_onTap_runningActionsCount = 0;
} else if (window.obj69864_onTap_runningActionsCount == 0) {
	obj69864_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69864_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69864_onTap_activeActionGroupIndex = -1;
		$("#obj69864").trigger("obj69864_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69864) {
				console.warn("de-queueing event obj69864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69864_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69867();
function runjs_69867() {
	window.obj69864_onTap_runningActionsCount = obj69864_onTap_runningActionsCount + 1;

	$("#obj69864").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69864_onTap_runningActionsCount = window.obj69864_onTap_runningActionsCount - 1;
if (window.obj69864_onTap_runningActionsCount < 0) {
	window.obj69864_onTap_runningActionsCount = 0;
} else if (window.obj69864_onTap_runningActionsCount == 0) {
	obj69864_onTap_actionGroup2();
}
	}, 1);
}







};
obj69864_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69864_onTap_activeActionGroupIndex = -1;
		$("#obj69864").trigger("obj69864_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69864) {
				console.warn("de-queueing event obj69864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69864_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69868();
function playAudio_69868() {
	window.obj69864_onTap_runningActionsCount = obj69864_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69864_onTap_runningActionsCount = window.obj69864_onTap_runningActionsCount - 1;
if (window.obj69864_onTap_runningActionsCount < 0) {
	window.obj69864_onTap_runningActionsCount = 0;
} else if (window.obj69864_onTap_runningActionsCount == 0) {
	obj69864_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69864_onTap_runningActionsCount = window.obj69864_onTap_runningActionsCount - 1;
if (window.obj69864_onTap_runningActionsCount < 0) {
	window.obj69864_onTap_runningActionsCount = 0;
} else if (window.obj69864_onTap_runningActionsCount == 0) {
	obj69864_onTap_actionGroup3();
}
	}
}









};
obj69864_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69864_onTap_activeActionGroupIndex = -1;
		$("#obj69864").trigger("obj69864_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69864) {
				console.warn("de-queueing event obj69864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69864_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69869();
function runjs_69869() {
	window.obj69864_onTap_runningActionsCount = obj69864_onTap_runningActionsCount + 1;

	$("#obj69864").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69864_onTap_runningActionsCount = window.obj69864_onTap_runningActionsCount - 1;
if (window.obj69864_onTap_runningActionsCount < 0) {
	window.obj69864_onTap_runningActionsCount = 0;
} else if (window.obj69864_onTap_runningActionsCount == 0) {
	obj69864_onTap_actionGroup4();
}
	}, 1);
}







};
obj69864_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69864_onTap_activeActionGroupIndex = -1;
		$("#obj69864").trigger("obj69864_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69864) {
				console.warn("de-queueing event obj69864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69864_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69870();
function switchText_69870() {
	window.obj69864_onTap_runningActionsCount = obj69864_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69864_onTap_runningActionsCount = window.obj69864_onTap_runningActionsCount - 1;
if (window.obj69864_onTap_runningActionsCount < 0) {
	window.obj69864_onTap_runningActionsCount = 0;
} else if (window.obj69864_onTap_runningActionsCount == 0) {
	obj69864_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69864_onTap_runningActionsCount = window.obj69864_onTap_runningActionsCount - 1;
if (window.obj69864_onTap_runningActionsCount < 0) {
	window.obj69864_onTap_runningActionsCount = 0;
} else if (window.obj69864_onTap_runningActionsCount == 0) {
	obj69864_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69864_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69864_onTap_activeActionGroupIndex = -1;
		$("#obj69864").trigger("obj69864_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69864) {
				console.warn("de-queueing event obj69864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69864_onTap_activeActionGroupIndex = 5;
	





















};
obj69855_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69855_onTap_activeActionGroupIndex = -1;
		$("#obj69855").trigger("obj69855_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69855) {
				console.warn("de-queueing event obj69855." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69855").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69855_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69857();
function runjs_69857() {
	window.obj69855_onTap_runningActionsCount = obj69855_onTap_runningActionsCount + 1;

	$("#obj69855").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj69855_onTap_runningActionsCount = window.obj69855_onTap_runningActionsCount - 1;
if (window.obj69855_onTap_runningActionsCount < 0) {
	window.obj69855_onTap_runningActionsCount = 0;
} else if (window.obj69855_onTap_runningActionsCount == 0) {
	obj69855_onTap_actionGroup1();
}
	}, 1);
}







};
obj69855_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69855_onTap_activeActionGroupIndex = -1;
		$("#obj69855").trigger("obj69855_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69855) {
				console.warn("de-queueing event obj69855." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69855").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69855_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_69862();
function switchText_69862() {
	window.obj69855_onTap_runningActionsCount = obj69855_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69855_onTap_runningActionsCount = window.obj69855_onTap_runningActionsCount - 1;
if (window.obj69855_onTap_runningActionsCount < 0) {
	window.obj69855_onTap_runningActionsCount = 0;
} else if (window.obj69855_onTap_runningActionsCount == 0) {
	obj69855_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69855_onTap_runningActionsCount = window.obj69855_onTap_runningActionsCount - 1;
if (window.obj69855_onTap_runningActionsCount < 0) {
	window.obj69855_onTap_runningActionsCount = 0;
} else if (window.obj69855_onTap_runningActionsCount == 0) {
	obj69855_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj69855_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69855_onTap_activeActionGroupIndex = -1;
		$("#obj69855").trigger("obj69855_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69855) {
				console.warn("de-queueing event obj69855." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69855").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69855_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_69858();
function runjs_69858() {
	window.obj69855_onTap_runningActionsCount = obj69855_onTap_runningActionsCount + 1;

	$("#obj69811").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj69855_onTap_runningActionsCount = window.obj69855_onTap_runningActionsCount - 1;
if (window.obj69855_onTap_runningActionsCount < 0) {
	window.obj69855_onTap_runningActionsCount = 0;
} else if (window.obj69855_onTap_runningActionsCount == 0) {
	obj69855_onTap_actionGroup3();
}
	}, 1);
}







};
obj69855_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69855_onTap_activeActionGroupIndex = -1;
		$("#obj69855").trigger("obj69855_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69855) {
				console.warn("de-queueing event obj69855." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69855").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69855_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69859();
function runjs_69859() {
	window.obj69855_onTap_runningActionsCount = obj69855_onTap_runningActionsCount + 1;

	$("#obj69770").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj69855_onTap_runningActionsCount = window.obj69855_onTap_runningActionsCount - 1;
if (window.obj69855_onTap_runningActionsCount < 0) {
	window.obj69855_onTap_runningActionsCount = 0;
} else if (window.obj69855_onTap_runningActionsCount == 0) {
	obj69855_onTap_actionGroup4();
}
	}, 1);
}







};
obj69855_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69855_onTap_activeActionGroupIndex = -1;
		$("#obj69855").trigger("obj69855_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69855) {
				console.warn("de-queueing event obj69855." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69855").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69855_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_69860();
function runjs_69860() {
	window.obj69855_onTap_runningActionsCount = obj69855_onTap_runningActionsCount + 1;

	$("#obj69724").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj69855_onTap_runningActionsCount = window.obj69855_onTap_runningActionsCount - 1;
if (window.obj69855_onTap_runningActionsCount < 0) {
	window.obj69855_onTap_runningActionsCount = 0;
} else if (window.obj69855_onTap_runningActionsCount == 0) {
	obj69855_onTap_actionGroup5();
}
	}, 1);
}







};
obj69855_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69855_onTap_activeActionGroupIndex = -1;
		$("#obj69855").trigger("obj69855_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69855) {
				console.warn("de-queueing event obj69855." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69855").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69855_onTap_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_69861();
function runjs_69861() {
	window.obj69855_onTap_runningActionsCount = obj69855_onTap_runningActionsCount + 1;

	$("#obj69709").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj69855_onTap_runningActionsCount = window.obj69855_onTap_runningActionsCount - 1;
if (window.obj69855_onTap_runningActionsCount < 0) {
	window.obj69855_onTap_runningActionsCount = 0;
} else if (window.obj69855_onTap_runningActionsCount == 0) {
	obj69855_onTap_actionGroup6();
}
	}, 1);
}







};
obj69855_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69855_onTap_activeActionGroupIndex = -1;
		$("#obj69855").trigger("obj69855_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69855) {
				console.warn("de-queueing event obj69855." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69855").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69855_onTap_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj69707 
playAudio_69863();
function playAudio_69863() {
	window.obj69855_onTap_runningActionsCount = obj69855_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69707")[0];
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
		    window.obj69855_onTap_runningActionsCount = window.obj69855_onTap_runningActionsCount - 1;
if (window.obj69855_onTap_runningActionsCount < 0) {
	window.obj69855_onTap_runningActionsCount = 0;
} else if (window.obj69855_onTap_runningActionsCount == 0) {
	obj69855_onTap_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69855_onTap_runningActionsCount = window.obj69855_onTap_runningActionsCount - 1;
if (window.obj69855_onTap_runningActionsCount < 0) {
	window.obj69855_onTap_runningActionsCount = 0;
} else if (window.obj69855_onTap_runningActionsCount == 0) {
	obj69855_onTap_actionGroup7();
}
	}
}









};
obj69855_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69855_onTap_activeActionGroupIndex = -1;
		$("#obj69855").trigger("obj69855_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69855) {
				console.warn("de-queueing event obj69855." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69855").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69855_onTap_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_90144();
function switchText_90144() {
	window.obj69855_onTap_runningActionsCount = obj69855_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69855_onTap_runningActionsCount = window.obj69855_onTap_runningActionsCount - 1;
if (window.obj69855_onTap_runningActionsCount < 0) {
	window.obj69855_onTap_runningActionsCount = 0;
} else if (window.obj69855_onTap_runningActionsCount == 0) {
	obj69855_onTap_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69855_onTap_runningActionsCount = window.obj69855_onTap_runningActionsCount - 1;
if (window.obj69855_onTap_runningActionsCount < 0) {
	window.obj69855_onTap_runningActionsCount = 0;
} else if (window.obj69855_onTap_runningActionsCount == 0) {
	obj69855_onTap_actionGroup8();
}
		}, 1);
	}
}






};
obj69855_onTap_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69855_onTap_activeActionGroupIndex = -1;
		$("#obj69855").trigger("obj69855_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69855) {
				console.warn("de-queueing event obj69855." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69855").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69855_onTap_activeActionGroupIndex = 8;
	





















};
obj69848_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69848_onTap_activeActionGroupIndex = -1;
		$("#obj69848").trigger("obj69848_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69848) {
				console.warn("de-queueing event obj69848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69848_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69850();
function switchText_69850() {
	window.obj69848_onTap_runningActionsCount = obj69848_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69848_onTap_runningActionsCount = window.obj69848_onTap_runningActionsCount - 1;
if (window.obj69848_onTap_runningActionsCount < 0) {
	window.obj69848_onTap_runningActionsCount = 0;
} else if (window.obj69848_onTap_runningActionsCount == 0) {
	obj69848_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69848_onTap_runningActionsCount = window.obj69848_onTap_runningActionsCount - 1;
if (window.obj69848_onTap_runningActionsCount < 0) {
	window.obj69848_onTap_runningActionsCount = 0;
} else if (window.obj69848_onTap_runningActionsCount == 0) {
	obj69848_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69848_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69848_onTap_activeActionGroupIndex = -1;
		$("#obj69848").trigger("obj69848_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69848) {
				console.warn("de-queueing event obj69848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69848_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69851();
function runjs_69851() {
	window.obj69848_onTap_runningActionsCount = obj69848_onTap_runningActionsCount + 1;

	$("#obj69848").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69848_onTap_runningActionsCount = window.obj69848_onTap_runningActionsCount - 1;
if (window.obj69848_onTap_runningActionsCount < 0) {
	window.obj69848_onTap_runningActionsCount = 0;
} else if (window.obj69848_onTap_runningActionsCount == 0) {
	obj69848_onTap_actionGroup2();
}
	}, 1);
}







};
obj69848_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69848_onTap_activeActionGroupIndex = -1;
		$("#obj69848").trigger("obj69848_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69848) {
				console.warn("de-queueing event obj69848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69848_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69852();
function playAudio_69852() {
	window.obj69848_onTap_runningActionsCount = obj69848_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69848_onTap_runningActionsCount = window.obj69848_onTap_runningActionsCount - 1;
if (window.obj69848_onTap_runningActionsCount < 0) {
	window.obj69848_onTap_runningActionsCount = 0;
} else if (window.obj69848_onTap_runningActionsCount == 0) {
	obj69848_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69848_onTap_runningActionsCount = window.obj69848_onTap_runningActionsCount - 1;
if (window.obj69848_onTap_runningActionsCount < 0) {
	window.obj69848_onTap_runningActionsCount = 0;
} else if (window.obj69848_onTap_runningActionsCount == 0) {
	obj69848_onTap_actionGroup3();
}
	}
}









};
obj69848_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69848_onTap_activeActionGroupIndex = -1;
		$("#obj69848").trigger("obj69848_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69848) {
				console.warn("de-queueing event obj69848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69848_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69853();
function runjs_69853() {
	window.obj69848_onTap_runningActionsCount = obj69848_onTap_runningActionsCount + 1;

	$("#obj69848").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69848_onTap_runningActionsCount = window.obj69848_onTap_runningActionsCount - 1;
if (window.obj69848_onTap_runningActionsCount < 0) {
	window.obj69848_onTap_runningActionsCount = 0;
} else if (window.obj69848_onTap_runningActionsCount == 0) {
	obj69848_onTap_actionGroup4();
}
	}, 1);
}







};
obj69848_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69848_onTap_activeActionGroupIndex = -1;
		$("#obj69848").trigger("obj69848_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69848) {
				console.warn("de-queueing event obj69848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69848_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69854();
function switchText_69854() {
	window.obj69848_onTap_runningActionsCount = obj69848_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69848_onTap_runningActionsCount = window.obj69848_onTap_runningActionsCount - 1;
if (window.obj69848_onTap_runningActionsCount < 0) {
	window.obj69848_onTap_runningActionsCount = 0;
} else if (window.obj69848_onTap_runningActionsCount == 0) {
	obj69848_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69848_onTap_runningActionsCount = window.obj69848_onTap_runningActionsCount - 1;
if (window.obj69848_onTap_runningActionsCount < 0) {
	window.obj69848_onTap_runningActionsCount = 0;
} else if (window.obj69848_onTap_runningActionsCount == 0) {
	obj69848_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69848_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69848_onTap_activeActionGroupIndex = -1;
		$("#obj69848").trigger("obj69848_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69848) {
				console.warn("de-queueing event obj69848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69848_onTap_activeActionGroupIndex = 5;
	





















};
obj69839_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69839_onTap_activeActionGroupIndex = -1;
		$("#obj69839").trigger("obj69839_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69839) {
				console.warn("de-queueing event obj69839." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69839").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69839_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69841();
function switchText_69841() {
	window.obj69839_onTap_runningActionsCount = obj69839_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69839_onTap_runningActionsCount = window.obj69839_onTap_runningActionsCount - 1;
if (window.obj69839_onTap_runningActionsCount < 0) {
	window.obj69839_onTap_runningActionsCount = 0;
} else if (window.obj69839_onTap_runningActionsCount == 0) {
	obj69839_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69839_onTap_runningActionsCount = window.obj69839_onTap_runningActionsCount - 1;
if (window.obj69839_onTap_runningActionsCount < 0) {
	window.obj69839_onTap_runningActionsCount = 0;
} else if (window.obj69839_onTap_runningActionsCount == 0) {
	obj69839_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69839_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69839_onTap_activeActionGroupIndex = -1;
		$("#obj69839").trigger("obj69839_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69839) {
				console.warn("de-queueing event obj69839." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69839").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69839_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69842();
function runjs_69842() {
	window.obj69839_onTap_runningActionsCount = obj69839_onTap_runningActionsCount + 1;

	$("#obj69839").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69839_onTap_runningActionsCount = window.obj69839_onTap_runningActionsCount - 1;
if (window.obj69839_onTap_runningActionsCount < 0) {
	window.obj69839_onTap_runningActionsCount = 0;
} else if (window.obj69839_onTap_runningActionsCount == 0) {
	obj69839_onTap_actionGroup2();
}
	}, 1);
}







};
obj69839_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69839_onTap_activeActionGroupIndex = -1;
		$("#obj69839").trigger("obj69839_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69839) {
				console.warn("de-queueing event obj69839." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69839").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69839_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69843();
function playAudio_69843() {
	window.obj69839_onTap_runningActionsCount = obj69839_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69839_onTap_runningActionsCount = window.obj69839_onTap_runningActionsCount - 1;
if (window.obj69839_onTap_runningActionsCount < 0) {
	window.obj69839_onTap_runningActionsCount = 0;
} else if (window.obj69839_onTap_runningActionsCount == 0) {
	obj69839_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69839_onTap_runningActionsCount = window.obj69839_onTap_runningActionsCount - 1;
if (window.obj69839_onTap_runningActionsCount < 0) {
	window.obj69839_onTap_runningActionsCount = 0;
} else if (window.obj69839_onTap_runningActionsCount == 0) {
	obj69839_onTap_actionGroup3();
}
	}
}









};
obj69839_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69839_onTap_activeActionGroupIndex = -1;
		$("#obj69839").trigger("obj69839_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69839) {
				console.warn("de-queueing event obj69839." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69839").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69839_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69844();
function runjs_69844() {
	window.obj69839_onTap_runningActionsCount = obj69839_onTap_runningActionsCount + 1;

	$("#obj69839").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69839_onTap_runningActionsCount = window.obj69839_onTap_runningActionsCount - 1;
if (window.obj69839_onTap_runningActionsCount < 0) {
	window.obj69839_onTap_runningActionsCount = 0;
} else if (window.obj69839_onTap_runningActionsCount == 0) {
	obj69839_onTap_actionGroup4();
}
	}, 1);
}







};
obj69839_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69839_onTap_activeActionGroupIndex = -1;
		$("#obj69839").trigger("obj69839_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69839) {
				console.warn("de-queueing event obj69839." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69839").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69839_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69845();
function switchText_69845() {
	window.obj69839_onTap_runningActionsCount = obj69839_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69839_onTap_runningActionsCount = window.obj69839_onTap_runningActionsCount - 1;
if (window.obj69839_onTap_runningActionsCount < 0) {
	window.obj69839_onTap_runningActionsCount = 0;
} else if (window.obj69839_onTap_runningActionsCount == 0) {
	obj69839_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69839_onTap_runningActionsCount = window.obj69839_onTap_runningActionsCount - 1;
if (window.obj69839_onTap_runningActionsCount < 0) {
	window.obj69839_onTap_runningActionsCount = 0;
} else if (window.obj69839_onTap_runningActionsCount == 0) {
	obj69839_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69839_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69839_onTap_activeActionGroupIndex = -1;
		$("#obj69839").trigger("obj69839_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69839) {
				console.warn("de-queueing event obj69839." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69839").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69839_onTap_activeActionGroupIndex = 5;
	





















};
obj69832_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69832_onTap_activeActionGroupIndex = -1;
		$("#obj69832").trigger("obj69832_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69832) {
				console.warn("de-queueing event obj69832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69832_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69834();
function switchText_69834() {
	window.obj69832_onTap_runningActionsCount = obj69832_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69832_onTap_runningActionsCount = window.obj69832_onTap_runningActionsCount - 1;
if (window.obj69832_onTap_runningActionsCount < 0) {
	window.obj69832_onTap_runningActionsCount = 0;
} else if (window.obj69832_onTap_runningActionsCount == 0) {
	obj69832_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69832_onTap_runningActionsCount = window.obj69832_onTap_runningActionsCount - 1;
if (window.obj69832_onTap_runningActionsCount < 0) {
	window.obj69832_onTap_runningActionsCount = 0;
} else if (window.obj69832_onTap_runningActionsCount == 0) {
	obj69832_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69832_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69832_onTap_activeActionGroupIndex = -1;
		$("#obj69832").trigger("obj69832_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69832) {
				console.warn("de-queueing event obj69832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69832_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69835();
function runjs_69835() {
	window.obj69832_onTap_runningActionsCount = obj69832_onTap_runningActionsCount + 1;

	$("#obj69832").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69832_onTap_runningActionsCount = window.obj69832_onTap_runningActionsCount - 1;
if (window.obj69832_onTap_runningActionsCount < 0) {
	window.obj69832_onTap_runningActionsCount = 0;
} else if (window.obj69832_onTap_runningActionsCount == 0) {
	obj69832_onTap_actionGroup2();
}
	}, 1);
}







};
obj69832_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69832_onTap_activeActionGroupIndex = -1;
		$("#obj69832").trigger("obj69832_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69832) {
				console.warn("de-queueing event obj69832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69832_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69836();
function playAudio_69836() {
	window.obj69832_onTap_runningActionsCount = obj69832_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69832_onTap_runningActionsCount = window.obj69832_onTap_runningActionsCount - 1;
if (window.obj69832_onTap_runningActionsCount < 0) {
	window.obj69832_onTap_runningActionsCount = 0;
} else if (window.obj69832_onTap_runningActionsCount == 0) {
	obj69832_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69832_onTap_runningActionsCount = window.obj69832_onTap_runningActionsCount - 1;
if (window.obj69832_onTap_runningActionsCount < 0) {
	window.obj69832_onTap_runningActionsCount = 0;
} else if (window.obj69832_onTap_runningActionsCount == 0) {
	obj69832_onTap_actionGroup3();
}
	}
}









};
obj69832_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69832_onTap_activeActionGroupIndex = -1;
		$("#obj69832").trigger("obj69832_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69832) {
				console.warn("de-queueing event obj69832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69832_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69837();
function runjs_69837() {
	window.obj69832_onTap_runningActionsCount = obj69832_onTap_runningActionsCount + 1;

	$("#obj69832").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69832_onTap_runningActionsCount = window.obj69832_onTap_runningActionsCount - 1;
if (window.obj69832_onTap_runningActionsCount < 0) {
	window.obj69832_onTap_runningActionsCount = 0;
} else if (window.obj69832_onTap_runningActionsCount == 0) {
	obj69832_onTap_actionGroup4();
}
	}, 1);
}







};
obj69832_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69832_onTap_activeActionGroupIndex = -1;
		$("#obj69832").trigger("obj69832_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69832) {
				console.warn("de-queueing event obj69832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69832_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69838();
function switchText_69838() {
	window.obj69832_onTap_runningActionsCount = obj69832_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69832_onTap_runningActionsCount = window.obj69832_onTap_runningActionsCount - 1;
if (window.obj69832_onTap_runningActionsCount < 0) {
	window.obj69832_onTap_runningActionsCount = 0;
} else if (window.obj69832_onTap_runningActionsCount == 0) {
	obj69832_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69832_onTap_runningActionsCount = window.obj69832_onTap_runningActionsCount - 1;
if (window.obj69832_onTap_runningActionsCount < 0) {
	window.obj69832_onTap_runningActionsCount = 0;
} else if (window.obj69832_onTap_runningActionsCount == 0) {
	obj69832_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69832_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69832_onTap_activeActionGroupIndex = -1;
		$("#obj69832").trigger("obj69832_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69832) {
				console.warn("de-queueing event obj69832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69832_onTap_activeActionGroupIndex = 5;
	





















};
obj69825_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69825_onTap_activeActionGroupIndex = -1;
		$("#obj69825").trigger("obj69825_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69825) {
				console.warn("de-queueing event obj69825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69825_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69827();
function switchText_69827() {
	window.obj69825_onTap_runningActionsCount = obj69825_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69825_onTap_runningActionsCount = window.obj69825_onTap_runningActionsCount - 1;
if (window.obj69825_onTap_runningActionsCount < 0) {
	window.obj69825_onTap_runningActionsCount = 0;
} else if (window.obj69825_onTap_runningActionsCount == 0) {
	obj69825_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69825_onTap_runningActionsCount = window.obj69825_onTap_runningActionsCount - 1;
if (window.obj69825_onTap_runningActionsCount < 0) {
	window.obj69825_onTap_runningActionsCount = 0;
} else if (window.obj69825_onTap_runningActionsCount == 0) {
	obj69825_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69825_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69825_onTap_activeActionGroupIndex = -1;
		$("#obj69825").trigger("obj69825_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69825) {
				console.warn("de-queueing event obj69825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69825_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69828();
function runjs_69828() {
	window.obj69825_onTap_runningActionsCount = obj69825_onTap_runningActionsCount + 1;

	$("#obj69825").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69825_onTap_runningActionsCount = window.obj69825_onTap_runningActionsCount - 1;
if (window.obj69825_onTap_runningActionsCount < 0) {
	window.obj69825_onTap_runningActionsCount = 0;
} else if (window.obj69825_onTap_runningActionsCount == 0) {
	obj69825_onTap_actionGroup2();
}
	}, 1);
}







};
obj69825_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69825_onTap_activeActionGroupIndex = -1;
		$("#obj69825").trigger("obj69825_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69825) {
				console.warn("de-queueing event obj69825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69825_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69829();
function playAudio_69829() {
	window.obj69825_onTap_runningActionsCount = obj69825_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69825_onTap_runningActionsCount = window.obj69825_onTap_runningActionsCount - 1;
if (window.obj69825_onTap_runningActionsCount < 0) {
	window.obj69825_onTap_runningActionsCount = 0;
} else if (window.obj69825_onTap_runningActionsCount == 0) {
	obj69825_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69825_onTap_runningActionsCount = window.obj69825_onTap_runningActionsCount - 1;
if (window.obj69825_onTap_runningActionsCount < 0) {
	window.obj69825_onTap_runningActionsCount = 0;
} else if (window.obj69825_onTap_runningActionsCount == 0) {
	obj69825_onTap_actionGroup3();
}
	}
}









};
obj69825_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69825_onTap_activeActionGroupIndex = -1;
		$("#obj69825").trigger("obj69825_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69825) {
				console.warn("de-queueing event obj69825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69825_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69830();
function runjs_69830() {
	window.obj69825_onTap_runningActionsCount = obj69825_onTap_runningActionsCount + 1;

	$("#obj69825").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69825_onTap_runningActionsCount = window.obj69825_onTap_runningActionsCount - 1;
if (window.obj69825_onTap_runningActionsCount < 0) {
	window.obj69825_onTap_runningActionsCount = 0;
} else if (window.obj69825_onTap_runningActionsCount == 0) {
	obj69825_onTap_actionGroup4();
}
	}, 1);
}







};
obj69825_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69825_onTap_activeActionGroupIndex = -1;
		$("#obj69825").trigger("obj69825_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69825) {
				console.warn("de-queueing event obj69825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69825_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69831();
function switchText_69831() {
	window.obj69825_onTap_runningActionsCount = obj69825_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69825_onTap_runningActionsCount = window.obj69825_onTap_runningActionsCount - 1;
if (window.obj69825_onTap_runningActionsCount < 0) {
	window.obj69825_onTap_runningActionsCount = 0;
} else if (window.obj69825_onTap_runningActionsCount == 0) {
	obj69825_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69825_onTap_runningActionsCount = window.obj69825_onTap_runningActionsCount - 1;
if (window.obj69825_onTap_runningActionsCount < 0) {
	window.obj69825_onTap_runningActionsCount = 0;
} else if (window.obj69825_onTap_runningActionsCount == 0) {
	obj69825_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69825_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69825_onTap_activeActionGroupIndex = -1;
		$("#obj69825").trigger("obj69825_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69825) {
				console.warn("de-queueing event obj69825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69825_onTap_activeActionGroupIndex = 5;
	





















};
obj69822_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69822_onTap_activeActionGroupIndex = -1;
		$("#obj69822").trigger("obj69822_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69822) {
				console.warn("de-queueing event obj69822." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69822").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69822_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69824();
function runjs_69824() {
	window.obj69822_onTap_runningActionsCount = obj69822_onTap_runningActionsCount + 1;

	$("#obj69822").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj69822_onTap_runningActionsCount = window.obj69822_onTap_runningActionsCount - 1;
if (window.obj69822_onTap_runningActionsCount < 0) {
	window.obj69822_onTap_runningActionsCount = 0;
} else if (window.obj69822_onTap_runningActionsCount == 0) {
	obj69822_onTap_actionGroup1();
}
	}, 1);
}







};
obj69822_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69822_onTap_activeActionGroupIndex = -1;
		$("#obj69822").trigger("obj69822_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69822) {
				console.warn("de-queueing event obj69822." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69822").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69822_onTap_activeActionGroupIndex = 1;
	





















};
obj69813_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69813_onTap_activeActionGroupIndex = -1;
		$("#obj69813").trigger("obj69813_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69813) {
				console.warn("de-queueing event obj69813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69813_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69815();
function runjs_69815() {
	window.obj69813_onTap_runningActionsCount = obj69813_onTap_runningActionsCount + 1;

	$("#obj69813").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj69813_onTap_runningActionsCount = window.obj69813_onTap_runningActionsCount - 1;
if (window.obj69813_onTap_runningActionsCount < 0) {
	window.obj69813_onTap_runningActionsCount = 0;
} else if (window.obj69813_onTap_runningActionsCount == 0) {
	obj69813_onTap_actionGroup1();
}
	}, 1);
}







};
obj69813_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69813_onTap_activeActionGroupIndex = -1;
		$("#obj69813").trigger("obj69813_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69813) {
				console.warn("de-queueing event obj69813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69813_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_69820();
function switchText_69820() {
	window.obj69813_onTap_runningActionsCount = obj69813_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69813_onTap_runningActionsCount = window.obj69813_onTap_runningActionsCount - 1;
if (window.obj69813_onTap_runningActionsCount < 0) {
	window.obj69813_onTap_runningActionsCount = 0;
} else if (window.obj69813_onTap_runningActionsCount == 0) {
	obj69813_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69813_onTap_runningActionsCount = window.obj69813_onTap_runningActionsCount - 1;
if (window.obj69813_onTap_runningActionsCount < 0) {
	window.obj69813_onTap_runningActionsCount = 0;
} else if (window.obj69813_onTap_runningActionsCount == 0) {
	obj69813_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj69813_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69813_onTap_activeActionGroupIndex = -1;
		$("#obj69813").trigger("obj69813_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69813) {
				console.warn("de-queueing event obj69813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69813_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_69816();
function runjs_69816() {
	window.obj69813_onTap_runningActionsCount = obj69813_onTap_runningActionsCount + 1;

	$("#obj69811").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj69813_onTap_runningActionsCount = window.obj69813_onTap_runningActionsCount - 1;
if (window.obj69813_onTap_runningActionsCount < 0) {
	window.obj69813_onTap_runningActionsCount = 0;
} else if (window.obj69813_onTap_runningActionsCount == 0) {
	obj69813_onTap_actionGroup3();
}
	}, 1);
}







};
obj69813_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69813_onTap_activeActionGroupIndex = -1;
		$("#obj69813").trigger("obj69813_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69813) {
				console.warn("de-queueing event obj69813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69813_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69817();
function runjs_69817() {
	window.obj69813_onTap_runningActionsCount = obj69813_onTap_runningActionsCount + 1;

	$("#obj69809").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj69813_onTap_runningActionsCount = window.obj69813_onTap_runningActionsCount - 1;
if (window.obj69813_onTap_runningActionsCount < 0) {
	window.obj69813_onTap_runningActionsCount = 0;
} else if (window.obj69813_onTap_runningActionsCount == 0) {
	obj69813_onTap_actionGroup4();
}
	}, 1);
}







};
obj69813_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69813_onTap_activeActionGroupIndex = -1;
		$("#obj69813").trigger("obj69813_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69813) {
				console.warn("de-queueing event obj69813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69813_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_69818();
function runjs_69818() {
	window.obj69813_onTap_runningActionsCount = obj69813_onTap_runningActionsCount + 1;

	$("#obj69807").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj69813_onTap_runningActionsCount = window.obj69813_onTap_runningActionsCount - 1;
if (window.obj69813_onTap_runningActionsCount < 0) {
	window.obj69813_onTap_runningActionsCount = 0;
} else if (window.obj69813_onTap_runningActionsCount == 0) {
	obj69813_onTap_actionGroup5();
}
	}, 1);
}







};
obj69813_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69813_onTap_activeActionGroupIndex = -1;
		$("#obj69813").trigger("obj69813_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69813) {
				console.warn("de-queueing event obj69813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69813_onTap_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_69819();
function runjs_69819() {
	window.obj69813_onTap_runningActionsCount = obj69813_onTap_runningActionsCount + 1;

	$("#obj69695").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj69813_onTap_runningActionsCount = window.obj69813_onTap_runningActionsCount - 1;
if (window.obj69813_onTap_runningActionsCount < 0) {
	window.obj69813_onTap_runningActionsCount = 0;
} else if (window.obj69813_onTap_runningActionsCount == 0) {
	obj69813_onTap_actionGroup6();
}
	}, 1);
}







};
obj69813_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69813_onTap_activeActionGroupIndex = -1;
		$("#obj69813").trigger("obj69813_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69813) {
				console.warn("de-queueing event obj69813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69813_onTap_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj69707 
playAudio_69821();
function playAudio_69821() {
	window.obj69813_onTap_runningActionsCount = obj69813_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69707")[0];
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
		    window.obj69813_onTap_runningActionsCount = window.obj69813_onTap_runningActionsCount - 1;
if (window.obj69813_onTap_runningActionsCount < 0) {
	window.obj69813_onTap_runningActionsCount = 0;
} else if (window.obj69813_onTap_runningActionsCount == 0) {
	obj69813_onTap_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69813_onTap_runningActionsCount = window.obj69813_onTap_runningActionsCount - 1;
if (window.obj69813_onTap_runningActionsCount < 0) {
	window.obj69813_onTap_runningActionsCount = 0;
} else if (window.obj69813_onTap_runningActionsCount == 0) {
	obj69813_onTap_actionGroup7();
}
	}
}









};
obj69813_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69813_onTap_activeActionGroupIndex = -1;
		$("#obj69813").trigger("obj69813_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69813) {
				console.warn("de-queueing event obj69813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69813_onTap_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_90150();
function switchText_90150() {
	window.obj69813_onTap_runningActionsCount = obj69813_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69813_onTap_runningActionsCount = window.obj69813_onTap_runningActionsCount - 1;
if (window.obj69813_onTap_runningActionsCount < 0) {
	window.obj69813_onTap_runningActionsCount = 0;
} else if (window.obj69813_onTap_runningActionsCount == 0) {
	obj69813_onTap_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69813_onTap_runningActionsCount = window.obj69813_onTap_runningActionsCount - 1;
if (window.obj69813_onTap_runningActionsCount < 0) {
	window.obj69813_onTap_runningActionsCount = 0;
} else if (window.obj69813_onTap_runningActionsCount == 0) {
	obj69813_onTap_actionGroup8();
}
		}, 1);
	}
}






};
obj69813_onTap_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69813_onTap_activeActionGroupIndex = -1;
		$("#obj69813").trigger("obj69813_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69813) {
				console.warn("de-queueing event obj69813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69813_onTap_activeActionGroupIndex = 8;
	





















};
obj69800_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69800_onTap_activeActionGroupIndex = -1;
		$("#obj69800").trigger("obj69800_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69800) {
				console.warn("de-queueing event obj69800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69800_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69802();
function switchText_69802() {
	window.obj69800_onTap_runningActionsCount = obj69800_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69800_onTap_runningActionsCount = window.obj69800_onTap_runningActionsCount - 1;
if (window.obj69800_onTap_runningActionsCount < 0) {
	window.obj69800_onTap_runningActionsCount = 0;
} else if (window.obj69800_onTap_runningActionsCount == 0) {
	obj69800_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69800_onTap_runningActionsCount = window.obj69800_onTap_runningActionsCount - 1;
if (window.obj69800_onTap_runningActionsCount < 0) {
	window.obj69800_onTap_runningActionsCount = 0;
} else if (window.obj69800_onTap_runningActionsCount == 0) {
	obj69800_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69800_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69800_onTap_activeActionGroupIndex = -1;
		$("#obj69800").trigger("obj69800_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69800) {
				console.warn("de-queueing event obj69800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69800_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69803();
function runjs_69803() {
	window.obj69800_onTap_runningActionsCount = obj69800_onTap_runningActionsCount + 1;

	$("#obj69800").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69800_onTap_runningActionsCount = window.obj69800_onTap_runningActionsCount - 1;
if (window.obj69800_onTap_runningActionsCount < 0) {
	window.obj69800_onTap_runningActionsCount = 0;
} else if (window.obj69800_onTap_runningActionsCount == 0) {
	obj69800_onTap_actionGroup2();
}
	}, 1);
}







};
obj69800_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69800_onTap_activeActionGroupIndex = -1;
		$("#obj69800").trigger("obj69800_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69800) {
				console.warn("de-queueing event obj69800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69800_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69804();
function playAudio_69804() {
	window.obj69800_onTap_runningActionsCount = obj69800_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69800_onTap_runningActionsCount = window.obj69800_onTap_runningActionsCount - 1;
if (window.obj69800_onTap_runningActionsCount < 0) {
	window.obj69800_onTap_runningActionsCount = 0;
} else if (window.obj69800_onTap_runningActionsCount == 0) {
	obj69800_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69800_onTap_runningActionsCount = window.obj69800_onTap_runningActionsCount - 1;
if (window.obj69800_onTap_runningActionsCount < 0) {
	window.obj69800_onTap_runningActionsCount = 0;
} else if (window.obj69800_onTap_runningActionsCount == 0) {
	obj69800_onTap_actionGroup3();
}
	}
}









};
obj69800_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69800_onTap_activeActionGroupIndex = -1;
		$("#obj69800").trigger("obj69800_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69800) {
				console.warn("de-queueing event obj69800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69800_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69805();
function runjs_69805() {
	window.obj69800_onTap_runningActionsCount = obj69800_onTap_runningActionsCount + 1;

	$("#obj69800").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69800_onTap_runningActionsCount = window.obj69800_onTap_runningActionsCount - 1;
if (window.obj69800_onTap_runningActionsCount < 0) {
	window.obj69800_onTap_runningActionsCount = 0;
} else if (window.obj69800_onTap_runningActionsCount == 0) {
	obj69800_onTap_actionGroup4();
}
	}, 1);
}







};
obj69800_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69800_onTap_activeActionGroupIndex = -1;
		$("#obj69800").trigger("obj69800_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69800) {
				console.warn("de-queueing event obj69800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69800_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69806();
function switchText_69806() {
	window.obj69800_onTap_runningActionsCount = obj69800_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69800_onTap_runningActionsCount = window.obj69800_onTap_runningActionsCount - 1;
if (window.obj69800_onTap_runningActionsCount < 0) {
	window.obj69800_onTap_runningActionsCount = 0;
} else if (window.obj69800_onTap_runningActionsCount == 0) {
	obj69800_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69800_onTap_runningActionsCount = window.obj69800_onTap_runningActionsCount - 1;
if (window.obj69800_onTap_runningActionsCount < 0) {
	window.obj69800_onTap_runningActionsCount = 0;
} else if (window.obj69800_onTap_runningActionsCount == 0) {
	obj69800_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69800_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69800_onTap_activeActionGroupIndex = -1;
		$("#obj69800").trigger("obj69800_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69800) {
				console.warn("de-queueing event obj69800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69800_onTap_activeActionGroupIndex = 5;
	





















};
obj69793_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69793_onTap_activeActionGroupIndex = -1;
		$("#obj69793").trigger("obj69793_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69793) {
				console.warn("de-queueing event obj69793." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69793").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69793_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69795();
function switchText_69795() {
	window.obj69793_onTap_runningActionsCount = obj69793_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69793_onTap_runningActionsCount = window.obj69793_onTap_runningActionsCount - 1;
if (window.obj69793_onTap_runningActionsCount < 0) {
	window.obj69793_onTap_runningActionsCount = 0;
} else if (window.obj69793_onTap_runningActionsCount == 0) {
	obj69793_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69793_onTap_runningActionsCount = window.obj69793_onTap_runningActionsCount - 1;
if (window.obj69793_onTap_runningActionsCount < 0) {
	window.obj69793_onTap_runningActionsCount = 0;
} else if (window.obj69793_onTap_runningActionsCount == 0) {
	obj69793_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69793_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69793_onTap_activeActionGroupIndex = -1;
		$("#obj69793").trigger("obj69793_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69793) {
				console.warn("de-queueing event obj69793." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69793").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69793_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69796();
function runjs_69796() {
	window.obj69793_onTap_runningActionsCount = obj69793_onTap_runningActionsCount + 1;

	$("#obj69793").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69793_onTap_runningActionsCount = window.obj69793_onTap_runningActionsCount - 1;
if (window.obj69793_onTap_runningActionsCount < 0) {
	window.obj69793_onTap_runningActionsCount = 0;
} else if (window.obj69793_onTap_runningActionsCount == 0) {
	obj69793_onTap_actionGroup2();
}
	}, 1);
}







};
obj69793_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69793_onTap_activeActionGroupIndex = -1;
		$("#obj69793").trigger("obj69793_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69793) {
				console.warn("de-queueing event obj69793." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69793").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69793_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69797();
function playAudio_69797() {
	window.obj69793_onTap_runningActionsCount = obj69793_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69793_onTap_runningActionsCount = window.obj69793_onTap_runningActionsCount - 1;
if (window.obj69793_onTap_runningActionsCount < 0) {
	window.obj69793_onTap_runningActionsCount = 0;
} else if (window.obj69793_onTap_runningActionsCount == 0) {
	obj69793_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69793_onTap_runningActionsCount = window.obj69793_onTap_runningActionsCount - 1;
if (window.obj69793_onTap_runningActionsCount < 0) {
	window.obj69793_onTap_runningActionsCount = 0;
} else if (window.obj69793_onTap_runningActionsCount == 0) {
	obj69793_onTap_actionGroup3();
}
	}
}









};
obj69793_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69793_onTap_activeActionGroupIndex = -1;
		$("#obj69793").trigger("obj69793_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69793) {
				console.warn("de-queueing event obj69793." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69793").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69793_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69798();
function runjs_69798() {
	window.obj69793_onTap_runningActionsCount = obj69793_onTap_runningActionsCount + 1;

	$("#obj69793").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69793_onTap_runningActionsCount = window.obj69793_onTap_runningActionsCount - 1;
if (window.obj69793_onTap_runningActionsCount < 0) {
	window.obj69793_onTap_runningActionsCount = 0;
} else if (window.obj69793_onTap_runningActionsCount == 0) {
	obj69793_onTap_actionGroup4();
}
	}, 1);
}







};
obj69793_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69793_onTap_activeActionGroupIndex = -1;
		$("#obj69793").trigger("obj69793_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69793) {
				console.warn("de-queueing event obj69793." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69793").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69793_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69799();
function switchText_69799() {
	window.obj69793_onTap_runningActionsCount = obj69793_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69793_onTap_runningActionsCount = window.obj69793_onTap_runningActionsCount - 1;
if (window.obj69793_onTap_runningActionsCount < 0) {
	window.obj69793_onTap_runningActionsCount = 0;
} else if (window.obj69793_onTap_runningActionsCount == 0) {
	obj69793_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69793_onTap_runningActionsCount = window.obj69793_onTap_runningActionsCount - 1;
if (window.obj69793_onTap_runningActionsCount < 0) {
	window.obj69793_onTap_runningActionsCount = 0;
} else if (window.obj69793_onTap_runningActionsCount == 0) {
	obj69793_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69793_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69793_onTap_activeActionGroupIndex = -1;
		$("#obj69793").trigger("obj69793_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69793) {
				console.warn("de-queueing event obj69793." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69793").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69793_onTap_activeActionGroupIndex = 5;
	





















};
obj69786_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69786_onTap_activeActionGroupIndex = -1;
		$("#obj69786").trigger("obj69786_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69786) {
				console.warn("de-queueing event obj69786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69786_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69788();
function switchText_69788() {
	window.obj69786_onTap_runningActionsCount = obj69786_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69786_onTap_runningActionsCount = window.obj69786_onTap_runningActionsCount - 1;
if (window.obj69786_onTap_runningActionsCount < 0) {
	window.obj69786_onTap_runningActionsCount = 0;
} else if (window.obj69786_onTap_runningActionsCount == 0) {
	obj69786_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69786_onTap_runningActionsCount = window.obj69786_onTap_runningActionsCount - 1;
if (window.obj69786_onTap_runningActionsCount < 0) {
	window.obj69786_onTap_runningActionsCount = 0;
} else if (window.obj69786_onTap_runningActionsCount == 0) {
	obj69786_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69786_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69786_onTap_activeActionGroupIndex = -1;
		$("#obj69786").trigger("obj69786_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69786) {
				console.warn("de-queueing event obj69786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69786_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69789();
function runjs_69789() {
	window.obj69786_onTap_runningActionsCount = obj69786_onTap_runningActionsCount + 1;

	$("#obj69786").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69786_onTap_runningActionsCount = window.obj69786_onTap_runningActionsCount - 1;
if (window.obj69786_onTap_runningActionsCount < 0) {
	window.obj69786_onTap_runningActionsCount = 0;
} else if (window.obj69786_onTap_runningActionsCount == 0) {
	obj69786_onTap_actionGroup2();
}
	}, 1);
}







};
obj69786_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69786_onTap_activeActionGroupIndex = -1;
		$("#obj69786").trigger("obj69786_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69786) {
				console.warn("de-queueing event obj69786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69786_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69790();
function playAudio_69790() {
	window.obj69786_onTap_runningActionsCount = obj69786_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69786_onTap_runningActionsCount = window.obj69786_onTap_runningActionsCount - 1;
if (window.obj69786_onTap_runningActionsCount < 0) {
	window.obj69786_onTap_runningActionsCount = 0;
} else if (window.obj69786_onTap_runningActionsCount == 0) {
	obj69786_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69786_onTap_runningActionsCount = window.obj69786_onTap_runningActionsCount - 1;
if (window.obj69786_onTap_runningActionsCount < 0) {
	window.obj69786_onTap_runningActionsCount = 0;
} else if (window.obj69786_onTap_runningActionsCount == 0) {
	obj69786_onTap_actionGroup3();
}
	}
}









};
obj69786_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69786_onTap_activeActionGroupIndex = -1;
		$("#obj69786").trigger("obj69786_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69786) {
				console.warn("de-queueing event obj69786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69786_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69791();
function runjs_69791() {
	window.obj69786_onTap_runningActionsCount = obj69786_onTap_runningActionsCount + 1;

	$("#obj69786").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69786_onTap_runningActionsCount = window.obj69786_onTap_runningActionsCount - 1;
if (window.obj69786_onTap_runningActionsCount < 0) {
	window.obj69786_onTap_runningActionsCount = 0;
} else if (window.obj69786_onTap_runningActionsCount == 0) {
	obj69786_onTap_actionGroup4();
}
	}, 1);
}







};
obj69786_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69786_onTap_activeActionGroupIndex = -1;
		$("#obj69786").trigger("obj69786_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69786) {
				console.warn("de-queueing event obj69786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69786_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69792();
function switchText_69792() {
	window.obj69786_onTap_runningActionsCount = obj69786_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69786_onTap_runningActionsCount = window.obj69786_onTap_runningActionsCount - 1;
if (window.obj69786_onTap_runningActionsCount < 0) {
	window.obj69786_onTap_runningActionsCount = 0;
} else if (window.obj69786_onTap_runningActionsCount == 0) {
	obj69786_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69786_onTap_runningActionsCount = window.obj69786_onTap_runningActionsCount - 1;
if (window.obj69786_onTap_runningActionsCount < 0) {
	window.obj69786_onTap_runningActionsCount = 0;
} else if (window.obj69786_onTap_runningActionsCount == 0) {
	obj69786_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69786_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69786_onTap_activeActionGroupIndex = -1;
		$("#obj69786").trigger("obj69786_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69786) {
				console.warn("de-queueing event obj69786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69786_onTap_activeActionGroupIndex = 5;
	





















};
obj69779_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69779_onTap_activeActionGroupIndex = -1;
		$("#obj69779").trigger("obj69779_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69779) {
				console.warn("de-queueing event obj69779." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69779").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69779_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69781();
function switchText_69781() {
	window.obj69779_onTap_runningActionsCount = obj69779_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69779_onTap_runningActionsCount = window.obj69779_onTap_runningActionsCount - 1;
if (window.obj69779_onTap_runningActionsCount < 0) {
	window.obj69779_onTap_runningActionsCount = 0;
} else if (window.obj69779_onTap_runningActionsCount == 0) {
	obj69779_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69779_onTap_runningActionsCount = window.obj69779_onTap_runningActionsCount - 1;
if (window.obj69779_onTap_runningActionsCount < 0) {
	window.obj69779_onTap_runningActionsCount = 0;
} else if (window.obj69779_onTap_runningActionsCount == 0) {
	obj69779_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69779_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69779_onTap_activeActionGroupIndex = -1;
		$("#obj69779").trigger("obj69779_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69779) {
				console.warn("de-queueing event obj69779." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69779").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69779_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69782();
function runjs_69782() {
	window.obj69779_onTap_runningActionsCount = obj69779_onTap_runningActionsCount + 1;

	$("#obj69779").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69779_onTap_runningActionsCount = window.obj69779_onTap_runningActionsCount - 1;
if (window.obj69779_onTap_runningActionsCount < 0) {
	window.obj69779_onTap_runningActionsCount = 0;
} else if (window.obj69779_onTap_runningActionsCount == 0) {
	obj69779_onTap_actionGroup2();
}
	}, 1);
}







};
obj69779_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69779_onTap_activeActionGroupIndex = -1;
		$("#obj69779").trigger("obj69779_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69779) {
				console.warn("de-queueing event obj69779." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69779").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69779_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69783();
function playAudio_69783() {
	window.obj69779_onTap_runningActionsCount = obj69779_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69779_onTap_runningActionsCount = window.obj69779_onTap_runningActionsCount - 1;
if (window.obj69779_onTap_runningActionsCount < 0) {
	window.obj69779_onTap_runningActionsCount = 0;
} else if (window.obj69779_onTap_runningActionsCount == 0) {
	obj69779_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69779_onTap_runningActionsCount = window.obj69779_onTap_runningActionsCount - 1;
if (window.obj69779_onTap_runningActionsCount < 0) {
	window.obj69779_onTap_runningActionsCount = 0;
} else if (window.obj69779_onTap_runningActionsCount == 0) {
	obj69779_onTap_actionGroup3();
}
	}
}









};
obj69779_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69779_onTap_activeActionGroupIndex = -1;
		$("#obj69779").trigger("obj69779_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69779) {
				console.warn("de-queueing event obj69779." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69779").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69779_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69784();
function runjs_69784() {
	window.obj69779_onTap_runningActionsCount = obj69779_onTap_runningActionsCount + 1;

	$("#obj69779").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69779_onTap_runningActionsCount = window.obj69779_onTap_runningActionsCount - 1;
if (window.obj69779_onTap_runningActionsCount < 0) {
	window.obj69779_onTap_runningActionsCount = 0;
} else if (window.obj69779_onTap_runningActionsCount == 0) {
	obj69779_onTap_actionGroup4();
}
	}, 1);
}







};
obj69779_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69779_onTap_activeActionGroupIndex = -1;
		$("#obj69779").trigger("obj69779_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69779) {
				console.warn("de-queueing event obj69779." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69779").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69779_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69785();
function switchText_69785() {
	window.obj69779_onTap_runningActionsCount = obj69779_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69779_onTap_runningActionsCount = window.obj69779_onTap_runningActionsCount - 1;
if (window.obj69779_onTap_runningActionsCount < 0) {
	window.obj69779_onTap_runningActionsCount = 0;
} else if (window.obj69779_onTap_runningActionsCount == 0) {
	obj69779_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69779_onTap_runningActionsCount = window.obj69779_onTap_runningActionsCount - 1;
if (window.obj69779_onTap_runningActionsCount < 0) {
	window.obj69779_onTap_runningActionsCount = 0;
} else if (window.obj69779_onTap_runningActionsCount == 0) {
	obj69779_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69779_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69779_onTap_activeActionGroupIndex = -1;
		$("#obj69779").trigger("obj69779_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69779) {
				console.warn("de-queueing event obj69779." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69779").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69779_onTap_activeActionGroupIndex = 5;
	





















};
obj69772_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69772_onTap_activeActionGroupIndex = -1;
		$("#obj69772").trigger("obj69772_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69772) {
				console.warn("de-queueing event obj69772." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69772").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69772_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69774();
function switchText_69774() {
	window.obj69772_onTap_runningActionsCount = obj69772_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69772_onTap_runningActionsCount = window.obj69772_onTap_runningActionsCount - 1;
if (window.obj69772_onTap_runningActionsCount < 0) {
	window.obj69772_onTap_runningActionsCount = 0;
} else if (window.obj69772_onTap_runningActionsCount == 0) {
	obj69772_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69772_onTap_runningActionsCount = window.obj69772_onTap_runningActionsCount - 1;
if (window.obj69772_onTap_runningActionsCount < 0) {
	window.obj69772_onTap_runningActionsCount = 0;
} else if (window.obj69772_onTap_runningActionsCount == 0) {
	obj69772_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69772_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69772_onTap_activeActionGroupIndex = -1;
		$("#obj69772").trigger("obj69772_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69772) {
				console.warn("de-queueing event obj69772." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69772").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69772_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69775();
function runjs_69775() {
	window.obj69772_onTap_runningActionsCount = obj69772_onTap_runningActionsCount + 1;

	$("#obj69772").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69772_onTap_runningActionsCount = window.obj69772_onTap_runningActionsCount - 1;
if (window.obj69772_onTap_runningActionsCount < 0) {
	window.obj69772_onTap_runningActionsCount = 0;
} else if (window.obj69772_onTap_runningActionsCount == 0) {
	obj69772_onTap_actionGroup2();
}
	}, 1);
}







};
obj69772_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69772_onTap_activeActionGroupIndex = -1;
		$("#obj69772").trigger("obj69772_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69772) {
				console.warn("de-queueing event obj69772." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69772").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69772_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69776();
function playAudio_69776() {
	window.obj69772_onTap_runningActionsCount = obj69772_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69772_onTap_runningActionsCount = window.obj69772_onTap_runningActionsCount - 1;
if (window.obj69772_onTap_runningActionsCount < 0) {
	window.obj69772_onTap_runningActionsCount = 0;
} else if (window.obj69772_onTap_runningActionsCount == 0) {
	obj69772_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69772_onTap_runningActionsCount = window.obj69772_onTap_runningActionsCount - 1;
if (window.obj69772_onTap_runningActionsCount < 0) {
	window.obj69772_onTap_runningActionsCount = 0;
} else if (window.obj69772_onTap_runningActionsCount == 0) {
	obj69772_onTap_actionGroup3();
}
	}
}









};
obj69772_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69772_onTap_activeActionGroupIndex = -1;
		$("#obj69772").trigger("obj69772_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69772) {
				console.warn("de-queueing event obj69772." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69772").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69772_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69777();
function runjs_69777() {
	window.obj69772_onTap_runningActionsCount = obj69772_onTap_runningActionsCount + 1;

	$("#obj69772").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69772_onTap_runningActionsCount = window.obj69772_onTap_runningActionsCount - 1;
if (window.obj69772_onTap_runningActionsCount < 0) {
	window.obj69772_onTap_runningActionsCount = 0;
} else if (window.obj69772_onTap_runningActionsCount == 0) {
	obj69772_onTap_actionGroup4();
}
	}, 1);
}







};
obj69772_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69772_onTap_activeActionGroupIndex = -1;
		$("#obj69772").trigger("obj69772_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69772) {
				console.warn("de-queueing event obj69772." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69772").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69772_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69778();
function switchText_69778() {
	window.obj69772_onTap_runningActionsCount = obj69772_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69772_onTap_runningActionsCount = window.obj69772_onTap_runningActionsCount - 1;
if (window.obj69772_onTap_runningActionsCount < 0) {
	window.obj69772_onTap_runningActionsCount = 0;
} else if (window.obj69772_onTap_runningActionsCount == 0) {
	obj69772_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69772_onTap_runningActionsCount = window.obj69772_onTap_runningActionsCount - 1;
if (window.obj69772_onTap_runningActionsCount < 0) {
	window.obj69772_onTap_runningActionsCount = 0;
} else if (window.obj69772_onTap_runningActionsCount == 0) {
	obj69772_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69772_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69772_onTap_activeActionGroupIndex = -1;
		$("#obj69772").trigger("obj69772_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69772) {
				console.warn("de-queueing event obj69772." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69772").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69772_onTap_activeActionGroupIndex = 5;
	





















};
obj69763_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69763_onTap_activeActionGroupIndex = -1;
		$("#obj69763").trigger("obj69763_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69763) {
				console.warn("de-queueing event obj69763." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69763").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69763_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69765();
function switchText_69765() {
	window.obj69763_onTap_runningActionsCount = obj69763_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69763_onTap_runningActionsCount = window.obj69763_onTap_runningActionsCount - 1;
if (window.obj69763_onTap_runningActionsCount < 0) {
	window.obj69763_onTap_runningActionsCount = 0;
} else if (window.obj69763_onTap_runningActionsCount == 0) {
	obj69763_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69763_onTap_runningActionsCount = window.obj69763_onTap_runningActionsCount - 1;
if (window.obj69763_onTap_runningActionsCount < 0) {
	window.obj69763_onTap_runningActionsCount = 0;
} else if (window.obj69763_onTap_runningActionsCount == 0) {
	obj69763_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69763_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69763_onTap_activeActionGroupIndex = -1;
		$("#obj69763").trigger("obj69763_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69763) {
				console.warn("de-queueing event obj69763." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69763").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69763_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69766();
function runjs_69766() {
	window.obj69763_onTap_runningActionsCount = obj69763_onTap_runningActionsCount + 1;

	$("#obj69763").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69763_onTap_runningActionsCount = window.obj69763_onTap_runningActionsCount - 1;
if (window.obj69763_onTap_runningActionsCount < 0) {
	window.obj69763_onTap_runningActionsCount = 0;
} else if (window.obj69763_onTap_runningActionsCount == 0) {
	obj69763_onTap_actionGroup2();
}
	}, 1);
}







};
obj69763_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69763_onTap_activeActionGroupIndex = -1;
		$("#obj69763").trigger("obj69763_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69763) {
				console.warn("de-queueing event obj69763." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69763").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69763_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69767();
function playAudio_69767() {
	window.obj69763_onTap_runningActionsCount = obj69763_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69763_onTap_runningActionsCount = window.obj69763_onTap_runningActionsCount - 1;
if (window.obj69763_onTap_runningActionsCount < 0) {
	window.obj69763_onTap_runningActionsCount = 0;
} else if (window.obj69763_onTap_runningActionsCount == 0) {
	obj69763_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69763_onTap_runningActionsCount = window.obj69763_onTap_runningActionsCount - 1;
if (window.obj69763_onTap_runningActionsCount < 0) {
	window.obj69763_onTap_runningActionsCount = 0;
} else if (window.obj69763_onTap_runningActionsCount == 0) {
	obj69763_onTap_actionGroup3();
}
	}
}









};
obj69763_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69763_onTap_activeActionGroupIndex = -1;
		$("#obj69763").trigger("obj69763_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69763) {
				console.warn("de-queueing event obj69763." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69763").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69763_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69768();
function runjs_69768() {
	window.obj69763_onTap_runningActionsCount = obj69763_onTap_runningActionsCount + 1;

	$("#obj69763").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69763_onTap_runningActionsCount = window.obj69763_onTap_runningActionsCount - 1;
if (window.obj69763_onTap_runningActionsCount < 0) {
	window.obj69763_onTap_runningActionsCount = 0;
} else if (window.obj69763_onTap_runningActionsCount == 0) {
	obj69763_onTap_actionGroup4();
}
	}, 1);
}







};
obj69763_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69763_onTap_activeActionGroupIndex = -1;
		$("#obj69763").trigger("obj69763_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69763) {
				console.warn("de-queueing event obj69763." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69763").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69763_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69769();
function switchText_69769() {
	window.obj69763_onTap_runningActionsCount = obj69763_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69763_onTap_runningActionsCount = window.obj69763_onTap_runningActionsCount - 1;
if (window.obj69763_onTap_runningActionsCount < 0) {
	window.obj69763_onTap_runningActionsCount = 0;
} else if (window.obj69763_onTap_runningActionsCount == 0) {
	obj69763_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69763_onTap_runningActionsCount = window.obj69763_onTap_runningActionsCount - 1;
if (window.obj69763_onTap_runningActionsCount < 0) {
	window.obj69763_onTap_runningActionsCount = 0;
} else if (window.obj69763_onTap_runningActionsCount == 0) {
	obj69763_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69763_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69763_onTap_activeActionGroupIndex = -1;
		$("#obj69763").trigger("obj69763_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69763) {
				console.warn("de-queueing event obj69763." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69763").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69763_onTap_activeActionGroupIndex = 5;
	





















};
obj69756_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69756_onTap_activeActionGroupIndex = -1;
		$("#obj69756").trigger("obj69756_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69756) {
				console.warn("de-queueing event obj69756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69756_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69758();
function switchText_69758() {
	window.obj69756_onTap_runningActionsCount = obj69756_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69756_onTap_runningActionsCount = window.obj69756_onTap_runningActionsCount - 1;
if (window.obj69756_onTap_runningActionsCount < 0) {
	window.obj69756_onTap_runningActionsCount = 0;
} else if (window.obj69756_onTap_runningActionsCount == 0) {
	obj69756_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69756_onTap_runningActionsCount = window.obj69756_onTap_runningActionsCount - 1;
if (window.obj69756_onTap_runningActionsCount < 0) {
	window.obj69756_onTap_runningActionsCount = 0;
} else if (window.obj69756_onTap_runningActionsCount == 0) {
	obj69756_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69756_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69756_onTap_activeActionGroupIndex = -1;
		$("#obj69756").trigger("obj69756_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69756) {
				console.warn("de-queueing event obj69756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69756_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69759();
function runjs_69759() {
	window.obj69756_onTap_runningActionsCount = obj69756_onTap_runningActionsCount + 1;

	$("#obj69756").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69756_onTap_runningActionsCount = window.obj69756_onTap_runningActionsCount - 1;
if (window.obj69756_onTap_runningActionsCount < 0) {
	window.obj69756_onTap_runningActionsCount = 0;
} else if (window.obj69756_onTap_runningActionsCount == 0) {
	obj69756_onTap_actionGroup2();
}
	}, 1);
}







};
obj69756_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69756_onTap_activeActionGroupIndex = -1;
		$("#obj69756").trigger("obj69756_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69756) {
				console.warn("de-queueing event obj69756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69756_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69760();
function playAudio_69760() {
	window.obj69756_onTap_runningActionsCount = obj69756_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69756_onTap_runningActionsCount = window.obj69756_onTap_runningActionsCount - 1;
if (window.obj69756_onTap_runningActionsCount < 0) {
	window.obj69756_onTap_runningActionsCount = 0;
} else if (window.obj69756_onTap_runningActionsCount == 0) {
	obj69756_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69756_onTap_runningActionsCount = window.obj69756_onTap_runningActionsCount - 1;
if (window.obj69756_onTap_runningActionsCount < 0) {
	window.obj69756_onTap_runningActionsCount = 0;
} else if (window.obj69756_onTap_runningActionsCount == 0) {
	obj69756_onTap_actionGroup3();
}
	}
}









};
obj69756_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69756_onTap_activeActionGroupIndex = -1;
		$("#obj69756").trigger("obj69756_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69756) {
				console.warn("de-queueing event obj69756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69756_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69761();
function runjs_69761() {
	window.obj69756_onTap_runningActionsCount = obj69756_onTap_runningActionsCount + 1;

	$("#obj69756").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69756_onTap_runningActionsCount = window.obj69756_onTap_runningActionsCount - 1;
if (window.obj69756_onTap_runningActionsCount < 0) {
	window.obj69756_onTap_runningActionsCount = 0;
} else if (window.obj69756_onTap_runningActionsCount == 0) {
	obj69756_onTap_actionGroup4();
}
	}, 1);
}







};
obj69756_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69756_onTap_activeActionGroupIndex = -1;
		$("#obj69756").trigger("obj69756_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69756) {
				console.warn("de-queueing event obj69756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69756_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69762();
function switchText_69762() {
	window.obj69756_onTap_runningActionsCount = obj69756_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69756_onTap_runningActionsCount = window.obj69756_onTap_runningActionsCount - 1;
if (window.obj69756_onTap_runningActionsCount < 0) {
	window.obj69756_onTap_runningActionsCount = 0;
} else if (window.obj69756_onTap_runningActionsCount == 0) {
	obj69756_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69756_onTap_runningActionsCount = window.obj69756_onTap_runningActionsCount - 1;
if (window.obj69756_onTap_runningActionsCount < 0) {
	window.obj69756_onTap_runningActionsCount = 0;
} else if (window.obj69756_onTap_runningActionsCount == 0) {
	obj69756_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69756_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69756_onTap_activeActionGroupIndex = -1;
		$("#obj69756").trigger("obj69756_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69756) {
				console.warn("de-queueing event obj69756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69756_onTap_activeActionGroupIndex = 5;
	





















};
obj69749_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69749_onTap_activeActionGroupIndex = -1;
		$("#obj69749").trigger("obj69749_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69749) {
				console.warn("de-queueing event obj69749." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69749").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69749_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69751();
function switchText_69751() {
	window.obj69749_onTap_runningActionsCount = obj69749_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69749_onTap_runningActionsCount = window.obj69749_onTap_runningActionsCount - 1;
if (window.obj69749_onTap_runningActionsCount < 0) {
	window.obj69749_onTap_runningActionsCount = 0;
} else if (window.obj69749_onTap_runningActionsCount == 0) {
	obj69749_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69749_onTap_runningActionsCount = window.obj69749_onTap_runningActionsCount - 1;
if (window.obj69749_onTap_runningActionsCount < 0) {
	window.obj69749_onTap_runningActionsCount = 0;
} else if (window.obj69749_onTap_runningActionsCount == 0) {
	obj69749_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69749_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69749_onTap_activeActionGroupIndex = -1;
		$("#obj69749").trigger("obj69749_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69749) {
				console.warn("de-queueing event obj69749." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69749").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69749_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69752();
function runjs_69752() {
	window.obj69749_onTap_runningActionsCount = obj69749_onTap_runningActionsCount + 1;

	$("#obj69749").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69749_onTap_runningActionsCount = window.obj69749_onTap_runningActionsCount - 1;
if (window.obj69749_onTap_runningActionsCount < 0) {
	window.obj69749_onTap_runningActionsCount = 0;
} else if (window.obj69749_onTap_runningActionsCount == 0) {
	obj69749_onTap_actionGroup2();
}
	}, 1);
}







};
obj69749_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69749_onTap_activeActionGroupIndex = -1;
		$("#obj69749").trigger("obj69749_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69749) {
				console.warn("de-queueing event obj69749." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69749").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69749_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69753();
function playAudio_69753() {
	window.obj69749_onTap_runningActionsCount = obj69749_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69749_onTap_runningActionsCount = window.obj69749_onTap_runningActionsCount - 1;
if (window.obj69749_onTap_runningActionsCount < 0) {
	window.obj69749_onTap_runningActionsCount = 0;
} else if (window.obj69749_onTap_runningActionsCount == 0) {
	obj69749_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69749_onTap_runningActionsCount = window.obj69749_onTap_runningActionsCount - 1;
if (window.obj69749_onTap_runningActionsCount < 0) {
	window.obj69749_onTap_runningActionsCount = 0;
} else if (window.obj69749_onTap_runningActionsCount == 0) {
	obj69749_onTap_actionGroup3();
}
	}
}









};
obj69749_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69749_onTap_activeActionGroupIndex = -1;
		$("#obj69749").trigger("obj69749_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69749) {
				console.warn("de-queueing event obj69749." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69749").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69749_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69754();
function runjs_69754() {
	window.obj69749_onTap_runningActionsCount = obj69749_onTap_runningActionsCount + 1;

	$("#obj69749").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69749_onTap_runningActionsCount = window.obj69749_onTap_runningActionsCount - 1;
if (window.obj69749_onTap_runningActionsCount < 0) {
	window.obj69749_onTap_runningActionsCount = 0;
} else if (window.obj69749_onTap_runningActionsCount == 0) {
	obj69749_onTap_actionGroup4();
}
	}, 1);
}







};
obj69749_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69749_onTap_activeActionGroupIndex = -1;
		$("#obj69749").trigger("obj69749_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69749) {
				console.warn("de-queueing event obj69749." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69749").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69749_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69755();
function switchText_69755() {
	window.obj69749_onTap_runningActionsCount = obj69749_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69749_onTap_runningActionsCount = window.obj69749_onTap_runningActionsCount - 1;
if (window.obj69749_onTap_runningActionsCount < 0) {
	window.obj69749_onTap_runningActionsCount = 0;
} else if (window.obj69749_onTap_runningActionsCount == 0) {
	obj69749_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69749_onTap_runningActionsCount = window.obj69749_onTap_runningActionsCount - 1;
if (window.obj69749_onTap_runningActionsCount < 0) {
	window.obj69749_onTap_runningActionsCount = 0;
} else if (window.obj69749_onTap_runningActionsCount == 0) {
	obj69749_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69749_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69749_onTap_activeActionGroupIndex = -1;
		$("#obj69749").trigger("obj69749_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69749) {
				console.warn("de-queueing event obj69749." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69749").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69749_onTap_activeActionGroupIndex = 5;
	





















};
obj69742_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69742_onTap_activeActionGroupIndex = -1;
		$("#obj69742").trigger("obj69742_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69742) {
				console.warn("de-queueing event obj69742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69742_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69744();
function switchText_69744() {
	window.obj69742_onTap_runningActionsCount = obj69742_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69742_onTap_runningActionsCount = window.obj69742_onTap_runningActionsCount - 1;
if (window.obj69742_onTap_runningActionsCount < 0) {
	window.obj69742_onTap_runningActionsCount = 0;
} else if (window.obj69742_onTap_runningActionsCount == 0) {
	obj69742_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69742_onTap_runningActionsCount = window.obj69742_onTap_runningActionsCount - 1;
if (window.obj69742_onTap_runningActionsCount < 0) {
	window.obj69742_onTap_runningActionsCount = 0;
} else if (window.obj69742_onTap_runningActionsCount == 0) {
	obj69742_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69742_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69742_onTap_activeActionGroupIndex = -1;
		$("#obj69742").trigger("obj69742_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69742) {
				console.warn("de-queueing event obj69742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69742_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69745();
function runjs_69745() {
	window.obj69742_onTap_runningActionsCount = obj69742_onTap_runningActionsCount + 1;

	$("#obj69742").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69742_onTap_runningActionsCount = window.obj69742_onTap_runningActionsCount - 1;
if (window.obj69742_onTap_runningActionsCount < 0) {
	window.obj69742_onTap_runningActionsCount = 0;
} else if (window.obj69742_onTap_runningActionsCount == 0) {
	obj69742_onTap_actionGroup2();
}
	}, 1);
}







};
obj69742_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69742_onTap_activeActionGroupIndex = -1;
		$("#obj69742").trigger("obj69742_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69742) {
				console.warn("de-queueing event obj69742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69742_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69746();
function playAudio_69746() {
	window.obj69742_onTap_runningActionsCount = obj69742_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69742_onTap_runningActionsCount = window.obj69742_onTap_runningActionsCount - 1;
if (window.obj69742_onTap_runningActionsCount < 0) {
	window.obj69742_onTap_runningActionsCount = 0;
} else if (window.obj69742_onTap_runningActionsCount == 0) {
	obj69742_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69742_onTap_runningActionsCount = window.obj69742_onTap_runningActionsCount - 1;
if (window.obj69742_onTap_runningActionsCount < 0) {
	window.obj69742_onTap_runningActionsCount = 0;
} else if (window.obj69742_onTap_runningActionsCount == 0) {
	obj69742_onTap_actionGroup3();
}
	}
}









};
obj69742_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69742_onTap_activeActionGroupIndex = -1;
		$("#obj69742").trigger("obj69742_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69742) {
				console.warn("de-queueing event obj69742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69742_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69747();
function runjs_69747() {
	window.obj69742_onTap_runningActionsCount = obj69742_onTap_runningActionsCount + 1;

	$("#obj69742").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69742_onTap_runningActionsCount = window.obj69742_onTap_runningActionsCount - 1;
if (window.obj69742_onTap_runningActionsCount < 0) {
	window.obj69742_onTap_runningActionsCount = 0;
} else if (window.obj69742_onTap_runningActionsCount == 0) {
	obj69742_onTap_actionGroup4();
}
	}, 1);
}







};
obj69742_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69742_onTap_activeActionGroupIndex = -1;
		$("#obj69742").trigger("obj69742_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69742) {
				console.warn("de-queueing event obj69742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69742_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69748();
function switchText_69748() {
	window.obj69742_onTap_runningActionsCount = obj69742_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69742_onTap_runningActionsCount = window.obj69742_onTap_runningActionsCount - 1;
if (window.obj69742_onTap_runningActionsCount < 0) {
	window.obj69742_onTap_runningActionsCount = 0;
} else if (window.obj69742_onTap_runningActionsCount == 0) {
	obj69742_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69742_onTap_runningActionsCount = window.obj69742_onTap_runningActionsCount - 1;
if (window.obj69742_onTap_runningActionsCount < 0) {
	window.obj69742_onTap_runningActionsCount = 0;
} else if (window.obj69742_onTap_runningActionsCount == 0) {
	obj69742_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69742_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69742_onTap_activeActionGroupIndex = -1;
		$("#obj69742").trigger("obj69742_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69742) {
				console.warn("de-queueing event obj69742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69742_onTap_activeActionGroupIndex = 5;
	





















};
obj69739_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69739_onTap_activeActionGroupIndex = -1;
		$("#obj69739").trigger("obj69739_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69739) {
				console.warn("de-queueing event obj69739." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69739").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69739_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69741();
function runjs_69741() {
	window.obj69739_onTap_runningActionsCount = obj69739_onTap_runningActionsCount + 1;

	$("#obj69739").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj69739_onTap_runningActionsCount = window.obj69739_onTap_runningActionsCount - 1;
if (window.obj69739_onTap_runningActionsCount < 0) {
	window.obj69739_onTap_runningActionsCount = 0;
} else if (window.obj69739_onTap_runningActionsCount == 0) {
	obj69739_onTap_actionGroup1();
}
	}, 1);
}







};
obj69739_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69739_onTap_activeActionGroupIndex = -1;
		$("#obj69739").trigger("obj69739_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69739) {
				console.warn("de-queueing event obj69739." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69739").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69739_onTap_activeActionGroupIndex = 1;
	





















};
obj69728_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69728_onTap_activeActionGroupIndex = -1;
		$("#obj69728").trigger("obj69728_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69728) {
				console.warn("de-queueing event obj69728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69728_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69730();
function runjs_69730() {
	window.obj69728_onTap_runningActionsCount = obj69728_onTap_runningActionsCount + 1;

	$("#obj69728").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj69728_onTap_runningActionsCount = window.obj69728_onTap_runningActionsCount - 1;
if (window.obj69728_onTap_runningActionsCount < 0) {
	window.obj69728_onTap_runningActionsCount = 0;
} else if (window.obj69728_onTap_runningActionsCount == 0) {
	obj69728_onTap_actionGroup1();
}
	}, 1);
}







};
obj69728_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69728_onTap_activeActionGroupIndex = -1;
		$("#obj69728").trigger("obj69728_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69728) {
				console.warn("de-queueing event obj69728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69728_onTap_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_69737();
function switchText_69737() {
	window.obj69728_onTap_runningActionsCount = obj69728_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69728_onTap_runningActionsCount = window.obj69728_onTap_runningActionsCount - 1;
if (window.obj69728_onTap_runningActionsCount < 0) {
	window.obj69728_onTap_runningActionsCount = 0;
} else if (window.obj69728_onTap_runningActionsCount == 0) {
	obj69728_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69728_onTap_runningActionsCount = window.obj69728_onTap_runningActionsCount - 1;
if (window.obj69728_onTap_runningActionsCount < 0) {
	window.obj69728_onTap_runningActionsCount = 0;
} else if (window.obj69728_onTap_runningActionsCount == 0) {
	obj69728_onTap_actionGroup2();
}
		}, 1);
	}
}






};
obj69728_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69728_onTap_activeActionGroupIndex = -1;
		$("#obj69728").trigger("obj69728_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69728) {
				console.warn("de-queueing event obj69728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69728_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_69731();
function runjs_69731() {
	window.obj69728_onTap_runningActionsCount = obj69728_onTap_runningActionsCount + 1;

	$("#obj69726").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj69728_onTap_runningActionsCount = window.obj69728_onTap_runningActionsCount - 1;
if (window.obj69728_onTap_runningActionsCount < 0) {
	window.obj69728_onTap_runningActionsCount = 0;
} else if (window.obj69728_onTap_runningActionsCount == 0) {
	obj69728_onTap_actionGroup3();
}
	}, 1);
}







};
obj69728_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69728_onTap_activeActionGroupIndex = -1;
		$("#obj69728").trigger("obj69728_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69728) {
				console.warn("de-queueing event obj69728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69728_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69732();
function runjs_69732() {
	window.obj69728_onTap_runningActionsCount = obj69728_onTap_runningActionsCount + 1;

	$("#obj69724").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj69728_onTap_runningActionsCount = window.obj69728_onTap_runningActionsCount - 1;
if (window.obj69728_onTap_runningActionsCount < 0) {
	window.obj69728_onTap_runningActionsCount = 0;
} else if (window.obj69728_onTap_runningActionsCount == 0) {
	obj69728_onTap_actionGroup4();
}
	}, 1);
}







};
obj69728_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69728_onTap_activeActionGroupIndex = -1;
		$("#obj69728").trigger("obj69728_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69728) {
				console.warn("de-queueing event obj69728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69728_onTap_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_69733();
function runjs_69733() {
	window.obj69728_onTap_runningActionsCount = obj69728_onTap_runningActionsCount + 1;

	$("#obj69722").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj69728_onTap_runningActionsCount = window.obj69728_onTap_runningActionsCount - 1;
if (window.obj69728_onTap_runningActionsCount < 0) {
	window.obj69728_onTap_runningActionsCount = 0;
} else if (window.obj69728_onTap_runningActionsCount == 0) {
	obj69728_onTap_actionGroup5();
}
	}, 1);
}







};
obj69728_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69728_onTap_activeActionGroupIndex = -1;
		$("#obj69728").trigger("obj69728_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69728) {
				console.warn("de-queueing event obj69728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69728_onTap_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_69734();
function runjs_69734() {
	window.obj69728_onTap_runningActionsCount = obj69728_onTap_runningActionsCount + 1;

	$("#obj69720").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj69728_onTap_runningActionsCount = window.obj69728_onTap_runningActionsCount - 1;
if (window.obj69728_onTap_runningActionsCount < 0) {
	window.obj69728_onTap_runningActionsCount = 0;
} else if (window.obj69728_onTap_runningActionsCount == 0) {
	obj69728_onTap_actionGroup6();
}
	}, 1);
}







};
obj69728_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69728_onTap_activeActionGroupIndex = -1;
		$("#obj69728").trigger("obj69728_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69728) {
				console.warn("de-queueing event obj69728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69728_onTap_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_69735();
function runjs_69735() {
	window.obj69728_onTap_runningActionsCount = obj69728_onTap_runningActionsCount + 1;

	$("#obj69718").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj69728_onTap_runningActionsCount = window.obj69728_onTap_runningActionsCount - 1;
if (window.obj69728_onTap_runningActionsCount < 0) {
	window.obj69728_onTap_runningActionsCount = 0;
} else if (window.obj69728_onTap_runningActionsCount == 0) {
	obj69728_onTap_actionGroup7();
}
	}, 1);
}







};
obj69728_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69728_onTap_activeActionGroupIndex = -1;
		$("#obj69728").trigger("obj69728_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69728) {
				console.warn("de-queueing event obj69728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69728_onTap_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_69736();
function runjs_69736() {
	window.obj69728_onTap_runningActionsCount = obj69728_onTap_runningActionsCount + 1;

	$("#obj69687").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj69728_onTap_runningActionsCount = window.obj69728_onTap_runningActionsCount - 1;
if (window.obj69728_onTap_runningActionsCount < 0) {
	window.obj69728_onTap_runningActionsCount = 0;
} else if (window.obj69728_onTap_runningActionsCount == 0) {
	obj69728_onTap_actionGroup8();
}
	}, 1);
}







};
obj69728_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69728_onTap_activeActionGroupIndex = -1;
		$("#obj69728").trigger("obj69728_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69728) {
				console.warn("de-queueing event obj69728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69728_onTap_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj69707 
playAudio_69738();
function playAudio_69738() {
	window.obj69728_onTap_runningActionsCount = obj69728_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69707")[0];
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
		    window.obj69728_onTap_runningActionsCount = window.obj69728_onTap_runningActionsCount - 1;
if (window.obj69728_onTap_runningActionsCount < 0) {
	window.obj69728_onTap_runningActionsCount = 0;
} else if (window.obj69728_onTap_runningActionsCount == 0) {
	obj69728_onTap_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69728_onTap_runningActionsCount = window.obj69728_onTap_runningActionsCount - 1;
if (window.obj69728_onTap_runningActionsCount < 0) {
	window.obj69728_onTap_runningActionsCount = 0;
} else if (window.obj69728_onTap_runningActionsCount == 0) {
	obj69728_onTap_actionGroup9();
}
	}
}









};
obj69728_onTap_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69728_onTap_activeActionGroupIndex = -1;
		$("#obj69728").trigger("obj69728_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69728) {
				console.warn("de-queueing event obj69728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69728_onTap_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_90147();
function switchText_90147() {
	window.obj69728_onTap_runningActionsCount = obj69728_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69728_onTap_runningActionsCount = window.obj69728_onTap_runningActionsCount - 1;
if (window.obj69728_onTap_runningActionsCount < 0) {
	window.obj69728_onTap_runningActionsCount = 0;
} else if (window.obj69728_onTap_runningActionsCount == 0) {
	obj69728_onTap_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69728_onTap_runningActionsCount = window.obj69728_onTap_runningActionsCount - 1;
if (window.obj69728_onTap_runningActionsCount < 0) {
	window.obj69728_onTap_runningActionsCount = 0;
} else if (window.obj69728_onTap_runningActionsCount == 0) {
	obj69728_onTap_actionGroup10();
}
		}, 1);
	}
}






};
obj69728_onTap_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69728_onTap_activeActionGroupIndex = -1;
		$("#obj69728").trigger("obj69728_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69728) {
				console.warn("de-queueing event obj69728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69728_onTap_activeActionGroupIndex = 10;
	





















};
obj69711_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69711_onTap_activeActionGroupIndex = -1;
		$("#obj69711").trigger("obj69711_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69711) {
				console.warn("de-queueing event obj69711." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69711").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69711_onTap_activeActionGroupIndex = 0;
	















//	action: Switch Text
switchText_69713();
function switchText_69713() {
	window.obj69711_onTap_runningActionsCount = obj69711_onTap_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69711_onTap_runningActionsCount = window.obj69711_onTap_runningActionsCount - 1;
if (window.obj69711_onTap_runningActionsCount < 0) {
	window.obj69711_onTap_runningActionsCount = 0;
} else if (window.obj69711_onTap_runningActionsCount == 0) {
	obj69711_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69711_onTap_runningActionsCount = window.obj69711_onTap_runningActionsCount - 1;
if (window.obj69711_onTap_runningActionsCount < 0) {
	window.obj69711_onTap_runningActionsCount = 0;
} else if (window.obj69711_onTap_runningActionsCount == 0) {
	obj69711_onTap_actionGroup1();
}
		}, 1);
	}
}






};
obj69711_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69711_onTap_activeActionGroupIndex = -1;
		$("#obj69711").trigger("obj69711_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69711) {
				console.warn("de-queueing event obj69711." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69711").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69711_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69714();
function runjs_69714() {
	window.obj69711_onTap_runningActionsCount = obj69711_onTap_runningActionsCount + 1;

	$("#obj69711").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj69711_onTap_runningActionsCount = window.obj69711_onTap_runningActionsCount - 1;
if (window.obj69711_onTap_runningActionsCount < 0) {
	window.obj69711_onTap_runningActionsCount = 0;
} else if (window.obj69711_onTap_runningActionsCount == 0) {
	obj69711_onTap_actionGroup2();
}
	}, 1);
}







};
obj69711_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69711_onTap_activeActionGroupIndex = -1;
		$("#obj69711").trigger("obj69711_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69711) {
				console.warn("de-queueing event obj69711." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69711").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69711_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj69708 
playAudio_69715();
function playAudio_69715() {
	window.obj69711_onTap_runningActionsCount = obj69711_onTap_runningActionsCount + 1;
	var myAudio = $("#obj69708")[0];
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
		    window.obj69711_onTap_runningActionsCount = window.obj69711_onTap_runningActionsCount - 1;
if (window.obj69711_onTap_runningActionsCount < 0) {
	window.obj69711_onTap_runningActionsCount = 0;
} else if (window.obj69711_onTap_runningActionsCount == 0) {
	obj69711_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69711_onTap_runningActionsCount = window.obj69711_onTap_runningActionsCount - 1;
if (window.obj69711_onTap_runningActionsCount < 0) {
	window.obj69711_onTap_runningActionsCount = 0;
} else if (window.obj69711_onTap_runningActionsCount == 0) {
	obj69711_onTap_actionGroup3();
}
	}
}









};
obj69711_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69711_onTap_activeActionGroupIndex = -1;
		$("#obj69711").trigger("obj69711_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69711) {
				console.warn("de-queueing event obj69711." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69711").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69711_onTap_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69716();
function runjs_69716() {
	window.obj69711_onTap_runningActionsCount = obj69711_onTap_runningActionsCount + 1;

	$("#obj69711").css("background-color", "#E2DDDD");
	
	setTimeout(function() {
		window.obj69711_onTap_runningActionsCount = window.obj69711_onTap_runningActionsCount - 1;
if (window.obj69711_onTap_runningActionsCount < 0) {
	window.obj69711_onTap_runningActionsCount = 0;
} else if (window.obj69711_onTap_runningActionsCount == 0) {
	obj69711_onTap_actionGroup4();
}
	}, 1);
}







};
obj69711_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69711_onTap_activeActionGroupIndex = -1;
		$("#obj69711").trigger("obj69711_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69711) {
				console.warn("de-queueing event obj69711." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69711").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69711_onTap_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69717();
function switchText_69717() {
	window.obj69711_onTap_runningActionsCount = obj69711_onTap_runningActionsCount + 1;
	var fadeTime = 2000;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70274_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70274_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70274").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70274_content");
			setTimeout(function () {
				window.obj69711_onTap_runningActionsCount = window.obj69711_onTap_runningActionsCount - 1;
if (window.obj69711_onTap_runningActionsCount < 0) {
	window.obj69711_onTap_runningActionsCount = 0;
} else if (window.obj69711_onTap_runningActionsCount == 0) {
	obj69711_onTap_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70274 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69711_onTap_runningActionsCount = window.obj69711_onTap_runningActionsCount - 1;
if (window.obj69711_onTap_runningActionsCount < 0) {
	window.obj69711_onTap_runningActionsCount = 0;
} else if (window.obj69711_onTap_runningActionsCount == 0) {
	obj69711_onTap_actionGroup5();
}
		}, 1);
	}
}






};
obj69711_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69711_onTap_activeActionGroupIndex = -1;
		$("#obj69711").trigger("obj69711_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69711) {
				console.warn("de-queueing event obj69711." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69711").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69711_onTap_activeActionGroupIndex = 5;
	





















};
obj69647_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69647_onTap_activeActionGroupIndex = -1;
		$("#obj69647").trigger("obj69647_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69647) {
				console.warn("de-queueing event obj69647." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69647").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69647_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj69647 
hide_69650();
function hide_69650() {
	var selector = "#obj69647";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69647_onTap_runningActionsCount = obj69647_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69647_onTap_runningActionsCount = window.obj69647_onTap_runningActionsCount - 1;
if (window.obj69647_onTap_runningActionsCount < 0) {
	window.obj69647_onTap_runningActionsCount = 0;
} else if (window.obj69647_onTap_runningActionsCount == 0) {
	obj69647_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69650(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69647_onTap_runningActionsCount = window.obj69647_onTap_runningActionsCount - 1;
if (window.obj69647_onTap_runningActionsCount < 0) {
	window.obj69647_onTap_runningActionsCount = 0;
} else if (window.obj69647_onTap_runningActionsCount == 0) {
	obj69647_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj92127 
stopMovie_69649();
function stopMovie_69649() {
	window.obj69647_onTap_runningActionsCount = obj69647_onTap_runningActionsCount + 1;
	var myVideo = $("#obj92127")[0];
	myVideo.pause();
	window.obj69647_onTap_runningActionsCount = window.obj69647_onTap_runningActionsCount - 1;
if (window.obj69647_onTap_runningActionsCount < 0) {
	window.obj69647_onTap_runningActionsCount = 0;
} else if (window.obj69647_onTap_runningActionsCount == 0) {
	obj69647_onTap_actionGroup1();
}
}
















};
obj69647_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69647_onTap_activeActionGroupIndex = -1;
		$("#obj69647").trigger("obj69647_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69647) {
				console.warn("de-queueing event obj69647." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69647").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69647_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj69639
(function(){
	window.obj69647_onTap_runningActionsCount = obj69647_onTap_runningActionsCount + 1;

	var selector = "#obj69639";
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
					window.obj69647_onTap_runningActionsCount = window.obj69647_onTap_runningActionsCount - 1;
if (window.obj69647_onTap_runningActionsCount < 0) {
	window.obj69647_onTap_runningActionsCount = 0;
} else if (window.obj69647_onTap_runningActionsCount == 0) {
	obj69647_onTap_actionGroup2();
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
				window.obj69647_onTap_runningActionsCount = window.obj69647_onTap_runningActionsCount - 1;
if (window.obj69647_onTap_runningActionsCount < 0) {
	window.obj69647_onTap_runningActionsCount = 0;
} else if (window.obj69647_onTap_runningActionsCount == 0) {
	obj69647_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69647_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69647_onTap_activeActionGroupIndex = -1;
		$("#obj69647").trigger("obj69647_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69647) {
				console.warn("de-queueing event obj69647." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69647").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69647_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj92127 
move_69652();
function move_69652() {
	window.obj69647_onTap_runningActionsCount = obj69647_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj92127");
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
			window.obj69647_onTap_runningActionsCount = window.obj69647_onTap_runningActionsCount - 1;
if (window.obj69647_onTap_runningActionsCount < 0) {
	window.obj69647_onTap_runningActionsCount = 0;
} else if (window.obj69647_onTap_runningActionsCount == 0) {
	obj69647_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj69647_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69647_onTap_activeActionGroupIndex = -1;
		$("#obj69647").trigger("obj69647_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69647) {
				console.warn("de-queueing event obj69647." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69647").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69647_onTap_activeActionGroupIndex = 3;
	





















};
obj69639_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69639_onTap_activeActionGroupIndex = -1;
		$("#obj69639").trigger("obj69639_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69639) {
				console.warn("de-queueing event obj69639." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69639").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69639_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj69639 
hide_69642();
function hide_69642() {
	var selector = "#obj69639";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69639_onTap_runningActionsCount = obj69639_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69639_onTap_runningActionsCount = window.obj69639_onTap_runningActionsCount - 1;
if (window.obj69639_onTap_runningActionsCount < 0) {
	window.obj69639_onTap_runningActionsCount = 0;
} else if (window.obj69639_onTap_runningActionsCount == 0) {
	obj69639_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69642(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69639_onTap_runningActionsCount = window.obj69639_onTap_runningActionsCount - 1;
if (window.obj69639_onTap_runningActionsCount < 0) {
	window.obj69639_onTap_runningActionsCount = 0;
} else if (window.obj69639_onTap_runningActionsCount == 0) {
	obj69639_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj92127 
playPauseMovie_69641();
function playPauseMovie_69641() {
	window.obj69639_onTap_runningActionsCount = obj69639_onTap_runningActionsCount + 1;
	var myVideo = $("#obj92127")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj69639_onTap_runningActionsCount = window.obj69639_onTap_runningActionsCount - 1;
if (window.obj69639_onTap_runningActionsCount < 0) {
	window.obj69639_onTap_runningActionsCount = 0;
} else if (window.obj69639_onTap_runningActionsCount == 0) {
	obj69639_onTap_actionGroup1();
}
}

















};
obj69639_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69639_onTap_activeActionGroupIndex = -1;
		$("#obj69639").trigger("obj69639_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69639) {
				console.warn("de-queueing event obj69639." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69639").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69639_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj69647
(function(){
	window.obj69639_onTap_runningActionsCount = obj69639_onTap_runningActionsCount + 1;

	var selector = "#obj69647";
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
					window.obj69639_onTap_runningActionsCount = window.obj69639_onTap_runningActionsCount - 1;
if (window.obj69639_onTap_runningActionsCount < 0) {
	window.obj69639_onTap_runningActionsCount = 0;
} else if (window.obj69639_onTap_runningActionsCount == 0) {
	obj69639_onTap_actionGroup2();
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
				window.obj69639_onTap_runningActionsCount = window.obj69639_onTap_runningActionsCount - 1;
if (window.obj69639_onTap_runningActionsCount < 0) {
	window.obj69639_onTap_runningActionsCount = 0;
} else if (window.obj69639_onTap_runningActionsCount == 0) {
	obj69639_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69639_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69639_onTap_activeActionGroupIndex = -1;
		$("#obj69639").trigger("obj69639_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69639) {
				console.warn("de-queueing event obj69639." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69639").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69639_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj92127 
move_69644();
function move_69644() {
	window.obj69639_onTap_runningActionsCount = obj69639_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj92127");
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
			window.obj69639_onTap_runningActionsCount = window.obj69639_onTap_runningActionsCount - 1;
if (window.obj69639_onTap_runningActionsCount < 0) {
	window.obj69639_onTap_runningActionsCount = 0;
} else if (window.obj69639_onTap_runningActionsCount == 0) {
	obj69639_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj69639_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69639_onTap_activeActionGroupIndex = -1;
		$("#obj69639").trigger("obj69639_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69639) {
				console.warn("de-queueing event obj69639." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69639").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69639_onTap_activeActionGroupIndex = 3;
	





















};
obj87250_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87250_onTap_activeActionGroupIndex = -1;
		$("#obj87250").trigger("obj87250_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87250) {
				console.warn("de-queueing event obj87250." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87250").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87250_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87255 
stopAudio_87252();
function stopAudio_87252() {
	window.obj87250_onTap_runningActionsCount = obj87250_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87255")[0];
	myAudio.pause();
	window.obj87250_onTap_runningActionsCount = window.obj87250_onTap_runningActionsCount - 1;
if (window.obj87250_onTap_runningActionsCount < 0) {
	window.obj87250_onTap_runningActionsCount = 0;
} else if (window.obj87250_onTap_runningActionsCount == 0) {
	obj87250_onTap_actionGroup1();
}
}








};
obj87250_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87250_onTap_activeActionGroupIndex = -1;
		$("#obj87250").trigger("obj87250_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87250) {
				console.warn("de-queueing event obj87250." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87250").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87250_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87250 
hide_87253();
function hide_87253() {
	var selector = "#obj87250";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87250_onTap_runningActionsCount = obj87250_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87250_onTap_runningActionsCount = window.obj87250_onTap_runningActionsCount - 1;
if (window.obj87250_onTap_runningActionsCount < 0) {
	window.obj87250_onTap_runningActionsCount = 0;
} else if (window.obj87250_onTap_runningActionsCount == 0) {
	obj87250_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87253(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87250_onTap_runningActionsCount = window.obj87250_onTap_runningActionsCount - 1;
if (window.obj87250_onTap_runningActionsCount < 0) {
	window.obj87250_onTap_runningActionsCount = 0;
} else if (window.obj87250_onTap_runningActionsCount == 0) {
	obj87250_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87250_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87250_onTap_activeActionGroupIndex = -1;
		$("#obj87250").trigger("obj87250_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87250) {
				console.warn("de-queueing event obj87250." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87250").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87250_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87245
(function(){
	window.obj87250_onTap_runningActionsCount = obj87250_onTap_runningActionsCount + 1;

	var selector = "#obj87245";
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
					window.obj87250_onTap_runningActionsCount = window.obj87250_onTap_runningActionsCount - 1;
if (window.obj87250_onTap_runningActionsCount < 0) {
	window.obj87250_onTap_runningActionsCount = 0;
} else if (window.obj87250_onTap_runningActionsCount == 0) {
	obj87250_onTap_actionGroup3();
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
				window.obj87250_onTap_runningActionsCount = window.obj87250_onTap_runningActionsCount - 1;
if (window.obj87250_onTap_runningActionsCount < 0) {
	window.obj87250_onTap_runningActionsCount = 0;
} else if (window.obj87250_onTap_runningActionsCount == 0) {
	obj87250_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87250_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87250_onTap_activeActionGroupIndex = -1;
		$("#obj87250").trigger("obj87250_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87250) {
				console.warn("de-queueing event obj87250." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87250").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87250_onTap_activeActionGroupIndex = 3;
	





















};
obj87245_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87245_onTap_activeActionGroupIndex = -1;
		$("#obj87245").trigger("obj87245_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87245) {
				console.warn("de-queueing event obj87245." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87245").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87245_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87245 
hide_87247();
function hide_87247() {
	var selector = "#obj87245";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87245_onTap_runningActionsCount = obj87245_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87245_onTap_runningActionsCount = window.obj87245_onTap_runningActionsCount - 1;
if (window.obj87245_onTap_runningActionsCount < 0) {
	window.obj87245_onTap_runningActionsCount = 0;
} else if (window.obj87245_onTap_runningActionsCount == 0) {
	obj87245_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87247(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87245_onTap_runningActionsCount = window.obj87245_onTap_runningActionsCount - 1;
if (window.obj87245_onTap_runningActionsCount < 0) {
	window.obj87245_onTap_runningActionsCount = 0;
} else if (window.obj87245_onTap_runningActionsCount == 0) {
	obj87245_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87245_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87245_onTap_activeActionGroupIndex = -1;
		$("#obj87245").trigger("obj87245_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87245) {
				console.warn("de-queueing event obj87245." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87245").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87245_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87250
(function(){
	window.obj87245_onTap_runningActionsCount = obj87245_onTap_runningActionsCount + 1;

	var selector = "#obj87250";
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
					window.obj87245_onTap_runningActionsCount = window.obj87245_onTap_runningActionsCount - 1;
if (window.obj87245_onTap_runningActionsCount < 0) {
	window.obj87245_onTap_runningActionsCount = 0;
} else if (window.obj87245_onTap_runningActionsCount == 0) {
	obj87245_onTap_actionGroup2();
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
				window.obj87245_onTap_runningActionsCount = window.obj87245_onTap_runningActionsCount - 1;
if (window.obj87245_onTap_runningActionsCount < 0) {
	window.obj87245_onTap_runningActionsCount = 0;
} else if (window.obj87245_onTap_runningActionsCount == 0) {
	obj87245_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87245_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87245_onTap_activeActionGroupIndex = -1;
		$("#obj87245").trigger("obj87245_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87245) {
				console.warn("de-queueing event obj87245." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87245").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87245_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87255 
playAudio_87249();
function playAudio_87249() {
	window.obj87245_onTap_runningActionsCount = obj87245_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87255")[0];
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
		    window.obj87245_onTap_runningActionsCount = window.obj87245_onTap_runningActionsCount - 1;
if (window.obj87245_onTap_runningActionsCount < 0) {
	window.obj87245_onTap_runningActionsCount = 0;
} else if (window.obj87245_onTap_runningActionsCount == 0) {
	obj87245_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87245_onTap_runningActionsCount = window.obj87245_onTap_runningActionsCount - 1;
if (window.obj87245_onTap_runningActionsCount < 0) {
	window.obj87245_onTap_runningActionsCount = 0;
} else if (window.obj87245_onTap_runningActionsCount == 0) {
	obj87245_onTap_actionGroup3();
}
	}
}









};
obj87245_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87245_onTap_activeActionGroupIndex = -1;
		$("#obj87245").trigger("obj87245_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87245) {
				console.warn("de-queueing event obj87245." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87245").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87245_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj70293: Event Touch Down
 *
 */
$("#obj70293").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70293_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70293_onTap is still running");
	return;
}
var obj70293_onTap_runningActionsCount = 0;
var obj70293_onTap_loopCount = 0;
obj70293_onTap_actionGroup0();
});










/*
 *
 *   obj70290: Event Touch Down
 *
 */
$("#obj70290").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70290_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70290_onTap is still running");
	return;
}
var obj70290_onTap_runningActionsCount = 0;
var obj70290_onTap_loopCount = 0;
obj70290_onTap_actionGroup0();
});










/*
 *
 *   obj70286: Event Touch Down
 *
 */
$("#obj70286").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70286_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70286_onTap is still running");
	return;
}
var obj70286_onTap_runningActionsCount = 0;
var obj70286_onTap_loopCount = 0;
obj70286_onTap_actionGroup0();
});




























































/*
 *
 *   obj70267: Event Touch Down
 *
 */
$("#obj70267").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70267_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70267_onTap is still running");
	return;
}
var obj70267_onTap_runningActionsCount = 0;
var obj70267_onTap_loopCount = 0;
obj70267_onTap_actionGroup0();
});










/*
 *
 *   obj70264: Event Touch Down
 *
 */
$("#obj70264").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70264_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70264_onTap is still running");
	return;
}
var obj70264_onTap_runningActionsCount = 0;
var obj70264_onTap_loopCount = 0;
obj70264_onTap_actionGroup0();
});










/*
 *
 *   obj70256: Event Touch Down
 *
 */
$("#obj70256").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70256_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70256_onTap is still running");
	return;
}
var obj70256_onTap_runningActionsCount = 0;
var obj70256_onTap_loopCount = 0;
obj70256_onTap_actionGroup0();
});






























/*
 *
 *   obj70245: Event Touch Down
 *
 */
$("#obj70245").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70245_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70245_onTap is still running");
	return;
}
var obj70245_onTap_runningActionsCount = 0;
var obj70245_onTap_loopCount = 0;
obj70245_onTap_actionGroup0();
});










/*
 *
 *   obj70242: Event Touch Down
 *
 */
$("#obj70242").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70242_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70242_onTap is still running");
	return;
}
var obj70242_onTap_runningActionsCount = 0;
var obj70242_onTap_loopCount = 0;
obj70242_onTap_actionGroup0();
});










/*
 *
 *   obj70235: Event Touch Down
 *
 */
$("#obj70235").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70235_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70235_onTap is still running");
	return;
}
var obj70235_onTap_runningActionsCount = 0;
var obj70235_onTap_loopCount = 0;
obj70235_onTap_actionGroup0();
});










/*
 *
 *   obj70228: Event Touch Down
 *
 */
$("#obj70228").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70228_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70228_onTap is still running");
	return;
}
var obj70228_onTap_runningActionsCount = 0;
var obj70228_onTap_loopCount = 0;
obj70228_onTap_actionGroup0();
});










/*
 *
 *   obj70225: Event Touch Down
 *
 */
$("#obj70225").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70225_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70225_onTap is still running");
	return;
}
var obj70225_onTap_runningActionsCount = 0;
var obj70225_onTap_loopCount = 0;
obj70225_onTap_actionGroup0();
});










/*
 *
 *   obj70218: Event Touch Down
 *
 */
$("#obj70218").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70218_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70218_onTap is still running");
	return;
}
var obj70218_onTap_runningActionsCount = 0;
var obj70218_onTap_loopCount = 0;
obj70218_onTap_actionGroup0();
});




















/*
 *
 *   obj70209: Event Touch Down
 *
 */
$("#obj70209").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70209_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70209_onTap is still running");
	return;
}
var obj70209_onTap_runningActionsCount = 0;
var obj70209_onTap_loopCount = 0;
obj70209_onTap_actionGroup0();
});










/*
 *
 *   obj70206: Event Touch Down
 *
 */
$("#obj70206").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70206_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70206_onTap is still running");
	return;
}
var obj70206_onTap_runningActionsCount = 0;
var obj70206_onTap_loopCount = 0;
obj70206_onTap_actionGroup0();
});










/*
 *
 *   obj70197: Event Touch Down
 *
 */
$("#obj70197").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70197_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70197_onTap is still running");
	return;
}
var obj70197_onTap_runningActionsCount = 0;
var obj70197_onTap_loopCount = 0;
obj70197_onTap_actionGroup0();
});










/*
 *
 *   obj70194: Event Touch Down
 *
 */
$("#obj70194").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70194_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70194_onTap is still running");
	return;
}
var obj70194_onTap_runningActionsCount = 0;
var obj70194_onTap_loopCount = 0;
obj70194_onTap_actionGroup0();
});










/*
 *
 *   obj70187: Event Touch Down
 *
 */
$("#obj70187").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70187_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70187_onTap is still running");
	return;
}
var obj70187_onTap_runningActionsCount = 0;
var obj70187_onTap_loopCount = 0;
obj70187_onTap_actionGroup0();
});










/*
 *
 *   obj70180: Event Touch Down
 *
 */
$("#obj70180").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70180_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70180_onTap is still running");
	return;
}
var obj70180_onTap_runningActionsCount = 0;
var obj70180_onTap_loopCount = 0;
obj70180_onTap_actionGroup0();
});










/*
 *
 *   obj70177: Event Touch Down
 *
 */
$("#obj70177").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70177_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70177_onTap is still running");
	return;
}
var obj70177_onTap_runningActionsCount = 0;
var obj70177_onTap_loopCount = 0;
obj70177_onTap_actionGroup0();
});










/*
 *
 *   obj70170: Event Touch Down
 *
 */
$("#obj70170").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70170_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70170_onTap is still running");
	return;
}
var obj70170_onTap_runningActionsCount = 0;
var obj70170_onTap_loopCount = 0;
obj70170_onTap_actionGroup0();
});










/*
 *
 *   obj70163: Event Touch Down
 *
 */
$("#obj70163").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70163_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70163_onTap is still running");
	return;
}
var obj70163_onTap_runningActionsCount = 0;
var obj70163_onTap_loopCount = 0;
obj70163_onTap_actionGroup0();
});










/*
 *
 *   obj70149: Event Touch Down
 *
 */
$("#obj70149").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70149_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70149_onTap is still running");
	return;
}
var obj70149_onTap_runningActionsCount = 0;
var obj70149_onTap_loopCount = 0;
obj70149_onTap_actionGroup0();
});




















/*
 *
 *   obj70134: Event Touch Down
 *
 */
$("#obj70134").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70134_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70134_onTap is still running");
	return;
}
var obj70134_onTap_runningActionsCount = 0;
var obj70134_onTap_loopCount = 0;
obj70134_onTap_actionGroup0();
});










/*
 *
 *   obj70127: Event Touch Down
 *
 */
$("#obj70127").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70127_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70127_onTap is still running");
	return;
}
var obj70127_onTap_runningActionsCount = 0;
var obj70127_onTap_loopCount = 0;
obj70127_onTap_actionGroup0();
});










/*
 *
 *   obj70124: Event Touch Down
 *
 */
$("#obj70124").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70124_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70124_onTap is still running");
	return;
}
var obj70124_onTap_runningActionsCount = 0;
var obj70124_onTap_loopCount = 0;
obj70124_onTap_actionGroup0();
});










/*
 *
 *   obj70112: Event Touch Down
 *
 */
$("#obj70112").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70112_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70112_onTap is still running");
	return;
}
var obj70112_onTap_runningActionsCount = 0;
var obj70112_onTap_loopCount = 0;
obj70112_onTap_actionGroup0();
});










/*
 *
 *   obj70105: Event Touch Down
 *
 */
$("#obj70105").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70105_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70105_onTap is still running");
	return;
}
var obj70105_onTap_runningActionsCount = 0;
var obj70105_onTap_loopCount = 0;
obj70105_onTap_actionGroup0();
});










/*
 *
 *   obj70098: Event Touch Down
 *
 */
$("#obj70098").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70098_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70098_onTap is still running");
	return;
}
var obj70098_onTap_runningActionsCount = 0;
var obj70098_onTap_loopCount = 0;
obj70098_onTap_actionGroup0();
});








































/*
 *
 *   obj70089: Event Touch Down
 *
 */
$("#obj70089").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70089_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70089_onTap is still running");
	return;
}
var obj70089_onTap_runningActionsCount = 0;
var obj70089_onTap_loopCount = 0;
obj70089_onTap_actionGroup0();
});










/*
 *
 *   obj70080: Event Touch Down
 *
 */
$("#obj70080").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70080_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70080_onTap is still running");
	return;
}
var obj70080_onTap_runningActionsCount = 0;
var obj70080_onTap_loopCount = 0;
obj70080_onTap_actionGroup0();
});




















/*
 *
 *   obj70071: Event Touch Down
 *
 */
$("#obj70071").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70071_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70071_onTap is still running");
	return;
}
var obj70071_onTap_runningActionsCount = 0;
var obj70071_onTap_loopCount = 0;
obj70071_onTap_actionGroup0();
});










/*
 *
 *   obj70064: Event Touch Down
 *
 */
$("#obj70064").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70064_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70064_onTap is still running");
	return;
}
var obj70064_onTap_runningActionsCount = 0;
var obj70064_onTap_loopCount = 0;
obj70064_onTap_actionGroup0();
});








































/*
 *
 *   obj70049: Event Touch Down
 *
 */
$("#obj70049").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70049_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70049_onTap is still running");
	return;
}
var obj70049_onTap_runningActionsCount = 0;
var obj70049_onTap_loopCount = 0;
obj70049_onTap_actionGroup0();
});






























/*
 *
 *   obj70038: Event Touch Down
 *
 */
$("#obj70038").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70038_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70038_onTap is still running");
	return;
}
var obj70038_onTap_runningActionsCount = 0;
var obj70038_onTap_loopCount = 0;
obj70038_onTap_actionGroup0();
});










/*
 *
 *   obj70031: Event Touch Down
 *
 */
$("#obj70031").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70031_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70031_onTap is still running");
	return;
}
var obj70031_onTap_runningActionsCount = 0;
var obj70031_onTap_loopCount = 0;
obj70031_onTap_actionGroup0();
});




















/*
 *
 *   obj70022: Event Touch Down
 *
 */
$("#obj70022").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70022_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70022_onTap is still running");
	return;
}
var obj70022_onTap_runningActionsCount = 0;
var obj70022_onTap_loopCount = 0;
obj70022_onTap_actionGroup0();
});


















































/*
 *
 *   obj70007: Event Touch Down
 *
 */
$("#obj70007").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70007_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70007_onTap is still running");
	return;
}
var obj70007_onTap_runningActionsCount = 0;
var obj70007_onTap_loopCount = 0;
obj70007_onTap_actionGroup0();
});










/*
 *
 *   obj70000: Event Touch Down
 *
 */
$("#obj70000").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70000_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70000_onTap is still running");
	return;
}
var obj70000_onTap_runningActionsCount = 0;
var obj70000_onTap_loopCount = 0;
obj70000_onTap_actionGroup0();
});




















/*
 *
 *   obj69991: Event Touch Down
 *
 */
$("#obj69991").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69991_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69991_onTap is still running");
	return;
}
var obj69991_onTap_runningActionsCount = 0;
var obj69991_onTap_loopCount = 0;
obj69991_onTap_actionGroup0();
});


















































/*
 *
 *   obj69976: Event Touch Down
 *
 */
$("#obj69976").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69976_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69976_onTap is still running");
	return;
}
var obj69976_onTap_runningActionsCount = 0;
var obj69976_onTap_loopCount = 0;
obj69976_onTap_actionGroup0();
});










/*
 *
 *   obj69969: Event Touch Down
 *
 */
$("#obj69969").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69969_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69969_onTap is still running");
	return;
}
var obj69969_onTap_runningActionsCount = 0;
var obj69969_onTap_loopCount = 0;
obj69969_onTap_actionGroup0();
});




















/*
 *
 *   obj69960: Event Touch Down
 *
 */
$("#obj69960").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69960_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69960_onTap is still running");
	return;
}
var obj69960_onTap_runningActionsCount = 0;
var obj69960_onTap_loopCount = 0;
obj69960_onTap_actionGroup0();
});






























/*
 *
 *   obj69949: Event Touch Down
 *
 */
$("#obj69949").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69949_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69949_onTap is still running");
	return;
}
var obj69949_onTap_runningActionsCount = 0;
var obj69949_onTap_loopCount = 0;
obj69949_onTap_actionGroup0();
});




















/*
 *
 *   obj69940: Event Touch Down
 *
 */
$("#obj69940").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69940_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69940_onTap is still running");
	return;
}
var obj69940_onTap_runningActionsCount = 0;
var obj69940_onTap_loopCount = 0;
obj69940_onTap_actionGroup0();
});










/*
 *
 *   obj69933: Event Touch Down
 *
 */
$("#obj69933").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69933_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69933_onTap is still running");
	return;
}
var obj69933_onTap_runningActionsCount = 0;
var obj69933_onTap_loopCount = 0;
obj69933_onTap_actionGroup0();
});




















/*
 *
 *   obj69924: Event Touch Down
 *
 */
$("#obj69924").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69924_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69924_onTap is still running");
	return;
}
var obj69924_onTap_runningActionsCount = 0;
var obj69924_onTap_loopCount = 0;
obj69924_onTap_actionGroup0();
});




















/*
 *
 *   obj69915: Event Touch Down
 *
 */
$("#obj69915").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69915_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69915_onTap is still running");
	return;
}
var obj69915_onTap_runningActionsCount = 0;
var obj69915_onTap_loopCount = 0;
obj69915_onTap_actionGroup0();
});










/*
 *
 *   obj69908: Event Touch Down
 *
 */
$("#obj69908").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69908_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69908_onTap is still running");
	return;
}
var obj69908_onTap_runningActionsCount = 0;
var obj69908_onTap_loopCount = 0;
obj69908_onTap_actionGroup0();
});




















/*
 *
 *   obj69903: Event Touch Down
 *
 */
$("#obj69903").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69903_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69903_onTap is still running");
	return;
}
var obj69903_onTap_runningActionsCount = 0;
var obj69903_onTap_loopCount = 0;
obj69903_onTap_actionGroup0();
});










/*
 *
 *   obj69896: Event Touch Down
 *
 */
$("#obj69896").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69896_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69896_onTap is still running");
	return;
}
var obj69896_onTap_runningActionsCount = 0;
var obj69896_onTap_loopCount = 0;
obj69896_onTap_actionGroup0();
});




















/*
 *
 *   obj69887: Event Touch Down
 *
 */
$("#obj69887").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69887_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69887_onTap is still running");
	return;
}
var obj69887_onTap_runningActionsCount = 0;
var obj69887_onTap_loopCount = 0;
obj69887_onTap_actionGroup0();
});




















/*
 *
 *   obj69878: Event Touch Down
 *
 */
$("#obj69878").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69878_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69878_onTap is still running");
	return;
}
var obj69878_onTap_runningActionsCount = 0;
var obj69878_onTap_loopCount = 0;
obj69878_onTap_actionGroup0();
});










/*
 *
 *   obj69871: Event Touch Down
 *
 */
$("#obj69871").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69871_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69871_onTap is still running");
	return;
}
var obj69871_onTap_runningActionsCount = 0;
var obj69871_onTap_loopCount = 0;
obj69871_onTap_actionGroup0();
});










/*
 *
 *   obj69864: Event Touch Down
 *
 */
$("#obj69864").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69864_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69864_onTap is still running");
	return;
}
var obj69864_onTap_runningActionsCount = 0;
var obj69864_onTap_loopCount = 0;
obj69864_onTap_actionGroup0();
});










/*
 *
 *   obj69855: Event Touch Down
 *
 */
$("#obj69855").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69855_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69855_onTap is still running");
	return;
}
var obj69855_onTap_runningActionsCount = 0;
var obj69855_onTap_loopCount = 0;
obj69855_onTap_actionGroup0();
});










/*
 *
 *   obj69848: Event Touch Down
 *
 */
$("#obj69848").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69848_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69848_onTap is still running");
	return;
}
var obj69848_onTap_runningActionsCount = 0;
var obj69848_onTap_loopCount = 0;
obj69848_onTap_actionGroup0();
});




















/*
 *
 *   obj69839: Event Touch Down
 *
 */
$("#obj69839").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69839_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69839_onTap is still running");
	return;
}
var obj69839_onTap_runningActionsCount = 0;
var obj69839_onTap_loopCount = 0;
obj69839_onTap_actionGroup0();
});










/*
 *
 *   obj69832: Event Touch Down
 *
 */
$("#obj69832").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69832_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69832_onTap is still running");
	return;
}
var obj69832_onTap_runningActionsCount = 0;
var obj69832_onTap_loopCount = 0;
obj69832_onTap_actionGroup0();
});










/*
 *
 *   obj69825: Event Touch Down
 *
 */
$("#obj69825").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69825_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69825_onTap is still running");
	return;
}
var obj69825_onTap_runningActionsCount = 0;
var obj69825_onTap_loopCount = 0;
obj69825_onTap_actionGroup0();
});










/*
 *
 *   obj69822: Event Touch Down
 *
 */
$("#obj69822").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69822_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69822_onTap is still running");
	return;
}
var obj69822_onTap_runningActionsCount = 0;
var obj69822_onTap_loopCount = 0;
obj69822_onTap_actionGroup0();
});










/*
 *
 *   obj69813: Event Touch Down
 *
 */
$("#obj69813").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69813_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69813_onTap is still running");
	return;
}
var obj69813_onTap_runningActionsCount = 0;
var obj69813_onTap_loopCount = 0;
obj69813_onTap_actionGroup0();
});








































/*
 *
 *   obj69800: Event Touch Down
 *
 */
$("#obj69800").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69800_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69800_onTap is still running");
	return;
}
var obj69800_onTap_runningActionsCount = 0;
var obj69800_onTap_loopCount = 0;
obj69800_onTap_actionGroup0();
});










/*
 *
 *   obj69793: Event Touch Down
 *
 */
$("#obj69793").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69793_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69793_onTap is still running");
	return;
}
var obj69793_onTap_runningActionsCount = 0;
var obj69793_onTap_loopCount = 0;
obj69793_onTap_actionGroup0();
});










/*
 *
 *   obj69786: Event Touch Down
 *
 */
$("#obj69786").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69786_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69786_onTap is still running");
	return;
}
var obj69786_onTap_runningActionsCount = 0;
var obj69786_onTap_loopCount = 0;
obj69786_onTap_actionGroup0();
});










/*
 *
 *   obj69779: Event Touch Down
 *
 */
$("#obj69779").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69779_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69779_onTap is still running");
	return;
}
var obj69779_onTap_runningActionsCount = 0;
var obj69779_onTap_loopCount = 0;
obj69779_onTap_actionGroup0();
});










/*
 *
 *   obj69772: Event Touch Down
 *
 */
$("#obj69772").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69772_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69772_onTap is still running");
	return;
}
var obj69772_onTap_runningActionsCount = 0;
var obj69772_onTap_loopCount = 0;
obj69772_onTap_actionGroup0();
});




















/*
 *
 *   obj69763: Event Touch Down
 *
 */
$("#obj69763").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69763_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69763_onTap is still running");
	return;
}
var obj69763_onTap_runningActionsCount = 0;
var obj69763_onTap_loopCount = 0;
obj69763_onTap_actionGroup0();
});










/*
 *
 *   obj69756: Event Touch Down
 *
 */
$("#obj69756").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69756_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69756_onTap is still running");
	return;
}
var obj69756_onTap_runningActionsCount = 0;
var obj69756_onTap_loopCount = 0;
obj69756_onTap_actionGroup0();
});










/*
 *
 *   obj69749: Event Touch Down
 *
 */
$("#obj69749").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69749_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69749_onTap is still running");
	return;
}
var obj69749_onTap_runningActionsCount = 0;
var obj69749_onTap_loopCount = 0;
obj69749_onTap_actionGroup0();
});










/*
 *
 *   obj69742: Event Touch Down
 *
 */
$("#obj69742").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69742_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69742_onTap is still running");
	return;
}
var obj69742_onTap_runningActionsCount = 0;
var obj69742_onTap_loopCount = 0;
obj69742_onTap_actionGroup0();
});










/*
 *
 *   obj69739: Event Touch Down
 *
 */
$("#obj69739").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69739_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69739_onTap is still running");
	return;
}
var obj69739_onTap_runningActionsCount = 0;
var obj69739_onTap_loopCount = 0;
obj69739_onTap_actionGroup0();
});










/*
 *
 *   obj69728: Event Touch Down
 *
 */
$("#obj69728").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69728_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69728_onTap is still running");
	return;
}
var obj69728_onTap_runningActionsCount = 0;
var obj69728_onTap_loopCount = 0;
obj69728_onTap_actionGroup0();
});




























































/*
 *
 *   obj69711: Event Touch Down
 *
 */
$("#obj69711").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69711_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69711_onTap is still running");
	return;
}
var obj69711_onTap_runningActionsCount = 0;
var obj69711_onTap_loopCount = 0;
obj69711_onTap_actionGroup0();
});


























































































































































































































































/*
 *
 *   obj69647: Event Touch Down
 *
 */
$("#obj69647").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69647_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69647_onTap is still running");
	return;
}
var obj69647_onTap_runningActionsCount = 0;
var obj69647_onTap_loopCount = 0;
obj69647_onTap_actionGroup0();
});










/*
 *
 *   obj69639: Event Touch Down
 *
 */
$("#obj69639").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69639_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69639_onTap is still running");
	return;
}
var obj69639_onTap_runningActionsCount = 0;
var obj69639_onTap_loopCount = 0;
obj69639_onTap_actionGroup0();
});










/*
 *
 *   obj87250: Event Touch Down
 *
 */
$("#obj87250").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87250_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87250_onTap is still running");
	return;
}
var obj87250_onTap_runningActionsCount = 0;
var obj87250_onTap_loopCount = 0;
obj87250_onTap_actionGroup0();
});










/*
 *
 *   obj87245: Event Touch Down
 *
 */
$("#obj87245").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87245_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87245_onTap is still running");
	return;
}
var obj87245_onTap_runningActionsCount = 0;
var obj87245_onTap_loopCount = 0;
obj87245_onTap_actionGroup0();
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
	
$("#obj70296").trigger('SCEventShow');
$("#obj70293").trigger('SCEventShow');
$("#obj70290").trigger('SCEventShow');
$("#obj70286").trigger('SCEventShow');
$("#obj70284").trigger('SCEventShow');
$("#obj70282").trigger('SCEventShow');
$("#obj70280").trigger('SCEventShow');
$("#obj70276").trigger('SCEventShow');
$("#obj70274").trigger('SCEventShow');
$("#obj70267").trigger('SCEventShow');
$("#obj70264").trigger('SCEventShow');
$("#obj70256").trigger('SCEventShow');
$("#obj70254").trigger('SCEventShow');
$("#obj70252").trigger('SCEventShow');
$("#obj70245").trigger('SCEventShow');
$("#obj70242").trigger('SCEventShow');
$("#obj70235").trigger('SCEventShow');
$("#obj70228").trigger('SCEventShow');
$("#obj70225").trigger('SCEventShow');
$("#obj70218").trigger('SCEventShow');
$("#obj70216").trigger('SCEventShow');
$("#obj70209").trigger('SCEventShow');
$("#obj70206").trigger('SCEventShow');
$("#obj70197").trigger('SCEventShow');
$("#obj70194").trigger('SCEventShow');
$("#obj70187").trigger('SCEventShow');
$("#obj70180").trigger('SCEventShow');
$("#obj70177").trigger('SCEventShow');
$("#obj70170").trigger('SCEventShow');
$("#obj70163").trigger('SCEventShow');
$("#obj70149").trigger('SCEventShow');
$("#obj70147").trigger('SCEventShow');
$("#obj70134").trigger('SCEventShow');
$("#obj70127").trigger('SCEventShow');
$("#obj70124").trigger('SCEventShow');
$("#obj70112").trigger('SCEventShow');
$("#obj70105").trigger('SCEventShow');
$("#obj70098").trigger('SCEventShow');
$("#obj70096").trigger('SCEventShow');
$("#obj70094").trigger('SCEventShow');
$("#obj70092").trigger('SCEventShow');
$("#obj70089").trigger('SCEventShow');
$("#obj70080").trigger('SCEventShow');
$("#obj70078").trigger('SCEventShow');
$("#obj70071").trigger('SCEventShow');
$("#obj70064").trigger('SCEventShow');
$("#obj70062").trigger('SCEventShow');
$("#obj70060").trigger('SCEventShow');
$("#obj70058").trigger('SCEventShow');
$("#obj70049").trigger('SCEventShow');
$("#obj70047").trigger('SCEventShow');
$("#obj70045").trigger('SCEventShow');
$("#obj70038").trigger('SCEventShow');
$("#obj70031").trigger('SCEventShow');
$("#obj70029").trigger('SCEventShow');
$("#obj70022").trigger('SCEventShow');
$("#obj70020").trigger('SCEventShow');
$("#obj70018").trigger('SCEventShow');
$("#obj70016").trigger('SCEventShow');
$("#obj70014").trigger('SCEventShow');
$("#obj70007").trigger('SCEventShow');
$("#obj70000").trigger('SCEventShow');
$("#obj69998").trigger('SCEventShow');
$("#obj69991").trigger('SCEventShow');
$("#obj69989").trigger('SCEventShow');
$("#obj69987").trigger('SCEventShow');
$("#obj69985").trigger('SCEventShow');
$("#obj69983").trigger('SCEventShow');
$("#obj69976").trigger('SCEventShow');
$("#obj69969").trigger('SCEventShow');
$("#obj69967").trigger('SCEventShow');
$("#obj69960").trigger('SCEventShow');
$("#obj69958").trigger('SCEventShow');
$("#obj69956").trigger('SCEventShow');
$("#obj69949").trigger('SCEventShow');
$("#obj69947").trigger('SCEventShow');
$("#obj69940").trigger('SCEventShow');
$("#obj69933").trigger('SCEventShow');
$("#obj69931").trigger('SCEventShow');
$("#obj69924").trigger('SCEventShow');
$("#obj69922").trigger('SCEventShow');
$("#obj69915").trigger('SCEventShow');
$("#obj69908").trigger('SCEventShow');
$("#obj69906").trigger('SCEventShow');
$("#obj69903").trigger('SCEventShow');
$("#obj69896").trigger('SCEventShow');
$("#obj69894").trigger('SCEventShow');
$("#obj69887").trigger('SCEventShow');
$("#obj69885").trigger('SCEventShow');
$("#obj69878").trigger('SCEventShow');
$("#obj69871").trigger('SCEventShow');
$("#obj69864").trigger('SCEventShow');
$("#obj69855").trigger('SCEventShow');
$("#obj69848").trigger('SCEventShow');
$("#obj69846").trigger('SCEventShow');
$("#obj69839").trigger('SCEventShow');
$("#obj69832").trigger('SCEventShow');
$("#obj69825").trigger('SCEventShow');
$("#obj69822").trigger('SCEventShow');
$("#obj69813").trigger('SCEventShow');
$("#obj69811").trigger('SCEventShow');
$("#obj69809").trigger('SCEventShow');
$("#obj69807").trigger('SCEventShow');
$("#obj69800").trigger('SCEventShow');
$("#obj69793").trigger('SCEventShow');
$("#obj69786").trigger('SCEventShow');
$("#obj69779").trigger('SCEventShow');
$("#obj69772").trigger('SCEventShow');
$("#obj69770").trigger('SCEventShow');
$("#obj69763").trigger('SCEventShow');
$("#obj69756").trigger('SCEventShow');
$("#obj69749").trigger('SCEventShow');
$("#obj69742").trigger('SCEventShow');
$("#obj69739").trigger('SCEventShow');
$("#obj69728").trigger('SCEventShow');
$("#obj69726").trigger('SCEventShow');
$("#obj69724").trigger('SCEventShow');
$("#obj69722").trigger('SCEventShow');
$("#obj69720").trigger('SCEventShow');
$("#obj69718").trigger('SCEventShow');
$("#obj69711").trigger('SCEventShow');
$("#obj69709").trigger('SCEventShow');
$("#obj69708").trigger('SCEventShow');
$("#obj69707").trigger('SCEventShow');
$("#obj69705").trigger('SCEventShow');
$("#obj69703").trigger('SCEventShow');
$("#obj69701").trigger('SCEventShow');
$("#obj69699").trigger('SCEventShow');
$("#obj69697").trigger('SCEventShow');
$("#obj69695").trigger('SCEventShow');
$("#obj69693").trigger('SCEventShow');
$("#obj69691").trigger('SCEventShow');
$("#obj69689").trigger('SCEventShow');
$("#obj69687").trigger('SCEventShow');
$("#obj69685").trigger('SCEventShow');
$("#obj69683").trigger('SCEventShow');
$("#obj69681").trigger('SCEventShow');
$("#obj69679").trigger('SCEventShow');
$("#obj69677").trigger('SCEventShow');
$("#obj69675").trigger('SCEventShow');
$("#obj69673").trigger('SCEventShow');
$("#obj69671").trigger('SCEventShow');
$("#obj69669").trigger('SCEventShow');
$("#obj69667").trigger('SCEventShow');
$("#obj69665").trigger('SCEventShow');
$("#obj69647").trigger('SCEventShow');
$("#obj69639").trigger('SCEventShow');
$("#obj87250").trigger('SCEventShow');
$("#obj87245").trigger('SCEventShow');
$("#obj87255").trigger('SCEventShow');
$("#obj90846").trigger('SCEventShow');
$("#obj94715").trigger('SCEventShow');
$("#obj92127").trigger('SCEventShow');
	
});