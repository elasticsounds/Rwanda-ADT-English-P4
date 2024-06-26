pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 25669;
pubcoder.page.title = pubcoder.page.title || "101";
pubcoder.page.number = pubcoder.page.number || 101;
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
var obj81228_onTap_activeActionGroupIndex = -1;
var obj81228_onTap_runningActionsCount = 0;
var obj81228_onTap_loopCount = 0;
var obj81225_onTap_activeActionGroupIndex = -1;
var obj81225_onTap_runningActionsCount = 0;
var obj81225_onTap_loopCount = 0;
var obj81221_onTap_activeActionGroupIndex = -1;
var obj81221_onTap_runningActionsCount = 0;
var obj81221_onTap_loopCount = 0;
var obj81104_onDrag_activeActionGroupIndex = -1;
var obj81104_onDrag_runningActionsCount = 0;
var obj81104_onDrag_loopCount = 0;
var obj81104_onTouchDown_activeActionGroupIndex = -1;
var obj81104_onTouchDown_runningActionsCount = 0;
var obj81104_onTouchDown_loopCount = 0;
var obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_runningActionsCount = 0;
var obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_loopCount = 0;
var obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj81104_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj81104_droppedInsideTargetActions_6_loopCount = 0;
var obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj81104_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj81104_droppedInsideTargetActions_5_loopCount = 0;
var obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj81104_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj81104_droppedInsideTargetActions_4_loopCount = 0;
var obj81104_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj81104_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj81104_droppedInsideTargetActions_3_loopCount = 0;
var obj81104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj81104_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj81104_droppedInsideTargetActions_2_loopCount = 0;
var obj81104_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj81104_droppedInsideTargetActions_runningActionsCount = 0;
var obj81104_droppedInsideTargetActions_loopCount = 0;
var obj81033_onDrag_activeActionGroupIndex = -1;
var obj81033_onDrag_runningActionsCount = 0;
var obj81033_onDrag_loopCount = 0;
var obj81033_onTouchDown_activeActionGroupIndex = -1;
var obj81033_onTouchDown_runningActionsCount = 0;
var obj81033_onTouchDown_loopCount = 0;
var obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_runningActionsCount = 0;
var obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_loopCount = 0;
var obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj81033_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj81033_droppedInsideTargetActions_6_loopCount = 0;
var obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj81033_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj81033_droppedInsideTargetActions_5_loopCount = 0;
var obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj81033_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj81033_droppedInsideTargetActions_4_loopCount = 0;
var obj81033_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj81033_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj81033_droppedInsideTargetActions_3_loopCount = 0;
var obj81033_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj81033_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj81033_droppedInsideTargetActions_2_loopCount = 0;
var obj81033_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj81033_droppedInsideTargetActions_runningActionsCount = 0;
var obj81033_droppedInsideTargetActions_loopCount = 0;
var obj80966_onDrag_activeActionGroupIndex = -1;
var obj80966_onDrag_runningActionsCount = 0;
var obj80966_onDrag_loopCount = 0;
var obj80966_onTouchDown_activeActionGroupIndex = -1;
var obj80966_onTouchDown_runningActionsCount = 0;
var obj80966_onTouchDown_loopCount = 0;
var obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_loopCount = 0;
var obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj80966_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj80966_droppedInsideTargetActions_6_loopCount = 0;
var obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj80966_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj80966_droppedInsideTargetActions_5_loopCount = 0;
var obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj80966_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj80966_droppedInsideTargetActions_4_loopCount = 0;
var obj80966_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj80966_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj80966_droppedInsideTargetActions_3_loopCount = 0;
var obj80966_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj80966_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj80966_droppedInsideTargetActions_2_loopCount = 0;
var obj80966_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj80966_droppedInsideTargetActions_runningActionsCount = 0;
var obj80966_droppedInsideTargetActions_loopCount = 0;
var obj80899_onDrag_activeActionGroupIndex = -1;
var obj80899_onDrag_runningActionsCount = 0;
var obj80899_onDrag_loopCount = 0;
var obj80899_onTouchDown_activeActionGroupIndex = -1;
var obj80899_onTouchDown_runningActionsCount = 0;
var obj80899_onTouchDown_loopCount = 0;
var obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_loopCount = 0;
var obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj80899_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj80899_droppedInsideTargetActions_6_loopCount = 0;
var obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj80899_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj80899_droppedInsideTargetActions_5_loopCount = 0;
var obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj80899_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj80899_droppedInsideTargetActions_4_loopCount = 0;
var obj80899_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj80899_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj80899_droppedInsideTargetActions_3_loopCount = 0;
var obj80899_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj80899_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj80899_droppedInsideTargetActions_2_loopCount = 0;
var obj80899_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj80899_droppedInsideTargetActions_runningActionsCount = 0;
var obj80899_droppedInsideTargetActions_loopCount = 0;
var obj80832_onDrag_activeActionGroupIndex = -1;
var obj80832_onDrag_runningActionsCount = 0;
var obj80832_onDrag_loopCount = 0;
var obj80832_onTouchDown_activeActionGroupIndex = -1;
var obj80832_onTouchDown_runningActionsCount = 0;
var obj80832_onTouchDown_loopCount = 0;
var obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_loopCount = 0;
var obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj80832_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj80832_droppedInsideTargetActions_6_loopCount = 0;
var obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj80832_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj80832_droppedInsideTargetActions_5_loopCount = 0;
var obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj80832_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj80832_droppedInsideTargetActions_4_loopCount = 0;
var obj80832_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj80832_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj80832_droppedInsideTargetActions_3_loopCount = 0;
var obj80832_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj80832_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj80832_droppedInsideTargetActions_2_loopCount = 0;
var obj80832_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj80832_droppedInsideTargetActions_runningActionsCount = 0;
var obj80832_droppedInsideTargetActions_loopCount = 0;
var obj80765_onDrag_activeActionGroupIndex = -1;
var obj80765_onDrag_runningActionsCount = 0;
var obj80765_onDrag_loopCount = 0;
var obj80765_onTouchDown_activeActionGroupIndex = -1;
var obj80765_onTouchDown_runningActionsCount = 0;
var obj80765_onTouchDown_loopCount = 0;
var obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_loopCount = 0;
var obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj80765_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj80765_droppedInsideTargetActions_6_loopCount = 0;
var obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj80765_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj80765_droppedInsideTargetActions_5_loopCount = 0;
var obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj80765_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj80765_droppedInsideTargetActions_4_loopCount = 0;
var obj80765_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj80765_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj80765_droppedInsideTargetActions_3_loopCount = 0;
var obj80765_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj80765_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj80765_droppedInsideTargetActions_2_loopCount = 0;
var obj80765_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj80765_droppedInsideTargetActions_runningActionsCount = 0;
var obj80765_droppedInsideTargetActions_loopCount = 0;
var obj80747_onTap_activeActionGroupIndex = -1;
var obj80747_onTap_runningActionsCount = 0;
var obj80747_onTap_loopCount = 0;
var obj80739_onTap_activeActionGroupIndex = -1;
var obj80739_onTap_runningActionsCount = 0;
var obj80739_onTap_loopCount = 0;
var obj88081_onTap_activeActionGroupIndex = -1;
var obj88081_onTap_runningActionsCount = 0;
var obj88081_onTap_loopCount = 0;
var obj88076_onTap_activeActionGroupIndex = -1;
var obj88076_onTap_runningActionsCount = 0;
var obj88076_onTap_loopCount = 0;
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
		
obj81228_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81228_onTap_activeActionGroupIndex = -1;
		$("#obj81228").trigger("obj81228_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81228) {
				console.warn("de-queueing event obj81228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81228_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_81230();
function goToPage_81230() {
	window.obj81228_onTap_runningActionsCount = obj81228_onTap_runningActionsCount + 1;
	$("#anchor599")[0].click();
	window.obj81228_onTap_runningActionsCount = window.obj81228_onTap_runningActionsCount - 1;
if (window.obj81228_onTap_runningActionsCount < 0) {
	window.obj81228_onTap_runningActionsCount = 0;
} else if (window.obj81228_onTap_runningActionsCount == 0) {
	obj81228_onTap_actionGroup1();
}
}





















};
obj81228_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81228_onTap_activeActionGroupIndex = -1;
		$("#obj81228").trigger("obj81228_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81228) {
				console.warn("de-queueing event obj81228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81228_onTap_activeActionGroupIndex = 1;
	





















};
obj81225_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81225_onTap_activeActionGroupIndex = -1;
		$("#obj81225").trigger("obj81225_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81225) {
				console.warn("de-queueing event obj81225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81225_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_81227();
function goToPage_81227() {
	window.obj81225_onTap_runningActionsCount = obj81225_onTap_runningActionsCount + 1;
	$("#anchor600")[0].click();
	window.obj81225_onTap_runningActionsCount = window.obj81225_onTap_runningActionsCount - 1;
if (window.obj81225_onTap_runningActionsCount < 0) {
	window.obj81225_onTap_runningActionsCount = 0;
} else if (window.obj81225_onTap_runningActionsCount == 0) {
	obj81225_onTap_actionGroup1();
}
}





















};
obj81225_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81225_onTap_activeActionGroupIndex = -1;
		$("#obj81225").trigger("obj81225_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81225) {
				console.warn("de-queueing event obj81225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81225_onTap_activeActionGroupIndex = 1;
	





















};
obj81221_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81221_onTap_activeActionGroupIndex = -1;
		$("#obj81221").trigger("obj81221_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81221) {
				console.warn("de-queueing event obj81221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81221_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_81223();
function goToPage_81223() {
	window.obj81221_onTap_runningActionsCount = obj81221_onTap_runningActionsCount + 1;
	$("#anchor601")[0].click();
	window.obj81221_onTap_runningActionsCount = window.obj81221_onTap_runningActionsCount - 1;
if (window.obj81221_onTap_runningActionsCount < 0) {
	window.obj81221_onTap_runningActionsCount = 0;
} else if (window.obj81221_onTap_runningActionsCount == 0) {
	obj81221_onTap_actionGroup1();
}
}





















};
obj81221_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81221_onTap_activeActionGroupIndex = -1;
		$("#obj81221").trigger("obj81221_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81221) {
				console.warn("de-queueing event obj81221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81221_onTap_activeActionGroupIndex = 1;
	





















};
obj81104_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_onTouchDown_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj81104");
//	action: dragDrop
//	target: obj81104 
dragDrop_81107();
function dragDrop_81107() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj81104_onTouchDown_runningActionsCount = obj81104_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj81104');
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
	  	containerNode = $('#obj81213');
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
    	window.obj81104_onTouchDown_runningActionsCount = window.obj81104_onTouchDown_runningActionsCount - 1;
if (window.obj81104_onTouchDown_runningActionsCount < 0) {
	window.obj81104_onTouchDown_runningActionsCount = 0;
} else if (window.obj81104_onTouchDown_runningActionsCount == 0) {
	obj81104_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj81203","#obj81199","#obj81195","#obj81205","#obj81201","#obj81197");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_81107 = false;
    	var dropped_id_81107;
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
					dropped_81107 = true;
					dropped_id_81107 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_81107) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj81104").trigger('SCActionDragDrop81107_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj81104_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81104_onTouchDown_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj81104 
move_92421();
function move_92421() {
	window.obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_runningActionsCount = obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj81104");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 111;
	var moveY = 537;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_runningActionsCount = window.obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj81104_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81158();
function runjs_81158() {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = obj81104_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81197").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_6_runningActionsCount = window.obj81104_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81159();
function runjs_81159() {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = obj81104_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81197").css("border-color", "#C00000"); $("#obj81197").css("border-width", "2px"); $("#obj81197").css("border-style", "solid"); $("#obj81197").css("border-radius", "10px"); $("#obj81197").css("-webkit-border-radius", "10px"); $("#obj81197").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_6_runningActionsCount = window.obj81104_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81183 
hide_81160();
function hide_81160() {
	var selector = "#obj81183";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = obj81104_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81104_droppedInsideTargetActions_6_runningActionsCount = window.obj81104_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81160(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81104_droppedInsideTargetActions_6_runningActionsCount = window.obj81104_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_6_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81104_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81161();
function runjs_81161() {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = obj81104_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81104").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_6_runningActionsCount = window.obj81104_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_6_actionGroup4();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81162();
function switchText_81162() {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = obj81104_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81104_droppedInsideTargetActions_6_runningActionsCount = window.obj81104_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_6_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81104_droppedInsideTargetActions_6_runningActionsCount = window.obj81104_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	}
}






};
obj81104_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81104 
move_81163();
function move_81163() {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = obj81104_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj81104");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 111;
	var moveY = 537;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81104_droppedInsideTargetActions_6_runningActionsCount = window.obj81104_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_6_actionGroup6();
}
		}, 1);
	});
}



















};
obj81104_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81164();
function runjs_81164() {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = obj81104_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81197").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_6_runningActionsCount = window.obj81104_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81165();
function runjs_81165() {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = obj81104_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81197").css("border-color", "#000000"); $("#obj81197").css("border-width", "1px"); $("#obj81197").css("border-style", "solid"); $("#obj81197").css("border-radius", "0px"); $("#obj81197").css("-webkit-border-radius", "0px"); $("#obj81197").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_6_runningActionsCount = window.obj81104_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81183
(function(){
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = obj81104_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj81183";
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
					window.obj81104_droppedInsideTargetActions_6_runningActionsCount = window.obj81104_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_6_actionGroup9();
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
				window.obj81104_droppedInsideTargetActions_6_runningActionsCount = window.obj81104_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_6_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81104_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81167();
function runjs_81167() {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = obj81104_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81104").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_6_runningActionsCount = window.obj81104_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_6_actionGroup10();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81168();
function runjs_81168() {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = obj81104_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81104").css("border-color", "rgba(0,0,0,0)"); $("#obj81104").css("border-width", "0px"); $("#obj81104").css("border-style", "solid"); $("#obj81104").css("border-radius", "10px"); $("#obj81104").css("-webkit-border-radius", "10px"); $("#obj81104").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_6_runningActionsCount = window.obj81104_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_6_actionGroup11();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_6_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81171 
playAudio_81169();
function playAudio_81169() {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = obj81104_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj81171")[0];
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
		    window.obj81104_droppedInsideTargetActions_6_runningActionsCount = window.obj81104_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_6_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81104_droppedInsideTargetActions_6_runningActionsCount = window.obj81104_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_6_actionGroup12();
}
	}
}









};
obj81104_droppedInsideTargetActions_6_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81170();
function switchText_81170() {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = obj81104_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81104_droppedInsideTargetActions_6_runningActionsCount = window.obj81104_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_6_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81104_droppedInsideTargetActions_6_runningActionsCount = window.obj81104_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_6_actionGroup13();
}
		}, 1);
	}
}






};
obj81104_droppedInsideTargetActions_6_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex = 13;
	





















};
obj81104_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81144();
function runjs_81144() {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = obj81104_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81201").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_5_runningActionsCount = window.obj81104_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81145();
function runjs_81145() {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = obj81104_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81201").css("border-color", "#C00000"); $("#obj81201").css("border-width", "2px"); $("#obj81201").css("border-style", "solid"); $("#obj81201").css("border-radius", "10px"); $("#obj81201").css("-webkit-border-radius", "10px"); $("#obj81201").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_5_runningActionsCount = window.obj81104_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81187 
hide_81146();
function hide_81146() {
	var selector = "#obj81187";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = obj81104_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81104_droppedInsideTargetActions_5_runningActionsCount = window.obj81104_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81146(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81104_droppedInsideTargetActions_5_runningActionsCount = window.obj81104_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81104_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81147();
function runjs_81147() {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = obj81104_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81104").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_5_runningActionsCount = window.obj81104_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81148();
function switchText_81148() {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = obj81104_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81104_droppedInsideTargetActions_5_runningActionsCount = window.obj81104_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81104_droppedInsideTargetActions_5_runningActionsCount = window.obj81104_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj81104_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81104 
move_81149();
function move_81149() {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = obj81104_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj81104");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 111;
	var moveY = 537;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81104_droppedInsideTargetActions_5_runningActionsCount = window.obj81104_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj81104_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81150();
function runjs_81150() {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = obj81104_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81201").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_5_runningActionsCount = window.obj81104_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81151();
function runjs_81151() {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = obj81104_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81201").css("border-color", "#000000"); $("#obj81201").css("border-width", "1px"); $("#obj81201").css("border-style", "solid"); $("#obj81201").css("border-radius", "0px"); $("#obj81201").css("-webkit-border-radius", "0px"); $("#obj81201").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_5_runningActionsCount = window.obj81104_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81187
(function(){
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = obj81104_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj81187";
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
					window.obj81104_droppedInsideTargetActions_5_runningActionsCount = window.obj81104_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj81104_droppedInsideTargetActions_5_runningActionsCount = window.obj81104_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81104_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81153();
function runjs_81153() {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = obj81104_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81104").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_5_runningActionsCount = window.obj81104_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81154();
function runjs_81154() {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = obj81104_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81104").css("border-color", "rgba(0,0,0,0)"); $("#obj81104").css("border-width", "0px"); $("#obj81104").css("border-style", "solid"); $("#obj81104").css("border-radius", "10px"); $("#obj81104").css("-webkit-border-radius", "10px"); $("#obj81104").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_5_runningActionsCount = window.obj81104_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81171 
playAudio_81155();
function playAudio_81155() {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = obj81104_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj81171")[0];
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
		    window.obj81104_droppedInsideTargetActions_5_runningActionsCount = window.obj81104_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81104_droppedInsideTargetActions_5_runningActionsCount = window.obj81104_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj81104_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81156();
function switchText_81156() {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = obj81104_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81104_droppedInsideTargetActions_5_runningActionsCount = window.obj81104_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81104_droppedInsideTargetActions_5_runningActionsCount = window.obj81104_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj81104_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj81104_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81130();
function runjs_81130() {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = obj81104_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81205").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_4_runningActionsCount = window.obj81104_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81131();
function runjs_81131() {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = obj81104_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81205").css("border-color", "#C00000"); $("#obj81205").css("border-width", "2px"); $("#obj81205").css("border-style", "solid"); $("#obj81205").css("border-radius", "10px"); $("#obj81205").css("-webkit-border-radius", "10px"); $("#obj81205").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_4_runningActionsCount = window.obj81104_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81191 
hide_81132();
function hide_81132() {
	var selector = "#obj81191";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = obj81104_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81104_droppedInsideTargetActions_4_runningActionsCount = window.obj81104_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81132(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81104_droppedInsideTargetActions_4_runningActionsCount = window.obj81104_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81104_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81133();
function runjs_81133() {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = obj81104_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81104").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_4_runningActionsCount = window.obj81104_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81134();
function switchText_81134() {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = obj81104_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81104_droppedInsideTargetActions_4_runningActionsCount = window.obj81104_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81104_droppedInsideTargetActions_4_runningActionsCount = window.obj81104_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj81104_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81104 
move_81135();
function move_81135() {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = obj81104_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj81104");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 111;
	var moveY = 537;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81104_droppedInsideTargetActions_4_runningActionsCount = window.obj81104_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj81104_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81136();
function runjs_81136() {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = obj81104_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81205").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_4_runningActionsCount = window.obj81104_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81137();
function runjs_81137() {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = obj81104_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81205").css("border-color", "#000000"); $("#obj81205").css("border-width", "1px"); $("#obj81205").css("border-style", "solid"); $("#obj81205").css("border-radius", "0px"); $("#obj81205").css("-webkit-border-radius", "0px"); $("#obj81205").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_4_runningActionsCount = window.obj81104_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81191
(function(){
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = obj81104_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj81191";
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
					window.obj81104_droppedInsideTargetActions_4_runningActionsCount = window.obj81104_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj81104_droppedInsideTargetActions_4_runningActionsCount = window.obj81104_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81104_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81139();
function runjs_81139() {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = obj81104_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81104").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_4_runningActionsCount = window.obj81104_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81140();
function runjs_81140() {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = obj81104_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81104").css("border-color", "rgba(0,0,0,0)"); $("#obj81104").css("border-width", "0px"); $("#obj81104").css("border-style", "solid"); $("#obj81104").css("border-radius", "10px"); $("#obj81104").css("-webkit-border-radius", "10px"); $("#obj81104").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_4_runningActionsCount = window.obj81104_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81171 
playAudio_81141();
function playAudio_81141() {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = obj81104_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj81171")[0];
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
		    window.obj81104_droppedInsideTargetActions_4_runningActionsCount = window.obj81104_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81104_droppedInsideTargetActions_4_runningActionsCount = window.obj81104_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj81104_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81142();
function switchText_81142() {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = obj81104_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81104_droppedInsideTargetActions_4_runningActionsCount = window.obj81104_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81104_droppedInsideTargetActions_4_runningActionsCount = window.obj81104_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj81104_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj81104_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81123();
function runjs_81123() {
	window.obj81104_droppedInsideTargetActions_3_runningActionsCount = obj81104_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81195").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_3_runningActionsCount = window.obj81104_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_81127();
function switchText_81127() {
	window.obj81104_droppedInsideTargetActions_3_runningActionsCount = obj81104_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81104_droppedInsideTargetActions_3_runningActionsCount = window.obj81104_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81104_droppedInsideTargetActions_3_runningActionsCount = window.obj81104_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj81104_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_81124();
function runjs_81124() {
	window.obj81104_droppedInsideTargetActions_3_runningActionsCount = obj81104_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81195").css("border-color", "#058E3F"); $("#obj81195").css("border-width", "2px"); $("#obj81195").css("border-style", "solid"); $("#obj81195").css("border-radius", "10px"); $("#obj81195").css("-webkit-border-radius", "10px"); $("#obj81195").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_3_runningActionsCount = window.obj81104_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81181 
hide_81125();
function hide_81125() {
	var selector = "#obj81181";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81104_droppedInsideTargetActions_3_runningActionsCount = obj81104_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81104_droppedInsideTargetActions_3_runningActionsCount = window.obj81104_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81125(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81104_droppedInsideTargetActions_3_runningActionsCount = window.obj81104_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81104_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_81126();
function runjs_81126() {
	window.obj81104_droppedInsideTargetActions_3_runningActionsCount = obj81104_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81104").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_3_runningActionsCount = window.obj81104_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81173 
playAudio_81128();
function playAudio_81128() {
	window.obj81104_droppedInsideTargetActions_3_runningActionsCount = obj81104_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj81173")[0];
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
		    window.obj81104_droppedInsideTargetActions_3_runningActionsCount = window.obj81104_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81104_droppedInsideTargetActions_3_runningActionsCount = window.obj81104_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_3_actionGroup6();
}
	}
}









};
obj81104_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90336();
function switchText_90336() {
	window.obj81104_droppedInsideTargetActions_3_runningActionsCount = obj81104_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81104_droppedInsideTargetActions_3_runningActionsCount = window.obj81104_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81104_droppedInsideTargetActions_3_runningActionsCount = window.obj81104_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj81104_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	





















};
obj81104_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81116();
function runjs_81116() {
	window.obj81104_droppedInsideTargetActions_2_runningActionsCount = obj81104_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81199").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_2_runningActionsCount = window.obj81104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_81120();
function switchText_81120() {
	window.obj81104_droppedInsideTargetActions_2_runningActionsCount = obj81104_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81104_droppedInsideTargetActions_2_runningActionsCount = window.obj81104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81104_droppedInsideTargetActions_2_runningActionsCount = window.obj81104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj81104_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_81117();
function runjs_81117() {
	window.obj81104_droppedInsideTargetActions_2_runningActionsCount = obj81104_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81199").css("border-color", "#058E3F"); $("#obj81199").css("border-width", "2px"); $("#obj81199").css("border-style", "solid"); $("#obj81199").css("border-radius", "10px"); $("#obj81199").css("-webkit-border-radius", "10px"); $("#obj81199").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_2_runningActionsCount = window.obj81104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81185 
hide_81118();
function hide_81118() {
	var selector = "#obj81185";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81104_droppedInsideTargetActions_2_runningActionsCount = obj81104_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81104_droppedInsideTargetActions_2_runningActionsCount = window.obj81104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81118(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81104_droppedInsideTargetActions_2_runningActionsCount = window.obj81104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81104_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_81119();
function runjs_81119() {
	window.obj81104_droppedInsideTargetActions_2_runningActionsCount = obj81104_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81104").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_2_runningActionsCount = window.obj81104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81173 
playAudio_81121();
function playAudio_81121() {
	window.obj81104_droppedInsideTargetActions_2_runningActionsCount = obj81104_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj81173")[0];
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
		    window.obj81104_droppedInsideTargetActions_2_runningActionsCount = window.obj81104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81104_droppedInsideTargetActions_2_runningActionsCount = window.obj81104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj81104_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90335();
function switchText_90335() {
	window.obj81104_droppedInsideTargetActions_2_runningActionsCount = obj81104_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81104_droppedInsideTargetActions_2_runningActionsCount = window.obj81104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81104_droppedInsideTargetActions_2_runningActionsCount = window.obj81104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj81104_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	





















};
obj81104_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81109();
function runjs_81109() {
	window.obj81104_droppedInsideTargetActions_runningActionsCount = obj81104_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81203").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_runningActionsCount = window.obj81104_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_81113();
function switchText_81113() {
	window.obj81104_droppedInsideTargetActions_runningActionsCount = obj81104_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81104_droppedInsideTargetActions_runningActionsCount = window.obj81104_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81104_droppedInsideTargetActions_runningActionsCount = window.obj81104_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj81104_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_81110();
function runjs_81110() {
	window.obj81104_droppedInsideTargetActions_runningActionsCount = obj81104_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81203").css("border-color", "#058E3F"); $("#obj81203").css("border-width", "2px"); $("#obj81203").css("border-style", "solid"); $("#obj81203").css("border-radius", "10px"); $("#obj81203").css("-webkit-border-radius", "10px"); $("#obj81203").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_runningActionsCount = window.obj81104_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81189 
hide_81111();
function hide_81111() {
	var selector = "#obj81189";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81104_droppedInsideTargetActions_runningActionsCount = obj81104_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81104_droppedInsideTargetActions_runningActionsCount = window.obj81104_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81111(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81104_droppedInsideTargetActions_runningActionsCount = window.obj81104_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81104_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_81112();
function runjs_81112() {
	window.obj81104_droppedInsideTargetActions_runningActionsCount = obj81104_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81104").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81104_droppedInsideTargetActions_runningActionsCount = window.obj81104_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj81104_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81173 
playAudio_81114();
function playAudio_81114() {
	window.obj81104_droppedInsideTargetActions_runningActionsCount = obj81104_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj81173")[0];
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
		    window.obj81104_droppedInsideTargetActions_runningActionsCount = window.obj81104_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81104_droppedInsideTargetActions_runningActionsCount = window.obj81104_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj81104_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90334();
function switchText_90334() {
	window.obj81104_droppedInsideTargetActions_runningActionsCount = obj81104_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81104_droppedInsideTargetActions_runningActionsCount = window.obj81104_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81104_droppedInsideTargetActions_runningActionsCount = window.obj81104_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81104_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81104_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81104_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81104_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj81104_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81104_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81104").trigger("obj81104_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81104) {
				console.warn("de-queueing event obj81104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81104_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj81033_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_onTouchDown_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj81033");
//	action: dragDrop
//	target: obj81033 
dragDrop_81036();
function dragDrop_81036() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj81033_onTouchDown_runningActionsCount = obj81033_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj81033');
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
	  	containerNode = $('#obj81213');
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
    	window.obj81033_onTouchDown_runningActionsCount = window.obj81033_onTouchDown_runningActionsCount - 1;
if (window.obj81033_onTouchDown_runningActionsCount < 0) {
	window.obj81033_onTouchDown_runningActionsCount = 0;
} else if (window.obj81033_onTouchDown_runningActionsCount == 0) {
	obj81033_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj81205","#obj81201","#obj81197","#obj81203","#obj81199","#obj81195");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_81036 = false;
    	var dropped_id_81036;
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
					dropped_81036 = true;
					dropped_id_81036 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_81036) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj81033").trigger('SCActionDragDrop81036_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj81033_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81033_onTouchDown_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj81033 
move_92425();
function move_92425() {
	window.obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_runningActionsCount = obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj81033");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 111;
	var moveY = 595;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_runningActionsCount = window.obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj81033_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81087();
function runjs_81087() {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = obj81033_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81195").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_6_runningActionsCount = window.obj81033_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81088();
function runjs_81088() {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = obj81033_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81195").css("border-color", "#C00000"); $("#obj81195").css("border-width", "2px"); $("#obj81195").css("border-style", "solid"); $("#obj81195").css("border-radius", "10px"); $("#obj81195").css("-webkit-border-radius", "10px"); $("#obj81195").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_6_runningActionsCount = window.obj81033_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81181 
hide_81089();
function hide_81089() {
	var selector = "#obj81181";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = obj81033_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81033_droppedInsideTargetActions_6_runningActionsCount = window.obj81033_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81089(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81033_droppedInsideTargetActions_6_runningActionsCount = window.obj81033_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_6_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81033_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81090();
function runjs_81090() {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = obj81033_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81033").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_6_runningActionsCount = window.obj81033_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_6_actionGroup4();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81091();
function switchText_81091() {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = obj81033_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81033_droppedInsideTargetActions_6_runningActionsCount = window.obj81033_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_6_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81033_droppedInsideTargetActions_6_runningActionsCount = window.obj81033_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	}
}






};
obj81033_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81033 
move_81092();
function move_81092() {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = obj81033_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj81033");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 111;
	var moveY = 595;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81033_droppedInsideTargetActions_6_runningActionsCount = window.obj81033_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_6_actionGroup6();
}
		}, 1);
	});
}



















};
obj81033_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81093();
function runjs_81093() {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = obj81033_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81195").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_6_runningActionsCount = window.obj81033_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81094();
function runjs_81094() {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = obj81033_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81195").css("border-color", "#000000"); $("#obj81195").css("border-width", "1px"); $("#obj81195").css("border-style", "solid"); $("#obj81195").css("border-radius", "0px"); $("#obj81195").css("-webkit-border-radius", "0px"); $("#obj81195").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_6_runningActionsCount = window.obj81033_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81181
(function(){
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = obj81033_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj81181";
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
					window.obj81033_droppedInsideTargetActions_6_runningActionsCount = window.obj81033_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_6_actionGroup9();
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
				window.obj81033_droppedInsideTargetActions_6_runningActionsCount = window.obj81033_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_6_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81033_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81096();
function runjs_81096() {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = obj81033_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81033").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_6_runningActionsCount = window.obj81033_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_6_actionGroup10();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81097();
function runjs_81097() {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = obj81033_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81033").css("border-color", "rgba(0,0,0,0)"); $("#obj81033").css("border-width", "0px"); $("#obj81033").css("border-style", "solid"); $("#obj81033").css("border-radius", "10px"); $("#obj81033").css("-webkit-border-radius", "10px"); $("#obj81033").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_6_runningActionsCount = window.obj81033_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_6_actionGroup11();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_6_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81171 
playAudio_81098();
function playAudio_81098() {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = obj81033_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj81171")[0];
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
		    window.obj81033_droppedInsideTargetActions_6_runningActionsCount = window.obj81033_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_6_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81033_droppedInsideTargetActions_6_runningActionsCount = window.obj81033_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_6_actionGroup12();
}
	}
}









};
obj81033_droppedInsideTargetActions_6_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81099();
function switchText_81099() {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = obj81033_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81033_droppedInsideTargetActions_6_runningActionsCount = window.obj81033_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_6_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81033_droppedInsideTargetActions_6_runningActionsCount = window.obj81033_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_6_actionGroup13();
}
		}, 1);
	}
}






};
obj81033_droppedInsideTargetActions_6_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex = 13;
	





















};
obj81033_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81073();
function runjs_81073() {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = obj81033_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81199").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_5_runningActionsCount = window.obj81033_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81074();
function runjs_81074() {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = obj81033_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81199").css("border-color", "#C00000"); $("#obj81199").css("border-width", "2px"); $("#obj81199").css("border-style", "solid"); $("#obj81199").css("border-radius", "10px"); $("#obj81199").css("-webkit-border-radius", "10px"); $("#obj81199").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_5_runningActionsCount = window.obj81033_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81185 
hide_81075();
function hide_81075() {
	var selector = "#obj81185";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = obj81033_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81033_droppedInsideTargetActions_5_runningActionsCount = window.obj81033_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81075(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81033_droppedInsideTargetActions_5_runningActionsCount = window.obj81033_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81033_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81076();
function runjs_81076() {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = obj81033_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81033").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_5_runningActionsCount = window.obj81033_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81077();
function switchText_81077() {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = obj81033_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81033_droppedInsideTargetActions_5_runningActionsCount = window.obj81033_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81033_droppedInsideTargetActions_5_runningActionsCount = window.obj81033_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj81033_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81033 
move_81078();
function move_81078() {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = obj81033_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj81033");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 111;
	var moveY = 595;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81033_droppedInsideTargetActions_5_runningActionsCount = window.obj81033_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj81033_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81079();
function runjs_81079() {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = obj81033_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81199").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_5_runningActionsCount = window.obj81033_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81080();
function runjs_81080() {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = obj81033_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81199").css("border-color", "#000000"); $("#obj81199").css("border-width", "1px"); $("#obj81199").css("border-style", "solid"); $("#obj81199").css("border-radius", "0px"); $("#obj81199").css("-webkit-border-radius", "0px"); $("#obj81199").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_5_runningActionsCount = window.obj81033_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81185
(function(){
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = obj81033_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj81185";
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
					window.obj81033_droppedInsideTargetActions_5_runningActionsCount = window.obj81033_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj81033_droppedInsideTargetActions_5_runningActionsCount = window.obj81033_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81033_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81082();
function runjs_81082() {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = obj81033_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81033").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_5_runningActionsCount = window.obj81033_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81083();
function runjs_81083() {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = obj81033_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81033").css("border-color", "rgba(0,0,0,0)"); $("#obj81033").css("border-width", "0px"); $("#obj81033").css("border-style", "solid"); $("#obj81033").css("border-radius", "10px"); $("#obj81033").css("-webkit-border-radius", "10px"); $("#obj81033").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_5_runningActionsCount = window.obj81033_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81171 
playAudio_81084();
function playAudio_81084() {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = obj81033_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj81171")[0];
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
		    window.obj81033_droppedInsideTargetActions_5_runningActionsCount = window.obj81033_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81033_droppedInsideTargetActions_5_runningActionsCount = window.obj81033_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj81033_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81085();
function switchText_81085() {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = obj81033_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81033_droppedInsideTargetActions_5_runningActionsCount = window.obj81033_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81033_droppedInsideTargetActions_5_runningActionsCount = window.obj81033_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj81033_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj81033_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81059();
function runjs_81059() {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = obj81033_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81203").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_4_runningActionsCount = window.obj81033_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81060();
function runjs_81060() {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = obj81033_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81203").css("border-color", "#C00000"); $("#obj81203").css("border-width", "2px"); $("#obj81203").css("border-style", "solid"); $("#obj81203").css("border-radius", "10px"); $("#obj81203").css("-webkit-border-radius", "10px"); $("#obj81203").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_4_runningActionsCount = window.obj81033_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81189 
hide_81061();
function hide_81061() {
	var selector = "#obj81189";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = obj81033_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81033_droppedInsideTargetActions_4_runningActionsCount = window.obj81033_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81061(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81033_droppedInsideTargetActions_4_runningActionsCount = window.obj81033_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81033_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81062();
function runjs_81062() {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = obj81033_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81033").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_4_runningActionsCount = window.obj81033_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81063();
function switchText_81063() {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = obj81033_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81033_droppedInsideTargetActions_4_runningActionsCount = window.obj81033_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81033_droppedInsideTargetActions_4_runningActionsCount = window.obj81033_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj81033_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81033 
move_81064();
function move_81064() {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = obj81033_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj81033");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 111;
	var moveY = 595;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81033_droppedInsideTargetActions_4_runningActionsCount = window.obj81033_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj81033_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81065();
function runjs_81065() {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = obj81033_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81203").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_4_runningActionsCount = window.obj81033_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81066();
function runjs_81066() {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = obj81033_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81203").css("border-color", "#000000"); $("#obj81203").css("border-width", "1px"); $("#obj81203").css("border-style", "solid"); $("#obj81203").css("border-radius", "0px"); $("#obj81203").css("-webkit-border-radius", "0px"); $("#obj81203").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_4_runningActionsCount = window.obj81033_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81189
(function(){
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = obj81033_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj81189";
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
					window.obj81033_droppedInsideTargetActions_4_runningActionsCount = window.obj81033_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj81033_droppedInsideTargetActions_4_runningActionsCount = window.obj81033_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81033_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81068();
function runjs_81068() {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = obj81033_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81033").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_4_runningActionsCount = window.obj81033_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81069();
function runjs_81069() {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = obj81033_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81033").css("border-color", "rgba(0,0,0,0)"); $("#obj81033").css("border-width", "0px"); $("#obj81033").css("border-style", "solid"); $("#obj81033").css("border-radius", "10px"); $("#obj81033").css("-webkit-border-radius", "10px"); $("#obj81033").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_4_runningActionsCount = window.obj81033_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81171 
playAudio_81070();
function playAudio_81070() {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = obj81033_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj81171")[0];
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
		    window.obj81033_droppedInsideTargetActions_4_runningActionsCount = window.obj81033_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81033_droppedInsideTargetActions_4_runningActionsCount = window.obj81033_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj81033_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81071();
function switchText_81071() {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = obj81033_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81033_droppedInsideTargetActions_4_runningActionsCount = window.obj81033_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81033_droppedInsideTargetActions_4_runningActionsCount = window.obj81033_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj81033_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj81033_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81052();
function runjs_81052() {
	window.obj81033_droppedInsideTargetActions_3_runningActionsCount = obj81033_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81197").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_3_runningActionsCount = window.obj81033_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_81056();
function switchText_81056() {
	window.obj81033_droppedInsideTargetActions_3_runningActionsCount = obj81033_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81033_droppedInsideTargetActions_3_runningActionsCount = window.obj81033_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81033_droppedInsideTargetActions_3_runningActionsCount = window.obj81033_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj81033_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_81053();
function runjs_81053() {
	window.obj81033_droppedInsideTargetActions_3_runningActionsCount = obj81033_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81197").css("border-color", "#058E3F"); $("#obj81197").css("border-width", "2px"); $("#obj81197").css("border-style", "solid"); $("#obj81197").css("border-radius", "10px"); $("#obj81197").css("-webkit-border-radius", "10px"); $("#obj81197").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_3_runningActionsCount = window.obj81033_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81183 
hide_81054();
function hide_81054() {
	var selector = "#obj81183";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81033_droppedInsideTargetActions_3_runningActionsCount = obj81033_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81033_droppedInsideTargetActions_3_runningActionsCount = window.obj81033_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81054(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81033_droppedInsideTargetActions_3_runningActionsCount = window.obj81033_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81033_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_81055();
function runjs_81055() {
	window.obj81033_droppedInsideTargetActions_3_runningActionsCount = obj81033_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81033").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_3_runningActionsCount = window.obj81033_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81173 
playAudio_81057();
function playAudio_81057() {
	window.obj81033_droppedInsideTargetActions_3_runningActionsCount = obj81033_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj81173")[0];
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
		    window.obj81033_droppedInsideTargetActions_3_runningActionsCount = window.obj81033_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81033_droppedInsideTargetActions_3_runningActionsCount = window.obj81033_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_3_actionGroup6();
}
	}
}









};
obj81033_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90339();
function switchText_90339() {
	window.obj81033_droppedInsideTargetActions_3_runningActionsCount = obj81033_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81033_droppedInsideTargetActions_3_runningActionsCount = window.obj81033_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81033_droppedInsideTargetActions_3_runningActionsCount = window.obj81033_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj81033_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	





















};
obj81033_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81045();
function runjs_81045() {
	window.obj81033_droppedInsideTargetActions_2_runningActionsCount = obj81033_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81201").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_2_runningActionsCount = window.obj81033_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_81049();
function switchText_81049() {
	window.obj81033_droppedInsideTargetActions_2_runningActionsCount = obj81033_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81033_droppedInsideTargetActions_2_runningActionsCount = window.obj81033_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81033_droppedInsideTargetActions_2_runningActionsCount = window.obj81033_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj81033_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_81046();
function runjs_81046() {
	window.obj81033_droppedInsideTargetActions_2_runningActionsCount = obj81033_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81201").css("border-color", "#058E3F"); $("#obj81201").css("border-width", "2px"); $("#obj81201").css("border-style", "solid"); $("#obj81201").css("border-radius", "10px"); $("#obj81201").css("-webkit-border-radius", "10px"); $("#obj81201").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_2_runningActionsCount = window.obj81033_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81187 
hide_81047();
function hide_81047() {
	var selector = "#obj81187";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81033_droppedInsideTargetActions_2_runningActionsCount = obj81033_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81033_droppedInsideTargetActions_2_runningActionsCount = window.obj81033_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81047(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81033_droppedInsideTargetActions_2_runningActionsCount = window.obj81033_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81033_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_81048();
function runjs_81048() {
	window.obj81033_droppedInsideTargetActions_2_runningActionsCount = obj81033_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81033").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_2_runningActionsCount = window.obj81033_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81173 
playAudio_81050();
function playAudio_81050() {
	window.obj81033_droppedInsideTargetActions_2_runningActionsCount = obj81033_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj81173")[0];
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
		    window.obj81033_droppedInsideTargetActions_2_runningActionsCount = window.obj81033_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81033_droppedInsideTargetActions_2_runningActionsCount = window.obj81033_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj81033_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90338();
function switchText_90338() {
	window.obj81033_droppedInsideTargetActions_2_runningActionsCount = obj81033_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81033_droppedInsideTargetActions_2_runningActionsCount = window.obj81033_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81033_droppedInsideTargetActions_2_runningActionsCount = window.obj81033_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj81033_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	





















};
obj81033_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81038();
function runjs_81038() {
	window.obj81033_droppedInsideTargetActions_runningActionsCount = obj81033_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81205").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_runningActionsCount = window.obj81033_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_81042();
function switchText_81042() {
	window.obj81033_droppedInsideTargetActions_runningActionsCount = obj81033_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81033_droppedInsideTargetActions_runningActionsCount = window.obj81033_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81033_droppedInsideTargetActions_runningActionsCount = window.obj81033_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj81033_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_81039();
function runjs_81039() {
	window.obj81033_droppedInsideTargetActions_runningActionsCount = obj81033_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81205").css("border-color", "#058E3F"); $("#obj81205").css("border-width", "2px"); $("#obj81205").css("border-style", "solid"); $("#obj81205").css("border-radius", "10px"); $("#obj81205").css("-webkit-border-radius", "10px"); $("#obj81205").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_runningActionsCount = window.obj81033_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81191 
hide_81040();
function hide_81040() {
	var selector = "#obj81191";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81033_droppedInsideTargetActions_runningActionsCount = obj81033_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81033_droppedInsideTargetActions_runningActionsCount = window.obj81033_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81040(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81033_droppedInsideTargetActions_runningActionsCount = window.obj81033_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81033_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_81041();
function runjs_81041() {
	window.obj81033_droppedInsideTargetActions_runningActionsCount = obj81033_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81033").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81033_droppedInsideTargetActions_runningActionsCount = window.obj81033_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj81033_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81173 
playAudio_81043();
function playAudio_81043() {
	window.obj81033_droppedInsideTargetActions_runningActionsCount = obj81033_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj81173")[0];
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
		    window.obj81033_droppedInsideTargetActions_runningActionsCount = window.obj81033_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81033_droppedInsideTargetActions_runningActionsCount = window.obj81033_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj81033_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90337();
function switchText_90337() {
	window.obj81033_droppedInsideTargetActions_runningActionsCount = obj81033_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj81033_droppedInsideTargetActions_runningActionsCount = window.obj81033_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81033_droppedInsideTargetActions_runningActionsCount = window.obj81033_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81033_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81033_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81033_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81033_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj81033_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81033_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81033").trigger("obj81033_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81033) {
				console.warn("de-queueing event obj81033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81033_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj80966_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj80966");
//	action: dragDrop
//	target: obj80966 
dragDrop_80969();
function dragDrop_80969() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj80966_onTouchDown_runningActionsCount = obj80966_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj80966');
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
	  	containerNode = $('#obj81213');
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
    	window.obj80966_onTouchDown_runningActionsCount = window.obj80966_onTouchDown_runningActionsCount - 1;
if (window.obj80966_onTouchDown_runningActionsCount < 0) {
	window.obj80966_onTouchDown_runningActionsCount = 0;
} else if (window.obj80966_onTouchDown_runningActionsCount == 0) {
	obj80966_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj81203","#obj81199","#obj81195","#obj81205","#obj81201","#obj81197");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_80969 = false;
    	var dropped_id_80969;
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
					dropped_80969 = true;
					dropped_id_80969 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_80969) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj80966").trigger('SCActionDragDrop80969_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj80966_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80966_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj80966 
move_92423();
function move_92423() {
	window.obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_runningActionsCount = obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj80966");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 337;
	var moveY = 537;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_runningActionsCount = window.obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj80966_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81020();
function runjs_81020() {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = obj80966_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81197").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_6_runningActionsCount = window.obj80966_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81021();
function runjs_81021() {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = obj80966_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81197").css("border-color", "#C00000"); $("#obj81197").css("border-width", "2px"); $("#obj81197").css("border-style", "solid"); $("#obj81197").css("border-radius", "10px"); $("#obj81197").css("-webkit-border-radius", "10px"); $("#obj81197").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_6_runningActionsCount = window.obj80966_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81183 
hide_81022();
function hide_81022() {
	var selector = "#obj81183";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = obj80966_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80966_droppedInsideTargetActions_6_runningActionsCount = window.obj80966_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81022(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80966_droppedInsideTargetActions_6_runningActionsCount = window.obj80966_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_6_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80966_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81023();
function runjs_81023() {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = obj80966_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj80966").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_6_runningActionsCount = window.obj80966_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_6_actionGroup4();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81024();
function switchText_81024() {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = obj80966_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80966_droppedInsideTargetActions_6_runningActionsCount = window.obj80966_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_6_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80966_droppedInsideTargetActions_6_runningActionsCount = window.obj80966_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	}
}






};
obj80966_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80966 
move_81025();
function move_81025() {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = obj80966_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj80966");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 337;
	var moveY = 537;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80966_droppedInsideTargetActions_6_runningActionsCount = window.obj80966_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_6_actionGroup6();
}
		}, 1);
	});
}



















};
obj80966_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81026();
function runjs_81026() {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = obj80966_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81197").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_6_runningActionsCount = window.obj80966_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81027();
function runjs_81027() {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = obj80966_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81197").css("border-color", "#000000"); $("#obj81197").css("border-width", "1px"); $("#obj81197").css("border-style", "solid"); $("#obj81197").css("border-radius", "0px"); $("#obj81197").css("-webkit-border-radius", "0px"); $("#obj81197").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_6_runningActionsCount = window.obj80966_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81183
(function(){
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = obj80966_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj81183";
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
					window.obj80966_droppedInsideTargetActions_6_runningActionsCount = window.obj80966_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_6_actionGroup9();
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
				window.obj80966_droppedInsideTargetActions_6_runningActionsCount = window.obj80966_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_6_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80966_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81029();
function runjs_81029() {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = obj80966_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj80966").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_6_runningActionsCount = window.obj80966_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_6_actionGroup10();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81030();
function runjs_81030() {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = obj80966_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj80966").css("border-color", "rgba(0,0,0,0)"); $("#obj80966").css("border-width", "0px"); $("#obj80966").css("border-style", "solid"); $("#obj80966").css("border-radius", "10px"); $("#obj80966").css("-webkit-border-radius", "10px"); $("#obj80966").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_6_runningActionsCount = window.obj80966_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_6_actionGroup11();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_6_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81171 
playAudio_81031();
function playAudio_81031() {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = obj80966_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj81171")[0];
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
		    window.obj80966_droppedInsideTargetActions_6_runningActionsCount = window.obj80966_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_6_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80966_droppedInsideTargetActions_6_runningActionsCount = window.obj80966_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_6_actionGroup12();
}
	}
}









};
obj80966_droppedInsideTargetActions_6_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81032();
function switchText_81032() {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = obj80966_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80966_droppedInsideTargetActions_6_runningActionsCount = window.obj80966_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_6_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80966_droppedInsideTargetActions_6_runningActionsCount = window.obj80966_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_6_actionGroup13();
}
		}, 1);
	}
}






};
obj80966_droppedInsideTargetActions_6_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex = 13;
	





















};
obj80966_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81006();
function runjs_81006() {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = obj80966_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81201").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_5_runningActionsCount = window.obj80966_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81007();
function runjs_81007() {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = obj80966_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81201").css("border-color", "#C00000"); $("#obj81201").css("border-width", "2px"); $("#obj81201").css("border-style", "solid"); $("#obj81201").css("border-radius", "10px"); $("#obj81201").css("-webkit-border-radius", "10px"); $("#obj81201").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_5_runningActionsCount = window.obj80966_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81187 
hide_81008();
function hide_81008() {
	var selector = "#obj81187";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = obj80966_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80966_droppedInsideTargetActions_5_runningActionsCount = window.obj80966_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81008(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80966_droppedInsideTargetActions_5_runningActionsCount = window.obj80966_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80966_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81009();
function runjs_81009() {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = obj80966_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj80966").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_5_runningActionsCount = window.obj80966_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81010();
function switchText_81010() {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = obj80966_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80966_droppedInsideTargetActions_5_runningActionsCount = window.obj80966_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80966_droppedInsideTargetActions_5_runningActionsCount = window.obj80966_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj80966_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80966 
move_81011();
function move_81011() {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = obj80966_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj80966");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 337;
	var moveY = 537;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80966_droppedInsideTargetActions_5_runningActionsCount = window.obj80966_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj80966_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81012();
function runjs_81012() {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = obj80966_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81201").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_5_runningActionsCount = window.obj80966_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81013();
function runjs_81013() {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = obj80966_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81201").css("border-color", "#000000"); $("#obj81201").css("border-width", "1px"); $("#obj81201").css("border-style", "solid"); $("#obj81201").css("border-radius", "0px"); $("#obj81201").css("-webkit-border-radius", "0px"); $("#obj81201").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_5_runningActionsCount = window.obj80966_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81187
(function(){
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = obj80966_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj81187";
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
					window.obj80966_droppedInsideTargetActions_5_runningActionsCount = window.obj80966_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj80966_droppedInsideTargetActions_5_runningActionsCount = window.obj80966_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80966_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81015();
function runjs_81015() {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = obj80966_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj80966").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_5_runningActionsCount = window.obj80966_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81016();
function runjs_81016() {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = obj80966_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj80966").css("border-color", "rgba(0,0,0,0)"); $("#obj80966").css("border-width", "0px"); $("#obj80966").css("border-style", "solid"); $("#obj80966").css("border-radius", "10px"); $("#obj80966").css("-webkit-border-radius", "10px"); $("#obj80966").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_5_runningActionsCount = window.obj80966_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81171 
playAudio_81017();
function playAudio_81017() {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = obj80966_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj81171")[0];
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
		    window.obj80966_droppedInsideTargetActions_5_runningActionsCount = window.obj80966_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80966_droppedInsideTargetActions_5_runningActionsCount = window.obj80966_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj80966_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81018();
function switchText_81018() {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = obj80966_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80966_droppedInsideTargetActions_5_runningActionsCount = window.obj80966_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80966_droppedInsideTargetActions_5_runningActionsCount = window.obj80966_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj80966_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj80966_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80992();
function runjs_80992() {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = obj80966_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81205").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_4_runningActionsCount = window.obj80966_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_80993();
function runjs_80993() {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = obj80966_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81205").css("border-color", "#C00000"); $("#obj81205").css("border-width", "2px"); $("#obj81205").css("border-style", "solid"); $("#obj81205").css("border-radius", "10px"); $("#obj81205").css("-webkit-border-radius", "10px"); $("#obj81205").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_4_runningActionsCount = window.obj80966_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81191 
hide_80994();
function hide_80994() {
	var selector = "#obj81191";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = obj80966_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80966_droppedInsideTargetActions_4_runningActionsCount = window.obj80966_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80994(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80966_droppedInsideTargetActions_4_runningActionsCount = window.obj80966_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80966_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80995();
function runjs_80995() {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = obj80966_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj80966").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_4_runningActionsCount = window.obj80966_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80996();
function switchText_80996() {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = obj80966_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80966_droppedInsideTargetActions_4_runningActionsCount = window.obj80966_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80966_droppedInsideTargetActions_4_runningActionsCount = window.obj80966_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj80966_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80966 
move_80997();
function move_80997() {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = obj80966_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj80966");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 337;
	var moveY = 537;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80966_droppedInsideTargetActions_4_runningActionsCount = window.obj80966_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj80966_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80998();
function runjs_80998() {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = obj80966_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81205").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_4_runningActionsCount = window.obj80966_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_80999();
function runjs_80999() {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = obj80966_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81205").css("border-color", "#000000"); $("#obj81205").css("border-width", "1px"); $("#obj81205").css("border-style", "solid"); $("#obj81205").css("border-radius", "0px"); $("#obj81205").css("-webkit-border-radius", "0px"); $("#obj81205").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_4_runningActionsCount = window.obj80966_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81191
(function(){
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = obj80966_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj81191";
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
					window.obj80966_droppedInsideTargetActions_4_runningActionsCount = window.obj80966_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj80966_droppedInsideTargetActions_4_runningActionsCount = window.obj80966_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80966_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81001();
function runjs_81001() {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = obj80966_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj80966").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_4_runningActionsCount = window.obj80966_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81002();
function runjs_81002() {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = obj80966_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj80966").css("border-color", "rgba(0,0,0,0)"); $("#obj80966").css("border-width", "0px"); $("#obj80966").css("border-style", "solid"); $("#obj80966").css("border-radius", "10px"); $("#obj80966").css("-webkit-border-radius", "10px"); $("#obj80966").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_4_runningActionsCount = window.obj80966_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81171 
playAudio_81003();
function playAudio_81003() {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = obj80966_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj81171")[0];
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
		    window.obj80966_droppedInsideTargetActions_4_runningActionsCount = window.obj80966_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80966_droppedInsideTargetActions_4_runningActionsCount = window.obj80966_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj80966_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81004();
function switchText_81004() {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = obj80966_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80966_droppedInsideTargetActions_4_runningActionsCount = window.obj80966_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80966_droppedInsideTargetActions_4_runningActionsCount = window.obj80966_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj80966_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj80966_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80985();
function runjs_80985() {
	window.obj80966_droppedInsideTargetActions_3_runningActionsCount = obj80966_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81195").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_3_runningActionsCount = window.obj80966_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80989();
function switchText_80989() {
	window.obj80966_droppedInsideTargetActions_3_runningActionsCount = obj80966_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80966_droppedInsideTargetActions_3_runningActionsCount = window.obj80966_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80966_droppedInsideTargetActions_3_runningActionsCount = window.obj80966_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj80966_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_80986();
function runjs_80986() {
	window.obj80966_droppedInsideTargetActions_3_runningActionsCount = obj80966_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81195").css("border-color", "#058E3F"); $("#obj81195").css("border-width", "2px"); $("#obj81195").css("border-style", "solid"); $("#obj81195").css("border-radius", "10px"); $("#obj81195").css("-webkit-border-radius", "10px"); $("#obj81195").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_3_runningActionsCount = window.obj80966_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81181 
hide_80987();
function hide_80987() {
	var selector = "#obj81181";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80966_droppedInsideTargetActions_3_runningActionsCount = obj80966_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80966_droppedInsideTargetActions_3_runningActionsCount = window.obj80966_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80987(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80966_droppedInsideTargetActions_3_runningActionsCount = window.obj80966_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80966_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_80988();
function runjs_80988() {
	window.obj80966_droppedInsideTargetActions_3_runningActionsCount = obj80966_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80966").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_3_runningActionsCount = window.obj80966_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81173 
playAudio_80990();
function playAudio_80990() {
	window.obj80966_droppedInsideTargetActions_3_runningActionsCount = obj80966_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj81173")[0];
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
		    window.obj80966_droppedInsideTargetActions_3_runningActionsCount = window.obj80966_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80966_droppedInsideTargetActions_3_runningActionsCount = window.obj80966_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_3_actionGroup6();
}
	}
}









};
obj80966_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90345();
function switchText_90345() {
	window.obj80966_droppedInsideTargetActions_3_runningActionsCount = obj80966_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80966_droppedInsideTargetActions_3_runningActionsCount = window.obj80966_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80966_droppedInsideTargetActions_3_runningActionsCount = window.obj80966_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj80966_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	





















};
obj80966_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80978();
function runjs_80978() {
	window.obj80966_droppedInsideTargetActions_2_runningActionsCount = obj80966_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81199").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_2_runningActionsCount = window.obj80966_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80982();
function switchText_80982() {
	window.obj80966_droppedInsideTargetActions_2_runningActionsCount = obj80966_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80966_droppedInsideTargetActions_2_runningActionsCount = window.obj80966_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80966_droppedInsideTargetActions_2_runningActionsCount = window.obj80966_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj80966_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_80979();
function runjs_80979() {
	window.obj80966_droppedInsideTargetActions_2_runningActionsCount = obj80966_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81199").css("border-color", "#058E3F"); $("#obj81199").css("border-width", "2px"); $("#obj81199").css("border-style", "solid"); $("#obj81199").css("border-radius", "10px"); $("#obj81199").css("-webkit-border-radius", "10px"); $("#obj81199").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_2_runningActionsCount = window.obj80966_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81185 
hide_80980();
function hide_80980() {
	var selector = "#obj81185";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80966_droppedInsideTargetActions_2_runningActionsCount = obj80966_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80966_droppedInsideTargetActions_2_runningActionsCount = window.obj80966_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80980(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80966_droppedInsideTargetActions_2_runningActionsCount = window.obj80966_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80966_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_80981();
function runjs_80981() {
	window.obj80966_droppedInsideTargetActions_2_runningActionsCount = obj80966_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80966").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_2_runningActionsCount = window.obj80966_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81173 
playAudio_80983();
function playAudio_80983() {
	window.obj80966_droppedInsideTargetActions_2_runningActionsCount = obj80966_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj81173")[0];
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
		    window.obj80966_droppedInsideTargetActions_2_runningActionsCount = window.obj80966_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80966_droppedInsideTargetActions_2_runningActionsCount = window.obj80966_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj80966_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90344();
function switchText_90344() {
	window.obj80966_droppedInsideTargetActions_2_runningActionsCount = obj80966_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80966_droppedInsideTargetActions_2_runningActionsCount = window.obj80966_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80966_droppedInsideTargetActions_2_runningActionsCount = window.obj80966_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj80966_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	





















};
obj80966_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80971();
function runjs_80971() {
	window.obj80966_droppedInsideTargetActions_runningActionsCount = obj80966_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81203").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_runningActionsCount = window.obj80966_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80975();
function switchText_80975() {
	window.obj80966_droppedInsideTargetActions_runningActionsCount = obj80966_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80966_droppedInsideTargetActions_runningActionsCount = window.obj80966_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80966_droppedInsideTargetActions_runningActionsCount = window.obj80966_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj80966_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_80972();
function runjs_80972() {
	window.obj80966_droppedInsideTargetActions_runningActionsCount = obj80966_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81203").css("border-color", "#058E3F"); $("#obj81203").css("border-width", "2px"); $("#obj81203").css("border-style", "solid"); $("#obj81203").css("border-radius", "10px"); $("#obj81203").css("-webkit-border-radius", "10px"); $("#obj81203").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_runningActionsCount = window.obj80966_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81189 
hide_80973();
function hide_80973() {
	var selector = "#obj81189";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80966_droppedInsideTargetActions_runningActionsCount = obj80966_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80966_droppedInsideTargetActions_runningActionsCount = window.obj80966_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80973(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80966_droppedInsideTargetActions_runningActionsCount = window.obj80966_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80966_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_80974();
function runjs_80974() {
	window.obj80966_droppedInsideTargetActions_runningActionsCount = obj80966_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80966").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80966_droppedInsideTargetActions_runningActionsCount = window.obj80966_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj80966_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81173 
playAudio_80976();
function playAudio_80976() {
	window.obj80966_droppedInsideTargetActions_runningActionsCount = obj80966_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj81173")[0];
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
		    window.obj80966_droppedInsideTargetActions_runningActionsCount = window.obj80966_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80966_droppedInsideTargetActions_runningActionsCount = window.obj80966_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj80966_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90343();
function switchText_90343() {
	window.obj80966_droppedInsideTargetActions_runningActionsCount = obj80966_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80966_droppedInsideTargetActions_runningActionsCount = window.obj80966_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80966_droppedInsideTargetActions_runningActionsCount = window.obj80966_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80966_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80966_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80966_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80966_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj80966_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80966_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80966").trigger("obj80966_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80966) {
				console.warn("de-queueing event obj80966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80966_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj80899_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj80899");
//	action: dragDrop
//	target: obj80899 
dragDrop_80902();
function dragDrop_80902() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj80899_onTouchDown_runningActionsCount = obj80899_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj80899');
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
	  	containerNode = $('#obj81213');
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
    	window.obj80899_onTouchDown_runningActionsCount = window.obj80899_onTouchDown_runningActionsCount - 1;
if (window.obj80899_onTouchDown_runningActionsCount < 0) {
	window.obj80899_onTouchDown_runningActionsCount = 0;
} else if (window.obj80899_onTouchDown_runningActionsCount == 0) {
	obj80899_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj81205","#obj81201","#obj81197","#obj81203","#obj81199","#obj81195");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_80902 = false;
    	var dropped_id_80902;
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
					dropped_80902 = true;
					dropped_id_80902 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_80902) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj80899").trigger('SCActionDragDrop80902_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj80899_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80899_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj80899 
move_92427();
function move_92427() {
	window.obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_runningActionsCount = obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj80899");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 337;
	var moveY = 595;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_runningActionsCount = window.obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj80899_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80953();
function runjs_80953() {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = obj80899_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81195").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_6_runningActionsCount = window.obj80899_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_80954();
function runjs_80954() {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = obj80899_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81195").css("border-color", "#C00000"); $("#obj81195").css("border-width", "2px"); $("#obj81195").css("border-style", "solid"); $("#obj81195").css("border-radius", "10px"); $("#obj81195").css("-webkit-border-radius", "10px"); $("#obj81195").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_6_runningActionsCount = window.obj80899_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81181 
hide_80955();
function hide_80955() {
	var selector = "#obj81181";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = obj80899_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80899_droppedInsideTargetActions_6_runningActionsCount = window.obj80899_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80955(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80899_droppedInsideTargetActions_6_runningActionsCount = window.obj80899_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_6_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80899_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80956();
function runjs_80956() {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = obj80899_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj80899").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_6_runningActionsCount = window.obj80899_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_6_actionGroup4();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80957();
function switchText_80957() {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = obj80899_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80899_droppedInsideTargetActions_6_runningActionsCount = window.obj80899_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_6_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80899_droppedInsideTargetActions_6_runningActionsCount = window.obj80899_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	}
}






};
obj80899_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80899 
move_80958();
function move_80958() {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = obj80899_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj80899");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 337;
	var moveY = 595;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80899_droppedInsideTargetActions_6_runningActionsCount = window.obj80899_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_6_actionGroup6();
}
		}, 1);
	});
}



















};
obj80899_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80959();
function runjs_80959() {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = obj80899_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81195").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_6_runningActionsCount = window.obj80899_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_80960();
function runjs_80960() {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = obj80899_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81195").css("border-color", "#000000"); $("#obj81195").css("border-width", "1px"); $("#obj81195").css("border-style", "solid"); $("#obj81195").css("border-radius", "0px"); $("#obj81195").css("-webkit-border-radius", "0px"); $("#obj81195").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_6_runningActionsCount = window.obj80899_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81181
(function(){
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = obj80899_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj81181";
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
					window.obj80899_droppedInsideTargetActions_6_runningActionsCount = window.obj80899_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_6_actionGroup9();
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
				window.obj80899_droppedInsideTargetActions_6_runningActionsCount = window.obj80899_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_6_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80899_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80962();
function runjs_80962() {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = obj80899_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj80899").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_6_runningActionsCount = window.obj80899_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_6_actionGroup10();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80963();
function runjs_80963() {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = obj80899_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj80899").css("border-color", "rgba(0,0,0,0)"); $("#obj80899").css("border-width", "0px"); $("#obj80899").css("border-style", "solid"); $("#obj80899").css("border-radius", "10px"); $("#obj80899").css("-webkit-border-radius", "10px"); $("#obj80899").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_6_runningActionsCount = window.obj80899_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_6_actionGroup11();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_6_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81171 
playAudio_80964();
function playAudio_80964() {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = obj80899_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj81171")[0];
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
		    window.obj80899_droppedInsideTargetActions_6_runningActionsCount = window.obj80899_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_6_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80899_droppedInsideTargetActions_6_runningActionsCount = window.obj80899_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_6_actionGroup12();
}
	}
}









};
obj80899_droppedInsideTargetActions_6_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80965();
function switchText_80965() {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = obj80899_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80899_droppedInsideTargetActions_6_runningActionsCount = window.obj80899_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_6_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80899_droppedInsideTargetActions_6_runningActionsCount = window.obj80899_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_6_actionGroup13();
}
		}, 1);
	}
}






};
obj80899_droppedInsideTargetActions_6_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex = 13;
	





















};
obj80899_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80939();
function runjs_80939() {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = obj80899_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81199").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_5_runningActionsCount = window.obj80899_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_80940();
function runjs_80940() {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = obj80899_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81199").css("border-color", "#C00000"); $("#obj81199").css("border-width", "2px"); $("#obj81199").css("border-style", "solid"); $("#obj81199").css("border-radius", "10px"); $("#obj81199").css("-webkit-border-radius", "10px"); $("#obj81199").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_5_runningActionsCount = window.obj80899_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81185 
hide_80941();
function hide_80941() {
	var selector = "#obj81185";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = obj80899_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80899_droppedInsideTargetActions_5_runningActionsCount = window.obj80899_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80941(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80899_droppedInsideTargetActions_5_runningActionsCount = window.obj80899_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80899_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80942();
function runjs_80942() {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = obj80899_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj80899").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_5_runningActionsCount = window.obj80899_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80943();
function switchText_80943() {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = obj80899_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80899_droppedInsideTargetActions_5_runningActionsCount = window.obj80899_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80899_droppedInsideTargetActions_5_runningActionsCount = window.obj80899_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj80899_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80899 
move_80944();
function move_80944() {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = obj80899_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj80899");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 337;
	var moveY = 595;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80899_droppedInsideTargetActions_5_runningActionsCount = window.obj80899_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj80899_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80945();
function runjs_80945() {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = obj80899_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81199").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_5_runningActionsCount = window.obj80899_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_80946();
function runjs_80946() {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = obj80899_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81199").css("border-color", "#000000"); $("#obj81199").css("border-width", "1px"); $("#obj81199").css("border-style", "solid"); $("#obj81199").css("border-radius", "0px"); $("#obj81199").css("-webkit-border-radius", "0px"); $("#obj81199").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_5_runningActionsCount = window.obj80899_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81185
(function(){
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = obj80899_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj81185";
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
					window.obj80899_droppedInsideTargetActions_5_runningActionsCount = window.obj80899_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj80899_droppedInsideTargetActions_5_runningActionsCount = window.obj80899_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80899_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80948();
function runjs_80948() {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = obj80899_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj80899").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_5_runningActionsCount = window.obj80899_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80949();
function runjs_80949() {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = obj80899_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj80899").css("border-color", "rgba(0,0,0,0)"); $("#obj80899").css("border-width", "0px"); $("#obj80899").css("border-style", "solid"); $("#obj80899").css("border-radius", "10px"); $("#obj80899").css("-webkit-border-radius", "10px"); $("#obj80899").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_5_runningActionsCount = window.obj80899_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81171 
playAudio_80950();
function playAudio_80950() {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = obj80899_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj81171")[0];
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
		    window.obj80899_droppedInsideTargetActions_5_runningActionsCount = window.obj80899_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80899_droppedInsideTargetActions_5_runningActionsCount = window.obj80899_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj80899_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80951();
function switchText_80951() {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = obj80899_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80899_droppedInsideTargetActions_5_runningActionsCount = window.obj80899_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80899_droppedInsideTargetActions_5_runningActionsCount = window.obj80899_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj80899_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj80899_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80925();
function runjs_80925() {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = obj80899_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81203").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_4_runningActionsCount = window.obj80899_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_80926();
function runjs_80926() {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = obj80899_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81203").css("border-color", "#C00000"); $("#obj81203").css("border-width", "2px"); $("#obj81203").css("border-style", "solid"); $("#obj81203").css("border-radius", "10px"); $("#obj81203").css("-webkit-border-radius", "10px"); $("#obj81203").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_4_runningActionsCount = window.obj80899_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81189 
hide_80927();
function hide_80927() {
	var selector = "#obj81189";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = obj80899_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80899_droppedInsideTargetActions_4_runningActionsCount = window.obj80899_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80927(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80899_droppedInsideTargetActions_4_runningActionsCount = window.obj80899_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80899_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80928();
function runjs_80928() {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = obj80899_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj80899").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_4_runningActionsCount = window.obj80899_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80929();
function switchText_80929() {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = obj80899_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80899_droppedInsideTargetActions_4_runningActionsCount = window.obj80899_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80899_droppedInsideTargetActions_4_runningActionsCount = window.obj80899_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj80899_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80899 
move_80930();
function move_80930() {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = obj80899_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj80899");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 337;
	var moveY = 595;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80899_droppedInsideTargetActions_4_runningActionsCount = window.obj80899_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj80899_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80931();
function runjs_80931() {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = obj80899_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81203").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_4_runningActionsCount = window.obj80899_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_80932();
function runjs_80932() {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = obj80899_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81203").css("border-color", "#000000"); $("#obj81203").css("border-width", "1px"); $("#obj81203").css("border-style", "solid"); $("#obj81203").css("border-radius", "0px"); $("#obj81203").css("-webkit-border-radius", "0px"); $("#obj81203").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_4_runningActionsCount = window.obj80899_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81189
(function(){
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = obj80899_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj81189";
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
					window.obj80899_droppedInsideTargetActions_4_runningActionsCount = window.obj80899_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj80899_droppedInsideTargetActions_4_runningActionsCount = window.obj80899_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80899_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80934();
function runjs_80934() {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = obj80899_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj80899").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_4_runningActionsCount = window.obj80899_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80935();
function runjs_80935() {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = obj80899_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj80899").css("border-color", "rgba(0,0,0,0)"); $("#obj80899").css("border-width", "0px"); $("#obj80899").css("border-style", "solid"); $("#obj80899").css("border-radius", "10px"); $("#obj80899").css("-webkit-border-radius", "10px"); $("#obj80899").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_4_runningActionsCount = window.obj80899_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81171 
playAudio_80936();
function playAudio_80936() {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = obj80899_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj81171")[0];
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
		    window.obj80899_droppedInsideTargetActions_4_runningActionsCount = window.obj80899_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80899_droppedInsideTargetActions_4_runningActionsCount = window.obj80899_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj80899_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80937();
function switchText_80937() {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = obj80899_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80899_droppedInsideTargetActions_4_runningActionsCount = window.obj80899_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80899_droppedInsideTargetActions_4_runningActionsCount = window.obj80899_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj80899_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj80899_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80918();
function runjs_80918() {
	window.obj80899_droppedInsideTargetActions_3_runningActionsCount = obj80899_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81197").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_3_runningActionsCount = window.obj80899_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80922();
function switchText_80922() {
	window.obj80899_droppedInsideTargetActions_3_runningActionsCount = obj80899_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80899_droppedInsideTargetActions_3_runningActionsCount = window.obj80899_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80899_droppedInsideTargetActions_3_runningActionsCount = window.obj80899_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj80899_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_80919();
function runjs_80919() {
	window.obj80899_droppedInsideTargetActions_3_runningActionsCount = obj80899_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81197").css("border-color", "#058E3F"); $("#obj81197").css("border-width", "2px"); $("#obj81197").css("border-style", "solid"); $("#obj81197").css("border-radius", "10px"); $("#obj81197").css("-webkit-border-radius", "10px"); $("#obj81197").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_3_runningActionsCount = window.obj80899_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81183 
hide_80920();
function hide_80920() {
	var selector = "#obj81183";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80899_droppedInsideTargetActions_3_runningActionsCount = obj80899_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80899_droppedInsideTargetActions_3_runningActionsCount = window.obj80899_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80920(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80899_droppedInsideTargetActions_3_runningActionsCount = window.obj80899_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80899_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_80921();
function runjs_80921() {
	window.obj80899_droppedInsideTargetActions_3_runningActionsCount = obj80899_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80899").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_3_runningActionsCount = window.obj80899_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81173 
playAudio_80923();
function playAudio_80923() {
	window.obj80899_droppedInsideTargetActions_3_runningActionsCount = obj80899_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj81173")[0];
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
		    window.obj80899_droppedInsideTargetActions_3_runningActionsCount = window.obj80899_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80899_droppedInsideTargetActions_3_runningActionsCount = window.obj80899_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_3_actionGroup6();
}
	}
}









};
obj80899_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90348();
function switchText_90348() {
	window.obj80899_droppedInsideTargetActions_3_runningActionsCount = obj80899_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80899_droppedInsideTargetActions_3_runningActionsCount = window.obj80899_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80899_droppedInsideTargetActions_3_runningActionsCount = window.obj80899_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj80899_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	





















};
obj80899_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80911();
function runjs_80911() {
	window.obj80899_droppedInsideTargetActions_2_runningActionsCount = obj80899_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81201").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_2_runningActionsCount = window.obj80899_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80915();
function switchText_80915() {
	window.obj80899_droppedInsideTargetActions_2_runningActionsCount = obj80899_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80899_droppedInsideTargetActions_2_runningActionsCount = window.obj80899_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80899_droppedInsideTargetActions_2_runningActionsCount = window.obj80899_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj80899_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_80912();
function runjs_80912() {
	window.obj80899_droppedInsideTargetActions_2_runningActionsCount = obj80899_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81201").css("border-color", "#058E3F"); $("#obj81201").css("border-width", "2px"); $("#obj81201").css("border-style", "solid"); $("#obj81201").css("border-radius", "10px"); $("#obj81201").css("-webkit-border-radius", "10px"); $("#obj81201").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_2_runningActionsCount = window.obj80899_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81187 
hide_80913();
function hide_80913() {
	var selector = "#obj81187";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80899_droppedInsideTargetActions_2_runningActionsCount = obj80899_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80899_droppedInsideTargetActions_2_runningActionsCount = window.obj80899_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80913(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80899_droppedInsideTargetActions_2_runningActionsCount = window.obj80899_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80899_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_80914();
function runjs_80914() {
	window.obj80899_droppedInsideTargetActions_2_runningActionsCount = obj80899_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80899").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_2_runningActionsCount = window.obj80899_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81173 
playAudio_80916();
function playAudio_80916() {
	window.obj80899_droppedInsideTargetActions_2_runningActionsCount = obj80899_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj81173")[0];
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
		    window.obj80899_droppedInsideTargetActions_2_runningActionsCount = window.obj80899_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80899_droppedInsideTargetActions_2_runningActionsCount = window.obj80899_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj80899_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90347();
function switchText_90347() {
	window.obj80899_droppedInsideTargetActions_2_runningActionsCount = obj80899_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80899_droppedInsideTargetActions_2_runningActionsCount = window.obj80899_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80899_droppedInsideTargetActions_2_runningActionsCount = window.obj80899_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj80899_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	





















};
obj80899_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80904();
function runjs_80904() {
	window.obj80899_droppedInsideTargetActions_runningActionsCount = obj80899_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81205").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_runningActionsCount = window.obj80899_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80908();
function switchText_80908() {
	window.obj80899_droppedInsideTargetActions_runningActionsCount = obj80899_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80899_droppedInsideTargetActions_runningActionsCount = window.obj80899_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80899_droppedInsideTargetActions_runningActionsCount = window.obj80899_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj80899_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_80905();
function runjs_80905() {
	window.obj80899_droppedInsideTargetActions_runningActionsCount = obj80899_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81205").css("border-color", "#058E3F"); $("#obj81205").css("border-width", "2px"); $("#obj81205").css("border-style", "solid"); $("#obj81205").css("border-radius", "10px"); $("#obj81205").css("-webkit-border-radius", "10px"); $("#obj81205").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_runningActionsCount = window.obj80899_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81191 
hide_80906();
function hide_80906() {
	var selector = "#obj81191";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80899_droppedInsideTargetActions_runningActionsCount = obj80899_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80899_droppedInsideTargetActions_runningActionsCount = window.obj80899_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80906(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80899_droppedInsideTargetActions_runningActionsCount = window.obj80899_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80899_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_80907();
function runjs_80907() {
	window.obj80899_droppedInsideTargetActions_runningActionsCount = obj80899_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80899").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80899_droppedInsideTargetActions_runningActionsCount = window.obj80899_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj80899_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81173 
playAudio_80909();
function playAudio_80909() {
	window.obj80899_droppedInsideTargetActions_runningActionsCount = obj80899_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj81173")[0];
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
		    window.obj80899_droppedInsideTargetActions_runningActionsCount = window.obj80899_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80899_droppedInsideTargetActions_runningActionsCount = window.obj80899_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj80899_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90346();
function switchText_90346() {
	window.obj80899_droppedInsideTargetActions_runningActionsCount = obj80899_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80899_droppedInsideTargetActions_runningActionsCount = window.obj80899_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80899_droppedInsideTargetActions_runningActionsCount = window.obj80899_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80899_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80899_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80899_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80899_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj80899_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80899_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80899").trigger("obj80899_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80899) {
				console.warn("de-queueing event obj80899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80899_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj80832_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj80832");
//	action: dragDrop
//	target: obj80832 
dragDrop_80835();
function dragDrop_80835() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj80832_onTouchDown_runningActionsCount = obj80832_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj80832');
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
	  	containerNode = $('#obj81213');
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
    	window.obj80832_onTouchDown_runningActionsCount = window.obj80832_onTouchDown_runningActionsCount - 1;
if (window.obj80832_onTouchDown_runningActionsCount < 0) {
	window.obj80832_onTouchDown_runningActionsCount = 0;
} else if (window.obj80832_onTouchDown_runningActionsCount == 0) {
	obj80832_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj81205","#obj81201","#obj81197","#obj81203","#obj81199","#obj81195");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_80835 = false;
    	var dropped_id_80835;
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
					dropped_80835 = true;
					dropped_id_80835 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_80835) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj80832").trigger('SCActionDragDrop80835_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj80832_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80832_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj80832 
move_92429();
function move_92429() {
	window.obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_runningActionsCount = obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj80832");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 113;
	var moveY = 652;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_runningActionsCount = window.obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj80832_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80886();
function runjs_80886() {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = obj80832_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81195").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_6_runningActionsCount = window.obj80832_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_80887();
function runjs_80887() {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = obj80832_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81195").css("border-color", "#C00000"); $("#obj81195").css("border-width", "2px"); $("#obj81195").css("border-style", "solid"); $("#obj81195").css("border-radius", "10px"); $("#obj81195").css("-webkit-border-radius", "10px"); $("#obj81195").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_6_runningActionsCount = window.obj80832_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81181 
hide_80888();
function hide_80888() {
	var selector = "#obj81181";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = obj80832_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80832_droppedInsideTargetActions_6_runningActionsCount = window.obj80832_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80888(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80832_droppedInsideTargetActions_6_runningActionsCount = window.obj80832_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_6_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80832_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80889();
function runjs_80889() {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = obj80832_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj80832").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_6_runningActionsCount = window.obj80832_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_6_actionGroup4();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80890();
function switchText_80890() {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = obj80832_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80832_droppedInsideTargetActions_6_runningActionsCount = window.obj80832_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_6_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80832_droppedInsideTargetActions_6_runningActionsCount = window.obj80832_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	}
}






};
obj80832_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80832 
move_80891();
function move_80891() {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = obj80832_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj80832");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 113;
	var moveY = 652;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80832_droppedInsideTargetActions_6_runningActionsCount = window.obj80832_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_6_actionGroup6();
}
		}, 1);
	});
}



















};
obj80832_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80892();
function runjs_80892() {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = obj80832_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81195").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_6_runningActionsCount = window.obj80832_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_80893();
function runjs_80893() {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = obj80832_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81195").css("border-color", "#000000"); $("#obj81195").css("border-width", "1px"); $("#obj81195").css("border-style", "solid"); $("#obj81195").css("border-radius", "0px"); $("#obj81195").css("-webkit-border-radius", "0px"); $("#obj81195").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_6_runningActionsCount = window.obj80832_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81181
(function(){
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = obj80832_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj81181";
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
					window.obj80832_droppedInsideTargetActions_6_runningActionsCount = window.obj80832_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_6_actionGroup9();
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
				window.obj80832_droppedInsideTargetActions_6_runningActionsCount = window.obj80832_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_6_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80832_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80895();
function runjs_80895() {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = obj80832_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj80832").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_6_runningActionsCount = window.obj80832_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_6_actionGroup10();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80896();
function runjs_80896() {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = obj80832_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj80832").css("border-color", "rgba(0,0,0,0)"); $("#obj80832").css("border-width", "0px"); $("#obj80832").css("border-style", "solid"); $("#obj80832").css("border-radius", "10px"); $("#obj80832").css("-webkit-border-radius", "10px"); $("#obj80832").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_6_runningActionsCount = window.obj80832_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_6_actionGroup11();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_6_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81171 
playAudio_80897();
function playAudio_80897() {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = obj80832_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj81171")[0];
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
		    window.obj80832_droppedInsideTargetActions_6_runningActionsCount = window.obj80832_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_6_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80832_droppedInsideTargetActions_6_runningActionsCount = window.obj80832_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_6_actionGroup12();
}
	}
}









};
obj80832_droppedInsideTargetActions_6_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80898();
function switchText_80898() {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = obj80832_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80832_droppedInsideTargetActions_6_runningActionsCount = window.obj80832_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_6_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80832_droppedInsideTargetActions_6_runningActionsCount = window.obj80832_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_6_actionGroup13();
}
		}, 1);
	}
}






};
obj80832_droppedInsideTargetActions_6_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex = 13;
	





















};
obj80832_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80872();
function runjs_80872() {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = obj80832_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81199").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_5_runningActionsCount = window.obj80832_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_80873();
function runjs_80873() {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = obj80832_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81199").css("border-color", "#C00000"); $("#obj81199").css("border-width", "2px"); $("#obj81199").css("border-style", "solid"); $("#obj81199").css("border-radius", "10px"); $("#obj81199").css("-webkit-border-radius", "10px"); $("#obj81199").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_5_runningActionsCount = window.obj80832_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81185 
hide_80874();
function hide_80874() {
	var selector = "#obj81185";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = obj80832_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80832_droppedInsideTargetActions_5_runningActionsCount = window.obj80832_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80874(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80832_droppedInsideTargetActions_5_runningActionsCount = window.obj80832_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80832_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80875();
function runjs_80875() {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = obj80832_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj80832").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_5_runningActionsCount = window.obj80832_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80876();
function switchText_80876() {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = obj80832_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80832_droppedInsideTargetActions_5_runningActionsCount = window.obj80832_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80832_droppedInsideTargetActions_5_runningActionsCount = window.obj80832_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj80832_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80832 
move_80877();
function move_80877() {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = obj80832_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj80832");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 113;
	var moveY = 652;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80832_droppedInsideTargetActions_5_runningActionsCount = window.obj80832_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj80832_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80878();
function runjs_80878() {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = obj80832_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81199").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_5_runningActionsCount = window.obj80832_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_80879();
function runjs_80879() {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = obj80832_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81199").css("border-color", "#000000"); $("#obj81199").css("border-width", "1px"); $("#obj81199").css("border-style", "solid"); $("#obj81199").css("border-radius", "0px"); $("#obj81199").css("-webkit-border-radius", "0px"); $("#obj81199").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_5_runningActionsCount = window.obj80832_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81185
(function(){
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = obj80832_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj81185";
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
					window.obj80832_droppedInsideTargetActions_5_runningActionsCount = window.obj80832_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj80832_droppedInsideTargetActions_5_runningActionsCount = window.obj80832_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80832_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80881();
function runjs_80881() {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = obj80832_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj80832").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_5_runningActionsCount = window.obj80832_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80882();
function runjs_80882() {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = obj80832_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj80832").css("border-color", "rgba(0,0,0,0)"); $("#obj80832").css("border-width", "0px"); $("#obj80832").css("border-style", "solid"); $("#obj80832").css("border-radius", "10px"); $("#obj80832").css("-webkit-border-radius", "10px"); $("#obj80832").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_5_runningActionsCount = window.obj80832_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81171 
playAudio_80883();
function playAudio_80883() {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = obj80832_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj81171")[0];
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
		    window.obj80832_droppedInsideTargetActions_5_runningActionsCount = window.obj80832_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80832_droppedInsideTargetActions_5_runningActionsCount = window.obj80832_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj80832_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80884();
function switchText_80884() {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = obj80832_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80832_droppedInsideTargetActions_5_runningActionsCount = window.obj80832_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80832_droppedInsideTargetActions_5_runningActionsCount = window.obj80832_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj80832_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj80832_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80858();
function runjs_80858() {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = obj80832_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81203").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_4_runningActionsCount = window.obj80832_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_80859();
function runjs_80859() {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = obj80832_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81203").css("border-color", "#C00000"); $("#obj81203").css("border-width", "2px"); $("#obj81203").css("border-style", "solid"); $("#obj81203").css("border-radius", "10px"); $("#obj81203").css("-webkit-border-radius", "10px"); $("#obj81203").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_4_runningActionsCount = window.obj80832_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81189 
hide_80860();
function hide_80860() {
	var selector = "#obj81189";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = obj80832_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80832_droppedInsideTargetActions_4_runningActionsCount = window.obj80832_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80860(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80832_droppedInsideTargetActions_4_runningActionsCount = window.obj80832_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80832_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80861();
function runjs_80861() {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = obj80832_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj80832").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_4_runningActionsCount = window.obj80832_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80862();
function switchText_80862() {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = obj80832_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80832_droppedInsideTargetActions_4_runningActionsCount = window.obj80832_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80832_droppedInsideTargetActions_4_runningActionsCount = window.obj80832_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj80832_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80832 
move_80863();
function move_80863() {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = obj80832_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj80832");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 113;
	var moveY = 652;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80832_droppedInsideTargetActions_4_runningActionsCount = window.obj80832_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj80832_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80864();
function runjs_80864() {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = obj80832_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81203").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_4_runningActionsCount = window.obj80832_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_80865();
function runjs_80865() {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = obj80832_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81203").css("border-color", "#000000"); $("#obj81203").css("border-width", "1px"); $("#obj81203").css("border-style", "solid"); $("#obj81203").css("border-radius", "0px"); $("#obj81203").css("-webkit-border-radius", "0px"); $("#obj81203").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_4_runningActionsCount = window.obj80832_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81189
(function(){
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = obj80832_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj81189";
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
					window.obj80832_droppedInsideTargetActions_4_runningActionsCount = window.obj80832_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj80832_droppedInsideTargetActions_4_runningActionsCount = window.obj80832_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80832_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80867();
function runjs_80867() {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = obj80832_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj80832").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_4_runningActionsCount = window.obj80832_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80868();
function runjs_80868() {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = obj80832_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj80832").css("border-color", "rgba(0,0,0,0)"); $("#obj80832").css("border-width", "0px"); $("#obj80832").css("border-style", "solid"); $("#obj80832").css("border-radius", "10px"); $("#obj80832").css("-webkit-border-radius", "10px"); $("#obj80832").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_4_runningActionsCount = window.obj80832_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81171 
playAudio_80869();
function playAudio_80869() {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = obj80832_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj81171")[0];
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
		    window.obj80832_droppedInsideTargetActions_4_runningActionsCount = window.obj80832_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80832_droppedInsideTargetActions_4_runningActionsCount = window.obj80832_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj80832_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80870();
function switchText_80870() {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = obj80832_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80832_droppedInsideTargetActions_4_runningActionsCount = window.obj80832_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80832_droppedInsideTargetActions_4_runningActionsCount = window.obj80832_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj80832_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj80832_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80851();
function runjs_80851() {
	window.obj80832_droppedInsideTargetActions_3_runningActionsCount = obj80832_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81197").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_3_runningActionsCount = window.obj80832_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80855();
function switchText_80855() {
	window.obj80832_droppedInsideTargetActions_3_runningActionsCount = obj80832_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80832_droppedInsideTargetActions_3_runningActionsCount = window.obj80832_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80832_droppedInsideTargetActions_3_runningActionsCount = window.obj80832_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj80832_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_80852();
function runjs_80852() {
	window.obj80832_droppedInsideTargetActions_3_runningActionsCount = obj80832_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81197").css("border-color", "#058E3F"); $("#obj81197").css("border-width", "2px"); $("#obj81197").css("border-style", "solid"); $("#obj81197").css("border-radius", "10px"); $("#obj81197").css("-webkit-border-radius", "10px"); $("#obj81197").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_3_runningActionsCount = window.obj80832_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81183 
hide_80853();
function hide_80853() {
	var selector = "#obj81183";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80832_droppedInsideTargetActions_3_runningActionsCount = obj80832_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80832_droppedInsideTargetActions_3_runningActionsCount = window.obj80832_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80853(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80832_droppedInsideTargetActions_3_runningActionsCount = window.obj80832_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80832_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_80854();
function runjs_80854() {
	window.obj80832_droppedInsideTargetActions_3_runningActionsCount = obj80832_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80832").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_3_runningActionsCount = window.obj80832_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81173 
playAudio_80856();
function playAudio_80856() {
	window.obj80832_droppedInsideTargetActions_3_runningActionsCount = obj80832_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj81173")[0];
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
		    window.obj80832_droppedInsideTargetActions_3_runningActionsCount = window.obj80832_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80832_droppedInsideTargetActions_3_runningActionsCount = window.obj80832_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_3_actionGroup6();
}
	}
}









};
obj80832_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90342();
function switchText_90342() {
	window.obj80832_droppedInsideTargetActions_3_runningActionsCount = obj80832_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80832_droppedInsideTargetActions_3_runningActionsCount = window.obj80832_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80832_droppedInsideTargetActions_3_runningActionsCount = window.obj80832_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj80832_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	





















};
obj80832_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80844();
function runjs_80844() {
	window.obj80832_droppedInsideTargetActions_2_runningActionsCount = obj80832_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81201").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_2_runningActionsCount = window.obj80832_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80848();
function switchText_80848() {
	window.obj80832_droppedInsideTargetActions_2_runningActionsCount = obj80832_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80832_droppedInsideTargetActions_2_runningActionsCount = window.obj80832_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80832_droppedInsideTargetActions_2_runningActionsCount = window.obj80832_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj80832_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_80845();
function runjs_80845() {
	window.obj80832_droppedInsideTargetActions_2_runningActionsCount = obj80832_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81201").css("border-color", "#058E3F"); $("#obj81201").css("border-width", "2px"); $("#obj81201").css("border-style", "solid"); $("#obj81201").css("border-radius", "10px"); $("#obj81201").css("-webkit-border-radius", "10px"); $("#obj81201").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_2_runningActionsCount = window.obj80832_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81187 
hide_80846();
function hide_80846() {
	var selector = "#obj81187";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80832_droppedInsideTargetActions_2_runningActionsCount = obj80832_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80832_droppedInsideTargetActions_2_runningActionsCount = window.obj80832_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80846(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80832_droppedInsideTargetActions_2_runningActionsCount = window.obj80832_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80832_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_80847();
function runjs_80847() {
	window.obj80832_droppedInsideTargetActions_2_runningActionsCount = obj80832_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80832").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_2_runningActionsCount = window.obj80832_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81173 
playAudio_80849();
function playAudio_80849() {
	window.obj80832_droppedInsideTargetActions_2_runningActionsCount = obj80832_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj81173")[0];
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
		    window.obj80832_droppedInsideTargetActions_2_runningActionsCount = window.obj80832_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80832_droppedInsideTargetActions_2_runningActionsCount = window.obj80832_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj80832_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90341();
function switchText_90341() {
	window.obj80832_droppedInsideTargetActions_2_runningActionsCount = obj80832_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80832_droppedInsideTargetActions_2_runningActionsCount = window.obj80832_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80832_droppedInsideTargetActions_2_runningActionsCount = window.obj80832_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj80832_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	





















};
obj80832_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80837();
function runjs_80837() {
	window.obj80832_droppedInsideTargetActions_runningActionsCount = obj80832_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81205").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_runningActionsCount = window.obj80832_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80841();
function switchText_80841() {
	window.obj80832_droppedInsideTargetActions_runningActionsCount = obj80832_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80832_droppedInsideTargetActions_runningActionsCount = window.obj80832_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80832_droppedInsideTargetActions_runningActionsCount = window.obj80832_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj80832_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_80838();
function runjs_80838() {
	window.obj80832_droppedInsideTargetActions_runningActionsCount = obj80832_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81205").css("border-color", "#058E3F"); $("#obj81205").css("border-width", "2px"); $("#obj81205").css("border-style", "solid"); $("#obj81205").css("border-radius", "10px"); $("#obj81205").css("-webkit-border-radius", "10px"); $("#obj81205").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_runningActionsCount = window.obj80832_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81191 
hide_80839();
function hide_80839() {
	var selector = "#obj81191";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80832_droppedInsideTargetActions_runningActionsCount = obj80832_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80832_droppedInsideTargetActions_runningActionsCount = window.obj80832_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80839(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80832_droppedInsideTargetActions_runningActionsCount = window.obj80832_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80832_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_80840();
function runjs_80840() {
	window.obj80832_droppedInsideTargetActions_runningActionsCount = obj80832_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80832").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80832_droppedInsideTargetActions_runningActionsCount = window.obj80832_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj80832_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81173 
playAudio_80842();
function playAudio_80842() {
	window.obj80832_droppedInsideTargetActions_runningActionsCount = obj80832_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj81173")[0];
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
		    window.obj80832_droppedInsideTargetActions_runningActionsCount = window.obj80832_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80832_droppedInsideTargetActions_runningActionsCount = window.obj80832_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj80832_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90340();
function switchText_90340() {
	window.obj80832_droppedInsideTargetActions_runningActionsCount = obj80832_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80832_droppedInsideTargetActions_runningActionsCount = window.obj80832_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80832_droppedInsideTargetActions_runningActionsCount = window.obj80832_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80832_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80832_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80832_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80832_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj80832_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80832_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80832").trigger("obj80832_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80832) {
				console.warn("de-queueing event obj80832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80832_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj80765_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj80765");
//	action: dragDrop
//	target: obj80765 
dragDrop_80768();
function dragDrop_80768() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj80765_onTouchDown_runningActionsCount = obj80765_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj80765');
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
	  	containerNode = $('#obj81213');
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
    	window.obj80765_onTouchDown_runningActionsCount = window.obj80765_onTouchDown_runningActionsCount - 1;
if (window.obj80765_onTouchDown_runningActionsCount < 0) {
	window.obj80765_onTouchDown_runningActionsCount = 0;
} else if (window.obj80765_onTouchDown_runningActionsCount == 0) {
	obj80765_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj81203","#obj81199","#obj81195","#obj81205","#obj81201","#obj81197");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_80768 = false;
    	var dropped_id_80768;
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
					dropped_80768 = true;
					dropped_id_80768 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_80768) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj80765").trigger('SCActionDragDrop80768_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj80765_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80765_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj80765 
move_92431();
function move_92431() {
	window.obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_runningActionsCount = obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj80765");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 340;
	var moveY = 652;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_runningActionsCount = window.obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj80765_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80819();
function runjs_80819() {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = obj80765_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81197").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_6_runningActionsCount = window.obj80765_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_80820();
function runjs_80820() {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = obj80765_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81197").css("border-color", "#C00000"); $("#obj81197").css("border-width", "2px"); $("#obj81197").css("border-style", "solid"); $("#obj81197").css("border-radius", "10px"); $("#obj81197").css("-webkit-border-radius", "10px"); $("#obj81197").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_6_runningActionsCount = window.obj80765_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81183 
hide_80821();
function hide_80821() {
	var selector = "#obj81183";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = obj80765_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80765_droppedInsideTargetActions_6_runningActionsCount = window.obj80765_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80821(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80765_droppedInsideTargetActions_6_runningActionsCount = window.obj80765_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_6_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80765_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80822();
function runjs_80822() {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = obj80765_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj80765").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_6_runningActionsCount = window.obj80765_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_6_actionGroup4();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80823();
function switchText_80823() {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = obj80765_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80765_droppedInsideTargetActions_6_runningActionsCount = window.obj80765_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_6_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80765_droppedInsideTargetActions_6_runningActionsCount = window.obj80765_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	}
}






};
obj80765_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80765 
move_80824();
function move_80824() {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = obj80765_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj80765");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 340;
	var moveY = 652;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80765_droppedInsideTargetActions_6_runningActionsCount = window.obj80765_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_6_actionGroup6();
}
		}, 1);
	});
}



















};
obj80765_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80825();
function runjs_80825() {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = obj80765_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81197").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_6_runningActionsCount = window.obj80765_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_80826();
function runjs_80826() {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = obj80765_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj81197").css("border-color", "#000000"); $("#obj81197").css("border-width", "1px"); $("#obj81197").css("border-style", "solid"); $("#obj81197").css("border-radius", "0px"); $("#obj81197").css("-webkit-border-radius", "0px"); $("#obj81197").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_6_runningActionsCount = window.obj80765_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81183
(function(){
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = obj80765_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj81183";
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
					window.obj80765_droppedInsideTargetActions_6_runningActionsCount = window.obj80765_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_6_actionGroup9();
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
				window.obj80765_droppedInsideTargetActions_6_runningActionsCount = window.obj80765_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_6_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80765_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80828();
function runjs_80828() {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = obj80765_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj80765").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_6_runningActionsCount = window.obj80765_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_6_actionGroup10();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80829();
function runjs_80829() {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = obj80765_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj80765").css("border-color", "rgba(0,0,0,0)"); $("#obj80765").css("border-width", "0px"); $("#obj80765").css("border-style", "solid"); $("#obj80765").css("border-radius", "10px"); $("#obj80765").css("-webkit-border-radius", "10px"); $("#obj80765").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_6_runningActionsCount = window.obj80765_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_6_actionGroup11();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_6_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81171 
playAudio_80830();
function playAudio_80830() {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = obj80765_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj81171")[0];
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
		    window.obj80765_droppedInsideTargetActions_6_runningActionsCount = window.obj80765_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_6_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80765_droppedInsideTargetActions_6_runningActionsCount = window.obj80765_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_6_actionGroup12();
}
	}
}









};
obj80765_droppedInsideTargetActions_6_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80831();
function switchText_80831() {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = obj80765_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80765_droppedInsideTargetActions_6_runningActionsCount = window.obj80765_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_6_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80765_droppedInsideTargetActions_6_runningActionsCount = window.obj80765_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_6_actionGroup13();
}
		}, 1);
	}
}






};
obj80765_droppedInsideTargetActions_6_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex = 13;
	





















};
obj80765_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80805();
function runjs_80805() {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = obj80765_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81201").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_5_runningActionsCount = window.obj80765_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_80806();
function runjs_80806() {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = obj80765_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81201").css("border-color", "#C00000"); $("#obj81201").css("border-width", "2px"); $("#obj81201").css("border-style", "solid"); $("#obj81201").css("border-radius", "10px"); $("#obj81201").css("-webkit-border-radius", "10px"); $("#obj81201").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_5_runningActionsCount = window.obj80765_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81187 
hide_80807();
function hide_80807() {
	var selector = "#obj81187";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = obj80765_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80765_droppedInsideTargetActions_5_runningActionsCount = window.obj80765_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80807(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80765_droppedInsideTargetActions_5_runningActionsCount = window.obj80765_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80765_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80808();
function runjs_80808() {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = obj80765_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj80765").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_5_runningActionsCount = window.obj80765_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80809();
function switchText_80809() {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = obj80765_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80765_droppedInsideTargetActions_5_runningActionsCount = window.obj80765_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80765_droppedInsideTargetActions_5_runningActionsCount = window.obj80765_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj80765_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80765 
move_80810();
function move_80810() {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = obj80765_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj80765");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 340;
	var moveY = 652;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80765_droppedInsideTargetActions_5_runningActionsCount = window.obj80765_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj80765_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80811();
function runjs_80811() {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = obj80765_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81201").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_5_runningActionsCount = window.obj80765_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_80812();
function runjs_80812() {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = obj80765_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj81201").css("border-color", "#000000"); $("#obj81201").css("border-width", "1px"); $("#obj81201").css("border-style", "solid"); $("#obj81201").css("border-radius", "0px"); $("#obj81201").css("-webkit-border-radius", "0px"); $("#obj81201").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_5_runningActionsCount = window.obj80765_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81187
(function(){
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = obj80765_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj81187";
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
					window.obj80765_droppedInsideTargetActions_5_runningActionsCount = window.obj80765_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj80765_droppedInsideTargetActions_5_runningActionsCount = window.obj80765_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80765_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80814();
function runjs_80814() {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = obj80765_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj80765").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_5_runningActionsCount = window.obj80765_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80815();
function runjs_80815() {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = obj80765_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj80765").css("border-color", "rgba(0,0,0,0)"); $("#obj80765").css("border-width", "0px"); $("#obj80765").css("border-style", "solid"); $("#obj80765").css("border-radius", "10px"); $("#obj80765").css("-webkit-border-radius", "10px"); $("#obj80765").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_5_runningActionsCount = window.obj80765_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81171 
playAudio_80816();
function playAudio_80816() {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = obj80765_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj81171")[0];
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
		    window.obj80765_droppedInsideTargetActions_5_runningActionsCount = window.obj80765_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80765_droppedInsideTargetActions_5_runningActionsCount = window.obj80765_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj80765_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80817();
function switchText_80817() {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = obj80765_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80765_droppedInsideTargetActions_5_runningActionsCount = window.obj80765_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80765_droppedInsideTargetActions_5_runningActionsCount = window.obj80765_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj80765_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj80765_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80791();
function runjs_80791() {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = obj80765_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81205").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_4_runningActionsCount = window.obj80765_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_80792();
function runjs_80792() {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = obj80765_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81205").css("border-color", "#C00000"); $("#obj81205").css("border-width", "2px"); $("#obj81205").css("border-style", "solid"); $("#obj81205").css("border-radius", "10px"); $("#obj81205").css("-webkit-border-radius", "10px"); $("#obj81205").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_4_runningActionsCount = window.obj80765_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81191 
hide_80793();
function hide_80793() {
	var selector = "#obj81191";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = obj80765_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80765_droppedInsideTargetActions_4_runningActionsCount = window.obj80765_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80793(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80765_droppedInsideTargetActions_4_runningActionsCount = window.obj80765_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80765_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80794();
function runjs_80794() {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = obj80765_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj80765").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_4_runningActionsCount = window.obj80765_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80795();
function switchText_80795() {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = obj80765_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80765_droppedInsideTargetActions_4_runningActionsCount = window.obj80765_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80765_droppedInsideTargetActions_4_runningActionsCount = window.obj80765_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj80765_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80765 
move_80796();
function move_80796() {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = obj80765_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj80765");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 340;
	var moveY = 652;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80765_droppedInsideTargetActions_4_runningActionsCount = window.obj80765_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj80765_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80797();
function runjs_80797() {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = obj80765_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81205").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_4_runningActionsCount = window.obj80765_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_80798();
function runjs_80798() {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = obj80765_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81205").css("border-color", "#000000"); $("#obj81205").css("border-width", "1px"); $("#obj81205").css("border-style", "solid"); $("#obj81205").css("border-radius", "0px"); $("#obj81205").css("-webkit-border-radius", "0px"); $("#obj81205").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_4_runningActionsCount = window.obj80765_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81191
(function(){
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = obj80765_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj81191";
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
					window.obj80765_droppedInsideTargetActions_4_runningActionsCount = window.obj80765_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj80765_droppedInsideTargetActions_4_runningActionsCount = window.obj80765_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80765_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80800();
function runjs_80800() {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = obj80765_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj80765").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_4_runningActionsCount = window.obj80765_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80801();
function runjs_80801() {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = obj80765_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj80765").css("border-color", "rgba(0,0,0,0)"); $("#obj80765").css("border-width", "0px"); $("#obj80765").css("border-style", "solid"); $("#obj80765").css("border-radius", "10px"); $("#obj80765").css("-webkit-border-radius", "10px"); $("#obj80765").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_4_runningActionsCount = window.obj80765_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81171 
playAudio_80802();
function playAudio_80802() {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = obj80765_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj81171")[0];
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
		    window.obj80765_droppedInsideTargetActions_4_runningActionsCount = window.obj80765_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80765_droppedInsideTargetActions_4_runningActionsCount = window.obj80765_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj80765_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80803();
function switchText_80803() {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = obj80765_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80765_droppedInsideTargetActions_4_runningActionsCount = window.obj80765_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80765_droppedInsideTargetActions_4_runningActionsCount = window.obj80765_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj80765_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj80765_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80784();
function runjs_80784() {
	window.obj80765_droppedInsideTargetActions_3_runningActionsCount = obj80765_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81195").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_3_runningActionsCount = window.obj80765_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80788();
function switchText_80788() {
	window.obj80765_droppedInsideTargetActions_3_runningActionsCount = obj80765_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80765_droppedInsideTargetActions_3_runningActionsCount = window.obj80765_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80765_droppedInsideTargetActions_3_runningActionsCount = window.obj80765_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj80765_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_80785();
function runjs_80785() {
	window.obj80765_droppedInsideTargetActions_3_runningActionsCount = obj80765_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81195").css("border-color", "#058E3F"); $("#obj81195").css("border-width", "2px"); $("#obj81195").css("border-style", "solid"); $("#obj81195").css("border-radius", "10px"); $("#obj81195").css("-webkit-border-radius", "10px"); $("#obj81195").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_3_runningActionsCount = window.obj80765_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81181 
hide_80786();
function hide_80786() {
	var selector = "#obj81181";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80765_droppedInsideTargetActions_3_runningActionsCount = obj80765_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80765_droppedInsideTargetActions_3_runningActionsCount = window.obj80765_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80786(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80765_droppedInsideTargetActions_3_runningActionsCount = window.obj80765_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80765_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_80787();
function runjs_80787() {
	window.obj80765_droppedInsideTargetActions_3_runningActionsCount = obj80765_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80765").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_3_runningActionsCount = window.obj80765_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81173 
playAudio_80789();
function playAudio_80789() {
	window.obj80765_droppedInsideTargetActions_3_runningActionsCount = obj80765_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj81173")[0];
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
		    window.obj80765_droppedInsideTargetActions_3_runningActionsCount = window.obj80765_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80765_droppedInsideTargetActions_3_runningActionsCount = window.obj80765_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_3_actionGroup6();
}
	}
}









};
obj80765_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90351();
function switchText_90351() {
	window.obj80765_droppedInsideTargetActions_3_runningActionsCount = obj80765_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80765_droppedInsideTargetActions_3_runningActionsCount = window.obj80765_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80765_droppedInsideTargetActions_3_runningActionsCount = window.obj80765_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj80765_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	





















};
obj80765_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80777();
function runjs_80777() {
	window.obj80765_droppedInsideTargetActions_2_runningActionsCount = obj80765_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81199").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_2_runningActionsCount = window.obj80765_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80781();
function switchText_80781() {
	window.obj80765_droppedInsideTargetActions_2_runningActionsCount = obj80765_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80765_droppedInsideTargetActions_2_runningActionsCount = window.obj80765_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80765_droppedInsideTargetActions_2_runningActionsCount = window.obj80765_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj80765_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_80778();
function runjs_80778() {
	window.obj80765_droppedInsideTargetActions_2_runningActionsCount = obj80765_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81199").css("border-color", "#058E3F"); $("#obj81199").css("border-width", "2px"); $("#obj81199").css("border-style", "solid"); $("#obj81199").css("border-radius", "10px"); $("#obj81199").css("-webkit-border-radius", "10px"); $("#obj81199").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_2_runningActionsCount = window.obj80765_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81185 
hide_80779();
function hide_80779() {
	var selector = "#obj81185";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80765_droppedInsideTargetActions_2_runningActionsCount = obj80765_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80765_droppedInsideTargetActions_2_runningActionsCount = window.obj80765_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80779(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80765_droppedInsideTargetActions_2_runningActionsCount = window.obj80765_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80765_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_80780();
function runjs_80780() {
	window.obj80765_droppedInsideTargetActions_2_runningActionsCount = obj80765_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80765").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_2_runningActionsCount = window.obj80765_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81173 
playAudio_80782();
function playAudio_80782() {
	window.obj80765_droppedInsideTargetActions_2_runningActionsCount = obj80765_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj81173")[0];
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
		    window.obj80765_droppedInsideTargetActions_2_runningActionsCount = window.obj80765_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80765_droppedInsideTargetActions_2_runningActionsCount = window.obj80765_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj80765_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90350();
function switchText_90350() {
	window.obj80765_droppedInsideTargetActions_2_runningActionsCount = obj80765_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80765_droppedInsideTargetActions_2_runningActionsCount = window.obj80765_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80765_droppedInsideTargetActions_2_runningActionsCount = window.obj80765_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj80765_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	





















};
obj80765_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80770();
function runjs_80770() {
	window.obj80765_droppedInsideTargetActions_runningActionsCount = obj80765_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81203").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_runningActionsCount = window.obj80765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80774();
function switchText_80774() {
	window.obj80765_droppedInsideTargetActions_runningActionsCount = obj80765_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80765_droppedInsideTargetActions_runningActionsCount = window.obj80765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80765_droppedInsideTargetActions_runningActionsCount = window.obj80765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj80765_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_80771();
function runjs_80771() {
	window.obj80765_droppedInsideTargetActions_runningActionsCount = obj80765_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81203").css("border-color", "#058E3F"); $("#obj81203").css("border-width", "2px"); $("#obj81203").css("border-style", "solid"); $("#obj81203").css("border-radius", "10px"); $("#obj81203").css("-webkit-border-radius", "10px"); $("#obj81203").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_runningActionsCount = window.obj80765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81189 
hide_80772();
function hide_80772() {
	var selector = "#obj81189";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80765_droppedInsideTargetActions_runningActionsCount = obj80765_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80765_droppedInsideTargetActions_runningActionsCount = window.obj80765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80772(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80765_droppedInsideTargetActions_runningActionsCount = window.obj80765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80765_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_80773();
function runjs_80773() {
	window.obj80765_droppedInsideTargetActions_runningActionsCount = obj80765_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80765").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80765_droppedInsideTargetActions_runningActionsCount = window.obj80765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj80765_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81173 
playAudio_80775();
function playAudio_80775() {
	window.obj80765_droppedInsideTargetActions_runningActionsCount = obj80765_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj81173")[0];
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
		    window.obj80765_droppedInsideTargetActions_runningActionsCount = window.obj80765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80765_droppedInsideTargetActions_runningActionsCount = window.obj80765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj80765_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90349();
function switchText_90349() {
	window.obj80765_droppedInsideTargetActions_runningActionsCount = obj80765_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81175_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81175_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81175").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81175_content");
			setTimeout(function () {
				window.obj80765_droppedInsideTargetActions_runningActionsCount = window.obj80765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81175 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80765_droppedInsideTargetActions_runningActionsCount = window.obj80765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80765_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj80765_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80765_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80765").trigger("obj80765_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80765) {
				console.warn("de-queueing event obj80765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80765_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj80747_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80747_onTap_activeActionGroupIndex = -1;
		$("#obj80747").trigger("obj80747_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80747) {
				console.warn("de-queueing event obj80747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80747_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj80747 
hide_80750();
function hide_80750() {
	var selector = "#obj80747";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80747_onTap_runningActionsCount = obj80747_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80747_onTap_runningActionsCount = window.obj80747_onTap_runningActionsCount - 1;
if (window.obj80747_onTap_runningActionsCount < 0) {
	window.obj80747_onTap_runningActionsCount = 0;
} else if (window.obj80747_onTap_runningActionsCount == 0) {
	obj80747_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80750(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80747_onTap_runningActionsCount = window.obj80747_onTap_runningActionsCount - 1;
if (window.obj80747_onTap_runningActionsCount < 0) {
	window.obj80747_onTap_runningActionsCount = 0;
} else if (window.obj80747_onTap_runningActionsCount == 0) {
	obj80747_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj80737 
stopMovie_80749();
function stopMovie_80749() {
	window.obj80747_onTap_runningActionsCount = obj80747_onTap_runningActionsCount + 1;
	var myVideo = $("#obj80737")[0];
	myVideo.pause();
	window.obj80747_onTap_runningActionsCount = window.obj80747_onTap_runningActionsCount - 1;
if (window.obj80747_onTap_runningActionsCount < 0) {
	window.obj80747_onTap_runningActionsCount = 0;
} else if (window.obj80747_onTap_runningActionsCount == 0) {
	obj80747_onTap_actionGroup1();
}
}
















};
obj80747_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80747_onTap_activeActionGroupIndex = -1;
		$("#obj80747").trigger("obj80747_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80747) {
				console.warn("de-queueing event obj80747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80747_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj80739
(function(){
	window.obj80747_onTap_runningActionsCount = obj80747_onTap_runningActionsCount + 1;

	var selector = "#obj80739";
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
					window.obj80747_onTap_runningActionsCount = window.obj80747_onTap_runningActionsCount - 1;
if (window.obj80747_onTap_runningActionsCount < 0) {
	window.obj80747_onTap_runningActionsCount = 0;
} else if (window.obj80747_onTap_runningActionsCount == 0) {
	obj80747_onTap_actionGroup2();
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
				window.obj80747_onTap_runningActionsCount = window.obj80747_onTap_runningActionsCount - 1;
if (window.obj80747_onTap_runningActionsCount < 0) {
	window.obj80747_onTap_runningActionsCount = 0;
} else if (window.obj80747_onTap_runningActionsCount == 0) {
	obj80747_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80747_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80747_onTap_activeActionGroupIndex = -1;
		$("#obj80747").trigger("obj80747_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80747) {
				console.warn("de-queueing event obj80747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80747_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj80737 
move_80752();
function move_80752() {
	window.obj80747_onTap_runningActionsCount = obj80747_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj80737");
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
			window.obj80747_onTap_runningActionsCount = window.obj80747_onTap_runningActionsCount - 1;
if (window.obj80747_onTap_runningActionsCount < 0) {
	window.obj80747_onTap_runningActionsCount = 0;
} else if (window.obj80747_onTap_runningActionsCount == 0) {
	obj80747_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj80747_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80747_onTap_activeActionGroupIndex = -1;
		$("#obj80747").trigger("obj80747_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80747) {
				console.warn("de-queueing event obj80747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80747_onTap_activeActionGroupIndex = 3;
	





















};
obj80739_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80739_onTap_activeActionGroupIndex = -1;
		$("#obj80739").trigger("obj80739_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80739) {
				console.warn("de-queueing event obj80739." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80739").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80739_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj80739 
hide_80742();
function hide_80742() {
	var selector = "#obj80739";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80739_onTap_runningActionsCount = obj80739_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80739_onTap_runningActionsCount = window.obj80739_onTap_runningActionsCount - 1;
if (window.obj80739_onTap_runningActionsCount < 0) {
	window.obj80739_onTap_runningActionsCount = 0;
} else if (window.obj80739_onTap_runningActionsCount == 0) {
	obj80739_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80742(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80739_onTap_runningActionsCount = window.obj80739_onTap_runningActionsCount - 1;
if (window.obj80739_onTap_runningActionsCount < 0) {
	window.obj80739_onTap_runningActionsCount = 0;
} else if (window.obj80739_onTap_runningActionsCount == 0) {
	obj80739_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj80737 
playPauseMovie_80741();
function playPauseMovie_80741() {
	window.obj80739_onTap_runningActionsCount = obj80739_onTap_runningActionsCount + 1;
	var myVideo = $("#obj80737")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj80739_onTap_runningActionsCount = window.obj80739_onTap_runningActionsCount - 1;
if (window.obj80739_onTap_runningActionsCount < 0) {
	window.obj80739_onTap_runningActionsCount = 0;
} else if (window.obj80739_onTap_runningActionsCount == 0) {
	obj80739_onTap_actionGroup1();
}
}

















};
obj80739_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80739_onTap_activeActionGroupIndex = -1;
		$("#obj80739").trigger("obj80739_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80739) {
				console.warn("de-queueing event obj80739." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80739").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80739_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj80747
(function(){
	window.obj80739_onTap_runningActionsCount = obj80739_onTap_runningActionsCount + 1;

	var selector = "#obj80747";
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
					window.obj80739_onTap_runningActionsCount = window.obj80739_onTap_runningActionsCount - 1;
if (window.obj80739_onTap_runningActionsCount < 0) {
	window.obj80739_onTap_runningActionsCount = 0;
} else if (window.obj80739_onTap_runningActionsCount == 0) {
	obj80739_onTap_actionGroup2();
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
				window.obj80739_onTap_runningActionsCount = window.obj80739_onTap_runningActionsCount - 1;
if (window.obj80739_onTap_runningActionsCount < 0) {
	window.obj80739_onTap_runningActionsCount = 0;
} else if (window.obj80739_onTap_runningActionsCount == 0) {
	obj80739_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80739_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80739_onTap_activeActionGroupIndex = -1;
		$("#obj80739").trigger("obj80739_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80739) {
				console.warn("de-queueing event obj80739." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80739").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80739_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj80737 
move_80744();
function move_80744() {
	window.obj80739_onTap_runningActionsCount = obj80739_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj80737");
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
			window.obj80739_onTap_runningActionsCount = window.obj80739_onTap_runningActionsCount - 1;
if (window.obj80739_onTap_runningActionsCount < 0) {
	window.obj80739_onTap_runningActionsCount = 0;
} else if (window.obj80739_onTap_runningActionsCount == 0) {
	obj80739_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj80739_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80739_onTap_activeActionGroupIndex = -1;
		$("#obj80739").trigger("obj80739_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80739) {
				console.warn("de-queueing event obj80739." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80739").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80739_onTap_activeActionGroupIndex = 3;
	





















};
obj88081_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88081_onTap_activeActionGroupIndex = -1;
		$("#obj88081").trigger("obj88081_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88081) {
				console.warn("de-queueing event obj88081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88081_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88086 
stopAudio_88083();
function stopAudio_88083() {
	window.obj88081_onTap_runningActionsCount = obj88081_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88086")[0];
	myAudio.pause();
	window.obj88081_onTap_runningActionsCount = window.obj88081_onTap_runningActionsCount - 1;
if (window.obj88081_onTap_runningActionsCount < 0) {
	window.obj88081_onTap_runningActionsCount = 0;
} else if (window.obj88081_onTap_runningActionsCount == 0) {
	obj88081_onTap_actionGroup1();
}
}








};
obj88081_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88081_onTap_activeActionGroupIndex = -1;
		$("#obj88081").trigger("obj88081_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88081) {
				console.warn("de-queueing event obj88081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88081_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88081 
hide_88084();
function hide_88084() {
	var selector = "#obj88081";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88081_onTap_runningActionsCount = obj88081_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88081_onTap_runningActionsCount = window.obj88081_onTap_runningActionsCount - 1;
if (window.obj88081_onTap_runningActionsCount < 0) {
	window.obj88081_onTap_runningActionsCount = 0;
} else if (window.obj88081_onTap_runningActionsCount == 0) {
	obj88081_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88084(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88081_onTap_runningActionsCount = window.obj88081_onTap_runningActionsCount - 1;
if (window.obj88081_onTap_runningActionsCount < 0) {
	window.obj88081_onTap_runningActionsCount = 0;
} else if (window.obj88081_onTap_runningActionsCount == 0) {
	obj88081_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88081_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88081_onTap_activeActionGroupIndex = -1;
		$("#obj88081").trigger("obj88081_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88081) {
				console.warn("de-queueing event obj88081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88081_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88076
(function(){
	window.obj88081_onTap_runningActionsCount = obj88081_onTap_runningActionsCount + 1;

	var selector = "#obj88076";
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
					window.obj88081_onTap_runningActionsCount = window.obj88081_onTap_runningActionsCount - 1;
if (window.obj88081_onTap_runningActionsCount < 0) {
	window.obj88081_onTap_runningActionsCount = 0;
} else if (window.obj88081_onTap_runningActionsCount == 0) {
	obj88081_onTap_actionGroup3();
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
				window.obj88081_onTap_runningActionsCount = window.obj88081_onTap_runningActionsCount - 1;
if (window.obj88081_onTap_runningActionsCount < 0) {
	window.obj88081_onTap_runningActionsCount = 0;
} else if (window.obj88081_onTap_runningActionsCount == 0) {
	obj88081_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88081_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88081_onTap_activeActionGroupIndex = -1;
		$("#obj88081").trigger("obj88081_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88081) {
				console.warn("de-queueing event obj88081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88081_onTap_activeActionGroupIndex = 3;
	





















};
obj88076_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88076_onTap_activeActionGroupIndex = -1;
		$("#obj88076").trigger("obj88076_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88076) {
				console.warn("de-queueing event obj88076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88076_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88076 
hide_88078();
function hide_88078() {
	var selector = "#obj88076";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88076_onTap_runningActionsCount = obj88076_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88076_onTap_runningActionsCount = window.obj88076_onTap_runningActionsCount - 1;
if (window.obj88076_onTap_runningActionsCount < 0) {
	window.obj88076_onTap_runningActionsCount = 0;
} else if (window.obj88076_onTap_runningActionsCount == 0) {
	obj88076_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88078(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88076_onTap_runningActionsCount = window.obj88076_onTap_runningActionsCount - 1;
if (window.obj88076_onTap_runningActionsCount < 0) {
	window.obj88076_onTap_runningActionsCount = 0;
} else if (window.obj88076_onTap_runningActionsCount == 0) {
	obj88076_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88076_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88076_onTap_activeActionGroupIndex = -1;
		$("#obj88076").trigger("obj88076_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88076) {
				console.warn("de-queueing event obj88076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88076_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88081
(function(){
	window.obj88076_onTap_runningActionsCount = obj88076_onTap_runningActionsCount + 1;

	var selector = "#obj88081";
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
					window.obj88076_onTap_runningActionsCount = window.obj88076_onTap_runningActionsCount - 1;
if (window.obj88076_onTap_runningActionsCount < 0) {
	window.obj88076_onTap_runningActionsCount = 0;
} else if (window.obj88076_onTap_runningActionsCount == 0) {
	obj88076_onTap_actionGroup2();
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
				window.obj88076_onTap_runningActionsCount = window.obj88076_onTap_runningActionsCount - 1;
if (window.obj88076_onTap_runningActionsCount < 0) {
	window.obj88076_onTap_runningActionsCount = 0;
} else if (window.obj88076_onTap_runningActionsCount == 0) {
	obj88076_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88076_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88076_onTap_activeActionGroupIndex = -1;
		$("#obj88076").trigger("obj88076_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88076) {
				console.warn("de-queueing event obj88076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88076_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88086 
playAudio_88080();
function playAudio_88080() {
	window.obj88076_onTap_runningActionsCount = obj88076_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88086")[0];
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
		    window.obj88076_onTap_runningActionsCount = window.obj88076_onTap_runningActionsCount - 1;
if (window.obj88076_onTap_runningActionsCount < 0) {
	window.obj88076_onTap_runningActionsCount = 0;
} else if (window.obj88076_onTap_runningActionsCount == 0) {
	obj88076_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88076_onTap_runningActionsCount = window.obj88076_onTap_runningActionsCount - 1;
if (window.obj88076_onTap_runningActionsCount < 0) {
	window.obj88076_onTap_runningActionsCount = 0;
} else if (window.obj88076_onTap_runningActionsCount == 0) {
	obj88076_onTap_actionGroup3();
}
	}
}









};
obj88076_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88076_onTap_activeActionGroupIndex = -1;
		$("#obj88076").trigger("obj88076_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88076) {
				console.warn("de-queueing event obj88076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88076_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj81228: Event Touch Down
 *
 */
$("#obj81228").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81228_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81228_onTap is still running");
	return;
}
var obj81228_onTap_runningActionsCount = 0;
var obj81228_onTap_loopCount = 0;
obj81228_onTap_actionGroup0();
});










/*
 *
 *   obj81225: Event Touch Down
 *
 */
$("#obj81225").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81225_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81225_onTap is still running");
	return;
}
var obj81225_onTap_runningActionsCount = 0;
var obj81225_onTap_loopCount = 0;
obj81225_onTap_actionGroup0();
});










/*
 *
 *   obj81221: Event Touch Down
 *
 */
$("#obj81221").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81221_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81221_onTap is still running");
	return;
}
var obj81221_onTap_runningActionsCount = 0;
var obj81221_onTap_loopCount = 0;
obj81221_onTap_actionGroup0();
});





































































































































































































































































/*
 *
 *   obj81104: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj81104");
	var winTarget = document.getElementById("obj81104");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj81104").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj81104_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj81104_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj81104_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81104_onTouchDown is still running");
	return;
}
var obj81104_onTouchDown_runningActionsCount = 0;
var obj81104_onTouchDown_loopCount = 0;
obj81104_onTouchDown_actionGroup0();
});



/*
 *
 *   obj81104: Event SCActionDragDrop81107_droppedOutsideTargetActions
 *
 */
$("#obj81104").bind("SCActionDragDrop81107_droppedOutsideTargetActions", function(event) {
	if (window.obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81104_SCActionDragDrop81107_droppedOutsideTargetActions is still running");
	return;
}
var obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_runningActionsCount = 0;
var obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_loopCount = 0;
obj81104_SCActionDragDrop81107_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj81104: Event droppedInsideTargetActions_6
 *
 */
$("#obj81104").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj81104_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81104_droppedInsideTargetActions_6 is still running");
	return;
}
var obj81104_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj81104_droppedInsideTargetActions_6_loopCount = 0;
obj81104_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj81104: Event droppedInsideTargetActions_5
 *
 */
$("#obj81104").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj81104_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81104_droppedInsideTargetActions_5 is still running");
	return;
}
var obj81104_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj81104_droppedInsideTargetActions_5_loopCount = 0;
obj81104_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj81104: Event droppedInsideTargetActions_4
 *
 */
$("#obj81104").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj81104_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81104_droppedInsideTargetActions_4 is still running");
	return;
}
var obj81104_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj81104_droppedInsideTargetActions_4_loopCount = 0;
obj81104_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj81104: Event droppedInsideTargetActions_3
 *
 */
$("#obj81104").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj81104_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81104_droppedInsideTargetActions_3 is still running");
	return;
}
var obj81104_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj81104_droppedInsideTargetActions_3_loopCount = 0;
obj81104_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj81104: Event droppedInsideTargetActions_2
 *
 */
$("#obj81104").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj81104_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81104_droppedInsideTargetActions_2 is still running");
	return;
}
var obj81104_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj81104_droppedInsideTargetActions_2_loopCount = 0;
obj81104_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj81104: Event droppedInsideTargetActions
 *
 */
$("#obj81104").bind("droppedInsideTargetActions", function(event) {
	if (window.obj81104_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81104_droppedInsideTargetActions is still running");
	return;
}
var obj81104_droppedInsideTargetActions_runningActionsCount = 0;
var obj81104_droppedInsideTargetActions_loopCount = 0;
obj81104_droppedInsideTargetActions_actionGroup0();
});


























/*
 *
 *   obj81033: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj81033");
	var winTarget = document.getElementById("obj81033");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj81033").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj81033_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj81033_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj81033_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81033_onTouchDown is still running");
	return;
}
var obj81033_onTouchDown_runningActionsCount = 0;
var obj81033_onTouchDown_loopCount = 0;
obj81033_onTouchDown_actionGroup0();
});



/*
 *
 *   obj81033: Event SCActionDragDrop81036_droppedOutsideTargetActions
 *
 */
$("#obj81033").bind("SCActionDragDrop81036_droppedOutsideTargetActions", function(event) {
	if (window.obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81033_SCActionDragDrop81036_droppedOutsideTargetActions is still running");
	return;
}
var obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_runningActionsCount = 0;
var obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_loopCount = 0;
obj81033_SCActionDragDrop81036_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj81033: Event droppedInsideTargetActions_6
 *
 */
$("#obj81033").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj81033_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81033_droppedInsideTargetActions_6 is still running");
	return;
}
var obj81033_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj81033_droppedInsideTargetActions_6_loopCount = 0;
obj81033_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj81033: Event droppedInsideTargetActions_5
 *
 */
$("#obj81033").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj81033_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81033_droppedInsideTargetActions_5 is still running");
	return;
}
var obj81033_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj81033_droppedInsideTargetActions_5_loopCount = 0;
obj81033_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj81033: Event droppedInsideTargetActions_4
 *
 */
$("#obj81033").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj81033_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81033_droppedInsideTargetActions_4 is still running");
	return;
}
var obj81033_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj81033_droppedInsideTargetActions_4_loopCount = 0;
obj81033_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj81033: Event droppedInsideTargetActions_3
 *
 */
$("#obj81033").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj81033_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81033_droppedInsideTargetActions_3 is still running");
	return;
}
var obj81033_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj81033_droppedInsideTargetActions_3_loopCount = 0;
obj81033_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj81033: Event droppedInsideTargetActions_2
 *
 */
$("#obj81033").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj81033_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81033_droppedInsideTargetActions_2 is still running");
	return;
}
var obj81033_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj81033_droppedInsideTargetActions_2_loopCount = 0;
obj81033_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj81033: Event droppedInsideTargetActions
 *
 */
$("#obj81033").bind("droppedInsideTargetActions", function(event) {
	if (window.obj81033_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81033_droppedInsideTargetActions is still running");
	return;
}
var obj81033_droppedInsideTargetActions_runningActionsCount = 0;
var obj81033_droppedInsideTargetActions_loopCount = 0;
obj81033_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj80966: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj80966");
	var winTarget = document.getElementById("obj80966");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj80966").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj80966_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj80966_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj80966_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80966_onTouchDown is still running");
	return;
}
var obj80966_onTouchDown_runningActionsCount = 0;
var obj80966_onTouchDown_loopCount = 0;
obj80966_onTouchDown_actionGroup0();
});



/*
 *
 *   obj80966: Event SCActionDragDrop80969_droppedOutsideTargetActions
 *
 */
$("#obj80966").bind("SCActionDragDrop80969_droppedOutsideTargetActions", function(event) {
	if (window.obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80966_SCActionDragDrop80969_droppedOutsideTargetActions is still running");
	return;
}
var obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_loopCount = 0;
obj80966_SCActionDragDrop80969_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj80966: Event droppedInsideTargetActions_6
 *
 */
$("#obj80966").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj80966_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80966_droppedInsideTargetActions_6 is still running");
	return;
}
var obj80966_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj80966_droppedInsideTargetActions_6_loopCount = 0;
obj80966_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj80966: Event droppedInsideTargetActions_5
 *
 */
$("#obj80966").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj80966_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80966_droppedInsideTargetActions_5 is still running");
	return;
}
var obj80966_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj80966_droppedInsideTargetActions_5_loopCount = 0;
obj80966_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj80966: Event droppedInsideTargetActions_4
 *
 */
$("#obj80966").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj80966_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80966_droppedInsideTargetActions_4 is still running");
	return;
}
var obj80966_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj80966_droppedInsideTargetActions_4_loopCount = 0;
obj80966_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj80966: Event droppedInsideTargetActions_3
 *
 */
$("#obj80966").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj80966_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80966_droppedInsideTargetActions_3 is still running");
	return;
}
var obj80966_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj80966_droppedInsideTargetActions_3_loopCount = 0;
obj80966_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj80966: Event droppedInsideTargetActions_2
 *
 */
$("#obj80966").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj80966_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80966_droppedInsideTargetActions_2 is still running");
	return;
}
var obj80966_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj80966_droppedInsideTargetActions_2_loopCount = 0;
obj80966_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj80966: Event droppedInsideTargetActions
 *
 */
$("#obj80966").bind("droppedInsideTargetActions", function(event) {
	if (window.obj80966_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80966_droppedInsideTargetActions is still running");
	return;
}
var obj80966_droppedInsideTargetActions_runningActionsCount = 0;
var obj80966_droppedInsideTargetActions_loopCount = 0;
obj80966_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj80899: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj80899");
	var winTarget = document.getElementById("obj80899");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj80899").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj80899_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj80899_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj80899_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80899_onTouchDown is still running");
	return;
}
var obj80899_onTouchDown_runningActionsCount = 0;
var obj80899_onTouchDown_loopCount = 0;
obj80899_onTouchDown_actionGroup0();
});



/*
 *
 *   obj80899: Event SCActionDragDrop80902_droppedOutsideTargetActions
 *
 */
$("#obj80899").bind("SCActionDragDrop80902_droppedOutsideTargetActions", function(event) {
	if (window.obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80899_SCActionDragDrop80902_droppedOutsideTargetActions is still running");
	return;
}
var obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_loopCount = 0;
obj80899_SCActionDragDrop80902_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj80899: Event droppedInsideTargetActions_6
 *
 */
$("#obj80899").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj80899_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80899_droppedInsideTargetActions_6 is still running");
	return;
}
var obj80899_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj80899_droppedInsideTargetActions_6_loopCount = 0;
obj80899_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj80899: Event droppedInsideTargetActions_5
 *
 */
$("#obj80899").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj80899_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80899_droppedInsideTargetActions_5 is still running");
	return;
}
var obj80899_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj80899_droppedInsideTargetActions_5_loopCount = 0;
obj80899_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj80899: Event droppedInsideTargetActions_4
 *
 */
$("#obj80899").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj80899_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80899_droppedInsideTargetActions_4 is still running");
	return;
}
var obj80899_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj80899_droppedInsideTargetActions_4_loopCount = 0;
obj80899_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj80899: Event droppedInsideTargetActions_3
 *
 */
$("#obj80899").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj80899_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80899_droppedInsideTargetActions_3 is still running");
	return;
}
var obj80899_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj80899_droppedInsideTargetActions_3_loopCount = 0;
obj80899_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj80899: Event droppedInsideTargetActions_2
 *
 */
$("#obj80899").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj80899_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80899_droppedInsideTargetActions_2 is still running");
	return;
}
var obj80899_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj80899_droppedInsideTargetActions_2_loopCount = 0;
obj80899_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj80899: Event droppedInsideTargetActions
 *
 */
$("#obj80899").bind("droppedInsideTargetActions", function(event) {
	if (window.obj80899_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80899_droppedInsideTargetActions is still running");
	return;
}
var obj80899_droppedInsideTargetActions_runningActionsCount = 0;
var obj80899_droppedInsideTargetActions_loopCount = 0;
obj80899_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj80832: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj80832");
	var winTarget = document.getElementById("obj80832");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj80832").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj80832_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj80832_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj80832_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80832_onTouchDown is still running");
	return;
}
var obj80832_onTouchDown_runningActionsCount = 0;
var obj80832_onTouchDown_loopCount = 0;
obj80832_onTouchDown_actionGroup0();
});



/*
 *
 *   obj80832: Event SCActionDragDrop80835_droppedOutsideTargetActions
 *
 */
$("#obj80832").bind("SCActionDragDrop80835_droppedOutsideTargetActions", function(event) {
	if (window.obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80832_SCActionDragDrop80835_droppedOutsideTargetActions is still running");
	return;
}
var obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_loopCount = 0;
obj80832_SCActionDragDrop80835_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj80832: Event droppedInsideTargetActions_6
 *
 */
$("#obj80832").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj80832_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80832_droppedInsideTargetActions_6 is still running");
	return;
}
var obj80832_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj80832_droppedInsideTargetActions_6_loopCount = 0;
obj80832_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj80832: Event droppedInsideTargetActions_5
 *
 */
$("#obj80832").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj80832_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80832_droppedInsideTargetActions_5 is still running");
	return;
}
var obj80832_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj80832_droppedInsideTargetActions_5_loopCount = 0;
obj80832_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj80832: Event droppedInsideTargetActions_4
 *
 */
$("#obj80832").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj80832_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80832_droppedInsideTargetActions_4 is still running");
	return;
}
var obj80832_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj80832_droppedInsideTargetActions_4_loopCount = 0;
obj80832_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj80832: Event droppedInsideTargetActions_3
 *
 */
$("#obj80832").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj80832_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80832_droppedInsideTargetActions_3 is still running");
	return;
}
var obj80832_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj80832_droppedInsideTargetActions_3_loopCount = 0;
obj80832_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj80832: Event droppedInsideTargetActions_2
 *
 */
$("#obj80832").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj80832_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80832_droppedInsideTargetActions_2 is still running");
	return;
}
var obj80832_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj80832_droppedInsideTargetActions_2_loopCount = 0;
obj80832_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj80832: Event droppedInsideTargetActions
 *
 */
$("#obj80832").bind("droppedInsideTargetActions", function(event) {
	if (window.obj80832_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80832_droppedInsideTargetActions is still running");
	return;
}
var obj80832_droppedInsideTargetActions_runningActionsCount = 0;
var obj80832_droppedInsideTargetActions_loopCount = 0;
obj80832_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj80765: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj80765");
	var winTarget = document.getElementById("obj80765");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj80765").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj80765_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj80765_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj80765_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80765_onTouchDown is still running");
	return;
}
var obj80765_onTouchDown_runningActionsCount = 0;
var obj80765_onTouchDown_loopCount = 0;
obj80765_onTouchDown_actionGroup0();
});



/*
 *
 *   obj80765: Event SCActionDragDrop80768_droppedOutsideTargetActions
 *
 */
$("#obj80765").bind("SCActionDragDrop80768_droppedOutsideTargetActions", function(event) {
	if (window.obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80765_SCActionDragDrop80768_droppedOutsideTargetActions is still running");
	return;
}
var obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_loopCount = 0;
obj80765_SCActionDragDrop80768_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj80765: Event droppedInsideTargetActions_6
 *
 */
$("#obj80765").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj80765_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80765_droppedInsideTargetActions_6 is still running");
	return;
}
var obj80765_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj80765_droppedInsideTargetActions_6_loopCount = 0;
obj80765_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj80765: Event droppedInsideTargetActions_5
 *
 */
$("#obj80765").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj80765_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80765_droppedInsideTargetActions_5 is still running");
	return;
}
var obj80765_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj80765_droppedInsideTargetActions_5_loopCount = 0;
obj80765_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj80765: Event droppedInsideTargetActions_4
 *
 */
$("#obj80765").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj80765_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80765_droppedInsideTargetActions_4 is still running");
	return;
}
var obj80765_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj80765_droppedInsideTargetActions_4_loopCount = 0;
obj80765_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj80765: Event droppedInsideTargetActions_3
 *
 */
$("#obj80765").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj80765_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80765_droppedInsideTargetActions_3 is still running");
	return;
}
var obj80765_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj80765_droppedInsideTargetActions_3_loopCount = 0;
obj80765_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj80765: Event droppedInsideTargetActions_2
 *
 */
$("#obj80765").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj80765_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80765_droppedInsideTargetActions_2 is still running");
	return;
}
var obj80765_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj80765_droppedInsideTargetActions_2_loopCount = 0;
obj80765_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj80765: Event droppedInsideTargetActions
 *
 */
$("#obj80765").bind("droppedInsideTargetActions", function(event) {
	if (window.obj80765_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80765_droppedInsideTargetActions is still running");
	return;
}
var obj80765_droppedInsideTargetActions_runningActionsCount = 0;
var obj80765_droppedInsideTargetActions_loopCount = 0;
obj80765_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj80747: Event Touch Down
 *
 */
$("#obj80747").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80747_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80747_onTap is still running");
	return;
}
var obj80747_onTap_runningActionsCount = 0;
var obj80747_onTap_loopCount = 0;
obj80747_onTap_actionGroup0();
});










/*
 *
 *   obj80739: Event Touch Down
 *
 */
$("#obj80739").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80739_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80739_onTap is still running");
	return;
}
var obj80739_onTap_runningActionsCount = 0;
var obj80739_onTap_loopCount = 0;
obj80739_onTap_actionGroup0();
});










/*
 *
 *   obj88081: Event Touch Down
 *
 */
$("#obj88081").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88081_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88081_onTap is still running");
	return;
}
var obj88081_onTap_runningActionsCount = 0;
var obj88081_onTap_loopCount = 0;
obj88081_onTap_actionGroup0();
});










/*
 *
 *   obj88076: Event Touch Down
 *
 */
$("#obj88076").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88076_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88076_onTap is still running");
	return;
}
var obj88076_onTap_runningActionsCount = 0;
var obj88076_onTap_loopCount = 0;
obj88076_onTap_actionGroup0();
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
	
$("#obj81231").trigger('SCEventShow');
$("#obj81228").trigger('SCEventShow');
$("#obj81225").trigger('SCEventShow');
$("#obj81221").trigger('SCEventShow');
$("#obj81219").trigger('SCEventShow');
$("#obj81217").trigger('SCEventShow');
$("#obj81215").trigger('SCEventShow');
$("#obj81213").trigger('SCEventShow');
$("#obj81211").trigger('SCEventShow');
$("#obj81209").trigger('SCEventShow');
$("#obj81207").trigger('SCEventShow');
$("#obj81205").trigger('SCEventShow');
$("#obj81203").trigger('SCEventShow');
$("#obj81201").trigger('SCEventShow');
$("#obj81199").trigger('SCEventShow');
$("#obj81197").trigger('SCEventShow');
$("#obj81195").trigger('SCEventShow');
$("#obj81193").trigger('SCEventShow');
$("#obj81191").trigger('SCEventShow');
$("#obj81189").trigger('SCEventShow');
$("#obj81187").trigger('SCEventShow');
$("#obj81185").trigger('SCEventShow');
$("#obj81183").trigger('SCEventShow');
$("#obj81181").trigger('SCEventShow');
$("#obj81179").trigger('SCEventShow');
$("#obj81177").trigger('SCEventShow');
$("#obj81175").trigger('SCEventShow');
$("#obj81173").trigger('SCEventShow');
$("#obj81171").trigger('SCEventShow');
$("#obj81104").trigger('SCEventShow');
$("#obj81102").trigger('SCEventShow');
$("#obj81100").trigger('SCEventShow');
$("#obj81033").trigger('SCEventShow');
$("#obj80966").trigger('SCEventShow');
$("#obj80899").trigger('SCEventShow');
$("#obj80832").trigger('SCEventShow');
$("#obj80765").trigger('SCEventShow');
$("#obj80747").trigger('SCEventShow');
$("#obj80739").trigger('SCEventShow');
$("#obj88081").trigger('SCEventShow');
$("#obj88076").trigger('SCEventShow');
$("#obj88086").trigger('SCEventShow');
$("#obj94831").trigger('SCEventShow');
$("#obj80737").trigger('SCEventShow');
	
});