pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 44268;
pubcoder.page.title = pubcoder.page.title || "152";
pubcoder.page.number = pubcoder.page.number || 152;
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
var obj45213_onTap_activeActionGroupIndex = -1;
var obj45213_onTap_runningActionsCount = 0;
var obj45213_onTap_loopCount = 0;
var obj45210_onTap_activeActionGroupIndex = -1;
var obj45210_onTap_runningActionsCount = 0;
var obj45210_onTap_loopCount = 0;
var obj45206_onTap_activeActionGroupIndex = -1;
var obj45206_onTap_runningActionsCount = 0;
var obj45206_onTap_loopCount = 0;
var obj45089_onDrag_activeActionGroupIndex = -1;
var obj45089_onDrag_runningActionsCount = 0;
var obj45089_onDrag_loopCount = 0;
var obj45089_onTouchDown_activeActionGroupIndex = -1;
var obj45089_onTouchDown_runningActionsCount = 0;
var obj45089_onTouchDown_loopCount = 0;
var obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_loopCount = 0;
var obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj45089_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj45089_droppedInsideTargetActions_6_loopCount = 0;
var obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj45089_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj45089_droppedInsideTargetActions_5_loopCount = 0;
var obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj45089_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj45089_droppedInsideTargetActions_4_loopCount = 0;
var obj45089_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj45089_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj45089_droppedInsideTargetActions_3_loopCount = 0;
var obj45089_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj45089_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj45089_droppedInsideTargetActions_2_loopCount = 0;
var obj45089_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj45089_droppedInsideTargetActions_runningActionsCount = 0;
var obj45089_droppedInsideTargetActions_loopCount = 0;
var obj45018_onDrag_activeActionGroupIndex = -1;
var obj45018_onDrag_runningActionsCount = 0;
var obj45018_onDrag_loopCount = 0;
var obj45018_onTouchDown_activeActionGroupIndex = -1;
var obj45018_onTouchDown_runningActionsCount = 0;
var obj45018_onTouchDown_loopCount = 0;
var obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_loopCount = 0;
var obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj45018_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj45018_droppedInsideTargetActions_6_loopCount = 0;
var obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj45018_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj45018_droppedInsideTargetActions_5_loopCount = 0;
var obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj45018_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj45018_droppedInsideTargetActions_4_loopCount = 0;
var obj45018_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj45018_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj45018_droppedInsideTargetActions_3_loopCount = 0;
var obj45018_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj45018_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj45018_droppedInsideTargetActions_2_loopCount = 0;
var obj45018_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj45018_droppedInsideTargetActions_runningActionsCount = 0;
var obj45018_droppedInsideTargetActions_loopCount = 0;
var obj44951_onDrag_activeActionGroupIndex = -1;
var obj44951_onDrag_runningActionsCount = 0;
var obj44951_onDrag_loopCount = 0;
var obj44951_onTouchDown_activeActionGroupIndex = -1;
var obj44951_onTouchDown_runningActionsCount = 0;
var obj44951_onTouchDown_loopCount = 0;
var obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_runningActionsCount = 0;
var obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_loopCount = 0;
var obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj44951_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj44951_droppedInsideTargetActions_6_loopCount = 0;
var obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj44951_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj44951_droppedInsideTargetActions_5_loopCount = 0;
var obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj44951_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj44951_droppedInsideTargetActions_4_loopCount = 0;
var obj44951_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj44951_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj44951_droppedInsideTargetActions_3_loopCount = 0;
var obj44951_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj44951_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj44951_droppedInsideTargetActions_2_loopCount = 0;
var obj44951_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj44951_droppedInsideTargetActions_runningActionsCount = 0;
var obj44951_droppedInsideTargetActions_loopCount = 0;
var obj44884_onDrag_activeActionGroupIndex = -1;
var obj44884_onDrag_runningActionsCount = 0;
var obj44884_onDrag_loopCount = 0;
var obj44884_onTouchDown_activeActionGroupIndex = -1;
var obj44884_onTouchDown_runningActionsCount = 0;
var obj44884_onTouchDown_loopCount = 0;
var obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_runningActionsCount = 0;
var obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_loopCount = 0;
var obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj44884_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj44884_droppedInsideTargetActions_6_loopCount = 0;
var obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj44884_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj44884_droppedInsideTargetActions_5_loopCount = 0;
var obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj44884_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj44884_droppedInsideTargetActions_4_loopCount = 0;
var obj44884_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj44884_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj44884_droppedInsideTargetActions_3_loopCount = 0;
var obj44884_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj44884_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj44884_droppedInsideTargetActions_2_loopCount = 0;
var obj44884_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj44884_droppedInsideTargetActions_runningActionsCount = 0;
var obj44884_droppedInsideTargetActions_loopCount = 0;
var obj44817_onDrag_activeActionGroupIndex = -1;
var obj44817_onDrag_runningActionsCount = 0;
var obj44817_onDrag_loopCount = 0;
var obj44817_onTouchDown_activeActionGroupIndex = -1;
var obj44817_onTouchDown_runningActionsCount = 0;
var obj44817_onTouchDown_loopCount = 0;
var obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_runningActionsCount = 0;
var obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_loopCount = 0;
var obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj44817_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj44817_droppedInsideTargetActions_6_loopCount = 0;
var obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj44817_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj44817_droppedInsideTargetActions_5_loopCount = 0;
var obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj44817_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj44817_droppedInsideTargetActions_4_loopCount = 0;
var obj44817_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj44817_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj44817_droppedInsideTargetActions_3_loopCount = 0;
var obj44817_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj44817_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj44817_droppedInsideTargetActions_2_loopCount = 0;
var obj44817_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj44817_droppedInsideTargetActions_runningActionsCount = 0;
var obj44817_droppedInsideTargetActions_loopCount = 0;
var obj44750_onDrag_activeActionGroupIndex = -1;
var obj44750_onDrag_runningActionsCount = 0;
var obj44750_onDrag_loopCount = 0;
var obj44750_onTouchDown_activeActionGroupIndex = -1;
var obj44750_onTouchDown_runningActionsCount = 0;
var obj44750_onTouchDown_loopCount = 0;
var obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_runningActionsCount = 0;
var obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_loopCount = 0;
var obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj44750_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj44750_droppedInsideTargetActions_6_loopCount = 0;
var obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj44750_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj44750_droppedInsideTargetActions_5_loopCount = 0;
var obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj44750_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj44750_droppedInsideTargetActions_4_loopCount = 0;
var obj44750_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj44750_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj44750_droppedInsideTargetActions_3_loopCount = 0;
var obj44750_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj44750_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj44750_droppedInsideTargetActions_2_loopCount = 0;
var obj44750_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj44750_droppedInsideTargetActions_runningActionsCount = 0;
var obj44750_droppedInsideTargetActions_loopCount = 0;
var obj67438_onTap_activeActionGroupIndex = -1;
var obj67438_onTap_runningActionsCount = 0;
var obj67438_onTap_loopCount = 0;
var obj67430_onTap_activeActionGroupIndex = -1;
var obj67430_onTap_runningActionsCount = 0;
var obj67430_onTap_loopCount = 0;
var obj88705_onTap_activeActionGroupIndex = -1;
var obj88705_onTap_runningActionsCount = 0;
var obj88705_onTap_loopCount = 0;
var obj88700_onTap_activeActionGroupIndex = -1;
var obj88700_onTap_runningActionsCount = 0;
var obj88700_onTap_loopCount = 0;
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
		
obj45213_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45213_onTap_activeActionGroupIndex = -1;
		$("#obj45213").trigger("obj45213_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45213) {
				console.warn("de-queueing event obj45213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45213_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_45215();
function goToPage_45215() {
	window.obj45213_onTap_runningActionsCount = obj45213_onTap_runningActionsCount + 1;
	$("#anchor897")[0].click();
	window.obj45213_onTap_runningActionsCount = window.obj45213_onTap_runningActionsCount - 1;
if (window.obj45213_onTap_runningActionsCount < 0) {
	window.obj45213_onTap_runningActionsCount = 0;
} else if (window.obj45213_onTap_runningActionsCount == 0) {
	obj45213_onTap_actionGroup1();
}
}





















};
obj45213_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45213_onTap_activeActionGroupIndex = -1;
		$("#obj45213").trigger("obj45213_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45213) {
				console.warn("de-queueing event obj45213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45213_onTap_activeActionGroupIndex = 1;
	





















};
obj45210_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45210_onTap_activeActionGroupIndex = -1;
		$("#obj45210").trigger("obj45210_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45210) {
				console.warn("de-queueing event obj45210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45210_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_45212();
function goToPage_45212() {
	window.obj45210_onTap_runningActionsCount = obj45210_onTap_runningActionsCount + 1;
	$("#anchor898")[0].click();
	window.obj45210_onTap_runningActionsCount = window.obj45210_onTap_runningActionsCount - 1;
if (window.obj45210_onTap_runningActionsCount < 0) {
	window.obj45210_onTap_runningActionsCount = 0;
} else if (window.obj45210_onTap_runningActionsCount == 0) {
	obj45210_onTap_actionGroup1();
}
}





















};
obj45210_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45210_onTap_activeActionGroupIndex = -1;
		$("#obj45210").trigger("obj45210_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45210) {
				console.warn("de-queueing event obj45210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45210_onTap_activeActionGroupIndex = 1;
	





















};
obj45206_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45206_onTap_activeActionGroupIndex = -1;
		$("#obj45206").trigger("obj45206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45206) {
				console.warn("de-queueing event obj45206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45206_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_45208();
function goToPage_45208() {
	window.obj45206_onTap_runningActionsCount = obj45206_onTap_runningActionsCount + 1;
	$("#anchor899")[0].click();
	window.obj45206_onTap_runningActionsCount = window.obj45206_onTap_runningActionsCount - 1;
if (window.obj45206_onTap_runningActionsCount < 0) {
	window.obj45206_onTap_runningActionsCount = 0;
} else if (window.obj45206_onTap_runningActionsCount == 0) {
	obj45206_onTap_actionGroup1();
}
}





















};
obj45206_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45206_onTap_activeActionGroupIndex = -1;
		$("#obj45206").trigger("obj45206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45206) {
				console.warn("de-queueing event obj45206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45206_onTap_activeActionGroupIndex = 1;
	





















};
obj45089_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj45089");
//	action: dragDrop
//	target: obj45089 
dragDrop_45092();
function dragDrop_45092() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj45089_onTouchDown_runningActionsCount = obj45089_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj45089');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj45198');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj45089_onTouchDown_runningActionsCount = window.obj45089_onTouchDown_runningActionsCount - 1;
if (window.obj45089_onTouchDown_runningActionsCount < 0) {
	window.obj45089_onTouchDown_runningActionsCount = 0;
} else if (window.obj45089_onTouchDown_runningActionsCount == 0) {
	obj45089_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj45188","#obj45184","#obj45180","#obj45190","#obj45186","#obj45182");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_45092 = false;
    	var dropped_id_45092;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_45092 = true;
					dropped_id_45092 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_45092) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj45089").trigger('SCActionDragDrop45092_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj45089_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45089_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj45089 
move_92659();
function move_92659() {
	window.obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_runningActionsCount = obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj45089");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 535;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_runningActionsCount = window.obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj45089_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45143();
function runjs_45143() {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = obj45089_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45182").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_6_runningActionsCount = window.obj45089_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45144();
function runjs_45144() {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = obj45089_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45182").css("border-color", "#C00000"); $("#obj45182").css("border-width", "2px"); $("#obj45182").css("border-style", "solid"); $("#obj45182").css("border-radius", "10px"); $("#obj45182").css("-webkit-border-radius", "10px"); $("#obj45182").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_6_runningActionsCount = window.obj45089_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_45146();
function runjs_45146() {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = obj45089_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45089").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_6_runningActionsCount = window.obj45089_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_6_actionGroup3();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_45147();
function switchText_45147() {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = obj45089_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45089_droppedInsideTargetActions_6_runningActionsCount = window.obj45089_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_6_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45089_droppedInsideTargetActions_6_runningActionsCount = window.obj45089_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	}
}






};
obj45089_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj45089 
move_45148();
function move_45148() {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = obj45089_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj45089");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 535;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45089_droppedInsideTargetActions_6_runningActionsCount = window.obj45089_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	});
}



















};
obj45089_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_45149();
function runjs_45149() {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = obj45089_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45182").css("background-color", "#D2DEEF");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_6_runningActionsCount = window.obj45089_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45150();
function runjs_45150() {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = obj45089_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45182").css("border-color", "#000000"); $("#obj45182").css("border-width", "1px"); $("#obj45182").css("border-style", "solid"); $("#obj45182").css("border-radius", "0px"); $("#obj45182").css("-webkit-border-radius", "0px"); $("#obj45182").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_6_runningActionsCount = window.obj45089_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45152();
function runjs_45152() {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = obj45089_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45089").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_6_runningActionsCount = window.obj45089_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_45153();
function runjs_45153() {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = obj45089_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45089").css("border-color", "rgba(0,0,0,0)"); $("#obj45089").css("border-width", "0px"); $("#obj45089").css("border-style", "solid"); $("#obj45089").css("border-radius", "10px"); $("#obj45089").css("-webkit-border-radius", "10px"); $("#obj45089").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_6_runningActionsCount = window.obj45089_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_6_actionGroup9();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	












//	action: playAudio
//	target: obj45156 
playAudio_45154();
function playAudio_45154() {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = obj45089_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj45156")[0];
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
		    window.obj45089_droppedInsideTargetActions_6_runningActionsCount = window.obj45089_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_6_actionGroup10();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45089_droppedInsideTargetActions_6_runningActionsCount = window.obj45089_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_6_actionGroup10();
}
	}
}









};
obj45089_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	















//	action: Switch Text
switchText_45155();
function switchText_45155() {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = obj45089_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45089_droppedInsideTargetActions_6_runningActionsCount = window.obj45089_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_6_actionGroup11();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45089_droppedInsideTargetActions_6_runningActionsCount = window.obj45089_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_6_actionGroup11();
}
		}, 1);
	}
}






};
obj45089_droppedInsideTargetActions_6_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex = 11;
	





















};
obj45089_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45129();
function runjs_45129() {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = obj45089_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45186").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_5_runningActionsCount = window.obj45089_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45130();
function runjs_45130() {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = obj45089_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45186").css("border-color", "#C00000"); $("#obj45186").css("border-width", "2px"); $("#obj45186").css("border-style", "solid"); $("#obj45186").css("border-radius", "10px"); $("#obj45186").css("-webkit-border-radius", "10px"); $("#obj45186").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_5_runningActionsCount = window.obj45089_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_45132();
function runjs_45132() {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = obj45089_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45089").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_5_runningActionsCount = window.obj45089_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_5_actionGroup3();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_45133();
function switchText_45133() {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = obj45089_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45089_droppedInsideTargetActions_5_runningActionsCount = window.obj45089_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_5_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45089_droppedInsideTargetActions_5_runningActionsCount = window.obj45089_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	}
}






};
obj45089_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj45089 
move_45134();
function move_45134() {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = obj45089_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj45089");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 535;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45089_droppedInsideTargetActions_5_runningActionsCount = window.obj45089_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	});
}



















};
obj45089_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_45135();
function runjs_45135() {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = obj45089_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45186").css("background-color", "#EAEFF7");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_5_runningActionsCount = window.obj45089_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45136();
function runjs_45136() {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = obj45089_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45186").css("border-color", "#000000"); $("#obj45186").css("border-width", "1px"); $("#obj45186").css("border-style", "solid"); $("#obj45186").css("border-radius", "0px"); $("#obj45186").css("-webkit-border-radius", "0px"); $("#obj45186").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_5_runningActionsCount = window.obj45089_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45138();
function runjs_45138() {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = obj45089_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45089").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_5_runningActionsCount = window.obj45089_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_45139();
function runjs_45139() {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = obj45089_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45089").css("border-color", "rgba(0,0,0,0)"); $("#obj45089").css("border-width", "0px"); $("#obj45089").css("border-style", "solid"); $("#obj45089").css("border-radius", "10px"); $("#obj45089").css("-webkit-border-radius", "10px"); $("#obj45089").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_5_runningActionsCount = window.obj45089_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_5_actionGroup9();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	












//	action: playAudio
//	target: obj45156 
playAudio_45140();
function playAudio_45140() {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = obj45089_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj45156")[0];
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
		    window.obj45089_droppedInsideTargetActions_5_runningActionsCount = window.obj45089_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_5_actionGroup10();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45089_droppedInsideTargetActions_5_runningActionsCount = window.obj45089_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_5_actionGroup10();
}
	}
}









};
obj45089_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Switch Text
switchText_45141();
function switchText_45141() {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = obj45089_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45089_droppedInsideTargetActions_5_runningActionsCount = window.obj45089_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_5_actionGroup11();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45089_droppedInsideTargetActions_5_runningActionsCount = window.obj45089_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_5_actionGroup11();
}
		}, 1);
	}
}






};
obj45089_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	





















};
obj45089_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45115();
function runjs_45115() {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = obj45089_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45190").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_4_runningActionsCount = window.obj45089_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45116();
function runjs_45116() {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = obj45089_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45190").css("border-color", "#C00000"); $("#obj45190").css("border-width", "2px"); $("#obj45190").css("border-style", "solid"); $("#obj45190").css("border-radius", "10px"); $("#obj45190").css("-webkit-border-radius", "10px"); $("#obj45190").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_4_runningActionsCount = window.obj45089_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_45118();
function runjs_45118() {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = obj45089_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45089").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_4_runningActionsCount = window.obj45089_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_45119();
function switchText_45119() {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = obj45089_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45089_droppedInsideTargetActions_4_runningActionsCount = window.obj45089_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_4_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45089_droppedInsideTargetActions_4_runningActionsCount = window.obj45089_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	}
}






};
obj45089_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj45089 
move_45120();
function move_45120() {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = obj45089_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj45089");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 535;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45089_droppedInsideTargetActions_4_runningActionsCount = window.obj45089_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	});
}



















};
obj45089_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_45121();
function runjs_45121() {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = obj45089_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45190").css("background-color", "#D2DEEF");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_4_runningActionsCount = window.obj45089_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45122();
function runjs_45122() {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = obj45089_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45190").css("border-color", "#000000"); $("#obj45190").css("border-width", "0px"); $("#obj45190").css("border-style", "solid"); $("#obj45190").css("border-radius", "0px"); $("#obj45190").css("-webkit-border-radius", "0px"); $("#obj45190").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_4_runningActionsCount = window.obj45089_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45124();
function runjs_45124() {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = obj45089_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45089").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_4_runningActionsCount = window.obj45089_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_45125();
function runjs_45125() {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = obj45089_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45089").css("border-color", "rgba(0,0,0,0)"); $("#obj45089").css("border-width", "0px"); $("#obj45089").css("border-style", "solid"); $("#obj45089").css("border-radius", "10px"); $("#obj45089").css("-webkit-border-radius", "10px"); $("#obj45089").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_4_runningActionsCount = window.obj45089_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_4_actionGroup9();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	












//	action: playAudio
//	target: obj45156 
playAudio_45126();
function playAudio_45126() {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = obj45089_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj45156")[0];
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
		    window.obj45089_droppedInsideTargetActions_4_runningActionsCount = window.obj45089_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_4_actionGroup10();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45089_droppedInsideTargetActions_4_runningActionsCount = window.obj45089_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_4_actionGroup10();
}
	}
}









};
obj45089_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Switch Text
switchText_45127();
function switchText_45127() {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = obj45089_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45089_droppedInsideTargetActions_4_runningActionsCount = window.obj45089_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_4_actionGroup11();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45089_droppedInsideTargetActions_4_runningActionsCount = window.obj45089_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_4_actionGroup11();
}
		}, 1);
	}
}






};
obj45089_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	





















};
obj45089_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45108();
function runjs_45108() {
	window.obj45089_droppedInsideTargetActions_3_runningActionsCount = obj45089_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45180").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_3_runningActionsCount = window.obj45089_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_45112();
function switchText_45112() {
	window.obj45089_droppedInsideTargetActions_3_runningActionsCount = obj45089_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45089_droppedInsideTargetActions_3_runningActionsCount = window.obj45089_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45089_droppedInsideTargetActions_3_runningActionsCount = window.obj45089_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj45089_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_45109();
function runjs_45109() {
	window.obj45089_droppedInsideTargetActions_3_runningActionsCount = obj45089_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45180").css("border-color", "#058E3F"); $("#obj45180").css("border-width", "2px"); $("#obj45180").css("border-style", "solid"); $("#obj45180").css("border-radius", "10px"); $("#obj45180").css("-webkit-border-radius", "10px"); $("#obj45180").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_3_runningActionsCount = window.obj45089_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45111();
function runjs_45111() {
	window.obj45089_droppedInsideTargetActions_3_runningActionsCount = obj45089_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45089").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_3_runningActionsCount = window.obj45089_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj45158 
playAudio_45113();
function playAudio_45113() {
	window.obj45089_droppedInsideTargetActions_3_runningActionsCount = obj45089_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj45158")[0];
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
		    window.obj45089_droppedInsideTargetActions_3_runningActionsCount = window.obj45089_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_3_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45089_droppedInsideTargetActions_3_runningActionsCount = window.obj45089_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_3_actionGroup5();
}
	}
}









};
obj45089_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90555();
function switchText_90555() {
	window.obj45089_droppedInsideTargetActions_3_runningActionsCount = obj45089_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45089_droppedInsideTargetActions_3_runningActionsCount = window.obj45089_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_3_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45089_droppedInsideTargetActions_3_runningActionsCount = window.obj45089_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	}
}






};
obj45089_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	





















};
obj45089_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45101();
function runjs_45101() {
	window.obj45089_droppedInsideTargetActions_2_runningActionsCount = obj45089_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45184").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_2_runningActionsCount = window.obj45089_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_45105();
function switchText_45105() {
	window.obj45089_droppedInsideTargetActions_2_runningActionsCount = obj45089_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45089_droppedInsideTargetActions_2_runningActionsCount = window.obj45089_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45089_droppedInsideTargetActions_2_runningActionsCount = window.obj45089_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj45089_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_45102();
function runjs_45102() {
	window.obj45089_droppedInsideTargetActions_2_runningActionsCount = obj45089_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45184").css("border-color", "#058E3F"); $("#obj45184").css("border-width", "2px"); $("#obj45184").css("border-style", "solid"); $("#obj45184").css("border-radius", "10px"); $("#obj45184").css("-webkit-border-radius", "10px"); $("#obj45184").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_2_runningActionsCount = window.obj45089_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45104();
function runjs_45104() {
	window.obj45089_droppedInsideTargetActions_2_runningActionsCount = obj45089_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45089").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_2_runningActionsCount = window.obj45089_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj45158 
playAudio_45106();
function playAudio_45106() {
	window.obj45089_droppedInsideTargetActions_2_runningActionsCount = obj45089_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj45158")[0];
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
		    window.obj45089_droppedInsideTargetActions_2_runningActionsCount = window.obj45089_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_2_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45089_droppedInsideTargetActions_2_runningActionsCount = window.obj45089_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_2_actionGroup5();
}
	}
}









};
obj45089_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90554();
function switchText_90554() {
	window.obj45089_droppedInsideTargetActions_2_runningActionsCount = obj45089_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45089_droppedInsideTargetActions_2_runningActionsCount = window.obj45089_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_2_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45089_droppedInsideTargetActions_2_runningActionsCount = window.obj45089_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	}
}






};
obj45089_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	





















};
obj45089_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45094();
function runjs_45094() {
	window.obj45089_droppedInsideTargetActions_runningActionsCount = obj45089_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45188").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_runningActionsCount = window.obj45089_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_45098();
function switchText_45098() {
	window.obj45089_droppedInsideTargetActions_runningActionsCount = obj45089_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45089_droppedInsideTargetActions_runningActionsCount = window.obj45089_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45089_droppedInsideTargetActions_runningActionsCount = window.obj45089_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj45089_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_45095();
function runjs_45095() {
	window.obj45089_droppedInsideTargetActions_runningActionsCount = obj45089_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45188").css("border-color", "#058E3F"); $("#obj45188").css("border-width", "2px"); $("#obj45188").css("border-style", "solid"); $("#obj45188").css("border-radius", "10px"); $("#obj45188").css("-webkit-border-radius", "10px"); $("#obj45188").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_runningActionsCount = window.obj45089_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45097();
function runjs_45097() {
	window.obj45089_droppedInsideTargetActions_runningActionsCount = obj45089_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45089").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45089_droppedInsideTargetActions_runningActionsCount = window.obj45089_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj45089_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj45158 
playAudio_45099();
function playAudio_45099() {
	window.obj45089_droppedInsideTargetActions_runningActionsCount = obj45089_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj45158")[0];
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
		    window.obj45089_droppedInsideTargetActions_runningActionsCount = window.obj45089_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45089_droppedInsideTargetActions_runningActionsCount = window.obj45089_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj45089_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90553();
function switchText_90553() {
	window.obj45089_droppedInsideTargetActions_runningActionsCount = obj45089_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45089_droppedInsideTargetActions_runningActionsCount = window.obj45089_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45089_droppedInsideTargetActions_runningActionsCount = window.obj45089_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45089_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45089_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45089_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45089_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj45089_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45089_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45089").trigger("obj45089_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45089) {
				console.warn("de-queueing event obj45089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45089_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj45018_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj45018");
//	action: dragDrop
//	target: obj45018 
dragDrop_45021();
function dragDrop_45021() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj45018_onTouchDown_runningActionsCount = obj45018_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj45018');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj45198');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj45018_onTouchDown_runningActionsCount = window.obj45018_onTouchDown_runningActionsCount - 1;
if (window.obj45018_onTouchDown_runningActionsCount < 0) {
	window.obj45018_onTouchDown_runningActionsCount = 0;
} else if (window.obj45018_onTouchDown_runningActionsCount == 0) {
	obj45018_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj45190","#obj45186","#obj45182","#obj45188","#obj45184","#obj45180");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_45021 = false;
    	var dropped_id_45021;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_45021 = true;
					dropped_id_45021 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_45021) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj45018").trigger('SCActionDragDrop45021_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj45018_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45018_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj45018 
move_92661();
function move_92661() {
	window.obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_runningActionsCount = obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj45018");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 320;
	var moveY = 535;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_runningActionsCount = window.obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj45018_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45072();
function runjs_45072() {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = obj45018_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45180").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_6_runningActionsCount = window.obj45018_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45073();
function runjs_45073() {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = obj45018_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45180").css("border-color", "#C00000"); $("#obj45180").css("border-width", "2px"); $("#obj45180").css("border-style", "solid"); $("#obj45180").css("border-radius", "10px"); $("#obj45180").css("-webkit-border-radius", "10px"); $("#obj45180").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_6_runningActionsCount = window.obj45018_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_45075();
function runjs_45075() {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = obj45018_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45018").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_6_runningActionsCount = window.obj45018_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_6_actionGroup3();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_45076();
function switchText_45076() {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = obj45018_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45018_droppedInsideTargetActions_6_runningActionsCount = window.obj45018_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_6_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45018_droppedInsideTargetActions_6_runningActionsCount = window.obj45018_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	}
}






};
obj45018_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj45018 
move_45077();
function move_45077() {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = obj45018_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj45018");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 320;
	var moveY = 535;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45018_droppedInsideTargetActions_6_runningActionsCount = window.obj45018_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	});
}



















};
obj45018_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_45078();
function runjs_45078() {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = obj45018_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45180").css("background-color", "#D2DEEF");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_6_runningActionsCount = window.obj45018_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45079();
function runjs_45079() {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = obj45018_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45180").css("border-color", "#000000"); $("#obj45180").css("border-width", "1px"); $("#obj45180").css("border-style", "solid"); $("#obj45180").css("border-radius", "0px"); $("#obj45180").css("-webkit-border-radius", "0px"); $("#obj45180").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_6_runningActionsCount = window.obj45018_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45081();
function runjs_45081() {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = obj45018_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45018").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_6_runningActionsCount = window.obj45018_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_45082();
function runjs_45082() {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = obj45018_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45018").css("border-color", "rgba(0,0,0,0)"); $("#obj45018").css("border-width", "0px"); $("#obj45018").css("border-style", "solid"); $("#obj45018").css("border-radius", "10px"); $("#obj45018").css("-webkit-border-radius", "10px"); $("#obj45018").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_6_runningActionsCount = window.obj45018_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_6_actionGroup9();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	












//	action: playAudio
//	target: obj45156 
playAudio_45083();
function playAudio_45083() {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = obj45018_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj45156")[0];
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
		    window.obj45018_droppedInsideTargetActions_6_runningActionsCount = window.obj45018_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_6_actionGroup10();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45018_droppedInsideTargetActions_6_runningActionsCount = window.obj45018_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_6_actionGroup10();
}
	}
}









};
obj45018_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	















//	action: Switch Text
switchText_45084();
function switchText_45084() {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = obj45018_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45018_droppedInsideTargetActions_6_runningActionsCount = window.obj45018_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_6_actionGroup11();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45018_droppedInsideTargetActions_6_runningActionsCount = window.obj45018_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_6_actionGroup11();
}
		}, 1);
	}
}






};
obj45018_droppedInsideTargetActions_6_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex = 11;
	





















};
obj45018_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45058();
function runjs_45058() {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = obj45018_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45184").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_5_runningActionsCount = window.obj45018_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45059();
function runjs_45059() {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = obj45018_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45184").css("border-color", "#C00000"); $("#obj45184").css("border-width", "2px"); $("#obj45184").css("border-style", "solid"); $("#obj45184").css("border-radius", "10px"); $("#obj45184").css("-webkit-border-radius", "10px"); $("#obj45184").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_5_runningActionsCount = window.obj45018_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_45061();
function runjs_45061() {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = obj45018_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45018").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_5_runningActionsCount = window.obj45018_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_5_actionGroup3();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_45062();
function switchText_45062() {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = obj45018_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45018_droppedInsideTargetActions_5_runningActionsCount = window.obj45018_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_5_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45018_droppedInsideTargetActions_5_runningActionsCount = window.obj45018_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	}
}






};
obj45018_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj45018 
move_45063();
function move_45063() {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = obj45018_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj45018");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 320;
	var moveY = 535;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45018_droppedInsideTargetActions_5_runningActionsCount = window.obj45018_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	});
}



















};
obj45018_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_45064();
function runjs_45064() {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = obj45018_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45184").css("background-color", "#EAEFF7");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_5_runningActionsCount = window.obj45018_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45065();
function runjs_45065() {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = obj45018_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45184").css("border-color", "#000000"); $("#obj45184").css("border-width", "1px"); $("#obj45184").css("border-style", "solid"); $("#obj45184").css("border-radius", "0px"); $("#obj45184").css("-webkit-border-radius", "0px"); $("#obj45184").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_5_runningActionsCount = window.obj45018_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45067();
function runjs_45067() {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = obj45018_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45018").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_5_runningActionsCount = window.obj45018_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_45068();
function runjs_45068() {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = obj45018_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45018").css("border-color", "rgba(0,0,0,0)"); $("#obj45018").css("border-width", "0px"); $("#obj45018").css("border-style", "solid"); $("#obj45018").css("border-radius", "10px"); $("#obj45018").css("-webkit-border-radius", "10px"); $("#obj45018").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_5_runningActionsCount = window.obj45018_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_5_actionGroup9();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	












//	action: playAudio
//	target: obj45156 
playAudio_45069();
function playAudio_45069() {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = obj45018_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj45156")[0];
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
		    window.obj45018_droppedInsideTargetActions_5_runningActionsCount = window.obj45018_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_5_actionGroup10();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45018_droppedInsideTargetActions_5_runningActionsCount = window.obj45018_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_5_actionGroup10();
}
	}
}









};
obj45018_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Switch Text
switchText_45070();
function switchText_45070() {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = obj45018_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45018_droppedInsideTargetActions_5_runningActionsCount = window.obj45018_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_5_actionGroup11();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45018_droppedInsideTargetActions_5_runningActionsCount = window.obj45018_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_5_actionGroup11();
}
		}, 1);
	}
}






};
obj45018_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	





















};
obj45018_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45044();
function runjs_45044() {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = obj45018_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45188").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_4_runningActionsCount = window.obj45018_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45045();
function runjs_45045() {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = obj45018_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45188").css("border-color", "#C00000"); $("#obj45188").css("border-width", "2px"); $("#obj45188").css("border-style", "solid"); $("#obj45188").css("border-radius", "10px"); $("#obj45188").css("-webkit-border-radius", "10px"); $("#obj45188").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_4_runningActionsCount = window.obj45018_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_45047();
function runjs_45047() {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = obj45018_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45018").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_4_runningActionsCount = window.obj45018_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_45048();
function switchText_45048() {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = obj45018_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45018_droppedInsideTargetActions_4_runningActionsCount = window.obj45018_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_4_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45018_droppedInsideTargetActions_4_runningActionsCount = window.obj45018_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	}
}






};
obj45018_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj45018 
move_45049();
function move_45049() {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = obj45018_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj45018");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 320;
	var moveY = 535;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45018_droppedInsideTargetActions_4_runningActionsCount = window.obj45018_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	});
}



















};
obj45018_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_45050();
function runjs_45050() {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = obj45018_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45188").css("background-color", "#D2DEEF");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_4_runningActionsCount = window.obj45018_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45051();
function runjs_45051() {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = obj45018_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45188").css("border-color", "#000000"); $("#obj45188").css("border-width", "1px"); $("#obj45188").css("border-style", "solid"); $("#obj45188").css("border-radius", "0px"); $("#obj45188").css("-webkit-border-radius", "0px"); $("#obj45188").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_4_runningActionsCount = window.obj45018_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45053();
function runjs_45053() {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = obj45018_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45018").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_4_runningActionsCount = window.obj45018_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_45054();
function runjs_45054() {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = obj45018_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45018").css("border-color", "rgba(0,0,0,0)"); $("#obj45018").css("border-width", "0px"); $("#obj45018").css("border-style", "solid"); $("#obj45018").css("border-radius", "10px"); $("#obj45018").css("-webkit-border-radius", "10px"); $("#obj45018").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_4_runningActionsCount = window.obj45018_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_4_actionGroup9();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	












//	action: playAudio
//	target: obj45156 
playAudio_45055();
function playAudio_45055() {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = obj45018_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj45156")[0];
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
		    window.obj45018_droppedInsideTargetActions_4_runningActionsCount = window.obj45018_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_4_actionGroup10();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45018_droppedInsideTargetActions_4_runningActionsCount = window.obj45018_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_4_actionGroup10();
}
	}
}









};
obj45018_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Switch Text
switchText_45056();
function switchText_45056() {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = obj45018_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45018_droppedInsideTargetActions_4_runningActionsCount = window.obj45018_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_4_actionGroup11();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45018_droppedInsideTargetActions_4_runningActionsCount = window.obj45018_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_4_actionGroup11();
}
		}, 1);
	}
}






};
obj45018_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	





















};
obj45018_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45037();
function runjs_45037() {
	window.obj45018_droppedInsideTargetActions_3_runningActionsCount = obj45018_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45182").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_3_runningActionsCount = window.obj45018_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_45041();
function switchText_45041() {
	window.obj45018_droppedInsideTargetActions_3_runningActionsCount = obj45018_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45018_droppedInsideTargetActions_3_runningActionsCount = window.obj45018_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45018_droppedInsideTargetActions_3_runningActionsCount = window.obj45018_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj45018_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_45038();
function runjs_45038() {
	window.obj45018_droppedInsideTargetActions_3_runningActionsCount = obj45018_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45182").css("border-color", "#058E3F"); $("#obj45182").css("border-width", "2px"); $("#obj45182").css("border-style", "solid"); $("#obj45182").css("border-radius", "10px"); $("#obj45182").css("-webkit-border-radius", "10px"); $("#obj45182").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_3_runningActionsCount = window.obj45018_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45040();
function runjs_45040() {
	window.obj45018_droppedInsideTargetActions_3_runningActionsCount = obj45018_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45018").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_3_runningActionsCount = window.obj45018_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj45158 
playAudio_45042();
function playAudio_45042() {
	window.obj45018_droppedInsideTargetActions_3_runningActionsCount = obj45018_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj45158")[0];
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
		    window.obj45018_droppedInsideTargetActions_3_runningActionsCount = window.obj45018_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_3_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45018_droppedInsideTargetActions_3_runningActionsCount = window.obj45018_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_3_actionGroup5();
}
	}
}









};
obj45018_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90564();
function switchText_90564() {
	window.obj45018_droppedInsideTargetActions_3_runningActionsCount = obj45018_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45018_droppedInsideTargetActions_3_runningActionsCount = window.obj45018_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_3_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45018_droppedInsideTargetActions_3_runningActionsCount = window.obj45018_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	}
}






};
obj45018_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	





















};
obj45018_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45030();
function runjs_45030() {
	window.obj45018_droppedInsideTargetActions_2_runningActionsCount = obj45018_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45186").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_2_runningActionsCount = window.obj45018_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_45034();
function switchText_45034() {
	window.obj45018_droppedInsideTargetActions_2_runningActionsCount = obj45018_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45018_droppedInsideTargetActions_2_runningActionsCount = window.obj45018_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45018_droppedInsideTargetActions_2_runningActionsCount = window.obj45018_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj45018_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_45031();
function runjs_45031() {
	window.obj45018_droppedInsideTargetActions_2_runningActionsCount = obj45018_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45186").css("border-color", "#058E3F"); $("#obj45186").css("border-width", "2px"); $("#obj45186").css("border-style", "solid"); $("#obj45186").css("border-radius", "10px"); $("#obj45186").css("-webkit-border-radius", "10px"); $("#obj45186").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_2_runningActionsCount = window.obj45018_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45033();
function runjs_45033() {
	window.obj45018_droppedInsideTargetActions_2_runningActionsCount = obj45018_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45018").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_2_runningActionsCount = window.obj45018_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj45158 
playAudio_45035();
function playAudio_45035() {
	window.obj45018_droppedInsideTargetActions_2_runningActionsCount = obj45018_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj45158")[0];
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
		    window.obj45018_droppedInsideTargetActions_2_runningActionsCount = window.obj45018_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_2_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45018_droppedInsideTargetActions_2_runningActionsCount = window.obj45018_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_2_actionGroup5();
}
	}
}









};
obj45018_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90563();
function switchText_90563() {
	window.obj45018_droppedInsideTargetActions_2_runningActionsCount = obj45018_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45018_droppedInsideTargetActions_2_runningActionsCount = window.obj45018_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_2_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45018_droppedInsideTargetActions_2_runningActionsCount = window.obj45018_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	}
}






};
obj45018_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	





















};
obj45018_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45023();
function runjs_45023() {
	window.obj45018_droppedInsideTargetActions_runningActionsCount = obj45018_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45190").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_runningActionsCount = window.obj45018_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_45027();
function switchText_45027() {
	window.obj45018_droppedInsideTargetActions_runningActionsCount = obj45018_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45018_droppedInsideTargetActions_runningActionsCount = window.obj45018_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45018_droppedInsideTargetActions_runningActionsCount = window.obj45018_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj45018_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_45024();
function runjs_45024() {
	window.obj45018_droppedInsideTargetActions_runningActionsCount = obj45018_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45190").css("border-color", "#058E3F"); $("#obj45190").css("border-width", "2px"); $("#obj45190").css("border-style", "solid"); $("#obj45190").css("border-radius", "10px"); $("#obj45190").css("-webkit-border-radius", "10px"); $("#obj45190").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_runningActionsCount = window.obj45018_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45026();
function runjs_45026() {
	window.obj45018_droppedInsideTargetActions_runningActionsCount = obj45018_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45018").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45018_droppedInsideTargetActions_runningActionsCount = window.obj45018_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj45018_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj45158 
playAudio_45028();
function playAudio_45028() {
	window.obj45018_droppedInsideTargetActions_runningActionsCount = obj45018_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj45158")[0];
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
		    window.obj45018_droppedInsideTargetActions_runningActionsCount = window.obj45018_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45018_droppedInsideTargetActions_runningActionsCount = window.obj45018_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj45018_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90562();
function switchText_90562() {
	window.obj45018_droppedInsideTargetActions_runningActionsCount = obj45018_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj45018_droppedInsideTargetActions_runningActionsCount = window.obj45018_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45018_droppedInsideTargetActions_runningActionsCount = window.obj45018_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45018_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45018_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45018_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45018_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj45018_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45018_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45018").trigger("obj45018_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45018) {
				console.warn("de-queueing event obj45018." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45018").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45018_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj44951_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_onTouchDown_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj44951");
//	action: dragDrop
//	target: obj44951 
dragDrop_44954();
function dragDrop_44954() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj44951_onTouchDown_runningActionsCount = obj44951_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj44951');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj45198');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj44951_onTouchDown_runningActionsCount = window.obj44951_onTouchDown_runningActionsCount - 1;
if (window.obj44951_onTouchDown_runningActionsCount < 0) {
	window.obj44951_onTouchDown_runningActionsCount = 0;
} else if (window.obj44951_onTouchDown_runningActionsCount == 0) {
	obj44951_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj45188","#obj45184","#obj45180","#obj45190","#obj45186","#obj45182");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_44954 = false;
    	var dropped_id_44954;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_44954 = true;
					dropped_id_44954 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_44954) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj44951").trigger('SCActionDragDrop44954_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj44951_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44951_onTouchDown_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj44951 
move_92667();
function move_92667() {
	window.obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_runningActionsCount = obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj44951");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 655;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_runningActionsCount = window.obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj44951_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45005();
function runjs_45005() {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = obj44951_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45182").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_6_runningActionsCount = window.obj44951_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45006();
function runjs_45006() {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = obj44951_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45182").css("border-color", "#C00000"); $("#obj45182").css("border-width", "2px"); $("#obj45182").css("border-style", "solid"); $("#obj45182").css("border-radius", "10px"); $("#obj45182").css("-webkit-border-radius", "10px"); $("#obj45182").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_6_runningActionsCount = window.obj44951_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_45008();
function runjs_45008() {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = obj44951_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj44951").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_6_runningActionsCount = window.obj44951_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_6_actionGroup3();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_45009();
function switchText_45009() {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = obj44951_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44951_droppedInsideTargetActions_6_runningActionsCount = window.obj44951_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_6_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44951_droppedInsideTargetActions_6_runningActionsCount = window.obj44951_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	}
}






};
obj44951_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj44951 
move_45010();
function move_45010() {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = obj44951_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj44951");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 655;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44951_droppedInsideTargetActions_6_runningActionsCount = window.obj44951_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	});
}



















};
obj44951_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_45011();
function runjs_45011() {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = obj44951_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45182").css("background-color", "#D2DEEF");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_6_runningActionsCount = window.obj44951_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45012();
function runjs_45012() {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = obj44951_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45182").css("border-color", "#000000"); $("#obj45182").css("border-width", "1px"); $("#obj45182").css("border-style", "solid"); $("#obj45182").css("border-radius", "0px"); $("#obj45182").css("-webkit-border-radius", "0px"); $("#obj45182").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_6_runningActionsCount = window.obj44951_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45014();
function runjs_45014() {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = obj44951_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj44951").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_6_runningActionsCount = window.obj44951_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_45015();
function runjs_45015() {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = obj44951_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj44951").css("border-color", "rgba(0,0,0,0)"); $("#obj44951").css("border-width", "0px"); $("#obj44951").css("border-style", "solid"); $("#obj44951").css("border-radius", "10px"); $("#obj44951").css("-webkit-border-radius", "10px"); $("#obj44951").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_6_runningActionsCount = window.obj44951_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_6_actionGroup9();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	












//	action: playAudio
//	target: obj45156 
playAudio_45016();
function playAudio_45016() {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = obj44951_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj45156")[0];
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
		    window.obj44951_droppedInsideTargetActions_6_runningActionsCount = window.obj44951_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_6_actionGroup10();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44951_droppedInsideTargetActions_6_runningActionsCount = window.obj44951_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_6_actionGroup10();
}
	}
}









};
obj44951_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	















//	action: Switch Text
switchText_45017();
function switchText_45017() {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = obj44951_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44951_droppedInsideTargetActions_6_runningActionsCount = window.obj44951_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_6_actionGroup11();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44951_droppedInsideTargetActions_6_runningActionsCount = window.obj44951_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_6_actionGroup11();
}
		}, 1);
	}
}






};
obj44951_droppedInsideTargetActions_6_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex = 11;
	





















};
obj44951_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44991();
function runjs_44991() {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = obj44951_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45186").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_5_runningActionsCount = window.obj44951_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_44992();
function runjs_44992() {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = obj44951_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45186").css("border-color", "#C00000"); $("#obj45186").css("border-width", "2px"); $("#obj45186").css("border-style", "solid"); $("#obj45186").css("border-radius", "10px"); $("#obj45186").css("-webkit-border-radius", "10px"); $("#obj45186").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_5_runningActionsCount = window.obj44951_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44994();
function runjs_44994() {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = obj44951_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44951").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_5_runningActionsCount = window.obj44951_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_5_actionGroup3();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_44995();
function switchText_44995() {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = obj44951_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44951_droppedInsideTargetActions_5_runningActionsCount = window.obj44951_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_5_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44951_droppedInsideTargetActions_5_runningActionsCount = window.obj44951_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	}
}






};
obj44951_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj44951 
move_44996();
function move_44996() {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = obj44951_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj44951");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 655;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44951_droppedInsideTargetActions_5_runningActionsCount = window.obj44951_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	});
}



















};
obj44951_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_44997();
function runjs_44997() {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = obj44951_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45186").css("background-color", "#EAEFF7");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_5_runningActionsCount = window.obj44951_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_44998();
function runjs_44998() {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = obj44951_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45186").css("border-color", "#000000"); $("#obj45186").css("border-width", "1px"); $("#obj45186").css("border-style", "solid"); $("#obj45186").css("border-radius", "0px"); $("#obj45186").css("-webkit-border-radius", "0px"); $("#obj45186").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_5_runningActionsCount = window.obj44951_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45000();
function runjs_45000() {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = obj44951_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44951").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_5_runningActionsCount = window.obj44951_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_45001();
function runjs_45001() {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = obj44951_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44951").css("border-color", "rgba(0,0,0,0)"); $("#obj44951").css("border-width", "0px"); $("#obj44951").css("border-style", "solid"); $("#obj44951").css("border-radius", "10px"); $("#obj44951").css("-webkit-border-radius", "10px"); $("#obj44951").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_5_runningActionsCount = window.obj44951_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_5_actionGroup9();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	












//	action: playAudio
//	target: obj45156 
playAudio_45002();
function playAudio_45002() {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = obj44951_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj45156")[0];
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
		    window.obj44951_droppedInsideTargetActions_5_runningActionsCount = window.obj44951_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_5_actionGroup10();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44951_droppedInsideTargetActions_5_runningActionsCount = window.obj44951_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_5_actionGroup10();
}
	}
}









};
obj44951_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Switch Text
switchText_45003();
function switchText_45003() {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = obj44951_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44951_droppedInsideTargetActions_5_runningActionsCount = window.obj44951_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_5_actionGroup11();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44951_droppedInsideTargetActions_5_runningActionsCount = window.obj44951_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_5_actionGroup11();
}
		}, 1);
	}
}






};
obj44951_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	





















};
obj44951_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44977();
function runjs_44977() {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = obj44951_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45190").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_4_runningActionsCount = window.obj44951_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_44978();
function runjs_44978() {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = obj44951_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45190").css("border-color", "#C00000"); $("#obj45190").css("border-width", "2px"); $("#obj45190").css("border-style", "solid"); $("#obj45190").css("border-radius", "10px"); $("#obj45190").css("-webkit-border-radius", "10px"); $("#obj45190").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_4_runningActionsCount = window.obj44951_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44980();
function runjs_44980() {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = obj44951_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44951").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_4_runningActionsCount = window.obj44951_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_44981();
function switchText_44981() {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = obj44951_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44951_droppedInsideTargetActions_4_runningActionsCount = window.obj44951_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_4_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44951_droppedInsideTargetActions_4_runningActionsCount = window.obj44951_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	}
}






};
obj44951_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj44951 
move_44982();
function move_44982() {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = obj44951_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj44951");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 655;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44951_droppedInsideTargetActions_4_runningActionsCount = window.obj44951_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	});
}



















};
obj44951_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_44983();
function runjs_44983() {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = obj44951_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45190").css("background-color", "#D2DEEF");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_4_runningActionsCount = window.obj44951_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_44984();
function runjs_44984() {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = obj44951_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45190").css("border-color", "#000000"); $("#obj45190").css("border-width", "1px"); $("#obj45190").css("border-style", "solid"); $("#obj45190").css("border-radius", "0px"); $("#obj45190").css("-webkit-border-radius", "0px"); $("#obj45190").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_4_runningActionsCount = window.obj44951_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_44986();
function runjs_44986() {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = obj44951_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44951").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_4_runningActionsCount = window.obj44951_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_44987();
function runjs_44987() {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = obj44951_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44951").css("border-color", "rgba(0,0,0,0)"); $("#obj44951").css("border-width", "0px"); $("#obj44951").css("border-style", "solid"); $("#obj44951").css("border-radius", "10px"); $("#obj44951").css("-webkit-border-radius", "10px"); $("#obj44951").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_4_runningActionsCount = window.obj44951_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_4_actionGroup9();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	












//	action: playAudio
//	target: obj45156 
playAudio_44988();
function playAudio_44988() {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = obj44951_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj45156")[0];
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
		    window.obj44951_droppedInsideTargetActions_4_runningActionsCount = window.obj44951_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_4_actionGroup10();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44951_droppedInsideTargetActions_4_runningActionsCount = window.obj44951_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_4_actionGroup10();
}
	}
}









};
obj44951_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Switch Text
switchText_44989();
function switchText_44989() {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = obj44951_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44951_droppedInsideTargetActions_4_runningActionsCount = window.obj44951_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_4_actionGroup11();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44951_droppedInsideTargetActions_4_runningActionsCount = window.obj44951_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_4_actionGroup11();
}
		}, 1);
	}
}






};
obj44951_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	





















};
obj44951_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44970();
function runjs_44970() {
	window.obj44951_droppedInsideTargetActions_3_runningActionsCount = obj44951_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45180").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_3_runningActionsCount = window.obj44951_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_44974();
function switchText_44974() {
	window.obj44951_droppedInsideTargetActions_3_runningActionsCount = obj44951_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44951_droppedInsideTargetActions_3_runningActionsCount = window.obj44951_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44951_droppedInsideTargetActions_3_runningActionsCount = window.obj44951_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj44951_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44971();
function runjs_44971() {
	window.obj44951_droppedInsideTargetActions_3_runningActionsCount = obj44951_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45180").css("border-color", "#058E3F"); $("#obj45180").css("border-width", "2px"); $("#obj45180").css("border-style", "solid"); $("#obj45180").css("border-radius", "10px"); $("#obj45180").css("-webkit-border-radius", "10px"); $("#obj45180").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_3_runningActionsCount = window.obj44951_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_44973();
function runjs_44973() {
	window.obj44951_droppedInsideTargetActions_3_runningActionsCount = obj44951_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44951").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_3_runningActionsCount = window.obj44951_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj45158 
playAudio_44975();
function playAudio_44975() {
	window.obj44951_droppedInsideTargetActions_3_runningActionsCount = obj44951_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj45158")[0];
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
		    window.obj44951_droppedInsideTargetActions_3_runningActionsCount = window.obj44951_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_3_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44951_droppedInsideTargetActions_3_runningActionsCount = window.obj44951_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_3_actionGroup5();
}
	}
}









};
obj44951_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90561();
function switchText_90561() {
	window.obj44951_droppedInsideTargetActions_3_runningActionsCount = obj44951_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44951_droppedInsideTargetActions_3_runningActionsCount = window.obj44951_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_3_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44951_droppedInsideTargetActions_3_runningActionsCount = window.obj44951_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	}
}






};
obj44951_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	





















};
obj44951_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44963();
function runjs_44963() {
	window.obj44951_droppedInsideTargetActions_2_runningActionsCount = obj44951_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45184").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_2_runningActionsCount = window.obj44951_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_44967();
function switchText_44967() {
	window.obj44951_droppedInsideTargetActions_2_runningActionsCount = obj44951_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44951_droppedInsideTargetActions_2_runningActionsCount = window.obj44951_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44951_droppedInsideTargetActions_2_runningActionsCount = window.obj44951_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj44951_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44964();
function runjs_44964() {
	window.obj44951_droppedInsideTargetActions_2_runningActionsCount = obj44951_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45184").css("border-color", "#058E3F"); $("#obj45184").css("border-width", "2px"); $("#obj45184").css("border-style", "solid"); $("#obj45184").css("border-radius", "10px"); $("#obj45184").css("-webkit-border-radius", "10px"); $("#obj45184").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_2_runningActionsCount = window.obj44951_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_44966();
function runjs_44966() {
	window.obj44951_droppedInsideTargetActions_2_runningActionsCount = obj44951_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44951").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_2_runningActionsCount = window.obj44951_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj45158 
playAudio_44968();
function playAudio_44968() {
	window.obj44951_droppedInsideTargetActions_2_runningActionsCount = obj44951_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj45158")[0];
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
		    window.obj44951_droppedInsideTargetActions_2_runningActionsCount = window.obj44951_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_2_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44951_droppedInsideTargetActions_2_runningActionsCount = window.obj44951_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_2_actionGroup5();
}
	}
}









};
obj44951_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90560();
function switchText_90560() {
	window.obj44951_droppedInsideTargetActions_2_runningActionsCount = obj44951_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44951_droppedInsideTargetActions_2_runningActionsCount = window.obj44951_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_2_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44951_droppedInsideTargetActions_2_runningActionsCount = window.obj44951_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	}
}






};
obj44951_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	





















};
obj44951_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44956();
function runjs_44956() {
	window.obj44951_droppedInsideTargetActions_runningActionsCount = obj44951_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45188").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_runningActionsCount = window.obj44951_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_44960();
function switchText_44960() {
	window.obj44951_droppedInsideTargetActions_runningActionsCount = obj44951_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44951_droppedInsideTargetActions_runningActionsCount = window.obj44951_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44951_droppedInsideTargetActions_runningActionsCount = window.obj44951_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj44951_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44957();
function runjs_44957() {
	window.obj44951_droppedInsideTargetActions_runningActionsCount = obj44951_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45188").css("border-color", "#058E3F"); $("#obj45188").css("border-width", "2px"); $("#obj45188").css("border-style", "solid"); $("#obj45188").css("border-radius", "10px"); $("#obj45188").css("-webkit-border-radius", "10px"); $("#obj45188").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_runningActionsCount = window.obj44951_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_44959();
function runjs_44959() {
	window.obj44951_droppedInsideTargetActions_runningActionsCount = obj44951_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj44951").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44951_droppedInsideTargetActions_runningActionsCount = window.obj44951_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj44951_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj45158 
playAudio_44961();
function playAudio_44961() {
	window.obj44951_droppedInsideTargetActions_runningActionsCount = obj44951_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj45158")[0];
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
		    window.obj44951_droppedInsideTargetActions_runningActionsCount = window.obj44951_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44951_droppedInsideTargetActions_runningActionsCount = window.obj44951_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj44951_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90559();
function switchText_90559() {
	window.obj44951_droppedInsideTargetActions_runningActionsCount = obj44951_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44951_droppedInsideTargetActions_runningActionsCount = window.obj44951_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44951_droppedInsideTargetActions_runningActionsCount = window.obj44951_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44951_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44951_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44951_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44951_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj44951_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44951_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44951").trigger("obj44951_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44951) {
				console.warn("de-queueing event obj44951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44951_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj44884_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_onTouchDown_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj44884");
//	action: dragDrop
//	target: obj44884 
dragDrop_44887();
function dragDrop_44887() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj44884_onTouchDown_runningActionsCount = obj44884_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj44884');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj45198');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj44884_onTouchDown_runningActionsCount = window.obj44884_onTouchDown_runningActionsCount - 1;
if (window.obj44884_onTouchDown_runningActionsCount < 0) {
	window.obj44884_onTouchDown_runningActionsCount = 0;
} else if (window.obj44884_onTouchDown_runningActionsCount == 0) {
	obj44884_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj45190","#obj45186","#obj45182","#obj45188","#obj45184","#obj45180");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_44887 = false;
    	var dropped_id_44887;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_44887 = true;
					dropped_id_44887 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_44887) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj44884").trigger('SCActionDragDrop44887_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj44884_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44884_onTouchDown_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj44884 
move_92663();
function move_92663() {
	window.obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_runningActionsCount = obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj44884");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 595;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_runningActionsCount = window.obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj44884_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44938();
function runjs_44938() {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = obj44884_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45180").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_6_runningActionsCount = window.obj44884_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_44939();
function runjs_44939() {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = obj44884_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45180").css("border-color", "#C00000"); $("#obj45180").css("border-width", "2px"); $("#obj45180").css("border-style", "solid"); $("#obj45180").css("border-radius", "10px"); $("#obj45180").css("-webkit-border-radius", "10px"); $("#obj45180").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_6_runningActionsCount = window.obj44884_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44941();
function runjs_44941() {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = obj44884_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj44884").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_6_runningActionsCount = window.obj44884_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_6_actionGroup3();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_44942();
function switchText_44942() {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = obj44884_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44884_droppedInsideTargetActions_6_runningActionsCount = window.obj44884_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_6_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44884_droppedInsideTargetActions_6_runningActionsCount = window.obj44884_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	}
}






};
obj44884_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj44884 
move_44943();
function move_44943() {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = obj44884_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj44884");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 595;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44884_droppedInsideTargetActions_6_runningActionsCount = window.obj44884_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	});
}



















};
obj44884_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_44944();
function runjs_44944() {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = obj44884_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45180").css("background-color", "#D2DEEF");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_6_runningActionsCount = window.obj44884_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_44945();
function runjs_44945() {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = obj44884_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45180").css("border-color", "#000000"); $("#obj45180").css("border-width", "1px"); $("#obj45180").css("border-style", "solid"); $("#obj45180").css("border-radius", "0px"); $("#obj45180").css("-webkit-border-radius", "0px"); $("#obj45180").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_6_runningActionsCount = window.obj44884_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_44947();
function runjs_44947() {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = obj44884_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj44884").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_6_runningActionsCount = window.obj44884_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_44948();
function runjs_44948() {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = obj44884_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj44884").css("border-color", "rgba(0,0,0,0)"); $("#obj44884").css("border-width", "0px"); $("#obj44884").css("border-style", "solid"); $("#obj44884").css("border-radius", "10px"); $("#obj44884").css("-webkit-border-radius", "10px"); $("#obj44884").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_6_runningActionsCount = window.obj44884_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_6_actionGroup9();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	












//	action: playAudio
//	target: obj45156 
playAudio_44949();
function playAudio_44949() {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = obj44884_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj45156")[0];
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
		    window.obj44884_droppedInsideTargetActions_6_runningActionsCount = window.obj44884_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_6_actionGroup10();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44884_droppedInsideTargetActions_6_runningActionsCount = window.obj44884_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_6_actionGroup10();
}
	}
}









};
obj44884_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	















//	action: Switch Text
switchText_44950();
function switchText_44950() {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = obj44884_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44884_droppedInsideTargetActions_6_runningActionsCount = window.obj44884_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_6_actionGroup11();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44884_droppedInsideTargetActions_6_runningActionsCount = window.obj44884_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_6_actionGroup11();
}
		}, 1);
	}
}






};
obj44884_droppedInsideTargetActions_6_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex = 11;
	





















};
obj44884_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44924();
function runjs_44924() {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = obj44884_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45184").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_5_runningActionsCount = window.obj44884_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_44925();
function runjs_44925() {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = obj44884_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45184").css("border-color", "#C00000"); $("#obj45184").css("border-width", "2px"); $("#obj45184").css("border-style", "solid"); $("#obj45184").css("border-radius", "10px"); $("#obj45184").css("-webkit-border-radius", "10px"); $("#obj45184").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_5_runningActionsCount = window.obj44884_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44927();
function runjs_44927() {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = obj44884_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44884").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_5_runningActionsCount = window.obj44884_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_5_actionGroup3();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_44928();
function switchText_44928() {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = obj44884_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44884_droppedInsideTargetActions_5_runningActionsCount = window.obj44884_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_5_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44884_droppedInsideTargetActions_5_runningActionsCount = window.obj44884_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	}
}






};
obj44884_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj44884 
move_44929();
function move_44929() {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = obj44884_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj44884");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 595;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44884_droppedInsideTargetActions_5_runningActionsCount = window.obj44884_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	});
}



















};
obj44884_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_44930();
function runjs_44930() {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = obj44884_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45184").css("background-color", "#EAEFF7");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_5_runningActionsCount = window.obj44884_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_44931();
function runjs_44931() {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = obj44884_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45184").css("border-color", "#000000"); $("#obj45184").css("border-width", "1px"); $("#obj45184").css("border-style", "solid"); $("#obj45184").css("border-radius", "0px"); $("#obj45184").css("-webkit-border-radius", "0px"); $("#obj45184").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_5_runningActionsCount = window.obj44884_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_44933();
function runjs_44933() {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = obj44884_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44884").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_5_runningActionsCount = window.obj44884_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_44934();
function runjs_44934() {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = obj44884_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44884").css("border-color", "rgba(0,0,0,0)"); $("#obj44884").css("border-width", "0px"); $("#obj44884").css("border-style", "solid"); $("#obj44884").css("border-radius", "10px"); $("#obj44884").css("-webkit-border-radius", "10px"); $("#obj44884").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_5_runningActionsCount = window.obj44884_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_5_actionGroup9();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	












//	action: playAudio
//	target: obj45156 
playAudio_44935();
function playAudio_44935() {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = obj44884_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj45156")[0];
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
		    window.obj44884_droppedInsideTargetActions_5_runningActionsCount = window.obj44884_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_5_actionGroup10();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44884_droppedInsideTargetActions_5_runningActionsCount = window.obj44884_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_5_actionGroup10();
}
	}
}









};
obj44884_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Switch Text
switchText_44936();
function switchText_44936() {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = obj44884_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44884_droppedInsideTargetActions_5_runningActionsCount = window.obj44884_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_5_actionGroup11();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44884_droppedInsideTargetActions_5_runningActionsCount = window.obj44884_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_5_actionGroup11();
}
		}, 1);
	}
}






};
obj44884_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	





















};
obj44884_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44910();
function runjs_44910() {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = obj44884_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45188").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_4_runningActionsCount = window.obj44884_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_44911();
function runjs_44911() {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = obj44884_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45188").css("border-color", "#C00000"); $("#obj45188").css("border-width", "2px"); $("#obj45188").css("border-style", "solid"); $("#obj45188").css("border-radius", "10px"); $("#obj45188").css("-webkit-border-radius", "10px"); $("#obj45188").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_4_runningActionsCount = window.obj44884_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44913();
function runjs_44913() {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = obj44884_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44884").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_4_runningActionsCount = window.obj44884_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_44914();
function switchText_44914() {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = obj44884_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44884_droppedInsideTargetActions_4_runningActionsCount = window.obj44884_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_4_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44884_droppedInsideTargetActions_4_runningActionsCount = window.obj44884_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	}
}






};
obj44884_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj44884 
move_44915();
function move_44915() {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = obj44884_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj44884");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 595;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44884_droppedInsideTargetActions_4_runningActionsCount = window.obj44884_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	});
}



















};
obj44884_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_44916();
function runjs_44916() {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = obj44884_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45188").css("background-color", "#D2DEEF");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_4_runningActionsCount = window.obj44884_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_44917();
function runjs_44917() {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = obj44884_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45188").css("border-color", "#000000"); $("#obj45188").css("border-width", "1px"); $("#obj45188").css("border-style", "solid"); $("#obj45188").css("border-radius", "0px"); $("#obj45188").css("-webkit-border-radius", "0px"); $("#obj45188").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_4_runningActionsCount = window.obj44884_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_44919();
function runjs_44919() {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = obj44884_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44884").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_4_runningActionsCount = window.obj44884_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_44920();
function runjs_44920() {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = obj44884_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44884").css("border-color", "rgba(0,0,0,0)"); $("#obj44884").css("border-width", "0px"); $("#obj44884").css("border-style", "solid"); $("#obj44884").css("border-radius", "10px"); $("#obj44884").css("-webkit-border-radius", "10px"); $("#obj44884").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_4_runningActionsCount = window.obj44884_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_4_actionGroup9();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	












//	action: playAudio
//	target: obj45156 
playAudio_44921();
function playAudio_44921() {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = obj44884_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj45156")[0];
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
		    window.obj44884_droppedInsideTargetActions_4_runningActionsCount = window.obj44884_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_4_actionGroup10();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44884_droppedInsideTargetActions_4_runningActionsCount = window.obj44884_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_4_actionGroup10();
}
	}
}









};
obj44884_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Switch Text
switchText_44922();
function switchText_44922() {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = obj44884_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44884_droppedInsideTargetActions_4_runningActionsCount = window.obj44884_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_4_actionGroup11();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44884_droppedInsideTargetActions_4_runningActionsCount = window.obj44884_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_4_actionGroup11();
}
		}, 1);
	}
}






};
obj44884_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	





















};
obj44884_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44903();
function runjs_44903() {
	window.obj44884_droppedInsideTargetActions_3_runningActionsCount = obj44884_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45182").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_3_runningActionsCount = window.obj44884_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_44907();
function switchText_44907() {
	window.obj44884_droppedInsideTargetActions_3_runningActionsCount = obj44884_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44884_droppedInsideTargetActions_3_runningActionsCount = window.obj44884_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44884_droppedInsideTargetActions_3_runningActionsCount = window.obj44884_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj44884_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44904();
function runjs_44904() {
	window.obj44884_droppedInsideTargetActions_3_runningActionsCount = obj44884_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45182").css("border-color", "#058E3F"); $("#obj45182").css("border-width", "2px"); $("#obj45182").css("border-style", "solid"); $("#obj45182").css("border-radius", "10px"); $("#obj45182").css("-webkit-border-radius", "10px"); $("#obj45182").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_3_runningActionsCount = window.obj44884_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_44906();
function runjs_44906() {
	window.obj44884_droppedInsideTargetActions_3_runningActionsCount = obj44884_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44884").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_3_runningActionsCount = window.obj44884_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj45158 
playAudio_44908();
function playAudio_44908() {
	window.obj44884_droppedInsideTargetActions_3_runningActionsCount = obj44884_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj45158")[0];
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
		    window.obj44884_droppedInsideTargetActions_3_runningActionsCount = window.obj44884_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_3_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44884_droppedInsideTargetActions_3_runningActionsCount = window.obj44884_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_3_actionGroup5();
}
	}
}









};
obj44884_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90558();
function switchText_90558() {
	window.obj44884_droppedInsideTargetActions_3_runningActionsCount = obj44884_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44884_droppedInsideTargetActions_3_runningActionsCount = window.obj44884_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_3_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44884_droppedInsideTargetActions_3_runningActionsCount = window.obj44884_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	}
}






};
obj44884_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	





















};
obj44884_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44896();
function runjs_44896() {
	window.obj44884_droppedInsideTargetActions_2_runningActionsCount = obj44884_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45186").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_2_runningActionsCount = window.obj44884_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_44900();
function switchText_44900() {
	window.obj44884_droppedInsideTargetActions_2_runningActionsCount = obj44884_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44884_droppedInsideTargetActions_2_runningActionsCount = window.obj44884_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44884_droppedInsideTargetActions_2_runningActionsCount = window.obj44884_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj44884_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44897();
function runjs_44897() {
	window.obj44884_droppedInsideTargetActions_2_runningActionsCount = obj44884_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45186").css("border-color", "#058E3F"); $("#obj45186").css("border-width", "2px"); $("#obj45186").css("border-style", "solid"); $("#obj45186").css("border-radius", "10px"); $("#obj45186").css("-webkit-border-radius", "10px"); $("#obj45186").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_2_runningActionsCount = window.obj44884_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_44899();
function runjs_44899() {
	window.obj44884_droppedInsideTargetActions_2_runningActionsCount = obj44884_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44884").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_2_runningActionsCount = window.obj44884_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj45158 
playAudio_44901();
function playAudio_44901() {
	window.obj44884_droppedInsideTargetActions_2_runningActionsCount = obj44884_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj45158")[0];
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
		    window.obj44884_droppedInsideTargetActions_2_runningActionsCount = window.obj44884_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_2_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44884_droppedInsideTargetActions_2_runningActionsCount = window.obj44884_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_2_actionGroup5();
}
	}
}









};
obj44884_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90557();
function switchText_90557() {
	window.obj44884_droppedInsideTargetActions_2_runningActionsCount = obj44884_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44884_droppedInsideTargetActions_2_runningActionsCount = window.obj44884_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_2_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44884_droppedInsideTargetActions_2_runningActionsCount = window.obj44884_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	}
}






};
obj44884_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	





















};
obj44884_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44889();
function runjs_44889() {
	window.obj44884_droppedInsideTargetActions_runningActionsCount = obj44884_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45190").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_runningActionsCount = window.obj44884_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_44893();
function switchText_44893() {
	window.obj44884_droppedInsideTargetActions_runningActionsCount = obj44884_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44884_droppedInsideTargetActions_runningActionsCount = window.obj44884_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44884_droppedInsideTargetActions_runningActionsCount = window.obj44884_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj44884_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44890();
function runjs_44890() {
	window.obj44884_droppedInsideTargetActions_runningActionsCount = obj44884_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45190").css("border-color", "#058E3F"); $("#obj45190").css("border-width", "2px"); $("#obj45190").css("border-style", "solid"); $("#obj45190").css("border-radius", "10px"); $("#obj45190").css("-webkit-border-radius", "10px"); $("#obj45190").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_runningActionsCount = window.obj44884_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_44892();
function runjs_44892() {
	window.obj44884_droppedInsideTargetActions_runningActionsCount = obj44884_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj44884").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44884_droppedInsideTargetActions_runningActionsCount = window.obj44884_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj44884_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj45158 
playAudio_44894();
function playAudio_44894() {
	window.obj44884_droppedInsideTargetActions_runningActionsCount = obj44884_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj45158")[0];
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
		    window.obj44884_droppedInsideTargetActions_runningActionsCount = window.obj44884_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44884_droppedInsideTargetActions_runningActionsCount = window.obj44884_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj44884_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90556();
function switchText_90556() {
	window.obj44884_droppedInsideTargetActions_runningActionsCount = obj44884_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44884_droppedInsideTargetActions_runningActionsCount = window.obj44884_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44884_droppedInsideTargetActions_runningActionsCount = window.obj44884_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44884_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44884_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44884_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44884_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj44884_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44884_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44884").trigger("obj44884_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44884) {
				console.warn("de-queueing event obj44884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44884_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj44817_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_onTouchDown_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj44817");
//	action: dragDrop
//	target: obj44817 
dragDrop_44820();
function dragDrop_44820() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj44817_onTouchDown_runningActionsCount = obj44817_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj44817');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj45198');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj44817_onTouchDown_runningActionsCount = window.obj44817_onTouchDown_runningActionsCount - 1;
if (window.obj44817_onTouchDown_runningActionsCount < 0) {
	window.obj44817_onTouchDown_runningActionsCount = 0;
} else if (window.obj44817_onTouchDown_runningActionsCount == 0) {
	obj44817_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj45190","#obj45186","#obj45182","#obj45188","#obj45184","#obj45180");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_44820 = false;
    	var dropped_id_44820;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_44820 = true;
					dropped_id_44820 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_44820) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj44817").trigger('SCActionDragDrop44820_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj44817_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44817_onTouchDown_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj44817 
move_92669();
function move_92669() {
	window.obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_runningActionsCount = obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj44817");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 317;
	var moveY = 655;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_runningActionsCount = window.obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj44817_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44871();
function runjs_44871() {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = obj44817_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45180").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_6_runningActionsCount = window.obj44817_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_44872();
function runjs_44872() {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = obj44817_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45180").css("border-color", "#C00000"); $("#obj45180").css("border-width", "2px"); $("#obj45180").css("border-style", "solid"); $("#obj45180").css("border-radius", "10px"); $("#obj45180").css("-webkit-border-radius", "10px"); $("#obj45180").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_6_runningActionsCount = window.obj44817_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44874();
function runjs_44874() {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = obj44817_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj44817").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_6_runningActionsCount = window.obj44817_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_6_actionGroup3();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_44875();
function switchText_44875() {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = obj44817_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44817_droppedInsideTargetActions_6_runningActionsCount = window.obj44817_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_6_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44817_droppedInsideTargetActions_6_runningActionsCount = window.obj44817_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	}
}






};
obj44817_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj44817 
move_44876();
function move_44876() {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = obj44817_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj44817");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 317;
	var moveY = 655;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44817_droppedInsideTargetActions_6_runningActionsCount = window.obj44817_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	});
}



















};
obj44817_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_44877();
function runjs_44877() {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = obj44817_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45180").css("background-color", "#D2DEEF");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_6_runningActionsCount = window.obj44817_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_44878();
function runjs_44878() {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = obj44817_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45180").css("border-color", "#000000"); $("#obj45180").css("border-width", "1px"); $("#obj45180").css("border-style", "solid"); $("#obj45180").css("border-radius", "0px"); $("#obj45180").css("-webkit-border-radius", "0px"); $("#obj45180").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_6_runningActionsCount = window.obj44817_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_44880();
function runjs_44880() {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = obj44817_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj44817").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_6_runningActionsCount = window.obj44817_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_44881();
function runjs_44881() {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = obj44817_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj44817").css("border-color", "rgba(0,0,0,0)"); $("#obj44817").css("border-width", "0px"); $("#obj44817").css("border-style", "solid"); $("#obj44817").css("border-radius", "10px"); $("#obj44817").css("-webkit-border-radius", "10px"); $("#obj44817").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_6_runningActionsCount = window.obj44817_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_6_actionGroup9();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	












//	action: playAudio
//	target: obj45156 
playAudio_44882();
function playAudio_44882() {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = obj44817_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj45156")[0];
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
		    window.obj44817_droppedInsideTargetActions_6_runningActionsCount = window.obj44817_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_6_actionGroup10();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44817_droppedInsideTargetActions_6_runningActionsCount = window.obj44817_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_6_actionGroup10();
}
	}
}









};
obj44817_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	















//	action: Switch Text
switchText_44883();
function switchText_44883() {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = obj44817_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44817_droppedInsideTargetActions_6_runningActionsCount = window.obj44817_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_6_actionGroup11();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44817_droppedInsideTargetActions_6_runningActionsCount = window.obj44817_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_6_actionGroup11();
}
		}, 1);
	}
}






};
obj44817_droppedInsideTargetActions_6_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex = 11;
	





















};
obj44817_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44857();
function runjs_44857() {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = obj44817_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45184").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_5_runningActionsCount = window.obj44817_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_44858();
function runjs_44858() {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = obj44817_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45184").css("border-color", "#C00000"); $("#obj45184").css("border-width", "2px"); $("#obj45184").css("border-style", "solid"); $("#obj45184").css("border-radius", "10px"); $("#obj45184").css("-webkit-border-radius", "10px"); $("#obj45184").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_5_runningActionsCount = window.obj44817_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44860();
function runjs_44860() {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = obj44817_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44817").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_5_runningActionsCount = window.obj44817_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_5_actionGroup3();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_44861();
function switchText_44861() {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = obj44817_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44817_droppedInsideTargetActions_5_runningActionsCount = window.obj44817_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_5_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44817_droppedInsideTargetActions_5_runningActionsCount = window.obj44817_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	}
}






};
obj44817_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj44817 
move_44862();
function move_44862() {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = obj44817_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj44817");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 317;
	var moveY = 655;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44817_droppedInsideTargetActions_5_runningActionsCount = window.obj44817_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	});
}



















};
obj44817_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_44863();
function runjs_44863() {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = obj44817_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45184").css("background-color", "#EAEFF7");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_5_runningActionsCount = window.obj44817_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_44864();
function runjs_44864() {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = obj44817_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45184").css("border-color", "#000000"); $("#obj45184").css("border-width", "1px"); $("#obj45184").css("border-style", "solid"); $("#obj45184").css("border-radius", "0px"); $("#obj45184").css("-webkit-border-radius", "0px"); $("#obj45184").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_5_runningActionsCount = window.obj44817_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_44866();
function runjs_44866() {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = obj44817_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44817").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_5_runningActionsCount = window.obj44817_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_44867();
function runjs_44867() {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = obj44817_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44817").css("border-color", "rgba(0,0,0,0)"); $("#obj44817").css("border-width", "0px"); $("#obj44817").css("border-style", "solid"); $("#obj44817").css("border-radius", "10px"); $("#obj44817").css("-webkit-border-radius", "10px"); $("#obj44817").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_5_runningActionsCount = window.obj44817_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_5_actionGroup9();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	












//	action: playAudio
//	target: obj45156 
playAudio_44868();
function playAudio_44868() {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = obj44817_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj45156")[0];
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
		    window.obj44817_droppedInsideTargetActions_5_runningActionsCount = window.obj44817_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_5_actionGroup10();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44817_droppedInsideTargetActions_5_runningActionsCount = window.obj44817_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_5_actionGroup10();
}
	}
}









};
obj44817_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Switch Text
switchText_44869();
function switchText_44869() {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = obj44817_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44817_droppedInsideTargetActions_5_runningActionsCount = window.obj44817_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_5_actionGroup11();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44817_droppedInsideTargetActions_5_runningActionsCount = window.obj44817_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_5_actionGroup11();
}
		}, 1);
	}
}






};
obj44817_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	





















};
obj44817_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44843();
function runjs_44843() {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = obj44817_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45188").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_4_runningActionsCount = window.obj44817_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_44844();
function runjs_44844() {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = obj44817_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45188").css("border-color", "#C00000"); $("#obj45188").css("border-width", "2px"); $("#obj45188").css("border-style", "solid"); $("#obj45188").css("border-radius", "10px"); $("#obj45188").css("-webkit-border-radius", "10px"); $("#obj45188").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_4_runningActionsCount = window.obj44817_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44846();
function runjs_44846() {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = obj44817_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44817").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_4_runningActionsCount = window.obj44817_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_44847();
function switchText_44847() {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = obj44817_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44817_droppedInsideTargetActions_4_runningActionsCount = window.obj44817_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_4_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44817_droppedInsideTargetActions_4_runningActionsCount = window.obj44817_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	}
}






};
obj44817_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj44817 
move_44848();
function move_44848() {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = obj44817_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj44817");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 317;
	var moveY = 655;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44817_droppedInsideTargetActions_4_runningActionsCount = window.obj44817_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	});
}



















};
obj44817_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_44849();
function runjs_44849() {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = obj44817_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45188").css("background-color", "#D2DEEF");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_4_runningActionsCount = window.obj44817_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_44850();
function runjs_44850() {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = obj44817_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45188").css("border-color", "#000000"); $("#obj45188").css("border-width", "1px"); $("#obj45188").css("border-style", "solid"); $("#obj45188").css("border-radius", "0px"); $("#obj45188").css("-webkit-border-radius", "0px"); $("#obj45188").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_4_runningActionsCount = window.obj44817_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_44852();
function runjs_44852() {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = obj44817_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44817").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_4_runningActionsCount = window.obj44817_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_44853();
function runjs_44853() {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = obj44817_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44817").css("border-color", "rgba(0,0,0,0)"); $("#obj44817").css("border-width", "0px"); $("#obj44817").css("border-style", "solid"); $("#obj44817").css("border-radius", "10px"); $("#obj44817").css("-webkit-border-radius", "10px"); $("#obj44817").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_4_runningActionsCount = window.obj44817_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_4_actionGroup9();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	












//	action: playAudio
//	target: obj45156 
playAudio_44854();
function playAudio_44854() {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = obj44817_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj45156")[0];
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
		    window.obj44817_droppedInsideTargetActions_4_runningActionsCount = window.obj44817_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_4_actionGroup10();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44817_droppedInsideTargetActions_4_runningActionsCount = window.obj44817_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_4_actionGroup10();
}
	}
}









};
obj44817_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Switch Text
switchText_44855();
function switchText_44855() {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = obj44817_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44817_droppedInsideTargetActions_4_runningActionsCount = window.obj44817_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_4_actionGroup11();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44817_droppedInsideTargetActions_4_runningActionsCount = window.obj44817_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_4_actionGroup11();
}
		}, 1);
	}
}






};
obj44817_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	





















};
obj44817_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44836();
function runjs_44836() {
	window.obj44817_droppedInsideTargetActions_3_runningActionsCount = obj44817_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45182").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_3_runningActionsCount = window.obj44817_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_44840();
function switchText_44840() {
	window.obj44817_droppedInsideTargetActions_3_runningActionsCount = obj44817_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44817_droppedInsideTargetActions_3_runningActionsCount = window.obj44817_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44817_droppedInsideTargetActions_3_runningActionsCount = window.obj44817_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj44817_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44837();
function runjs_44837() {
	window.obj44817_droppedInsideTargetActions_3_runningActionsCount = obj44817_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45182").css("border-color", "#058E3F"); $("#obj45182").css("border-width", "2px"); $("#obj45182").css("border-style", "solid"); $("#obj45182").css("border-radius", "10px"); $("#obj45182").css("-webkit-border-radius", "10px"); $("#obj45182").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_3_runningActionsCount = window.obj44817_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_44839();
function runjs_44839() {
	window.obj44817_droppedInsideTargetActions_3_runningActionsCount = obj44817_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44817").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_3_runningActionsCount = window.obj44817_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj45158 
playAudio_44841();
function playAudio_44841() {
	window.obj44817_droppedInsideTargetActions_3_runningActionsCount = obj44817_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj45158")[0];
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
		    window.obj44817_droppedInsideTargetActions_3_runningActionsCount = window.obj44817_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_3_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44817_droppedInsideTargetActions_3_runningActionsCount = window.obj44817_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_3_actionGroup5();
}
	}
}









};
obj44817_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90570();
function switchText_90570() {
	window.obj44817_droppedInsideTargetActions_3_runningActionsCount = obj44817_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44817_droppedInsideTargetActions_3_runningActionsCount = window.obj44817_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_3_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44817_droppedInsideTargetActions_3_runningActionsCount = window.obj44817_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	}
}






};
obj44817_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	





















};
obj44817_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44829();
function runjs_44829() {
	window.obj44817_droppedInsideTargetActions_2_runningActionsCount = obj44817_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45186").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_2_runningActionsCount = window.obj44817_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_44833();
function switchText_44833() {
	window.obj44817_droppedInsideTargetActions_2_runningActionsCount = obj44817_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44817_droppedInsideTargetActions_2_runningActionsCount = window.obj44817_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44817_droppedInsideTargetActions_2_runningActionsCount = window.obj44817_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj44817_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44830();
function runjs_44830() {
	window.obj44817_droppedInsideTargetActions_2_runningActionsCount = obj44817_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45186").css("border-color", "#058E3F"); $("#obj45186").css("border-width", "2px"); $("#obj45186").css("border-style", "solid"); $("#obj45186").css("border-radius", "10px"); $("#obj45186").css("-webkit-border-radius", "10px"); $("#obj45186").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_2_runningActionsCount = window.obj44817_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_44832();
function runjs_44832() {
	window.obj44817_droppedInsideTargetActions_2_runningActionsCount = obj44817_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44817").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_2_runningActionsCount = window.obj44817_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj45158 
playAudio_44834();
function playAudio_44834() {
	window.obj44817_droppedInsideTargetActions_2_runningActionsCount = obj44817_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj45158")[0];
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
		    window.obj44817_droppedInsideTargetActions_2_runningActionsCount = window.obj44817_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_2_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44817_droppedInsideTargetActions_2_runningActionsCount = window.obj44817_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_2_actionGroup5();
}
	}
}









};
obj44817_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90569();
function switchText_90569() {
	window.obj44817_droppedInsideTargetActions_2_runningActionsCount = obj44817_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44817_droppedInsideTargetActions_2_runningActionsCount = window.obj44817_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_2_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44817_droppedInsideTargetActions_2_runningActionsCount = window.obj44817_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	}
}






};
obj44817_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	





















};
obj44817_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44822();
function runjs_44822() {
	window.obj44817_droppedInsideTargetActions_runningActionsCount = obj44817_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45190").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_runningActionsCount = window.obj44817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_44826();
function switchText_44826() {
	window.obj44817_droppedInsideTargetActions_runningActionsCount = obj44817_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44817_droppedInsideTargetActions_runningActionsCount = window.obj44817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44817_droppedInsideTargetActions_runningActionsCount = window.obj44817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj44817_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44823();
function runjs_44823() {
	window.obj44817_droppedInsideTargetActions_runningActionsCount = obj44817_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45190").css("border-color", "#058E3F"); $("#obj45190").css("border-width", "2px"); $("#obj45190").css("border-style", "solid"); $("#obj45190").css("border-radius", "10px"); $("#obj45190").css("-webkit-border-radius", "10px"); $("#obj45190").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_runningActionsCount = window.obj44817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_44825();
function runjs_44825() {
	window.obj44817_droppedInsideTargetActions_runningActionsCount = obj44817_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj44817").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44817_droppedInsideTargetActions_runningActionsCount = window.obj44817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj44817_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj45158 
playAudio_44827();
function playAudio_44827() {
	window.obj44817_droppedInsideTargetActions_runningActionsCount = obj44817_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj45158")[0];
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
		    window.obj44817_droppedInsideTargetActions_runningActionsCount = window.obj44817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44817_droppedInsideTargetActions_runningActionsCount = window.obj44817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj44817_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90568();
function switchText_90568() {
	window.obj44817_droppedInsideTargetActions_runningActionsCount = obj44817_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44817_droppedInsideTargetActions_runningActionsCount = window.obj44817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44817_droppedInsideTargetActions_runningActionsCount = window.obj44817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44817_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj44817_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44817_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44817").trigger("obj44817_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44817) {
				console.warn("de-queueing event obj44817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44817_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj44750_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_onTouchDown_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj44750");
//	action: dragDrop
//	target: obj44750 
dragDrop_44753();
function dragDrop_44753() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj44750_onTouchDown_runningActionsCount = obj44750_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj44750');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj45198');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj44750_onTouchDown_runningActionsCount = window.obj44750_onTouchDown_runningActionsCount - 1;
if (window.obj44750_onTouchDown_runningActionsCount < 0) {
	window.obj44750_onTouchDown_runningActionsCount = 0;
} else if (window.obj44750_onTouchDown_runningActionsCount == 0) {
	obj44750_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj45188","#obj45184","#obj45180","#obj45190","#obj45186","#obj45182");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_44753 = false;
    	var dropped_id_44753;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_44753 = true;
					dropped_id_44753 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_44753) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj44750").trigger('SCActionDragDrop44753_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj44750_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44750_onTouchDown_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj44750 
move_92665();
function move_92665() {
	window.obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_runningActionsCount = obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj44750");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 319;
	var moveY = 595;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_runningActionsCount = window.obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj44750_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44804();
function runjs_44804() {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = obj44750_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45182").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_6_runningActionsCount = window.obj44750_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_44805();
function runjs_44805() {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = obj44750_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45182").css("border-color", "#C00000"); $("#obj45182").css("border-width", "2px"); $("#obj45182").css("border-style", "solid"); $("#obj45182").css("border-radius", "10px"); $("#obj45182").css("-webkit-border-radius", "10px"); $("#obj45182").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_6_runningActionsCount = window.obj44750_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44807();
function runjs_44807() {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = obj44750_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj44750").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_6_runningActionsCount = window.obj44750_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_6_actionGroup3();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_44808();
function switchText_44808() {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = obj44750_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44750_droppedInsideTargetActions_6_runningActionsCount = window.obj44750_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_6_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44750_droppedInsideTargetActions_6_runningActionsCount = window.obj44750_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	}
}






};
obj44750_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj44750 
move_44809();
function move_44809() {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = obj44750_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj44750");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 319;
	var moveY = 595;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44750_droppedInsideTargetActions_6_runningActionsCount = window.obj44750_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	});
}



















};
obj44750_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_44810();
function runjs_44810() {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = obj44750_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45182").css("background-color", "#D2DEEF");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_6_runningActionsCount = window.obj44750_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_6_actionGroup6();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_44811();
function runjs_44811() {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = obj44750_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj45182").css("border-color", "#000000"); $("#obj45182").css("border-width", "1px"); $("#obj45182").css("border-style", "solid"); $("#obj45182").css("border-radius", "0px"); $("#obj45182").css("-webkit-border-radius", "0px"); $("#obj45182").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_6_runningActionsCount = window.obj44750_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_44813();
function runjs_44813() {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = obj44750_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj44750").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_6_runningActionsCount = window.obj44750_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_44814();
function runjs_44814() {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = obj44750_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj44750").css("border-color", "rgba(0,0,0,0)"); $("#obj44750").css("border-width", "0px"); $("#obj44750").css("border-style", "solid"); $("#obj44750").css("border-radius", "10px"); $("#obj44750").css("-webkit-border-radius", "10px"); $("#obj44750").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_6_runningActionsCount = window.obj44750_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_6_actionGroup9();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	












//	action: playAudio
//	target: obj45156 
playAudio_44815();
function playAudio_44815() {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = obj44750_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj45156")[0];
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
		    window.obj44750_droppedInsideTargetActions_6_runningActionsCount = window.obj44750_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_6_actionGroup10();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44750_droppedInsideTargetActions_6_runningActionsCount = window.obj44750_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_6_actionGroup10();
}
	}
}









};
obj44750_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	















//	action: Switch Text
switchText_44816();
function switchText_44816() {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = obj44750_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44750_droppedInsideTargetActions_6_runningActionsCount = window.obj44750_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_6_actionGroup11();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44750_droppedInsideTargetActions_6_runningActionsCount = window.obj44750_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_6_actionGroup11();
}
		}, 1);
	}
}






};
obj44750_droppedInsideTargetActions_6_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex = 11;
	





















};
obj44750_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44790();
function runjs_44790() {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = obj44750_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45186").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_5_runningActionsCount = window.obj44750_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_44791();
function runjs_44791() {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = obj44750_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45186").css("border-color", "#C00000"); $("#obj45186").css("border-width", "2px"); $("#obj45186").css("border-style", "solid"); $("#obj45186").css("border-radius", "10px"); $("#obj45186").css("-webkit-border-radius", "10px"); $("#obj45186").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_5_runningActionsCount = window.obj44750_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44793();
function runjs_44793() {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = obj44750_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44750").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_5_runningActionsCount = window.obj44750_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_5_actionGroup3();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_44794();
function switchText_44794() {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = obj44750_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44750_droppedInsideTargetActions_5_runningActionsCount = window.obj44750_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_5_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44750_droppedInsideTargetActions_5_runningActionsCount = window.obj44750_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	}
}






};
obj44750_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj44750 
move_44795();
function move_44795() {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = obj44750_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj44750");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 319;
	var moveY = 595;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44750_droppedInsideTargetActions_5_runningActionsCount = window.obj44750_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	});
}



















};
obj44750_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_44796();
function runjs_44796() {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = obj44750_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45186").css("background-color", "#EAEFF7");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_5_runningActionsCount = window.obj44750_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_5_actionGroup6();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_44797();
function runjs_44797() {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = obj44750_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj45186").css("border-color", "#000000"); $("#obj45186").css("border-width", "1px"); $("#obj45186").css("border-style", "solid"); $("#obj45186").css("border-radius", "0px"); $("#obj45186").css("-webkit-border-radius", "0px"); $("#obj45186").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_5_runningActionsCount = window.obj44750_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_44799();
function runjs_44799() {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = obj44750_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44750").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_5_runningActionsCount = window.obj44750_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_44800();
function runjs_44800() {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = obj44750_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44750").css("border-color", "rgba(0,0,0,0)"); $("#obj44750").css("border-width", "0px"); $("#obj44750").css("border-style", "solid"); $("#obj44750").css("border-radius", "10px"); $("#obj44750").css("-webkit-border-radius", "10px"); $("#obj44750").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_5_runningActionsCount = window.obj44750_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_5_actionGroup9();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	












//	action: playAudio
//	target: obj45156 
playAudio_44801();
function playAudio_44801() {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = obj44750_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj45156")[0];
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
		    window.obj44750_droppedInsideTargetActions_5_runningActionsCount = window.obj44750_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_5_actionGroup10();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44750_droppedInsideTargetActions_5_runningActionsCount = window.obj44750_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_5_actionGroup10();
}
	}
}









};
obj44750_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Switch Text
switchText_44802();
function switchText_44802() {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = obj44750_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44750_droppedInsideTargetActions_5_runningActionsCount = window.obj44750_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_5_actionGroup11();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44750_droppedInsideTargetActions_5_runningActionsCount = window.obj44750_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_5_actionGroup11();
}
		}, 1);
	}
}






};
obj44750_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	





















};
obj44750_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44776();
function runjs_44776() {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = obj44750_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45190").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_4_runningActionsCount = window.obj44750_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_44777();
function runjs_44777() {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = obj44750_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45190").css("border-color", "#C00000"); $("#obj45190").css("border-width", "2px"); $("#obj45190").css("border-style", "solid"); $("#obj45190").css("border-radius", "10px"); $("#obj45190").css("-webkit-border-radius", "10px"); $("#obj45190").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_4_runningActionsCount = window.obj44750_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44779();
function runjs_44779() {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = obj44750_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44750").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_4_runningActionsCount = window.obj44750_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_44780();
function switchText_44780() {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = obj44750_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44750_droppedInsideTargetActions_4_runningActionsCount = window.obj44750_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_4_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44750_droppedInsideTargetActions_4_runningActionsCount = window.obj44750_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	}
}






};
obj44750_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj44750 
move_44781();
function move_44781() {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = obj44750_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj44750");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 319;
	var moveY = 595;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44750_droppedInsideTargetActions_4_runningActionsCount = window.obj44750_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	});
}



















};
obj44750_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_44782();
function runjs_44782() {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = obj44750_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45190").css("background-color", "#D2DEEF");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_4_runningActionsCount = window.obj44750_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_44783();
function runjs_44783() {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = obj44750_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45190").css("border-color", "#000000"); $("#obj45190").css("border-width", "1px"); $("#obj45190").css("border-style", "solid"); $("#obj45190").css("border-radius", "0px"); $("#obj45190").css("-webkit-border-radius", "0px"); $("#obj45190").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_4_runningActionsCount = window.obj44750_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_44785();
function runjs_44785() {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = obj44750_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44750").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_4_runningActionsCount = window.obj44750_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_44786();
function runjs_44786() {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = obj44750_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44750").css("border-color", "rgba(0,0,0,0)"); $("#obj44750").css("border-width", "0px"); $("#obj44750").css("border-style", "solid"); $("#obj44750").css("border-radius", "10px"); $("#obj44750").css("-webkit-border-radius", "10px"); $("#obj44750").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_4_runningActionsCount = window.obj44750_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_4_actionGroup9();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	












//	action: playAudio
//	target: obj45156 
playAudio_44787();
function playAudio_44787() {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = obj44750_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj45156")[0];
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
		    window.obj44750_droppedInsideTargetActions_4_runningActionsCount = window.obj44750_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_4_actionGroup10();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44750_droppedInsideTargetActions_4_runningActionsCount = window.obj44750_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_4_actionGroup10();
}
	}
}









};
obj44750_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Switch Text
switchText_44788();
function switchText_44788() {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = obj44750_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44750_droppedInsideTargetActions_4_runningActionsCount = window.obj44750_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_4_actionGroup11();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44750_droppedInsideTargetActions_4_runningActionsCount = window.obj44750_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_4_actionGroup11();
}
		}, 1);
	}
}






};
obj44750_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	





















};
obj44750_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44769();
function runjs_44769() {
	window.obj44750_droppedInsideTargetActions_3_runningActionsCount = obj44750_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45180").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_3_runningActionsCount = window.obj44750_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_44773();
function switchText_44773() {
	window.obj44750_droppedInsideTargetActions_3_runningActionsCount = obj44750_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44750_droppedInsideTargetActions_3_runningActionsCount = window.obj44750_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44750_droppedInsideTargetActions_3_runningActionsCount = window.obj44750_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj44750_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44770();
function runjs_44770() {
	window.obj44750_droppedInsideTargetActions_3_runningActionsCount = obj44750_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45180").css("border-color", "#058E3F"); $("#obj45180").css("border-width", "2px"); $("#obj45180").css("border-style", "solid"); $("#obj45180").css("border-radius", "10px"); $("#obj45180").css("-webkit-border-radius", "10px"); $("#obj45180").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_3_runningActionsCount = window.obj44750_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_44772();
function runjs_44772() {
	window.obj44750_droppedInsideTargetActions_3_runningActionsCount = obj44750_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44750").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_3_runningActionsCount = window.obj44750_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj45158 
playAudio_44774();
function playAudio_44774() {
	window.obj44750_droppedInsideTargetActions_3_runningActionsCount = obj44750_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj45158")[0];
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
		    window.obj44750_droppedInsideTargetActions_3_runningActionsCount = window.obj44750_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_3_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44750_droppedInsideTargetActions_3_runningActionsCount = window.obj44750_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_3_actionGroup5();
}
	}
}









};
obj44750_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90567();
function switchText_90567() {
	window.obj44750_droppedInsideTargetActions_3_runningActionsCount = obj44750_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44750_droppedInsideTargetActions_3_runningActionsCount = window.obj44750_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_3_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44750_droppedInsideTargetActions_3_runningActionsCount = window.obj44750_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	}
}






};
obj44750_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	





















};
obj44750_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44762();
function runjs_44762() {
	window.obj44750_droppedInsideTargetActions_2_runningActionsCount = obj44750_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45184").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_2_runningActionsCount = window.obj44750_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_44766();
function switchText_44766() {
	window.obj44750_droppedInsideTargetActions_2_runningActionsCount = obj44750_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44750_droppedInsideTargetActions_2_runningActionsCount = window.obj44750_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44750_droppedInsideTargetActions_2_runningActionsCount = window.obj44750_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj44750_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44763();
function runjs_44763() {
	window.obj44750_droppedInsideTargetActions_2_runningActionsCount = obj44750_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45184").css("border-color", "#058E3F"); $("#obj45184").css("border-width", "2px"); $("#obj45184").css("border-style", "solid"); $("#obj45184").css("border-radius", "10px"); $("#obj45184").css("-webkit-border-radius", "10px"); $("#obj45184").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_2_runningActionsCount = window.obj44750_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_44765();
function runjs_44765() {
	window.obj44750_droppedInsideTargetActions_2_runningActionsCount = obj44750_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44750").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_2_runningActionsCount = window.obj44750_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj45158 
playAudio_44767();
function playAudio_44767() {
	window.obj44750_droppedInsideTargetActions_2_runningActionsCount = obj44750_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj45158")[0];
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
		    window.obj44750_droppedInsideTargetActions_2_runningActionsCount = window.obj44750_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_2_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44750_droppedInsideTargetActions_2_runningActionsCount = window.obj44750_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_2_actionGroup5();
}
	}
}









};
obj44750_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90566();
function switchText_90566() {
	window.obj44750_droppedInsideTargetActions_2_runningActionsCount = obj44750_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44750_droppedInsideTargetActions_2_runningActionsCount = window.obj44750_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_2_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44750_droppedInsideTargetActions_2_runningActionsCount = window.obj44750_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	}
}






};
obj44750_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	





















};
obj44750_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44755();
function runjs_44755() {
	window.obj44750_droppedInsideTargetActions_runningActionsCount = obj44750_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45188").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_runningActionsCount = window.obj44750_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_44759();
function switchText_44759() {
	window.obj44750_droppedInsideTargetActions_runningActionsCount = obj44750_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44750_droppedInsideTargetActions_runningActionsCount = window.obj44750_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44750_droppedInsideTargetActions_runningActionsCount = window.obj44750_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj44750_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44756();
function runjs_44756() {
	window.obj44750_droppedInsideTargetActions_runningActionsCount = obj44750_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45188").css("border-color", "#058E3F"); $("#obj45188").css("border-width", "2px"); $("#obj45188").css("border-style", "solid"); $("#obj45188").css("border-radius", "10px"); $("#obj45188").css("-webkit-border-radius", "10px"); $("#obj45188").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_runningActionsCount = window.obj44750_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_44758();
function runjs_44758() {
	window.obj44750_droppedInsideTargetActions_runningActionsCount = obj44750_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj44750").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44750_droppedInsideTargetActions_runningActionsCount = window.obj44750_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj44750_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj45158 
playAudio_44760();
function playAudio_44760() {
	window.obj44750_droppedInsideTargetActions_runningActionsCount = obj44750_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj45158")[0];
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
		    window.obj44750_droppedInsideTargetActions_runningActionsCount = window.obj44750_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44750_droppedInsideTargetActions_runningActionsCount = window.obj44750_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj44750_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90565();
function switchText_90565() {
	window.obj44750_droppedInsideTargetActions_runningActionsCount = obj44750_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45160").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45160_content");
			setTimeout(function () {
				window.obj44750_droppedInsideTargetActions_runningActionsCount = window.obj44750_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj45160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44750_droppedInsideTargetActions_runningActionsCount = window.obj44750_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44750_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44750_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44750_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44750_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj44750_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44750_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44750").trigger("obj44750_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44750) {
				console.warn("de-queueing event obj44750." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44750").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44750_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj67438_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67438_onTap_activeActionGroupIndex = -1;
		$("#obj67438").trigger("obj67438_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67438) {
				console.warn("de-queueing event obj67438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67438_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67438 
hide_67441();
function hide_67441() {
	var selector = "#obj67438";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67438_onTap_runningActionsCount = obj67438_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67438_onTap_runningActionsCount = window.obj67438_onTap_runningActionsCount - 1;
if (window.obj67438_onTap_runningActionsCount < 0) {
	window.obj67438_onTap_runningActionsCount = 0;
} else if (window.obj67438_onTap_runningActionsCount == 0) {
	obj67438_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67441(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67438_onTap_runningActionsCount = window.obj67438_onTap_runningActionsCount - 1;
if (window.obj67438_onTap_runningActionsCount < 0) {
	window.obj67438_onTap_runningActionsCount = 0;
} else if (window.obj67438_onTap_runningActionsCount == 0) {
	obj67438_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67444 
stopMovie_67440();
function stopMovie_67440() {
	window.obj67438_onTap_runningActionsCount = obj67438_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67444")[0];
	myVideo.pause();
	window.obj67438_onTap_runningActionsCount = window.obj67438_onTap_runningActionsCount - 1;
if (window.obj67438_onTap_runningActionsCount < 0) {
	window.obj67438_onTap_runningActionsCount = 0;
} else if (window.obj67438_onTap_runningActionsCount == 0) {
	obj67438_onTap_actionGroup1();
}
}
















};
obj67438_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67438_onTap_activeActionGroupIndex = -1;
		$("#obj67438").trigger("obj67438_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67438) {
				console.warn("de-queueing event obj67438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67438_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67430
(function(){
	window.obj67438_onTap_runningActionsCount = obj67438_onTap_runningActionsCount + 1;

	var selector = "#obj67430";
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
					window.obj67438_onTap_runningActionsCount = window.obj67438_onTap_runningActionsCount - 1;
if (window.obj67438_onTap_runningActionsCount < 0) {
	window.obj67438_onTap_runningActionsCount = 0;
} else if (window.obj67438_onTap_runningActionsCount == 0) {
	obj67438_onTap_actionGroup2();
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
				window.obj67438_onTap_runningActionsCount = window.obj67438_onTap_runningActionsCount - 1;
if (window.obj67438_onTap_runningActionsCount < 0) {
	window.obj67438_onTap_runningActionsCount = 0;
} else if (window.obj67438_onTap_runningActionsCount == 0) {
	obj67438_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67438_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67438_onTap_activeActionGroupIndex = -1;
		$("#obj67438").trigger("obj67438_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67438) {
				console.warn("de-queueing event obj67438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67438_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67444 
move_67443();
function move_67443() {
	window.obj67438_onTap_runningActionsCount = obj67438_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67444");
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
			window.obj67438_onTap_runningActionsCount = window.obj67438_onTap_runningActionsCount - 1;
if (window.obj67438_onTap_runningActionsCount < 0) {
	window.obj67438_onTap_runningActionsCount = 0;
} else if (window.obj67438_onTap_runningActionsCount == 0) {
	obj67438_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67438_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67438_onTap_activeActionGroupIndex = -1;
		$("#obj67438").trigger("obj67438_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67438) {
				console.warn("de-queueing event obj67438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67438_onTap_activeActionGroupIndex = 3;
	





















};
obj67430_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67430_onTap_activeActionGroupIndex = -1;
		$("#obj67430").trigger("obj67430_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67430) {
				console.warn("de-queueing event obj67430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67430_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67430 
hide_67433();
function hide_67433() {
	var selector = "#obj67430";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67430_onTap_runningActionsCount = obj67430_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67430_onTap_runningActionsCount = window.obj67430_onTap_runningActionsCount - 1;
if (window.obj67430_onTap_runningActionsCount < 0) {
	window.obj67430_onTap_runningActionsCount = 0;
} else if (window.obj67430_onTap_runningActionsCount == 0) {
	obj67430_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67433(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67430_onTap_runningActionsCount = window.obj67430_onTap_runningActionsCount - 1;
if (window.obj67430_onTap_runningActionsCount < 0) {
	window.obj67430_onTap_runningActionsCount = 0;
} else if (window.obj67430_onTap_runningActionsCount == 0) {
	obj67430_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67444 
playPauseMovie_67432();
function playPauseMovie_67432() {
	window.obj67430_onTap_runningActionsCount = obj67430_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67444")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67430_onTap_runningActionsCount = window.obj67430_onTap_runningActionsCount - 1;
if (window.obj67430_onTap_runningActionsCount < 0) {
	window.obj67430_onTap_runningActionsCount = 0;
} else if (window.obj67430_onTap_runningActionsCount == 0) {
	obj67430_onTap_actionGroup1();
}
}

















};
obj67430_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67430_onTap_activeActionGroupIndex = -1;
		$("#obj67430").trigger("obj67430_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67430) {
				console.warn("de-queueing event obj67430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67430_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67438
(function(){
	window.obj67430_onTap_runningActionsCount = obj67430_onTap_runningActionsCount + 1;

	var selector = "#obj67438";
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
					window.obj67430_onTap_runningActionsCount = window.obj67430_onTap_runningActionsCount - 1;
if (window.obj67430_onTap_runningActionsCount < 0) {
	window.obj67430_onTap_runningActionsCount = 0;
} else if (window.obj67430_onTap_runningActionsCount == 0) {
	obj67430_onTap_actionGroup2();
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
				window.obj67430_onTap_runningActionsCount = window.obj67430_onTap_runningActionsCount - 1;
if (window.obj67430_onTap_runningActionsCount < 0) {
	window.obj67430_onTap_runningActionsCount = 0;
} else if (window.obj67430_onTap_runningActionsCount == 0) {
	obj67430_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67430_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67430_onTap_activeActionGroupIndex = -1;
		$("#obj67430").trigger("obj67430_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67430) {
				console.warn("de-queueing event obj67430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67430_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67444 
move_67435();
function move_67435() {
	window.obj67430_onTap_runningActionsCount = obj67430_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67444");
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
			window.obj67430_onTap_runningActionsCount = window.obj67430_onTap_runningActionsCount - 1;
if (window.obj67430_onTap_runningActionsCount < 0) {
	window.obj67430_onTap_runningActionsCount = 0;
} else if (window.obj67430_onTap_runningActionsCount == 0) {
	obj67430_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67430_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67430_onTap_activeActionGroupIndex = -1;
		$("#obj67430").trigger("obj67430_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67430) {
				console.warn("de-queueing event obj67430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67430_onTap_activeActionGroupIndex = 3;
	





















};
obj88705_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88705_onTap_activeActionGroupIndex = -1;
		$("#obj88705").trigger("obj88705_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88705) {
				console.warn("de-queueing event obj88705." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88705").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88705_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88710 
stopAudio_88707();
function stopAudio_88707() {
	window.obj88705_onTap_runningActionsCount = obj88705_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88710")[0];
	myAudio.pause();
	window.obj88705_onTap_runningActionsCount = window.obj88705_onTap_runningActionsCount - 1;
if (window.obj88705_onTap_runningActionsCount < 0) {
	window.obj88705_onTap_runningActionsCount = 0;
} else if (window.obj88705_onTap_runningActionsCount == 0) {
	obj88705_onTap_actionGroup1();
}
}








};
obj88705_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88705_onTap_activeActionGroupIndex = -1;
		$("#obj88705").trigger("obj88705_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88705) {
				console.warn("de-queueing event obj88705." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88705").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88705_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88705 
hide_88708();
function hide_88708() {
	var selector = "#obj88705";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88705_onTap_runningActionsCount = obj88705_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88705_onTap_runningActionsCount = window.obj88705_onTap_runningActionsCount - 1;
if (window.obj88705_onTap_runningActionsCount < 0) {
	window.obj88705_onTap_runningActionsCount = 0;
} else if (window.obj88705_onTap_runningActionsCount == 0) {
	obj88705_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88708(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88705_onTap_runningActionsCount = window.obj88705_onTap_runningActionsCount - 1;
if (window.obj88705_onTap_runningActionsCount < 0) {
	window.obj88705_onTap_runningActionsCount = 0;
} else if (window.obj88705_onTap_runningActionsCount == 0) {
	obj88705_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88705_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88705_onTap_activeActionGroupIndex = -1;
		$("#obj88705").trigger("obj88705_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88705) {
				console.warn("de-queueing event obj88705." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88705").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88705_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88700
(function(){
	window.obj88705_onTap_runningActionsCount = obj88705_onTap_runningActionsCount + 1;

	var selector = "#obj88700";
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
					window.obj88705_onTap_runningActionsCount = window.obj88705_onTap_runningActionsCount - 1;
if (window.obj88705_onTap_runningActionsCount < 0) {
	window.obj88705_onTap_runningActionsCount = 0;
} else if (window.obj88705_onTap_runningActionsCount == 0) {
	obj88705_onTap_actionGroup3();
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
				window.obj88705_onTap_runningActionsCount = window.obj88705_onTap_runningActionsCount - 1;
if (window.obj88705_onTap_runningActionsCount < 0) {
	window.obj88705_onTap_runningActionsCount = 0;
} else if (window.obj88705_onTap_runningActionsCount == 0) {
	obj88705_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88705_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88705_onTap_activeActionGroupIndex = -1;
		$("#obj88705").trigger("obj88705_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88705) {
				console.warn("de-queueing event obj88705." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88705").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88705_onTap_activeActionGroupIndex = 3;
	





















};
obj88700_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88700_onTap_activeActionGroupIndex = -1;
		$("#obj88700").trigger("obj88700_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88700) {
				console.warn("de-queueing event obj88700." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88700").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88700_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88700 
hide_88702();
function hide_88702() {
	var selector = "#obj88700";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88700_onTap_runningActionsCount = obj88700_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88700_onTap_runningActionsCount = window.obj88700_onTap_runningActionsCount - 1;
if (window.obj88700_onTap_runningActionsCount < 0) {
	window.obj88700_onTap_runningActionsCount = 0;
} else if (window.obj88700_onTap_runningActionsCount == 0) {
	obj88700_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88702(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88700_onTap_runningActionsCount = window.obj88700_onTap_runningActionsCount - 1;
if (window.obj88700_onTap_runningActionsCount < 0) {
	window.obj88700_onTap_runningActionsCount = 0;
} else if (window.obj88700_onTap_runningActionsCount == 0) {
	obj88700_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88700_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88700_onTap_activeActionGroupIndex = -1;
		$("#obj88700").trigger("obj88700_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88700) {
				console.warn("de-queueing event obj88700." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88700").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88700_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88705
(function(){
	window.obj88700_onTap_runningActionsCount = obj88700_onTap_runningActionsCount + 1;

	var selector = "#obj88705";
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
					window.obj88700_onTap_runningActionsCount = window.obj88700_onTap_runningActionsCount - 1;
if (window.obj88700_onTap_runningActionsCount < 0) {
	window.obj88700_onTap_runningActionsCount = 0;
} else if (window.obj88700_onTap_runningActionsCount == 0) {
	obj88700_onTap_actionGroup2();
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
				window.obj88700_onTap_runningActionsCount = window.obj88700_onTap_runningActionsCount - 1;
if (window.obj88700_onTap_runningActionsCount < 0) {
	window.obj88700_onTap_runningActionsCount = 0;
} else if (window.obj88700_onTap_runningActionsCount == 0) {
	obj88700_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88700_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88700_onTap_activeActionGroupIndex = -1;
		$("#obj88700").trigger("obj88700_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88700) {
				console.warn("de-queueing event obj88700." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88700").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88700_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88710 
playAudio_88704();
function playAudio_88704() {
	window.obj88700_onTap_runningActionsCount = obj88700_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88710")[0];
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
		    window.obj88700_onTap_runningActionsCount = window.obj88700_onTap_runningActionsCount - 1;
if (window.obj88700_onTap_runningActionsCount < 0) {
	window.obj88700_onTap_runningActionsCount = 0;
} else if (window.obj88700_onTap_runningActionsCount == 0) {
	obj88700_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88700_onTap_runningActionsCount = window.obj88700_onTap_runningActionsCount - 1;
if (window.obj88700_onTap_runningActionsCount < 0) {
	window.obj88700_onTap_runningActionsCount = 0;
} else if (window.obj88700_onTap_runningActionsCount == 0) {
	obj88700_onTap_actionGroup3();
}
	}
}









};
obj88700_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88700_onTap_activeActionGroupIndex = -1;
		$("#obj88700").trigger("obj88700_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88700) {
				console.warn("de-queueing event obj88700." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88700").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88700_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj45213: Event Touch Down
 *
 */
$("#obj45213").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj45213_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45213_onTap is still running");
	return;
}
var obj45213_onTap_runningActionsCount = 0;
var obj45213_onTap_loopCount = 0;
obj45213_onTap_actionGroup0();
});










/*
 *
 *   obj45210: Event Touch Down
 *
 */
$("#obj45210").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj45210_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45210_onTap is still running");
	return;
}
var obj45210_onTap_runningActionsCount = 0;
var obj45210_onTap_loopCount = 0;
obj45210_onTap_actionGroup0();
});










/*
 *
 *   obj45206: Event Touch Down
 *
 */
$("#obj45206").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj45206_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45206_onTap is still running");
	return;
}
var obj45206_onTap_runningActionsCount = 0;
var obj45206_onTap_loopCount = 0;
obj45206_onTap_actionGroup0();
});









































































































































































































/*
 *
 *   obj45089: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj45089");
	var winTarget = document.getElementById("obj45089");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj45089").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj45089_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj45089_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj45089_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45089_onTouchDown is still running");
	return;
}
var obj45089_onTouchDown_runningActionsCount = 0;
var obj45089_onTouchDown_loopCount = 0;
obj45089_onTouchDown_actionGroup0();
});



/*
 *
 *   obj45089: Event SCActionDragDrop45092_droppedOutsideTargetActions
 *
 */
$("#obj45089").bind("SCActionDragDrop45092_droppedOutsideTargetActions", function(event) {
	if (window.obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45089_SCActionDragDrop45092_droppedOutsideTargetActions is still running");
	return;
}
var obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_loopCount = 0;
obj45089_SCActionDragDrop45092_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj45089: Event droppedInsideTargetActions_6
 *
 */
$("#obj45089").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj45089_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45089_droppedInsideTargetActions_6 is still running");
	return;
}
var obj45089_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj45089_droppedInsideTargetActions_6_loopCount = 0;
obj45089_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj45089: Event droppedInsideTargetActions_5
 *
 */
$("#obj45089").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj45089_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45089_droppedInsideTargetActions_5 is still running");
	return;
}
var obj45089_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj45089_droppedInsideTargetActions_5_loopCount = 0;
obj45089_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj45089: Event droppedInsideTargetActions_4
 *
 */
$("#obj45089").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj45089_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45089_droppedInsideTargetActions_4 is still running");
	return;
}
var obj45089_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj45089_droppedInsideTargetActions_4_loopCount = 0;
obj45089_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj45089: Event droppedInsideTargetActions_3
 *
 */
$("#obj45089").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj45089_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45089_droppedInsideTargetActions_3 is still running");
	return;
}
var obj45089_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj45089_droppedInsideTargetActions_3_loopCount = 0;
obj45089_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj45089: Event droppedInsideTargetActions_2
 *
 */
$("#obj45089").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj45089_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45089_droppedInsideTargetActions_2 is still running");
	return;
}
var obj45089_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj45089_droppedInsideTargetActions_2_loopCount = 0;
obj45089_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj45089: Event droppedInsideTargetActions
 *
 */
$("#obj45089").bind("droppedInsideTargetActions", function(event) {
	if (window.obj45089_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45089_droppedInsideTargetActions is still running");
	return;
}
var obj45089_droppedInsideTargetActions_runningActionsCount = 0;
var obj45089_droppedInsideTargetActions_loopCount = 0;
obj45089_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj45018: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj45018");
	var winTarget = document.getElementById("obj45018");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj45018").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj45018_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj45018_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj45018_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45018_onTouchDown is still running");
	return;
}
var obj45018_onTouchDown_runningActionsCount = 0;
var obj45018_onTouchDown_loopCount = 0;
obj45018_onTouchDown_actionGroup0();
});



/*
 *
 *   obj45018: Event SCActionDragDrop45021_droppedOutsideTargetActions
 *
 */
$("#obj45018").bind("SCActionDragDrop45021_droppedOutsideTargetActions", function(event) {
	if (window.obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45018_SCActionDragDrop45021_droppedOutsideTargetActions is still running");
	return;
}
var obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_loopCount = 0;
obj45018_SCActionDragDrop45021_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj45018: Event droppedInsideTargetActions_6
 *
 */
$("#obj45018").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj45018_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45018_droppedInsideTargetActions_6 is still running");
	return;
}
var obj45018_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj45018_droppedInsideTargetActions_6_loopCount = 0;
obj45018_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj45018: Event droppedInsideTargetActions_5
 *
 */
$("#obj45018").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj45018_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45018_droppedInsideTargetActions_5 is still running");
	return;
}
var obj45018_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj45018_droppedInsideTargetActions_5_loopCount = 0;
obj45018_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj45018: Event droppedInsideTargetActions_4
 *
 */
$("#obj45018").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj45018_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45018_droppedInsideTargetActions_4 is still running");
	return;
}
var obj45018_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj45018_droppedInsideTargetActions_4_loopCount = 0;
obj45018_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj45018: Event droppedInsideTargetActions_3
 *
 */
$("#obj45018").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj45018_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45018_droppedInsideTargetActions_3 is still running");
	return;
}
var obj45018_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj45018_droppedInsideTargetActions_3_loopCount = 0;
obj45018_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj45018: Event droppedInsideTargetActions_2
 *
 */
$("#obj45018").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj45018_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45018_droppedInsideTargetActions_2 is still running");
	return;
}
var obj45018_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj45018_droppedInsideTargetActions_2_loopCount = 0;
obj45018_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj45018: Event droppedInsideTargetActions
 *
 */
$("#obj45018").bind("droppedInsideTargetActions", function(event) {
	if (window.obj45018_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45018_droppedInsideTargetActions is still running");
	return;
}
var obj45018_droppedInsideTargetActions_runningActionsCount = 0;
var obj45018_droppedInsideTargetActions_loopCount = 0;
obj45018_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj44951: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj44951");
	var winTarget = document.getElementById("obj44951");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj44951").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj44951_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj44951_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj44951_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44951_onTouchDown is still running");
	return;
}
var obj44951_onTouchDown_runningActionsCount = 0;
var obj44951_onTouchDown_loopCount = 0;
obj44951_onTouchDown_actionGroup0();
});



/*
 *
 *   obj44951: Event SCActionDragDrop44954_droppedOutsideTargetActions
 *
 */
$("#obj44951").bind("SCActionDragDrop44954_droppedOutsideTargetActions", function(event) {
	if (window.obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44951_SCActionDragDrop44954_droppedOutsideTargetActions is still running");
	return;
}
var obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_runningActionsCount = 0;
var obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_loopCount = 0;
obj44951_SCActionDragDrop44954_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj44951: Event droppedInsideTargetActions_6
 *
 */
$("#obj44951").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj44951_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44951_droppedInsideTargetActions_6 is still running");
	return;
}
var obj44951_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj44951_droppedInsideTargetActions_6_loopCount = 0;
obj44951_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj44951: Event droppedInsideTargetActions_5
 *
 */
$("#obj44951").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj44951_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44951_droppedInsideTargetActions_5 is still running");
	return;
}
var obj44951_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj44951_droppedInsideTargetActions_5_loopCount = 0;
obj44951_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj44951: Event droppedInsideTargetActions_4
 *
 */
$("#obj44951").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj44951_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44951_droppedInsideTargetActions_4 is still running");
	return;
}
var obj44951_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj44951_droppedInsideTargetActions_4_loopCount = 0;
obj44951_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj44951: Event droppedInsideTargetActions_3
 *
 */
$("#obj44951").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj44951_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44951_droppedInsideTargetActions_3 is still running");
	return;
}
var obj44951_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj44951_droppedInsideTargetActions_3_loopCount = 0;
obj44951_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj44951: Event droppedInsideTargetActions_2
 *
 */
$("#obj44951").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj44951_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44951_droppedInsideTargetActions_2 is still running");
	return;
}
var obj44951_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj44951_droppedInsideTargetActions_2_loopCount = 0;
obj44951_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj44951: Event droppedInsideTargetActions
 *
 */
$("#obj44951").bind("droppedInsideTargetActions", function(event) {
	if (window.obj44951_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44951_droppedInsideTargetActions is still running");
	return;
}
var obj44951_droppedInsideTargetActions_runningActionsCount = 0;
var obj44951_droppedInsideTargetActions_loopCount = 0;
obj44951_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj44884: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj44884");
	var winTarget = document.getElementById("obj44884");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj44884").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj44884_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj44884_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj44884_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44884_onTouchDown is still running");
	return;
}
var obj44884_onTouchDown_runningActionsCount = 0;
var obj44884_onTouchDown_loopCount = 0;
obj44884_onTouchDown_actionGroup0();
});



/*
 *
 *   obj44884: Event SCActionDragDrop44887_droppedOutsideTargetActions
 *
 */
$("#obj44884").bind("SCActionDragDrop44887_droppedOutsideTargetActions", function(event) {
	if (window.obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44884_SCActionDragDrop44887_droppedOutsideTargetActions is still running");
	return;
}
var obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_runningActionsCount = 0;
var obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_loopCount = 0;
obj44884_SCActionDragDrop44887_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj44884: Event droppedInsideTargetActions_6
 *
 */
$("#obj44884").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj44884_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44884_droppedInsideTargetActions_6 is still running");
	return;
}
var obj44884_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj44884_droppedInsideTargetActions_6_loopCount = 0;
obj44884_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj44884: Event droppedInsideTargetActions_5
 *
 */
$("#obj44884").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj44884_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44884_droppedInsideTargetActions_5 is still running");
	return;
}
var obj44884_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj44884_droppedInsideTargetActions_5_loopCount = 0;
obj44884_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj44884: Event droppedInsideTargetActions_4
 *
 */
$("#obj44884").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj44884_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44884_droppedInsideTargetActions_4 is still running");
	return;
}
var obj44884_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj44884_droppedInsideTargetActions_4_loopCount = 0;
obj44884_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj44884: Event droppedInsideTargetActions_3
 *
 */
$("#obj44884").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj44884_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44884_droppedInsideTargetActions_3 is still running");
	return;
}
var obj44884_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj44884_droppedInsideTargetActions_3_loopCount = 0;
obj44884_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj44884: Event droppedInsideTargetActions_2
 *
 */
$("#obj44884").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj44884_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44884_droppedInsideTargetActions_2 is still running");
	return;
}
var obj44884_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj44884_droppedInsideTargetActions_2_loopCount = 0;
obj44884_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj44884: Event droppedInsideTargetActions
 *
 */
$("#obj44884").bind("droppedInsideTargetActions", function(event) {
	if (window.obj44884_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44884_droppedInsideTargetActions is still running");
	return;
}
var obj44884_droppedInsideTargetActions_runningActionsCount = 0;
var obj44884_droppedInsideTargetActions_loopCount = 0;
obj44884_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj44817: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj44817");
	var winTarget = document.getElementById("obj44817");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj44817").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj44817_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj44817_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj44817_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44817_onTouchDown is still running");
	return;
}
var obj44817_onTouchDown_runningActionsCount = 0;
var obj44817_onTouchDown_loopCount = 0;
obj44817_onTouchDown_actionGroup0();
});



/*
 *
 *   obj44817: Event SCActionDragDrop44820_droppedOutsideTargetActions
 *
 */
$("#obj44817").bind("SCActionDragDrop44820_droppedOutsideTargetActions", function(event) {
	if (window.obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44817_SCActionDragDrop44820_droppedOutsideTargetActions is still running");
	return;
}
var obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_runningActionsCount = 0;
var obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_loopCount = 0;
obj44817_SCActionDragDrop44820_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj44817: Event droppedInsideTargetActions_6
 *
 */
$("#obj44817").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj44817_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44817_droppedInsideTargetActions_6 is still running");
	return;
}
var obj44817_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj44817_droppedInsideTargetActions_6_loopCount = 0;
obj44817_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj44817: Event droppedInsideTargetActions_5
 *
 */
$("#obj44817").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj44817_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44817_droppedInsideTargetActions_5 is still running");
	return;
}
var obj44817_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj44817_droppedInsideTargetActions_5_loopCount = 0;
obj44817_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj44817: Event droppedInsideTargetActions_4
 *
 */
$("#obj44817").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj44817_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44817_droppedInsideTargetActions_4 is still running");
	return;
}
var obj44817_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj44817_droppedInsideTargetActions_4_loopCount = 0;
obj44817_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj44817: Event droppedInsideTargetActions_3
 *
 */
$("#obj44817").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj44817_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44817_droppedInsideTargetActions_3 is still running");
	return;
}
var obj44817_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj44817_droppedInsideTargetActions_3_loopCount = 0;
obj44817_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj44817: Event droppedInsideTargetActions_2
 *
 */
$("#obj44817").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj44817_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44817_droppedInsideTargetActions_2 is still running");
	return;
}
var obj44817_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj44817_droppedInsideTargetActions_2_loopCount = 0;
obj44817_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj44817: Event droppedInsideTargetActions
 *
 */
$("#obj44817").bind("droppedInsideTargetActions", function(event) {
	if (window.obj44817_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44817_droppedInsideTargetActions is still running");
	return;
}
var obj44817_droppedInsideTargetActions_runningActionsCount = 0;
var obj44817_droppedInsideTargetActions_loopCount = 0;
obj44817_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj44750: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj44750");
	var winTarget = document.getElementById("obj44750");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj44750").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj44750_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj44750_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj44750_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44750_onTouchDown is still running");
	return;
}
var obj44750_onTouchDown_runningActionsCount = 0;
var obj44750_onTouchDown_loopCount = 0;
obj44750_onTouchDown_actionGroup0();
});



/*
 *
 *   obj44750: Event SCActionDragDrop44753_droppedOutsideTargetActions
 *
 */
$("#obj44750").bind("SCActionDragDrop44753_droppedOutsideTargetActions", function(event) {
	if (window.obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44750_SCActionDragDrop44753_droppedOutsideTargetActions is still running");
	return;
}
var obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_runningActionsCount = 0;
var obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_loopCount = 0;
obj44750_SCActionDragDrop44753_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj44750: Event droppedInsideTargetActions_6
 *
 */
$("#obj44750").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj44750_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44750_droppedInsideTargetActions_6 is still running");
	return;
}
var obj44750_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj44750_droppedInsideTargetActions_6_loopCount = 0;
obj44750_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj44750: Event droppedInsideTargetActions_5
 *
 */
$("#obj44750").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj44750_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44750_droppedInsideTargetActions_5 is still running");
	return;
}
var obj44750_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj44750_droppedInsideTargetActions_5_loopCount = 0;
obj44750_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj44750: Event droppedInsideTargetActions_4
 *
 */
$("#obj44750").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj44750_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44750_droppedInsideTargetActions_4 is still running");
	return;
}
var obj44750_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj44750_droppedInsideTargetActions_4_loopCount = 0;
obj44750_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj44750: Event droppedInsideTargetActions_3
 *
 */
$("#obj44750").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj44750_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44750_droppedInsideTargetActions_3 is still running");
	return;
}
var obj44750_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj44750_droppedInsideTargetActions_3_loopCount = 0;
obj44750_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj44750: Event droppedInsideTargetActions_2
 *
 */
$("#obj44750").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj44750_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44750_droppedInsideTargetActions_2 is still running");
	return;
}
var obj44750_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj44750_droppedInsideTargetActions_2_loopCount = 0;
obj44750_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj44750: Event droppedInsideTargetActions
 *
 */
$("#obj44750").bind("droppedInsideTargetActions", function(event) {
	if (window.obj44750_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44750_droppedInsideTargetActions is still running");
	return;
}
var obj44750_droppedInsideTargetActions_runningActionsCount = 0;
var obj44750_droppedInsideTargetActions_loopCount = 0;
obj44750_droppedInsideTargetActions_actionGroup0();
});















/*
 *
 *   obj67438: Event Touch Down
 *
 */
$("#obj67438").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67438_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67438_onTap is still running");
	return;
}
var obj67438_onTap_runningActionsCount = 0;
var obj67438_onTap_loopCount = 0;
obj67438_onTap_actionGroup0();
});










/*
 *
 *   obj67430: Event Touch Down
 *
 */
$("#obj67430").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67430_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67430_onTap is still running");
	return;
}
var obj67430_onTap_runningActionsCount = 0;
var obj67430_onTap_loopCount = 0;
obj67430_onTap_actionGroup0();
});










/*
 *
 *   obj88705: Event Touch Down
 *
 */
$("#obj88705").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88705_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88705_onTap is still running");
	return;
}
var obj88705_onTap_runningActionsCount = 0;
var obj88705_onTap_loopCount = 0;
obj88705_onTap_actionGroup0();
});










/*
 *
 *   obj88700: Event Touch Down
 *
 */
$("#obj88700").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88700_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88700_onTap is still running");
	return;
}
var obj88700_onTap_runningActionsCount = 0;
var obj88700_onTap_loopCount = 0;
obj88700_onTap_actionGroup0();
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
	
$("#obj45229").trigger('SCEventShow');
$("#obj45213").trigger('SCEventShow');
$("#obj45210").trigger('SCEventShow');
$("#obj45206").trigger('SCEventShow');
$("#obj45204").trigger('SCEventShow');
$("#obj45202").trigger('SCEventShow');
$("#obj45200").trigger('SCEventShow');
$("#obj45198").trigger('SCEventShow');
$("#obj45196").trigger('SCEventShow');
$("#obj45194").trigger('SCEventShow');
$("#obj45192").trigger('SCEventShow');
$("#obj45190").trigger('SCEventShow');
$("#obj45188").trigger('SCEventShow');
$("#obj45186").trigger('SCEventShow');
$("#obj45184").trigger('SCEventShow');
$("#obj45182").trigger('SCEventShow');
$("#obj45180").trigger('SCEventShow');
$("#obj45178").trigger('SCEventShow');
$("#obj45164").trigger('SCEventShow');
$("#obj45162").trigger('SCEventShow');
$("#obj45160").trigger('SCEventShow');
$("#obj45158").trigger('SCEventShow');
$("#obj45156").trigger('SCEventShow');
$("#obj45089").trigger('SCEventShow');
$("#obj45018").trigger('SCEventShow');
$("#obj44951").trigger('SCEventShow');
$("#obj44884").trigger('SCEventShow');
$("#obj44817").trigger('SCEventShow');
$("#obj44750").trigger('SCEventShow');
$("#obj45231").trigger('SCEventShow');
$("#obj67438").trigger('SCEventShow');
$("#obj67430").trigger('SCEventShow');
$("#obj88705").trigger('SCEventShow');
$("#obj88700").trigger('SCEventShow');
$("#obj88710").trigger('SCEventShow');
$("#obj94933").trigger('SCEventShow');
$("#obj67444").trigger('SCEventShow');
	
});