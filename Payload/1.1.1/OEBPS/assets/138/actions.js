pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 40811;
pubcoder.page.title = pubcoder.page.title || "138";
pubcoder.page.number = pubcoder.page.number || 138;
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
var obj41129_onTap_activeActionGroupIndex = -1;
var obj41129_onTap_runningActionsCount = 0;
var obj41129_onTap_loopCount = 0;
var obj41126_onTap_activeActionGroupIndex = -1;
var obj41126_onTap_runningActionsCount = 0;
var obj41126_onTap_loopCount = 0;
var obj41122_onTap_activeActionGroupIndex = -1;
var obj41122_onTap_runningActionsCount = 0;
var obj41122_onTap_loopCount = 0;
var obj40879_onDrag_activeActionGroupIndex = -1;
var obj40879_onDrag_runningActionsCount = 0;
var obj40879_onDrag_loopCount = 0;
var obj40879_onTouchDown_activeActionGroupIndex = -1;
var obj40879_onTouchDown_runningActionsCount = 0;
var obj40879_onTouchDown_loopCount = 0;
var obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_runningActionsCount = 0;
var obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_loopCount = 0;
var obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj40879_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj40879_droppedInsideTargetActions_6_loopCount = 0;
var obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj40879_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj40879_droppedInsideTargetActions_5_loopCount = 0;
var obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj40879_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj40879_droppedInsideTargetActions_4_loopCount = 0;
var obj40879_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj40879_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj40879_droppedInsideTargetActions_3_loopCount = 0;
var obj40879_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj40879_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj40879_droppedInsideTargetActions_2_loopCount = 0;
var obj40879_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj40879_droppedInsideTargetActions_runningActionsCount = 0;
var obj40879_droppedInsideTargetActions_loopCount = 0;
var obj41394_onDrag_activeActionGroupIndex = -1;
var obj41394_onDrag_runningActionsCount = 0;
var obj41394_onDrag_loopCount = 0;
var obj41394_onTouchDown_activeActionGroupIndex = -1;
var obj41394_onTouchDown_runningActionsCount = 0;
var obj41394_onTouchDown_loopCount = 0;
var obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_runningActionsCount = 0;
var obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_loopCount = 0;
var obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj41394_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj41394_droppedInsideTargetActions_6_loopCount = 0;
var obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj41394_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj41394_droppedInsideTargetActions_5_loopCount = 0;
var obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj41394_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj41394_droppedInsideTargetActions_4_loopCount = 0;
var obj41394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj41394_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj41394_droppedInsideTargetActions_3_loopCount = 0;
var obj41394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj41394_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj41394_droppedInsideTargetActions_2_loopCount = 0;
var obj41394_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj41394_droppedInsideTargetActions_runningActionsCount = 0;
var obj41394_droppedInsideTargetActions_loopCount = 0;
var obj41193_onDrag_activeActionGroupIndex = -1;
var obj41193_onDrag_runningActionsCount = 0;
var obj41193_onDrag_loopCount = 0;
var obj41193_onTouchDown_activeActionGroupIndex = -1;
var obj41193_onTouchDown_runningActionsCount = 0;
var obj41193_onTouchDown_loopCount = 0;
var obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_runningActionsCount = 0;
var obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_loopCount = 0;
var obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj41193_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj41193_droppedInsideTargetActions_6_loopCount = 0;
var obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj41193_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj41193_droppedInsideTargetActions_5_loopCount = 0;
var obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj41193_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj41193_droppedInsideTargetActions_4_loopCount = 0;
var obj41193_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj41193_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj41193_droppedInsideTargetActions_3_loopCount = 0;
var obj41193_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj41193_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj41193_droppedInsideTargetActions_2_loopCount = 0;
var obj41193_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj41193_droppedInsideTargetActions_runningActionsCount = 0;
var obj41193_droppedInsideTargetActions_loopCount = 0;
var obj41327_onDrag_activeActionGroupIndex = -1;
var obj41327_onDrag_runningActionsCount = 0;
var obj41327_onDrag_loopCount = 0;
var obj41327_onTouchDown_activeActionGroupIndex = -1;
var obj41327_onTouchDown_runningActionsCount = 0;
var obj41327_onTouchDown_loopCount = 0;
var obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_runningActionsCount = 0;
var obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_loopCount = 0;
var obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj41327_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj41327_droppedInsideTargetActions_6_loopCount = 0;
var obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj41327_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj41327_droppedInsideTargetActions_5_loopCount = 0;
var obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj41327_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj41327_droppedInsideTargetActions_4_loopCount = 0;
var obj41327_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj41327_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj41327_droppedInsideTargetActions_3_loopCount = 0;
var obj41327_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj41327_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj41327_droppedInsideTargetActions_2_loopCount = 0;
var obj41327_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj41327_droppedInsideTargetActions_runningActionsCount = 0;
var obj41327_droppedInsideTargetActions_loopCount = 0;
var obj41260_onDrag_activeActionGroupIndex = -1;
var obj41260_onDrag_runningActionsCount = 0;
var obj41260_onDrag_loopCount = 0;
var obj41260_onTouchDown_activeActionGroupIndex = -1;
var obj41260_onTouchDown_runningActionsCount = 0;
var obj41260_onTouchDown_loopCount = 0;
var obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_runningActionsCount = 0;
var obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_loopCount = 0;
var obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj41260_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj41260_droppedInsideTargetActions_6_loopCount = 0;
var obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj41260_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj41260_droppedInsideTargetActions_5_loopCount = 0;
var obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj41260_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj41260_droppedInsideTargetActions_4_loopCount = 0;
var obj41260_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj41260_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj41260_droppedInsideTargetActions_3_loopCount = 0;
var obj41260_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj41260_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj41260_droppedInsideTargetActions_2_loopCount = 0;
var obj41260_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj41260_droppedInsideTargetActions_runningActionsCount = 0;
var obj41260_droppedInsideTargetActions_loopCount = 0;
var obj41461_onDrag_activeActionGroupIndex = -1;
var obj41461_onDrag_runningActionsCount = 0;
var obj41461_onDrag_loopCount = 0;
var obj41461_onTouchDown_activeActionGroupIndex = -1;
var obj41461_onTouchDown_runningActionsCount = 0;
var obj41461_onTouchDown_loopCount = 0;
var obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_runningActionsCount = 0;
var obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_loopCount = 0;
var obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj41461_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj41461_droppedInsideTargetActions_6_loopCount = 0;
var obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj41461_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj41461_droppedInsideTargetActions_5_loopCount = 0;
var obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj41461_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj41461_droppedInsideTargetActions_4_loopCount = 0;
var obj41461_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj41461_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj41461_droppedInsideTargetActions_3_loopCount = 0;
var obj41461_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj41461_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj41461_droppedInsideTargetActions_2_loopCount = 0;
var obj41461_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj41461_droppedInsideTargetActions_runningActionsCount = 0;
var obj41461_droppedInsideTargetActions_loopCount = 0;
var obj67214_onTap_activeActionGroupIndex = -1;
var obj67214_onTap_runningActionsCount = 0;
var obj67214_onTap_loopCount = 0;
var obj67206_onTap_activeActionGroupIndex = -1;
var obj67206_onTap_runningActionsCount = 0;
var obj67206_onTap_loopCount = 0;
var obj88525_onTap_activeActionGroupIndex = -1;
var obj88525_onTap_runningActionsCount = 0;
var obj88525_onTap_loopCount = 0;
var obj88520_onTap_activeActionGroupIndex = -1;
var obj88520_onTap_runningActionsCount = 0;
var obj88520_onTap_loopCount = 0;
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
		
obj41129_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41129_onTap_activeActionGroupIndex = -1;
		$("#obj41129").trigger("obj41129_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41129) {
				console.warn("de-queueing event obj41129." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41129").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41129_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_41131();
function goToPage_41131() {
	window.obj41129_onTap_runningActionsCount = obj41129_onTap_runningActionsCount + 1;
	$("#anchor820")[0].click();
	window.obj41129_onTap_runningActionsCount = window.obj41129_onTap_runningActionsCount - 1;
if (window.obj41129_onTap_runningActionsCount < 0) {
	window.obj41129_onTap_runningActionsCount = 0;
} else if (window.obj41129_onTap_runningActionsCount == 0) {
	obj41129_onTap_actionGroup1();
}
}





















};
obj41129_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41129_onTap_activeActionGroupIndex = -1;
		$("#obj41129").trigger("obj41129_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41129) {
				console.warn("de-queueing event obj41129." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41129").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41129_onTap_activeActionGroupIndex = 1;
	





















};
obj41126_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41126_onTap_activeActionGroupIndex = -1;
		$("#obj41126").trigger("obj41126_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41126) {
				console.warn("de-queueing event obj41126." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41126").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41126_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_41128();
function goToPage_41128() {
	window.obj41126_onTap_runningActionsCount = obj41126_onTap_runningActionsCount + 1;
	$("#anchor821")[0].click();
	window.obj41126_onTap_runningActionsCount = window.obj41126_onTap_runningActionsCount - 1;
if (window.obj41126_onTap_runningActionsCount < 0) {
	window.obj41126_onTap_runningActionsCount = 0;
} else if (window.obj41126_onTap_runningActionsCount == 0) {
	obj41126_onTap_actionGroup1();
}
}





















};
obj41126_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41126_onTap_activeActionGroupIndex = -1;
		$("#obj41126").trigger("obj41126_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41126) {
				console.warn("de-queueing event obj41126." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41126").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41126_onTap_activeActionGroupIndex = 1;
	





















};
obj41122_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41122_onTap_activeActionGroupIndex = -1;
		$("#obj41122").trigger("obj41122_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41122) {
				console.warn("de-queueing event obj41122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41122_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_41124();
function goToPage_41124() {
	window.obj41122_onTap_runningActionsCount = obj41122_onTap_runningActionsCount + 1;
	$("#anchor822")[0].click();
	window.obj41122_onTap_runningActionsCount = window.obj41122_onTap_runningActionsCount - 1;
if (window.obj41122_onTap_runningActionsCount < 0) {
	window.obj41122_onTap_runningActionsCount = 0;
} else if (window.obj41122_onTap_runningActionsCount == 0) {
	obj41122_onTap_actionGroup1();
}
}





















};
obj41122_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41122_onTap_activeActionGroupIndex = -1;
		$("#obj41122").trigger("obj41122_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41122) {
				console.warn("de-queueing event obj41122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41122_onTap_activeActionGroupIndex = 1;
	





















};
obj40879_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_onTouchDown_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj40879");
//	action: dragDrop
//	target: obj40879 
dragDrop_40882();
function dragDrop_40882() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj40879_onTouchDown_runningActionsCount = obj40879_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj40879');
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
	  	containerNode = $('#obj41112');
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
    	window.obj40879_onTouchDown_runningActionsCount = window.obj40879_onTouchDown_runningActionsCount - 1;
if (window.obj40879_onTouchDown_runningActionsCount < 0) {
	window.obj40879_onTouchDown_runningActionsCount = 0;
} else if (window.obj40879_onTouchDown_runningActionsCount == 0) {
	obj40879_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj41108","#obj41147","#obj41151","#obj41155","#obj41159","#obj41163");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_40882 = false;
    	var dropped_id_40882;
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
					dropped_40882 = true;
					dropped_id_40882 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_40882) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj40879").trigger('SCActionDragDrop40882_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj40879_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj40879_onTouchDown_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj40879 
move_92605();
function move_92605() {
	window.obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_runningActionsCount = obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj40879");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 93;
	var moveY = 597;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_runningActionsCount = window.obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj40879_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41180();
function runjs_41180() {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = obj40879_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41163").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_6_runningActionsCount = window.obj40879_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41181();
function runjs_41181() {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = obj40879_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41163").css("border-color", "#C00000"); $("#obj41163").css("border-width", "2px"); $("#obj41163").css("border-style", "solid"); $("#obj41163").css("border-radius", "10px"); $("#obj41163").css("-webkit-border-radius", "10px"); $("#obj41163").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_6_runningActionsCount = window.obj40879_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj41165 
hide_41182();
function hide_41182() {
	var selector = "#obj41165";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = obj40879_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj40879_droppedInsideTargetActions_6_runningActionsCount = window.obj40879_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41182(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj40879_droppedInsideTargetActions_6_runningActionsCount = window.obj40879_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_6_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj40879_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41183();
function runjs_41183() {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = obj40879_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj40879").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_6_runningActionsCount = window.obj40879_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_6_actionGroup4();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41184();
function switchText_41184() {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = obj40879_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj40879_droppedInsideTargetActions_6_runningActionsCount = window.obj40879_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_6_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj40879_droppedInsideTargetActions_6_runningActionsCount = window.obj40879_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	}
}






};
obj40879_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj40879 
move_41185();
function move_41185() {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = obj40879_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj40879");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 93;
	var moveY = 597;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj40879_droppedInsideTargetActions_6_runningActionsCount = window.obj40879_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_6_actionGroup6();
}
		}, 1);
	});
}



















};
obj40879_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_41186();
function runjs_41186() {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = obj40879_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41163").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_6_runningActionsCount = window.obj40879_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_41187();
function runjs_41187() {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = obj40879_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41163").css("border-color", "#000000"); $("#obj41163").css("border-width", "1px"); $("#obj41163").css("border-style", "solid"); $("#obj41163").css("border-radius", "10px"); $("#obj41163").css("-webkit-border-radius", "10px"); $("#obj41163").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_6_runningActionsCount = window.obj40879_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj41165
(function(){
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = obj40879_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj41165";
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
					window.obj40879_droppedInsideTargetActions_6_runningActionsCount = window.obj40879_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_6_actionGroup9();
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
				window.obj40879_droppedInsideTargetActions_6_runningActionsCount = window.obj40879_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_6_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj40879_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_41189();
function runjs_41189() {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = obj40879_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj40879").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_6_runningActionsCount = window.obj40879_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_6_actionGroup10();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_41190();
function runjs_41190() {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = obj40879_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj40879").css("border-color", "rgba(0,0,0,0)"); $("#obj40879").css("border-width", "0px"); $("#obj40879").css("border-style", "solid"); $("#obj40879").css("border-radius", "10px"); $("#obj40879").css("-webkit-border-radius", "10px"); $("#obj40879").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_6_runningActionsCount = window.obj40879_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_6_actionGroup11();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_6_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj41086 
playAudio_41191();
function playAudio_41191() {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = obj40879_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj41086")[0];
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
		    window.obj40879_droppedInsideTargetActions_6_runningActionsCount = window.obj40879_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_6_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj40879_droppedInsideTargetActions_6_runningActionsCount = window.obj40879_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_6_actionGroup12();
}
	}
}









};
obj40879_droppedInsideTargetActions_6_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_41192();
function switchText_41192() {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = obj40879_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj40879_droppedInsideTargetActions_6_runningActionsCount = window.obj40879_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_6_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj40879_droppedInsideTargetActions_6_runningActionsCount = window.obj40879_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_6_actionGroup13();
}
		}, 1);
	}
}






};
obj40879_droppedInsideTargetActions_6_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex = 13;
	





















};
obj40879_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_40933();
function runjs_40933() {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = obj40879_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41159").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_5_runningActionsCount = window.obj40879_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_40934();
function runjs_40934() {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = obj40879_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41159").css("border-color", "#C00000"); $("#obj41159").css("border-width", "2px"); $("#obj41159").css("border-style", "solid"); $("#obj41159").css("border-radius", "10px"); $("#obj41159").css("-webkit-border-radius", "10px"); $("#obj41159").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_5_runningActionsCount = window.obj40879_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj41161 
hide_40935();
function hide_40935() {
	var selector = "#obj41161";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = obj40879_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj40879_droppedInsideTargetActions_5_runningActionsCount = window.obj40879_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_40935(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj40879_droppedInsideTargetActions_5_runningActionsCount = window.obj40879_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj40879_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_40936();
function runjs_40936() {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = obj40879_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj40879").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_5_runningActionsCount = window.obj40879_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_40937();
function switchText_40937() {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = obj40879_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj40879_droppedInsideTargetActions_5_runningActionsCount = window.obj40879_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj40879_droppedInsideTargetActions_5_runningActionsCount = window.obj40879_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj40879_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj40879 
move_40938();
function move_40938() {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = obj40879_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj40879");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 93;
	var moveY = 597;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj40879_droppedInsideTargetActions_5_runningActionsCount = window.obj40879_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj40879_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_40939();
function runjs_40939() {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = obj40879_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41159").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_5_runningActionsCount = window.obj40879_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_40940();
function runjs_40940() {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = obj40879_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41159").css("border-color", "#000000"); $("#obj41159").css("border-width", "1px"); $("#obj41159").css("border-style", "solid"); $("#obj41159").css("border-radius", "10px"); $("#obj41159").css("-webkit-border-radius", "10px"); $("#obj41159").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_5_runningActionsCount = window.obj40879_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj41161
(function(){
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = obj40879_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj41161";
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
					window.obj40879_droppedInsideTargetActions_5_runningActionsCount = window.obj40879_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj40879_droppedInsideTargetActions_5_runningActionsCount = window.obj40879_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj40879_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_40942();
function runjs_40942() {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = obj40879_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj40879").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_5_runningActionsCount = window.obj40879_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_40943();
function runjs_40943() {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = obj40879_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj40879").css("border-color", "rgba(0,0,0,0)"); $("#obj40879").css("border-width", "0px"); $("#obj40879").css("border-style", "solid"); $("#obj40879").css("border-radius", "10px"); $("#obj40879").css("-webkit-border-radius", "10px"); $("#obj40879").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_5_runningActionsCount = window.obj40879_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj41086 
playAudio_40944();
function playAudio_40944() {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = obj40879_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj41086")[0];
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
		    window.obj40879_droppedInsideTargetActions_5_runningActionsCount = window.obj40879_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj40879_droppedInsideTargetActions_5_runningActionsCount = window.obj40879_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj40879_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_40945();
function switchText_40945() {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = obj40879_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj40879_droppedInsideTargetActions_5_runningActionsCount = window.obj40879_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj40879_droppedInsideTargetActions_5_runningActionsCount = window.obj40879_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj40879_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj40879_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_40919();
function runjs_40919() {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = obj40879_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41155").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_4_runningActionsCount = window.obj40879_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_40920();
function runjs_40920() {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = obj40879_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41155").css("border-color", "#C00000"); $("#obj41155").css("border-width", "2px"); $("#obj41155").css("border-style", "solid"); $("#obj41155").css("border-radius", "10px"); $("#obj41155").css("-webkit-border-radius", "10px"); $("#obj41155").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_4_runningActionsCount = window.obj40879_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj41157 
hide_40921();
function hide_40921() {
	var selector = "#obj41157";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = obj40879_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj40879_droppedInsideTargetActions_4_runningActionsCount = window.obj40879_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_40921(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj40879_droppedInsideTargetActions_4_runningActionsCount = window.obj40879_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj40879_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_40922();
function runjs_40922() {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = obj40879_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj40879").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_4_runningActionsCount = window.obj40879_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_40923();
function switchText_40923() {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = obj40879_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj40879_droppedInsideTargetActions_4_runningActionsCount = window.obj40879_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj40879_droppedInsideTargetActions_4_runningActionsCount = window.obj40879_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj40879_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj40879 
move_40924();
function move_40924() {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = obj40879_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj40879");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 93;
	var moveY = 597;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj40879_droppedInsideTargetActions_4_runningActionsCount = window.obj40879_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj40879_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_40925();
function runjs_40925() {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = obj40879_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41155").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_4_runningActionsCount = window.obj40879_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_40926();
function runjs_40926() {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = obj40879_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41155").css("border-color", "#000000"); $("#obj41155").css("border-width", "1px"); $("#obj41155").css("border-style", "solid"); $("#obj41155").css("border-radius", "10px"); $("#obj41155").css("-webkit-border-radius", "10px"); $("#obj41155").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_4_runningActionsCount = window.obj40879_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj41157
(function(){
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = obj40879_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj41157";
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
					window.obj40879_droppedInsideTargetActions_4_runningActionsCount = window.obj40879_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj40879_droppedInsideTargetActions_4_runningActionsCount = window.obj40879_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj40879_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_40928();
function runjs_40928() {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = obj40879_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj40879").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_4_runningActionsCount = window.obj40879_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_40929();
function runjs_40929() {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = obj40879_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj40879").css("border-color", "rgba(0,0,0,0)"); $("#obj40879").css("border-width", "0px"); $("#obj40879").css("border-style", "solid"); $("#obj40879").css("border-radius", "10px"); $("#obj40879").css("-webkit-border-radius", "10px"); $("#obj40879").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_4_runningActionsCount = window.obj40879_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj41086 
playAudio_40930();
function playAudio_40930() {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = obj40879_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj41086")[0];
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
		    window.obj40879_droppedInsideTargetActions_4_runningActionsCount = window.obj40879_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj40879_droppedInsideTargetActions_4_runningActionsCount = window.obj40879_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj40879_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_40931();
function switchText_40931() {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = obj40879_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj40879_droppedInsideTargetActions_4_runningActionsCount = window.obj40879_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj40879_droppedInsideTargetActions_4_runningActionsCount = window.obj40879_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj40879_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj40879_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41173();
function runjs_41173() {
	window.obj40879_droppedInsideTargetActions_3_runningActionsCount = obj40879_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj41151").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_3_runningActionsCount = window.obj40879_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41177();
function switchText_41177() {
	window.obj40879_droppedInsideTargetActions_3_runningActionsCount = obj40879_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj40879_droppedInsideTargetActions_3_runningActionsCount = window.obj40879_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj40879_droppedInsideTargetActions_3_runningActionsCount = window.obj40879_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj40879_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_41174();
function runjs_41174() {
	window.obj40879_droppedInsideTargetActions_3_runningActionsCount = obj40879_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj41151").css("border-color", "#058E3F"); $("#obj41151").css("border-width", "2px"); $("#obj41151").css("border-style", "solid"); $("#obj41151").css("border-radius", "10px"); $("#obj41151").css("-webkit-border-radius", "10px"); $("#obj41151").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_3_runningActionsCount = window.obj40879_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj41153 
hide_41175();
function hide_41175() {
	var selector = "#obj41153";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj40879_droppedInsideTargetActions_3_runningActionsCount = obj40879_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj40879_droppedInsideTargetActions_3_runningActionsCount = window.obj40879_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41175(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj40879_droppedInsideTargetActions_3_runningActionsCount = window.obj40879_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj40879_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_41176();
function runjs_41176() {
	window.obj40879_droppedInsideTargetActions_3_runningActionsCount = obj40879_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj40879").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_3_runningActionsCount = window.obj40879_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj41090 
playAudio_41178();
function playAudio_41178() {
	window.obj40879_droppedInsideTargetActions_3_runningActionsCount = obj40879_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj41090")[0];
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
		    window.obj40879_droppedInsideTargetActions_3_runningActionsCount = window.obj40879_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj40879_droppedInsideTargetActions_3_runningActionsCount = window.obj40879_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_3_actionGroup6();
}
	}
}









};
obj40879_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90487();
function switchText_90487() {
	window.obj40879_droppedInsideTargetActions_3_runningActionsCount = obj40879_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj40879_droppedInsideTargetActions_3_runningActionsCount = window.obj40879_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj40879_droppedInsideTargetActions_3_runningActionsCount = window.obj40879_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj40879_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	





















};
obj40879_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41167();
function runjs_41167() {
	window.obj40879_droppedInsideTargetActions_2_runningActionsCount = obj40879_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41147").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_2_runningActionsCount = window.obj40879_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41171();
function switchText_41171() {
	window.obj40879_droppedInsideTargetActions_2_runningActionsCount = obj40879_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj40879_droppedInsideTargetActions_2_runningActionsCount = window.obj40879_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj40879_droppedInsideTargetActions_2_runningActionsCount = window.obj40879_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj40879_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_41168();
function runjs_41168() {
	window.obj40879_droppedInsideTargetActions_2_runningActionsCount = obj40879_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41147").css("border-color", "#058E3F"); $("#obj41147").css("border-width", "2px"); $("#obj41147").css("border-style", "solid"); $("#obj41147").css("border-radius", "10px"); $("#obj41147").css("-webkit-border-radius", "10px"); $("#obj41147").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_2_runningActionsCount = window.obj40879_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj41149 
hide_41169();
function hide_41169() {
	var selector = "#obj41149";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj40879_droppedInsideTargetActions_2_runningActionsCount = obj40879_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj40879_droppedInsideTargetActions_2_runningActionsCount = window.obj40879_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41169(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj40879_droppedInsideTargetActions_2_runningActionsCount = window.obj40879_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj40879_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_41170();
function runjs_41170() {
	window.obj40879_droppedInsideTargetActions_2_runningActionsCount = obj40879_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj40879").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_2_runningActionsCount = window.obj40879_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj41090 
playAudio_41172();
function playAudio_41172() {
	window.obj40879_droppedInsideTargetActions_2_runningActionsCount = obj40879_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj41090")[0];
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
		    window.obj40879_droppedInsideTargetActions_2_runningActionsCount = window.obj40879_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj40879_droppedInsideTargetActions_2_runningActionsCount = window.obj40879_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj40879_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90486();
function switchText_90486() {
	window.obj40879_droppedInsideTargetActions_2_runningActionsCount = obj40879_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj40879_droppedInsideTargetActions_2_runningActionsCount = window.obj40879_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj40879_droppedInsideTargetActions_2_runningActionsCount = window.obj40879_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj40879_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	





















};
obj40879_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_40884();
function runjs_40884() {
	window.obj40879_droppedInsideTargetActions_runningActionsCount = obj40879_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41108").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_runningActionsCount = window.obj40879_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_40888();
function switchText_40888() {
	window.obj40879_droppedInsideTargetActions_runningActionsCount = obj40879_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj40879_droppedInsideTargetActions_runningActionsCount = window.obj40879_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj40879_droppedInsideTargetActions_runningActionsCount = window.obj40879_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj40879_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_40885();
function runjs_40885() {
	window.obj40879_droppedInsideTargetActions_runningActionsCount = obj40879_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41108").css("border-color", "#058E3F"); $("#obj41108").css("border-width", "2px"); $("#obj41108").css("border-style", "solid"); $("#obj41108").css("border-radius", "10px"); $("#obj41108").css("-webkit-border-radius", "10px"); $("#obj41108").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_runningActionsCount = window.obj40879_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj41100 
hide_40886();
function hide_40886() {
	var selector = "#obj41100";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj40879_droppedInsideTargetActions_runningActionsCount = obj40879_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj40879_droppedInsideTargetActions_runningActionsCount = window.obj40879_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_40886(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj40879_droppedInsideTargetActions_runningActionsCount = window.obj40879_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj40879_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_40887();
function runjs_40887() {
	window.obj40879_droppedInsideTargetActions_runningActionsCount = obj40879_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj40879").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj40879_droppedInsideTargetActions_runningActionsCount = window.obj40879_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj40879_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj41090 
playAudio_40889();
function playAudio_40889() {
	window.obj40879_droppedInsideTargetActions_runningActionsCount = obj40879_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj41090")[0];
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
		    window.obj40879_droppedInsideTargetActions_runningActionsCount = window.obj40879_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj40879_droppedInsideTargetActions_runningActionsCount = window.obj40879_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj40879_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90485();
function switchText_90485() {
	window.obj40879_droppedInsideTargetActions_runningActionsCount = obj40879_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj40879_droppedInsideTargetActions_runningActionsCount = window.obj40879_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj40879_droppedInsideTargetActions_runningActionsCount = window.obj40879_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj40879_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj40879_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj40879_droppedInsideTargetActions_runningActionsCount == 0) {
	obj40879_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj40879_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj40879_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj40879").trigger("obj40879_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40879) {
				console.warn("de-queueing event obj40879." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40879").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40879_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj41394_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_onTouchDown_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj41394");
//	action: dragDrop
//	target: obj41394 
dragDrop_41397();
function dragDrop_41397() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj41394_onTouchDown_runningActionsCount = obj41394_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj41394');
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
	  	containerNode = $('#obj41112');
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
    	window.obj41394_onTouchDown_runningActionsCount = window.obj41394_onTouchDown_runningActionsCount - 1;
if (window.obj41394_onTouchDown_runningActionsCount < 0) {
	window.obj41394_onTouchDown_runningActionsCount = 0;
} else if (window.obj41394_onTouchDown_runningActionsCount == 0) {
	obj41394_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj41155","#obj41159","#obj41163","#obj41108","#obj41147","#obj41151");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_41397 = false;
    	var dropped_id_41397;
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
					dropped_41397 = true;
					dropped_id_41397 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_41397) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj41394").trigger('SCActionDragDrop41397_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj41394_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41394_onTouchDown_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj41394 
move_92611();
function move_92611() {
	window.obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_runningActionsCount = obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj41394");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 93;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_runningActionsCount = window.obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj41394_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41448();
function runjs_41448() {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = obj41394_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41151").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_6_runningActionsCount = window.obj41394_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41449();
function runjs_41449() {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = obj41394_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41151").css("border-color", "#C00000"); $("#obj41151").css("border-width", "2px"); $("#obj41151").css("border-style", "solid"); $("#obj41151").css("border-radius", "10px"); $("#obj41151").css("-webkit-border-radius", "10px"); $("#obj41151").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_6_runningActionsCount = window.obj41394_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj41153 
hide_41450();
function hide_41450() {
	var selector = "#obj41153";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = obj41394_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41394_droppedInsideTargetActions_6_runningActionsCount = window.obj41394_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41450(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41394_droppedInsideTargetActions_6_runningActionsCount = window.obj41394_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_6_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41394_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41451();
function runjs_41451() {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = obj41394_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41394").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_6_runningActionsCount = window.obj41394_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_6_actionGroup4();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41452();
function switchText_41452() {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = obj41394_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41394_droppedInsideTargetActions_6_runningActionsCount = window.obj41394_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_6_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41394_droppedInsideTargetActions_6_runningActionsCount = window.obj41394_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	}
}






};
obj41394_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj41394 
move_41453();
function move_41453() {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = obj41394_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj41394");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 93;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41394_droppedInsideTargetActions_6_runningActionsCount = window.obj41394_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_6_actionGroup6();
}
		}, 1);
	});
}



















};
obj41394_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_41454();
function runjs_41454() {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = obj41394_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41151").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_6_runningActionsCount = window.obj41394_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_41455();
function runjs_41455() {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = obj41394_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41151").css("border-color", "#000000"); $("#obj41151").css("border-width", "1px"); $("#obj41151").css("border-style", "solid"); $("#obj41151").css("border-radius", "10px"); $("#obj41151").css("-webkit-border-radius", "10px"); $("#obj41151").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_6_runningActionsCount = window.obj41394_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj41153
(function(){
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = obj41394_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj41153";
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
					window.obj41394_droppedInsideTargetActions_6_runningActionsCount = window.obj41394_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_6_actionGroup9();
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
				window.obj41394_droppedInsideTargetActions_6_runningActionsCount = window.obj41394_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_6_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj41394_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_41457();
function runjs_41457() {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = obj41394_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41394").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_6_runningActionsCount = window.obj41394_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_6_actionGroup10();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_41458();
function runjs_41458() {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = obj41394_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41394").css("border-color", "rgba(0,0,0,0)"); $("#obj41394").css("border-width", "0px"); $("#obj41394").css("border-style", "solid"); $("#obj41394").css("border-radius", "10px"); $("#obj41394").css("-webkit-border-radius", "10px"); $("#obj41394").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_6_runningActionsCount = window.obj41394_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_6_actionGroup11();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_6_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj41086 
playAudio_41459();
function playAudio_41459() {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = obj41394_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj41086")[0];
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
		    window.obj41394_droppedInsideTargetActions_6_runningActionsCount = window.obj41394_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_6_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41394_droppedInsideTargetActions_6_runningActionsCount = window.obj41394_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_6_actionGroup12();
}
	}
}









};
obj41394_droppedInsideTargetActions_6_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_41460();
function switchText_41460() {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = obj41394_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41394_droppedInsideTargetActions_6_runningActionsCount = window.obj41394_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_6_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41394_droppedInsideTargetActions_6_runningActionsCount = window.obj41394_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_6_actionGroup13();
}
		}, 1);
	}
}






};
obj41394_droppedInsideTargetActions_6_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex = 13;
	





















};
obj41394_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41434();
function runjs_41434() {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = obj41394_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41147").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_5_runningActionsCount = window.obj41394_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41435();
function runjs_41435() {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = obj41394_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41147").css("border-color", "#C00000"); $("#obj41147").css("border-width", "2px"); $("#obj41147").css("border-style", "solid"); $("#obj41147").css("border-radius", "10px"); $("#obj41147").css("-webkit-border-radius", "10px"); $("#obj41147").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_5_runningActionsCount = window.obj41394_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj41149 
hide_41436();
function hide_41436() {
	var selector = "#obj41149";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = obj41394_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41394_droppedInsideTargetActions_5_runningActionsCount = window.obj41394_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41436(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41394_droppedInsideTargetActions_5_runningActionsCount = window.obj41394_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41394_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41437();
function runjs_41437() {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = obj41394_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41394").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_5_runningActionsCount = window.obj41394_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41438();
function switchText_41438() {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = obj41394_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41394_droppedInsideTargetActions_5_runningActionsCount = window.obj41394_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41394_droppedInsideTargetActions_5_runningActionsCount = window.obj41394_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj41394_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj41394 
move_41439();
function move_41439() {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = obj41394_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj41394");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 93;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41394_droppedInsideTargetActions_5_runningActionsCount = window.obj41394_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj41394_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_41440();
function runjs_41440() {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = obj41394_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41147").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_5_runningActionsCount = window.obj41394_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_41441();
function runjs_41441() {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = obj41394_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41147").css("border-color", "#000000"); $("#obj41147").css("border-width", "1px"); $("#obj41147").css("border-style", "solid"); $("#obj41147").css("border-radius", "10px"); $("#obj41147").css("-webkit-border-radius", "10px"); $("#obj41147").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_5_runningActionsCount = window.obj41394_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj41149
(function(){
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = obj41394_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj41149";
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
					window.obj41394_droppedInsideTargetActions_5_runningActionsCount = window.obj41394_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj41394_droppedInsideTargetActions_5_runningActionsCount = window.obj41394_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj41394_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_41443();
function runjs_41443() {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = obj41394_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41394").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_5_runningActionsCount = window.obj41394_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_41444();
function runjs_41444() {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = obj41394_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41394").css("border-color", "rgba(0,0,0,0)"); $("#obj41394").css("border-width", "0px"); $("#obj41394").css("border-style", "solid"); $("#obj41394").css("border-radius", "10px"); $("#obj41394").css("-webkit-border-radius", "10px"); $("#obj41394").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_5_runningActionsCount = window.obj41394_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj41086 
playAudio_41445();
function playAudio_41445() {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = obj41394_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj41086")[0];
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
		    window.obj41394_droppedInsideTargetActions_5_runningActionsCount = window.obj41394_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41394_droppedInsideTargetActions_5_runningActionsCount = window.obj41394_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj41394_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_41446();
function switchText_41446() {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = obj41394_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41394_droppedInsideTargetActions_5_runningActionsCount = window.obj41394_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41394_droppedInsideTargetActions_5_runningActionsCount = window.obj41394_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj41394_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj41394_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41420();
function runjs_41420() {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = obj41394_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41108").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_4_runningActionsCount = window.obj41394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41421();
function runjs_41421() {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = obj41394_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41108").css("border-color", "#C00000"); $("#obj41108").css("border-width", "2px"); $("#obj41108").css("border-style", "solid"); $("#obj41108").css("border-radius", "10px"); $("#obj41108").css("-webkit-border-radius", "10px"); $("#obj41108").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_4_runningActionsCount = window.obj41394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj41100 
hide_41422();
function hide_41422() {
	var selector = "#obj41100";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = obj41394_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41394_droppedInsideTargetActions_4_runningActionsCount = window.obj41394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41422(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41394_droppedInsideTargetActions_4_runningActionsCount = window.obj41394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41394_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41423();
function runjs_41423() {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = obj41394_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41394").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_4_runningActionsCount = window.obj41394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41424();
function switchText_41424() {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = obj41394_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41394_droppedInsideTargetActions_4_runningActionsCount = window.obj41394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41394_droppedInsideTargetActions_4_runningActionsCount = window.obj41394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj41394_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj41394 
move_41425();
function move_41425() {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = obj41394_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj41394");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 93;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41394_droppedInsideTargetActions_4_runningActionsCount = window.obj41394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj41394_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_41426();
function runjs_41426() {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = obj41394_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41108").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_4_runningActionsCount = window.obj41394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_41427();
function runjs_41427() {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = obj41394_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41108").css("border-color", "#000000"); $("#obj41108").css("border-width", "1px"); $("#obj41108").css("border-style", "solid"); $("#obj41108").css("border-radius", "10px"); $("#obj41108").css("-webkit-border-radius", "10px"); $("#obj41108").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_4_runningActionsCount = window.obj41394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj41100
(function(){
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = obj41394_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj41100";
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
					window.obj41394_droppedInsideTargetActions_4_runningActionsCount = window.obj41394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj41394_droppedInsideTargetActions_4_runningActionsCount = window.obj41394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj41394_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_41429();
function runjs_41429() {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = obj41394_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41394").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_4_runningActionsCount = window.obj41394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_41430();
function runjs_41430() {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = obj41394_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41394").css("border-color", "rgba(0,0,0,0)"); $("#obj41394").css("border-width", "0px"); $("#obj41394").css("border-style", "solid"); $("#obj41394").css("border-radius", "10px"); $("#obj41394").css("-webkit-border-radius", "10px"); $("#obj41394").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_4_runningActionsCount = window.obj41394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj41086 
playAudio_41431();
function playAudio_41431() {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = obj41394_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj41086")[0];
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
		    window.obj41394_droppedInsideTargetActions_4_runningActionsCount = window.obj41394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41394_droppedInsideTargetActions_4_runningActionsCount = window.obj41394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj41394_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_41432();
function switchText_41432() {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = obj41394_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41394_droppedInsideTargetActions_4_runningActionsCount = window.obj41394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41394_droppedInsideTargetActions_4_runningActionsCount = window.obj41394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj41394_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj41394_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41413();
function runjs_41413() {
	window.obj41394_droppedInsideTargetActions_3_runningActionsCount = obj41394_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj41163").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_3_runningActionsCount = window.obj41394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41417();
function switchText_41417() {
	window.obj41394_droppedInsideTargetActions_3_runningActionsCount = obj41394_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41394_droppedInsideTargetActions_3_runningActionsCount = window.obj41394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41394_droppedInsideTargetActions_3_runningActionsCount = window.obj41394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj41394_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_41414();
function runjs_41414() {
	window.obj41394_droppedInsideTargetActions_3_runningActionsCount = obj41394_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj41163").css("border-color", "#058E3F"); $("#obj41163").css("border-width", "2px"); $("#obj41163").css("border-style", "solid"); $("#obj41163").css("border-radius", "10px"); $("#obj41163").css("-webkit-border-radius", "10px"); $("#obj41163").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_3_runningActionsCount = window.obj41394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj41165 
hide_41415();
function hide_41415() {
	var selector = "#obj41165";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41394_droppedInsideTargetActions_3_runningActionsCount = obj41394_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41394_droppedInsideTargetActions_3_runningActionsCount = window.obj41394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41415(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41394_droppedInsideTargetActions_3_runningActionsCount = window.obj41394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41394_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_41416();
function runjs_41416() {
	window.obj41394_droppedInsideTargetActions_3_runningActionsCount = obj41394_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj41394").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_3_runningActionsCount = window.obj41394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj41090 
playAudio_41418();
function playAudio_41418() {
	window.obj41394_droppedInsideTargetActions_3_runningActionsCount = obj41394_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj41090")[0];
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
		    window.obj41394_droppedInsideTargetActions_3_runningActionsCount = window.obj41394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41394_droppedInsideTargetActions_3_runningActionsCount = window.obj41394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_3_actionGroup6();
}
	}
}









};
obj41394_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90496();
function switchText_90496() {
	window.obj41394_droppedInsideTargetActions_3_runningActionsCount = obj41394_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41394_droppedInsideTargetActions_3_runningActionsCount = window.obj41394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41394_droppedInsideTargetActions_3_runningActionsCount = window.obj41394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj41394_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	





















};
obj41394_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41406();
function runjs_41406() {
	window.obj41394_droppedInsideTargetActions_2_runningActionsCount = obj41394_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41159").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_2_runningActionsCount = window.obj41394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41410();
function switchText_41410() {
	window.obj41394_droppedInsideTargetActions_2_runningActionsCount = obj41394_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41394_droppedInsideTargetActions_2_runningActionsCount = window.obj41394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41394_droppedInsideTargetActions_2_runningActionsCount = window.obj41394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj41394_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_41407();
function runjs_41407() {
	window.obj41394_droppedInsideTargetActions_2_runningActionsCount = obj41394_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41159").css("border-color", "#058E3F"); $("#obj41159").css("border-width", "2px"); $("#obj41159").css("border-style", "solid"); $("#obj41159").css("border-radius", "10px"); $("#obj41159").css("-webkit-border-radius", "10px"); $("#obj41159").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_2_runningActionsCount = window.obj41394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj41161 
hide_41408();
function hide_41408() {
	var selector = "#obj41161";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41394_droppedInsideTargetActions_2_runningActionsCount = obj41394_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41394_droppedInsideTargetActions_2_runningActionsCount = window.obj41394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41408(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41394_droppedInsideTargetActions_2_runningActionsCount = window.obj41394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41394_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_41409();
function runjs_41409() {
	window.obj41394_droppedInsideTargetActions_2_runningActionsCount = obj41394_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41394").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_2_runningActionsCount = window.obj41394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj41090 
playAudio_41411();
function playAudio_41411() {
	window.obj41394_droppedInsideTargetActions_2_runningActionsCount = obj41394_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj41090")[0];
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
		    window.obj41394_droppedInsideTargetActions_2_runningActionsCount = window.obj41394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41394_droppedInsideTargetActions_2_runningActionsCount = window.obj41394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj41394_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90495();
function switchText_90495() {
	window.obj41394_droppedInsideTargetActions_2_runningActionsCount = obj41394_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41394_droppedInsideTargetActions_2_runningActionsCount = window.obj41394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41394_droppedInsideTargetActions_2_runningActionsCount = window.obj41394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj41394_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	





















};
obj41394_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41399();
function runjs_41399() {
	window.obj41394_droppedInsideTargetActions_runningActionsCount = obj41394_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41155").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_runningActionsCount = window.obj41394_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41403();
function switchText_41403() {
	window.obj41394_droppedInsideTargetActions_runningActionsCount = obj41394_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41394_droppedInsideTargetActions_runningActionsCount = window.obj41394_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41394_droppedInsideTargetActions_runningActionsCount = window.obj41394_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj41394_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_41400();
function runjs_41400() {
	window.obj41394_droppedInsideTargetActions_runningActionsCount = obj41394_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41155").css("border-color", "#058E3F"); $("#obj41155").css("border-width", "2px"); $("#obj41155").css("border-style", "solid"); $("#obj41155").css("border-radius", "10px"); $("#obj41155").css("-webkit-border-radius", "10px"); $("#obj41155").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_runningActionsCount = window.obj41394_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj41157 
hide_41401();
function hide_41401() {
	var selector = "#obj41157";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41394_droppedInsideTargetActions_runningActionsCount = obj41394_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41394_droppedInsideTargetActions_runningActionsCount = window.obj41394_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41401(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41394_droppedInsideTargetActions_runningActionsCount = window.obj41394_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41394_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_41402();
function runjs_41402() {
	window.obj41394_droppedInsideTargetActions_runningActionsCount = obj41394_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41394").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41394_droppedInsideTargetActions_runningActionsCount = window.obj41394_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj41394_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj41090 
playAudio_41404();
function playAudio_41404() {
	window.obj41394_droppedInsideTargetActions_runningActionsCount = obj41394_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj41090")[0];
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
		    window.obj41394_droppedInsideTargetActions_runningActionsCount = window.obj41394_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41394_droppedInsideTargetActions_runningActionsCount = window.obj41394_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj41394_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90494();
function switchText_90494() {
	window.obj41394_droppedInsideTargetActions_runningActionsCount = obj41394_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41394_droppedInsideTargetActions_runningActionsCount = window.obj41394_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41394_droppedInsideTargetActions_runningActionsCount = window.obj41394_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41394_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41394_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41394_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41394_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj41394_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41394_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41394").trigger("obj41394_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41394) {
				console.warn("de-queueing event obj41394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41394_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj41193_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_onTouchDown_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj41193");
//	action: dragDrop
//	target: obj41193 
dragDrop_41196();
function dragDrop_41196() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj41193_onTouchDown_runningActionsCount = obj41193_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj41193');
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
	  	containerNode = $('#obj41112');
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
    	window.obj41193_onTouchDown_runningActionsCount = window.obj41193_onTouchDown_runningActionsCount - 1;
if (window.obj41193_onTouchDown_runningActionsCount < 0) {
	window.obj41193_onTouchDown_runningActionsCount = 0;
} else if (window.obj41193_onTouchDown_runningActionsCount == 0) {
	obj41193_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj41155","#obj41159","#obj41163","#obj41108","#obj41147","#obj41151");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_41196 = false;
    	var dropped_id_41196;
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
					dropped_41196 = true;
					dropped_id_41196 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_41196) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj41193").trigger('SCActionDragDrop41196_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj41193_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41193_onTouchDown_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj41193 
move_92607();
function move_92607() {
	window.obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_runningActionsCount = obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj41193");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 232;
	var moveY = 596;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_runningActionsCount = window.obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj41193_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41247();
function runjs_41247() {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = obj41193_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41151").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_6_runningActionsCount = window.obj41193_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41248();
function runjs_41248() {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = obj41193_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41151").css("border-color", "#C00000"); $("#obj41151").css("border-width", "2px"); $("#obj41151").css("border-style", "solid"); $("#obj41151").css("border-radius", "10px"); $("#obj41151").css("-webkit-border-radius", "10px"); $("#obj41151").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_6_runningActionsCount = window.obj41193_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj41153 
hide_41249();
function hide_41249() {
	var selector = "#obj41153";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = obj41193_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41193_droppedInsideTargetActions_6_runningActionsCount = window.obj41193_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41249(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41193_droppedInsideTargetActions_6_runningActionsCount = window.obj41193_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_6_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41193_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41250();
function runjs_41250() {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = obj41193_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41193").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_6_runningActionsCount = window.obj41193_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_6_actionGroup4();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41251();
function switchText_41251() {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = obj41193_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41193_droppedInsideTargetActions_6_runningActionsCount = window.obj41193_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_6_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41193_droppedInsideTargetActions_6_runningActionsCount = window.obj41193_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	}
}






};
obj41193_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj41193 
move_41252();
function move_41252() {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = obj41193_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj41193");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 232;
	var moveY = 596;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41193_droppedInsideTargetActions_6_runningActionsCount = window.obj41193_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_6_actionGroup6();
}
		}, 1);
	});
}



















};
obj41193_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_41253();
function runjs_41253() {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = obj41193_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41151").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_6_runningActionsCount = window.obj41193_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_41254();
function runjs_41254() {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = obj41193_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41151").css("border-color", "#000000"); $("#obj41151").css("border-width", "1px"); $("#obj41151").css("border-style", "solid"); $("#obj41151").css("border-radius", "10px"); $("#obj41151").css("-webkit-border-radius", "10px"); $("#obj41151").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_6_runningActionsCount = window.obj41193_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj41153
(function(){
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = obj41193_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj41153";
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
					window.obj41193_droppedInsideTargetActions_6_runningActionsCount = window.obj41193_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_6_actionGroup9();
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
				window.obj41193_droppedInsideTargetActions_6_runningActionsCount = window.obj41193_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_6_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj41193_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_41256();
function runjs_41256() {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = obj41193_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41193").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_6_runningActionsCount = window.obj41193_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_6_actionGroup10();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_41257();
function runjs_41257() {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = obj41193_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41193").css("border-color", "rgba(0,0,0,0)"); $("#obj41193").css("border-width", "0px"); $("#obj41193").css("border-style", "solid"); $("#obj41193").css("border-radius", "10px"); $("#obj41193").css("-webkit-border-radius", "10px"); $("#obj41193").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_6_runningActionsCount = window.obj41193_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_6_actionGroup11();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_6_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj41086 
playAudio_41258();
function playAudio_41258() {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = obj41193_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj41086")[0];
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
		    window.obj41193_droppedInsideTargetActions_6_runningActionsCount = window.obj41193_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_6_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41193_droppedInsideTargetActions_6_runningActionsCount = window.obj41193_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_6_actionGroup12();
}
	}
}









};
obj41193_droppedInsideTargetActions_6_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_41259();
function switchText_41259() {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = obj41193_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41193_droppedInsideTargetActions_6_runningActionsCount = window.obj41193_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_6_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41193_droppedInsideTargetActions_6_runningActionsCount = window.obj41193_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_6_actionGroup13();
}
		}, 1);
	}
}






};
obj41193_droppedInsideTargetActions_6_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex = 13;
	





















};
obj41193_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41233();
function runjs_41233() {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = obj41193_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41147").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_5_runningActionsCount = window.obj41193_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41234();
function runjs_41234() {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = obj41193_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41147").css("border-color", "#C00000"); $("#obj41147").css("border-width", "2px"); $("#obj41147").css("border-style", "solid"); $("#obj41147").css("border-radius", "10px"); $("#obj41147").css("-webkit-border-radius", "10px"); $("#obj41147").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_5_runningActionsCount = window.obj41193_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj41149 
hide_41235();
function hide_41235() {
	var selector = "#obj41149";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = obj41193_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41193_droppedInsideTargetActions_5_runningActionsCount = window.obj41193_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41235(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41193_droppedInsideTargetActions_5_runningActionsCount = window.obj41193_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41193_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41236();
function runjs_41236() {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = obj41193_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41193").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_5_runningActionsCount = window.obj41193_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41237();
function switchText_41237() {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = obj41193_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41193_droppedInsideTargetActions_5_runningActionsCount = window.obj41193_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41193_droppedInsideTargetActions_5_runningActionsCount = window.obj41193_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj41193_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj41193 
move_41238();
function move_41238() {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = obj41193_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj41193");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 232;
	var moveY = 596;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41193_droppedInsideTargetActions_5_runningActionsCount = window.obj41193_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj41193_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_41239();
function runjs_41239() {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = obj41193_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41147").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_5_runningActionsCount = window.obj41193_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_41240();
function runjs_41240() {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = obj41193_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41147").css("border-color", "#000000"); $("#obj41147").css("border-width", "1px"); $("#obj41147").css("border-style", "solid"); $("#obj41147").css("border-radius", "10px"); $("#obj41147").css("-webkit-border-radius", "10px"); $("#obj41147").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_5_runningActionsCount = window.obj41193_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj41149
(function(){
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = obj41193_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj41149";
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
					window.obj41193_droppedInsideTargetActions_5_runningActionsCount = window.obj41193_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj41193_droppedInsideTargetActions_5_runningActionsCount = window.obj41193_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj41193_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_41242();
function runjs_41242() {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = obj41193_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41193").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_5_runningActionsCount = window.obj41193_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_41243();
function runjs_41243() {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = obj41193_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41193").css("border-color", "rgba(0,0,0,0)"); $("#obj41193").css("border-width", "0px"); $("#obj41193").css("border-style", "solid"); $("#obj41193").css("border-radius", "10px"); $("#obj41193").css("-webkit-border-radius", "10px"); $("#obj41193").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_5_runningActionsCount = window.obj41193_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj41086 
playAudio_41244();
function playAudio_41244() {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = obj41193_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj41086")[0];
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
		    window.obj41193_droppedInsideTargetActions_5_runningActionsCount = window.obj41193_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41193_droppedInsideTargetActions_5_runningActionsCount = window.obj41193_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj41193_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_41245();
function switchText_41245() {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = obj41193_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41193_droppedInsideTargetActions_5_runningActionsCount = window.obj41193_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41193_droppedInsideTargetActions_5_runningActionsCount = window.obj41193_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj41193_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj41193_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41219();
function runjs_41219() {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = obj41193_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41108").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_4_runningActionsCount = window.obj41193_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41220();
function runjs_41220() {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = obj41193_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41108").css("border-color", "#C00000"); $("#obj41108").css("border-width", "2px"); $("#obj41108").css("border-style", "solid"); $("#obj41108").css("border-radius", "10px"); $("#obj41108").css("-webkit-border-radius", "10px"); $("#obj41108").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_4_runningActionsCount = window.obj41193_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj41100 
hide_41221();
function hide_41221() {
	var selector = "#obj41100";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = obj41193_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41193_droppedInsideTargetActions_4_runningActionsCount = window.obj41193_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41221(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41193_droppedInsideTargetActions_4_runningActionsCount = window.obj41193_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41193_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41222();
function runjs_41222() {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = obj41193_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41193").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_4_runningActionsCount = window.obj41193_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41223();
function switchText_41223() {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = obj41193_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41193_droppedInsideTargetActions_4_runningActionsCount = window.obj41193_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41193_droppedInsideTargetActions_4_runningActionsCount = window.obj41193_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj41193_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj41193 
move_41224();
function move_41224() {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = obj41193_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj41193");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 232;
	var moveY = 596;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41193_droppedInsideTargetActions_4_runningActionsCount = window.obj41193_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj41193_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_41225();
function runjs_41225() {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = obj41193_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41108").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_4_runningActionsCount = window.obj41193_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_41226();
function runjs_41226() {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = obj41193_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41108").css("border-color", "#000000"); $("#obj41108").css("border-width", "1px"); $("#obj41108").css("border-style", "solid"); $("#obj41108").css("border-radius", "10px"); $("#obj41108").css("-webkit-border-radius", "10px"); $("#obj41108").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_4_runningActionsCount = window.obj41193_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj41100
(function(){
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = obj41193_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj41100";
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
					window.obj41193_droppedInsideTargetActions_4_runningActionsCount = window.obj41193_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj41193_droppedInsideTargetActions_4_runningActionsCount = window.obj41193_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj41193_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_41228();
function runjs_41228() {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = obj41193_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41193").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_4_runningActionsCount = window.obj41193_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_41229();
function runjs_41229() {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = obj41193_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41193").css("border-color", "rgba(0,0,0,0)"); $("#obj41193").css("border-width", "0px"); $("#obj41193").css("border-style", "solid"); $("#obj41193").css("border-radius", "10px"); $("#obj41193").css("-webkit-border-radius", "10px"); $("#obj41193").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_4_runningActionsCount = window.obj41193_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj41086 
playAudio_41230();
function playAudio_41230() {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = obj41193_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj41086")[0];
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
		    window.obj41193_droppedInsideTargetActions_4_runningActionsCount = window.obj41193_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41193_droppedInsideTargetActions_4_runningActionsCount = window.obj41193_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj41193_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_41231();
function switchText_41231() {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = obj41193_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41193_droppedInsideTargetActions_4_runningActionsCount = window.obj41193_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41193_droppedInsideTargetActions_4_runningActionsCount = window.obj41193_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj41193_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj41193_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41212();
function runjs_41212() {
	window.obj41193_droppedInsideTargetActions_3_runningActionsCount = obj41193_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj41163").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_3_runningActionsCount = window.obj41193_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41216();
function switchText_41216() {
	window.obj41193_droppedInsideTargetActions_3_runningActionsCount = obj41193_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41193_droppedInsideTargetActions_3_runningActionsCount = window.obj41193_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41193_droppedInsideTargetActions_3_runningActionsCount = window.obj41193_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj41193_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_41213();
function runjs_41213() {
	window.obj41193_droppedInsideTargetActions_3_runningActionsCount = obj41193_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj41163").css("border-color", "#058E3F"); $("#obj41163").css("border-width", "2px"); $("#obj41163").css("border-style", "solid"); $("#obj41163").css("border-radius", "10px"); $("#obj41163").css("-webkit-border-radius", "10px"); $("#obj41163").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_3_runningActionsCount = window.obj41193_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj41165 
hide_41214();
function hide_41214() {
	var selector = "#obj41165";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41193_droppedInsideTargetActions_3_runningActionsCount = obj41193_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41193_droppedInsideTargetActions_3_runningActionsCount = window.obj41193_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41214(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41193_droppedInsideTargetActions_3_runningActionsCount = window.obj41193_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41193_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_41215();
function runjs_41215() {
	window.obj41193_droppedInsideTargetActions_3_runningActionsCount = obj41193_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj41193").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_3_runningActionsCount = window.obj41193_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj41090 
playAudio_41217();
function playAudio_41217() {
	window.obj41193_droppedInsideTargetActions_3_runningActionsCount = obj41193_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj41090")[0];
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
		    window.obj41193_droppedInsideTargetActions_3_runningActionsCount = window.obj41193_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41193_droppedInsideTargetActions_3_runningActionsCount = window.obj41193_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_3_actionGroup6();
}
	}
}









};
obj41193_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90490();
function switchText_90490() {
	window.obj41193_droppedInsideTargetActions_3_runningActionsCount = obj41193_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41193_droppedInsideTargetActions_3_runningActionsCount = window.obj41193_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41193_droppedInsideTargetActions_3_runningActionsCount = window.obj41193_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj41193_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	





















};
obj41193_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41205();
function runjs_41205() {
	window.obj41193_droppedInsideTargetActions_2_runningActionsCount = obj41193_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41159").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_2_runningActionsCount = window.obj41193_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41209();
function switchText_41209() {
	window.obj41193_droppedInsideTargetActions_2_runningActionsCount = obj41193_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41193_droppedInsideTargetActions_2_runningActionsCount = window.obj41193_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41193_droppedInsideTargetActions_2_runningActionsCount = window.obj41193_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj41193_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_41206();
function runjs_41206() {
	window.obj41193_droppedInsideTargetActions_2_runningActionsCount = obj41193_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41159").css("border-color", "#058E3F"); $("#obj41159").css("border-width", "2px"); $("#obj41159").css("border-style", "solid"); $("#obj41159").css("border-radius", "10px"); $("#obj41159").css("-webkit-border-radius", "10px"); $("#obj41159").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_2_runningActionsCount = window.obj41193_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj41161 
hide_41207();
function hide_41207() {
	var selector = "#obj41161";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41193_droppedInsideTargetActions_2_runningActionsCount = obj41193_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41193_droppedInsideTargetActions_2_runningActionsCount = window.obj41193_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41207(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41193_droppedInsideTargetActions_2_runningActionsCount = window.obj41193_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41193_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_41208();
function runjs_41208() {
	window.obj41193_droppedInsideTargetActions_2_runningActionsCount = obj41193_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41193").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_2_runningActionsCount = window.obj41193_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj41090 
playAudio_41210();
function playAudio_41210() {
	window.obj41193_droppedInsideTargetActions_2_runningActionsCount = obj41193_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj41090")[0];
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
		    window.obj41193_droppedInsideTargetActions_2_runningActionsCount = window.obj41193_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41193_droppedInsideTargetActions_2_runningActionsCount = window.obj41193_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj41193_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90489();
function switchText_90489() {
	window.obj41193_droppedInsideTargetActions_2_runningActionsCount = obj41193_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41193_droppedInsideTargetActions_2_runningActionsCount = window.obj41193_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41193_droppedInsideTargetActions_2_runningActionsCount = window.obj41193_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj41193_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	





















};
obj41193_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41198();
function runjs_41198() {
	window.obj41193_droppedInsideTargetActions_runningActionsCount = obj41193_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41155").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_runningActionsCount = window.obj41193_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41202();
function switchText_41202() {
	window.obj41193_droppedInsideTargetActions_runningActionsCount = obj41193_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41193_droppedInsideTargetActions_runningActionsCount = window.obj41193_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41193_droppedInsideTargetActions_runningActionsCount = window.obj41193_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj41193_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_41199();
function runjs_41199() {
	window.obj41193_droppedInsideTargetActions_runningActionsCount = obj41193_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41155").css("border-color", "#058E3F"); $("#obj41155").css("border-width", "2px"); $("#obj41155").css("border-style", "solid"); $("#obj41155").css("border-radius", "10px"); $("#obj41155").css("-webkit-border-radius", "10px"); $("#obj41155").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_runningActionsCount = window.obj41193_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj41157 
hide_41200();
function hide_41200() {
	var selector = "#obj41157";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41193_droppedInsideTargetActions_runningActionsCount = obj41193_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41193_droppedInsideTargetActions_runningActionsCount = window.obj41193_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41200(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41193_droppedInsideTargetActions_runningActionsCount = window.obj41193_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41193_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_41201();
function runjs_41201() {
	window.obj41193_droppedInsideTargetActions_runningActionsCount = obj41193_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41193").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41193_droppedInsideTargetActions_runningActionsCount = window.obj41193_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj41193_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj41090 
playAudio_41203();
function playAudio_41203() {
	window.obj41193_droppedInsideTargetActions_runningActionsCount = obj41193_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj41090")[0];
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
		    window.obj41193_droppedInsideTargetActions_runningActionsCount = window.obj41193_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41193_droppedInsideTargetActions_runningActionsCount = window.obj41193_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj41193_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90488();
function switchText_90488() {
	window.obj41193_droppedInsideTargetActions_runningActionsCount = obj41193_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41193_droppedInsideTargetActions_runningActionsCount = window.obj41193_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41193_droppedInsideTargetActions_runningActionsCount = window.obj41193_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41193_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41193_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41193_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41193_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj41193_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41193_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41193").trigger("obj41193_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41193) {
				console.warn("de-queueing event obj41193." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41193").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41193_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj41327_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_onTouchDown_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj41327");
//	action: dragDrop
//	target: obj41327 
dragDrop_41330();
function dragDrop_41330() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj41327_onTouchDown_runningActionsCount = obj41327_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj41327');
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
	  	containerNode = $('#obj41112');
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
    	window.obj41327_onTouchDown_runningActionsCount = window.obj41327_onTouchDown_runningActionsCount - 1;
if (window.obj41327_onTouchDown_runningActionsCount < 0) {
	window.obj41327_onTouchDown_runningActionsCount = 0;
} else if (window.obj41327_onTouchDown_runningActionsCount == 0) {
	obj41327_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj41108","#obj41147","#obj41151","#obj41155","#obj41159","#obj41163");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_41330 = false;
    	var dropped_id_41330;
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
					dropped_41330 = true;
					dropped_id_41330 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_41330) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj41327").trigger('SCActionDragDrop41330_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj41327_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41327_onTouchDown_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj41327 
move_92613();
function move_92613() {
	window.obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_runningActionsCount = obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj41327");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 234;
	var moveY = 645;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_runningActionsCount = window.obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj41327_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41381();
function runjs_41381() {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = obj41327_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41163").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_6_runningActionsCount = window.obj41327_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41382();
function runjs_41382() {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = obj41327_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41163").css("border-color", "#C00000"); $("#obj41163").css("border-width", "2px"); $("#obj41163").css("border-style", "solid"); $("#obj41163").css("border-radius", "10px"); $("#obj41163").css("-webkit-border-radius", "10px"); $("#obj41163").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_6_runningActionsCount = window.obj41327_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj41165 
hide_41383();
function hide_41383() {
	var selector = "#obj41165";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = obj41327_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41327_droppedInsideTargetActions_6_runningActionsCount = window.obj41327_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41383(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41327_droppedInsideTargetActions_6_runningActionsCount = window.obj41327_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_6_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41327_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41384();
function runjs_41384() {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = obj41327_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41327").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_6_runningActionsCount = window.obj41327_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_6_actionGroup4();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41385();
function switchText_41385() {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = obj41327_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41327_droppedInsideTargetActions_6_runningActionsCount = window.obj41327_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_6_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41327_droppedInsideTargetActions_6_runningActionsCount = window.obj41327_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	}
}






};
obj41327_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj41327 
move_41386();
function move_41386() {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = obj41327_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj41327");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 234;
	var moveY = 645;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41327_droppedInsideTargetActions_6_runningActionsCount = window.obj41327_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_6_actionGroup6();
}
		}, 1);
	});
}



















};
obj41327_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_41387();
function runjs_41387() {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = obj41327_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41163").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_6_runningActionsCount = window.obj41327_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_41388();
function runjs_41388() {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = obj41327_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41163").css("border-color", "#000000"); $("#obj41163").css("border-width", "1px"); $("#obj41163").css("border-style", "solid"); $("#obj41163").css("border-radius", "10px"); $("#obj41163").css("-webkit-border-radius", "10px"); $("#obj41163").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_6_runningActionsCount = window.obj41327_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj41165
(function(){
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = obj41327_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj41165";
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
					window.obj41327_droppedInsideTargetActions_6_runningActionsCount = window.obj41327_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_6_actionGroup9();
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
				window.obj41327_droppedInsideTargetActions_6_runningActionsCount = window.obj41327_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_6_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj41327_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_41390();
function runjs_41390() {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = obj41327_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41327").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_6_runningActionsCount = window.obj41327_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_6_actionGroup10();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_41391();
function runjs_41391() {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = obj41327_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41327").css("border-color", "rgba(0,0,0,0)"); $("#obj41327").css("border-width", "0px"); $("#obj41327").css("border-style", "solid"); $("#obj41327").css("border-radius", "10px"); $("#obj41327").css("-webkit-border-radius", "10px"); $("#obj41327").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_6_runningActionsCount = window.obj41327_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_6_actionGroup11();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_6_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj41086 
playAudio_41392();
function playAudio_41392() {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = obj41327_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj41086")[0];
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
		    window.obj41327_droppedInsideTargetActions_6_runningActionsCount = window.obj41327_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_6_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41327_droppedInsideTargetActions_6_runningActionsCount = window.obj41327_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_6_actionGroup12();
}
	}
}









};
obj41327_droppedInsideTargetActions_6_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_41393();
function switchText_41393() {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = obj41327_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41327_droppedInsideTargetActions_6_runningActionsCount = window.obj41327_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_6_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41327_droppedInsideTargetActions_6_runningActionsCount = window.obj41327_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_6_actionGroup13();
}
		}, 1);
	}
}






};
obj41327_droppedInsideTargetActions_6_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex = 13;
	





















};
obj41327_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41367();
function runjs_41367() {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = obj41327_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41159").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_5_runningActionsCount = window.obj41327_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41368();
function runjs_41368() {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = obj41327_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41159").css("border-color", "#C00000"); $("#obj41159").css("border-width", "2px"); $("#obj41159").css("border-style", "solid"); $("#obj41159").css("border-radius", "10px"); $("#obj41159").css("-webkit-border-radius", "10px"); $("#obj41159").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_5_runningActionsCount = window.obj41327_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj41161 
hide_41369();
function hide_41369() {
	var selector = "#obj41161";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = obj41327_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41327_droppedInsideTargetActions_5_runningActionsCount = window.obj41327_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41369(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41327_droppedInsideTargetActions_5_runningActionsCount = window.obj41327_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41327_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41370();
function runjs_41370() {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = obj41327_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41327").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_5_runningActionsCount = window.obj41327_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41371();
function switchText_41371() {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = obj41327_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41327_droppedInsideTargetActions_5_runningActionsCount = window.obj41327_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41327_droppedInsideTargetActions_5_runningActionsCount = window.obj41327_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj41327_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj41327 
move_41372();
function move_41372() {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = obj41327_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj41327");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 234;
	var moveY = 645;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41327_droppedInsideTargetActions_5_runningActionsCount = window.obj41327_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj41327_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_41373();
function runjs_41373() {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = obj41327_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41159").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_5_runningActionsCount = window.obj41327_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_41374();
function runjs_41374() {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = obj41327_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41159").css("border-color", "#000000"); $("#obj41159").css("border-width", "1px"); $("#obj41159").css("border-style", "solid"); $("#obj41159").css("border-radius", "10px"); $("#obj41159").css("-webkit-border-radius", "10px"); $("#obj41159").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_5_runningActionsCount = window.obj41327_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj41161
(function(){
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = obj41327_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj41161";
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
					window.obj41327_droppedInsideTargetActions_5_runningActionsCount = window.obj41327_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj41327_droppedInsideTargetActions_5_runningActionsCount = window.obj41327_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj41327_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_41376();
function runjs_41376() {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = obj41327_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41327").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_5_runningActionsCount = window.obj41327_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_41377();
function runjs_41377() {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = obj41327_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41327").css("border-color", "rgba(0,0,0,0)"); $("#obj41327").css("border-width", "0px"); $("#obj41327").css("border-style", "solid"); $("#obj41327").css("border-radius", "10px"); $("#obj41327").css("-webkit-border-radius", "10px"); $("#obj41327").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_5_runningActionsCount = window.obj41327_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj41086 
playAudio_41378();
function playAudio_41378() {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = obj41327_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj41086")[0];
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
		    window.obj41327_droppedInsideTargetActions_5_runningActionsCount = window.obj41327_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41327_droppedInsideTargetActions_5_runningActionsCount = window.obj41327_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj41327_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_41379();
function switchText_41379() {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = obj41327_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41327_droppedInsideTargetActions_5_runningActionsCount = window.obj41327_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41327_droppedInsideTargetActions_5_runningActionsCount = window.obj41327_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj41327_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj41327_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41353();
function runjs_41353() {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = obj41327_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41155").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_4_runningActionsCount = window.obj41327_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41354();
function runjs_41354() {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = obj41327_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41155").css("border-color", "#C00000"); $("#obj41155").css("border-width", "2px"); $("#obj41155").css("border-style", "solid"); $("#obj41155").css("border-radius", "10px"); $("#obj41155").css("-webkit-border-radius", "10px"); $("#obj41155").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_4_runningActionsCount = window.obj41327_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj41157 
hide_41355();
function hide_41355() {
	var selector = "#obj41157";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = obj41327_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41327_droppedInsideTargetActions_4_runningActionsCount = window.obj41327_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41355(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41327_droppedInsideTargetActions_4_runningActionsCount = window.obj41327_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41327_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41356();
function runjs_41356() {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = obj41327_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41327").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_4_runningActionsCount = window.obj41327_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41357();
function switchText_41357() {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = obj41327_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41327_droppedInsideTargetActions_4_runningActionsCount = window.obj41327_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41327_droppedInsideTargetActions_4_runningActionsCount = window.obj41327_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj41327_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj41327 
move_41358();
function move_41358() {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = obj41327_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj41327");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 234;
	var moveY = 645;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41327_droppedInsideTargetActions_4_runningActionsCount = window.obj41327_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj41327_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_41359();
function runjs_41359() {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = obj41327_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41155").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_4_runningActionsCount = window.obj41327_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_41360();
function runjs_41360() {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = obj41327_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41155").css("border-color", "#000000"); $("#obj41155").css("border-width", "1px"); $("#obj41155").css("border-style", "solid"); $("#obj41155").css("border-radius", "10px"); $("#obj41155").css("-webkit-border-radius", "10px"); $("#obj41155").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_4_runningActionsCount = window.obj41327_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj41157
(function(){
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = obj41327_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj41157";
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
					window.obj41327_droppedInsideTargetActions_4_runningActionsCount = window.obj41327_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj41327_droppedInsideTargetActions_4_runningActionsCount = window.obj41327_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj41327_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_41362();
function runjs_41362() {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = obj41327_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41327").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_4_runningActionsCount = window.obj41327_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_41363();
function runjs_41363() {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = obj41327_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41327").css("border-color", "rgba(0,0,0,0)"); $("#obj41327").css("border-width", "0px"); $("#obj41327").css("border-style", "solid"); $("#obj41327").css("border-radius", "10px"); $("#obj41327").css("-webkit-border-radius", "10px"); $("#obj41327").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_4_runningActionsCount = window.obj41327_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj41086 
playAudio_41364();
function playAudio_41364() {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = obj41327_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj41086")[0];
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
		    window.obj41327_droppedInsideTargetActions_4_runningActionsCount = window.obj41327_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41327_droppedInsideTargetActions_4_runningActionsCount = window.obj41327_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj41327_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_41365();
function switchText_41365() {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = obj41327_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41327_droppedInsideTargetActions_4_runningActionsCount = window.obj41327_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41327_droppedInsideTargetActions_4_runningActionsCount = window.obj41327_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj41327_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj41327_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41346();
function runjs_41346() {
	window.obj41327_droppedInsideTargetActions_3_runningActionsCount = obj41327_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj41151").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_3_runningActionsCount = window.obj41327_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41350();
function switchText_41350() {
	window.obj41327_droppedInsideTargetActions_3_runningActionsCount = obj41327_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41327_droppedInsideTargetActions_3_runningActionsCount = window.obj41327_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41327_droppedInsideTargetActions_3_runningActionsCount = window.obj41327_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj41327_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_41347();
function runjs_41347() {
	window.obj41327_droppedInsideTargetActions_3_runningActionsCount = obj41327_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj41151").css("border-color", "#058E3F"); $("#obj41151").css("border-width", "2px"); $("#obj41151").css("border-style", "solid"); $("#obj41151").css("border-radius", "10px"); $("#obj41151").css("-webkit-border-radius", "10px"); $("#obj41151").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_3_runningActionsCount = window.obj41327_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj41153 
hide_41348();
function hide_41348() {
	var selector = "#obj41153";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41327_droppedInsideTargetActions_3_runningActionsCount = obj41327_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41327_droppedInsideTargetActions_3_runningActionsCount = window.obj41327_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41348(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41327_droppedInsideTargetActions_3_runningActionsCount = window.obj41327_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41327_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_41349();
function runjs_41349() {
	window.obj41327_droppedInsideTargetActions_3_runningActionsCount = obj41327_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj41327").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_3_runningActionsCount = window.obj41327_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj41090 
playAudio_41351();
function playAudio_41351() {
	window.obj41327_droppedInsideTargetActions_3_runningActionsCount = obj41327_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj41090")[0];
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
		    window.obj41327_droppedInsideTargetActions_3_runningActionsCount = window.obj41327_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41327_droppedInsideTargetActions_3_runningActionsCount = window.obj41327_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_3_actionGroup6();
}
	}
}









};
obj41327_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90499();
function switchText_90499() {
	window.obj41327_droppedInsideTargetActions_3_runningActionsCount = obj41327_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41327_droppedInsideTargetActions_3_runningActionsCount = window.obj41327_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41327_droppedInsideTargetActions_3_runningActionsCount = window.obj41327_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj41327_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	





















};
obj41327_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41339();
function runjs_41339() {
	window.obj41327_droppedInsideTargetActions_2_runningActionsCount = obj41327_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41147").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_2_runningActionsCount = window.obj41327_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41343();
function switchText_41343() {
	window.obj41327_droppedInsideTargetActions_2_runningActionsCount = obj41327_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41327_droppedInsideTargetActions_2_runningActionsCount = window.obj41327_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41327_droppedInsideTargetActions_2_runningActionsCount = window.obj41327_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj41327_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_41340();
function runjs_41340() {
	window.obj41327_droppedInsideTargetActions_2_runningActionsCount = obj41327_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41147").css("border-color", "#058E3F"); $("#obj41147").css("border-width", "2px"); $("#obj41147").css("border-style", "solid"); $("#obj41147").css("border-radius", "10px"); $("#obj41147").css("-webkit-border-radius", "10px"); $("#obj41147").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_2_runningActionsCount = window.obj41327_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj41149 
hide_41341();
function hide_41341() {
	var selector = "#obj41149";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41327_droppedInsideTargetActions_2_runningActionsCount = obj41327_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41327_droppedInsideTargetActions_2_runningActionsCount = window.obj41327_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41341(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41327_droppedInsideTargetActions_2_runningActionsCount = window.obj41327_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41327_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_41342();
function runjs_41342() {
	window.obj41327_droppedInsideTargetActions_2_runningActionsCount = obj41327_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41327").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_2_runningActionsCount = window.obj41327_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj41090 
playAudio_41344();
function playAudio_41344() {
	window.obj41327_droppedInsideTargetActions_2_runningActionsCount = obj41327_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj41090")[0];
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
		    window.obj41327_droppedInsideTargetActions_2_runningActionsCount = window.obj41327_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41327_droppedInsideTargetActions_2_runningActionsCount = window.obj41327_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj41327_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90498();
function switchText_90498() {
	window.obj41327_droppedInsideTargetActions_2_runningActionsCount = obj41327_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41327_droppedInsideTargetActions_2_runningActionsCount = window.obj41327_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41327_droppedInsideTargetActions_2_runningActionsCount = window.obj41327_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj41327_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	





















};
obj41327_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41332();
function runjs_41332() {
	window.obj41327_droppedInsideTargetActions_runningActionsCount = obj41327_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41108").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_runningActionsCount = window.obj41327_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41336();
function switchText_41336() {
	window.obj41327_droppedInsideTargetActions_runningActionsCount = obj41327_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41327_droppedInsideTargetActions_runningActionsCount = window.obj41327_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41327_droppedInsideTargetActions_runningActionsCount = window.obj41327_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj41327_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_41333();
function runjs_41333() {
	window.obj41327_droppedInsideTargetActions_runningActionsCount = obj41327_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41108").css("border-color", "#058E3F"); $("#obj41108").css("border-width", "2px"); $("#obj41108").css("border-style", "solid"); $("#obj41108").css("border-radius", "10px"); $("#obj41108").css("-webkit-border-radius", "10px"); $("#obj41108").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_runningActionsCount = window.obj41327_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj41100 
hide_41334();
function hide_41334() {
	var selector = "#obj41100";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41327_droppedInsideTargetActions_runningActionsCount = obj41327_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41327_droppedInsideTargetActions_runningActionsCount = window.obj41327_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41334(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41327_droppedInsideTargetActions_runningActionsCount = window.obj41327_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41327_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_41335();
function runjs_41335() {
	window.obj41327_droppedInsideTargetActions_runningActionsCount = obj41327_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41327").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41327_droppedInsideTargetActions_runningActionsCount = window.obj41327_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj41327_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj41090 
playAudio_41337();
function playAudio_41337() {
	window.obj41327_droppedInsideTargetActions_runningActionsCount = obj41327_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj41090")[0];
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
		    window.obj41327_droppedInsideTargetActions_runningActionsCount = window.obj41327_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41327_droppedInsideTargetActions_runningActionsCount = window.obj41327_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj41327_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90497();
function switchText_90497() {
	window.obj41327_droppedInsideTargetActions_runningActionsCount = obj41327_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41327_droppedInsideTargetActions_runningActionsCount = window.obj41327_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41327_droppedInsideTargetActions_runningActionsCount = window.obj41327_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41327_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41327_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41327_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41327_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj41327_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41327_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41327").trigger("obj41327_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41327) {
				console.warn("de-queueing event obj41327." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41327").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41327_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj41260_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_onTouchDown_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj41260");
//	action: dragDrop
//	target: obj41260 
dragDrop_41263();
function dragDrop_41263() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj41260_onTouchDown_runningActionsCount = obj41260_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj41260');
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
	  	containerNode = $('#obj41112');
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
    	window.obj41260_onTouchDown_runningActionsCount = window.obj41260_onTouchDown_runningActionsCount - 1;
if (window.obj41260_onTouchDown_runningActionsCount < 0) {
	window.obj41260_onTouchDown_runningActionsCount = 0;
} else if (window.obj41260_onTouchDown_runningActionsCount == 0) {
	obj41260_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj41108","#obj41147","#obj41151","#obj41155","#obj41159","#obj41163");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_41263 = false;
    	var dropped_id_41263;
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
					dropped_41263 = true;
					dropped_id_41263 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_41263) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj41260").trigger('SCActionDragDrop41263_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj41260_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41260_onTouchDown_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj41260 
move_92609();
function move_92609() {
	window.obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_runningActionsCount = obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj41260");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 370;
	var moveY = 596;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_runningActionsCount = window.obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj41260_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41314();
function runjs_41314() {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = obj41260_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41163").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_6_runningActionsCount = window.obj41260_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41315();
function runjs_41315() {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = obj41260_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41163").css("border-color", "#C00000"); $("#obj41163").css("border-width", "2px"); $("#obj41163").css("border-style", "solid"); $("#obj41163").css("border-radius", "10px"); $("#obj41163").css("-webkit-border-radius", "10px"); $("#obj41163").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_6_runningActionsCount = window.obj41260_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj41165 
hide_41316();
function hide_41316() {
	var selector = "#obj41165";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = obj41260_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41260_droppedInsideTargetActions_6_runningActionsCount = window.obj41260_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41316(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41260_droppedInsideTargetActions_6_runningActionsCount = window.obj41260_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_6_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41260_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41317();
function runjs_41317() {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = obj41260_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41260").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_6_runningActionsCount = window.obj41260_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_6_actionGroup4();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41318();
function switchText_41318() {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = obj41260_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41260_droppedInsideTargetActions_6_runningActionsCount = window.obj41260_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_6_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41260_droppedInsideTargetActions_6_runningActionsCount = window.obj41260_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	}
}






};
obj41260_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj41260 
move_41319();
function move_41319() {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = obj41260_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj41260");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 370;
	var moveY = 596;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41260_droppedInsideTargetActions_6_runningActionsCount = window.obj41260_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_6_actionGroup6();
}
		}, 1);
	});
}



















};
obj41260_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_41320();
function runjs_41320() {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = obj41260_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41163").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_6_runningActionsCount = window.obj41260_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_41321();
function runjs_41321() {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = obj41260_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41163").css("border-color", "#000000"); $("#obj41163").css("border-width", "1px"); $("#obj41163").css("border-style", "solid"); $("#obj41163").css("border-radius", "10px"); $("#obj41163").css("-webkit-border-radius", "10px"); $("#obj41163").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_6_runningActionsCount = window.obj41260_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj41165
(function(){
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = obj41260_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj41165";
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
					window.obj41260_droppedInsideTargetActions_6_runningActionsCount = window.obj41260_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_6_actionGroup9();
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
				window.obj41260_droppedInsideTargetActions_6_runningActionsCount = window.obj41260_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_6_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj41260_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_41323();
function runjs_41323() {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = obj41260_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41260").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_6_runningActionsCount = window.obj41260_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_6_actionGroup10();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_41324();
function runjs_41324() {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = obj41260_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41260").css("border-color", "rgba(0,0,0,0)"); $("#obj41260").css("border-width", "0px"); $("#obj41260").css("border-style", "solid"); $("#obj41260").css("border-radius", "10px"); $("#obj41260").css("-webkit-border-radius", "10px"); $("#obj41260").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_6_runningActionsCount = window.obj41260_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_6_actionGroup11();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_6_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj41086 
playAudio_41325();
function playAudio_41325() {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = obj41260_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj41086")[0];
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
		    window.obj41260_droppedInsideTargetActions_6_runningActionsCount = window.obj41260_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_6_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41260_droppedInsideTargetActions_6_runningActionsCount = window.obj41260_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_6_actionGroup12();
}
	}
}









};
obj41260_droppedInsideTargetActions_6_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_41326();
function switchText_41326() {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = obj41260_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41260_droppedInsideTargetActions_6_runningActionsCount = window.obj41260_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_6_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41260_droppedInsideTargetActions_6_runningActionsCount = window.obj41260_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_6_actionGroup13();
}
		}, 1);
	}
}






};
obj41260_droppedInsideTargetActions_6_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex = 13;
	





















};
obj41260_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41300();
function runjs_41300() {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = obj41260_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41159").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_5_runningActionsCount = window.obj41260_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41301();
function runjs_41301() {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = obj41260_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41159").css("border-color", "#C00000"); $("#obj41159").css("border-width", "2px"); $("#obj41159").css("border-style", "solid"); $("#obj41159").css("border-radius", "10px"); $("#obj41159").css("-webkit-border-radius", "10px"); $("#obj41159").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_5_runningActionsCount = window.obj41260_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj41161 
hide_41302();
function hide_41302() {
	var selector = "#obj41161";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = obj41260_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41260_droppedInsideTargetActions_5_runningActionsCount = window.obj41260_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41302(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41260_droppedInsideTargetActions_5_runningActionsCount = window.obj41260_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41260_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41303();
function runjs_41303() {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = obj41260_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41260").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_5_runningActionsCount = window.obj41260_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41304();
function switchText_41304() {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = obj41260_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41260_droppedInsideTargetActions_5_runningActionsCount = window.obj41260_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41260_droppedInsideTargetActions_5_runningActionsCount = window.obj41260_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj41260_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj41260 
move_41305();
function move_41305() {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = obj41260_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj41260");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 370;
	var moveY = 596;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41260_droppedInsideTargetActions_5_runningActionsCount = window.obj41260_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj41260_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_41306();
function runjs_41306() {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = obj41260_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41159").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_5_runningActionsCount = window.obj41260_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_41307();
function runjs_41307() {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = obj41260_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41159").css("border-color", "#000000"); $("#obj41159").css("border-width", "1px"); $("#obj41159").css("border-style", "solid"); $("#obj41159").css("border-radius", "10px"); $("#obj41159").css("-webkit-border-radius", "10px"); $("#obj41159").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_5_runningActionsCount = window.obj41260_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj41161
(function(){
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = obj41260_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj41161";
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
					window.obj41260_droppedInsideTargetActions_5_runningActionsCount = window.obj41260_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj41260_droppedInsideTargetActions_5_runningActionsCount = window.obj41260_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj41260_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_41309();
function runjs_41309() {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = obj41260_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41260").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_5_runningActionsCount = window.obj41260_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_41310();
function runjs_41310() {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = obj41260_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41260").css("border-color", "rgba(0,0,0,0)"); $("#obj41260").css("border-width", "0px"); $("#obj41260").css("border-style", "solid"); $("#obj41260").css("border-radius", "10px"); $("#obj41260").css("-webkit-border-radius", "10px"); $("#obj41260").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_5_runningActionsCount = window.obj41260_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj41086 
playAudio_41311();
function playAudio_41311() {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = obj41260_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj41086")[0];
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
		    window.obj41260_droppedInsideTargetActions_5_runningActionsCount = window.obj41260_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41260_droppedInsideTargetActions_5_runningActionsCount = window.obj41260_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj41260_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_41312();
function switchText_41312() {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = obj41260_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41260_droppedInsideTargetActions_5_runningActionsCount = window.obj41260_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41260_droppedInsideTargetActions_5_runningActionsCount = window.obj41260_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj41260_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj41260_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41286();
function runjs_41286() {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = obj41260_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41155").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_4_runningActionsCount = window.obj41260_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41287();
function runjs_41287() {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = obj41260_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41155").css("border-color", "#C00000"); $("#obj41155").css("border-width", "2px"); $("#obj41155").css("border-style", "solid"); $("#obj41155").css("border-radius", "10px"); $("#obj41155").css("-webkit-border-radius", "10px"); $("#obj41155").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_4_runningActionsCount = window.obj41260_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj41157 
hide_41288();
function hide_41288() {
	var selector = "#obj41157";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = obj41260_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41260_droppedInsideTargetActions_4_runningActionsCount = window.obj41260_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41288(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41260_droppedInsideTargetActions_4_runningActionsCount = window.obj41260_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41260_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41289();
function runjs_41289() {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = obj41260_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41260").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_4_runningActionsCount = window.obj41260_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41290();
function switchText_41290() {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = obj41260_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41260_droppedInsideTargetActions_4_runningActionsCount = window.obj41260_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41260_droppedInsideTargetActions_4_runningActionsCount = window.obj41260_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj41260_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj41260 
move_41291();
function move_41291() {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = obj41260_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj41260");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 370;
	var moveY = 596;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41260_droppedInsideTargetActions_4_runningActionsCount = window.obj41260_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj41260_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_41292();
function runjs_41292() {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = obj41260_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41155").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_4_runningActionsCount = window.obj41260_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_41293();
function runjs_41293() {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = obj41260_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41155").css("border-color", "#000000"); $("#obj41155").css("border-width", "1px"); $("#obj41155").css("border-style", "solid"); $("#obj41155").css("border-radius", "10px"); $("#obj41155").css("-webkit-border-radius", "10px"); $("#obj41155").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_4_runningActionsCount = window.obj41260_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj41157
(function(){
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = obj41260_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj41157";
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
					window.obj41260_droppedInsideTargetActions_4_runningActionsCount = window.obj41260_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj41260_droppedInsideTargetActions_4_runningActionsCount = window.obj41260_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj41260_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_41295();
function runjs_41295() {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = obj41260_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41260").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_4_runningActionsCount = window.obj41260_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_41296();
function runjs_41296() {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = obj41260_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41260").css("border-color", "rgba(0,0,0,0)"); $("#obj41260").css("border-width", "0px"); $("#obj41260").css("border-style", "solid"); $("#obj41260").css("border-radius", "10px"); $("#obj41260").css("-webkit-border-radius", "10px"); $("#obj41260").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_4_runningActionsCount = window.obj41260_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj41086 
playAudio_41297();
function playAudio_41297() {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = obj41260_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj41086")[0];
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
		    window.obj41260_droppedInsideTargetActions_4_runningActionsCount = window.obj41260_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41260_droppedInsideTargetActions_4_runningActionsCount = window.obj41260_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj41260_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_41298();
function switchText_41298() {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = obj41260_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41260_droppedInsideTargetActions_4_runningActionsCount = window.obj41260_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41260_droppedInsideTargetActions_4_runningActionsCount = window.obj41260_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj41260_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj41260_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41279();
function runjs_41279() {
	window.obj41260_droppedInsideTargetActions_3_runningActionsCount = obj41260_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj41151").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_3_runningActionsCount = window.obj41260_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41283();
function switchText_41283() {
	window.obj41260_droppedInsideTargetActions_3_runningActionsCount = obj41260_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41260_droppedInsideTargetActions_3_runningActionsCount = window.obj41260_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41260_droppedInsideTargetActions_3_runningActionsCount = window.obj41260_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj41260_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_41280();
function runjs_41280() {
	window.obj41260_droppedInsideTargetActions_3_runningActionsCount = obj41260_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj41151").css("border-color", "#058E3F"); $("#obj41151").css("border-width", "2px"); $("#obj41151").css("border-style", "solid"); $("#obj41151").css("border-radius", "10px"); $("#obj41151").css("-webkit-border-radius", "10px"); $("#obj41151").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_3_runningActionsCount = window.obj41260_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj41153 
hide_41281();
function hide_41281() {
	var selector = "#obj41153";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41260_droppedInsideTargetActions_3_runningActionsCount = obj41260_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41260_droppedInsideTargetActions_3_runningActionsCount = window.obj41260_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41281(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41260_droppedInsideTargetActions_3_runningActionsCount = window.obj41260_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41260_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_41282();
function runjs_41282() {
	window.obj41260_droppedInsideTargetActions_3_runningActionsCount = obj41260_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj41260").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_3_runningActionsCount = window.obj41260_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj41090 
playAudio_41284();
function playAudio_41284() {
	window.obj41260_droppedInsideTargetActions_3_runningActionsCount = obj41260_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj41090")[0];
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
		    window.obj41260_droppedInsideTargetActions_3_runningActionsCount = window.obj41260_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41260_droppedInsideTargetActions_3_runningActionsCount = window.obj41260_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_3_actionGroup6();
}
	}
}









};
obj41260_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90493();
function switchText_90493() {
	window.obj41260_droppedInsideTargetActions_3_runningActionsCount = obj41260_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41260_droppedInsideTargetActions_3_runningActionsCount = window.obj41260_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41260_droppedInsideTargetActions_3_runningActionsCount = window.obj41260_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj41260_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	





















};
obj41260_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41272();
function runjs_41272() {
	window.obj41260_droppedInsideTargetActions_2_runningActionsCount = obj41260_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41147").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_2_runningActionsCount = window.obj41260_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41276();
function switchText_41276() {
	window.obj41260_droppedInsideTargetActions_2_runningActionsCount = obj41260_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41260_droppedInsideTargetActions_2_runningActionsCount = window.obj41260_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41260_droppedInsideTargetActions_2_runningActionsCount = window.obj41260_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj41260_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_41273();
function runjs_41273() {
	window.obj41260_droppedInsideTargetActions_2_runningActionsCount = obj41260_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41147").css("border-color", "#058E3F"); $("#obj41147").css("border-width", "2px"); $("#obj41147").css("border-style", "solid"); $("#obj41147").css("border-radius", "10px"); $("#obj41147").css("-webkit-border-radius", "10px"); $("#obj41147").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_2_runningActionsCount = window.obj41260_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj41149 
hide_41274();
function hide_41274() {
	var selector = "#obj41149";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41260_droppedInsideTargetActions_2_runningActionsCount = obj41260_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41260_droppedInsideTargetActions_2_runningActionsCount = window.obj41260_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41274(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41260_droppedInsideTargetActions_2_runningActionsCount = window.obj41260_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41260_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_41275();
function runjs_41275() {
	window.obj41260_droppedInsideTargetActions_2_runningActionsCount = obj41260_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41260").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_2_runningActionsCount = window.obj41260_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj41090 
playAudio_41277();
function playAudio_41277() {
	window.obj41260_droppedInsideTargetActions_2_runningActionsCount = obj41260_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj41090")[0];
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
		    window.obj41260_droppedInsideTargetActions_2_runningActionsCount = window.obj41260_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41260_droppedInsideTargetActions_2_runningActionsCount = window.obj41260_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj41260_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90492();
function switchText_90492() {
	window.obj41260_droppedInsideTargetActions_2_runningActionsCount = obj41260_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41260_droppedInsideTargetActions_2_runningActionsCount = window.obj41260_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41260_droppedInsideTargetActions_2_runningActionsCount = window.obj41260_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj41260_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	





















};
obj41260_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41265();
function runjs_41265() {
	window.obj41260_droppedInsideTargetActions_runningActionsCount = obj41260_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41108").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_runningActionsCount = window.obj41260_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41269();
function switchText_41269() {
	window.obj41260_droppedInsideTargetActions_runningActionsCount = obj41260_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41260_droppedInsideTargetActions_runningActionsCount = window.obj41260_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41260_droppedInsideTargetActions_runningActionsCount = window.obj41260_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj41260_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_41266();
function runjs_41266() {
	window.obj41260_droppedInsideTargetActions_runningActionsCount = obj41260_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41108").css("border-color", "#058E3F"); $("#obj41108").css("border-width", "2px"); $("#obj41108").css("border-style", "solid"); $("#obj41108").css("border-radius", "10px"); $("#obj41108").css("-webkit-border-radius", "10px"); $("#obj41108").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_runningActionsCount = window.obj41260_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj41100 
hide_41267();
function hide_41267() {
	var selector = "#obj41100";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41260_droppedInsideTargetActions_runningActionsCount = obj41260_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41260_droppedInsideTargetActions_runningActionsCount = window.obj41260_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41267(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41260_droppedInsideTargetActions_runningActionsCount = window.obj41260_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41260_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_41268();
function runjs_41268() {
	window.obj41260_droppedInsideTargetActions_runningActionsCount = obj41260_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41260").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41260_droppedInsideTargetActions_runningActionsCount = window.obj41260_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj41260_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj41090 
playAudio_41270();
function playAudio_41270() {
	window.obj41260_droppedInsideTargetActions_runningActionsCount = obj41260_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj41090")[0];
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
		    window.obj41260_droppedInsideTargetActions_runningActionsCount = window.obj41260_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41260_droppedInsideTargetActions_runningActionsCount = window.obj41260_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj41260_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90491();
function switchText_90491() {
	window.obj41260_droppedInsideTargetActions_runningActionsCount = obj41260_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41260_droppedInsideTargetActions_runningActionsCount = window.obj41260_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41260_droppedInsideTargetActions_runningActionsCount = window.obj41260_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41260_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41260_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41260_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41260_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj41260_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41260_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41260").trigger("obj41260_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41260) {
				console.warn("de-queueing event obj41260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41260_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj41461_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_onTouchDown_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj41461");
//	action: dragDrop
//	target: obj41461 
dragDrop_41464();
function dragDrop_41464() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj41461_onTouchDown_runningActionsCount = obj41461_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj41461');
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
	  	containerNode = $('#obj41112');
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
    	window.obj41461_onTouchDown_runningActionsCount = window.obj41461_onTouchDown_runningActionsCount - 1;
if (window.obj41461_onTouchDown_runningActionsCount < 0) {
	window.obj41461_onTouchDown_runningActionsCount = 0;
} else if (window.obj41461_onTouchDown_runningActionsCount == 0) {
	obj41461_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj41155","#obj41159","#obj41163","#obj41108","#obj41147","#obj41151");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_41464 = false;
    	var dropped_id_41464;
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
					dropped_41464 = true;
					dropped_id_41464 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_41464) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj41461").trigger('SCActionDragDrop41464_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj41461_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41461_onTouchDown_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj41461 
move_92615();
function move_92615() {
	window.obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_runningActionsCount = obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj41461");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 376;
	var moveY = 645;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_runningActionsCount = window.obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj41461_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41515();
function runjs_41515() {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = obj41461_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41151").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_6_runningActionsCount = window.obj41461_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41516();
function runjs_41516() {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = obj41461_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41151").css("border-color", "#C00000"); $("#obj41151").css("border-width", "2px"); $("#obj41151").css("border-style", "solid"); $("#obj41151").css("border-radius", "10px"); $("#obj41151").css("-webkit-border-radius", "10px"); $("#obj41151").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_6_runningActionsCount = window.obj41461_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_6_actionGroup2();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj41153 
hide_41517();
function hide_41517() {
	var selector = "#obj41153";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = obj41461_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41461_droppedInsideTargetActions_6_runningActionsCount = window.obj41461_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41517(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41461_droppedInsideTargetActions_6_runningActionsCount = window.obj41461_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_6_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41461_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41518();
function runjs_41518() {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = obj41461_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41461").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_6_runningActionsCount = window.obj41461_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_6_actionGroup4();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41519();
function switchText_41519() {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = obj41461_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41461_droppedInsideTargetActions_6_runningActionsCount = window.obj41461_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_6_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41461_droppedInsideTargetActions_6_runningActionsCount = window.obj41461_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_6_actionGroup5();
}
		}, 1);
	}
}






};
obj41461_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj41461 
move_41520();
function move_41520() {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = obj41461_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj41461");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 376;
	var moveY = 645;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41461_droppedInsideTargetActions_6_runningActionsCount = window.obj41461_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_6_actionGroup6();
}
		}, 1);
	});
}



















};
obj41461_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_41521();
function runjs_41521() {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = obj41461_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41151").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_6_runningActionsCount = window.obj41461_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_41522();
function runjs_41522() {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = obj41461_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41151").css("border-color", "#000000"); $("#obj41151").css("border-width", "1px"); $("#obj41151").css("border-style", "solid"); $("#obj41151").css("border-radius", "10px"); $("#obj41151").css("-webkit-border-radius", "10px"); $("#obj41151").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_6_runningActionsCount = window.obj41461_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj41153
(function(){
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = obj41461_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj41153";
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
					window.obj41461_droppedInsideTargetActions_6_runningActionsCount = window.obj41461_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_6_actionGroup9();
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
				window.obj41461_droppedInsideTargetActions_6_runningActionsCount = window.obj41461_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_6_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj41461_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_41524();
function runjs_41524() {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = obj41461_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41461").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_6_runningActionsCount = window.obj41461_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_6_actionGroup10();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_41525();
function runjs_41525() {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = obj41461_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj41461").css("border-color", "rgba(0,0,0,0)"); $("#obj41461").css("border-width", "0px"); $("#obj41461").css("border-style", "solid"); $("#obj41461").css("border-radius", "10px"); $("#obj41461").css("-webkit-border-radius", "10px"); $("#obj41461").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_6_runningActionsCount = window.obj41461_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_6_actionGroup11();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_6_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj41086 
playAudio_41526();
function playAudio_41526() {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = obj41461_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj41086")[0];
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
		    window.obj41461_droppedInsideTargetActions_6_runningActionsCount = window.obj41461_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_6_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41461_droppedInsideTargetActions_6_runningActionsCount = window.obj41461_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_6_actionGroup12();
}
	}
}









};
obj41461_droppedInsideTargetActions_6_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_41527();
function switchText_41527() {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = obj41461_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41461_droppedInsideTargetActions_6_runningActionsCount = window.obj41461_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_6_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41461_droppedInsideTargetActions_6_runningActionsCount = window.obj41461_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_6_actionGroup13();
}
		}, 1);
	}
}






};
obj41461_droppedInsideTargetActions_6_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex = 13;
	





















};
obj41461_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41501();
function runjs_41501() {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = obj41461_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41147").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_5_runningActionsCount = window.obj41461_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41502();
function runjs_41502() {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = obj41461_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41147").css("border-color", "#C00000"); $("#obj41147").css("border-width", "2px"); $("#obj41147").css("border-style", "solid"); $("#obj41147").css("border-radius", "10px"); $("#obj41147").css("-webkit-border-radius", "10px"); $("#obj41147").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_5_runningActionsCount = window.obj41461_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj41149 
hide_41503();
function hide_41503() {
	var selector = "#obj41149";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = obj41461_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41461_droppedInsideTargetActions_5_runningActionsCount = window.obj41461_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41503(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41461_droppedInsideTargetActions_5_runningActionsCount = window.obj41461_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41461_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41504();
function runjs_41504() {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = obj41461_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41461").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_5_runningActionsCount = window.obj41461_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41505();
function switchText_41505() {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = obj41461_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41461_droppedInsideTargetActions_5_runningActionsCount = window.obj41461_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41461_droppedInsideTargetActions_5_runningActionsCount = window.obj41461_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj41461_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj41461 
move_41506();
function move_41506() {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = obj41461_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj41461");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 376;
	var moveY = 645;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41461_droppedInsideTargetActions_5_runningActionsCount = window.obj41461_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj41461_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_41507();
function runjs_41507() {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = obj41461_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41147").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_5_runningActionsCount = window.obj41461_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_41508();
function runjs_41508() {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = obj41461_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41147").css("border-color", "#000000"); $("#obj41147").css("border-width", "1px"); $("#obj41147").css("border-style", "solid"); $("#obj41147").css("border-radius", "10px"); $("#obj41147").css("-webkit-border-radius", "10px"); $("#obj41147").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_5_runningActionsCount = window.obj41461_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj41149
(function(){
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = obj41461_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj41149";
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
					window.obj41461_droppedInsideTargetActions_5_runningActionsCount = window.obj41461_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj41461_droppedInsideTargetActions_5_runningActionsCount = window.obj41461_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj41461_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_41510();
function runjs_41510() {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = obj41461_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41461").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_5_runningActionsCount = window.obj41461_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_41511();
function runjs_41511() {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = obj41461_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj41461").css("border-color", "rgba(0,0,0,0)"); $("#obj41461").css("border-width", "0px"); $("#obj41461").css("border-style", "solid"); $("#obj41461").css("border-radius", "10px"); $("#obj41461").css("-webkit-border-radius", "10px"); $("#obj41461").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_5_runningActionsCount = window.obj41461_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj41086 
playAudio_41512();
function playAudio_41512() {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = obj41461_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj41086")[0];
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
		    window.obj41461_droppedInsideTargetActions_5_runningActionsCount = window.obj41461_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41461_droppedInsideTargetActions_5_runningActionsCount = window.obj41461_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj41461_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_41513();
function switchText_41513() {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = obj41461_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41461_droppedInsideTargetActions_5_runningActionsCount = window.obj41461_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41461_droppedInsideTargetActions_5_runningActionsCount = window.obj41461_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj41461_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj41461_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41487();
function runjs_41487() {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = obj41461_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41108").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_4_runningActionsCount = window.obj41461_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41488();
function runjs_41488() {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = obj41461_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41108").css("border-color", "#C00000"); $("#obj41108").css("border-width", "2px"); $("#obj41108").css("border-style", "solid"); $("#obj41108").css("border-radius", "10px"); $("#obj41108").css("-webkit-border-radius", "10px"); $("#obj41108").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_4_runningActionsCount = window.obj41461_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj41100 
hide_41489();
function hide_41489() {
	var selector = "#obj41100";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = obj41461_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41461_droppedInsideTargetActions_4_runningActionsCount = window.obj41461_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41489(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41461_droppedInsideTargetActions_4_runningActionsCount = window.obj41461_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41461_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41490();
function runjs_41490() {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = obj41461_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41461").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_4_runningActionsCount = window.obj41461_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41491();
function switchText_41491() {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = obj41461_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41461_droppedInsideTargetActions_4_runningActionsCount = window.obj41461_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41461_droppedInsideTargetActions_4_runningActionsCount = window.obj41461_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj41461_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj41461 
move_41492();
function move_41492() {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = obj41461_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj41461");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 376;
	var moveY = 645;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41461_droppedInsideTargetActions_4_runningActionsCount = window.obj41461_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj41461_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_41493();
function runjs_41493() {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = obj41461_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41108").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_4_runningActionsCount = window.obj41461_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_41494();
function runjs_41494() {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = obj41461_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41108").css("border-color", "#000000"); $("#obj41108").css("border-width", "1px"); $("#obj41108").css("border-style", "solid"); $("#obj41108").css("border-radius", "10px"); $("#obj41108").css("-webkit-border-radius", "10px"); $("#obj41108").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_4_runningActionsCount = window.obj41461_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj41100
(function(){
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = obj41461_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj41100";
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
					window.obj41461_droppedInsideTargetActions_4_runningActionsCount = window.obj41461_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj41461_droppedInsideTargetActions_4_runningActionsCount = window.obj41461_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj41461_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_41496();
function runjs_41496() {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = obj41461_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41461").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_4_runningActionsCount = window.obj41461_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_41497();
function runjs_41497() {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = obj41461_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj41461").css("border-color", "rgba(0,0,0,0)"); $("#obj41461").css("border-width", "0px"); $("#obj41461").css("border-style", "solid"); $("#obj41461").css("border-radius", "10px"); $("#obj41461").css("-webkit-border-radius", "10px"); $("#obj41461").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_4_runningActionsCount = window.obj41461_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj41086 
playAudio_41498();
function playAudio_41498() {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = obj41461_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj41086")[0];
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
		    window.obj41461_droppedInsideTargetActions_4_runningActionsCount = window.obj41461_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41461_droppedInsideTargetActions_4_runningActionsCount = window.obj41461_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj41461_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_41499();
function switchText_41499() {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = obj41461_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41461_droppedInsideTargetActions_4_runningActionsCount = window.obj41461_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41461_droppedInsideTargetActions_4_runningActionsCount = window.obj41461_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj41461_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj41461_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41480();
function runjs_41480() {
	window.obj41461_droppedInsideTargetActions_3_runningActionsCount = obj41461_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj41163").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_3_runningActionsCount = window.obj41461_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41484();
function switchText_41484() {
	window.obj41461_droppedInsideTargetActions_3_runningActionsCount = obj41461_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41461_droppedInsideTargetActions_3_runningActionsCount = window.obj41461_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41461_droppedInsideTargetActions_3_runningActionsCount = window.obj41461_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj41461_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_41481();
function runjs_41481() {
	window.obj41461_droppedInsideTargetActions_3_runningActionsCount = obj41461_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj41163").css("border-color", "#058E3F"); $("#obj41163").css("border-width", "2px"); $("#obj41163").css("border-style", "solid"); $("#obj41163").css("border-radius", "10px"); $("#obj41163").css("-webkit-border-radius", "10px"); $("#obj41163").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_3_runningActionsCount = window.obj41461_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj41165 
hide_41482();
function hide_41482() {
	var selector = "#obj41165";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41461_droppedInsideTargetActions_3_runningActionsCount = obj41461_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41461_droppedInsideTargetActions_3_runningActionsCount = window.obj41461_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41482(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41461_droppedInsideTargetActions_3_runningActionsCount = window.obj41461_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41461_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_41483();
function runjs_41483() {
	window.obj41461_droppedInsideTargetActions_3_runningActionsCount = obj41461_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj41461").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_3_runningActionsCount = window.obj41461_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj41090 
playAudio_41485();
function playAudio_41485() {
	window.obj41461_droppedInsideTargetActions_3_runningActionsCount = obj41461_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj41090")[0];
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
		    window.obj41461_droppedInsideTargetActions_3_runningActionsCount = window.obj41461_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41461_droppedInsideTargetActions_3_runningActionsCount = window.obj41461_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_3_actionGroup6();
}
	}
}









};
obj41461_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90502();
function switchText_90502() {
	window.obj41461_droppedInsideTargetActions_3_runningActionsCount = obj41461_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41461_droppedInsideTargetActions_3_runningActionsCount = window.obj41461_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41461_droppedInsideTargetActions_3_runningActionsCount = window.obj41461_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj41461_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	





















};
obj41461_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41473();
function runjs_41473() {
	window.obj41461_droppedInsideTargetActions_2_runningActionsCount = obj41461_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41159").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_2_runningActionsCount = window.obj41461_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41477();
function switchText_41477() {
	window.obj41461_droppedInsideTargetActions_2_runningActionsCount = obj41461_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41461_droppedInsideTargetActions_2_runningActionsCount = window.obj41461_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41461_droppedInsideTargetActions_2_runningActionsCount = window.obj41461_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj41461_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_41474();
function runjs_41474() {
	window.obj41461_droppedInsideTargetActions_2_runningActionsCount = obj41461_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41159").css("border-color", "#058E3F"); $("#obj41159").css("border-width", "2px"); $("#obj41159").css("border-style", "solid"); $("#obj41159").css("border-radius", "10px"); $("#obj41159").css("-webkit-border-radius", "10px"); $("#obj41159").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_2_runningActionsCount = window.obj41461_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj41161 
hide_41475();
function hide_41475() {
	var selector = "#obj41161";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41461_droppedInsideTargetActions_2_runningActionsCount = obj41461_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41461_droppedInsideTargetActions_2_runningActionsCount = window.obj41461_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41475(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41461_droppedInsideTargetActions_2_runningActionsCount = window.obj41461_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41461_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_41476();
function runjs_41476() {
	window.obj41461_droppedInsideTargetActions_2_runningActionsCount = obj41461_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41461").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_2_runningActionsCount = window.obj41461_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj41090 
playAudio_41478();
function playAudio_41478() {
	window.obj41461_droppedInsideTargetActions_2_runningActionsCount = obj41461_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj41090")[0];
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
		    window.obj41461_droppedInsideTargetActions_2_runningActionsCount = window.obj41461_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41461_droppedInsideTargetActions_2_runningActionsCount = window.obj41461_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj41461_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90501();
function switchText_90501() {
	window.obj41461_droppedInsideTargetActions_2_runningActionsCount = obj41461_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41461_droppedInsideTargetActions_2_runningActionsCount = window.obj41461_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41461_droppedInsideTargetActions_2_runningActionsCount = window.obj41461_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj41461_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	





















};
obj41461_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41466();
function runjs_41466() {
	window.obj41461_droppedInsideTargetActions_runningActionsCount = obj41461_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41155").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_runningActionsCount = window.obj41461_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41470();
function switchText_41470() {
	window.obj41461_droppedInsideTargetActions_runningActionsCount = obj41461_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41461_droppedInsideTargetActions_runningActionsCount = window.obj41461_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41461_droppedInsideTargetActions_runningActionsCount = window.obj41461_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj41461_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_41467();
function runjs_41467() {
	window.obj41461_droppedInsideTargetActions_runningActionsCount = obj41461_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41155").css("border-color", "#058E3F"); $("#obj41155").css("border-width", "2px"); $("#obj41155").css("border-style", "solid"); $("#obj41155").css("border-radius", "10px"); $("#obj41155").css("-webkit-border-radius", "10px"); $("#obj41155").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_runningActionsCount = window.obj41461_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj41157 
hide_41468();
function hide_41468() {
	var selector = "#obj41157";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41461_droppedInsideTargetActions_runningActionsCount = obj41461_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41461_droppedInsideTargetActions_runningActionsCount = window.obj41461_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41468(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41461_droppedInsideTargetActions_runningActionsCount = window.obj41461_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41461_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_41469();
function runjs_41469() {
	window.obj41461_droppedInsideTargetActions_runningActionsCount = obj41461_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41461").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41461_droppedInsideTargetActions_runningActionsCount = window.obj41461_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj41461_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj41090 
playAudio_41471();
function playAudio_41471() {
	window.obj41461_droppedInsideTargetActions_runningActionsCount = obj41461_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj41090")[0];
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
		    window.obj41461_droppedInsideTargetActions_runningActionsCount = window.obj41461_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41461_droppedInsideTargetActions_runningActionsCount = window.obj41461_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj41461_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90500();
function switchText_90500() {
	window.obj41461_droppedInsideTargetActions_runningActionsCount = obj41461_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41088_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41088_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41088").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41088_content");
			setTimeout(function () {
				window.obj41461_droppedInsideTargetActions_runningActionsCount = window.obj41461_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj41088 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41461_droppedInsideTargetActions_runningActionsCount = window.obj41461_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41461_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41461_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41461_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41461_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj41461_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41461_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41461").trigger("obj41461_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41461) {
				console.warn("de-queueing event obj41461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41461_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj67214_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67214_onTap_activeActionGroupIndex = -1;
		$("#obj67214").trigger("obj67214_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67214) {
				console.warn("de-queueing event obj67214." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67214").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67214_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67214 
hide_67217();
function hide_67217() {
	var selector = "#obj67214";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67214_onTap_runningActionsCount = obj67214_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67214_onTap_runningActionsCount = window.obj67214_onTap_runningActionsCount - 1;
if (window.obj67214_onTap_runningActionsCount < 0) {
	window.obj67214_onTap_runningActionsCount = 0;
} else if (window.obj67214_onTap_runningActionsCount == 0) {
	obj67214_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67217(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67214_onTap_runningActionsCount = window.obj67214_onTap_runningActionsCount - 1;
if (window.obj67214_onTap_runningActionsCount < 0) {
	window.obj67214_onTap_runningActionsCount = 0;
} else if (window.obj67214_onTap_runningActionsCount == 0) {
	obj67214_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67220 
stopMovie_67216();
function stopMovie_67216() {
	window.obj67214_onTap_runningActionsCount = obj67214_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67220")[0];
	myVideo.pause();
	window.obj67214_onTap_runningActionsCount = window.obj67214_onTap_runningActionsCount - 1;
if (window.obj67214_onTap_runningActionsCount < 0) {
	window.obj67214_onTap_runningActionsCount = 0;
} else if (window.obj67214_onTap_runningActionsCount == 0) {
	obj67214_onTap_actionGroup1();
}
}
















};
obj67214_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67214_onTap_activeActionGroupIndex = -1;
		$("#obj67214").trigger("obj67214_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67214) {
				console.warn("de-queueing event obj67214." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67214").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67214_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67206
(function(){
	window.obj67214_onTap_runningActionsCount = obj67214_onTap_runningActionsCount + 1;

	var selector = "#obj67206";
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
					window.obj67214_onTap_runningActionsCount = window.obj67214_onTap_runningActionsCount - 1;
if (window.obj67214_onTap_runningActionsCount < 0) {
	window.obj67214_onTap_runningActionsCount = 0;
} else if (window.obj67214_onTap_runningActionsCount == 0) {
	obj67214_onTap_actionGroup2();
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
				window.obj67214_onTap_runningActionsCount = window.obj67214_onTap_runningActionsCount - 1;
if (window.obj67214_onTap_runningActionsCount < 0) {
	window.obj67214_onTap_runningActionsCount = 0;
} else if (window.obj67214_onTap_runningActionsCount == 0) {
	obj67214_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67214_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67214_onTap_activeActionGroupIndex = -1;
		$("#obj67214").trigger("obj67214_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67214) {
				console.warn("de-queueing event obj67214." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67214").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67214_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67220 
move_67219();
function move_67219() {
	window.obj67214_onTap_runningActionsCount = obj67214_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67220");
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
			window.obj67214_onTap_runningActionsCount = window.obj67214_onTap_runningActionsCount - 1;
if (window.obj67214_onTap_runningActionsCount < 0) {
	window.obj67214_onTap_runningActionsCount = 0;
} else if (window.obj67214_onTap_runningActionsCount == 0) {
	obj67214_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67214_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67214_onTap_activeActionGroupIndex = -1;
		$("#obj67214").trigger("obj67214_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67214) {
				console.warn("de-queueing event obj67214." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67214").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67214_onTap_activeActionGroupIndex = 3;
	





















};
obj67206_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67206_onTap_activeActionGroupIndex = -1;
		$("#obj67206").trigger("obj67206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67206) {
				console.warn("de-queueing event obj67206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67206_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67206 
hide_67209();
function hide_67209() {
	var selector = "#obj67206";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67206_onTap_runningActionsCount = obj67206_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67206_onTap_runningActionsCount = window.obj67206_onTap_runningActionsCount - 1;
if (window.obj67206_onTap_runningActionsCount < 0) {
	window.obj67206_onTap_runningActionsCount = 0;
} else if (window.obj67206_onTap_runningActionsCount == 0) {
	obj67206_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67209(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67206_onTap_runningActionsCount = window.obj67206_onTap_runningActionsCount - 1;
if (window.obj67206_onTap_runningActionsCount < 0) {
	window.obj67206_onTap_runningActionsCount = 0;
} else if (window.obj67206_onTap_runningActionsCount == 0) {
	obj67206_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67220 
playPauseMovie_67208();
function playPauseMovie_67208() {
	window.obj67206_onTap_runningActionsCount = obj67206_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67220")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67206_onTap_runningActionsCount = window.obj67206_onTap_runningActionsCount - 1;
if (window.obj67206_onTap_runningActionsCount < 0) {
	window.obj67206_onTap_runningActionsCount = 0;
} else if (window.obj67206_onTap_runningActionsCount == 0) {
	obj67206_onTap_actionGroup1();
}
}

















};
obj67206_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67206_onTap_activeActionGroupIndex = -1;
		$("#obj67206").trigger("obj67206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67206) {
				console.warn("de-queueing event obj67206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67206_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67214
(function(){
	window.obj67206_onTap_runningActionsCount = obj67206_onTap_runningActionsCount + 1;

	var selector = "#obj67214";
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
					window.obj67206_onTap_runningActionsCount = window.obj67206_onTap_runningActionsCount - 1;
if (window.obj67206_onTap_runningActionsCount < 0) {
	window.obj67206_onTap_runningActionsCount = 0;
} else if (window.obj67206_onTap_runningActionsCount == 0) {
	obj67206_onTap_actionGroup2();
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
				window.obj67206_onTap_runningActionsCount = window.obj67206_onTap_runningActionsCount - 1;
if (window.obj67206_onTap_runningActionsCount < 0) {
	window.obj67206_onTap_runningActionsCount = 0;
} else if (window.obj67206_onTap_runningActionsCount == 0) {
	obj67206_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67206_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67206_onTap_activeActionGroupIndex = -1;
		$("#obj67206").trigger("obj67206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67206) {
				console.warn("de-queueing event obj67206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67206_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67220 
move_67211();
function move_67211() {
	window.obj67206_onTap_runningActionsCount = obj67206_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67220");
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
			window.obj67206_onTap_runningActionsCount = window.obj67206_onTap_runningActionsCount - 1;
if (window.obj67206_onTap_runningActionsCount < 0) {
	window.obj67206_onTap_runningActionsCount = 0;
} else if (window.obj67206_onTap_runningActionsCount == 0) {
	obj67206_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67206_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67206_onTap_activeActionGroupIndex = -1;
		$("#obj67206").trigger("obj67206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67206) {
				console.warn("de-queueing event obj67206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67206_onTap_activeActionGroupIndex = 3;
	





















};
obj88525_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88525_onTap_activeActionGroupIndex = -1;
		$("#obj88525").trigger("obj88525_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88525) {
				console.warn("de-queueing event obj88525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88525_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88530 
stopAudio_88527();
function stopAudio_88527() {
	window.obj88525_onTap_runningActionsCount = obj88525_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88530")[0];
	myAudio.pause();
	window.obj88525_onTap_runningActionsCount = window.obj88525_onTap_runningActionsCount - 1;
if (window.obj88525_onTap_runningActionsCount < 0) {
	window.obj88525_onTap_runningActionsCount = 0;
} else if (window.obj88525_onTap_runningActionsCount == 0) {
	obj88525_onTap_actionGroup1();
}
}








};
obj88525_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88525_onTap_activeActionGroupIndex = -1;
		$("#obj88525").trigger("obj88525_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88525) {
				console.warn("de-queueing event obj88525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88525_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88525 
hide_88528();
function hide_88528() {
	var selector = "#obj88525";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88525_onTap_runningActionsCount = obj88525_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88525_onTap_runningActionsCount = window.obj88525_onTap_runningActionsCount - 1;
if (window.obj88525_onTap_runningActionsCount < 0) {
	window.obj88525_onTap_runningActionsCount = 0;
} else if (window.obj88525_onTap_runningActionsCount == 0) {
	obj88525_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88528(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88525_onTap_runningActionsCount = window.obj88525_onTap_runningActionsCount - 1;
if (window.obj88525_onTap_runningActionsCount < 0) {
	window.obj88525_onTap_runningActionsCount = 0;
} else if (window.obj88525_onTap_runningActionsCount == 0) {
	obj88525_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88525_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88525_onTap_activeActionGroupIndex = -1;
		$("#obj88525").trigger("obj88525_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88525) {
				console.warn("de-queueing event obj88525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88525_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88520
(function(){
	window.obj88525_onTap_runningActionsCount = obj88525_onTap_runningActionsCount + 1;

	var selector = "#obj88520";
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
					window.obj88525_onTap_runningActionsCount = window.obj88525_onTap_runningActionsCount - 1;
if (window.obj88525_onTap_runningActionsCount < 0) {
	window.obj88525_onTap_runningActionsCount = 0;
} else if (window.obj88525_onTap_runningActionsCount == 0) {
	obj88525_onTap_actionGroup3();
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
				window.obj88525_onTap_runningActionsCount = window.obj88525_onTap_runningActionsCount - 1;
if (window.obj88525_onTap_runningActionsCount < 0) {
	window.obj88525_onTap_runningActionsCount = 0;
} else if (window.obj88525_onTap_runningActionsCount == 0) {
	obj88525_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88525_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88525_onTap_activeActionGroupIndex = -1;
		$("#obj88525").trigger("obj88525_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88525) {
				console.warn("de-queueing event obj88525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88525_onTap_activeActionGroupIndex = 3;
	





















};
obj88520_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88520_onTap_activeActionGroupIndex = -1;
		$("#obj88520").trigger("obj88520_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88520) {
				console.warn("de-queueing event obj88520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88520_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88520 
hide_88522();
function hide_88522() {
	var selector = "#obj88520";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88520_onTap_runningActionsCount = obj88520_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88520_onTap_runningActionsCount = window.obj88520_onTap_runningActionsCount - 1;
if (window.obj88520_onTap_runningActionsCount < 0) {
	window.obj88520_onTap_runningActionsCount = 0;
} else if (window.obj88520_onTap_runningActionsCount == 0) {
	obj88520_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88522(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88520_onTap_runningActionsCount = window.obj88520_onTap_runningActionsCount - 1;
if (window.obj88520_onTap_runningActionsCount < 0) {
	window.obj88520_onTap_runningActionsCount = 0;
} else if (window.obj88520_onTap_runningActionsCount == 0) {
	obj88520_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88520_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88520_onTap_activeActionGroupIndex = -1;
		$("#obj88520").trigger("obj88520_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88520) {
				console.warn("de-queueing event obj88520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88520_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88525
(function(){
	window.obj88520_onTap_runningActionsCount = obj88520_onTap_runningActionsCount + 1;

	var selector = "#obj88525";
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
					window.obj88520_onTap_runningActionsCount = window.obj88520_onTap_runningActionsCount - 1;
if (window.obj88520_onTap_runningActionsCount < 0) {
	window.obj88520_onTap_runningActionsCount = 0;
} else if (window.obj88520_onTap_runningActionsCount == 0) {
	obj88520_onTap_actionGroup2();
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
				window.obj88520_onTap_runningActionsCount = window.obj88520_onTap_runningActionsCount - 1;
if (window.obj88520_onTap_runningActionsCount < 0) {
	window.obj88520_onTap_runningActionsCount = 0;
} else if (window.obj88520_onTap_runningActionsCount == 0) {
	obj88520_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88520_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88520_onTap_activeActionGroupIndex = -1;
		$("#obj88520").trigger("obj88520_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88520) {
				console.warn("de-queueing event obj88520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88520_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88530 
playAudio_88524();
function playAudio_88524() {
	window.obj88520_onTap_runningActionsCount = obj88520_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88530")[0];
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
		    window.obj88520_onTap_runningActionsCount = window.obj88520_onTap_runningActionsCount - 1;
if (window.obj88520_onTap_runningActionsCount < 0) {
	window.obj88520_onTap_runningActionsCount = 0;
} else if (window.obj88520_onTap_runningActionsCount == 0) {
	obj88520_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88520_onTap_runningActionsCount = window.obj88520_onTap_runningActionsCount - 1;
if (window.obj88520_onTap_runningActionsCount < 0) {
	window.obj88520_onTap_runningActionsCount = 0;
} else if (window.obj88520_onTap_runningActionsCount == 0) {
	obj88520_onTap_actionGroup3();
}
	}
}









};
obj88520_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88520_onTap_activeActionGroupIndex = -1;
		$("#obj88520").trigger("obj88520_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88520) {
				console.warn("de-queueing event obj88520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88520_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj41129: Event Touch Down
 *
 */
$("#obj41129").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41129_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41129_onTap is still running");
	return;
}
var obj41129_onTap_runningActionsCount = 0;
var obj41129_onTap_loopCount = 0;
obj41129_onTap_actionGroup0();
});










/*
 *
 *   obj41126: Event Touch Down
 *
 */
$("#obj41126").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41126_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41126_onTap is still running");
	return;
}
var obj41126_onTap_runningActionsCount = 0;
var obj41126_onTap_loopCount = 0;
obj41126_onTap_actionGroup0();
});










/*
 *
 *   obj41122: Event Touch Down
 *
 */
$("#obj41122").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41122_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41122_onTap is still running");
	return;
}
var obj41122_onTap_runningActionsCount = 0;
var obj41122_onTap_loopCount = 0;
obj41122_onTap_actionGroup0();
});

















































































































































































































































/*
 *
 *   obj40879: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj40879");
	var winTarget = document.getElementById("obj40879");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj40879").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj40879_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj40879_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj40879_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj40879_onTouchDown is still running");
	return;
}
var obj40879_onTouchDown_runningActionsCount = 0;
var obj40879_onTouchDown_loopCount = 0;
obj40879_onTouchDown_actionGroup0();
});



/*
 *
 *   obj40879: Event SCActionDragDrop40882_droppedOutsideTargetActions
 *
 */
$("#obj40879").bind("SCActionDragDrop40882_droppedOutsideTargetActions", function(event) {
	if (window.obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj40879_SCActionDragDrop40882_droppedOutsideTargetActions is still running");
	return;
}
var obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_runningActionsCount = 0;
var obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_loopCount = 0;
obj40879_SCActionDragDrop40882_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj40879: Event droppedInsideTargetActions_6
 *
 */
$("#obj40879").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj40879_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj40879_droppedInsideTargetActions_6 is still running");
	return;
}
var obj40879_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj40879_droppedInsideTargetActions_6_loopCount = 0;
obj40879_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj40879: Event droppedInsideTargetActions_5
 *
 */
$("#obj40879").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj40879_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj40879_droppedInsideTargetActions_5 is still running");
	return;
}
var obj40879_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj40879_droppedInsideTargetActions_5_loopCount = 0;
obj40879_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj40879: Event droppedInsideTargetActions_4
 *
 */
$("#obj40879").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj40879_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj40879_droppedInsideTargetActions_4 is still running");
	return;
}
var obj40879_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj40879_droppedInsideTargetActions_4_loopCount = 0;
obj40879_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj40879: Event droppedInsideTargetActions_3
 *
 */
$("#obj40879").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj40879_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj40879_droppedInsideTargetActions_3 is still running");
	return;
}
var obj40879_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj40879_droppedInsideTargetActions_3_loopCount = 0;
obj40879_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj40879: Event droppedInsideTargetActions_2
 *
 */
$("#obj40879").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj40879_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj40879_droppedInsideTargetActions_2 is still running");
	return;
}
var obj40879_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj40879_droppedInsideTargetActions_2_loopCount = 0;
obj40879_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj40879: Event droppedInsideTargetActions
 *
 */
$("#obj40879").bind("droppedInsideTargetActions", function(event) {
	if (window.obj40879_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj40879_droppedInsideTargetActions is still running");
	return;
}
var obj40879_droppedInsideTargetActions_runningActionsCount = 0;
var obj40879_droppedInsideTargetActions_loopCount = 0;
obj40879_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj41394: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj41394");
	var winTarget = document.getElementById("obj41394");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj41394").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj41394_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj41394_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj41394_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41394_onTouchDown is still running");
	return;
}
var obj41394_onTouchDown_runningActionsCount = 0;
var obj41394_onTouchDown_loopCount = 0;
obj41394_onTouchDown_actionGroup0();
});



/*
 *
 *   obj41394: Event SCActionDragDrop41397_droppedOutsideTargetActions
 *
 */
$("#obj41394").bind("SCActionDragDrop41397_droppedOutsideTargetActions", function(event) {
	if (window.obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41394_SCActionDragDrop41397_droppedOutsideTargetActions is still running");
	return;
}
var obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_runningActionsCount = 0;
var obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_loopCount = 0;
obj41394_SCActionDragDrop41397_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj41394: Event droppedInsideTargetActions_6
 *
 */
$("#obj41394").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj41394_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41394_droppedInsideTargetActions_6 is still running");
	return;
}
var obj41394_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj41394_droppedInsideTargetActions_6_loopCount = 0;
obj41394_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj41394: Event droppedInsideTargetActions_5
 *
 */
$("#obj41394").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj41394_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41394_droppedInsideTargetActions_5 is still running");
	return;
}
var obj41394_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj41394_droppedInsideTargetActions_5_loopCount = 0;
obj41394_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj41394: Event droppedInsideTargetActions_4
 *
 */
$("#obj41394").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj41394_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41394_droppedInsideTargetActions_4 is still running");
	return;
}
var obj41394_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj41394_droppedInsideTargetActions_4_loopCount = 0;
obj41394_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj41394: Event droppedInsideTargetActions_3
 *
 */
$("#obj41394").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj41394_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41394_droppedInsideTargetActions_3 is still running");
	return;
}
var obj41394_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj41394_droppedInsideTargetActions_3_loopCount = 0;
obj41394_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj41394: Event droppedInsideTargetActions_2
 *
 */
$("#obj41394").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj41394_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41394_droppedInsideTargetActions_2 is still running");
	return;
}
var obj41394_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj41394_droppedInsideTargetActions_2_loopCount = 0;
obj41394_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj41394: Event droppedInsideTargetActions
 *
 */
$("#obj41394").bind("droppedInsideTargetActions", function(event) {
	if (window.obj41394_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41394_droppedInsideTargetActions is still running");
	return;
}
var obj41394_droppedInsideTargetActions_runningActionsCount = 0;
var obj41394_droppedInsideTargetActions_loopCount = 0;
obj41394_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj41193: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj41193");
	var winTarget = document.getElementById("obj41193");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj41193").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj41193_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj41193_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj41193_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41193_onTouchDown is still running");
	return;
}
var obj41193_onTouchDown_runningActionsCount = 0;
var obj41193_onTouchDown_loopCount = 0;
obj41193_onTouchDown_actionGroup0();
});



/*
 *
 *   obj41193: Event SCActionDragDrop41196_droppedOutsideTargetActions
 *
 */
$("#obj41193").bind("SCActionDragDrop41196_droppedOutsideTargetActions", function(event) {
	if (window.obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41193_SCActionDragDrop41196_droppedOutsideTargetActions is still running");
	return;
}
var obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_runningActionsCount = 0;
var obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_loopCount = 0;
obj41193_SCActionDragDrop41196_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj41193: Event droppedInsideTargetActions_6
 *
 */
$("#obj41193").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj41193_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41193_droppedInsideTargetActions_6 is still running");
	return;
}
var obj41193_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj41193_droppedInsideTargetActions_6_loopCount = 0;
obj41193_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj41193: Event droppedInsideTargetActions_5
 *
 */
$("#obj41193").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj41193_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41193_droppedInsideTargetActions_5 is still running");
	return;
}
var obj41193_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj41193_droppedInsideTargetActions_5_loopCount = 0;
obj41193_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj41193: Event droppedInsideTargetActions_4
 *
 */
$("#obj41193").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj41193_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41193_droppedInsideTargetActions_4 is still running");
	return;
}
var obj41193_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj41193_droppedInsideTargetActions_4_loopCount = 0;
obj41193_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj41193: Event droppedInsideTargetActions_3
 *
 */
$("#obj41193").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj41193_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41193_droppedInsideTargetActions_3 is still running");
	return;
}
var obj41193_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj41193_droppedInsideTargetActions_3_loopCount = 0;
obj41193_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj41193: Event droppedInsideTargetActions_2
 *
 */
$("#obj41193").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj41193_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41193_droppedInsideTargetActions_2 is still running");
	return;
}
var obj41193_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj41193_droppedInsideTargetActions_2_loopCount = 0;
obj41193_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj41193: Event droppedInsideTargetActions
 *
 */
$("#obj41193").bind("droppedInsideTargetActions", function(event) {
	if (window.obj41193_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41193_droppedInsideTargetActions is still running");
	return;
}
var obj41193_droppedInsideTargetActions_runningActionsCount = 0;
var obj41193_droppedInsideTargetActions_loopCount = 0;
obj41193_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj41327: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj41327");
	var winTarget = document.getElementById("obj41327");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj41327").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj41327_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj41327_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj41327_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41327_onTouchDown is still running");
	return;
}
var obj41327_onTouchDown_runningActionsCount = 0;
var obj41327_onTouchDown_loopCount = 0;
obj41327_onTouchDown_actionGroup0();
});



/*
 *
 *   obj41327: Event SCActionDragDrop41330_droppedOutsideTargetActions
 *
 */
$("#obj41327").bind("SCActionDragDrop41330_droppedOutsideTargetActions", function(event) {
	if (window.obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41327_SCActionDragDrop41330_droppedOutsideTargetActions is still running");
	return;
}
var obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_runningActionsCount = 0;
var obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_loopCount = 0;
obj41327_SCActionDragDrop41330_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj41327: Event droppedInsideTargetActions_6
 *
 */
$("#obj41327").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj41327_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41327_droppedInsideTargetActions_6 is still running");
	return;
}
var obj41327_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj41327_droppedInsideTargetActions_6_loopCount = 0;
obj41327_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj41327: Event droppedInsideTargetActions_5
 *
 */
$("#obj41327").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj41327_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41327_droppedInsideTargetActions_5 is still running");
	return;
}
var obj41327_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj41327_droppedInsideTargetActions_5_loopCount = 0;
obj41327_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj41327: Event droppedInsideTargetActions_4
 *
 */
$("#obj41327").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj41327_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41327_droppedInsideTargetActions_4 is still running");
	return;
}
var obj41327_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj41327_droppedInsideTargetActions_4_loopCount = 0;
obj41327_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj41327: Event droppedInsideTargetActions_3
 *
 */
$("#obj41327").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj41327_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41327_droppedInsideTargetActions_3 is still running");
	return;
}
var obj41327_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj41327_droppedInsideTargetActions_3_loopCount = 0;
obj41327_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj41327: Event droppedInsideTargetActions_2
 *
 */
$("#obj41327").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj41327_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41327_droppedInsideTargetActions_2 is still running");
	return;
}
var obj41327_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj41327_droppedInsideTargetActions_2_loopCount = 0;
obj41327_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj41327: Event droppedInsideTargetActions
 *
 */
$("#obj41327").bind("droppedInsideTargetActions", function(event) {
	if (window.obj41327_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41327_droppedInsideTargetActions is still running");
	return;
}
var obj41327_droppedInsideTargetActions_runningActionsCount = 0;
var obj41327_droppedInsideTargetActions_loopCount = 0;
obj41327_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj41260: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj41260");
	var winTarget = document.getElementById("obj41260");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj41260").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj41260_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj41260_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj41260_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41260_onTouchDown is still running");
	return;
}
var obj41260_onTouchDown_runningActionsCount = 0;
var obj41260_onTouchDown_loopCount = 0;
obj41260_onTouchDown_actionGroup0();
});



/*
 *
 *   obj41260: Event SCActionDragDrop41263_droppedOutsideTargetActions
 *
 */
$("#obj41260").bind("SCActionDragDrop41263_droppedOutsideTargetActions", function(event) {
	if (window.obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41260_SCActionDragDrop41263_droppedOutsideTargetActions is still running");
	return;
}
var obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_runningActionsCount = 0;
var obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_loopCount = 0;
obj41260_SCActionDragDrop41263_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj41260: Event droppedInsideTargetActions_6
 *
 */
$("#obj41260").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj41260_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41260_droppedInsideTargetActions_6 is still running");
	return;
}
var obj41260_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj41260_droppedInsideTargetActions_6_loopCount = 0;
obj41260_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj41260: Event droppedInsideTargetActions_5
 *
 */
$("#obj41260").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj41260_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41260_droppedInsideTargetActions_5 is still running");
	return;
}
var obj41260_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj41260_droppedInsideTargetActions_5_loopCount = 0;
obj41260_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj41260: Event droppedInsideTargetActions_4
 *
 */
$("#obj41260").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj41260_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41260_droppedInsideTargetActions_4 is still running");
	return;
}
var obj41260_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj41260_droppedInsideTargetActions_4_loopCount = 0;
obj41260_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj41260: Event droppedInsideTargetActions_3
 *
 */
$("#obj41260").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj41260_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41260_droppedInsideTargetActions_3 is still running");
	return;
}
var obj41260_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj41260_droppedInsideTargetActions_3_loopCount = 0;
obj41260_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj41260: Event droppedInsideTargetActions_2
 *
 */
$("#obj41260").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj41260_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41260_droppedInsideTargetActions_2 is still running");
	return;
}
var obj41260_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj41260_droppedInsideTargetActions_2_loopCount = 0;
obj41260_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj41260: Event droppedInsideTargetActions
 *
 */
$("#obj41260").bind("droppedInsideTargetActions", function(event) {
	if (window.obj41260_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41260_droppedInsideTargetActions is still running");
	return;
}
var obj41260_droppedInsideTargetActions_runningActionsCount = 0;
var obj41260_droppedInsideTargetActions_loopCount = 0;
obj41260_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj41461: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj41461");
	var winTarget = document.getElementById("obj41461");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj41461").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj41461_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj41461_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj41461_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41461_onTouchDown is still running");
	return;
}
var obj41461_onTouchDown_runningActionsCount = 0;
var obj41461_onTouchDown_loopCount = 0;
obj41461_onTouchDown_actionGroup0();
});



/*
 *
 *   obj41461: Event SCActionDragDrop41464_droppedOutsideTargetActions
 *
 */
$("#obj41461").bind("SCActionDragDrop41464_droppedOutsideTargetActions", function(event) {
	if (window.obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41461_SCActionDragDrop41464_droppedOutsideTargetActions is still running");
	return;
}
var obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_runningActionsCount = 0;
var obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_loopCount = 0;
obj41461_SCActionDragDrop41464_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj41461: Event droppedInsideTargetActions_6
 *
 */
$("#obj41461").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj41461_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41461_droppedInsideTargetActions_6 is still running");
	return;
}
var obj41461_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj41461_droppedInsideTargetActions_6_loopCount = 0;
obj41461_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj41461: Event droppedInsideTargetActions_5
 *
 */
$("#obj41461").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj41461_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41461_droppedInsideTargetActions_5 is still running");
	return;
}
var obj41461_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj41461_droppedInsideTargetActions_5_loopCount = 0;
obj41461_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj41461: Event droppedInsideTargetActions_4
 *
 */
$("#obj41461").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj41461_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41461_droppedInsideTargetActions_4 is still running");
	return;
}
var obj41461_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj41461_droppedInsideTargetActions_4_loopCount = 0;
obj41461_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj41461: Event droppedInsideTargetActions_3
 *
 */
$("#obj41461").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj41461_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41461_droppedInsideTargetActions_3 is still running");
	return;
}
var obj41461_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj41461_droppedInsideTargetActions_3_loopCount = 0;
obj41461_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj41461: Event droppedInsideTargetActions_2
 *
 */
$("#obj41461").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj41461_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41461_droppedInsideTargetActions_2 is still running");
	return;
}
var obj41461_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj41461_droppedInsideTargetActions_2_loopCount = 0;
obj41461_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj41461: Event droppedInsideTargetActions
 *
 */
$("#obj41461").bind("droppedInsideTargetActions", function(event) {
	if (window.obj41461_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41461_droppedInsideTargetActions is still running");
	return;
}
var obj41461_droppedInsideTargetActions_runningActionsCount = 0;
var obj41461_droppedInsideTargetActions_loopCount = 0;
obj41461_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj67214: Event Touch Down
 *
 */
$("#obj67214").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67214_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67214_onTap is still running");
	return;
}
var obj67214_onTap_runningActionsCount = 0;
var obj67214_onTap_loopCount = 0;
obj67214_onTap_actionGroup0();
});










/*
 *
 *   obj67206: Event Touch Down
 *
 */
$("#obj67206").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67206_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67206_onTap is still running");
	return;
}
var obj67206_onTap_runningActionsCount = 0;
var obj67206_onTap_loopCount = 0;
obj67206_onTap_actionGroup0();
});










/*
 *
 *   obj88525: Event Touch Down
 *
 */
$("#obj88525").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88525_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88525_onTap is still running");
	return;
}
var obj88525_onTap_runningActionsCount = 0;
var obj88525_onTap_loopCount = 0;
obj88525_onTap_actionGroup0();
});










/*
 *
 *   obj88520: Event Touch Down
 *
 */
$("#obj88520").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88520_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88520_onTap is still running");
	return;
}
var obj88520_onTap_runningActionsCount = 0;
var obj88520_onTap_loopCount = 0;
obj88520_onTap_actionGroup0();
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
	
$("#obj41145").trigger('SCEventShow');
$("#obj41129").trigger('SCEventShow');
$("#obj41126").trigger('SCEventShow');
$("#obj41122").trigger('SCEventShow');
$("#obj41120").trigger('SCEventShow');
$("#obj41118").trigger('SCEventShow');
$("#obj41116").trigger('SCEventShow');
$("#obj41114").trigger('SCEventShow');
$("#obj41112").trigger('SCEventShow');
$("#obj41110").trigger('SCEventShow');
$("#obj41108").trigger('SCEventShow');
$("#obj41100").trigger('SCEventShow');
$("#obj41092").trigger('SCEventShow');
$("#obj41090").trigger('SCEventShow');
$("#obj41088").trigger('SCEventShow');
$("#obj41086").trigger('SCEventShow');
$("#obj41084").trigger('SCEventShow');
$("#obj41147").trigger('SCEventShow');
$("#obj41149").trigger('SCEventShow');
$("#obj41151").trigger('SCEventShow');
$("#obj41153").trigger('SCEventShow');
$("#obj41155").trigger('SCEventShow');
$("#obj41157").trigger('SCEventShow');
$("#obj41159").trigger('SCEventShow');
$("#obj41161").trigger('SCEventShow');
$("#obj41163").trigger('SCEventShow');
$("#obj41165").trigger('SCEventShow');
$("#obj40879").trigger('SCEventShow');
$("#obj41394").trigger('SCEventShow');
$("#obj41193").trigger('SCEventShow');
$("#obj41327").trigger('SCEventShow');
$("#obj41260").trigger('SCEventShow');
$("#obj41461").trigger('SCEventShow');
$("#obj67214").trigger('SCEventShow');
$("#obj67206").trigger('SCEventShow');
$("#obj88525").trigger('SCEventShow');
$("#obj88520").trigger('SCEventShow');
$("#obj88530").trigger('SCEventShow');
$("#obj94905").trigger('SCEventShow');
$("#obj67220").trigger('SCEventShow');
	
});