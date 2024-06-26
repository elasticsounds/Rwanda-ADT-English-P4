pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 38281;
pubcoder.page.title = pubcoder.page.title || "129";
pubcoder.page.number = pubcoder.page.number || 129;
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
var obj38440_onTap_activeActionGroupIndex = -1;
var obj38440_onTap_runningActionsCount = 0;
var obj38440_onTap_loopCount = 0;
var obj38437_onTap_activeActionGroupIndex = -1;
var obj38437_onTap_runningActionsCount = 0;
var obj38437_onTap_loopCount = 0;
var obj38433_onTap_activeActionGroupIndex = -1;
var obj38433_onTap_runningActionsCount = 0;
var obj38433_onTap_loopCount = 0;
var obj38479_onDrag_activeActionGroupIndex = -1;
var obj38479_onDrag_runningActionsCount = 0;
var obj38479_onDrag_loopCount = 0;
var obj38479_onTouchDown_activeActionGroupIndex = -1;
var obj38479_onTouchDown_runningActionsCount = 0;
var obj38479_onTouchDown_loopCount = 0;
var obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_runningActionsCount = 0;
var obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_loopCount = 0;
var obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj38479_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj38479_droppedInsideTargetActions_6_loopCount = 0;
var obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj38479_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj38479_droppedInsideTargetActions_5_loopCount = 0;
var obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj38479_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj38479_droppedInsideTargetActions_4_loopCount = 0;
var obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj38479_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj38479_droppedInsideTargetActions_3_loopCount = 0;
var obj38479_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj38479_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj38479_droppedInsideTargetActions_2_loopCount = 0;
var obj38479_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj38479_droppedInsideTargetActions_runningActionsCount = 0;
var obj38479_droppedInsideTargetActions_loopCount = 0;
var obj38481_onDrag_activeActionGroupIndex = -1;
var obj38481_onDrag_runningActionsCount = 0;
var obj38481_onDrag_loopCount = 0;
var obj38481_onTouchDown_activeActionGroupIndex = -1;
var obj38481_onTouchDown_runningActionsCount = 0;
var obj38481_onTouchDown_loopCount = 0;
var obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_loopCount = 0;
var obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj38481_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj38481_droppedInsideTargetActions_6_loopCount = 0;
var obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj38481_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj38481_droppedInsideTargetActions_5_loopCount = 0;
var obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj38481_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj38481_droppedInsideTargetActions_4_loopCount = 0;
var obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj38481_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj38481_droppedInsideTargetActions_3_loopCount = 0;
var obj38481_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj38481_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj38481_droppedInsideTargetActions_2_loopCount = 0;
var obj38481_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj38481_droppedInsideTargetActions_runningActionsCount = 0;
var obj38481_droppedInsideTargetActions_loopCount = 0;
var obj38483_onDrag_activeActionGroupIndex = -1;
var obj38483_onDrag_runningActionsCount = 0;
var obj38483_onDrag_loopCount = 0;
var obj38483_onTouchDown_activeActionGroupIndex = -1;
var obj38483_onTouchDown_runningActionsCount = 0;
var obj38483_onTouchDown_loopCount = 0;
var obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_runningActionsCount = 0;
var obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_loopCount = 0;
var obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj38483_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj38483_droppedInsideTargetActions_6_loopCount = 0;
var obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj38483_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj38483_droppedInsideTargetActions_5_loopCount = 0;
var obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj38483_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj38483_droppedInsideTargetActions_4_loopCount = 0;
var obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj38483_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj38483_droppedInsideTargetActions_3_loopCount = 0;
var obj38483_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj38483_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj38483_droppedInsideTargetActions_2_loopCount = 0;
var obj38483_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj38483_droppedInsideTargetActions_runningActionsCount = 0;
var obj38483_droppedInsideTargetActions_loopCount = 0;
var obj38485_onDrag_activeActionGroupIndex = -1;
var obj38485_onDrag_runningActionsCount = 0;
var obj38485_onDrag_loopCount = 0;
var obj38485_onTouchDown_activeActionGroupIndex = -1;
var obj38485_onTouchDown_runningActionsCount = 0;
var obj38485_onTouchDown_loopCount = 0;
var obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_runningActionsCount = 0;
var obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_loopCount = 0;
var obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj38485_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj38485_droppedInsideTargetActions_6_loopCount = 0;
var obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj38485_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj38485_droppedInsideTargetActions_5_loopCount = 0;
var obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj38485_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj38485_droppedInsideTargetActions_4_loopCount = 0;
var obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj38485_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj38485_droppedInsideTargetActions_3_loopCount = 0;
var obj38485_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj38485_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj38485_droppedInsideTargetActions_2_loopCount = 0;
var obj38485_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj38485_droppedInsideTargetActions_runningActionsCount = 0;
var obj38485_droppedInsideTargetActions_loopCount = 0;
var obj38487_onDrag_activeActionGroupIndex = -1;
var obj38487_onDrag_runningActionsCount = 0;
var obj38487_onDrag_loopCount = 0;
var obj38487_onTouchDown_activeActionGroupIndex = -1;
var obj38487_onTouchDown_runningActionsCount = 0;
var obj38487_onTouchDown_loopCount = 0;
var obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_runningActionsCount = 0;
var obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_loopCount = 0;
var obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj38487_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj38487_droppedInsideTargetActions_6_loopCount = 0;
var obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj38487_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj38487_droppedInsideTargetActions_5_loopCount = 0;
var obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj38487_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj38487_droppedInsideTargetActions_4_loopCount = 0;
var obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj38487_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj38487_droppedInsideTargetActions_3_loopCount = 0;
var obj38487_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj38487_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj38487_droppedInsideTargetActions_2_loopCount = 0;
var obj38487_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj38487_droppedInsideTargetActions_runningActionsCount = 0;
var obj38487_droppedInsideTargetActions_loopCount = 0;
var obj38489_onDrag_activeActionGroupIndex = -1;
var obj38489_onDrag_runningActionsCount = 0;
var obj38489_onDrag_loopCount = 0;
var obj38489_onTouchDown_activeActionGroupIndex = -1;
var obj38489_onTouchDown_runningActionsCount = 0;
var obj38489_onTouchDown_loopCount = 0;
var obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_runningActionsCount = 0;
var obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_loopCount = 0;
var obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj38489_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj38489_droppedInsideTargetActions_6_loopCount = 0;
var obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj38489_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj38489_droppedInsideTargetActions_5_loopCount = 0;
var obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj38489_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj38489_droppedInsideTargetActions_4_loopCount = 0;
var obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj38489_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj38489_droppedInsideTargetActions_3_loopCount = 0;
var obj38489_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj38489_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj38489_droppedInsideTargetActions_2_loopCount = 0;
var obj38489_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj38489_droppedInsideTargetActions_runningActionsCount = 0;
var obj38489_droppedInsideTargetActions_loopCount = 0;
var obj67070_onTap_activeActionGroupIndex = -1;
var obj67070_onTap_runningActionsCount = 0;
var obj67070_onTap_loopCount = 0;
var obj67062_onTap_activeActionGroupIndex = -1;
var obj67062_onTap_runningActionsCount = 0;
var obj67062_onTap_loopCount = 0;
var obj88417_onTap_activeActionGroupIndex = -1;
var obj88417_onTap_runningActionsCount = 0;
var obj88417_onTap_loopCount = 0;
var obj88412_onTap_activeActionGroupIndex = -1;
var obj88412_onTap_runningActionsCount = 0;
var obj88412_onTap_loopCount = 0;
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
		
obj38440_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38440_onTap_activeActionGroupIndex = -1;
		$("#obj38440").trigger("obj38440_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38440) {
				console.warn("de-queueing event obj38440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38440_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_38442();
function goToPage_38442() {
	window.obj38440_onTap_runningActionsCount = obj38440_onTap_runningActionsCount + 1;
	$("#anchor772")[0].click();
	window.obj38440_onTap_runningActionsCount = window.obj38440_onTap_runningActionsCount - 1;
if (window.obj38440_onTap_runningActionsCount < 0) {
	window.obj38440_onTap_runningActionsCount = 0;
} else if (window.obj38440_onTap_runningActionsCount == 0) {
	obj38440_onTap_actionGroup1();
}
}





















};
obj38440_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38440_onTap_activeActionGroupIndex = -1;
		$("#obj38440").trigger("obj38440_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38440) {
				console.warn("de-queueing event obj38440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38440_onTap_activeActionGroupIndex = 1;
	





















};
obj38437_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38437_onTap_activeActionGroupIndex = -1;
		$("#obj38437").trigger("obj38437_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38437) {
				console.warn("de-queueing event obj38437." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38437").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38437_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_38439();
function goToPage_38439() {
	window.obj38437_onTap_runningActionsCount = obj38437_onTap_runningActionsCount + 1;
	$("#anchor773")[0].click();
	window.obj38437_onTap_runningActionsCount = window.obj38437_onTap_runningActionsCount - 1;
if (window.obj38437_onTap_runningActionsCount < 0) {
	window.obj38437_onTap_runningActionsCount = 0;
} else if (window.obj38437_onTap_runningActionsCount == 0) {
	obj38437_onTap_actionGroup1();
}
}





















};
obj38437_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38437_onTap_activeActionGroupIndex = -1;
		$("#obj38437").trigger("obj38437_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38437) {
				console.warn("de-queueing event obj38437." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38437").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38437_onTap_activeActionGroupIndex = 1;
	





















};
obj38433_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38433_onTap_activeActionGroupIndex = -1;
		$("#obj38433").trigger("obj38433_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38433) {
				console.warn("de-queueing event obj38433." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38433").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38433_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_38435();
function goToPage_38435() {
	window.obj38433_onTap_runningActionsCount = obj38433_onTap_runningActionsCount + 1;
	$("#anchor774")[0].click();
	window.obj38433_onTap_runningActionsCount = window.obj38433_onTap_runningActionsCount - 1;
if (window.obj38433_onTap_runningActionsCount < 0) {
	window.obj38433_onTap_runningActionsCount = 0;
} else if (window.obj38433_onTap_runningActionsCount == 0) {
	obj38433_onTap_actionGroup1();
}
}





















};
obj38433_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38433_onTap_activeActionGroupIndex = -1;
		$("#obj38433").trigger("obj38433_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38433) {
				console.warn("de-queueing event obj38433." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38433").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38433_onTap_activeActionGroupIndex = 1;
	





















};
obj38479_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_onTouchDown_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj38479");
//	action: dragDrop
//	target: obj38479 
dragDrop_38522();
function dragDrop_38522() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj38479_onTouchDown_runningActionsCount = obj38479_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj38479');
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
	  	containerNode = $('#obj38423');
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
    	window.obj38479_onTouchDown_runningActionsCount = window.obj38479_onTouchDown_runningActionsCount - 1;
if (window.obj38479_onTouchDown_runningActionsCount < 0) {
	window.obj38479_onTouchDown_runningActionsCount = 0;
} else if (window.obj38479_onTouchDown_runningActionsCount == 0) {
	obj38479_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj38463","#obj38469","#obj38421","#obj38465","#obj38467","#obj38471");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_38522 = false;
    	var dropped_id_38522;
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
					dropped_38522 = true;
					dropped_id_38522 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_38522) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj38479").trigger('SCActionDragDrop38522_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj38479_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38479_onTouchDown_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj38479 
move_92571();
function move_92571() {
	window.obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_runningActionsCount = obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj38479");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 96;
	var moveY = 519;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_runningActionsCount = window.obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj38479_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38705();
function runjs_38705() {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = obj38479_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38479").css("border-color", "#C00000"); $("#obj38479").css("border-width", "2px"); $("#obj38479").css("border-style", "solid"); $("#obj38479").css("border-radius", "10px"); $("#obj38479").css("-webkit-border-radius", "10px"); $("#obj38479").css("-moz-border-radius", "10px"); $("#obj38479_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38479_droppedInsideTargetActions_6_runningActionsCount = window.obj38479_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj38479_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38473 
hide_38706();
function hide_38706() {
	var selector = "#obj38473";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = obj38479_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38479_droppedInsideTargetActions_6_runningActionsCount = window.obj38479_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_6_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38706(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38479_droppedInsideTargetActions_6_runningActionsCount = window.obj38479_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_6_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38479_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38707();
function switchText_38707() {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = obj38479_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38479_droppedInsideTargetActions_6_runningActionsCount = window.obj38479_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_6_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38479_droppedInsideTargetActions_6_runningActionsCount = window.obj38479_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
	}
}






};
obj38479_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38479 
move_38708();
function move_38708() {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = obj38479_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj38479");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 96;
	var moveY = 519;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38479_droppedInsideTargetActions_6_runningActionsCount = window.obj38479_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	});
}



















};
obj38479_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38709();
function runjs_38709() {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = obj38479_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38479").css("border-color", "rgba(0,0,0,0)"); $("#obj38479").css("border-width", "1px"); $("#obj38479").css("border-style", "solid"); $("#obj38479").css("border-radius", "10px"); $("#obj38479").css("-webkit-border-radius", "10px"); $("#obj38479").css("-moz-border-radius", "10px"); $("#obj38479_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38479_droppedInsideTargetActions_6_runningActionsCount = window.obj38479_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_6_actionGroup5();
}
	}, 1);
}







};
obj38479_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38473
(function(){
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = obj38479_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj38473";
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
					window.obj38479_droppedInsideTargetActions_6_runningActionsCount = window.obj38479_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj38479_droppedInsideTargetActions_6_runningActionsCount = window.obj38479_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38479_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38711();
function runjs_38711() {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = obj38479_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38479").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38479_droppedInsideTargetActions_6_runningActionsCount = window.obj38479_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj38479_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38712();
function runjs_38712() {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = obj38479_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38479").css("border-color", "rgba(0,0,0,0)"); $("#obj38479").css("border-width", "0px"); $("#obj38479").css("border-style", "solid"); $("#obj38479").css("border-radius", "10px"); $("#obj38479").css("-webkit-border-radius", "10px"); $("#obj38479").css("-moz-border-radius", "10px"); $("#obj38479_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38479_droppedInsideTargetActions_6_runningActionsCount = window.obj38479_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj38479_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38713();
function playAudio_38713() {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = obj38479_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38479_droppedInsideTargetActions_6_runningActionsCount = window.obj38479_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_6_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38479_droppedInsideTargetActions_6_runningActionsCount = window.obj38479_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_6_actionGroup9();
}
	}
}









};
obj38479_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38714();
function switchText_38714() {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = obj38479_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38479_droppedInsideTargetActions_6_runningActionsCount = window.obj38479_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_6_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38479_droppedInsideTargetActions_6_runningActionsCount = window.obj38479_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_6_actionGroup10();
}
		}, 1);
	}
}






};
obj38479_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	





















};
obj38479_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38661();
function runjs_38661() {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = obj38479_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38479").css("border-color", "#C00000"); $("#obj38479").css("border-width", "2px"); $("#obj38479").css("border-style", "solid"); $("#obj38479").css("border-radius", "10px"); $("#obj38479").css("-webkit-border-radius", "10px"); $("#obj38479").css("-moz-border-radius", "10px"); $("#obj38479_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38479_droppedInsideTargetActions_5_runningActionsCount = window.obj38479_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj38479_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38477 
hide_38662();
function hide_38662() {
	var selector = "#obj38477";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = obj38479_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38479_droppedInsideTargetActions_5_runningActionsCount = window.obj38479_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_5_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38662(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38479_droppedInsideTargetActions_5_runningActionsCount = window.obj38479_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_5_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38479_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38663();
function switchText_38663() {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = obj38479_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38479_droppedInsideTargetActions_5_runningActionsCount = window.obj38479_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_5_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38479_droppedInsideTargetActions_5_runningActionsCount = window.obj38479_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
	}
}






};
obj38479_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38479 
move_38664();
function move_38664() {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = obj38479_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj38479");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 96;
	var moveY = 519;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38479_droppedInsideTargetActions_5_runningActionsCount = window.obj38479_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	});
}



















};
obj38479_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38665();
function runjs_38665() {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = obj38479_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38479").css("border-color", "rgba(0,0,0,0)"); $("#obj38479").css("border-width", "1px"); $("#obj38479").css("border-style", "solid"); $("#obj38479").css("border-radius", "10px"); $("#obj38479").css("-webkit-border-radius", "10px"); $("#obj38479").css("-moz-border-radius", "10px"); $("#obj38479_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38479_droppedInsideTargetActions_5_runningActionsCount = window.obj38479_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_5_actionGroup5();
}
	}, 1);
}







};
obj38479_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38477
(function(){
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = obj38479_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj38477";
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
					window.obj38479_droppedInsideTargetActions_5_runningActionsCount = window.obj38479_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj38479_droppedInsideTargetActions_5_runningActionsCount = window.obj38479_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38479_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38667();
function runjs_38667() {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = obj38479_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38479").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38479_droppedInsideTargetActions_5_runningActionsCount = window.obj38479_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj38479_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38668();
function runjs_38668() {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = obj38479_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38479").css("border-color", "rgba(0,0,0,0)"); $("#obj38479").css("border-width", "0px"); $("#obj38479").css("border-style", "solid"); $("#obj38479").css("border-radius", "10px"); $("#obj38479").css("-webkit-border-radius", "10px"); $("#obj38479").css("-moz-border-radius", "10px"); $("#obj38479_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38479_droppedInsideTargetActions_5_runningActionsCount = window.obj38479_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj38479_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38669();
function playAudio_38669() {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = obj38479_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38479_droppedInsideTargetActions_5_runningActionsCount = window.obj38479_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_5_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38479_droppedInsideTargetActions_5_runningActionsCount = window.obj38479_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_5_actionGroup9();
}
	}
}









};
obj38479_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38670();
function switchText_38670() {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = obj38479_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38479_droppedInsideTargetActions_5_runningActionsCount = window.obj38479_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_5_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38479_droppedInsideTargetActions_5_runningActionsCount = window.obj38479_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_5_actionGroup10();
}
		}, 1);
	}
}






};
obj38479_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	





















};
obj38479_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38617();
function runjs_38617() {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = obj38479_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38479").css("border-color", "#C00000"); $("#obj38479").css("border-width", "2px"); $("#obj38479").css("border-style", "solid"); $("#obj38479").css("border-radius", "10px"); $("#obj38479").css("-webkit-border-radius", "10px"); $("#obj38479").css("-moz-border-radius", "10px"); $("#obj38479_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38479_droppedInsideTargetActions_4_runningActionsCount = window.obj38479_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj38479_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38411 
hide_38618();
function hide_38618() {
	var selector = "#obj38411";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = obj38479_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38479_droppedInsideTargetActions_4_runningActionsCount = window.obj38479_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_4_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38618(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38479_droppedInsideTargetActions_4_runningActionsCount = window.obj38479_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_4_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38479_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38619();
function switchText_38619() {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = obj38479_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38479_droppedInsideTargetActions_4_runningActionsCount = window.obj38479_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_4_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38479_droppedInsideTargetActions_4_runningActionsCount = window.obj38479_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
	}
}






};
obj38479_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38479 
move_38620();
function move_38620() {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = obj38479_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj38479");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 96;
	var moveY = 519;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38479_droppedInsideTargetActions_4_runningActionsCount = window.obj38479_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	});
}



















};
obj38479_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38621();
function runjs_38621() {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = obj38479_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38479").css("border-color", "rgba(0,0,0,0)"); $("#obj38479").css("border-width", "1px"); $("#obj38479").css("border-style", "solid"); $("#obj38479").css("border-radius", "10px"); $("#obj38479").css("-webkit-border-radius", "10px"); $("#obj38479").css("-moz-border-radius", "10px"); $("#obj38479_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38479_droppedInsideTargetActions_4_runningActionsCount = window.obj38479_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj38479_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38411
(function(){
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = obj38479_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj38411";
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
					window.obj38479_droppedInsideTargetActions_4_runningActionsCount = window.obj38479_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj38479_droppedInsideTargetActions_4_runningActionsCount = window.obj38479_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38479_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38623();
function runjs_38623() {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = obj38479_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38479").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38479_droppedInsideTargetActions_4_runningActionsCount = window.obj38479_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj38479_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38624();
function runjs_38624() {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = obj38479_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38479").css("border-color", "rgba(0,0,0,0)"); $("#obj38479").css("border-width", "0px"); $("#obj38479").css("border-style", "solid"); $("#obj38479").css("border-radius", "10px"); $("#obj38479").css("-webkit-border-radius", "10px"); $("#obj38479").css("-moz-border-radius", "10px"); $("#obj38479_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38479_droppedInsideTargetActions_4_runningActionsCount = window.obj38479_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj38479_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38625();
function playAudio_38625() {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = obj38479_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38479_droppedInsideTargetActions_4_runningActionsCount = window.obj38479_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_4_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38479_droppedInsideTargetActions_4_runningActionsCount = window.obj38479_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_4_actionGroup9();
}
	}
}









};
obj38479_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38626();
function switchText_38626() {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = obj38479_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38479_droppedInsideTargetActions_4_runningActionsCount = window.obj38479_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_4_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38479_droppedInsideTargetActions_4_runningActionsCount = window.obj38479_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_4_actionGroup10();
}
		}, 1);
	}
}






};
obj38479_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	





















};
obj38479_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38571();
function runjs_38571() {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = obj38479_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38479").css("border-color", "#C00000"); $("#obj38479").css("border-width", "2px"); $("#obj38479").css("border-style", "solid"); $("#obj38479").css("border-radius", "10px"); $("#obj38479").css("-webkit-border-radius", "10px"); $("#obj38479").css("-moz-border-radius", "10px"); $("#obj38479_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38479_droppedInsideTargetActions_3_runningActionsCount = window.obj38479_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj38479_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38415 
hide_38572();
function hide_38572() {
	var selector = "#obj38415";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = obj38479_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38479_droppedInsideTargetActions_3_runningActionsCount = window.obj38479_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38572(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38479_droppedInsideTargetActions_3_runningActionsCount = window.obj38479_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_3_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38479_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38574();
function switchText_38574() {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = obj38479_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38479_droppedInsideTargetActions_3_runningActionsCount = window.obj38479_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38479_droppedInsideTargetActions_3_runningActionsCount = window.obj38479_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj38479_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38479 
move_38575();
function move_38575() {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = obj38479_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj38479");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 96;
	var moveY = 519;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38479_droppedInsideTargetActions_3_runningActionsCount = window.obj38479_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj38479_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38577();
function runjs_38577() {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = obj38479_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38479").css("border-color", "rgba(0,0,0,0)"); $("#obj38479").css("border-width", "1px"); $("#obj38479").css("border-style", "solid"); $("#obj38479").css("border-radius", "10px"); $("#obj38479").css("-webkit-border-radius", "10px"); $("#obj38479").css("-moz-border-radius", "10px"); $("#obj38479_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38479_droppedInsideTargetActions_3_runningActionsCount = window.obj38479_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj38479_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38415
(function(){
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = obj38479_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj38415";
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
					window.obj38479_droppedInsideTargetActions_3_runningActionsCount = window.obj38479_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_3_actionGroup6();
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
				window.obj38479_droppedInsideTargetActions_3_runningActionsCount = window.obj38479_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_3_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38479_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38579();
function runjs_38579() {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = obj38479_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38479").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38479_droppedInsideTargetActions_3_runningActionsCount = window.obj38479_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj38479_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38580();
function runjs_38580() {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = obj38479_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38479").css("border-color", "rgba(0,0,0,0)"); $("#obj38479").css("border-width", "0px"); $("#obj38479").css("border-style", "solid"); $("#obj38479").css("border-radius", "10px"); $("#obj38479").css("-webkit-border-radius", "10px"); $("#obj38479").css("-moz-border-radius", "10px"); $("#obj38479_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38479_droppedInsideTargetActions_3_runningActionsCount = window.obj38479_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj38479_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38581();
function playAudio_38581() {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = obj38479_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38479_droppedInsideTargetActions_3_runningActionsCount = window.obj38479_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38479_droppedInsideTargetActions_3_runningActionsCount = window.obj38479_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj38479_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38582();
function switchText_38582() {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = obj38479_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38479_droppedInsideTargetActions_3_runningActionsCount = window.obj38479_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_3_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38479_droppedInsideTargetActions_3_runningActionsCount = window.obj38479_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_3_actionGroup10();
}
		}, 1);
	}
}






};
obj38479_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	





















};
obj38479_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38529();
function runjs_38529() {
	window.obj38479_droppedInsideTargetActions_2_runningActionsCount = obj38479_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38479").css("border-color", "#058E3F"); $("#obj38479").css("border-width", "3px"); $("#obj38479").css("border-style", "solid"); $("#obj38479").css("border-radius", "10px"); $("#obj38479").css("-webkit-border-radius", "10px"); $("#obj38479").css("-moz-border-radius", "10px"); $("#obj38479_img").css("top", "-3px").css("left", "-3px");
	
	setTimeout(function() {
		window.obj38479_droppedInsideTargetActions_2_runningActionsCount = window.obj38479_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj38479_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_38531();
function switchText_38531() {
	window.obj38479_droppedInsideTargetActions_2_runningActionsCount = obj38479_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38479_droppedInsideTargetActions_2_runningActionsCount = window.obj38479_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38479_droppedInsideTargetActions_2_runningActionsCount = window.obj38479_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj38479_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj38475 
hide_38530();
function hide_38530() {
	var selector = "#obj38475";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38479_droppedInsideTargetActions_2_runningActionsCount = obj38479_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38479_droppedInsideTargetActions_2_runningActionsCount = window.obj38479_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38530(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38479_droppedInsideTargetActions_2_runningActionsCount = window.obj38479_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38479_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj38405 
playAudio_38532();
function playAudio_38532() {
	window.obj38479_droppedInsideTargetActions_2_runningActionsCount = obj38479_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj38405")[0];
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
		    window.obj38479_droppedInsideTargetActions_2_runningActionsCount = window.obj38479_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_2_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38479_droppedInsideTargetActions_2_runningActionsCount = window.obj38479_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_2_actionGroup4();
}
	}
}









};
obj38479_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90458();
function switchText_90458() {
	window.obj38479_droppedInsideTargetActions_2_runningActionsCount = obj38479_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38479_droppedInsideTargetActions_2_runningActionsCount = window.obj38479_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38479_droppedInsideTargetActions_2_runningActionsCount = window.obj38479_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj38479_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	





















};
obj38479_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38524();
function runjs_38524() {
	window.obj38479_droppedInsideTargetActions_runningActionsCount = obj38479_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38479").css("border-color", "#058E3F"); $("#obj38479").css("border-width", "3px"); $("#obj38479").css("border-style", "solid"); $("#obj38479").css("border-radius", "10px"); $("#obj38479").css("-webkit-border-radius", "10px"); $("#obj38479").css("-moz-border-radius", "10px"); $("#obj38479_img").css("top", "-3px").css("left", "-3px");
	
	setTimeout(function() {
		window.obj38479_droppedInsideTargetActions_runningActionsCount = window.obj38479_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj38479_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_38526();
function switchText_38526() {
	window.obj38479_droppedInsideTargetActions_runningActionsCount = obj38479_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38479_droppedInsideTargetActions_runningActionsCount = window.obj38479_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38479_droppedInsideTargetActions_runningActionsCount = window.obj38479_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj38479_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj38413 
hide_38525();
function hide_38525() {
	var selector = "#obj38413";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38479_droppedInsideTargetActions_runningActionsCount = obj38479_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38479_droppedInsideTargetActions_runningActionsCount = window.obj38479_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38525(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38479_droppedInsideTargetActions_runningActionsCount = window.obj38479_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38479_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj38405 
playAudio_38527();
function playAudio_38527() {
	window.obj38479_droppedInsideTargetActions_runningActionsCount = obj38479_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj38405")[0];
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
		    window.obj38479_droppedInsideTargetActions_runningActionsCount = window.obj38479_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38479_droppedInsideTargetActions_runningActionsCount = window.obj38479_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_actionGroup4();
}
	}
}









};
obj38479_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90457();
function switchText_90457() {
	window.obj38479_droppedInsideTargetActions_runningActionsCount = obj38479_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38479_droppedInsideTargetActions_runningActionsCount = window.obj38479_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38479_droppedInsideTargetActions_runningActionsCount = window.obj38479_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38479_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38479_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38479_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38479_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj38479_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38479_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38479").trigger("obj38479_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38479) {
				console.warn("de-queueing event obj38479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38479_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj38481_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_onTouchDown_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj38481");
//	action: dragDrop
//	target: obj38481 
dragDrop_38498();
function dragDrop_38498() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj38481_onTouchDown_runningActionsCount = obj38481_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj38481');
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
	  	containerNode = $('#obj38423');
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
    	window.obj38481_onTouchDown_runningActionsCount = window.obj38481_onTouchDown_runningActionsCount - 1;
if (window.obj38481_onTouchDown_runningActionsCount < 0) {
	window.obj38481_onTouchDown_runningActionsCount = 0;
} else if (window.obj38481_onTouchDown_runningActionsCount == 0) {
	obj38481_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj38421","#obj38467","#obj38465","#obj38471","#obj38463","#obj38469");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_38498 = false;
    	var dropped_id_38498;
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
					dropped_38498 = true;
					dropped_id_38498 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_38498) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj38481").trigger('SCActionDragDrop38498_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj38481_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38481_onTouchDown_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj38481 
move_92577();
function move_92577() {
	window.obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_runningActionsCount = obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj38481");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 96;
	var moveY = 619;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_runningActionsCount = window.obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj38481_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38804();
function runjs_38804() {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = obj38481_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38481").css("border-color", "#C00000"); $("#obj38481").css("border-width", "2px"); $("#obj38481").css("border-style", "solid"); $("#obj38481").css("border-radius", "10px"); $("#obj38481").css("-webkit-border-radius", "10px"); $("#obj38481").css("-moz-border-radius", "10px"); $("#obj38481_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38481_droppedInsideTargetActions_6_runningActionsCount = window.obj38481_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj38481_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38475 
hide_38805();
function hide_38805() {
	var selector = "#obj38475";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = obj38481_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38481_droppedInsideTargetActions_6_runningActionsCount = window.obj38481_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_6_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38805(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38481_droppedInsideTargetActions_6_runningActionsCount = window.obj38481_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_6_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38481_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38806();
function switchText_38806() {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = obj38481_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38481_droppedInsideTargetActions_6_runningActionsCount = window.obj38481_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_6_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38481_droppedInsideTargetActions_6_runningActionsCount = window.obj38481_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
	}
}






};
obj38481_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38481 
move_38807();
function move_38807() {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = obj38481_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj38481");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 96;
	var moveY = 619;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38481_droppedInsideTargetActions_6_runningActionsCount = window.obj38481_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	});
}



















};
obj38481_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38808();
function runjs_38808() {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = obj38481_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38481").css("border-color", "rgba(0,0,0,0)"); $("#obj38481").css("border-width", "1px"); $("#obj38481").css("border-style", "solid"); $("#obj38481").css("border-radius", "10px"); $("#obj38481").css("-webkit-border-radius", "10px"); $("#obj38481").css("-moz-border-radius", "10px"); $("#obj38481_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38481_droppedInsideTargetActions_6_runningActionsCount = window.obj38481_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_6_actionGroup5();
}
	}, 1);
}







};
obj38481_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38475
(function(){
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = obj38481_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj38475";
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
					window.obj38481_droppedInsideTargetActions_6_runningActionsCount = window.obj38481_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj38481_droppedInsideTargetActions_6_runningActionsCount = window.obj38481_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38481_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38810();
function runjs_38810() {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = obj38481_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38481").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38481_droppedInsideTargetActions_6_runningActionsCount = window.obj38481_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj38481_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38811();
function runjs_38811() {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = obj38481_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38481").css("border-color", "rgba(0,0,0,0)"); $("#obj38481").css("border-width", "0px"); $("#obj38481").css("border-style", "solid"); $("#obj38481").css("border-radius", "10px"); $("#obj38481").css("-webkit-border-radius", "10px"); $("#obj38481").css("-moz-border-radius", "10px"); $("#obj38481_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38481_droppedInsideTargetActions_6_runningActionsCount = window.obj38481_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj38481_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38812();
function playAudio_38812() {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = obj38481_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38481_droppedInsideTargetActions_6_runningActionsCount = window.obj38481_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_6_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38481_droppedInsideTargetActions_6_runningActionsCount = window.obj38481_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_6_actionGroup9();
}
	}
}









};
obj38481_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38813();
function switchText_38813() {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = obj38481_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38481_droppedInsideTargetActions_6_runningActionsCount = window.obj38481_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_6_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38481_droppedInsideTargetActions_6_runningActionsCount = window.obj38481_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_6_actionGroup10();
}
		}, 1);
	}
}






};
obj38481_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	





















};
obj38481_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38760();
function runjs_38760() {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = obj38481_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38481").css("border-color", "#C00000"); $("#obj38481").css("border-width", "2px"); $("#obj38481").css("border-style", "solid"); $("#obj38481").css("border-radius", "10px"); $("#obj38481").css("-webkit-border-radius", "10px"); $("#obj38481").css("-moz-border-radius", "10px"); $("#obj38481_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38481_droppedInsideTargetActions_5_runningActionsCount = window.obj38481_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj38481_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38473 
hide_38761();
function hide_38761() {
	var selector = "#obj38473";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = obj38481_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38481_droppedInsideTargetActions_5_runningActionsCount = window.obj38481_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_5_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38761(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38481_droppedInsideTargetActions_5_runningActionsCount = window.obj38481_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_5_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38481_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38762();
function switchText_38762() {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = obj38481_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38481_droppedInsideTargetActions_5_runningActionsCount = window.obj38481_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_5_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38481_droppedInsideTargetActions_5_runningActionsCount = window.obj38481_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
	}
}






};
obj38481_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38481 
move_38763();
function move_38763() {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = obj38481_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj38481");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 96;
	var moveY = 619;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38481_droppedInsideTargetActions_5_runningActionsCount = window.obj38481_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	});
}



















};
obj38481_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38764();
function runjs_38764() {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = obj38481_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38481").css("border-color", "rgba(0,0,0,0)"); $("#obj38481").css("border-width", "1px"); $("#obj38481").css("border-style", "solid"); $("#obj38481").css("border-radius", "10px"); $("#obj38481").css("-webkit-border-radius", "10px"); $("#obj38481").css("-moz-border-radius", "10px"); $("#obj38481_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38481_droppedInsideTargetActions_5_runningActionsCount = window.obj38481_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_5_actionGroup5();
}
	}, 1);
}







};
obj38481_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38473
(function(){
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = obj38481_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj38473";
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
					window.obj38481_droppedInsideTargetActions_5_runningActionsCount = window.obj38481_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj38481_droppedInsideTargetActions_5_runningActionsCount = window.obj38481_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38481_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38766();
function runjs_38766() {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = obj38481_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38481").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38481_droppedInsideTargetActions_5_runningActionsCount = window.obj38481_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj38481_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38767();
function runjs_38767() {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = obj38481_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38481").css("border-color", "rgba(0,0,0,0)"); $("#obj38481").css("border-width", "0px"); $("#obj38481").css("border-style", "solid"); $("#obj38481").css("border-radius", "10px"); $("#obj38481").css("-webkit-border-radius", "10px"); $("#obj38481").css("-moz-border-radius", "10px"); $("#obj38481_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38481_droppedInsideTargetActions_5_runningActionsCount = window.obj38481_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj38481_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38768();
function playAudio_38768() {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = obj38481_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38481_droppedInsideTargetActions_5_runningActionsCount = window.obj38481_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_5_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38481_droppedInsideTargetActions_5_runningActionsCount = window.obj38481_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_5_actionGroup9();
}
	}
}









};
obj38481_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38769();
function switchText_38769() {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = obj38481_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38481_droppedInsideTargetActions_5_runningActionsCount = window.obj38481_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_5_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38481_droppedInsideTargetActions_5_runningActionsCount = window.obj38481_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_5_actionGroup10();
}
		}, 1);
	}
}






};
obj38481_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	





















};
obj38481_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38738();
function runjs_38738() {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = obj38481_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38481").css("border-color", "#C00000"); $("#obj38481").css("border-width", "2px"); $("#obj38481").css("border-style", "solid"); $("#obj38481").css("border-radius", "10px"); $("#obj38481").css("-webkit-border-radius", "10px"); $("#obj38481").css("-moz-border-radius", "10px"); $("#obj38481_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38481_droppedInsideTargetActions_4_runningActionsCount = window.obj38481_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj38481_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38473 
hide_38739();
function hide_38739() {
	var selector = "#obj38473";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = obj38481_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38481_droppedInsideTargetActions_4_runningActionsCount = window.obj38481_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_4_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38739(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38481_droppedInsideTargetActions_4_runningActionsCount = window.obj38481_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_4_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38481_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38740();
function switchText_38740() {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = obj38481_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38481_droppedInsideTargetActions_4_runningActionsCount = window.obj38481_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_4_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38481_droppedInsideTargetActions_4_runningActionsCount = window.obj38481_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
	}
}






};
obj38481_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38481 
move_38741();
function move_38741() {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = obj38481_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj38481");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 96;
	var moveY = 619;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38481_droppedInsideTargetActions_4_runningActionsCount = window.obj38481_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	});
}



















};
obj38481_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38742();
function runjs_38742() {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = obj38481_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38481").css("border-color", "rgba(0,0,0,0)"); $("#obj38481").css("border-width", "1px"); $("#obj38481").css("border-style", "solid"); $("#obj38481").css("border-radius", "10px"); $("#obj38481").css("-webkit-border-radius", "10px"); $("#obj38481").css("-moz-border-radius", "10px"); $("#obj38481_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38481_droppedInsideTargetActions_4_runningActionsCount = window.obj38481_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj38481_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38473
(function(){
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = obj38481_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj38473";
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
					window.obj38481_droppedInsideTargetActions_4_runningActionsCount = window.obj38481_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj38481_droppedInsideTargetActions_4_runningActionsCount = window.obj38481_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38481_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38744();
function runjs_38744() {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = obj38481_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38481").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38481_droppedInsideTargetActions_4_runningActionsCount = window.obj38481_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj38481_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38745();
function runjs_38745() {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = obj38481_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38481").css("border-color", "rgba(0,0,0,0)"); $("#obj38481").css("border-width", "0px"); $("#obj38481").css("border-style", "solid"); $("#obj38481").css("border-radius", "10px"); $("#obj38481").css("-webkit-border-radius", "10px"); $("#obj38481").css("-moz-border-radius", "10px"); $("#obj38481_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38481_droppedInsideTargetActions_4_runningActionsCount = window.obj38481_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj38481_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38746();
function playAudio_38746() {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = obj38481_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38481_droppedInsideTargetActions_4_runningActionsCount = window.obj38481_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_4_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38481_droppedInsideTargetActions_4_runningActionsCount = window.obj38481_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_4_actionGroup9();
}
	}
}









};
obj38481_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38747();
function switchText_38747() {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = obj38481_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38481_droppedInsideTargetActions_4_runningActionsCount = window.obj38481_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_4_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38481_droppedInsideTargetActions_4_runningActionsCount = window.obj38481_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_4_actionGroup10();
}
		}, 1);
	}
}






};
obj38481_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	





















};
obj38481_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38650();
function runjs_38650() {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = obj38481_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38481").css("border-color", "#C00000"); $("#obj38481").css("border-width", "2px"); $("#obj38481").css("border-style", "solid"); $("#obj38481").css("border-radius", "10px"); $("#obj38481").css("-webkit-border-radius", "10px"); $("#obj38481").css("-moz-border-radius", "10px"); $("#obj38481_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38481_droppedInsideTargetActions_3_runningActionsCount = window.obj38481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj38481_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38411 
hide_38651();
function hide_38651() {
	var selector = "#obj38411";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = obj38481_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38481_droppedInsideTargetActions_3_runningActionsCount = window.obj38481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38651(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38481_droppedInsideTargetActions_3_runningActionsCount = window.obj38481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_3_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38481_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38652();
function switchText_38652() {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = obj38481_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38481_droppedInsideTargetActions_3_runningActionsCount = window.obj38481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38481_droppedInsideTargetActions_3_runningActionsCount = window.obj38481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj38481_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38481 
move_38653();
function move_38653() {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = obj38481_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj38481");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 96;
	var moveY = 619;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38481_droppedInsideTargetActions_3_runningActionsCount = window.obj38481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj38481_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38654();
function runjs_38654() {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = obj38481_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38481").css("border-color", "rgba(0,0,0,0)"); $("#obj38481").css("border-width", "1px"); $("#obj38481").css("border-style", "solid"); $("#obj38481").css("border-radius", "10px"); $("#obj38481").css("-webkit-border-radius", "10px"); $("#obj38481").css("-moz-border-radius", "10px"); $("#obj38481_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38481_droppedInsideTargetActions_3_runningActionsCount = window.obj38481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj38481_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38411
(function(){
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = obj38481_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj38411";
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
					window.obj38481_droppedInsideTargetActions_3_runningActionsCount = window.obj38481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_3_actionGroup6();
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
				window.obj38481_droppedInsideTargetActions_3_runningActionsCount = window.obj38481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_3_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38481_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38656();
function runjs_38656() {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = obj38481_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38481").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38481_droppedInsideTargetActions_3_runningActionsCount = window.obj38481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj38481_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38657();
function runjs_38657() {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = obj38481_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38481").css("border-color", "rgba(0,0,0,0)"); $("#obj38481").css("border-width", "0px"); $("#obj38481").css("border-style", "solid"); $("#obj38481").css("border-radius", "10px"); $("#obj38481").css("-webkit-border-radius", "10px"); $("#obj38481").css("-moz-border-radius", "10px"); $("#obj38481_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38481_droppedInsideTargetActions_3_runningActionsCount = window.obj38481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj38481_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38658();
function playAudio_38658() {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = obj38481_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38481_droppedInsideTargetActions_3_runningActionsCount = window.obj38481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38481_droppedInsideTargetActions_3_runningActionsCount = window.obj38481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj38481_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38659();
function switchText_38659() {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = obj38481_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38481_droppedInsideTargetActions_3_runningActionsCount = window.obj38481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_3_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38481_droppedInsideTargetActions_3_runningActionsCount = window.obj38481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_3_actionGroup10();
}
		}, 1);
	}
}






};
obj38481_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	





















};
obj38481_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38505();
function runjs_38505() {
	window.obj38481_droppedInsideTargetActions_2_runningActionsCount = obj38481_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38481").css("border-color", "#058E3F"); $("#obj38481").css("border-width", "3px"); $("#obj38481").css("border-style", "solid"); $("#obj38481").css("border-radius", "10px"); $("#obj38481").css("-webkit-border-radius", "10px"); $("#obj38481").css("-moz-border-radius", "10px"); $("#obj38481_img").css("top", "-3px").css("left", "-3px");
	
	setTimeout(function() {
		window.obj38481_droppedInsideTargetActions_2_runningActionsCount = window.obj38481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj38481_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_38507();
function switchText_38507() {
	window.obj38481_droppedInsideTargetActions_2_runningActionsCount = obj38481_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38481_droppedInsideTargetActions_2_runningActionsCount = window.obj38481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38481_droppedInsideTargetActions_2_runningActionsCount = window.obj38481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj38481_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj38477 
hide_38506();
function hide_38506() {
	var selector = "#obj38477";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38481_droppedInsideTargetActions_2_runningActionsCount = obj38481_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38481_droppedInsideTargetActions_2_runningActionsCount = window.obj38481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38506(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38481_droppedInsideTargetActions_2_runningActionsCount = window.obj38481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38481_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj38405 
playAudio_38508();
function playAudio_38508() {
	window.obj38481_droppedInsideTargetActions_2_runningActionsCount = obj38481_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj38405")[0];
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
		    window.obj38481_droppedInsideTargetActions_2_runningActionsCount = window.obj38481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_2_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38481_droppedInsideTargetActions_2_runningActionsCount = window.obj38481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_2_actionGroup4();
}
	}
}









};
obj38481_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90460();
function switchText_90460() {
	window.obj38481_droppedInsideTargetActions_2_runningActionsCount = obj38481_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38481_droppedInsideTargetActions_2_runningActionsCount = window.obj38481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38481_droppedInsideTargetActions_2_runningActionsCount = window.obj38481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj38481_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	





















};
obj38481_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38500();
function runjs_38500() {
	window.obj38481_droppedInsideTargetActions_runningActionsCount = obj38481_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38481").css("border-color", "#058E3F"); $("#obj38481").css("border-width", "3px"); $("#obj38481").css("border-style", "solid"); $("#obj38481").css("border-radius", "10px"); $("#obj38481").css("-webkit-border-radius", "10px"); $("#obj38481").css("-moz-border-radius", "10px"); $("#obj38481_img").css("top", "-3px").css("left", "-3px");
	
	setTimeout(function() {
		window.obj38481_droppedInsideTargetActions_runningActionsCount = window.obj38481_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj38481_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_38502();
function switchText_38502() {
	window.obj38481_droppedInsideTargetActions_runningActionsCount = obj38481_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38481_droppedInsideTargetActions_runningActionsCount = window.obj38481_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38481_droppedInsideTargetActions_runningActionsCount = window.obj38481_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj38481_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj38415 
hide_38501();
function hide_38501() {
	var selector = "#obj38415";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38481_droppedInsideTargetActions_runningActionsCount = obj38481_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38481_droppedInsideTargetActions_runningActionsCount = window.obj38481_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38501(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38481_droppedInsideTargetActions_runningActionsCount = window.obj38481_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38481_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj38405 
playAudio_38503();
function playAudio_38503() {
	window.obj38481_droppedInsideTargetActions_runningActionsCount = obj38481_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj38405")[0];
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
		    window.obj38481_droppedInsideTargetActions_runningActionsCount = window.obj38481_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38481_droppedInsideTargetActions_runningActionsCount = window.obj38481_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_actionGroup4();
}
	}
}









};
obj38481_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90459();
function switchText_90459() {
	window.obj38481_droppedInsideTargetActions_runningActionsCount = obj38481_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38481_droppedInsideTargetActions_runningActionsCount = window.obj38481_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38481_droppedInsideTargetActions_runningActionsCount = window.obj38481_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38481_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38481_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38481_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38481_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj38481_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38481_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38481").trigger("obj38481_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38481) {
				console.warn("de-queueing event obj38481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38481_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj38483_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_onTouchDown_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj38483");
//	action: dragDrop
//	target: obj38483 
dragDrop_38534();
function dragDrop_38534() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj38483_onTouchDown_runningActionsCount = obj38483_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj38483');
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
	  	containerNode = $('#obj38423');
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
    	window.obj38483_onTouchDown_runningActionsCount = window.obj38483_onTouchDown_runningActionsCount - 1;
if (window.obj38483_onTouchDown_runningActionsCount < 0) {
	window.obj38483_onTouchDown_runningActionsCount = 0;
} else if (window.obj38483_onTouchDown_runningActionsCount == 0) {
	obj38483_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj38463","#obj38469","#obj38421","#obj38465","#obj38467","#obj38471");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_38534 = false;
    	var dropped_id_38534;
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
					dropped_38534 = true;
					dropped_id_38534 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_38534) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj38483").trigger('SCActionDragDrop38534_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj38483_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38483_onTouchDown_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj38483 
move_92573();
function move_92573() {
	window.obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_runningActionsCount = obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj38483");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 241;
	var moveY = 518;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_runningActionsCount = window.obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj38483_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38716();
function runjs_38716() {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = obj38483_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38483").css("border-color", "#C00000"); $("#obj38483").css("border-width", "2px"); $("#obj38483").css("border-style", "solid"); $("#obj38483").css("border-radius", "10px"); $("#obj38483").css("-webkit-border-radius", "10px"); $("#obj38483").css("-moz-border-radius", "10px"); $("#obj38483_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38483_droppedInsideTargetActions_6_runningActionsCount = window.obj38483_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj38483_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38473 
hide_38717();
function hide_38717() {
	var selector = "#obj38473";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = obj38483_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38483_droppedInsideTargetActions_6_runningActionsCount = window.obj38483_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_6_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38717(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38483_droppedInsideTargetActions_6_runningActionsCount = window.obj38483_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_6_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38483_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38718();
function switchText_38718() {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = obj38483_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38483_droppedInsideTargetActions_6_runningActionsCount = window.obj38483_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_6_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38483_droppedInsideTargetActions_6_runningActionsCount = window.obj38483_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
	}
}






};
obj38483_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38483 
move_38719();
function move_38719() {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = obj38483_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj38483");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 241;
	var moveY = 518;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38483_droppedInsideTargetActions_6_runningActionsCount = window.obj38483_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	});
}



















};
obj38483_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38720();
function runjs_38720() {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = obj38483_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38483").css("border-color", "rgba(0,0,0,0)"); $("#obj38483").css("border-width", "1px"); $("#obj38483").css("border-style", "solid"); $("#obj38483").css("border-radius", "10px"); $("#obj38483").css("-webkit-border-radius", "10px"); $("#obj38483").css("-moz-border-radius", "10px"); $("#obj38483_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38483_droppedInsideTargetActions_6_runningActionsCount = window.obj38483_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_6_actionGroup5();
}
	}, 1);
}







};
obj38483_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38473
(function(){
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = obj38483_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj38473";
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
					window.obj38483_droppedInsideTargetActions_6_runningActionsCount = window.obj38483_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj38483_droppedInsideTargetActions_6_runningActionsCount = window.obj38483_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38483_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38722();
function runjs_38722() {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = obj38483_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38483").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38483_droppedInsideTargetActions_6_runningActionsCount = window.obj38483_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj38483_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38723();
function runjs_38723() {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = obj38483_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38483").css("border-color", "rgba(0,0,0,0)"); $("#obj38483").css("border-width", "0px"); $("#obj38483").css("border-style", "solid"); $("#obj38483").css("border-radius", "10px"); $("#obj38483").css("-webkit-border-radius", "10px"); $("#obj38483").css("-moz-border-radius", "10px"); $("#obj38483_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38483_droppedInsideTargetActions_6_runningActionsCount = window.obj38483_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj38483_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38724();
function playAudio_38724() {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = obj38483_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38483_droppedInsideTargetActions_6_runningActionsCount = window.obj38483_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_6_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38483_droppedInsideTargetActions_6_runningActionsCount = window.obj38483_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_6_actionGroup9();
}
	}
}









};
obj38483_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38725();
function switchText_38725() {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = obj38483_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38483_droppedInsideTargetActions_6_runningActionsCount = window.obj38483_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_6_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38483_droppedInsideTargetActions_6_runningActionsCount = window.obj38483_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_6_actionGroup10();
}
		}, 1);
	}
}






};
obj38483_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	





















};
obj38483_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38672();
function runjs_38672() {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = obj38483_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38483").css("border-color", "#C00000"); $("#obj38483").css("border-width", "2px"); $("#obj38483").css("border-style", "solid"); $("#obj38483").css("border-radius", "10px"); $("#obj38483").css("-webkit-border-radius", "10px"); $("#obj38483").css("-moz-border-radius", "10px"); $("#obj38483_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38483_droppedInsideTargetActions_5_runningActionsCount = window.obj38483_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj38483_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38477 
hide_38673();
function hide_38673() {
	var selector = "#obj38477";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = obj38483_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38483_droppedInsideTargetActions_5_runningActionsCount = window.obj38483_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_5_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38673(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38483_droppedInsideTargetActions_5_runningActionsCount = window.obj38483_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_5_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38483_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38674();
function switchText_38674() {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = obj38483_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38483_droppedInsideTargetActions_5_runningActionsCount = window.obj38483_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_5_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38483_droppedInsideTargetActions_5_runningActionsCount = window.obj38483_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
	}
}






};
obj38483_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38483 
move_38675();
function move_38675() {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = obj38483_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj38483");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 241;
	var moveY = 518;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38483_droppedInsideTargetActions_5_runningActionsCount = window.obj38483_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	});
}



















};
obj38483_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38676();
function runjs_38676() {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = obj38483_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38483").css("border-color", "rgba(0,0,0,0)"); $("#obj38483").css("border-width", "1px"); $("#obj38483").css("border-style", "solid"); $("#obj38483").css("border-radius", "10px"); $("#obj38483").css("-webkit-border-radius", "10px"); $("#obj38483").css("-moz-border-radius", "10px"); $("#obj38483_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38483_droppedInsideTargetActions_5_runningActionsCount = window.obj38483_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_5_actionGroup5();
}
	}, 1);
}







};
obj38483_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38477
(function(){
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = obj38483_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj38477";
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
					window.obj38483_droppedInsideTargetActions_5_runningActionsCount = window.obj38483_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj38483_droppedInsideTargetActions_5_runningActionsCount = window.obj38483_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38483_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38678();
function runjs_38678() {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = obj38483_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38483").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38483_droppedInsideTargetActions_5_runningActionsCount = window.obj38483_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj38483_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38679();
function runjs_38679() {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = obj38483_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38483").css("border-color", "rgba(0,0,0,0)"); $("#obj38483").css("border-width", "0px"); $("#obj38483").css("border-style", "solid"); $("#obj38483").css("border-radius", "10px"); $("#obj38483").css("-webkit-border-radius", "10px"); $("#obj38483").css("-moz-border-radius", "10px"); $("#obj38483_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38483_droppedInsideTargetActions_5_runningActionsCount = window.obj38483_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj38483_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38680();
function playAudio_38680() {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = obj38483_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38483_droppedInsideTargetActions_5_runningActionsCount = window.obj38483_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_5_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38483_droppedInsideTargetActions_5_runningActionsCount = window.obj38483_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_5_actionGroup9();
}
	}
}









};
obj38483_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38681();
function switchText_38681() {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = obj38483_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38483_droppedInsideTargetActions_5_runningActionsCount = window.obj38483_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_5_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38483_droppedInsideTargetActions_5_runningActionsCount = window.obj38483_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_5_actionGroup10();
}
		}, 1);
	}
}






};
obj38483_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	





















};
obj38483_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38628();
function runjs_38628() {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = obj38483_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38483").css("border-color", "#C00000"); $("#obj38483").css("border-width", "2px"); $("#obj38483").css("border-style", "solid"); $("#obj38483").css("border-radius", "10px"); $("#obj38483").css("-webkit-border-radius", "10px"); $("#obj38483").css("-moz-border-radius", "10px"); $("#obj38483_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38483_droppedInsideTargetActions_4_runningActionsCount = window.obj38483_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj38483_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38411 
hide_38629();
function hide_38629() {
	var selector = "#obj38411";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = obj38483_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38483_droppedInsideTargetActions_4_runningActionsCount = window.obj38483_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_4_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38629(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38483_droppedInsideTargetActions_4_runningActionsCount = window.obj38483_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_4_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38483_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38630();
function switchText_38630() {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = obj38483_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38483_droppedInsideTargetActions_4_runningActionsCount = window.obj38483_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_4_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38483_droppedInsideTargetActions_4_runningActionsCount = window.obj38483_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
	}
}






};
obj38483_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38483 
move_38631();
function move_38631() {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = obj38483_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj38483");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 241;
	var moveY = 518;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38483_droppedInsideTargetActions_4_runningActionsCount = window.obj38483_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	});
}



















};
obj38483_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38632();
function runjs_38632() {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = obj38483_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38483").css("border-color", "rgba(0,0,0,0)"); $("#obj38483").css("border-width", "1px"); $("#obj38483").css("border-style", "solid"); $("#obj38483").css("border-radius", "10px"); $("#obj38483").css("-webkit-border-radius", "10px"); $("#obj38483").css("-moz-border-radius", "10px"); $("#obj38483_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38483_droppedInsideTargetActions_4_runningActionsCount = window.obj38483_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj38483_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38411
(function(){
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = obj38483_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj38411";
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
					window.obj38483_droppedInsideTargetActions_4_runningActionsCount = window.obj38483_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj38483_droppedInsideTargetActions_4_runningActionsCount = window.obj38483_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38483_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38634();
function runjs_38634() {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = obj38483_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38483").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38483_droppedInsideTargetActions_4_runningActionsCount = window.obj38483_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj38483_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38635();
function runjs_38635() {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = obj38483_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38483").css("border-color", "rgba(0,0,0,0)"); $("#obj38483").css("border-width", "0px"); $("#obj38483").css("border-style", "solid"); $("#obj38483").css("border-radius", "10px"); $("#obj38483").css("-webkit-border-radius", "10px"); $("#obj38483").css("-moz-border-radius", "10px"); $("#obj38483_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38483_droppedInsideTargetActions_4_runningActionsCount = window.obj38483_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj38483_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38636();
function playAudio_38636() {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = obj38483_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38483_droppedInsideTargetActions_4_runningActionsCount = window.obj38483_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_4_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38483_droppedInsideTargetActions_4_runningActionsCount = window.obj38483_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_4_actionGroup9();
}
	}
}









};
obj38483_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38637();
function switchText_38637() {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = obj38483_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38483_droppedInsideTargetActions_4_runningActionsCount = window.obj38483_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_4_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38483_droppedInsideTargetActions_4_runningActionsCount = window.obj38483_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_4_actionGroup10();
}
		}, 1);
	}
}






};
obj38483_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	





















};
obj38483_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38584();
function runjs_38584() {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = obj38483_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38483").css("border-color", "#C00000"); $("#obj38483").css("border-width", "2px"); $("#obj38483").css("border-style", "solid"); $("#obj38483").css("border-radius", "10px"); $("#obj38483").css("-webkit-border-radius", "10px"); $("#obj38483").css("-moz-border-radius", "10px"); $("#obj38483_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38483_droppedInsideTargetActions_3_runningActionsCount = window.obj38483_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj38483_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38415 
hide_38585();
function hide_38585() {
	var selector = "#obj38415";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = obj38483_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38483_droppedInsideTargetActions_3_runningActionsCount = window.obj38483_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38585(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38483_droppedInsideTargetActions_3_runningActionsCount = window.obj38483_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_3_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38483_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38586();
function switchText_38586() {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = obj38483_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38483_droppedInsideTargetActions_3_runningActionsCount = window.obj38483_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38483_droppedInsideTargetActions_3_runningActionsCount = window.obj38483_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj38483_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38483 
move_38587();
function move_38587() {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = obj38483_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj38483");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 241;
	var moveY = 518;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38483_droppedInsideTargetActions_3_runningActionsCount = window.obj38483_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj38483_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38588();
function runjs_38588() {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = obj38483_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38483").css("border-color", "rgba(0,0,0,0)"); $("#obj38483").css("border-width", "1px"); $("#obj38483").css("border-style", "solid"); $("#obj38483").css("border-radius", "10px"); $("#obj38483").css("-webkit-border-radius", "10px"); $("#obj38483").css("-moz-border-radius", "10px"); $("#obj38483_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38483_droppedInsideTargetActions_3_runningActionsCount = window.obj38483_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj38483_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38415
(function(){
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = obj38483_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj38415";
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
					window.obj38483_droppedInsideTargetActions_3_runningActionsCount = window.obj38483_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_3_actionGroup6();
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
				window.obj38483_droppedInsideTargetActions_3_runningActionsCount = window.obj38483_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_3_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38483_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38590();
function runjs_38590() {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = obj38483_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38483").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38483_droppedInsideTargetActions_3_runningActionsCount = window.obj38483_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj38483_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38591();
function runjs_38591() {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = obj38483_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38483").css("border-color", "rgba(0,0,0,0)"); $("#obj38483").css("border-width", "0px"); $("#obj38483").css("border-style", "solid"); $("#obj38483").css("border-radius", "10px"); $("#obj38483").css("-webkit-border-radius", "10px"); $("#obj38483").css("-moz-border-radius", "10px"); $("#obj38483_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38483_droppedInsideTargetActions_3_runningActionsCount = window.obj38483_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj38483_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38592();
function playAudio_38592() {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = obj38483_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38483_droppedInsideTargetActions_3_runningActionsCount = window.obj38483_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38483_droppedInsideTargetActions_3_runningActionsCount = window.obj38483_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj38483_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38593();
function switchText_38593() {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = obj38483_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38483_droppedInsideTargetActions_3_runningActionsCount = window.obj38483_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_3_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38483_droppedInsideTargetActions_3_runningActionsCount = window.obj38483_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_3_actionGroup10();
}
		}, 1);
	}
}






};
obj38483_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	





















};
obj38483_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38541();
function runjs_38541() {
	window.obj38483_droppedInsideTargetActions_2_runningActionsCount = obj38483_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38483").css("border-color", "#058E3F"); $("#obj38483").css("border-width", "3px"); $("#obj38483").css("border-style", "solid"); $("#obj38483").css("border-radius", "10px"); $("#obj38483").css("-webkit-border-radius", "10px"); $("#obj38483").css("-moz-border-radius", "10px"); $("#obj38483_img").css("top", "-3px").css("left", "-3px");
	
	setTimeout(function() {
		window.obj38483_droppedInsideTargetActions_2_runningActionsCount = window.obj38483_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj38483_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_38543();
function switchText_38543() {
	window.obj38483_droppedInsideTargetActions_2_runningActionsCount = obj38483_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38483_droppedInsideTargetActions_2_runningActionsCount = window.obj38483_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38483_droppedInsideTargetActions_2_runningActionsCount = window.obj38483_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj38483_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj38475 
hide_38542();
function hide_38542() {
	var selector = "#obj38475";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38483_droppedInsideTargetActions_2_runningActionsCount = obj38483_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38483_droppedInsideTargetActions_2_runningActionsCount = window.obj38483_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38542(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38483_droppedInsideTargetActions_2_runningActionsCount = window.obj38483_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38483_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj38405 
playAudio_38544();
function playAudio_38544() {
	window.obj38483_droppedInsideTargetActions_2_runningActionsCount = obj38483_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj38405")[0];
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
		    window.obj38483_droppedInsideTargetActions_2_runningActionsCount = window.obj38483_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_2_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38483_droppedInsideTargetActions_2_runningActionsCount = window.obj38483_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_2_actionGroup4();
}
	}
}









};
obj38483_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90462();
function switchText_90462() {
	window.obj38483_droppedInsideTargetActions_2_runningActionsCount = obj38483_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38483_droppedInsideTargetActions_2_runningActionsCount = window.obj38483_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38483_droppedInsideTargetActions_2_runningActionsCount = window.obj38483_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj38483_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	





















};
obj38483_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38536();
function runjs_38536() {
	window.obj38483_droppedInsideTargetActions_runningActionsCount = obj38483_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38483").css("border-color", "#058E3F"); $("#obj38483").css("border-width", "3px"); $("#obj38483").css("border-style", "solid"); $("#obj38483").css("border-radius", "10px"); $("#obj38483").css("-webkit-border-radius", "10px"); $("#obj38483").css("-moz-border-radius", "10px"); $("#obj38483_img").css("top", "-3px").css("left", "-3px");
	
	setTimeout(function() {
		window.obj38483_droppedInsideTargetActions_runningActionsCount = window.obj38483_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj38483_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_38538();
function switchText_38538() {
	window.obj38483_droppedInsideTargetActions_runningActionsCount = obj38483_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38483_droppedInsideTargetActions_runningActionsCount = window.obj38483_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38483_droppedInsideTargetActions_runningActionsCount = window.obj38483_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj38483_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj38413 
hide_38537();
function hide_38537() {
	var selector = "#obj38413";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38483_droppedInsideTargetActions_runningActionsCount = obj38483_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38483_droppedInsideTargetActions_runningActionsCount = window.obj38483_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38537(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38483_droppedInsideTargetActions_runningActionsCount = window.obj38483_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38483_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj38405 
playAudio_38539();
function playAudio_38539() {
	window.obj38483_droppedInsideTargetActions_runningActionsCount = obj38483_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj38405")[0];
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
		    window.obj38483_droppedInsideTargetActions_runningActionsCount = window.obj38483_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38483_droppedInsideTargetActions_runningActionsCount = window.obj38483_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_actionGroup4();
}
	}
}









};
obj38483_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90461();
function switchText_90461() {
	window.obj38483_droppedInsideTargetActions_runningActionsCount = obj38483_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38483_droppedInsideTargetActions_runningActionsCount = window.obj38483_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38483_droppedInsideTargetActions_runningActionsCount = window.obj38483_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38483_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38483_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38483_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38483_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj38483_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38483_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38483").trigger("obj38483_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38483) {
				console.warn("de-queueing event obj38483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38483_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj38485_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_onTouchDown_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj38485");
//	action: dragDrop
//	target: obj38485 
dragDrop_38546();
function dragDrop_38546() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj38485_onTouchDown_runningActionsCount = obj38485_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj38485');
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
	  	containerNode = $('#obj38423');
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
    	window.obj38485_onTouchDown_runningActionsCount = window.obj38485_onTouchDown_runningActionsCount - 1;
if (window.obj38485_onTouchDown_runningActionsCount < 0) {
	window.obj38485_onTouchDown_runningActionsCount = 0;
} else if (window.obj38485_onTouchDown_runningActionsCount == 0) {
	obj38485_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj38465","#obj38471","#obj38421","#obj38467","#obj38463","#obj38469");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_38546 = false;
    	var dropped_id_38546;
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
					dropped_38546 = true;
					dropped_id_38546 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_38546) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj38485").trigger('SCActionDragDrop38546_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj38485_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38485_onTouchDown_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj38485 
move_92579();
function move_92579() {
	window.obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_runningActionsCount = obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj38485");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 241;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_runningActionsCount = window.obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj38485_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38815();
function runjs_38815() {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = obj38485_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38485").css("border-color", "#C00000"); $("#obj38485").css("border-width", "2px"); $("#obj38485").css("border-style", "solid"); $("#obj38485").css("border-radius", "10px"); $("#obj38485").css("-webkit-border-radius", "10px"); $("#obj38485").css("-moz-border-radius", "10px"); $("#obj38485_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38485_droppedInsideTargetActions_6_runningActionsCount = window.obj38485_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj38485_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38475 
hide_38816();
function hide_38816() {
	var selector = "#obj38475";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = obj38485_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38485_droppedInsideTargetActions_6_runningActionsCount = window.obj38485_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_6_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38816(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38485_droppedInsideTargetActions_6_runningActionsCount = window.obj38485_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_6_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38485_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38817();
function switchText_38817() {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = obj38485_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38485_droppedInsideTargetActions_6_runningActionsCount = window.obj38485_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_6_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38485_droppedInsideTargetActions_6_runningActionsCount = window.obj38485_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
	}
}






};
obj38485_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38485 
move_38818();
function move_38818() {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = obj38485_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj38485");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 241;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38485_droppedInsideTargetActions_6_runningActionsCount = window.obj38485_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	});
}



















};
obj38485_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38819();
function runjs_38819() {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = obj38485_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38485").css("border-color", "rgba(0,0,0,0)"); $("#obj38485").css("border-width", "1px"); $("#obj38485").css("border-style", "solid"); $("#obj38485").css("border-radius", "10px"); $("#obj38485").css("-webkit-border-radius", "10px"); $("#obj38485").css("-moz-border-radius", "10px"); $("#obj38485_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38485_droppedInsideTargetActions_6_runningActionsCount = window.obj38485_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_6_actionGroup5();
}
	}, 1);
}







};
obj38485_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38475
(function(){
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = obj38485_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj38475";
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
					window.obj38485_droppedInsideTargetActions_6_runningActionsCount = window.obj38485_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj38485_droppedInsideTargetActions_6_runningActionsCount = window.obj38485_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38485_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38821();
function runjs_38821() {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = obj38485_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38485").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38485_droppedInsideTargetActions_6_runningActionsCount = window.obj38485_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj38485_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38822();
function runjs_38822() {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = obj38485_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38485").css("border-color", "rgba(0,0,0,0)"); $("#obj38485").css("border-width", "0px"); $("#obj38485").css("border-style", "solid"); $("#obj38485").css("border-radius", "10px"); $("#obj38485").css("-webkit-border-radius", "10px"); $("#obj38485").css("-moz-border-radius", "10px"); $("#obj38485_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38485_droppedInsideTargetActions_6_runningActionsCount = window.obj38485_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj38485_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38823();
function playAudio_38823() {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = obj38485_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38485_droppedInsideTargetActions_6_runningActionsCount = window.obj38485_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_6_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38485_droppedInsideTargetActions_6_runningActionsCount = window.obj38485_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_6_actionGroup9();
}
	}
}









};
obj38485_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38824();
function switchText_38824() {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = obj38485_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38485_droppedInsideTargetActions_6_runningActionsCount = window.obj38485_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_6_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38485_droppedInsideTargetActions_6_runningActionsCount = window.obj38485_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_6_actionGroup10();
}
		}, 1);
	}
}






};
obj38485_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	





















};
obj38485_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38771();
function runjs_38771() {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = obj38485_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38485").css("border-color", "#C00000"); $("#obj38485").css("border-width", "2px"); $("#obj38485").css("border-style", "solid"); $("#obj38485").css("border-radius", "10px"); $("#obj38485").css("-webkit-border-radius", "10px"); $("#obj38485").css("-moz-border-radius", "10px"); $("#obj38485_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38485_droppedInsideTargetActions_5_runningActionsCount = window.obj38485_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj38485_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38473 
hide_38772();
function hide_38772() {
	var selector = "#obj38473";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = obj38485_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38485_droppedInsideTargetActions_5_runningActionsCount = window.obj38485_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_5_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38772(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38485_droppedInsideTargetActions_5_runningActionsCount = window.obj38485_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_5_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38485_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38773();
function switchText_38773() {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = obj38485_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38485_droppedInsideTargetActions_5_runningActionsCount = window.obj38485_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_5_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38485_droppedInsideTargetActions_5_runningActionsCount = window.obj38485_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
	}
}






};
obj38485_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38485 
move_38774();
function move_38774() {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = obj38485_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj38485");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 241;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38485_droppedInsideTargetActions_5_runningActionsCount = window.obj38485_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	});
}



















};
obj38485_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38775();
function runjs_38775() {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = obj38485_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38485").css("border-color", "rgba(0,0,0,0)"); $("#obj38485").css("border-width", "1px"); $("#obj38485").css("border-style", "solid"); $("#obj38485").css("border-radius", "10px"); $("#obj38485").css("-webkit-border-radius", "10px"); $("#obj38485").css("-moz-border-radius", "10px"); $("#obj38485_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38485_droppedInsideTargetActions_5_runningActionsCount = window.obj38485_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_5_actionGroup5();
}
	}, 1);
}







};
obj38485_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38473
(function(){
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = obj38485_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj38473";
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
					window.obj38485_droppedInsideTargetActions_5_runningActionsCount = window.obj38485_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj38485_droppedInsideTargetActions_5_runningActionsCount = window.obj38485_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38485_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38777();
function runjs_38777() {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = obj38485_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38485").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38485_droppedInsideTargetActions_5_runningActionsCount = window.obj38485_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj38485_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38778();
function runjs_38778() {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = obj38485_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38485").css("border-color", "rgba(0,0,0,0)"); $("#obj38485").css("border-width", "0px"); $("#obj38485").css("border-style", "solid"); $("#obj38485").css("border-radius", "10px"); $("#obj38485").css("-webkit-border-radius", "10px"); $("#obj38485").css("-moz-border-radius", "10px"); $("#obj38485_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38485_droppedInsideTargetActions_5_runningActionsCount = window.obj38485_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj38485_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38779();
function playAudio_38779() {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = obj38485_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38485_droppedInsideTargetActions_5_runningActionsCount = window.obj38485_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_5_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38485_droppedInsideTargetActions_5_runningActionsCount = window.obj38485_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_5_actionGroup9();
}
	}
}









};
obj38485_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38780();
function switchText_38780() {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = obj38485_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38485_droppedInsideTargetActions_5_runningActionsCount = window.obj38485_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_5_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38485_droppedInsideTargetActions_5_runningActionsCount = window.obj38485_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_5_actionGroup10();
}
		}, 1);
	}
}






};
obj38485_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	





















};
obj38485_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38683();
function runjs_38683() {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = obj38485_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38485").css("border-color", "#C00000"); $("#obj38485").css("border-width", "2px"); $("#obj38485").css("border-style", "solid"); $("#obj38485").css("border-radius", "10px"); $("#obj38485").css("-webkit-border-radius", "10px"); $("#obj38485").css("-moz-border-radius", "10px"); $("#obj38485_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38485_droppedInsideTargetActions_4_runningActionsCount = window.obj38485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj38485_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38477 
hide_38684();
function hide_38684() {
	var selector = "#obj38477";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = obj38485_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38485_droppedInsideTargetActions_4_runningActionsCount = window.obj38485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_4_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38684(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38485_droppedInsideTargetActions_4_runningActionsCount = window.obj38485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_4_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38485_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38685();
function switchText_38685() {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = obj38485_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38485_droppedInsideTargetActions_4_runningActionsCount = window.obj38485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_4_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38485_droppedInsideTargetActions_4_runningActionsCount = window.obj38485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
	}
}






};
obj38485_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38485 
move_38686();
function move_38686() {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = obj38485_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj38485");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 241;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38485_droppedInsideTargetActions_4_runningActionsCount = window.obj38485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	});
}



















};
obj38485_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38687();
function runjs_38687() {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = obj38485_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38485").css("border-color", "rgba(0,0,0,0)"); $("#obj38485").css("border-width", "1px"); $("#obj38485").css("border-style", "solid"); $("#obj38485").css("border-radius", "10px"); $("#obj38485").css("-webkit-border-radius", "10px"); $("#obj38485").css("-moz-border-radius", "10px"); $("#obj38485_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38485_droppedInsideTargetActions_4_runningActionsCount = window.obj38485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj38485_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38477
(function(){
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = obj38485_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj38477";
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
					window.obj38485_droppedInsideTargetActions_4_runningActionsCount = window.obj38485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj38485_droppedInsideTargetActions_4_runningActionsCount = window.obj38485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38485_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38689();
function runjs_38689() {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = obj38485_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38485").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38485_droppedInsideTargetActions_4_runningActionsCount = window.obj38485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj38485_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38690();
function runjs_38690() {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = obj38485_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38485").css("border-color", "rgba(0,0,0,0)"); $("#obj38485").css("border-width", "0px"); $("#obj38485").css("border-style", "solid"); $("#obj38485").css("border-radius", "10px"); $("#obj38485").css("-webkit-border-radius", "10px"); $("#obj38485").css("-moz-border-radius", "10px"); $("#obj38485_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38485_droppedInsideTargetActions_4_runningActionsCount = window.obj38485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj38485_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38691();
function playAudio_38691() {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = obj38485_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38485_droppedInsideTargetActions_4_runningActionsCount = window.obj38485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_4_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38485_droppedInsideTargetActions_4_runningActionsCount = window.obj38485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_4_actionGroup9();
}
	}
}









};
obj38485_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38692();
function switchText_38692() {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = obj38485_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38485_droppedInsideTargetActions_4_runningActionsCount = window.obj38485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_4_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38485_droppedInsideTargetActions_4_runningActionsCount = window.obj38485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_4_actionGroup10();
}
		}, 1);
	}
}






};
obj38485_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	





















};
obj38485_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38595();
function runjs_38595() {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = obj38485_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38485").css("border-color", "#C00000"); $("#obj38485").css("border-width", "2px"); $("#obj38485").css("border-style", "solid"); $("#obj38485").css("border-radius", "10px"); $("#obj38485").css("-webkit-border-radius", "10px"); $("#obj38485").css("-moz-border-radius", "10px"); $("#obj38485_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38485_droppedInsideTargetActions_3_runningActionsCount = window.obj38485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj38485_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38415 
hide_38596();
function hide_38596() {
	var selector = "#obj38415";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = obj38485_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38485_droppedInsideTargetActions_3_runningActionsCount = window.obj38485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38596(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38485_droppedInsideTargetActions_3_runningActionsCount = window.obj38485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_3_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38485_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38597();
function switchText_38597() {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = obj38485_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38485_droppedInsideTargetActions_3_runningActionsCount = window.obj38485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38485_droppedInsideTargetActions_3_runningActionsCount = window.obj38485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj38485_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38485 
move_38598();
function move_38598() {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = obj38485_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj38485");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 241;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38485_droppedInsideTargetActions_3_runningActionsCount = window.obj38485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj38485_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38599();
function runjs_38599() {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = obj38485_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38485").css("border-color", "rgba(0,0,0,0)"); $("#obj38485").css("border-width", "1px"); $("#obj38485").css("border-style", "solid"); $("#obj38485").css("border-radius", "10px"); $("#obj38485").css("-webkit-border-radius", "10px"); $("#obj38485").css("-moz-border-radius", "10px"); $("#obj38485_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38485_droppedInsideTargetActions_3_runningActionsCount = window.obj38485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj38485_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38415
(function(){
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = obj38485_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj38415";
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
					window.obj38485_droppedInsideTargetActions_3_runningActionsCount = window.obj38485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_3_actionGroup6();
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
				window.obj38485_droppedInsideTargetActions_3_runningActionsCount = window.obj38485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_3_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38485_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38601();
function runjs_38601() {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = obj38485_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38485").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38485_droppedInsideTargetActions_3_runningActionsCount = window.obj38485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj38485_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38602();
function runjs_38602() {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = obj38485_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38485").css("border-color", "rgba(0,0,0,0)"); $("#obj38485").css("border-width", "0px"); $("#obj38485").css("border-style", "solid"); $("#obj38485").css("border-radius", "10px"); $("#obj38485").css("-webkit-border-radius", "10px"); $("#obj38485").css("-moz-border-radius", "10px"); $("#obj38485_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38485_droppedInsideTargetActions_3_runningActionsCount = window.obj38485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj38485_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38603();
function playAudio_38603() {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = obj38485_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38485_droppedInsideTargetActions_3_runningActionsCount = window.obj38485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38485_droppedInsideTargetActions_3_runningActionsCount = window.obj38485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj38485_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38604();
function switchText_38604() {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = obj38485_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38485_droppedInsideTargetActions_3_runningActionsCount = window.obj38485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_3_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38485_droppedInsideTargetActions_3_runningActionsCount = window.obj38485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_3_actionGroup10();
}
		}, 1);
	}
}






};
obj38485_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	





















};
obj38485_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38553();
function runjs_38553() {
	window.obj38485_droppedInsideTargetActions_2_runningActionsCount = obj38485_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38485").css("border-color", "#058E3F"); $("#obj38485").css("border-width", "3px"); $("#obj38485").css("border-style", "solid"); $("#obj38485").css("border-radius", "10px"); $("#obj38485").css("-webkit-border-radius", "10px"); $("#obj38485").css("-moz-border-radius", "10px"); $("#obj38485_img").css("top", "-3px").css("left", "-3px");
	
	setTimeout(function() {
		window.obj38485_droppedInsideTargetActions_2_runningActionsCount = window.obj38485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj38485_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_38555();
function switchText_38555() {
	window.obj38485_droppedInsideTargetActions_2_runningActionsCount = obj38485_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38485_droppedInsideTargetActions_2_runningActionsCount = window.obj38485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38485_droppedInsideTargetActions_2_runningActionsCount = window.obj38485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj38485_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj38473 
hide_38554();
function hide_38554() {
	var selector = "#obj38473";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38485_droppedInsideTargetActions_2_runningActionsCount = obj38485_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38485_droppedInsideTargetActions_2_runningActionsCount = window.obj38485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38554(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38485_droppedInsideTargetActions_2_runningActionsCount = window.obj38485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38485_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj38405 
playAudio_38556();
function playAudio_38556() {
	window.obj38485_droppedInsideTargetActions_2_runningActionsCount = obj38485_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj38405")[0];
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
		    window.obj38485_droppedInsideTargetActions_2_runningActionsCount = window.obj38485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_2_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38485_droppedInsideTargetActions_2_runningActionsCount = window.obj38485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_2_actionGroup4();
}
	}
}









};
obj38485_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90464();
function switchText_90464() {
	window.obj38485_droppedInsideTargetActions_2_runningActionsCount = obj38485_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38485_droppedInsideTargetActions_2_runningActionsCount = window.obj38485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38485_droppedInsideTargetActions_2_runningActionsCount = window.obj38485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj38485_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	





















};
obj38485_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38548();
function runjs_38548() {
	window.obj38485_droppedInsideTargetActions_runningActionsCount = obj38485_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38485").css("border-color", "#058E3F"); $("#obj38485").css("border-width", "3px"); $("#obj38485").css("border-style", "solid"); $("#obj38485").css("border-radius", "10px"); $("#obj38485").css("-webkit-border-radius", "10px"); $("#obj38485").css("-moz-border-radius", "10px"); $("#obj38485_img").css("top", "-3px").css("left", "-3px");
	
	setTimeout(function() {
		window.obj38485_droppedInsideTargetActions_runningActionsCount = window.obj38485_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj38485_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_38550();
function switchText_38550() {
	window.obj38485_droppedInsideTargetActions_runningActionsCount = obj38485_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38485_droppedInsideTargetActions_runningActionsCount = window.obj38485_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38485_droppedInsideTargetActions_runningActionsCount = window.obj38485_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj38485_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj38411 
hide_38549();
function hide_38549() {
	var selector = "#obj38411";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38485_droppedInsideTargetActions_runningActionsCount = obj38485_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38485_droppedInsideTargetActions_runningActionsCount = window.obj38485_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38549(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38485_droppedInsideTargetActions_runningActionsCount = window.obj38485_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38485_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj38405 
playAudio_38551();
function playAudio_38551() {
	window.obj38485_droppedInsideTargetActions_runningActionsCount = obj38485_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj38405")[0];
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
		    window.obj38485_droppedInsideTargetActions_runningActionsCount = window.obj38485_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38485_droppedInsideTargetActions_runningActionsCount = window.obj38485_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_actionGroup4();
}
	}
}









};
obj38485_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90463();
function switchText_90463() {
	window.obj38485_droppedInsideTargetActions_runningActionsCount = obj38485_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38485_droppedInsideTargetActions_runningActionsCount = window.obj38485_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38485_droppedInsideTargetActions_runningActionsCount = window.obj38485_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38485_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38485_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38485_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38485_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj38485_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38485_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38485").trigger("obj38485_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38485) {
				console.warn("de-queueing event obj38485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38485_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj38487_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_onTouchDown_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj38487");
//	action: dragDrop
//	target: obj38487 
dragDrop_38510();
function dragDrop_38510() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj38487_onTouchDown_runningActionsCount = obj38487_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj38487');
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
	  	containerNode = $('#obj38423');
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
    	window.obj38487_onTouchDown_runningActionsCount = window.obj38487_onTouchDown_runningActionsCount - 1;
if (window.obj38487_onTouchDown_runningActionsCount < 0) {
	window.obj38487_onTouchDown_runningActionsCount = 0;
} else if (window.obj38487_onTouchDown_runningActionsCount == 0) {
	obj38487_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj38421","#obj38467","#obj38465","#obj38471","#obj38463","#obj38469");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_38510 = false;
    	var dropped_id_38510;
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
					dropped_38510 = true;
					dropped_id_38510 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_38510) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj38487").trigger('SCActionDragDrop38510_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj38487_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38487_onTouchDown_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj38487 
move_92575();
function move_92575() {
	window.obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_runningActionsCount = obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj38487");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 379;
	var moveY = 518;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_runningActionsCount = window.obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj38487_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38793();
function runjs_38793() {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = obj38487_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38487").css("border-color", "#C00000"); $("#obj38487").css("border-width", "2px"); $("#obj38487").css("border-style", "solid"); $("#obj38487").css("border-radius", "10px"); $("#obj38487").css("-webkit-border-radius", "10px"); $("#obj38487").css("-moz-border-radius", "10px"); $("#obj38487_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38487_droppedInsideTargetActions_6_runningActionsCount = window.obj38487_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj38487_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38475 
hide_38794();
function hide_38794() {
	var selector = "#obj38475";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = obj38487_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38487_droppedInsideTargetActions_6_runningActionsCount = window.obj38487_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_6_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38794(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38487_droppedInsideTargetActions_6_runningActionsCount = window.obj38487_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_6_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38487_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38795();
function switchText_38795() {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = obj38487_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38487_droppedInsideTargetActions_6_runningActionsCount = window.obj38487_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_6_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38487_droppedInsideTargetActions_6_runningActionsCount = window.obj38487_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
	}
}






};
obj38487_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38487 
move_38796();
function move_38796() {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = obj38487_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj38487");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 379;
	var moveY = 518;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38487_droppedInsideTargetActions_6_runningActionsCount = window.obj38487_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	});
}



















};
obj38487_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38797();
function runjs_38797() {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = obj38487_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38487").css("border-color", "rgba(0,0,0,0)"); $("#obj38487").css("border-width", "1px"); $("#obj38487").css("border-style", "solid"); $("#obj38487").css("border-radius", "10px"); $("#obj38487").css("-webkit-border-radius", "10px"); $("#obj38487").css("-moz-border-radius", "10px"); $("#obj38487_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38487_droppedInsideTargetActions_6_runningActionsCount = window.obj38487_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_6_actionGroup5();
}
	}, 1);
}







};
obj38487_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38475
(function(){
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = obj38487_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj38475";
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
					window.obj38487_droppedInsideTargetActions_6_runningActionsCount = window.obj38487_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj38487_droppedInsideTargetActions_6_runningActionsCount = window.obj38487_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38487_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38799();
function runjs_38799() {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = obj38487_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38487").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38487_droppedInsideTargetActions_6_runningActionsCount = window.obj38487_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj38487_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38800();
function runjs_38800() {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = obj38487_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38487").css("border-color", "rgba(0,0,0,0)"); $("#obj38487").css("border-width", "0px"); $("#obj38487").css("border-style", "solid"); $("#obj38487").css("border-radius", "10px"); $("#obj38487").css("-webkit-border-radius", "10px"); $("#obj38487").css("-moz-border-radius", "10px"); $("#obj38487_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38487_droppedInsideTargetActions_6_runningActionsCount = window.obj38487_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj38487_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38801();
function playAudio_38801() {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = obj38487_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38487_droppedInsideTargetActions_6_runningActionsCount = window.obj38487_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_6_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38487_droppedInsideTargetActions_6_runningActionsCount = window.obj38487_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_6_actionGroup9();
}
	}
}









};
obj38487_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38802();
function switchText_38802() {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = obj38487_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38487_droppedInsideTargetActions_6_runningActionsCount = window.obj38487_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_6_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38487_droppedInsideTargetActions_6_runningActionsCount = window.obj38487_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_6_actionGroup10();
}
		}, 1);
	}
}






};
obj38487_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	





















};
obj38487_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38749();
function runjs_38749() {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = obj38487_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38487").css("border-color", "#C00000"); $("#obj38487").css("border-width", "2px"); $("#obj38487").css("border-style", "solid"); $("#obj38487").css("border-radius", "10px"); $("#obj38487").css("-webkit-border-radius", "10px"); $("#obj38487").css("-moz-border-radius", "10px"); $("#obj38487_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38487_droppedInsideTargetActions_5_runningActionsCount = window.obj38487_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj38487_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38413 
hide_38750();
function hide_38750() {
	var selector = "#obj38413";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = obj38487_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38487_droppedInsideTargetActions_5_runningActionsCount = window.obj38487_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_5_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38750(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38487_droppedInsideTargetActions_5_runningActionsCount = window.obj38487_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_5_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38487_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38751();
function switchText_38751() {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = obj38487_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38487_droppedInsideTargetActions_5_runningActionsCount = window.obj38487_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_5_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38487_droppedInsideTargetActions_5_runningActionsCount = window.obj38487_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
	}
}






};
obj38487_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38487 
move_38752();
function move_38752() {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = obj38487_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj38487");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 379;
	var moveY = 518;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38487_droppedInsideTargetActions_5_runningActionsCount = window.obj38487_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	});
}



















};
obj38487_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38753();
function runjs_38753() {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = obj38487_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38487").css("border-color", "rgba(0,0,0,0)"); $("#obj38487").css("border-width", "1px"); $("#obj38487").css("border-style", "solid"); $("#obj38487").css("border-radius", "10px"); $("#obj38487").css("-webkit-border-radius", "10px"); $("#obj38487").css("-moz-border-radius", "10px"); $("#obj38487_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38487_droppedInsideTargetActions_5_runningActionsCount = window.obj38487_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_5_actionGroup5();
}
	}, 1);
}







};
obj38487_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38413
(function(){
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = obj38487_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj38413";
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
					window.obj38487_droppedInsideTargetActions_5_runningActionsCount = window.obj38487_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj38487_droppedInsideTargetActions_5_runningActionsCount = window.obj38487_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38487_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38755();
function runjs_38755() {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = obj38487_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38487").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38487_droppedInsideTargetActions_5_runningActionsCount = window.obj38487_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj38487_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38756();
function runjs_38756() {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = obj38487_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38487").css("border-color", "rgba(0,0,0,0)"); $("#obj38487").css("border-width", "0px"); $("#obj38487").css("border-style", "solid"); $("#obj38487").css("border-radius", "10px"); $("#obj38487").css("-webkit-border-radius", "10px"); $("#obj38487").css("-moz-border-radius", "10px"); $("#obj38487_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38487_droppedInsideTargetActions_5_runningActionsCount = window.obj38487_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj38487_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38757();
function playAudio_38757() {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = obj38487_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38487_droppedInsideTargetActions_5_runningActionsCount = window.obj38487_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_5_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38487_droppedInsideTargetActions_5_runningActionsCount = window.obj38487_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_5_actionGroup9();
}
	}
}









};
obj38487_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38758();
function switchText_38758() {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = obj38487_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38487_droppedInsideTargetActions_5_runningActionsCount = window.obj38487_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_5_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38487_droppedInsideTargetActions_5_runningActionsCount = window.obj38487_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_5_actionGroup10();
}
		}, 1);
	}
}






};
obj38487_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	





















};
obj38487_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38727();
function runjs_38727() {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = obj38487_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38487").css("border-color", "#C00000"); $("#obj38487").css("border-width", "2px"); $("#obj38487").css("border-style", "solid"); $("#obj38487").css("border-radius", "10px"); $("#obj38487").css("-webkit-border-radius", "10px"); $("#obj38487").css("-moz-border-radius", "10px"); $("#obj38487_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38487_droppedInsideTargetActions_4_runningActionsCount = window.obj38487_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj38487_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38473 
hide_38728();
function hide_38728() {
	var selector = "#obj38473";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = obj38487_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38487_droppedInsideTargetActions_4_runningActionsCount = window.obj38487_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_4_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38728(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38487_droppedInsideTargetActions_4_runningActionsCount = window.obj38487_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_4_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38487_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38729();
function switchText_38729() {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = obj38487_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38487_droppedInsideTargetActions_4_runningActionsCount = window.obj38487_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_4_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38487_droppedInsideTargetActions_4_runningActionsCount = window.obj38487_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
	}
}






};
obj38487_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38487 
move_38730();
function move_38730() {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = obj38487_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj38487");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 379;
	var moveY = 518;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38487_droppedInsideTargetActions_4_runningActionsCount = window.obj38487_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	});
}



















};
obj38487_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38731();
function runjs_38731() {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = obj38487_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38487").css("border-color", "rgba(0,0,0,0)"); $("#obj38487").css("border-width", "1px"); $("#obj38487").css("border-style", "solid"); $("#obj38487").css("border-radius", "10px"); $("#obj38487").css("-webkit-border-radius", "10px"); $("#obj38487").css("-moz-border-radius", "10px"); $("#obj38487_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38487_droppedInsideTargetActions_4_runningActionsCount = window.obj38487_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj38487_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38473
(function(){
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = obj38487_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj38473";
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
					window.obj38487_droppedInsideTargetActions_4_runningActionsCount = window.obj38487_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj38487_droppedInsideTargetActions_4_runningActionsCount = window.obj38487_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38487_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38733();
function runjs_38733() {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = obj38487_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38487").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38487_droppedInsideTargetActions_4_runningActionsCount = window.obj38487_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj38487_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38734();
function runjs_38734() {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = obj38487_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38487").css("border-color", "rgba(0,0,0,0)"); $("#obj38487").css("border-width", "0px"); $("#obj38487").css("border-style", "solid"); $("#obj38487").css("border-radius", "10px"); $("#obj38487").css("-webkit-border-radius", "10px"); $("#obj38487").css("-moz-border-radius", "10px"); $("#obj38487_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38487_droppedInsideTargetActions_4_runningActionsCount = window.obj38487_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj38487_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38735();
function playAudio_38735() {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = obj38487_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38487_droppedInsideTargetActions_4_runningActionsCount = window.obj38487_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_4_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38487_droppedInsideTargetActions_4_runningActionsCount = window.obj38487_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_4_actionGroup9();
}
	}
}









};
obj38487_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38736();
function switchText_38736() {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = obj38487_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38487_droppedInsideTargetActions_4_runningActionsCount = window.obj38487_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_4_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38487_droppedInsideTargetActions_4_runningActionsCount = window.obj38487_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_4_actionGroup10();
}
		}, 1);
	}
}






};
obj38487_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	





















};
obj38487_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38639();
function runjs_38639() {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = obj38487_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38487").css("border-color", "#C00000"); $("#obj38487").css("border-width", "2px"); $("#obj38487").css("border-style", "solid"); $("#obj38487").css("border-radius", "10px"); $("#obj38487").css("-webkit-border-radius", "10px"); $("#obj38487").css("-moz-border-radius", "10px"); $("#obj38487_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38487_droppedInsideTargetActions_3_runningActionsCount = window.obj38487_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj38487_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38411 
hide_38640();
function hide_38640() {
	var selector = "#obj38411";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = obj38487_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38487_droppedInsideTargetActions_3_runningActionsCount = window.obj38487_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38640(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38487_droppedInsideTargetActions_3_runningActionsCount = window.obj38487_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_3_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38487_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38641();
function switchText_38641() {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = obj38487_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38487_droppedInsideTargetActions_3_runningActionsCount = window.obj38487_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38487_droppedInsideTargetActions_3_runningActionsCount = window.obj38487_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj38487_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38487 
move_38642();
function move_38642() {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = obj38487_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj38487");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 379;
	var moveY = 518;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38487_droppedInsideTargetActions_3_runningActionsCount = window.obj38487_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj38487_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38643();
function runjs_38643() {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = obj38487_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38487").css("border-color", "rgba(0,0,0,0)"); $("#obj38487").css("border-width", "1px"); $("#obj38487").css("border-style", "solid"); $("#obj38487").css("border-radius", "10px"); $("#obj38487").css("-webkit-border-radius", "10px"); $("#obj38487").css("-moz-border-radius", "10px"); $("#obj38487_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38487_droppedInsideTargetActions_3_runningActionsCount = window.obj38487_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj38487_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38411
(function(){
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = obj38487_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj38411";
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
					window.obj38487_droppedInsideTargetActions_3_runningActionsCount = window.obj38487_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_3_actionGroup6();
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
				window.obj38487_droppedInsideTargetActions_3_runningActionsCount = window.obj38487_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_3_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38487_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38645();
function runjs_38645() {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = obj38487_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38487").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38487_droppedInsideTargetActions_3_runningActionsCount = window.obj38487_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj38487_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38646();
function runjs_38646() {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = obj38487_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38487").css("border-color", "rgba(0,0,0,0)"); $("#obj38487").css("border-width", "0px"); $("#obj38487").css("border-style", "solid"); $("#obj38487").css("border-radius", "10px"); $("#obj38487").css("-webkit-border-radius", "10px"); $("#obj38487").css("-moz-border-radius", "10px"); $("#obj38487_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38487_droppedInsideTargetActions_3_runningActionsCount = window.obj38487_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj38487_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38647();
function playAudio_38647() {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = obj38487_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38487_droppedInsideTargetActions_3_runningActionsCount = window.obj38487_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38487_droppedInsideTargetActions_3_runningActionsCount = window.obj38487_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj38487_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38648();
function switchText_38648() {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = obj38487_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38487_droppedInsideTargetActions_3_runningActionsCount = window.obj38487_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_3_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38487_droppedInsideTargetActions_3_runningActionsCount = window.obj38487_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_3_actionGroup10();
}
		}, 1);
	}
}






};
obj38487_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	





















};
obj38487_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38517();
function runjs_38517() {
	window.obj38487_droppedInsideTargetActions_2_runningActionsCount = obj38487_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38487").css("border-color", "#058E3F"); $("#obj38487").css("border-width", "3px"); $("#obj38487").css("border-style", "solid"); $("#obj38487").css("border-radius", "10px"); $("#obj38487").css("-webkit-border-radius", "10px"); $("#obj38487").css("-moz-border-radius", "10px"); $("#obj38487_img").css("top", "-3px").css("left", "-3px");
	
	setTimeout(function() {
		window.obj38487_droppedInsideTargetActions_2_runningActionsCount = window.obj38487_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj38487_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_38519();
function switchText_38519() {
	window.obj38487_droppedInsideTargetActions_2_runningActionsCount = obj38487_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38487_droppedInsideTargetActions_2_runningActionsCount = window.obj38487_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38487_droppedInsideTargetActions_2_runningActionsCount = window.obj38487_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj38487_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj38477 
hide_38518();
function hide_38518() {
	var selector = "#obj38477";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38487_droppedInsideTargetActions_2_runningActionsCount = obj38487_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38487_droppedInsideTargetActions_2_runningActionsCount = window.obj38487_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38518(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38487_droppedInsideTargetActions_2_runningActionsCount = window.obj38487_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38487_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj38405 
playAudio_38520();
function playAudio_38520() {
	window.obj38487_droppedInsideTargetActions_2_runningActionsCount = obj38487_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj38405")[0];
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
		    window.obj38487_droppedInsideTargetActions_2_runningActionsCount = window.obj38487_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_2_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38487_droppedInsideTargetActions_2_runningActionsCount = window.obj38487_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_2_actionGroup4();
}
	}
}









};
obj38487_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90466();
function switchText_90466() {
	window.obj38487_droppedInsideTargetActions_2_runningActionsCount = obj38487_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38487_droppedInsideTargetActions_2_runningActionsCount = window.obj38487_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38487_droppedInsideTargetActions_2_runningActionsCount = window.obj38487_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj38487_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	





















};
obj38487_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38512();
function runjs_38512() {
	window.obj38487_droppedInsideTargetActions_runningActionsCount = obj38487_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38487").css("border-color", "#058E3F"); $("#obj38487").css("border-width", "3px"); $("#obj38487").css("border-style", "solid"); $("#obj38487").css("border-radius", "10px"); $("#obj38487").css("-webkit-border-radius", "10px"); $("#obj38487").css("-moz-border-radius", "10px"); $("#obj38487_img").css("top", "-3px").css("left", "-3px");
	
	setTimeout(function() {
		window.obj38487_droppedInsideTargetActions_runningActionsCount = window.obj38487_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj38487_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_38514();
function switchText_38514() {
	window.obj38487_droppedInsideTargetActions_runningActionsCount = obj38487_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38487_droppedInsideTargetActions_runningActionsCount = window.obj38487_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38487_droppedInsideTargetActions_runningActionsCount = window.obj38487_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj38487_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj38415 
hide_38513();
function hide_38513() {
	var selector = "#obj38415";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38487_droppedInsideTargetActions_runningActionsCount = obj38487_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38487_droppedInsideTargetActions_runningActionsCount = window.obj38487_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38513(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38487_droppedInsideTargetActions_runningActionsCount = window.obj38487_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38487_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj38405 
playAudio_38515();
function playAudio_38515() {
	window.obj38487_droppedInsideTargetActions_runningActionsCount = obj38487_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj38405")[0];
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
		    window.obj38487_droppedInsideTargetActions_runningActionsCount = window.obj38487_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38487_droppedInsideTargetActions_runningActionsCount = window.obj38487_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_actionGroup4();
}
	}
}









};
obj38487_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90465();
function switchText_90465() {
	window.obj38487_droppedInsideTargetActions_runningActionsCount = obj38487_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38487_droppedInsideTargetActions_runningActionsCount = window.obj38487_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38487_droppedInsideTargetActions_runningActionsCount = window.obj38487_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38487_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38487_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38487_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38487_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj38487_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38487_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38487").trigger("obj38487_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38487) {
				console.warn("de-queueing event obj38487." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38487").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38487_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj38489_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_onTouchDown_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj38489");
//	action: dragDrop
//	target: obj38489 
dragDrop_38558();
function dragDrop_38558() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj38489_onTouchDown_runningActionsCount = obj38489_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj38489');
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
	  	containerNode = $('#obj38423');
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
    	window.obj38489_onTouchDown_runningActionsCount = window.obj38489_onTouchDown_runningActionsCount - 1;
if (window.obj38489_onTouchDown_runningActionsCount < 0) {
	window.obj38489_onTouchDown_runningActionsCount = 0;
} else if (window.obj38489_onTouchDown_runningActionsCount == 0) {
	obj38489_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj38465","#obj38471","#obj38421","#obj38467","#obj38463","#obj38469");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_38558 = false;
    	var dropped_id_38558;
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
					dropped_38558 = true;
					dropped_id_38558 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_38558) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj38489").trigger('SCActionDragDrop38558_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj38489_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38489_onTouchDown_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj38489 
move_92581();
function move_92581() {
	window.obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_runningActionsCount = obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj38489");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 379;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_runningActionsCount = window.obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj38489_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38826();
function runjs_38826() {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = obj38489_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38489").css("border-color", "#C00000"); $("#obj38489").css("border-width", "2px"); $("#obj38489").css("border-style", "solid"); $("#obj38489").css("border-radius", "10px"); $("#obj38489").css("-webkit-border-radius", "10px"); $("#obj38489").css("-moz-border-radius", "10px"); $("#obj38489_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38489_droppedInsideTargetActions_6_runningActionsCount = window.obj38489_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj38489_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38475 
hide_38827();
function hide_38827() {
	var selector = "#obj38475";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = obj38489_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38489_droppedInsideTargetActions_6_runningActionsCount = window.obj38489_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_6_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38827(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38489_droppedInsideTargetActions_6_runningActionsCount = window.obj38489_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_6_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38489_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38828();
function switchText_38828() {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = obj38489_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38489_droppedInsideTargetActions_6_runningActionsCount = window.obj38489_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_6_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38489_droppedInsideTargetActions_6_runningActionsCount = window.obj38489_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
	}
}






};
obj38489_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38489 
move_38829();
function move_38829() {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = obj38489_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj38489");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 379;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38489_droppedInsideTargetActions_6_runningActionsCount = window.obj38489_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	});
}



















};
obj38489_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38830();
function runjs_38830() {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = obj38489_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38489").css("border-color", "rgba(0,0,0,0)"); $("#obj38489").css("border-width", "1px"); $("#obj38489").css("border-style", "solid"); $("#obj38489").css("border-radius", "10px"); $("#obj38489").css("-webkit-border-radius", "10px"); $("#obj38489").css("-moz-border-radius", "10px"); $("#obj38489_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38489_droppedInsideTargetActions_6_runningActionsCount = window.obj38489_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_6_actionGroup5();
}
	}, 1);
}







};
obj38489_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38475
(function(){
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = obj38489_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj38475";
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
					window.obj38489_droppedInsideTargetActions_6_runningActionsCount = window.obj38489_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj38489_droppedInsideTargetActions_6_runningActionsCount = window.obj38489_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38489_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38832();
function runjs_38832() {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = obj38489_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38489").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38489_droppedInsideTargetActions_6_runningActionsCount = window.obj38489_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_6_actionGroup7();
}
	}, 1);
}







};
obj38489_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38833();
function runjs_38833() {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = obj38489_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj38489").css("border-color", "rgba(0,0,0,0)"); $("#obj38489").css("border-width", "0px"); $("#obj38489").css("border-style", "solid"); $("#obj38489").css("border-radius", "10px"); $("#obj38489").css("-webkit-border-radius", "10px"); $("#obj38489").css("-moz-border-radius", "10px"); $("#obj38489_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38489_droppedInsideTargetActions_6_runningActionsCount = window.obj38489_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_6_actionGroup8();
}
	}, 1);
}







};
obj38489_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38834();
function playAudio_38834() {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = obj38489_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38489_droppedInsideTargetActions_6_runningActionsCount = window.obj38489_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_6_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38489_droppedInsideTargetActions_6_runningActionsCount = window.obj38489_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_6_actionGroup9();
}
	}
}









};
obj38489_droppedInsideTargetActions_6_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38835();
function switchText_38835() {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = obj38489_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38489_droppedInsideTargetActions_6_runningActionsCount = window.obj38489_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_6_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38489_droppedInsideTargetActions_6_runningActionsCount = window.obj38489_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_6_actionGroup10();
}
		}, 1);
	}
}






};
obj38489_droppedInsideTargetActions_6_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex = 10;
	





















};
obj38489_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38782();
function runjs_38782() {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = obj38489_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38489").css("border-color", "#C00000"); $("#obj38489").css("border-width", "2px"); $("#obj38489").css("border-style", "solid"); $("#obj38489").css("border-radius", "10px"); $("#obj38489").css("-webkit-border-radius", "10px"); $("#obj38489").css("-moz-border-radius", "10px"); $("#obj38489_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38489_droppedInsideTargetActions_5_runningActionsCount = window.obj38489_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj38489_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38473 
hide_38783();
function hide_38783() {
	var selector = "#obj38473";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = obj38489_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38489_droppedInsideTargetActions_5_runningActionsCount = window.obj38489_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_5_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38783(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38489_droppedInsideTargetActions_5_runningActionsCount = window.obj38489_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_5_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38489_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38784();
function switchText_38784() {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = obj38489_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38489_droppedInsideTargetActions_5_runningActionsCount = window.obj38489_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_5_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38489_droppedInsideTargetActions_5_runningActionsCount = window.obj38489_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
	}
}






};
obj38489_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38489 
move_38785();
function move_38785() {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = obj38489_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj38489");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 379;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38489_droppedInsideTargetActions_5_runningActionsCount = window.obj38489_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	});
}



















};
obj38489_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38786();
function runjs_38786() {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = obj38489_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38489").css("border-color", "rgba(0,0,0,0)"); $("#obj38489").css("border-width", "1px"); $("#obj38489").css("border-style", "solid"); $("#obj38489").css("border-radius", "10px"); $("#obj38489").css("-webkit-border-radius", "10px"); $("#obj38489").css("-moz-border-radius", "10px"); $("#obj38489_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38489_droppedInsideTargetActions_5_runningActionsCount = window.obj38489_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_5_actionGroup5();
}
	}, 1);
}







};
obj38489_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38473
(function(){
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = obj38489_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj38473";
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
					window.obj38489_droppedInsideTargetActions_5_runningActionsCount = window.obj38489_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj38489_droppedInsideTargetActions_5_runningActionsCount = window.obj38489_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38489_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38788();
function runjs_38788() {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = obj38489_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38489").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38489_droppedInsideTargetActions_5_runningActionsCount = window.obj38489_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj38489_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38789();
function runjs_38789() {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = obj38489_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj38489").css("border-color", "rgba(0,0,0,0)"); $("#obj38489").css("border-width", "0px"); $("#obj38489").css("border-style", "solid"); $("#obj38489").css("border-radius", "10px"); $("#obj38489").css("-webkit-border-radius", "10px"); $("#obj38489").css("-moz-border-radius", "10px"); $("#obj38489_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38489_droppedInsideTargetActions_5_runningActionsCount = window.obj38489_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj38489_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38790();
function playAudio_38790() {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = obj38489_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38489_droppedInsideTargetActions_5_runningActionsCount = window.obj38489_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_5_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38489_droppedInsideTargetActions_5_runningActionsCount = window.obj38489_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_5_actionGroup9();
}
	}
}









};
obj38489_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38791();
function switchText_38791() {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = obj38489_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38489_droppedInsideTargetActions_5_runningActionsCount = window.obj38489_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_5_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38489_droppedInsideTargetActions_5_runningActionsCount = window.obj38489_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_5_actionGroup10();
}
		}, 1);
	}
}






};
obj38489_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	





















};
obj38489_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38694();
function runjs_38694() {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = obj38489_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38489").css("border-color", "#C00000"); $("#obj38489").css("border-width", "2px"); $("#obj38489").css("border-style", "solid"); $("#obj38489").css("border-radius", "10px"); $("#obj38489").css("-webkit-border-radius", "10px"); $("#obj38489").css("-moz-border-radius", "10px"); $("#obj38489_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38489_droppedInsideTargetActions_4_runningActionsCount = window.obj38489_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj38489_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38477 
hide_38695();
function hide_38695() {
	var selector = "#obj38477";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = obj38489_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38489_droppedInsideTargetActions_4_runningActionsCount = window.obj38489_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_4_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38695(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38489_droppedInsideTargetActions_4_runningActionsCount = window.obj38489_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_4_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38489_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38696();
function switchText_38696() {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = obj38489_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38489_droppedInsideTargetActions_4_runningActionsCount = window.obj38489_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_4_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38489_droppedInsideTargetActions_4_runningActionsCount = window.obj38489_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
	}
}






};
obj38489_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38489 
move_38697();
function move_38697() {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = obj38489_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj38489");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 379;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38489_droppedInsideTargetActions_4_runningActionsCount = window.obj38489_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	});
}



















};
obj38489_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38698();
function runjs_38698() {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = obj38489_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38489").css("border-color", "rgba(0,0,0,0)"); $("#obj38489").css("border-width", "1px"); $("#obj38489").css("border-style", "solid"); $("#obj38489").css("border-radius", "10px"); $("#obj38489").css("-webkit-border-radius", "10px"); $("#obj38489").css("-moz-border-radius", "10px"); $("#obj38489_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38489_droppedInsideTargetActions_4_runningActionsCount = window.obj38489_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj38489_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38477
(function(){
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = obj38489_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj38477";
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
					window.obj38489_droppedInsideTargetActions_4_runningActionsCount = window.obj38489_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj38489_droppedInsideTargetActions_4_runningActionsCount = window.obj38489_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38489_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38700();
function runjs_38700() {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = obj38489_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38489").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38489_droppedInsideTargetActions_4_runningActionsCount = window.obj38489_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj38489_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38701();
function runjs_38701() {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = obj38489_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj38489").css("border-color", "rgba(0,0,0,0)"); $("#obj38489").css("border-width", "0px"); $("#obj38489").css("border-style", "solid"); $("#obj38489").css("border-radius", "10px"); $("#obj38489").css("-webkit-border-radius", "10px"); $("#obj38489").css("-moz-border-radius", "10px"); $("#obj38489_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38489_droppedInsideTargetActions_4_runningActionsCount = window.obj38489_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj38489_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38702();
function playAudio_38702() {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = obj38489_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38489_droppedInsideTargetActions_4_runningActionsCount = window.obj38489_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_4_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38489_droppedInsideTargetActions_4_runningActionsCount = window.obj38489_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_4_actionGroup9();
}
	}
}









};
obj38489_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38703();
function switchText_38703() {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = obj38489_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38489_droppedInsideTargetActions_4_runningActionsCount = window.obj38489_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_4_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38489_droppedInsideTargetActions_4_runningActionsCount = window.obj38489_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_4_actionGroup10();
}
		}, 1);
	}
}






};
obj38489_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	





















};
obj38489_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38606();
function runjs_38606() {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = obj38489_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38489").css("border-color", "#C00000"); $("#obj38489").css("border-width", "2px"); $("#obj38489").css("border-style", "solid"); $("#obj38489").css("border-radius", "10px"); $("#obj38489").css("-webkit-border-radius", "10px"); $("#obj38489").css("-moz-border-radius", "10px"); $("#obj38489_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj38489_droppedInsideTargetActions_3_runningActionsCount = window.obj38489_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj38489_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj38415 
hide_38607();
function hide_38607() {
	var selector = "#obj38415";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = obj38489_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38489_droppedInsideTargetActions_3_runningActionsCount = window.obj38489_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38607(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38489_droppedInsideTargetActions_3_runningActionsCount = window.obj38489_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_3_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38489_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_38608();
function switchText_38608() {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = obj38489_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38489_droppedInsideTargetActions_3_runningActionsCount = window.obj38489_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38489_droppedInsideTargetActions_3_runningActionsCount = window.obj38489_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj38489_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj38489 
move_38609();
function move_38609() {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = obj38489_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj38489");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 379;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38489_droppedInsideTargetActions_3_runningActionsCount = window.obj38489_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj38489_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38610();
function runjs_38610() {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = obj38489_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38489").css("border-color", "rgba(0,0,0,0)"); $("#obj38489").css("border-width", "1px"); $("#obj38489").css("border-style", "solid"); $("#obj38489").css("border-radius", "10px"); $("#obj38489").css("-webkit-border-radius", "10px"); $("#obj38489").css("-moz-border-radius", "10px"); $("#obj38489_img").css("top", "-1px").css("left", "-1px");
	
	setTimeout(function() {
		window.obj38489_droppedInsideTargetActions_3_runningActionsCount = window.obj38489_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj38489_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj38415
(function(){
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = obj38489_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj38415";
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
					window.obj38489_droppedInsideTargetActions_3_runningActionsCount = window.obj38489_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_3_actionGroup6();
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
				window.obj38489_droppedInsideTargetActions_3_runningActionsCount = window.obj38489_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_3_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38489_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38612();
function runjs_38612() {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = obj38489_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38489").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38489_droppedInsideTargetActions_3_runningActionsCount = window.obj38489_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj38489_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38613();
function runjs_38613() {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = obj38489_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38489").css("border-color", "rgba(0,0,0,0)"); $("#obj38489").css("border-width", "0px"); $("#obj38489").css("border-style", "solid"); $("#obj38489").css("border-radius", "10px"); $("#obj38489").css("-webkit-border-radius", "10px"); $("#obj38489").css("-moz-border-radius", "10px"); $("#obj38489_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj38489_droppedInsideTargetActions_3_runningActionsCount = window.obj38489_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj38489_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj38406 
playAudio_38614();
function playAudio_38614() {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = obj38489_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj38406")[0];
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
		    window.obj38489_droppedInsideTargetActions_3_runningActionsCount = window.obj38489_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38489_droppedInsideTargetActions_3_runningActionsCount = window.obj38489_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj38489_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_38615();
function switchText_38615() {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = obj38489_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38489_droppedInsideTargetActions_3_runningActionsCount = window.obj38489_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_3_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38489_droppedInsideTargetActions_3_runningActionsCount = window.obj38489_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_3_actionGroup10();
}
		}, 1);
	}
}






};
obj38489_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	





















};
obj38489_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38565();
function runjs_38565() {
	window.obj38489_droppedInsideTargetActions_2_runningActionsCount = obj38489_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38489").css("border-color", "#058E3F"); $("#obj38489").css("border-width", "3px"); $("#obj38489").css("border-style", "solid"); $("#obj38489").css("border-radius", "10px"); $("#obj38489").css("-webkit-border-radius", "10px"); $("#obj38489").css("-moz-border-radius", "10px"); $("#obj38489_img").css("top", "-3px").css("left", "-3px");
	
	setTimeout(function() {
		window.obj38489_droppedInsideTargetActions_2_runningActionsCount = window.obj38489_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj38489_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_38567();
function switchText_38567() {
	window.obj38489_droppedInsideTargetActions_2_runningActionsCount = obj38489_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38489_droppedInsideTargetActions_2_runningActionsCount = window.obj38489_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38489_droppedInsideTargetActions_2_runningActionsCount = window.obj38489_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj38489_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj38473 
hide_38566();
function hide_38566() {
	var selector = "#obj38473";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38489_droppedInsideTargetActions_2_runningActionsCount = obj38489_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38489_droppedInsideTargetActions_2_runningActionsCount = window.obj38489_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38566(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38489_droppedInsideTargetActions_2_runningActionsCount = window.obj38489_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38489_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj38405 
playAudio_38568();
function playAudio_38568() {
	window.obj38489_droppedInsideTargetActions_2_runningActionsCount = obj38489_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj38405")[0];
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
		    window.obj38489_droppedInsideTargetActions_2_runningActionsCount = window.obj38489_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_2_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38489_droppedInsideTargetActions_2_runningActionsCount = window.obj38489_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_2_actionGroup4();
}
	}
}









};
obj38489_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90468();
function switchText_90468() {
	window.obj38489_droppedInsideTargetActions_2_runningActionsCount = obj38489_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38489_droppedInsideTargetActions_2_runningActionsCount = window.obj38489_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38489_droppedInsideTargetActions_2_runningActionsCount = window.obj38489_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj38489_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	





















};
obj38489_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38560();
function runjs_38560() {
	window.obj38489_droppedInsideTargetActions_runningActionsCount = obj38489_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38489").css("border-color", "#058E3F"); $("#obj38489").css("border-width", "3px"); $("#obj38489").css("border-style", "solid"); $("#obj38489").css("border-radius", "10px"); $("#obj38489").css("-webkit-border-radius", "10px"); $("#obj38489").css("-moz-border-radius", "10px"); $("#obj38489_img").css("top", "-3px").css("left", "-3px");
	
	setTimeout(function() {
		window.obj38489_droppedInsideTargetActions_runningActionsCount = window.obj38489_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj38489_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_38562();
function switchText_38562() {
	window.obj38489_droppedInsideTargetActions_runningActionsCount = obj38489_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38489_droppedInsideTargetActions_runningActionsCount = window.obj38489_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38489_droppedInsideTargetActions_runningActionsCount = window.obj38489_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj38489_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj38411 
hide_38561();
function hide_38561() {
	var selector = "#obj38411";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38489_droppedInsideTargetActions_runningActionsCount = obj38489_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38489_droppedInsideTargetActions_runningActionsCount = window.obj38489_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38561(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38489_droppedInsideTargetActions_runningActionsCount = window.obj38489_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38489_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj38405 
playAudio_38563();
function playAudio_38563() {
	window.obj38489_droppedInsideTargetActions_runningActionsCount = obj38489_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj38405")[0];
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
		    window.obj38489_droppedInsideTargetActions_runningActionsCount = window.obj38489_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38489_droppedInsideTargetActions_runningActionsCount = window.obj38489_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_actionGroup4();
}
	}
}









};
obj38489_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90467();
function switchText_90467() {
	window.obj38489_droppedInsideTargetActions_runningActionsCount = obj38489_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38407_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38407_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38407").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38407_content");
			setTimeout(function () {
				window.obj38489_droppedInsideTargetActions_runningActionsCount = window.obj38489_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj38407 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38489_droppedInsideTargetActions_runningActionsCount = window.obj38489_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38489_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38489_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38489_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38489_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj38489_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38489_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38489").trigger("obj38489_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38489) {
				console.warn("de-queueing event obj38489." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38489").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38489_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj67070_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67070_onTap_activeActionGroupIndex = -1;
		$("#obj67070").trigger("obj67070_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67070) {
				console.warn("de-queueing event obj67070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67070_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67070 
hide_67073();
function hide_67073() {
	var selector = "#obj67070";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67070_onTap_runningActionsCount = obj67070_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67070_onTap_runningActionsCount = window.obj67070_onTap_runningActionsCount - 1;
if (window.obj67070_onTap_runningActionsCount < 0) {
	window.obj67070_onTap_runningActionsCount = 0;
} else if (window.obj67070_onTap_runningActionsCount == 0) {
	obj67070_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67073(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67070_onTap_runningActionsCount = window.obj67070_onTap_runningActionsCount - 1;
if (window.obj67070_onTap_runningActionsCount < 0) {
	window.obj67070_onTap_runningActionsCount = 0;
} else if (window.obj67070_onTap_runningActionsCount == 0) {
	obj67070_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67076 
stopMovie_67072();
function stopMovie_67072() {
	window.obj67070_onTap_runningActionsCount = obj67070_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67076")[0];
	myVideo.pause();
	window.obj67070_onTap_runningActionsCount = window.obj67070_onTap_runningActionsCount - 1;
if (window.obj67070_onTap_runningActionsCount < 0) {
	window.obj67070_onTap_runningActionsCount = 0;
} else if (window.obj67070_onTap_runningActionsCount == 0) {
	obj67070_onTap_actionGroup1();
}
}
















};
obj67070_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67070_onTap_activeActionGroupIndex = -1;
		$("#obj67070").trigger("obj67070_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67070) {
				console.warn("de-queueing event obj67070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67070_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67062
(function(){
	window.obj67070_onTap_runningActionsCount = obj67070_onTap_runningActionsCount + 1;

	var selector = "#obj67062";
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
					window.obj67070_onTap_runningActionsCount = window.obj67070_onTap_runningActionsCount - 1;
if (window.obj67070_onTap_runningActionsCount < 0) {
	window.obj67070_onTap_runningActionsCount = 0;
} else if (window.obj67070_onTap_runningActionsCount == 0) {
	obj67070_onTap_actionGroup2();
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
				window.obj67070_onTap_runningActionsCount = window.obj67070_onTap_runningActionsCount - 1;
if (window.obj67070_onTap_runningActionsCount < 0) {
	window.obj67070_onTap_runningActionsCount = 0;
} else if (window.obj67070_onTap_runningActionsCount == 0) {
	obj67070_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67070_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67070_onTap_activeActionGroupIndex = -1;
		$("#obj67070").trigger("obj67070_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67070) {
				console.warn("de-queueing event obj67070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67070_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67076 
move_67075();
function move_67075() {
	window.obj67070_onTap_runningActionsCount = obj67070_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67076");
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
			window.obj67070_onTap_runningActionsCount = window.obj67070_onTap_runningActionsCount - 1;
if (window.obj67070_onTap_runningActionsCount < 0) {
	window.obj67070_onTap_runningActionsCount = 0;
} else if (window.obj67070_onTap_runningActionsCount == 0) {
	obj67070_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67070_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67070_onTap_activeActionGroupIndex = -1;
		$("#obj67070").trigger("obj67070_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67070) {
				console.warn("de-queueing event obj67070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67070_onTap_activeActionGroupIndex = 3;
	





















};
obj67062_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67062_onTap_activeActionGroupIndex = -1;
		$("#obj67062").trigger("obj67062_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67062) {
				console.warn("de-queueing event obj67062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67062_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67062 
hide_67065();
function hide_67065() {
	var selector = "#obj67062";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67062_onTap_runningActionsCount = obj67062_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67062_onTap_runningActionsCount = window.obj67062_onTap_runningActionsCount - 1;
if (window.obj67062_onTap_runningActionsCount < 0) {
	window.obj67062_onTap_runningActionsCount = 0;
} else if (window.obj67062_onTap_runningActionsCount == 0) {
	obj67062_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67065(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67062_onTap_runningActionsCount = window.obj67062_onTap_runningActionsCount - 1;
if (window.obj67062_onTap_runningActionsCount < 0) {
	window.obj67062_onTap_runningActionsCount = 0;
} else if (window.obj67062_onTap_runningActionsCount == 0) {
	obj67062_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67076 
playPauseMovie_67064();
function playPauseMovie_67064() {
	window.obj67062_onTap_runningActionsCount = obj67062_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67076")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67062_onTap_runningActionsCount = window.obj67062_onTap_runningActionsCount - 1;
if (window.obj67062_onTap_runningActionsCount < 0) {
	window.obj67062_onTap_runningActionsCount = 0;
} else if (window.obj67062_onTap_runningActionsCount == 0) {
	obj67062_onTap_actionGroup1();
}
}

















};
obj67062_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67062_onTap_activeActionGroupIndex = -1;
		$("#obj67062").trigger("obj67062_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67062) {
				console.warn("de-queueing event obj67062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67062_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67070
(function(){
	window.obj67062_onTap_runningActionsCount = obj67062_onTap_runningActionsCount + 1;

	var selector = "#obj67070";
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
					window.obj67062_onTap_runningActionsCount = window.obj67062_onTap_runningActionsCount - 1;
if (window.obj67062_onTap_runningActionsCount < 0) {
	window.obj67062_onTap_runningActionsCount = 0;
} else if (window.obj67062_onTap_runningActionsCount == 0) {
	obj67062_onTap_actionGroup2();
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
				window.obj67062_onTap_runningActionsCount = window.obj67062_onTap_runningActionsCount - 1;
if (window.obj67062_onTap_runningActionsCount < 0) {
	window.obj67062_onTap_runningActionsCount = 0;
} else if (window.obj67062_onTap_runningActionsCount == 0) {
	obj67062_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67062_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67062_onTap_activeActionGroupIndex = -1;
		$("#obj67062").trigger("obj67062_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67062) {
				console.warn("de-queueing event obj67062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67062_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67076 
move_67067();
function move_67067() {
	window.obj67062_onTap_runningActionsCount = obj67062_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67076");
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
			window.obj67062_onTap_runningActionsCount = window.obj67062_onTap_runningActionsCount - 1;
if (window.obj67062_onTap_runningActionsCount < 0) {
	window.obj67062_onTap_runningActionsCount = 0;
} else if (window.obj67062_onTap_runningActionsCount == 0) {
	obj67062_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67062_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67062_onTap_activeActionGroupIndex = -1;
		$("#obj67062").trigger("obj67062_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67062) {
				console.warn("de-queueing event obj67062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67062_onTap_activeActionGroupIndex = 3;
	





















};
obj88417_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88417_onTap_activeActionGroupIndex = -1;
		$("#obj88417").trigger("obj88417_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88417) {
				console.warn("de-queueing event obj88417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88417_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88422 
stopAudio_88419();
function stopAudio_88419() {
	window.obj88417_onTap_runningActionsCount = obj88417_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88422")[0];
	myAudio.pause();
	window.obj88417_onTap_runningActionsCount = window.obj88417_onTap_runningActionsCount - 1;
if (window.obj88417_onTap_runningActionsCount < 0) {
	window.obj88417_onTap_runningActionsCount = 0;
} else if (window.obj88417_onTap_runningActionsCount == 0) {
	obj88417_onTap_actionGroup1();
}
}








};
obj88417_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88417_onTap_activeActionGroupIndex = -1;
		$("#obj88417").trigger("obj88417_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88417) {
				console.warn("de-queueing event obj88417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88417_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88417 
hide_88420();
function hide_88420() {
	var selector = "#obj88417";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88417_onTap_runningActionsCount = obj88417_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88417_onTap_runningActionsCount = window.obj88417_onTap_runningActionsCount - 1;
if (window.obj88417_onTap_runningActionsCount < 0) {
	window.obj88417_onTap_runningActionsCount = 0;
} else if (window.obj88417_onTap_runningActionsCount == 0) {
	obj88417_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88420(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88417_onTap_runningActionsCount = window.obj88417_onTap_runningActionsCount - 1;
if (window.obj88417_onTap_runningActionsCount < 0) {
	window.obj88417_onTap_runningActionsCount = 0;
} else if (window.obj88417_onTap_runningActionsCount == 0) {
	obj88417_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88417_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88417_onTap_activeActionGroupIndex = -1;
		$("#obj88417").trigger("obj88417_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88417) {
				console.warn("de-queueing event obj88417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88417_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88412
(function(){
	window.obj88417_onTap_runningActionsCount = obj88417_onTap_runningActionsCount + 1;

	var selector = "#obj88412";
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
					window.obj88417_onTap_runningActionsCount = window.obj88417_onTap_runningActionsCount - 1;
if (window.obj88417_onTap_runningActionsCount < 0) {
	window.obj88417_onTap_runningActionsCount = 0;
} else if (window.obj88417_onTap_runningActionsCount == 0) {
	obj88417_onTap_actionGroup3();
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
				window.obj88417_onTap_runningActionsCount = window.obj88417_onTap_runningActionsCount - 1;
if (window.obj88417_onTap_runningActionsCount < 0) {
	window.obj88417_onTap_runningActionsCount = 0;
} else if (window.obj88417_onTap_runningActionsCount == 0) {
	obj88417_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88417_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88417_onTap_activeActionGroupIndex = -1;
		$("#obj88417").trigger("obj88417_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88417) {
				console.warn("de-queueing event obj88417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88417_onTap_activeActionGroupIndex = 3;
	





















};
obj88412_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88412_onTap_activeActionGroupIndex = -1;
		$("#obj88412").trigger("obj88412_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88412) {
				console.warn("de-queueing event obj88412." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88412").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88412_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88412 
hide_88414();
function hide_88414() {
	var selector = "#obj88412";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88412_onTap_runningActionsCount = obj88412_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88412_onTap_runningActionsCount = window.obj88412_onTap_runningActionsCount - 1;
if (window.obj88412_onTap_runningActionsCount < 0) {
	window.obj88412_onTap_runningActionsCount = 0;
} else if (window.obj88412_onTap_runningActionsCount == 0) {
	obj88412_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88414(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88412_onTap_runningActionsCount = window.obj88412_onTap_runningActionsCount - 1;
if (window.obj88412_onTap_runningActionsCount < 0) {
	window.obj88412_onTap_runningActionsCount = 0;
} else if (window.obj88412_onTap_runningActionsCount == 0) {
	obj88412_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88412_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88412_onTap_activeActionGroupIndex = -1;
		$("#obj88412").trigger("obj88412_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88412) {
				console.warn("de-queueing event obj88412." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88412").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88412_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88417
(function(){
	window.obj88412_onTap_runningActionsCount = obj88412_onTap_runningActionsCount + 1;

	var selector = "#obj88417";
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
					window.obj88412_onTap_runningActionsCount = window.obj88412_onTap_runningActionsCount - 1;
if (window.obj88412_onTap_runningActionsCount < 0) {
	window.obj88412_onTap_runningActionsCount = 0;
} else if (window.obj88412_onTap_runningActionsCount == 0) {
	obj88412_onTap_actionGroup2();
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
				window.obj88412_onTap_runningActionsCount = window.obj88412_onTap_runningActionsCount - 1;
if (window.obj88412_onTap_runningActionsCount < 0) {
	window.obj88412_onTap_runningActionsCount = 0;
} else if (window.obj88412_onTap_runningActionsCount == 0) {
	obj88412_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88412_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88412_onTap_activeActionGroupIndex = -1;
		$("#obj88412").trigger("obj88412_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88412) {
				console.warn("de-queueing event obj88412." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88412").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88412_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88422 
playAudio_88416();
function playAudio_88416() {
	window.obj88412_onTap_runningActionsCount = obj88412_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88422")[0];
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
		    window.obj88412_onTap_runningActionsCount = window.obj88412_onTap_runningActionsCount - 1;
if (window.obj88412_onTap_runningActionsCount < 0) {
	window.obj88412_onTap_runningActionsCount = 0;
} else if (window.obj88412_onTap_runningActionsCount == 0) {
	obj88412_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88412_onTap_runningActionsCount = window.obj88412_onTap_runningActionsCount - 1;
if (window.obj88412_onTap_runningActionsCount < 0) {
	window.obj88412_onTap_runningActionsCount = 0;
} else if (window.obj88412_onTap_runningActionsCount == 0) {
	obj88412_onTap_actionGroup3();
}
	}
}









};
obj88412_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88412_onTap_activeActionGroupIndex = -1;
		$("#obj88412").trigger("obj88412_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88412) {
				console.warn("de-queueing event obj88412." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88412").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88412_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj38440: Event Touch Down
 *
 */
$("#obj38440").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj38440_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38440_onTap is still running");
	return;
}
var obj38440_onTap_runningActionsCount = 0;
var obj38440_onTap_loopCount = 0;
obj38440_onTap_actionGroup0();
});










/*
 *
 *   obj38437: Event Touch Down
 *
 */
$("#obj38437").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj38437_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38437_onTap is still running");
	return;
}
var obj38437_onTap_runningActionsCount = 0;
var obj38437_onTap_loopCount = 0;
obj38437_onTap_actionGroup0();
});










/*
 *
 *   obj38433: Event Touch Down
 *
 */
$("#obj38433").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj38433_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38433_onTap is still running");
	return;
}
var obj38433_onTap_runningActionsCount = 0;
var obj38433_onTap_loopCount = 0;
obj38433_onTap_actionGroup0();
});







































































































































































































































/*
 *
 *   obj38479: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj38479");
	var winTarget = document.getElementById("obj38479");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj38479").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj38479_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj38479_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj38479_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38479_onTouchDown is still running");
	return;
}
var obj38479_onTouchDown_runningActionsCount = 0;
var obj38479_onTouchDown_loopCount = 0;
obj38479_onTouchDown_actionGroup0();
});



/*
 *
 *   obj38479: Event SCActionDragDrop38522_droppedOutsideTargetActions
 *
 */
$("#obj38479").bind("SCActionDragDrop38522_droppedOutsideTargetActions", function(event) {
	if (window.obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38479_SCActionDragDrop38522_droppedOutsideTargetActions is still running");
	return;
}
var obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_runningActionsCount = 0;
var obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_loopCount = 0;
obj38479_SCActionDragDrop38522_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj38479: Event droppedInsideTargetActions_6
 *
 */
$("#obj38479").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj38479_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38479_droppedInsideTargetActions_6 is still running");
	return;
}
var obj38479_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj38479_droppedInsideTargetActions_6_loopCount = 0;
obj38479_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj38479: Event droppedInsideTargetActions_5
 *
 */
$("#obj38479").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj38479_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38479_droppedInsideTargetActions_5 is still running");
	return;
}
var obj38479_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj38479_droppedInsideTargetActions_5_loopCount = 0;
obj38479_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj38479: Event droppedInsideTargetActions_4
 *
 */
$("#obj38479").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj38479_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38479_droppedInsideTargetActions_4 is still running");
	return;
}
var obj38479_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj38479_droppedInsideTargetActions_4_loopCount = 0;
obj38479_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj38479: Event droppedInsideTargetActions_3
 *
 */
$("#obj38479").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj38479_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38479_droppedInsideTargetActions_3 is still running");
	return;
}
var obj38479_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj38479_droppedInsideTargetActions_3_loopCount = 0;
obj38479_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj38479: Event droppedInsideTargetActions_2
 *
 */
$("#obj38479").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj38479_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38479_droppedInsideTargetActions_2 is still running");
	return;
}
var obj38479_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj38479_droppedInsideTargetActions_2_loopCount = 0;
obj38479_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj38479: Event droppedInsideTargetActions
 *
 */
$("#obj38479").bind("droppedInsideTargetActions", function(event) {
	if (window.obj38479_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38479_droppedInsideTargetActions is still running");
	return;
}
var obj38479_droppedInsideTargetActions_runningActionsCount = 0;
var obj38479_droppedInsideTargetActions_loopCount = 0;
obj38479_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj38481: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj38481");
	var winTarget = document.getElementById("obj38481");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj38481").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj38481_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj38481_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj38481_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38481_onTouchDown is still running");
	return;
}
var obj38481_onTouchDown_runningActionsCount = 0;
var obj38481_onTouchDown_loopCount = 0;
obj38481_onTouchDown_actionGroup0();
});



/*
 *
 *   obj38481: Event SCActionDragDrop38498_droppedOutsideTargetActions
 *
 */
$("#obj38481").bind("SCActionDragDrop38498_droppedOutsideTargetActions", function(event) {
	if (window.obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38481_SCActionDragDrop38498_droppedOutsideTargetActions is still running");
	return;
}
var obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_runningActionsCount = 0;
var obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_loopCount = 0;
obj38481_SCActionDragDrop38498_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj38481: Event droppedInsideTargetActions_6
 *
 */
$("#obj38481").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj38481_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38481_droppedInsideTargetActions_6 is still running");
	return;
}
var obj38481_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj38481_droppedInsideTargetActions_6_loopCount = 0;
obj38481_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj38481: Event droppedInsideTargetActions_5
 *
 */
$("#obj38481").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj38481_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38481_droppedInsideTargetActions_5 is still running");
	return;
}
var obj38481_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj38481_droppedInsideTargetActions_5_loopCount = 0;
obj38481_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj38481: Event droppedInsideTargetActions_4
 *
 */
$("#obj38481").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj38481_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38481_droppedInsideTargetActions_4 is still running");
	return;
}
var obj38481_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj38481_droppedInsideTargetActions_4_loopCount = 0;
obj38481_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj38481: Event droppedInsideTargetActions_3
 *
 */
$("#obj38481").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj38481_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38481_droppedInsideTargetActions_3 is still running");
	return;
}
var obj38481_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj38481_droppedInsideTargetActions_3_loopCount = 0;
obj38481_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj38481: Event droppedInsideTargetActions_2
 *
 */
$("#obj38481").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj38481_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38481_droppedInsideTargetActions_2 is still running");
	return;
}
var obj38481_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj38481_droppedInsideTargetActions_2_loopCount = 0;
obj38481_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj38481: Event droppedInsideTargetActions
 *
 */
$("#obj38481").bind("droppedInsideTargetActions", function(event) {
	if (window.obj38481_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38481_droppedInsideTargetActions is still running");
	return;
}
var obj38481_droppedInsideTargetActions_runningActionsCount = 0;
var obj38481_droppedInsideTargetActions_loopCount = 0;
obj38481_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj38483: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj38483");
	var winTarget = document.getElementById("obj38483");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj38483").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj38483_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj38483_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj38483_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38483_onTouchDown is still running");
	return;
}
var obj38483_onTouchDown_runningActionsCount = 0;
var obj38483_onTouchDown_loopCount = 0;
obj38483_onTouchDown_actionGroup0();
});



/*
 *
 *   obj38483: Event SCActionDragDrop38534_droppedOutsideTargetActions
 *
 */
$("#obj38483").bind("SCActionDragDrop38534_droppedOutsideTargetActions", function(event) {
	if (window.obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38483_SCActionDragDrop38534_droppedOutsideTargetActions is still running");
	return;
}
var obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_runningActionsCount = 0;
var obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_loopCount = 0;
obj38483_SCActionDragDrop38534_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj38483: Event droppedInsideTargetActions_6
 *
 */
$("#obj38483").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj38483_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38483_droppedInsideTargetActions_6 is still running");
	return;
}
var obj38483_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj38483_droppedInsideTargetActions_6_loopCount = 0;
obj38483_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj38483: Event droppedInsideTargetActions_5
 *
 */
$("#obj38483").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj38483_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38483_droppedInsideTargetActions_5 is still running");
	return;
}
var obj38483_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj38483_droppedInsideTargetActions_5_loopCount = 0;
obj38483_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj38483: Event droppedInsideTargetActions_4
 *
 */
$("#obj38483").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj38483_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38483_droppedInsideTargetActions_4 is still running");
	return;
}
var obj38483_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj38483_droppedInsideTargetActions_4_loopCount = 0;
obj38483_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj38483: Event droppedInsideTargetActions_3
 *
 */
$("#obj38483").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj38483_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38483_droppedInsideTargetActions_3 is still running");
	return;
}
var obj38483_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj38483_droppedInsideTargetActions_3_loopCount = 0;
obj38483_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj38483: Event droppedInsideTargetActions_2
 *
 */
$("#obj38483").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj38483_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38483_droppedInsideTargetActions_2 is still running");
	return;
}
var obj38483_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj38483_droppedInsideTargetActions_2_loopCount = 0;
obj38483_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj38483: Event droppedInsideTargetActions
 *
 */
$("#obj38483").bind("droppedInsideTargetActions", function(event) {
	if (window.obj38483_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38483_droppedInsideTargetActions is still running");
	return;
}
var obj38483_droppedInsideTargetActions_runningActionsCount = 0;
var obj38483_droppedInsideTargetActions_loopCount = 0;
obj38483_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj38485: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj38485");
	var winTarget = document.getElementById("obj38485");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj38485").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj38485_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj38485_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj38485_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38485_onTouchDown is still running");
	return;
}
var obj38485_onTouchDown_runningActionsCount = 0;
var obj38485_onTouchDown_loopCount = 0;
obj38485_onTouchDown_actionGroup0();
});



/*
 *
 *   obj38485: Event SCActionDragDrop38546_droppedOutsideTargetActions
 *
 */
$("#obj38485").bind("SCActionDragDrop38546_droppedOutsideTargetActions", function(event) {
	if (window.obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38485_SCActionDragDrop38546_droppedOutsideTargetActions is still running");
	return;
}
var obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_runningActionsCount = 0;
var obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_loopCount = 0;
obj38485_SCActionDragDrop38546_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj38485: Event droppedInsideTargetActions_6
 *
 */
$("#obj38485").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj38485_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38485_droppedInsideTargetActions_6 is still running");
	return;
}
var obj38485_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj38485_droppedInsideTargetActions_6_loopCount = 0;
obj38485_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj38485: Event droppedInsideTargetActions_5
 *
 */
$("#obj38485").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj38485_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38485_droppedInsideTargetActions_5 is still running");
	return;
}
var obj38485_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj38485_droppedInsideTargetActions_5_loopCount = 0;
obj38485_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj38485: Event droppedInsideTargetActions_4
 *
 */
$("#obj38485").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj38485_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38485_droppedInsideTargetActions_4 is still running");
	return;
}
var obj38485_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj38485_droppedInsideTargetActions_4_loopCount = 0;
obj38485_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj38485: Event droppedInsideTargetActions_3
 *
 */
$("#obj38485").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj38485_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38485_droppedInsideTargetActions_3 is still running");
	return;
}
var obj38485_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj38485_droppedInsideTargetActions_3_loopCount = 0;
obj38485_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj38485: Event droppedInsideTargetActions_2
 *
 */
$("#obj38485").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj38485_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38485_droppedInsideTargetActions_2 is still running");
	return;
}
var obj38485_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj38485_droppedInsideTargetActions_2_loopCount = 0;
obj38485_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj38485: Event droppedInsideTargetActions
 *
 */
$("#obj38485").bind("droppedInsideTargetActions", function(event) {
	if (window.obj38485_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38485_droppedInsideTargetActions is still running");
	return;
}
var obj38485_droppedInsideTargetActions_runningActionsCount = 0;
var obj38485_droppedInsideTargetActions_loopCount = 0;
obj38485_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj38487: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj38487");
	var winTarget = document.getElementById("obj38487");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj38487").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj38487_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj38487_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj38487_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38487_onTouchDown is still running");
	return;
}
var obj38487_onTouchDown_runningActionsCount = 0;
var obj38487_onTouchDown_loopCount = 0;
obj38487_onTouchDown_actionGroup0();
});



/*
 *
 *   obj38487: Event SCActionDragDrop38510_droppedOutsideTargetActions
 *
 */
$("#obj38487").bind("SCActionDragDrop38510_droppedOutsideTargetActions", function(event) {
	if (window.obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38487_SCActionDragDrop38510_droppedOutsideTargetActions is still running");
	return;
}
var obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_runningActionsCount = 0;
var obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_loopCount = 0;
obj38487_SCActionDragDrop38510_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj38487: Event droppedInsideTargetActions_6
 *
 */
$("#obj38487").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj38487_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38487_droppedInsideTargetActions_6 is still running");
	return;
}
var obj38487_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj38487_droppedInsideTargetActions_6_loopCount = 0;
obj38487_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj38487: Event droppedInsideTargetActions_5
 *
 */
$("#obj38487").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj38487_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38487_droppedInsideTargetActions_5 is still running");
	return;
}
var obj38487_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj38487_droppedInsideTargetActions_5_loopCount = 0;
obj38487_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj38487: Event droppedInsideTargetActions_4
 *
 */
$("#obj38487").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj38487_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38487_droppedInsideTargetActions_4 is still running");
	return;
}
var obj38487_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj38487_droppedInsideTargetActions_4_loopCount = 0;
obj38487_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj38487: Event droppedInsideTargetActions_3
 *
 */
$("#obj38487").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj38487_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38487_droppedInsideTargetActions_3 is still running");
	return;
}
var obj38487_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj38487_droppedInsideTargetActions_3_loopCount = 0;
obj38487_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj38487: Event droppedInsideTargetActions_2
 *
 */
$("#obj38487").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj38487_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38487_droppedInsideTargetActions_2 is still running");
	return;
}
var obj38487_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj38487_droppedInsideTargetActions_2_loopCount = 0;
obj38487_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj38487: Event droppedInsideTargetActions
 *
 */
$("#obj38487").bind("droppedInsideTargetActions", function(event) {
	if (window.obj38487_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38487_droppedInsideTargetActions is still running");
	return;
}
var obj38487_droppedInsideTargetActions_runningActionsCount = 0;
var obj38487_droppedInsideTargetActions_loopCount = 0;
obj38487_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj38489: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj38489");
	var winTarget = document.getElementById("obj38489");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj38489").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj38489_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj38489_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj38489_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38489_onTouchDown is still running");
	return;
}
var obj38489_onTouchDown_runningActionsCount = 0;
var obj38489_onTouchDown_loopCount = 0;
obj38489_onTouchDown_actionGroup0();
});



/*
 *
 *   obj38489: Event SCActionDragDrop38558_droppedOutsideTargetActions
 *
 */
$("#obj38489").bind("SCActionDragDrop38558_droppedOutsideTargetActions", function(event) {
	if (window.obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38489_SCActionDragDrop38558_droppedOutsideTargetActions is still running");
	return;
}
var obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_runningActionsCount = 0;
var obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_loopCount = 0;
obj38489_SCActionDragDrop38558_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj38489: Event droppedInsideTargetActions_6
 *
 */
$("#obj38489").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj38489_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38489_droppedInsideTargetActions_6 is still running");
	return;
}
var obj38489_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj38489_droppedInsideTargetActions_6_loopCount = 0;
obj38489_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj38489: Event droppedInsideTargetActions_5
 *
 */
$("#obj38489").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj38489_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38489_droppedInsideTargetActions_5 is still running");
	return;
}
var obj38489_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj38489_droppedInsideTargetActions_5_loopCount = 0;
obj38489_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj38489: Event droppedInsideTargetActions_4
 *
 */
$("#obj38489").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj38489_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38489_droppedInsideTargetActions_4 is still running");
	return;
}
var obj38489_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj38489_droppedInsideTargetActions_4_loopCount = 0;
obj38489_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj38489: Event droppedInsideTargetActions_3
 *
 */
$("#obj38489").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj38489_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38489_droppedInsideTargetActions_3 is still running");
	return;
}
var obj38489_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj38489_droppedInsideTargetActions_3_loopCount = 0;
obj38489_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj38489: Event droppedInsideTargetActions_2
 *
 */
$("#obj38489").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj38489_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38489_droppedInsideTargetActions_2 is still running");
	return;
}
var obj38489_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj38489_droppedInsideTargetActions_2_loopCount = 0;
obj38489_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj38489: Event droppedInsideTargetActions
 *
 */
$("#obj38489").bind("droppedInsideTargetActions", function(event) {
	if (window.obj38489_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38489_droppedInsideTargetActions is still running");
	return;
}
var obj38489_droppedInsideTargetActions_runningActionsCount = 0;
var obj38489_droppedInsideTargetActions_loopCount = 0;
obj38489_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj67070: Event Touch Down
 *
 */
$("#obj67070").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67070_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67070_onTap is still running");
	return;
}
var obj67070_onTap_runningActionsCount = 0;
var obj67070_onTap_loopCount = 0;
obj67070_onTap_actionGroup0();
});










/*
 *
 *   obj67062: Event Touch Down
 *
 */
$("#obj67062").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67062_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67062_onTap is still running");
	return;
}
var obj67062_onTap_runningActionsCount = 0;
var obj67062_onTap_loopCount = 0;
obj67062_onTap_actionGroup0();
});










/*
 *
 *   obj88417: Event Touch Down
 *
 */
$("#obj88417").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88417_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88417_onTap is still running");
	return;
}
var obj88417_onTap_runningActionsCount = 0;
var obj88417_onTap_loopCount = 0;
obj88417_onTap_actionGroup0();
});










/*
 *
 *   obj88412: Event Touch Down
 *
 */
$("#obj88412").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88412_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88412_onTap is still running");
	return;
}
var obj88412_onTap_runningActionsCount = 0;
var obj88412_onTap_loopCount = 0;
obj88412_onTap_actionGroup0();
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
	
$("#obj38456").trigger('SCEventShow');
$("#obj38440").trigger('SCEventShow');
$("#obj38437").trigger('SCEventShow');
$("#obj38433").trigger('SCEventShow');
$("#obj38431").trigger('SCEventShow');
$("#obj38429").trigger('SCEventShow');
$("#obj38427").trigger('SCEventShow');
$("#obj38425").trigger('SCEventShow');
$("#obj38423").trigger('SCEventShow');
$("#obj38458").trigger('SCEventShow');
$("#obj38409").trigger('SCEventShow');
$("#obj38407").trigger('SCEventShow');
$("#obj38406").trigger('SCEventShow');
$("#obj38405").trigger('SCEventShow');
$("#obj38421").trigger('SCEventShow');
$("#obj38415").trigger('SCEventShow');
$("#obj38463").trigger('SCEventShow');
$("#obj38413").trigger('SCEventShow');
$("#obj38465").trigger('SCEventShow');
$("#obj38411").trigger('SCEventShow');
$("#obj38467").trigger('SCEventShow');
$("#obj38477").trigger('SCEventShow');
$("#obj38469").trigger('SCEventShow');
$("#obj38475").trigger('SCEventShow');
$("#obj38471").trigger('SCEventShow');
$("#obj38473").trigger('SCEventShow');
$("#obj38479").trigger('SCEventShow');
$("#obj38481").trigger('SCEventShow');
$("#obj38483").trigger('SCEventShow');
$("#obj38485").trigger('SCEventShow');
$("#obj38487").trigger('SCEventShow');
$("#obj38489").trigger('SCEventShow');
$("#obj67070").trigger('SCEventShow');
$("#obj67062").trigger('SCEventShow');
$("#obj88417").trigger('SCEventShow');
$("#obj88412").trigger('SCEventShow');
$("#obj88422").trigger('SCEventShow');
$("#obj94887").trigger('SCEventShow');
$("#obj67076").trigger('SCEventShow');
	
});