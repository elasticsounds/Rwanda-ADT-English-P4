pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 15416;
pubcoder.page.title = pubcoder.page.title || "64";
pubcoder.page.number = pubcoder.page.number || 64;
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
var obj74868_onTap_activeActionGroupIndex = -1;
var obj74868_onTap_runningActionsCount = 0;
var obj74868_onTap_loopCount = 0;
var obj74865_onTap_activeActionGroupIndex = -1;
var obj74865_onTap_runningActionsCount = 0;
var obj74865_onTap_loopCount = 0;
var obj74861_onTap_activeActionGroupIndex = -1;
var obj74861_onTap_runningActionsCount = 0;
var obj74861_onTap_loopCount = 0;
var obj74794_onTap_activeActionGroupIndex = -1;
var obj74794_onTap_runningActionsCount = 0;
var obj74794_onTap_loopCount = 0;
var obj74728_onDrag_activeActionGroupIndex = -1;
var obj74728_onDrag_runningActionsCount = 0;
var obj74728_onDrag_loopCount = 0;
var obj74728_onTouchDown_activeActionGroupIndex = -1;
var obj74728_onTouchDown_runningActionsCount = 0;
var obj74728_onTouchDown_loopCount = 0;
var obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_runningActionsCount = 0;
var obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_loopCount = 0;
var obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj74728_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj74728_droppedInsideTargetActions_5_loopCount = 0;
var obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj74728_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj74728_droppedInsideTargetActions_4_loopCount = 0;
var obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj74728_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj74728_droppedInsideTargetActions_3_loopCount = 0;
var obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj74728_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj74728_droppedInsideTargetActions_2_loopCount = 0;
var obj74728_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj74728_droppedInsideTargetActions_runningActionsCount = 0;
var obj74728_droppedInsideTargetActions_loopCount = 0;
var obj74662_onDrag_activeActionGroupIndex = -1;
var obj74662_onDrag_runningActionsCount = 0;
var obj74662_onDrag_loopCount = 0;
var obj74662_onTouchDown_activeActionGroupIndex = -1;
var obj74662_onTouchDown_runningActionsCount = 0;
var obj74662_onTouchDown_loopCount = 0;
var obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_runningActionsCount = 0;
var obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_loopCount = 0;
var obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj74662_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj74662_droppedInsideTargetActions_5_loopCount = 0;
var obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj74662_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj74662_droppedInsideTargetActions_4_loopCount = 0;
var obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj74662_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj74662_droppedInsideTargetActions_3_loopCount = 0;
var obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj74662_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj74662_droppedInsideTargetActions_2_loopCount = 0;
var obj74662_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj74662_droppedInsideTargetActions_runningActionsCount = 0;
var obj74662_droppedInsideTargetActions_loopCount = 0;
var obj74596_onDrag_activeActionGroupIndex = -1;
var obj74596_onDrag_runningActionsCount = 0;
var obj74596_onDrag_loopCount = 0;
var obj74596_onTouchDown_activeActionGroupIndex = -1;
var obj74596_onTouchDown_runningActionsCount = 0;
var obj74596_onTouchDown_loopCount = 0;
var obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_runningActionsCount = 0;
var obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_loopCount = 0;
var obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj74596_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj74596_droppedInsideTargetActions_5_loopCount = 0;
var obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj74596_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj74596_droppedInsideTargetActions_4_loopCount = 0;
var obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj74596_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj74596_droppedInsideTargetActions_3_loopCount = 0;
var obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj74596_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj74596_droppedInsideTargetActions_2_loopCount = 0;
var obj74596_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj74596_droppedInsideTargetActions_runningActionsCount = 0;
var obj74596_droppedInsideTargetActions_loopCount = 0;
var obj74530_onDrag_activeActionGroupIndex = -1;
var obj74530_onDrag_runningActionsCount = 0;
var obj74530_onDrag_loopCount = 0;
var obj74530_onTouchDown_activeActionGroupIndex = -1;
var obj74530_onTouchDown_runningActionsCount = 0;
var obj74530_onTouchDown_loopCount = 0;
var obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_runningActionsCount = 0;
var obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_loopCount = 0;
var obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj74530_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj74530_droppedInsideTargetActions_5_loopCount = 0;
var obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj74530_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj74530_droppedInsideTargetActions_4_loopCount = 0;
var obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj74530_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj74530_droppedInsideTargetActions_3_loopCount = 0;
var obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj74530_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj74530_droppedInsideTargetActions_2_loopCount = 0;
var obj74530_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj74530_droppedInsideTargetActions_runningActionsCount = 0;
var obj74530_droppedInsideTargetActions_loopCount = 0;
var obj74464_onDrag_activeActionGroupIndex = -1;
var obj74464_onDrag_runningActionsCount = 0;
var obj74464_onDrag_loopCount = 0;
var obj74464_onTouchDown_activeActionGroupIndex = -1;
var obj74464_onTouchDown_runningActionsCount = 0;
var obj74464_onTouchDown_loopCount = 0;
var obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_runningActionsCount = 0;
var obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_loopCount = 0;
var obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj74464_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj74464_droppedInsideTargetActions_5_loopCount = 0;
var obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj74464_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj74464_droppedInsideTargetActions_4_loopCount = 0;
var obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj74464_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj74464_droppedInsideTargetActions_3_loopCount = 0;
var obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj74464_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj74464_droppedInsideTargetActions_2_loopCount = 0;
var obj74464_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj74464_droppedInsideTargetActions_runningActionsCount = 0;
var obj74464_droppedInsideTargetActions_loopCount = 0;
var obj74446_onTap_activeActionGroupIndex = -1;
var obj74446_onTap_runningActionsCount = 0;
var obj74446_onTap_loopCount = 0;
var obj74438_onTap_activeActionGroupIndex = -1;
var obj74438_onTap_runningActionsCount = 0;
var obj74438_onTap_loopCount = 0;
var obj87501_onTap_activeActionGroupIndex = -1;
var obj87501_onTap_runningActionsCount = 0;
var obj87501_onTap_loopCount = 0;
var obj87496_onTap_activeActionGroupIndex = -1;
var obj87496_onTap_runningActionsCount = 0;
var obj87496_onTap_loopCount = 0;
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
		
obj74868_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74868_onTap_activeActionGroupIndex = -1;
		$("#obj74868").trigger("obj74868_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74868) {
				console.warn("de-queueing event obj74868." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74868").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74868_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74880();
function goToPage_74880() {
	window.obj74868_onTap_runningActionsCount = obj74868_onTap_runningActionsCount + 1;
	$("#anchor381")[0].click();
	window.obj74868_onTap_runningActionsCount = window.obj74868_onTap_runningActionsCount - 1;
if (window.obj74868_onTap_runningActionsCount < 0) {
	window.obj74868_onTap_runningActionsCount = 0;
} else if (window.obj74868_onTap_runningActionsCount == 0) {
	obj74868_onTap_actionGroup1();
}
}





















};
obj74868_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74868_onTap_activeActionGroupIndex = -1;
		$("#obj74868").trigger("obj74868_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74868) {
				console.warn("de-queueing event obj74868." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74868").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74868_onTap_activeActionGroupIndex = 1;
	





















};
obj74865_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74865_onTap_activeActionGroupIndex = -1;
		$("#obj74865").trigger("obj74865_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74865) {
				console.warn("de-queueing event obj74865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74865_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74867();
function goToPage_74867() {
	window.obj74865_onTap_runningActionsCount = obj74865_onTap_runningActionsCount + 1;
	$("#anchor382")[0].click();
	window.obj74865_onTap_runningActionsCount = window.obj74865_onTap_runningActionsCount - 1;
if (window.obj74865_onTap_runningActionsCount < 0) {
	window.obj74865_onTap_runningActionsCount = 0;
} else if (window.obj74865_onTap_runningActionsCount == 0) {
	obj74865_onTap_actionGroup1();
}
}





















};
obj74865_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74865_onTap_activeActionGroupIndex = -1;
		$("#obj74865").trigger("obj74865_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74865) {
				console.warn("de-queueing event obj74865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74865_onTap_activeActionGroupIndex = 1;
	





















};
obj74861_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74861_onTap_activeActionGroupIndex = -1;
		$("#obj74861").trigger("obj74861_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74861) {
				console.warn("de-queueing event obj74861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74861_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74863();
function goToPage_74863() {
	window.obj74861_onTap_runningActionsCount = obj74861_onTap_runningActionsCount + 1;
	$("#anchor383")[0].click();
	window.obj74861_onTap_runningActionsCount = window.obj74861_onTap_runningActionsCount - 1;
if (window.obj74861_onTap_runningActionsCount < 0) {
	window.obj74861_onTap_runningActionsCount = 0;
} else if (window.obj74861_onTap_runningActionsCount == 0) {
	obj74861_onTap_actionGroup1();
}
}





















};
obj74861_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74861_onTap_activeActionGroupIndex = -1;
		$("#obj74861").trigger("obj74861_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74861) {
				console.warn("de-queueing event obj74861." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74861").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74861_onTap_activeActionGroupIndex = 1;
	





















};
obj74794_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74794_onTap_activeActionGroupIndex = -1;
		$("#obj74794").trigger("obj74794_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74794) {
				console.warn("de-queueing event obj74794." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74794").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74794_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74796();
function goToPage_74796() {
	window.obj74794_onTap_runningActionsCount = obj74794_onTap_runningActionsCount + 1;
	$("#anchor386")[0].click();
	window.obj74794_onTap_runningActionsCount = window.obj74794_onTap_runningActionsCount - 1;
if (window.obj74794_onTap_runningActionsCount < 0) {
	window.obj74794_onTap_runningActionsCount = 0;
} else if (window.obj74794_onTap_runningActionsCount == 0) {
	obj74794_onTap_actionGroup1();
}
}





















};
obj74794_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74794_onTap_activeActionGroupIndex = -1;
		$("#obj74794").trigger("obj74794_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74794) {
				console.warn("de-queueing event obj74794." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74794").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74794_onTap_activeActionGroupIndex = 1;
	





















};
obj74728_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_onTouchDown_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj74728");
//	action: dragDrop
//	target: obj74728 
dragDrop_74731();
function dragDrop_74731() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj74728_onTouchDown_runningActionsCount = obj74728_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj74728');
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
	  	containerNode = $('#obj74853');
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
    	window.obj74728_onTouchDown_runningActionsCount = window.obj74728_onTouchDown_runningActionsCount - 1;
if (window.obj74728_onTouchDown_runningActionsCount < 0) {
	window.obj74728_onTouchDown_runningActionsCount = 0;
} else if (window.obj74728_onTouchDown_runningActionsCount == 0) {
	obj74728_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj74843","#obj74845","#obj74837","#obj74835","#obj74829");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_74731 = false;
    	var dropped_id_74731;
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
					dropped_74731 = true;
					dropped_id_74731 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_74731) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj74728").trigger('SCActionDragDrop74731_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj74728_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74728_onTouchDown_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj74728 
move_92298();
function move_92298() {
	window.obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_runningActionsCount = obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj74728");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 127;
	var moveY = 593;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_runningActionsCount = window.obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj74728_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74781();
function runjs_74781() {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = obj74728_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74829").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_5_runningActionsCount = window.obj74728_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74782();
function runjs_74782() {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = obj74728_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74829").css("border-color", "#C00000"); $("#obj74829").css("border-width", "2px"); $("#obj74829").css("border-style", "solid"); $("#obj74829").css("border-radius", "0px"); $("#obj74829").css("-webkit-border-radius", "0px"); $("#obj74829").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_5_runningActionsCount = window.obj74728_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74807 
hide_74783();
function hide_74783() {
	var selector = "#obj74807";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = obj74728_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74728_droppedInsideTargetActions_5_runningActionsCount = window.obj74728_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74783(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74728_droppedInsideTargetActions_5_runningActionsCount = window.obj74728_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74728_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74784();
function runjs_74784() {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = obj74728_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74728").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_5_runningActionsCount = window.obj74728_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74785();
function switchText_74785() {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = obj74728_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74728_droppedInsideTargetActions_5_runningActionsCount = window.obj74728_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74728_droppedInsideTargetActions_5_runningActionsCount = window.obj74728_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj74728_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74728 
move_74786();
function move_74786() {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = obj74728_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj74728");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 127;
	var moveY = 593;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74728_droppedInsideTargetActions_5_runningActionsCount = window.obj74728_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj74728_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74787();
function runjs_74787() {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = obj74728_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74829").css("background-color", "#F2F2F2");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_5_runningActionsCount = window.obj74728_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74788();
function runjs_74788() {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = obj74728_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74829").css("border-color", "#000000"); $("#obj74829").css("border-width", "1px"); $("#obj74829").css("border-style", "solid"); $("#obj74829").css("border-radius", "0px"); $("#obj74829").css("-webkit-border-radius", "0px"); $("#obj74829").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_5_runningActionsCount = window.obj74728_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74807
(function(){
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = obj74728_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj74807";
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
					window.obj74728_droppedInsideTargetActions_5_runningActionsCount = window.obj74728_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj74728_droppedInsideTargetActions_5_runningActionsCount = window.obj74728_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74728_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74790();
function runjs_74790() {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = obj74728_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74728").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_5_runningActionsCount = window.obj74728_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74791();
function runjs_74791() {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = obj74728_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74728").css("border-color", "rgba(0,0,0,0)"); $("#obj74728").css("border-width", "0px"); $("#obj74728").css("border-style", "solid"); $("#obj74728").css("border-radius", "10px"); $("#obj74728").css("-webkit-border-radius", "10px"); $("#obj74728").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_5_runningActionsCount = window.obj74728_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74797 
playAudio_74792();
function playAudio_74792() {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = obj74728_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj74797")[0];
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
		    window.obj74728_droppedInsideTargetActions_5_runningActionsCount = window.obj74728_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74728_droppedInsideTargetActions_5_runningActionsCount = window.obj74728_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj74728_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74793();
function switchText_74793() {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = obj74728_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74728_droppedInsideTargetActions_5_runningActionsCount = window.obj74728_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74728_droppedInsideTargetActions_5_runningActionsCount = window.obj74728_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj74728_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj74728_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74767();
function runjs_74767() {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = obj74728_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74835").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_4_runningActionsCount = window.obj74728_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74768();
function runjs_74768() {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = obj74728_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74835").css("border-color", "#C00000"); $("#obj74835").css("border-width", "2px"); $("#obj74835").css("border-style", "solid"); $("#obj74835").css("border-radius", "0px"); $("#obj74835").css("-webkit-border-radius", "0px"); $("#obj74835").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_4_runningActionsCount = window.obj74728_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74813 
hide_74769();
function hide_74769() {
	var selector = "#obj74813";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = obj74728_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74728_droppedInsideTargetActions_4_runningActionsCount = window.obj74728_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74769(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74728_droppedInsideTargetActions_4_runningActionsCount = window.obj74728_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74728_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74770();
function runjs_74770() {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = obj74728_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74728").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_4_runningActionsCount = window.obj74728_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74771();
function switchText_74771() {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = obj74728_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74728_droppedInsideTargetActions_4_runningActionsCount = window.obj74728_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74728_droppedInsideTargetActions_4_runningActionsCount = window.obj74728_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj74728_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74728 
move_74772();
function move_74772() {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = obj74728_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj74728");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 127;
	var moveY = 593;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74728_droppedInsideTargetActions_4_runningActionsCount = window.obj74728_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj74728_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74773();
function runjs_74773() {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = obj74728_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74835").css("background-color", "#F2F2F2");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_4_runningActionsCount = window.obj74728_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74774();
function runjs_74774() {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = obj74728_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74835").css("border-color", "#000000"); $("#obj74835").css("border-width", "1px"); $("#obj74835").css("border-style", "solid"); $("#obj74835").css("border-radius", "0px"); $("#obj74835").css("-webkit-border-radius", "0px"); $("#obj74835").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_4_runningActionsCount = window.obj74728_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74813
(function(){
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = obj74728_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj74813";
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
					window.obj74728_droppedInsideTargetActions_4_runningActionsCount = window.obj74728_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj74728_droppedInsideTargetActions_4_runningActionsCount = window.obj74728_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74728_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74776();
function runjs_74776() {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = obj74728_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74728").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_4_runningActionsCount = window.obj74728_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74777();
function runjs_74777() {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = obj74728_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74728").css("border-color", "rgba(0,0,0,0)"); $("#obj74728").css("border-width", "0px"); $("#obj74728").css("border-style", "solid"); $("#obj74728").css("border-radius", "10px"); $("#obj74728").css("-webkit-border-radius", "10px"); $("#obj74728").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_4_runningActionsCount = window.obj74728_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74797 
playAudio_74778();
function playAudio_74778() {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = obj74728_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj74797")[0];
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
		    window.obj74728_droppedInsideTargetActions_4_runningActionsCount = window.obj74728_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74728_droppedInsideTargetActions_4_runningActionsCount = window.obj74728_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj74728_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74779();
function switchText_74779() {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = obj74728_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74728_droppedInsideTargetActions_4_runningActionsCount = window.obj74728_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74728_droppedInsideTargetActions_4_runningActionsCount = window.obj74728_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj74728_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj74728_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74753();
function runjs_74753() {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = obj74728_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74837").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_3_runningActionsCount = window.obj74728_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74754();
function runjs_74754() {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = obj74728_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74837").css("border-color", "#C00000"); $("#obj74837").css("border-width", "2px"); $("#obj74837").css("border-style", "solid"); $("#obj74837").css("border-radius", "0px"); $("#obj74837").css("-webkit-border-radius", "0px"); $("#obj74837").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_3_runningActionsCount = window.obj74728_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74815 
hide_74755();
function hide_74755() {
	var selector = "#obj74815";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = obj74728_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74728_droppedInsideTargetActions_3_runningActionsCount = window.obj74728_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74755(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74728_droppedInsideTargetActions_3_runningActionsCount = window.obj74728_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74728_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74756();
function runjs_74756() {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = obj74728_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74728").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_3_runningActionsCount = window.obj74728_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74757();
function switchText_74757() {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = obj74728_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74728_droppedInsideTargetActions_3_runningActionsCount = window.obj74728_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74728_droppedInsideTargetActions_3_runningActionsCount = window.obj74728_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj74728_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74728 
move_74758();
function move_74758() {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = obj74728_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj74728");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 127;
	var moveY = 593;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74728_droppedInsideTargetActions_3_runningActionsCount = window.obj74728_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj74728_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74759();
function runjs_74759() {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = obj74728_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74837").css("background-color", "#F2F2F2");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_3_runningActionsCount = window.obj74728_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74760();
function runjs_74760() {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = obj74728_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74837").css("border-color", "#000000"); $("#obj74837").css("border-width", "1px"); $("#obj74837").css("border-style", "solid"); $("#obj74837").css("border-radius", "0px"); $("#obj74837").css("-webkit-border-radius", "0px"); $("#obj74837").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_3_runningActionsCount = window.obj74728_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74815
(function(){
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = obj74728_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj74815";
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
					window.obj74728_droppedInsideTargetActions_3_runningActionsCount = window.obj74728_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj74728_droppedInsideTargetActions_3_runningActionsCount = window.obj74728_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74728_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74762();
function runjs_74762() {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = obj74728_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74728").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_3_runningActionsCount = window.obj74728_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74763();
function runjs_74763() {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = obj74728_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74728").css("border-color", "rgba(0,0,0,0)"); $("#obj74728").css("border-width", "0px"); $("#obj74728").css("border-style", "solid"); $("#obj74728").css("border-radius", "10px"); $("#obj74728").css("-webkit-border-radius", "10px"); $("#obj74728").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_3_runningActionsCount = window.obj74728_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74797 
playAudio_74764();
function playAudio_74764() {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = obj74728_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj74797")[0];
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
		    window.obj74728_droppedInsideTargetActions_3_runningActionsCount = window.obj74728_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74728_droppedInsideTargetActions_3_runningActionsCount = window.obj74728_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj74728_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74765();
function switchText_74765() {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = obj74728_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74728_droppedInsideTargetActions_3_runningActionsCount = window.obj74728_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74728_droppedInsideTargetActions_3_runningActionsCount = window.obj74728_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj74728_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj74728_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74739();
function runjs_74739() {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = obj74728_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74845").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_2_runningActionsCount = window.obj74728_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74740();
function runjs_74740() {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = obj74728_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74845").css("border-color", "#C00000"); $("#obj74845").css("border-width", "2px"); $("#obj74845").css("border-style", "solid"); $("#obj74845").css("border-radius", "10px"); $("#obj74845").css("-webkit-border-radius", "10px"); $("#obj74845").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_2_runningActionsCount = window.obj74728_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74823 
hide_74741();
function hide_74741() {
	var selector = "#obj74823";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = obj74728_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74728_droppedInsideTargetActions_2_runningActionsCount = window.obj74728_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74741(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74728_droppedInsideTargetActions_2_runningActionsCount = window.obj74728_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74728_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74742();
function runjs_74742() {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = obj74728_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74728").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_2_runningActionsCount = window.obj74728_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74743();
function switchText_74743() {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = obj74728_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74728_droppedInsideTargetActions_2_runningActionsCount = window.obj74728_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74728_droppedInsideTargetActions_2_runningActionsCount = window.obj74728_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj74728_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74728 
move_74744();
function move_74744() {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = obj74728_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj74728");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 127;
	var moveY = 593;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74728_droppedInsideTargetActions_2_runningActionsCount = window.obj74728_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj74728_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74745();
function runjs_74745() {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = obj74728_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74845").css("background-color", "#F2F2F2");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_2_runningActionsCount = window.obj74728_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74746();
function runjs_74746() {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = obj74728_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74845").css("border-color", "#000000"); $("#obj74845").css("border-width", "1px"); $("#obj74845").css("border-style", "solid"); $("#obj74845").css("border-radius", "0px"); $("#obj74845").css("-webkit-border-radius", "0px"); $("#obj74845").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_2_runningActionsCount = window.obj74728_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74823
(function(){
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = obj74728_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj74823";
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
					window.obj74728_droppedInsideTargetActions_2_runningActionsCount = window.obj74728_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj74728_droppedInsideTargetActions_2_runningActionsCount = window.obj74728_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74728_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74748();
function runjs_74748() {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = obj74728_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74728").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_2_runningActionsCount = window.obj74728_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74749();
function runjs_74749() {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = obj74728_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74728").css("border-color", "rgba(0,0,0,0)"); $("#obj74728").css("border-width", "0px"); $("#obj74728").css("border-style", "solid"); $("#obj74728").css("border-radius", "10px"); $("#obj74728").css("-webkit-border-radius", "10px"); $("#obj74728").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_2_runningActionsCount = window.obj74728_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74797 
playAudio_74750();
function playAudio_74750() {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = obj74728_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj74797")[0];
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
		    window.obj74728_droppedInsideTargetActions_2_runningActionsCount = window.obj74728_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74728_droppedInsideTargetActions_2_runningActionsCount = window.obj74728_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj74728_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74751();
function switchText_74751() {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = obj74728_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74728_droppedInsideTargetActions_2_runningActionsCount = window.obj74728_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74728_droppedInsideTargetActions_2_runningActionsCount = window.obj74728_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj74728_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj74728_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74733();
function runjs_74733() {
	window.obj74728_droppedInsideTargetActions_runningActionsCount = obj74728_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74843").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_runningActionsCount = window.obj74728_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_74736();
function switchText_74736() {
	window.obj74728_droppedInsideTargetActions_runningActionsCount = obj74728_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74728_droppedInsideTargetActions_runningActionsCount = window.obj74728_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74728_droppedInsideTargetActions_runningActionsCount = window.obj74728_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj74728_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74821 
hide_74734();
function hide_74734() {
	var selector = "#obj74821";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74728_droppedInsideTargetActions_runningActionsCount = obj74728_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74728_droppedInsideTargetActions_runningActionsCount = window.obj74728_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74734(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74728_droppedInsideTargetActions_runningActionsCount = window.obj74728_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74728_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74735();
function runjs_74735() {
	window.obj74728_droppedInsideTargetActions_runningActionsCount = obj74728_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74728").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74728_droppedInsideTargetActions_runningActionsCount = window.obj74728_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj74728_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj74799 
playAudio_74737();
function playAudio_74737() {
	window.obj74728_droppedInsideTargetActions_runningActionsCount = obj74728_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj74799")[0];
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
		    window.obj74728_droppedInsideTargetActions_runningActionsCount = window.obj74728_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74728_droppedInsideTargetActions_runningActionsCount = window.obj74728_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj74728_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90187();
function switchText_90187() {
	window.obj74728_droppedInsideTargetActions_runningActionsCount = obj74728_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74728_droppedInsideTargetActions_runningActionsCount = window.obj74728_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74728_droppedInsideTargetActions_runningActionsCount = window.obj74728_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74728_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74728_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74728_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74728_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj74728_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74728_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74728").trigger("obj74728_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74728) {
				console.warn("de-queueing event obj74728." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74728").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74728_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj74662_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_onTouchDown_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj74662");
//	action: dragDrop
//	target: obj74662 
dragDrop_74665();
function dragDrop_74665() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj74662_onTouchDown_runningActionsCount = obj74662_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj74662');
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
	  	containerNode = $('#obj74853');
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
    	window.obj74662_onTouchDown_runningActionsCount = window.obj74662_onTouchDown_runningActionsCount - 1;
if (window.obj74662_onTouchDown_runningActionsCount < 0) {
	window.obj74662_onTouchDown_runningActionsCount = 0;
} else if (window.obj74662_onTouchDown_runningActionsCount == 0) {
	obj74662_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj74829","#obj74845","#obj74843","#obj74837","#obj74835");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_74665 = false;
    	var dropped_id_74665;
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
					dropped_74665 = true;
					dropped_id_74665 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_74665) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj74662").trigger('SCActionDragDrop74665_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj74662_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74662_onTouchDown_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj74662 
move_92302();
function move_92302() {
	window.obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_runningActionsCount = obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj74662");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 249;
	var moveY = 593;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_runningActionsCount = window.obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj74662_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74715();
function runjs_74715() {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = obj74662_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74835").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_5_runningActionsCount = window.obj74662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74716();
function runjs_74716() {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = obj74662_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74835").css("border-color", "#C00000"); $("#obj74835").css("border-width", "2px"); $("#obj74835").css("border-style", "solid"); $("#obj74835").css("border-radius", "0px"); $("#obj74835").css("-webkit-border-radius", "0px"); $("#obj74835").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_5_runningActionsCount = window.obj74662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74813 
hide_74717();
function hide_74717() {
	var selector = "#obj74813";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = obj74662_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74662_droppedInsideTargetActions_5_runningActionsCount = window.obj74662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74717(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74662_droppedInsideTargetActions_5_runningActionsCount = window.obj74662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74662_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74718();
function runjs_74718() {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = obj74662_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74662").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_5_runningActionsCount = window.obj74662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74719();
function switchText_74719() {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = obj74662_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74662_droppedInsideTargetActions_5_runningActionsCount = window.obj74662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74662_droppedInsideTargetActions_5_runningActionsCount = window.obj74662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj74662_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74662 
move_74720();
function move_74720() {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = obj74662_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj74662");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 249;
	var moveY = 593;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74662_droppedInsideTargetActions_5_runningActionsCount = window.obj74662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj74662_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74721();
function runjs_74721() {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = obj74662_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74835").css("background-color", "#F2F2F2");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_5_runningActionsCount = window.obj74662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74722();
function runjs_74722() {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = obj74662_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74835").css("border-color", "#000000"); $("#obj74835").css("border-width", "1px"); $("#obj74835").css("border-style", "solid"); $("#obj74835").css("border-radius", "0px"); $("#obj74835").css("-webkit-border-radius", "0px"); $("#obj74835").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_5_runningActionsCount = window.obj74662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74813
(function(){
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = obj74662_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj74813";
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
					window.obj74662_droppedInsideTargetActions_5_runningActionsCount = window.obj74662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj74662_droppedInsideTargetActions_5_runningActionsCount = window.obj74662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74662_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74724();
function runjs_74724() {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = obj74662_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74662").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_5_runningActionsCount = window.obj74662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74725();
function runjs_74725() {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = obj74662_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74662").css("border-color", "rgba(0,0,0,0)"); $("#obj74662").css("border-width", "0px"); $("#obj74662").css("border-style", "solid"); $("#obj74662").css("border-radius", "10px"); $("#obj74662").css("-webkit-border-radius", "10px"); $("#obj74662").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_5_runningActionsCount = window.obj74662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74797 
playAudio_74726();
function playAudio_74726() {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = obj74662_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj74797")[0];
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
		    window.obj74662_droppedInsideTargetActions_5_runningActionsCount = window.obj74662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74662_droppedInsideTargetActions_5_runningActionsCount = window.obj74662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj74662_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74727();
function switchText_74727() {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = obj74662_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74662_droppedInsideTargetActions_5_runningActionsCount = window.obj74662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74662_droppedInsideTargetActions_5_runningActionsCount = window.obj74662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj74662_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj74662_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74701();
function runjs_74701() {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = obj74662_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74837").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_4_runningActionsCount = window.obj74662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74702();
function runjs_74702() {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = obj74662_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74837").css("border-color", "#C00000"); $("#obj74837").css("border-width", "2px"); $("#obj74837").css("border-style", "solid"); $("#obj74837").css("border-radius", "0px"); $("#obj74837").css("-webkit-border-radius", "0px"); $("#obj74837").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_4_runningActionsCount = window.obj74662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74815 
hide_74703();
function hide_74703() {
	var selector = "#obj74815";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = obj74662_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74662_droppedInsideTargetActions_4_runningActionsCount = window.obj74662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74703(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74662_droppedInsideTargetActions_4_runningActionsCount = window.obj74662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74662_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74704();
function runjs_74704() {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = obj74662_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74662").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_4_runningActionsCount = window.obj74662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74705();
function switchText_74705() {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = obj74662_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74662_droppedInsideTargetActions_4_runningActionsCount = window.obj74662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74662_droppedInsideTargetActions_4_runningActionsCount = window.obj74662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj74662_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74662 
move_74706();
function move_74706() {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = obj74662_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj74662");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 249;
	var moveY = 593;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74662_droppedInsideTargetActions_4_runningActionsCount = window.obj74662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj74662_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74707();
function runjs_74707() {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = obj74662_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74837").css("background-color", "#F2F2F2");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_4_runningActionsCount = window.obj74662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74708();
function runjs_74708() {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = obj74662_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74837").css("border-color", "#000000"); $("#obj74837").css("border-width", "1px"); $("#obj74837").css("border-style", "solid"); $("#obj74837").css("border-radius", "0px"); $("#obj74837").css("-webkit-border-radius", "0px"); $("#obj74837").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_4_runningActionsCount = window.obj74662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74815
(function(){
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = obj74662_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj74815";
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
					window.obj74662_droppedInsideTargetActions_4_runningActionsCount = window.obj74662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj74662_droppedInsideTargetActions_4_runningActionsCount = window.obj74662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74662_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74710();
function runjs_74710() {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = obj74662_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74662").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_4_runningActionsCount = window.obj74662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74711();
function runjs_74711() {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = obj74662_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74662").css("border-color", "rgba(0,0,0,0)"); $("#obj74662").css("border-width", "0px"); $("#obj74662").css("border-style", "solid"); $("#obj74662").css("border-radius", "10px"); $("#obj74662").css("-webkit-border-radius", "10px"); $("#obj74662").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_4_runningActionsCount = window.obj74662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74797 
playAudio_74712();
function playAudio_74712() {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = obj74662_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj74797")[0];
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
		    window.obj74662_droppedInsideTargetActions_4_runningActionsCount = window.obj74662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74662_droppedInsideTargetActions_4_runningActionsCount = window.obj74662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj74662_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74713();
function switchText_74713() {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = obj74662_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74662_droppedInsideTargetActions_4_runningActionsCount = window.obj74662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74662_droppedInsideTargetActions_4_runningActionsCount = window.obj74662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj74662_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj74662_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74687();
function runjs_74687() {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = obj74662_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74843").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_3_runningActionsCount = window.obj74662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74688();
function runjs_74688() {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = obj74662_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74843").css("border-color", "#C00000"); $("#obj74843").css("border-width", "2px"); $("#obj74843").css("border-style", "solid"); $("#obj74843").css("border-radius", "0px"); $("#obj74843").css("-webkit-border-radius", "0px"); $("#obj74843").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_3_runningActionsCount = window.obj74662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74821 
hide_74689();
function hide_74689() {
	var selector = "#obj74821";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = obj74662_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74662_droppedInsideTargetActions_3_runningActionsCount = window.obj74662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74689(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74662_droppedInsideTargetActions_3_runningActionsCount = window.obj74662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74662_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74690();
function runjs_74690() {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = obj74662_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74662").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_3_runningActionsCount = window.obj74662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74691();
function switchText_74691() {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = obj74662_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74662_droppedInsideTargetActions_3_runningActionsCount = window.obj74662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74662_droppedInsideTargetActions_3_runningActionsCount = window.obj74662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj74662_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74662 
move_74692();
function move_74692() {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = obj74662_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj74662");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 249;
	var moveY = 593;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74662_droppedInsideTargetActions_3_runningActionsCount = window.obj74662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj74662_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74693();
function runjs_74693() {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = obj74662_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74843").css("background-color", "#F2F2F2");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_3_runningActionsCount = window.obj74662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74694();
function runjs_74694() {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = obj74662_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74843").css("border-color", "#000000"); $("#obj74843").css("border-width", "1px"); $("#obj74843").css("border-style", "solid"); $("#obj74843").css("border-radius", "0px"); $("#obj74843").css("-webkit-border-radius", "0px"); $("#obj74843").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_3_runningActionsCount = window.obj74662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74821
(function(){
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = obj74662_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj74821";
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
					window.obj74662_droppedInsideTargetActions_3_runningActionsCount = window.obj74662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj74662_droppedInsideTargetActions_3_runningActionsCount = window.obj74662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74662_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74696();
function runjs_74696() {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = obj74662_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74662").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_3_runningActionsCount = window.obj74662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74697();
function runjs_74697() {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = obj74662_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74662").css("border-color", "rgba(0,0,0,0)"); $("#obj74662").css("border-width", "0px"); $("#obj74662").css("border-style", "solid"); $("#obj74662").css("border-radius", "10px"); $("#obj74662").css("-webkit-border-radius", "10px"); $("#obj74662").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_3_runningActionsCount = window.obj74662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74797 
playAudio_74698();
function playAudio_74698() {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = obj74662_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj74797")[0];
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
		    window.obj74662_droppedInsideTargetActions_3_runningActionsCount = window.obj74662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74662_droppedInsideTargetActions_3_runningActionsCount = window.obj74662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj74662_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74699();
function switchText_74699() {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = obj74662_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74662_droppedInsideTargetActions_3_runningActionsCount = window.obj74662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74662_droppedInsideTargetActions_3_runningActionsCount = window.obj74662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj74662_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj74662_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74673();
function runjs_74673() {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = obj74662_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74845").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_2_runningActionsCount = window.obj74662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74674();
function runjs_74674() {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = obj74662_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74845").css("border-color", "#C00000"); $("#obj74845").css("border-width", "2px"); $("#obj74845").css("border-style", "solid"); $("#obj74845").css("border-radius", "10px"); $("#obj74845").css("-webkit-border-radius", "10px"); $("#obj74845").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_2_runningActionsCount = window.obj74662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74823 
hide_74675();
function hide_74675() {
	var selector = "#obj74823";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = obj74662_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74662_droppedInsideTargetActions_2_runningActionsCount = window.obj74662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74675(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74662_droppedInsideTargetActions_2_runningActionsCount = window.obj74662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74662_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74676();
function runjs_74676() {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = obj74662_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74662").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_2_runningActionsCount = window.obj74662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74677();
function switchText_74677() {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = obj74662_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74662_droppedInsideTargetActions_2_runningActionsCount = window.obj74662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74662_droppedInsideTargetActions_2_runningActionsCount = window.obj74662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj74662_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74662 
move_74678();
function move_74678() {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = obj74662_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj74662");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 249;
	var moveY = 593;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74662_droppedInsideTargetActions_2_runningActionsCount = window.obj74662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj74662_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74679();
function runjs_74679() {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = obj74662_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74845").css("background-color", "#F2F2F2");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_2_runningActionsCount = window.obj74662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74680();
function runjs_74680() {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = obj74662_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74845").css("border-color", "#000000"); $("#obj74845").css("border-width", "1px"); $("#obj74845").css("border-style", "solid"); $("#obj74845").css("border-radius", "0px"); $("#obj74845").css("-webkit-border-radius", "0px"); $("#obj74845").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_2_runningActionsCount = window.obj74662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74823
(function(){
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = obj74662_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj74823";
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
					window.obj74662_droppedInsideTargetActions_2_runningActionsCount = window.obj74662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj74662_droppedInsideTargetActions_2_runningActionsCount = window.obj74662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74662_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74682();
function runjs_74682() {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = obj74662_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74662").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_2_runningActionsCount = window.obj74662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74683();
function runjs_74683() {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = obj74662_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74662").css("border-color", "rgba(0,0,0,0)"); $("#obj74662").css("border-width", "0px"); $("#obj74662").css("border-style", "solid"); $("#obj74662").css("border-radius", "10px"); $("#obj74662").css("-webkit-border-radius", "10px"); $("#obj74662").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_2_runningActionsCount = window.obj74662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74797 
playAudio_74684();
function playAudio_74684() {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = obj74662_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj74797")[0];
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
		    window.obj74662_droppedInsideTargetActions_2_runningActionsCount = window.obj74662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74662_droppedInsideTargetActions_2_runningActionsCount = window.obj74662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj74662_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74685();
function switchText_74685() {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = obj74662_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74662_droppedInsideTargetActions_2_runningActionsCount = window.obj74662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74662_droppedInsideTargetActions_2_runningActionsCount = window.obj74662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj74662_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj74662_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74667();
function runjs_74667() {
	window.obj74662_droppedInsideTargetActions_runningActionsCount = obj74662_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74829").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_runningActionsCount = window.obj74662_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_74670();
function switchText_74670() {
	window.obj74662_droppedInsideTargetActions_runningActionsCount = obj74662_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74662_droppedInsideTargetActions_runningActionsCount = window.obj74662_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74662_droppedInsideTargetActions_runningActionsCount = window.obj74662_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj74662_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74807 
hide_74668();
function hide_74668() {
	var selector = "#obj74807";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74662_droppedInsideTargetActions_runningActionsCount = obj74662_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74662_droppedInsideTargetActions_runningActionsCount = window.obj74662_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74668(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74662_droppedInsideTargetActions_runningActionsCount = window.obj74662_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74662_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74669();
function runjs_74669() {
	window.obj74662_droppedInsideTargetActions_runningActionsCount = obj74662_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74662").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74662_droppedInsideTargetActions_runningActionsCount = window.obj74662_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj74662_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj74799 
playAudio_74671();
function playAudio_74671() {
	window.obj74662_droppedInsideTargetActions_runningActionsCount = obj74662_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj74799")[0];
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
		    window.obj74662_droppedInsideTargetActions_runningActionsCount = window.obj74662_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74662_droppedInsideTargetActions_runningActionsCount = window.obj74662_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj74662_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90189();
function switchText_90189() {
	window.obj74662_droppedInsideTargetActions_runningActionsCount = obj74662_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74662_droppedInsideTargetActions_runningActionsCount = window.obj74662_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74662_droppedInsideTargetActions_runningActionsCount = window.obj74662_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74662_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74662_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74662_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74662_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj74662_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74662_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74662").trigger("obj74662_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74662) {
				console.warn("de-queueing event obj74662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74662_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj74596_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_onTouchDown_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj74596");
//	action: dragDrop
//	target: obj74596 
dragDrop_74599();
function dragDrop_74599() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj74596_onTouchDown_runningActionsCount = obj74596_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj74596');
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
	  	containerNode = $('#obj74853');
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
    	window.obj74596_onTouchDown_runningActionsCount = window.obj74596_onTouchDown_runningActionsCount - 1;
if (window.obj74596_onTouchDown_runningActionsCount < 0) {
	window.obj74596_onTouchDown_runningActionsCount = 0;
} else if (window.obj74596_onTouchDown_runningActionsCount == 0) {
	obj74596_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj74837","#obj74845","#obj74843","#obj74835","#obj74829");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_74599 = false;
    	var dropped_id_74599;
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
					dropped_74599 = true;
					dropped_id_74599 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_74599) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj74596").trigger('SCActionDragDrop74599_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj74596_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74596_onTouchDown_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj74596 
move_92300();
function move_92300() {
	window.obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_runningActionsCount = obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj74596");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 127;
	var moveY = 632;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_runningActionsCount = window.obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj74596_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74649();
function runjs_74649() {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = obj74596_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74829").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_5_runningActionsCount = window.obj74596_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74650();
function runjs_74650() {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = obj74596_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74829").css("border-color", "#C00000"); $("#obj74829").css("border-width", "2px"); $("#obj74829").css("border-style", "solid"); $("#obj74829").css("border-radius", "0px"); $("#obj74829").css("-webkit-border-radius", "0px"); $("#obj74829").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_5_runningActionsCount = window.obj74596_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74807 
hide_74651();
function hide_74651() {
	var selector = "#obj74807";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = obj74596_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74596_droppedInsideTargetActions_5_runningActionsCount = window.obj74596_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74651(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74596_droppedInsideTargetActions_5_runningActionsCount = window.obj74596_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74596_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74652();
function runjs_74652() {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = obj74596_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74596").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_5_runningActionsCount = window.obj74596_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74653();
function switchText_74653() {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = obj74596_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74596_droppedInsideTargetActions_5_runningActionsCount = window.obj74596_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74596_droppedInsideTargetActions_5_runningActionsCount = window.obj74596_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj74596_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74596 
move_74654();
function move_74654() {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = obj74596_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj74596");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 127;
	var moveY = 632;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74596_droppedInsideTargetActions_5_runningActionsCount = window.obj74596_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj74596_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74655();
function runjs_74655() {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = obj74596_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74829").css("background-color", "#F2F2F2");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_5_runningActionsCount = window.obj74596_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74656();
function runjs_74656() {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = obj74596_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74829").css("border-color", "#000000"); $("#obj74829").css("border-width", "1px"); $("#obj74829").css("border-style", "solid"); $("#obj74829").css("border-radius", "0px"); $("#obj74829").css("-webkit-border-radius", "0px"); $("#obj74829").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_5_runningActionsCount = window.obj74596_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74807
(function(){
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = obj74596_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj74807";
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
					window.obj74596_droppedInsideTargetActions_5_runningActionsCount = window.obj74596_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj74596_droppedInsideTargetActions_5_runningActionsCount = window.obj74596_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74596_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74658();
function runjs_74658() {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = obj74596_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74596").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_5_runningActionsCount = window.obj74596_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74659();
function runjs_74659() {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = obj74596_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74596").css("border-color", "rgba(0,0,0,0)"); $("#obj74596").css("border-width", "0px"); $("#obj74596").css("border-style", "solid"); $("#obj74596").css("border-radius", "10px"); $("#obj74596").css("-webkit-border-radius", "10px"); $("#obj74596").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_5_runningActionsCount = window.obj74596_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74797 
playAudio_74660();
function playAudio_74660() {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = obj74596_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj74797")[0];
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
		    window.obj74596_droppedInsideTargetActions_5_runningActionsCount = window.obj74596_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74596_droppedInsideTargetActions_5_runningActionsCount = window.obj74596_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj74596_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74661();
function switchText_74661() {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = obj74596_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74596_droppedInsideTargetActions_5_runningActionsCount = window.obj74596_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74596_droppedInsideTargetActions_5_runningActionsCount = window.obj74596_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj74596_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj74596_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74635();
function runjs_74635() {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = obj74596_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74835").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_4_runningActionsCount = window.obj74596_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74636();
function runjs_74636() {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = obj74596_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74835").css("border-color", "#C00000"); $("#obj74835").css("border-width", "2px"); $("#obj74835").css("border-style", "solid"); $("#obj74835").css("border-radius", "0px"); $("#obj74835").css("-webkit-border-radius", "0px"); $("#obj74835").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_4_runningActionsCount = window.obj74596_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74813 
hide_74637();
function hide_74637() {
	var selector = "#obj74813";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = obj74596_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74596_droppedInsideTargetActions_4_runningActionsCount = window.obj74596_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74637(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74596_droppedInsideTargetActions_4_runningActionsCount = window.obj74596_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74596_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74638();
function runjs_74638() {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = obj74596_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74596").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_4_runningActionsCount = window.obj74596_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74639();
function switchText_74639() {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = obj74596_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74596_droppedInsideTargetActions_4_runningActionsCount = window.obj74596_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74596_droppedInsideTargetActions_4_runningActionsCount = window.obj74596_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj74596_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74596 
move_74640();
function move_74640() {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = obj74596_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj74596");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 127;
	var moveY = 632;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74596_droppedInsideTargetActions_4_runningActionsCount = window.obj74596_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj74596_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74641();
function runjs_74641() {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = obj74596_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74835").css("background-color", "#F2F2F2");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_4_runningActionsCount = window.obj74596_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74642();
function runjs_74642() {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = obj74596_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74835").css("border-color", "#000000"); $("#obj74835").css("border-width", "1px"); $("#obj74835").css("border-style", "solid"); $("#obj74835").css("border-radius", "0px"); $("#obj74835").css("-webkit-border-radius", "0px"); $("#obj74835").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_4_runningActionsCount = window.obj74596_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74813
(function(){
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = obj74596_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj74813";
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
					window.obj74596_droppedInsideTargetActions_4_runningActionsCount = window.obj74596_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj74596_droppedInsideTargetActions_4_runningActionsCount = window.obj74596_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74596_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74644();
function runjs_74644() {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = obj74596_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74596").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_4_runningActionsCount = window.obj74596_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74645();
function runjs_74645() {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = obj74596_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74596").css("border-color", "rgba(0,0,0,0)"); $("#obj74596").css("border-width", "0px"); $("#obj74596").css("border-style", "solid"); $("#obj74596").css("border-radius", "10px"); $("#obj74596").css("-webkit-border-radius", "10px"); $("#obj74596").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_4_runningActionsCount = window.obj74596_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74797 
playAudio_74646();
function playAudio_74646() {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = obj74596_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj74797")[0];
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
		    window.obj74596_droppedInsideTargetActions_4_runningActionsCount = window.obj74596_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74596_droppedInsideTargetActions_4_runningActionsCount = window.obj74596_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj74596_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74647();
function switchText_74647() {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = obj74596_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74596_droppedInsideTargetActions_4_runningActionsCount = window.obj74596_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74596_droppedInsideTargetActions_4_runningActionsCount = window.obj74596_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj74596_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj74596_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74621();
function runjs_74621() {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = obj74596_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74843").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_3_runningActionsCount = window.obj74596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74622();
function runjs_74622() {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = obj74596_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74843").css("border-color", "#C00000"); $("#obj74843").css("border-width", "2px"); $("#obj74843").css("border-style", "solid"); $("#obj74843").css("border-radius", "0px"); $("#obj74843").css("-webkit-border-radius", "0px"); $("#obj74843").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_3_runningActionsCount = window.obj74596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74821 
hide_74623();
function hide_74623() {
	var selector = "#obj74821";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = obj74596_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74596_droppedInsideTargetActions_3_runningActionsCount = window.obj74596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74623(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74596_droppedInsideTargetActions_3_runningActionsCount = window.obj74596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74596_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74624();
function runjs_74624() {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = obj74596_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74596").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_3_runningActionsCount = window.obj74596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74625();
function switchText_74625() {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = obj74596_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74596_droppedInsideTargetActions_3_runningActionsCount = window.obj74596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74596_droppedInsideTargetActions_3_runningActionsCount = window.obj74596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj74596_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74596 
move_74626();
function move_74626() {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = obj74596_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj74596");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 127;
	var moveY = 632;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74596_droppedInsideTargetActions_3_runningActionsCount = window.obj74596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj74596_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74627();
function runjs_74627() {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = obj74596_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74843").css("background-color", "#F2F2F2");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_3_runningActionsCount = window.obj74596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74628();
function runjs_74628() {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = obj74596_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74843").css("border-color", "#000000"); $("#obj74843").css("border-width", "1px"); $("#obj74843").css("border-style", "solid"); $("#obj74843").css("border-radius", "0px"); $("#obj74843").css("-webkit-border-radius", "0px"); $("#obj74843").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_3_runningActionsCount = window.obj74596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74821
(function(){
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = obj74596_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj74821";
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
					window.obj74596_droppedInsideTargetActions_3_runningActionsCount = window.obj74596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj74596_droppedInsideTargetActions_3_runningActionsCount = window.obj74596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74596_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74630();
function runjs_74630() {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = obj74596_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74596").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_3_runningActionsCount = window.obj74596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74631();
function runjs_74631() {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = obj74596_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74596").css("border-color", "rgba(0,0,0,0)"); $("#obj74596").css("border-width", "0px"); $("#obj74596").css("border-style", "solid"); $("#obj74596").css("border-radius", "10px"); $("#obj74596").css("-webkit-border-radius", "10px"); $("#obj74596").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_3_runningActionsCount = window.obj74596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74797 
playAudio_74632();
function playAudio_74632() {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = obj74596_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj74797")[0];
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
		    window.obj74596_droppedInsideTargetActions_3_runningActionsCount = window.obj74596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74596_droppedInsideTargetActions_3_runningActionsCount = window.obj74596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj74596_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74633();
function switchText_74633() {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = obj74596_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74596_droppedInsideTargetActions_3_runningActionsCount = window.obj74596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74596_droppedInsideTargetActions_3_runningActionsCount = window.obj74596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj74596_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj74596_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74607();
function runjs_74607() {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = obj74596_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74845").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_2_runningActionsCount = window.obj74596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74608();
function runjs_74608() {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = obj74596_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74845").css("border-color", "#C00000"); $("#obj74845").css("border-width", "2px"); $("#obj74845").css("border-style", "solid"); $("#obj74845").css("border-radius", "10px"); $("#obj74845").css("-webkit-border-radius", "10px"); $("#obj74845").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_2_runningActionsCount = window.obj74596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74823 
hide_74609();
function hide_74609() {
	var selector = "#obj74823";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = obj74596_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74596_droppedInsideTargetActions_2_runningActionsCount = window.obj74596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74609(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74596_droppedInsideTargetActions_2_runningActionsCount = window.obj74596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74596_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74610();
function runjs_74610() {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = obj74596_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74596").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_2_runningActionsCount = window.obj74596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74611();
function switchText_74611() {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = obj74596_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74596_droppedInsideTargetActions_2_runningActionsCount = window.obj74596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74596_droppedInsideTargetActions_2_runningActionsCount = window.obj74596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj74596_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74596 
move_74612();
function move_74612() {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = obj74596_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj74596");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 127;
	var moveY = 632;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74596_droppedInsideTargetActions_2_runningActionsCount = window.obj74596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj74596_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74613();
function runjs_74613() {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = obj74596_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74845").css("background-color", "#F2F2F2");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_2_runningActionsCount = window.obj74596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74614();
function runjs_74614() {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = obj74596_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74845").css("border-color", "#000000"); $("#obj74845").css("border-width", "1px"); $("#obj74845").css("border-style", "solid"); $("#obj74845").css("border-radius", "0px"); $("#obj74845").css("-webkit-border-radius", "0px"); $("#obj74845").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_2_runningActionsCount = window.obj74596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74823
(function(){
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = obj74596_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj74823";
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
					window.obj74596_droppedInsideTargetActions_2_runningActionsCount = window.obj74596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj74596_droppedInsideTargetActions_2_runningActionsCount = window.obj74596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74596_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74616();
function runjs_74616() {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = obj74596_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74596").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_2_runningActionsCount = window.obj74596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74617();
function runjs_74617() {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = obj74596_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74596").css("border-color", "rgba(0,0,0,0)"); $("#obj74596").css("border-width", "0px"); $("#obj74596").css("border-style", "solid"); $("#obj74596").css("border-radius", "10px"); $("#obj74596").css("-webkit-border-radius", "10px"); $("#obj74596").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_2_runningActionsCount = window.obj74596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74797 
playAudio_74618();
function playAudio_74618() {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = obj74596_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj74797")[0];
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
		    window.obj74596_droppedInsideTargetActions_2_runningActionsCount = window.obj74596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74596_droppedInsideTargetActions_2_runningActionsCount = window.obj74596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj74596_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74619();
function switchText_74619() {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = obj74596_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74596_droppedInsideTargetActions_2_runningActionsCount = window.obj74596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74596_droppedInsideTargetActions_2_runningActionsCount = window.obj74596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj74596_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj74596_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74601();
function runjs_74601() {
	window.obj74596_droppedInsideTargetActions_runningActionsCount = obj74596_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74837").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_runningActionsCount = window.obj74596_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_74604();
function switchText_74604() {
	window.obj74596_droppedInsideTargetActions_runningActionsCount = obj74596_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74596_droppedInsideTargetActions_runningActionsCount = window.obj74596_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74596_droppedInsideTargetActions_runningActionsCount = window.obj74596_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj74596_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74815 
hide_74602();
function hide_74602() {
	var selector = "#obj74815";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74596_droppedInsideTargetActions_runningActionsCount = obj74596_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74596_droppedInsideTargetActions_runningActionsCount = window.obj74596_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74602(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74596_droppedInsideTargetActions_runningActionsCount = window.obj74596_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74596_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74603();
function runjs_74603() {
	window.obj74596_droppedInsideTargetActions_runningActionsCount = obj74596_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74596").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74596_droppedInsideTargetActions_runningActionsCount = window.obj74596_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj74596_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj74799 
playAudio_74605();
function playAudio_74605() {
	window.obj74596_droppedInsideTargetActions_runningActionsCount = obj74596_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj74799")[0];
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
		    window.obj74596_droppedInsideTargetActions_runningActionsCount = window.obj74596_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74596_droppedInsideTargetActions_runningActionsCount = window.obj74596_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj74596_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90188();
function switchText_90188() {
	window.obj74596_droppedInsideTargetActions_runningActionsCount = obj74596_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74596_droppedInsideTargetActions_runningActionsCount = window.obj74596_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74596_droppedInsideTargetActions_runningActionsCount = window.obj74596_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74596_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74596_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74596_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74596_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj74596_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74596_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74596").trigger("obj74596_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74596) {
				console.warn("de-queueing event obj74596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74596_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj74530_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_onTouchDown_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj74530");
//	action: dragDrop
//	target: obj74530 
dragDrop_74533();
function dragDrop_74533() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj74530_onTouchDown_runningActionsCount = obj74530_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj74530');
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
	  	containerNode = $('#obj74853');
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
    	window.obj74530_onTouchDown_runningActionsCount = window.obj74530_onTouchDown_runningActionsCount - 1;
if (window.obj74530_onTouchDown_runningActionsCount < 0) {
	window.obj74530_onTouchDown_runningActionsCount = 0;
} else if (window.obj74530_onTouchDown_runningActionsCount == 0) {
	obj74530_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj74835","#obj74845","#obj74843","#obj74837","#obj74829");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_74533 = false;
    	var dropped_id_74533;
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
					dropped_74533 = true;
					dropped_id_74533 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_74533) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj74530").trigger('SCActionDragDrop74533_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj74530_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74530_onTouchDown_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj74530 
move_92304();
function move_92304() {
	window.obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_runningActionsCount = obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj74530");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 249;
	var moveY = 632;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_runningActionsCount = window.obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj74530_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74583();
function runjs_74583() {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = obj74530_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74829").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_5_runningActionsCount = window.obj74530_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74584();
function runjs_74584() {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = obj74530_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74829").css("border-color", "#C00000"); $("#obj74829").css("border-width", "2px"); $("#obj74829").css("border-style", "solid"); $("#obj74829").css("border-radius", "0px"); $("#obj74829").css("-webkit-border-radius", "0px"); $("#obj74829").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_5_runningActionsCount = window.obj74530_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74807 
hide_74585();
function hide_74585() {
	var selector = "#obj74807";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = obj74530_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74530_droppedInsideTargetActions_5_runningActionsCount = window.obj74530_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74585(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74530_droppedInsideTargetActions_5_runningActionsCount = window.obj74530_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74530_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74586();
function runjs_74586() {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = obj74530_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74530").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_5_runningActionsCount = window.obj74530_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74587();
function switchText_74587() {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = obj74530_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74530_droppedInsideTargetActions_5_runningActionsCount = window.obj74530_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74530_droppedInsideTargetActions_5_runningActionsCount = window.obj74530_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj74530_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74530 
move_74588();
function move_74588() {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = obj74530_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj74530");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 249;
	var moveY = 632;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74530_droppedInsideTargetActions_5_runningActionsCount = window.obj74530_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj74530_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74589();
function runjs_74589() {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = obj74530_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74829").css("background-color", "#F2F2F2");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_5_runningActionsCount = window.obj74530_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74590();
function runjs_74590() {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = obj74530_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74829").css("border-color", "#000000"); $("#obj74829").css("border-width", "1px"); $("#obj74829").css("border-style", "solid"); $("#obj74829").css("border-radius", "0px"); $("#obj74829").css("-webkit-border-radius", "0px"); $("#obj74829").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_5_runningActionsCount = window.obj74530_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74807
(function(){
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = obj74530_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj74807";
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
					window.obj74530_droppedInsideTargetActions_5_runningActionsCount = window.obj74530_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj74530_droppedInsideTargetActions_5_runningActionsCount = window.obj74530_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74530_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74592();
function runjs_74592() {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = obj74530_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74530").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_5_runningActionsCount = window.obj74530_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74593();
function runjs_74593() {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = obj74530_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74530").css("border-color", "rgba(0,0,0,0)"); $("#obj74530").css("border-width", "0px"); $("#obj74530").css("border-style", "solid"); $("#obj74530").css("border-radius", "10px"); $("#obj74530").css("-webkit-border-radius", "10px"); $("#obj74530").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_5_runningActionsCount = window.obj74530_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74797 
playAudio_74594();
function playAudio_74594() {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = obj74530_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj74797")[0];
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
		    window.obj74530_droppedInsideTargetActions_5_runningActionsCount = window.obj74530_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74530_droppedInsideTargetActions_5_runningActionsCount = window.obj74530_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj74530_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74595();
function switchText_74595() {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = obj74530_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74530_droppedInsideTargetActions_5_runningActionsCount = window.obj74530_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74530_droppedInsideTargetActions_5_runningActionsCount = window.obj74530_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj74530_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj74530_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74569();
function runjs_74569() {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = obj74530_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74837").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_4_runningActionsCount = window.obj74530_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74570();
function runjs_74570() {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = obj74530_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74837").css("border-color", "#C00000"); $("#obj74837").css("border-width", "2px"); $("#obj74837").css("border-style", "solid"); $("#obj74837").css("border-radius", "0px"); $("#obj74837").css("-webkit-border-radius", "0px"); $("#obj74837").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_4_runningActionsCount = window.obj74530_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74815 
hide_74571();
function hide_74571() {
	var selector = "#obj74815";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = obj74530_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74530_droppedInsideTargetActions_4_runningActionsCount = window.obj74530_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74571(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74530_droppedInsideTargetActions_4_runningActionsCount = window.obj74530_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74530_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74572();
function runjs_74572() {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = obj74530_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74530").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_4_runningActionsCount = window.obj74530_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74573();
function switchText_74573() {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = obj74530_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74530_droppedInsideTargetActions_4_runningActionsCount = window.obj74530_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74530_droppedInsideTargetActions_4_runningActionsCount = window.obj74530_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj74530_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74530 
move_74574();
function move_74574() {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = obj74530_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj74530");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 249;
	var moveY = 632;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74530_droppedInsideTargetActions_4_runningActionsCount = window.obj74530_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj74530_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74575();
function runjs_74575() {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = obj74530_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74837").css("background-color", "#F2F2F2");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_4_runningActionsCount = window.obj74530_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74576();
function runjs_74576() {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = obj74530_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74837").css("border-color", "#000000"); $("#obj74837").css("border-width", "1px"); $("#obj74837").css("border-style", "solid"); $("#obj74837").css("border-radius", "0px"); $("#obj74837").css("-webkit-border-radius", "0px"); $("#obj74837").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_4_runningActionsCount = window.obj74530_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74815
(function(){
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = obj74530_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj74815";
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
					window.obj74530_droppedInsideTargetActions_4_runningActionsCount = window.obj74530_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj74530_droppedInsideTargetActions_4_runningActionsCount = window.obj74530_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74530_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74578();
function runjs_74578() {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = obj74530_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74530").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_4_runningActionsCount = window.obj74530_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74579();
function runjs_74579() {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = obj74530_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74530").css("border-color", "rgba(0,0,0,0)"); $("#obj74530").css("border-width", "0px"); $("#obj74530").css("border-style", "solid"); $("#obj74530").css("border-radius", "10px"); $("#obj74530").css("-webkit-border-radius", "10px"); $("#obj74530").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_4_runningActionsCount = window.obj74530_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74797 
playAudio_74580();
function playAudio_74580() {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = obj74530_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj74797")[0];
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
		    window.obj74530_droppedInsideTargetActions_4_runningActionsCount = window.obj74530_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74530_droppedInsideTargetActions_4_runningActionsCount = window.obj74530_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj74530_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74581();
function switchText_74581() {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = obj74530_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74530_droppedInsideTargetActions_4_runningActionsCount = window.obj74530_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74530_droppedInsideTargetActions_4_runningActionsCount = window.obj74530_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj74530_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj74530_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74555();
function runjs_74555() {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = obj74530_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74843").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_3_runningActionsCount = window.obj74530_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74556();
function runjs_74556() {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = obj74530_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74843").css("border-color", "#C00000"); $("#obj74843").css("border-width", "2px"); $("#obj74843").css("border-style", "solid"); $("#obj74843").css("border-radius", "0px"); $("#obj74843").css("-webkit-border-radius", "0px"); $("#obj74843").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_3_runningActionsCount = window.obj74530_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74821 
hide_74557();
function hide_74557() {
	var selector = "#obj74821";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = obj74530_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74530_droppedInsideTargetActions_3_runningActionsCount = window.obj74530_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74557(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74530_droppedInsideTargetActions_3_runningActionsCount = window.obj74530_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74530_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74558();
function runjs_74558() {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = obj74530_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74530").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_3_runningActionsCount = window.obj74530_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74559();
function switchText_74559() {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = obj74530_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74530_droppedInsideTargetActions_3_runningActionsCount = window.obj74530_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74530_droppedInsideTargetActions_3_runningActionsCount = window.obj74530_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj74530_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74530 
move_74560();
function move_74560() {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = obj74530_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj74530");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 249;
	var moveY = 632;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74530_droppedInsideTargetActions_3_runningActionsCount = window.obj74530_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj74530_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74561();
function runjs_74561() {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = obj74530_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74843").css("background-color", "#F2F2F2");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_3_runningActionsCount = window.obj74530_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74562();
function runjs_74562() {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = obj74530_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74843").css("border-color", "#000000"); $("#obj74843").css("border-width", "1px"); $("#obj74843").css("border-style", "solid"); $("#obj74843").css("border-radius", "0px"); $("#obj74843").css("-webkit-border-radius", "0px"); $("#obj74843").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_3_runningActionsCount = window.obj74530_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74821
(function(){
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = obj74530_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj74821";
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
					window.obj74530_droppedInsideTargetActions_3_runningActionsCount = window.obj74530_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj74530_droppedInsideTargetActions_3_runningActionsCount = window.obj74530_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74530_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74564();
function runjs_74564() {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = obj74530_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74530").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_3_runningActionsCount = window.obj74530_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74565();
function runjs_74565() {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = obj74530_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74530").css("border-color", "rgba(0,0,0,0)"); $("#obj74530").css("border-width", "0px"); $("#obj74530").css("border-style", "solid"); $("#obj74530").css("border-radius", "10px"); $("#obj74530").css("-webkit-border-radius", "10px"); $("#obj74530").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_3_runningActionsCount = window.obj74530_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74797 
playAudio_74566();
function playAudio_74566() {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = obj74530_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj74797")[0];
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
		    window.obj74530_droppedInsideTargetActions_3_runningActionsCount = window.obj74530_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74530_droppedInsideTargetActions_3_runningActionsCount = window.obj74530_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj74530_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74567();
function switchText_74567() {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = obj74530_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74530_droppedInsideTargetActions_3_runningActionsCount = window.obj74530_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74530_droppedInsideTargetActions_3_runningActionsCount = window.obj74530_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj74530_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj74530_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74541();
function runjs_74541() {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = obj74530_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74845").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_2_runningActionsCount = window.obj74530_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74542();
function runjs_74542() {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = obj74530_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74845").css("border-color", "#C00000"); $("#obj74845").css("border-width", "2px"); $("#obj74845").css("border-style", "solid"); $("#obj74845").css("border-radius", "10px"); $("#obj74845").css("-webkit-border-radius", "10px"); $("#obj74845").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_2_runningActionsCount = window.obj74530_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74823 
hide_74543();
function hide_74543() {
	var selector = "#obj74823";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = obj74530_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74530_droppedInsideTargetActions_2_runningActionsCount = window.obj74530_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74543(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74530_droppedInsideTargetActions_2_runningActionsCount = window.obj74530_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74530_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74544();
function runjs_74544() {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = obj74530_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74530").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_2_runningActionsCount = window.obj74530_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74545();
function switchText_74545() {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = obj74530_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74530_droppedInsideTargetActions_2_runningActionsCount = window.obj74530_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74530_droppedInsideTargetActions_2_runningActionsCount = window.obj74530_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj74530_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74530 
move_74546();
function move_74546() {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = obj74530_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj74530");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 249;
	var moveY = 632;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74530_droppedInsideTargetActions_2_runningActionsCount = window.obj74530_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj74530_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74547();
function runjs_74547() {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = obj74530_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74845").css("background-color", "#F2F2F2");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_2_runningActionsCount = window.obj74530_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74548();
function runjs_74548() {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = obj74530_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74845").css("border-color", "#000000"); $("#obj74845").css("border-width", "1px"); $("#obj74845").css("border-style", "solid"); $("#obj74845").css("border-radius", "0px"); $("#obj74845").css("-webkit-border-radius", "0px"); $("#obj74845").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_2_runningActionsCount = window.obj74530_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74823
(function(){
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = obj74530_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj74823";
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
					window.obj74530_droppedInsideTargetActions_2_runningActionsCount = window.obj74530_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj74530_droppedInsideTargetActions_2_runningActionsCount = window.obj74530_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74530_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74550();
function runjs_74550() {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = obj74530_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74530").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_2_runningActionsCount = window.obj74530_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74551();
function runjs_74551() {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = obj74530_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74530").css("border-color", "rgba(0,0,0,0)"); $("#obj74530").css("border-width", "0px"); $("#obj74530").css("border-style", "solid"); $("#obj74530").css("border-radius", "10px"); $("#obj74530").css("-webkit-border-radius", "10px"); $("#obj74530").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_2_runningActionsCount = window.obj74530_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74797 
playAudio_74552();
function playAudio_74552() {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = obj74530_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj74797")[0];
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
		    window.obj74530_droppedInsideTargetActions_2_runningActionsCount = window.obj74530_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74530_droppedInsideTargetActions_2_runningActionsCount = window.obj74530_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj74530_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74553();
function switchText_74553() {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = obj74530_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74530_droppedInsideTargetActions_2_runningActionsCount = window.obj74530_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74530_droppedInsideTargetActions_2_runningActionsCount = window.obj74530_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj74530_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj74530_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74535();
function runjs_74535() {
	window.obj74530_droppedInsideTargetActions_runningActionsCount = obj74530_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74835").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_runningActionsCount = window.obj74530_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_74538();
function switchText_74538() {
	window.obj74530_droppedInsideTargetActions_runningActionsCount = obj74530_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74530_droppedInsideTargetActions_runningActionsCount = window.obj74530_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74530_droppedInsideTargetActions_runningActionsCount = window.obj74530_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj74530_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74813 
hide_74536();
function hide_74536() {
	var selector = "#obj74813";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74530_droppedInsideTargetActions_runningActionsCount = obj74530_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74530_droppedInsideTargetActions_runningActionsCount = window.obj74530_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74536(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74530_droppedInsideTargetActions_runningActionsCount = window.obj74530_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74530_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74537();
function runjs_74537() {
	window.obj74530_droppedInsideTargetActions_runningActionsCount = obj74530_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74530").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74530_droppedInsideTargetActions_runningActionsCount = window.obj74530_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj74530_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj74799 
playAudio_74539();
function playAudio_74539() {
	window.obj74530_droppedInsideTargetActions_runningActionsCount = obj74530_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj74799")[0];
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
		    window.obj74530_droppedInsideTargetActions_runningActionsCount = window.obj74530_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74530_droppedInsideTargetActions_runningActionsCount = window.obj74530_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj74530_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90190();
function switchText_90190() {
	window.obj74530_droppedInsideTargetActions_runningActionsCount = obj74530_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74530_droppedInsideTargetActions_runningActionsCount = window.obj74530_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74530_droppedInsideTargetActions_runningActionsCount = window.obj74530_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74530_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74530_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74530_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74530_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj74530_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74530_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74530").trigger("obj74530_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74530) {
				console.warn("de-queueing event obj74530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74530_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj74464_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_onTouchDown_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj74464");
//	action: dragDrop
//	target: obj74464 
dragDrop_74467();
function dragDrop_74467() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj74464_onTouchDown_runningActionsCount = obj74464_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj74464');
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
	  	containerNode = $('#obj74853');
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
    	window.obj74464_onTouchDown_runningActionsCount = window.obj74464_onTouchDown_runningActionsCount - 1;
if (window.obj74464_onTouchDown_runningActionsCount < 0) {
	window.obj74464_onTouchDown_runningActionsCount = 0;
} else if (window.obj74464_onTouchDown_runningActionsCount == 0) {
	obj74464_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj74845","#obj74843","#obj74837","#obj74835","#obj74829");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_74467 = false;
    	var dropped_id_74467;
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
					dropped_74467 = true;
					dropped_id_74467 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_74467) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj74464").trigger('SCActionDragDrop74467_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj74464_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74464_onTouchDown_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj74464 
move_92306();
function move_92306() {
	window.obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_runningActionsCount = obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj74464");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 371;
	var moveY = 610;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_runningActionsCount = window.obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj74464_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74517();
function runjs_74517() {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = obj74464_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74829").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_5_runningActionsCount = window.obj74464_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74518();
function runjs_74518() {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = obj74464_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74829").css("border-color", "#C00000"); $("#obj74829").css("border-width", "2px"); $("#obj74829").css("border-style", "solid"); $("#obj74829").css("border-radius", "0px"); $("#obj74829").css("-webkit-border-radius", "0px"); $("#obj74829").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_5_runningActionsCount = window.obj74464_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74807 
hide_74519();
function hide_74519() {
	var selector = "#obj74807";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = obj74464_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74464_droppedInsideTargetActions_5_runningActionsCount = window.obj74464_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74519(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74464_droppedInsideTargetActions_5_runningActionsCount = window.obj74464_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74464_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74520();
function runjs_74520() {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = obj74464_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74464").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_5_runningActionsCount = window.obj74464_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74521();
function switchText_74521() {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = obj74464_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74464_droppedInsideTargetActions_5_runningActionsCount = window.obj74464_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74464_droppedInsideTargetActions_5_runningActionsCount = window.obj74464_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj74464_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74464 
move_74522();
function move_74522() {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = obj74464_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj74464");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 371;
	var moveY = 610;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74464_droppedInsideTargetActions_5_runningActionsCount = window.obj74464_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj74464_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74523();
function runjs_74523() {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = obj74464_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74829").css("background-color", "#F2F2F2");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_5_runningActionsCount = window.obj74464_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74524();
function runjs_74524() {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = obj74464_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74829").css("border-color", "#000000"); $("#obj74829").css("border-width", "1px"); $("#obj74829").css("border-style", "solid"); $("#obj74829").css("border-radius", "0px"); $("#obj74829").css("-webkit-border-radius", "0px"); $("#obj74829").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_5_runningActionsCount = window.obj74464_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74807
(function(){
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = obj74464_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj74807";
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
					window.obj74464_droppedInsideTargetActions_5_runningActionsCount = window.obj74464_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj74464_droppedInsideTargetActions_5_runningActionsCount = window.obj74464_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74464_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74526();
function runjs_74526() {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = obj74464_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74464").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_5_runningActionsCount = window.obj74464_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74527();
function runjs_74527() {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = obj74464_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj74464").css("border-color", "rgba(0,0,0,0)"); $("#obj74464").css("border-width", "0px"); $("#obj74464").css("border-style", "solid"); $("#obj74464").css("border-radius", "10px"); $("#obj74464").css("-webkit-border-radius", "10px"); $("#obj74464").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_5_runningActionsCount = window.obj74464_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74797 
playAudio_74528();
function playAudio_74528() {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = obj74464_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj74797")[0];
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
		    window.obj74464_droppedInsideTargetActions_5_runningActionsCount = window.obj74464_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74464_droppedInsideTargetActions_5_runningActionsCount = window.obj74464_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj74464_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74529();
function switchText_74529() {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = obj74464_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74464_droppedInsideTargetActions_5_runningActionsCount = window.obj74464_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74464_droppedInsideTargetActions_5_runningActionsCount = window.obj74464_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj74464_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj74464_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74503();
function runjs_74503() {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = obj74464_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74835").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_4_runningActionsCount = window.obj74464_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74504();
function runjs_74504() {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = obj74464_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74835").css("border-color", "#C00000"); $("#obj74835").css("border-width", "2px"); $("#obj74835").css("border-style", "solid"); $("#obj74835").css("border-radius", "0px"); $("#obj74835").css("-webkit-border-radius", "0px"); $("#obj74835").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_4_runningActionsCount = window.obj74464_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74813 
hide_74505();
function hide_74505() {
	var selector = "#obj74813";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = obj74464_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74464_droppedInsideTargetActions_4_runningActionsCount = window.obj74464_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74505(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74464_droppedInsideTargetActions_4_runningActionsCount = window.obj74464_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74464_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74506();
function runjs_74506() {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = obj74464_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74464").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_4_runningActionsCount = window.obj74464_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74507();
function switchText_74507() {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = obj74464_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74464_droppedInsideTargetActions_4_runningActionsCount = window.obj74464_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74464_droppedInsideTargetActions_4_runningActionsCount = window.obj74464_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj74464_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74464 
move_74508();
function move_74508() {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = obj74464_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj74464");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 371;
	var moveY = 610;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74464_droppedInsideTargetActions_4_runningActionsCount = window.obj74464_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj74464_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74509();
function runjs_74509() {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = obj74464_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74835").css("background-color", "#F2F2F2");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_4_runningActionsCount = window.obj74464_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74510();
function runjs_74510() {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = obj74464_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74835").css("border-color", "#000000"); $("#obj74835").css("border-width", "1px"); $("#obj74835").css("border-style", "solid"); $("#obj74835").css("border-radius", "0px"); $("#obj74835").css("-webkit-border-radius", "0px"); $("#obj74835").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_4_runningActionsCount = window.obj74464_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74813
(function(){
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = obj74464_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj74813";
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
					window.obj74464_droppedInsideTargetActions_4_runningActionsCount = window.obj74464_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj74464_droppedInsideTargetActions_4_runningActionsCount = window.obj74464_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74464_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74512();
function runjs_74512() {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = obj74464_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74464").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_4_runningActionsCount = window.obj74464_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74513();
function runjs_74513() {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = obj74464_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj74464").css("border-color", "rgba(0,0,0,0)"); $("#obj74464").css("border-width", "0px"); $("#obj74464").css("border-style", "solid"); $("#obj74464").css("border-radius", "10px"); $("#obj74464").css("-webkit-border-radius", "10px"); $("#obj74464").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_4_runningActionsCount = window.obj74464_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74797 
playAudio_74514();
function playAudio_74514() {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = obj74464_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj74797")[0];
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
		    window.obj74464_droppedInsideTargetActions_4_runningActionsCount = window.obj74464_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74464_droppedInsideTargetActions_4_runningActionsCount = window.obj74464_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj74464_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74515();
function switchText_74515() {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = obj74464_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74464_droppedInsideTargetActions_4_runningActionsCount = window.obj74464_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74464_droppedInsideTargetActions_4_runningActionsCount = window.obj74464_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj74464_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj74464_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74489();
function runjs_74489() {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = obj74464_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74837").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_3_runningActionsCount = window.obj74464_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74490();
function runjs_74490() {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = obj74464_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74837").css("border-color", "#C00000"); $("#obj74837").css("border-width", "2px"); $("#obj74837").css("border-style", "solid"); $("#obj74837").css("border-radius", "0px"); $("#obj74837").css("-webkit-border-radius", "0px"); $("#obj74837").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_3_runningActionsCount = window.obj74464_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74815 
hide_74491();
function hide_74491() {
	var selector = "#obj74815";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = obj74464_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74464_droppedInsideTargetActions_3_runningActionsCount = window.obj74464_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74491(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74464_droppedInsideTargetActions_3_runningActionsCount = window.obj74464_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74464_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74492();
function runjs_74492() {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = obj74464_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74464").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_3_runningActionsCount = window.obj74464_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74493();
function switchText_74493() {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = obj74464_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74464_droppedInsideTargetActions_3_runningActionsCount = window.obj74464_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74464_droppedInsideTargetActions_3_runningActionsCount = window.obj74464_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj74464_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74464 
move_74494();
function move_74494() {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = obj74464_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj74464");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 371;
	var moveY = 610;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74464_droppedInsideTargetActions_3_runningActionsCount = window.obj74464_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj74464_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74495();
function runjs_74495() {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = obj74464_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74837").css("background-color", "#F2F2F2");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_3_runningActionsCount = window.obj74464_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74496();
function runjs_74496() {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = obj74464_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74837").css("border-color", "#000000"); $("#obj74837").css("border-width", "1px"); $("#obj74837").css("border-style", "solid"); $("#obj74837").css("border-radius", "0px"); $("#obj74837").css("-webkit-border-radius", "0px"); $("#obj74837").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_3_runningActionsCount = window.obj74464_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74815
(function(){
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = obj74464_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj74815";
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
					window.obj74464_droppedInsideTargetActions_3_runningActionsCount = window.obj74464_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj74464_droppedInsideTargetActions_3_runningActionsCount = window.obj74464_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74464_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74498();
function runjs_74498() {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = obj74464_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74464").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_3_runningActionsCount = window.obj74464_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74499();
function runjs_74499() {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = obj74464_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74464").css("border-color", "rgba(0,0,0,0)"); $("#obj74464").css("border-width", "0px"); $("#obj74464").css("border-style", "solid"); $("#obj74464").css("border-radius", "10px"); $("#obj74464").css("-webkit-border-radius", "10px"); $("#obj74464").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_3_runningActionsCount = window.obj74464_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74797 
playAudio_74500();
function playAudio_74500() {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = obj74464_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj74797")[0];
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
		    window.obj74464_droppedInsideTargetActions_3_runningActionsCount = window.obj74464_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74464_droppedInsideTargetActions_3_runningActionsCount = window.obj74464_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj74464_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74501();
function switchText_74501() {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = obj74464_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74464_droppedInsideTargetActions_3_runningActionsCount = window.obj74464_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74464_droppedInsideTargetActions_3_runningActionsCount = window.obj74464_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj74464_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj74464_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74475();
function runjs_74475() {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = obj74464_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74843").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_2_runningActionsCount = window.obj74464_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74476();
function runjs_74476() {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = obj74464_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74843").css("border-color", "#C00000"); $("#obj74843").css("border-width", "2px"); $("#obj74843").css("border-style", "solid"); $("#obj74843").css("border-radius", "0px"); $("#obj74843").css("-webkit-border-radius", "0px"); $("#obj74843").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_2_runningActionsCount = window.obj74464_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74821 
hide_74477();
function hide_74477() {
	var selector = "#obj74821";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = obj74464_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74464_droppedInsideTargetActions_2_runningActionsCount = window.obj74464_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74477(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74464_droppedInsideTargetActions_2_runningActionsCount = window.obj74464_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74464_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74478();
function runjs_74478() {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = obj74464_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74464").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_2_runningActionsCount = window.obj74464_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74479();
function switchText_74479() {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = obj74464_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74464_droppedInsideTargetActions_2_runningActionsCount = window.obj74464_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74464_droppedInsideTargetActions_2_runningActionsCount = window.obj74464_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj74464_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74464 
move_74480();
function move_74480() {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = obj74464_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj74464");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 371;
	var moveY = 610;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74464_droppedInsideTargetActions_2_runningActionsCount = window.obj74464_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj74464_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74481();
function runjs_74481() {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = obj74464_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74843").css("background-color", "#F2F2F2");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_2_runningActionsCount = window.obj74464_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74482();
function runjs_74482() {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = obj74464_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74843").css("border-color", "#000000"); $("#obj74843").css("border-width", "1px"); $("#obj74843").css("border-style", "solid"); $("#obj74843").css("border-radius", "0px"); $("#obj74843").css("-webkit-border-radius", "0px"); $("#obj74843").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_2_runningActionsCount = window.obj74464_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74821
(function(){
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = obj74464_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj74821";
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
					window.obj74464_droppedInsideTargetActions_2_runningActionsCount = window.obj74464_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj74464_droppedInsideTargetActions_2_runningActionsCount = window.obj74464_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74464_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74484();
function runjs_74484() {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = obj74464_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74464").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_2_runningActionsCount = window.obj74464_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74485();
function runjs_74485() {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = obj74464_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74464").css("border-color", "rgba(0,0,0,0)"); $("#obj74464").css("border-width", "0px"); $("#obj74464").css("border-style", "solid"); $("#obj74464").css("border-radius", "10px"); $("#obj74464").css("-webkit-border-radius", "10px"); $("#obj74464").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_2_runningActionsCount = window.obj74464_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74797 
playAudio_74486();
function playAudio_74486() {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = obj74464_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj74797")[0];
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
		    window.obj74464_droppedInsideTargetActions_2_runningActionsCount = window.obj74464_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74464_droppedInsideTargetActions_2_runningActionsCount = window.obj74464_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj74464_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74487();
function switchText_74487() {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = obj74464_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74464_droppedInsideTargetActions_2_runningActionsCount = window.obj74464_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74464_droppedInsideTargetActions_2_runningActionsCount = window.obj74464_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj74464_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj74464_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74469();
function runjs_74469() {
	window.obj74464_droppedInsideTargetActions_runningActionsCount = obj74464_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74845").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_runningActionsCount = window.obj74464_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_74472();
function switchText_74472() {
	window.obj74464_droppedInsideTargetActions_runningActionsCount = obj74464_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74464_droppedInsideTargetActions_runningActionsCount = window.obj74464_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74464_droppedInsideTargetActions_runningActionsCount = window.obj74464_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj74464_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74823 
hide_74470();
function hide_74470() {
	var selector = "#obj74823";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74464_droppedInsideTargetActions_runningActionsCount = obj74464_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74464_droppedInsideTargetActions_runningActionsCount = window.obj74464_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74470(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74464_droppedInsideTargetActions_runningActionsCount = window.obj74464_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74464_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74471();
function runjs_74471() {
	window.obj74464_droppedInsideTargetActions_runningActionsCount = obj74464_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74464").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74464_droppedInsideTargetActions_runningActionsCount = window.obj74464_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj74464_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj74799 
playAudio_74473();
function playAudio_74473() {
	window.obj74464_droppedInsideTargetActions_runningActionsCount = obj74464_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj74799")[0];
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
		    window.obj74464_droppedInsideTargetActions_runningActionsCount = window.obj74464_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74464_droppedInsideTargetActions_runningActionsCount = window.obj74464_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj74464_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90191();
function switchText_90191() {
	window.obj74464_droppedInsideTargetActions_runningActionsCount = obj74464_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74801_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74801_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74801").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74801_content");
			setTimeout(function () {
				window.obj74464_droppedInsideTargetActions_runningActionsCount = window.obj74464_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj74801 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74464_droppedInsideTargetActions_runningActionsCount = window.obj74464_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74464_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74464_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74464_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74464_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj74464_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74464_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74464").trigger("obj74464_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74464) {
				console.warn("de-queueing event obj74464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74464_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj74446_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74446_onTap_activeActionGroupIndex = -1;
		$("#obj74446").trigger("obj74446_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74446) {
				console.warn("de-queueing event obj74446." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74446").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74446_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj74446 
hide_74449();
function hide_74449() {
	var selector = "#obj74446";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74446_onTap_runningActionsCount = obj74446_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74446_onTap_runningActionsCount = window.obj74446_onTap_runningActionsCount - 1;
if (window.obj74446_onTap_runningActionsCount < 0) {
	window.obj74446_onTap_runningActionsCount = 0;
} else if (window.obj74446_onTap_runningActionsCount == 0) {
	obj74446_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74449(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74446_onTap_runningActionsCount = window.obj74446_onTap_runningActionsCount - 1;
if (window.obj74446_onTap_runningActionsCount < 0) {
	window.obj74446_onTap_runningActionsCount = 0;
} else if (window.obj74446_onTap_runningActionsCount == 0) {
	obj74446_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj74436 
stopMovie_74448();
function stopMovie_74448() {
	window.obj74446_onTap_runningActionsCount = obj74446_onTap_runningActionsCount + 1;
	var myVideo = $("#obj74436")[0];
	myVideo.pause();
	window.obj74446_onTap_runningActionsCount = window.obj74446_onTap_runningActionsCount - 1;
if (window.obj74446_onTap_runningActionsCount < 0) {
	window.obj74446_onTap_runningActionsCount = 0;
} else if (window.obj74446_onTap_runningActionsCount == 0) {
	obj74446_onTap_actionGroup1();
}
}
















};
obj74446_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74446_onTap_activeActionGroupIndex = -1;
		$("#obj74446").trigger("obj74446_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74446) {
				console.warn("de-queueing event obj74446." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74446").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74446_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj74438
(function(){
	window.obj74446_onTap_runningActionsCount = obj74446_onTap_runningActionsCount + 1;

	var selector = "#obj74438";
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
					window.obj74446_onTap_runningActionsCount = window.obj74446_onTap_runningActionsCount - 1;
if (window.obj74446_onTap_runningActionsCount < 0) {
	window.obj74446_onTap_runningActionsCount = 0;
} else if (window.obj74446_onTap_runningActionsCount == 0) {
	obj74446_onTap_actionGroup2();
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
				window.obj74446_onTap_runningActionsCount = window.obj74446_onTap_runningActionsCount - 1;
if (window.obj74446_onTap_runningActionsCount < 0) {
	window.obj74446_onTap_runningActionsCount = 0;
} else if (window.obj74446_onTap_runningActionsCount == 0) {
	obj74446_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74446_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74446_onTap_activeActionGroupIndex = -1;
		$("#obj74446").trigger("obj74446_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74446) {
				console.warn("de-queueing event obj74446." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74446").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74446_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj74436 
move_74451();
function move_74451() {
	window.obj74446_onTap_runningActionsCount = obj74446_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj74436");
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
			window.obj74446_onTap_runningActionsCount = window.obj74446_onTap_runningActionsCount - 1;
if (window.obj74446_onTap_runningActionsCount < 0) {
	window.obj74446_onTap_runningActionsCount = 0;
} else if (window.obj74446_onTap_runningActionsCount == 0) {
	obj74446_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj74446_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74446_onTap_activeActionGroupIndex = -1;
		$("#obj74446").trigger("obj74446_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74446) {
				console.warn("de-queueing event obj74446." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74446").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74446_onTap_activeActionGroupIndex = 3;
	





















};
obj74438_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74438_onTap_activeActionGroupIndex = -1;
		$("#obj74438").trigger("obj74438_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74438) {
				console.warn("de-queueing event obj74438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74438_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj74438 
hide_74441();
function hide_74441() {
	var selector = "#obj74438";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74438_onTap_runningActionsCount = obj74438_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74438_onTap_runningActionsCount = window.obj74438_onTap_runningActionsCount - 1;
if (window.obj74438_onTap_runningActionsCount < 0) {
	window.obj74438_onTap_runningActionsCount = 0;
} else if (window.obj74438_onTap_runningActionsCount == 0) {
	obj74438_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74441(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74438_onTap_runningActionsCount = window.obj74438_onTap_runningActionsCount - 1;
if (window.obj74438_onTap_runningActionsCount < 0) {
	window.obj74438_onTap_runningActionsCount = 0;
} else if (window.obj74438_onTap_runningActionsCount == 0) {
	obj74438_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj74436 
playPauseMovie_74440();
function playPauseMovie_74440() {
	window.obj74438_onTap_runningActionsCount = obj74438_onTap_runningActionsCount + 1;
	var myVideo = $("#obj74436")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj74438_onTap_runningActionsCount = window.obj74438_onTap_runningActionsCount - 1;
if (window.obj74438_onTap_runningActionsCount < 0) {
	window.obj74438_onTap_runningActionsCount = 0;
} else if (window.obj74438_onTap_runningActionsCount == 0) {
	obj74438_onTap_actionGroup1();
}
}

















};
obj74438_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74438_onTap_activeActionGroupIndex = -1;
		$("#obj74438").trigger("obj74438_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74438) {
				console.warn("de-queueing event obj74438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74438_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj74446
(function(){
	window.obj74438_onTap_runningActionsCount = obj74438_onTap_runningActionsCount + 1;

	var selector = "#obj74446";
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
					window.obj74438_onTap_runningActionsCount = window.obj74438_onTap_runningActionsCount - 1;
if (window.obj74438_onTap_runningActionsCount < 0) {
	window.obj74438_onTap_runningActionsCount = 0;
} else if (window.obj74438_onTap_runningActionsCount == 0) {
	obj74438_onTap_actionGroup2();
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
				window.obj74438_onTap_runningActionsCount = window.obj74438_onTap_runningActionsCount - 1;
if (window.obj74438_onTap_runningActionsCount < 0) {
	window.obj74438_onTap_runningActionsCount = 0;
} else if (window.obj74438_onTap_runningActionsCount == 0) {
	obj74438_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74438_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74438_onTap_activeActionGroupIndex = -1;
		$("#obj74438").trigger("obj74438_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74438) {
				console.warn("de-queueing event obj74438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74438_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj74436 
move_74443();
function move_74443() {
	window.obj74438_onTap_runningActionsCount = obj74438_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj74436");
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
			window.obj74438_onTap_runningActionsCount = window.obj74438_onTap_runningActionsCount - 1;
if (window.obj74438_onTap_runningActionsCount < 0) {
	window.obj74438_onTap_runningActionsCount = 0;
} else if (window.obj74438_onTap_runningActionsCount == 0) {
	obj74438_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj74438_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74438_onTap_activeActionGroupIndex = -1;
		$("#obj74438").trigger("obj74438_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74438) {
				console.warn("de-queueing event obj74438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74438_onTap_activeActionGroupIndex = 3;
	





















};
obj87501_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87501_onTap_activeActionGroupIndex = -1;
		$("#obj87501").trigger("obj87501_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87501) {
				console.warn("de-queueing event obj87501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87501_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87506 
stopAudio_87503();
function stopAudio_87503() {
	window.obj87501_onTap_runningActionsCount = obj87501_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87506")[0];
	myAudio.pause();
	window.obj87501_onTap_runningActionsCount = window.obj87501_onTap_runningActionsCount - 1;
if (window.obj87501_onTap_runningActionsCount < 0) {
	window.obj87501_onTap_runningActionsCount = 0;
} else if (window.obj87501_onTap_runningActionsCount == 0) {
	obj87501_onTap_actionGroup1();
}
}








};
obj87501_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87501_onTap_activeActionGroupIndex = -1;
		$("#obj87501").trigger("obj87501_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87501) {
				console.warn("de-queueing event obj87501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87501_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87501 
hide_87504();
function hide_87504() {
	var selector = "#obj87501";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87501_onTap_runningActionsCount = obj87501_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87501_onTap_runningActionsCount = window.obj87501_onTap_runningActionsCount - 1;
if (window.obj87501_onTap_runningActionsCount < 0) {
	window.obj87501_onTap_runningActionsCount = 0;
} else if (window.obj87501_onTap_runningActionsCount == 0) {
	obj87501_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87504(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87501_onTap_runningActionsCount = window.obj87501_onTap_runningActionsCount - 1;
if (window.obj87501_onTap_runningActionsCount < 0) {
	window.obj87501_onTap_runningActionsCount = 0;
} else if (window.obj87501_onTap_runningActionsCount == 0) {
	obj87501_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87501_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87501_onTap_activeActionGroupIndex = -1;
		$("#obj87501").trigger("obj87501_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87501) {
				console.warn("de-queueing event obj87501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87501_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87496
(function(){
	window.obj87501_onTap_runningActionsCount = obj87501_onTap_runningActionsCount + 1;

	var selector = "#obj87496";
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
					window.obj87501_onTap_runningActionsCount = window.obj87501_onTap_runningActionsCount - 1;
if (window.obj87501_onTap_runningActionsCount < 0) {
	window.obj87501_onTap_runningActionsCount = 0;
} else if (window.obj87501_onTap_runningActionsCount == 0) {
	obj87501_onTap_actionGroup3();
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
				window.obj87501_onTap_runningActionsCount = window.obj87501_onTap_runningActionsCount - 1;
if (window.obj87501_onTap_runningActionsCount < 0) {
	window.obj87501_onTap_runningActionsCount = 0;
} else if (window.obj87501_onTap_runningActionsCount == 0) {
	obj87501_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87501_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87501_onTap_activeActionGroupIndex = -1;
		$("#obj87501").trigger("obj87501_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87501) {
				console.warn("de-queueing event obj87501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87501_onTap_activeActionGroupIndex = 3;
	





















};
obj87496_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87496_onTap_activeActionGroupIndex = -1;
		$("#obj87496").trigger("obj87496_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87496) {
				console.warn("de-queueing event obj87496." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87496").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87496_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87496 
hide_87498();
function hide_87498() {
	var selector = "#obj87496";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87496_onTap_runningActionsCount = obj87496_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87496_onTap_runningActionsCount = window.obj87496_onTap_runningActionsCount - 1;
if (window.obj87496_onTap_runningActionsCount < 0) {
	window.obj87496_onTap_runningActionsCount = 0;
} else if (window.obj87496_onTap_runningActionsCount == 0) {
	obj87496_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87498(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87496_onTap_runningActionsCount = window.obj87496_onTap_runningActionsCount - 1;
if (window.obj87496_onTap_runningActionsCount < 0) {
	window.obj87496_onTap_runningActionsCount = 0;
} else if (window.obj87496_onTap_runningActionsCount == 0) {
	obj87496_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87496_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87496_onTap_activeActionGroupIndex = -1;
		$("#obj87496").trigger("obj87496_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87496) {
				console.warn("de-queueing event obj87496." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87496").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87496_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87501
(function(){
	window.obj87496_onTap_runningActionsCount = obj87496_onTap_runningActionsCount + 1;

	var selector = "#obj87501";
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
					window.obj87496_onTap_runningActionsCount = window.obj87496_onTap_runningActionsCount - 1;
if (window.obj87496_onTap_runningActionsCount < 0) {
	window.obj87496_onTap_runningActionsCount = 0;
} else if (window.obj87496_onTap_runningActionsCount == 0) {
	obj87496_onTap_actionGroup2();
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
				window.obj87496_onTap_runningActionsCount = window.obj87496_onTap_runningActionsCount - 1;
if (window.obj87496_onTap_runningActionsCount < 0) {
	window.obj87496_onTap_runningActionsCount = 0;
} else if (window.obj87496_onTap_runningActionsCount == 0) {
	obj87496_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87496_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87496_onTap_activeActionGroupIndex = -1;
		$("#obj87496").trigger("obj87496_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87496) {
				console.warn("de-queueing event obj87496." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87496").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87496_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87506 
playAudio_87500();
function playAudio_87500() {
	window.obj87496_onTap_runningActionsCount = obj87496_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87506")[0];
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
		    window.obj87496_onTap_runningActionsCount = window.obj87496_onTap_runningActionsCount - 1;
if (window.obj87496_onTap_runningActionsCount < 0) {
	window.obj87496_onTap_runningActionsCount = 0;
} else if (window.obj87496_onTap_runningActionsCount == 0) {
	obj87496_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87496_onTap_runningActionsCount = window.obj87496_onTap_runningActionsCount - 1;
if (window.obj87496_onTap_runningActionsCount < 0) {
	window.obj87496_onTap_runningActionsCount = 0;
} else if (window.obj87496_onTap_runningActionsCount == 0) {
	obj87496_onTap_actionGroup3();
}
	}
}









};
obj87496_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87496_onTap_activeActionGroupIndex = -1;
		$("#obj87496").trigger("obj87496_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87496) {
				console.warn("de-queueing event obj87496." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87496").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87496_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj74868: Event Touch Down
 *
 */
$("#obj74868").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74868_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74868_onTap is still running");
	return;
}
var obj74868_onTap_runningActionsCount = 0;
var obj74868_onTap_loopCount = 0;
obj74868_onTap_actionGroup0();
});










/*
 *
 *   obj74865: Event Touch Down
 *
 */
$("#obj74865").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74865_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74865_onTap is still running");
	return;
}
var obj74865_onTap_runningActionsCount = 0;
var obj74865_onTap_loopCount = 0;
obj74865_onTap_actionGroup0();
});










/*
 *
 *   obj74861: Event Touch Down
 *
 */
$("#obj74861").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74861_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74861_onTap is still running");
	return;
}
var obj74861_onTap_runningActionsCount = 0;
var obj74861_onTap_loopCount = 0;
obj74861_onTap_actionGroup0();
});










































































































































































































































































































































/*
 *
 *   obj74794: Event Touch Down
 *
 */
$("#obj74794").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74794_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74794_onTap is still running");
	return;
}
var obj74794_onTap_runningActionsCount = 0;
var obj74794_onTap_loopCount = 0;
obj74794_onTap_actionGroup0();
});











/*
 *
 *   obj74728: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj74728");
	var winTarget = document.getElementById("obj74728");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj74728").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj74728_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj74728_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj74728_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74728_onTouchDown is still running");
	return;
}
var obj74728_onTouchDown_runningActionsCount = 0;
var obj74728_onTouchDown_loopCount = 0;
obj74728_onTouchDown_actionGroup0();
});



/*
 *
 *   obj74728: Event SCActionDragDrop74731_droppedOutsideTargetActions
 *
 */
$("#obj74728").bind("SCActionDragDrop74731_droppedOutsideTargetActions", function(event) {
	if (window.obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74728_SCActionDragDrop74731_droppedOutsideTargetActions is still running");
	return;
}
var obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_runningActionsCount = 0;
var obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_loopCount = 0;
obj74728_SCActionDragDrop74731_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj74728: Event droppedInsideTargetActions_5
 *
 */
$("#obj74728").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj74728_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74728_droppedInsideTargetActions_5 is still running");
	return;
}
var obj74728_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj74728_droppedInsideTargetActions_5_loopCount = 0;
obj74728_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj74728: Event droppedInsideTargetActions_4
 *
 */
$("#obj74728").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj74728_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74728_droppedInsideTargetActions_4 is still running");
	return;
}
var obj74728_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj74728_droppedInsideTargetActions_4_loopCount = 0;
obj74728_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj74728: Event droppedInsideTargetActions_3
 *
 */
$("#obj74728").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj74728_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74728_droppedInsideTargetActions_3 is still running");
	return;
}
var obj74728_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj74728_droppedInsideTargetActions_3_loopCount = 0;
obj74728_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj74728: Event droppedInsideTargetActions_2
 *
 */
$("#obj74728").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj74728_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74728_droppedInsideTargetActions_2 is still running");
	return;
}
var obj74728_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj74728_droppedInsideTargetActions_2_loopCount = 0;
obj74728_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj74728: Event droppedInsideTargetActions
 *
 */
$("#obj74728").bind("droppedInsideTargetActions", function(event) {
	if (window.obj74728_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74728_droppedInsideTargetActions is still running");
	return;
}
var obj74728_droppedInsideTargetActions_runningActionsCount = 0;
var obj74728_droppedInsideTargetActions_loopCount = 0;
obj74728_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj74662: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj74662");
	var winTarget = document.getElementById("obj74662");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj74662").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj74662_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj74662_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj74662_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74662_onTouchDown is still running");
	return;
}
var obj74662_onTouchDown_runningActionsCount = 0;
var obj74662_onTouchDown_loopCount = 0;
obj74662_onTouchDown_actionGroup0();
});



/*
 *
 *   obj74662: Event SCActionDragDrop74665_droppedOutsideTargetActions
 *
 */
$("#obj74662").bind("SCActionDragDrop74665_droppedOutsideTargetActions", function(event) {
	if (window.obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74662_SCActionDragDrop74665_droppedOutsideTargetActions is still running");
	return;
}
var obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_runningActionsCount = 0;
var obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_loopCount = 0;
obj74662_SCActionDragDrop74665_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj74662: Event droppedInsideTargetActions_5
 *
 */
$("#obj74662").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj74662_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74662_droppedInsideTargetActions_5 is still running");
	return;
}
var obj74662_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj74662_droppedInsideTargetActions_5_loopCount = 0;
obj74662_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj74662: Event droppedInsideTargetActions_4
 *
 */
$("#obj74662").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj74662_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74662_droppedInsideTargetActions_4 is still running");
	return;
}
var obj74662_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj74662_droppedInsideTargetActions_4_loopCount = 0;
obj74662_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj74662: Event droppedInsideTargetActions_3
 *
 */
$("#obj74662").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj74662_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74662_droppedInsideTargetActions_3 is still running");
	return;
}
var obj74662_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj74662_droppedInsideTargetActions_3_loopCount = 0;
obj74662_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj74662: Event droppedInsideTargetActions_2
 *
 */
$("#obj74662").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj74662_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74662_droppedInsideTargetActions_2 is still running");
	return;
}
var obj74662_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj74662_droppedInsideTargetActions_2_loopCount = 0;
obj74662_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj74662: Event droppedInsideTargetActions
 *
 */
$("#obj74662").bind("droppedInsideTargetActions", function(event) {
	if (window.obj74662_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74662_droppedInsideTargetActions is still running");
	return;
}
var obj74662_droppedInsideTargetActions_runningActionsCount = 0;
var obj74662_droppedInsideTargetActions_loopCount = 0;
obj74662_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj74596: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj74596");
	var winTarget = document.getElementById("obj74596");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj74596").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj74596_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj74596_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj74596_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74596_onTouchDown is still running");
	return;
}
var obj74596_onTouchDown_runningActionsCount = 0;
var obj74596_onTouchDown_loopCount = 0;
obj74596_onTouchDown_actionGroup0();
});



/*
 *
 *   obj74596: Event SCActionDragDrop74599_droppedOutsideTargetActions
 *
 */
$("#obj74596").bind("SCActionDragDrop74599_droppedOutsideTargetActions", function(event) {
	if (window.obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74596_SCActionDragDrop74599_droppedOutsideTargetActions is still running");
	return;
}
var obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_runningActionsCount = 0;
var obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_loopCount = 0;
obj74596_SCActionDragDrop74599_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj74596: Event droppedInsideTargetActions_5
 *
 */
$("#obj74596").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj74596_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74596_droppedInsideTargetActions_5 is still running");
	return;
}
var obj74596_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj74596_droppedInsideTargetActions_5_loopCount = 0;
obj74596_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj74596: Event droppedInsideTargetActions_4
 *
 */
$("#obj74596").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj74596_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74596_droppedInsideTargetActions_4 is still running");
	return;
}
var obj74596_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj74596_droppedInsideTargetActions_4_loopCount = 0;
obj74596_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj74596: Event droppedInsideTargetActions_3
 *
 */
$("#obj74596").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj74596_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74596_droppedInsideTargetActions_3 is still running");
	return;
}
var obj74596_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj74596_droppedInsideTargetActions_3_loopCount = 0;
obj74596_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj74596: Event droppedInsideTargetActions_2
 *
 */
$("#obj74596").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj74596_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74596_droppedInsideTargetActions_2 is still running");
	return;
}
var obj74596_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj74596_droppedInsideTargetActions_2_loopCount = 0;
obj74596_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj74596: Event droppedInsideTargetActions
 *
 */
$("#obj74596").bind("droppedInsideTargetActions", function(event) {
	if (window.obj74596_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74596_droppedInsideTargetActions is still running");
	return;
}
var obj74596_droppedInsideTargetActions_runningActionsCount = 0;
var obj74596_droppedInsideTargetActions_loopCount = 0;
obj74596_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj74530: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj74530");
	var winTarget = document.getElementById("obj74530");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj74530").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj74530_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj74530_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj74530_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74530_onTouchDown is still running");
	return;
}
var obj74530_onTouchDown_runningActionsCount = 0;
var obj74530_onTouchDown_loopCount = 0;
obj74530_onTouchDown_actionGroup0();
});



/*
 *
 *   obj74530: Event SCActionDragDrop74533_droppedOutsideTargetActions
 *
 */
$("#obj74530").bind("SCActionDragDrop74533_droppedOutsideTargetActions", function(event) {
	if (window.obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74530_SCActionDragDrop74533_droppedOutsideTargetActions is still running");
	return;
}
var obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_runningActionsCount = 0;
var obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_loopCount = 0;
obj74530_SCActionDragDrop74533_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj74530: Event droppedInsideTargetActions_5
 *
 */
$("#obj74530").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj74530_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74530_droppedInsideTargetActions_5 is still running");
	return;
}
var obj74530_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj74530_droppedInsideTargetActions_5_loopCount = 0;
obj74530_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj74530: Event droppedInsideTargetActions_4
 *
 */
$("#obj74530").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj74530_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74530_droppedInsideTargetActions_4 is still running");
	return;
}
var obj74530_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj74530_droppedInsideTargetActions_4_loopCount = 0;
obj74530_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj74530: Event droppedInsideTargetActions_3
 *
 */
$("#obj74530").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj74530_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74530_droppedInsideTargetActions_3 is still running");
	return;
}
var obj74530_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj74530_droppedInsideTargetActions_3_loopCount = 0;
obj74530_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj74530: Event droppedInsideTargetActions_2
 *
 */
$("#obj74530").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj74530_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74530_droppedInsideTargetActions_2 is still running");
	return;
}
var obj74530_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj74530_droppedInsideTargetActions_2_loopCount = 0;
obj74530_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj74530: Event droppedInsideTargetActions
 *
 */
$("#obj74530").bind("droppedInsideTargetActions", function(event) {
	if (window.obj74530_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74530_droppedInsideTargetActions is still running");
	return;
}
var obj74530_droppedInsideTargetActions_runningActionsCount = 0;
var obj74530_droppedInsideTargetActions_loopCount = 0;
obj74530_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj74464: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj74464");
	var winTarget = document.getElementById("obj74464");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj74464").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj74464_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj74464_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj74464_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74464_onTouchDown is still running");
	return;
}
var obj74464_onTouchDown_runningActionsCount = 0;
var obj74464_onTouchDown_loopCount = 0;
obj74464_onTouchDown_actionGroup0();
});



/*
 *
 *   obj74464: Event SCActionDragDrop74467_droppedOutsideTargetActions
 *
 */
$("#obj74464").bind("SCActionDragDrop74467_droppedOutsideTargetActions", function(event) {
	if (window.obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74464_SCActionDragDrop74467_droppedOutsideTargetActions is still running");
	return;
}
var obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_runningActionsCount = 0;
var obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_loopCount = 0;
obj74464_SCActionDragDrop74467_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj74464: Event droppedInsideTargetActions_5
 *
 */
$("#obj74464").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj74464_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74464_droppedInsideTargetActions_5 is still running");
	return;
}
var obj74464_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj74464_droppedInsideTargetActions_5_loopCount = 0;
obj74464_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj74464: Event droppedInsideTargetActions_4
 *
 */
$("#obj74464").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj74464_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74464_droppedInsideTargetActions_4 is still running");
	return;
}
var obj74464_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj74464_droppedInsideTargetActions_4_loopCount = 0;
obj74464_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj74464: Event droppedInsideTargetActions_3
 *
 */
$("#obj74464").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj74464_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74464_droppedInsideTargetActions_3 is still running");
	return;
}
var obj74464_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj74464_droppedInsideTargetActions_3_loopCount = 0;
obj74464_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj74464: Event droppedInsideTargetActions_2
 *
 */
$("#obj74464").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj74464_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74464_droppedInsideTargetActions_2 is still running");
	return;
}
var obj74464_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj74464_droppedInsideTargetActions_2_loopCount = 0;
obj74464_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj74464: Event droppedInsideTargetActions
 *
 */
$("#obj74464").bind("droppedInsideTargetActions", function(event) {
	if (window.obj74464_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74464_droppedInsideTargetActions is still running");
	return;
}
var obj74464_droppedInsideTargetActions_runningActionsCount = 0;
var obj74464_droppedInsideTargetActions_loopCount = 0;
obj74464_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj74446: Event Touch Down
 *
 */
$("#obj74446").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74446_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74446_onTap is still running");
	return;
}
var obj74446_onTap_runningActionsCount = 0;
var obj74446_onTap_loopCount = 0;
obj74446_onTap_actionGroup0();
});










/*
 *
 *   obj74438: Event Touch Down
 *
 */
$("#obj74438").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74438_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74438_onTap is still running");
	return;
}
var obj74438_onTap_runningActionsCount = 0;
var obj74438_onTap_loopCount = 0;
obj74438_onTap_actionGroup0();
});










/*
 *
 *   obj87501: Event Touch Down
 *
 */
$("#obj87501").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87501_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87501_onTap is still running");
	return;
}
var obj87501_onTap_runningActionsCount = 0;
var obj87501_onTap_loopCount = 0;
obj87501_onTap_actionGroup0();
});










/*
 *
 *   obj87496: Event Touch Down
 *
 */
$("#obj87496").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87496_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87496_onTap is still running");
	return;
}
var obj87496_onTap_runningActionsCount = 0;
var obj87496_onTap_loopCount = 0;
obj87496_onTap_actionGroup0();
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
	
$("#obj74871").trigger('SCEventShow');
$("#obj74868").trigger('SCEventShow');
$("#obj74865").trigger('SCEventShow');
$("#obj74861").trigger('SCEventShow');
$("#obj74859").trigger('SCEventShow');
$("#obj74857").trigger('SCEventShow');
$("#obj74855").trigger('SCEventShow');
$("#obj74853").trigger('SCEventShow');
$("#obj74851").trigger('SCEventShow');
$("#obj74849").trigger('SCEventShow');
$("#obj74847").trigger('SCEventShow');
$("#obj74845").trigger('SCEventShow');
$("#obj74843").trigger('SCEventShow');
$("#obj74841").trigger('SCEventShow');
$("#obj74839").trigger('SCEventShow');
$("#obj74837").trigger('SCEventShow');
$("#obj74835").trigger('SCEventShow');
$("#obj74833").trigger('SCEventShow');
$("#obj74831").trigger('SCEventShow');
$("#obj74829").trigger('SCEventShow');
$("#obj74827").trigger('SCEventShow');
$("#obj74825").trigger('SCEventShow');
$("#obj74823").trigger('SCEventShow');
$("#obj74821").trigger('SCEventShow');
$("#obj74819").trigger('SCEventShow');
$("#obj74817").trigger('SCEventShow');
$("#obj74815").trigger('SCEventShow');
$("#obj74813").trigger('SCEventShow');
$("#obj74811").trigger('SCEventShow');
$("#obj74809").trigger('SCEventShow');
$("#obj74807").trigger('SCEventShow');
$("#obj74805").trigger('SCEventShow');
$("#obj74803").trigger('SCEventShow');
$("#obj74801").trigger('SCEventShow');
$("#obj74799").trigger('SCEventShow');
$("#obj74797").trigger('SCEventShow');
$("#obj74794").trigger('SCEventShow');
$("#obj74728").trigger('SCEventShow');
$("#obj74662").trigger('SCEventShow');
$("#obj74596").trigger('SCEventShow');
$("#obj74530").trigger('SCEventShow');
$("#obj74464").trigger('SCEventShow');
$("#obj74446").trigger('SCEventShow');
$("#obj74438").trigger('SCEventShow');
$("#obj87501").trigger('SCEventShow');
$("#obj87496").trigger('SCEventShow');
$("#obj87506").trigger('SCEventShow');
$("#obj94757").trigger('SCEventShow');
$("#obj74436").trigger('SCEventShow');
	
});