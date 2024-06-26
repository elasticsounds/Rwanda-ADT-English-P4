pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 53559;
pubcoder.page.title = pubcoder.page.title || "193";
pubcoder.page.number = pubcoder.page.number || 193;
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
var obj53950_onTap_activeActionGroupIndex = -1;
var obj53950_onTap_runningActionsCount = 0;
var obj53950_onTap_loopCount = 0;
var obj53947_onTap_activeActionGroupIndex = -1;
var obj53947_onTap_runningActionsCount = 0;
var obj53947_onTap_loopCount = 0;
var obj53943_onTap_activeActionGroupIndex = -1;
var obj53943_onTap_runningActionsCount = 0;
var obj53943_onTap_loopCount = 0;
var obj53828_onDrag_activeActionGroupIndex = -1;
var obj53828_onDrag_runningActionsCount = 0;
var obj53828_onDrag_loopCount = 0;
var obj53828_onTouchDown_activeActionGroupIndex = -1;
var obj53828_onTouchDown_runningActionsCount = 0;
var obj53828_onTouchDown_loopCount = 0;
var obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_runningActionsCount = 0;
var obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_loopCount = 0;
var obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj53828_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj53828_droppedInsideTargetActions_5_loopCount = 0;
var obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj53828_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj53828_droppedInsideTargetActions_4_loopCount = 0;
var obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj53828_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj53828_droppedInsideTargetActions_3_loopCount = 0;
var obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj53828_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj53828_droppedInsideTargetActions_2_loopCount = 0;
var obj53828_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj53828_droppedInsideTargetActions_runningActionsCount = 0;
var obj53828_droppedInsideTargetActions_loopCount = 0;
var obj53761_onDrag_activeActionGroupIndex = -1;
var obj53761_onDrag_runningActionsCount = 0;
var obj53761_onDrag_loopCount = 0;
var obj53761_onTouchDown_activeActionGroupIndex = -1;
var obj53761_onTouchDown_runningActionsCount = 0;
var obj53761_onTouchDown_loopCount = 0;
var obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_runningActionsCount = 0;
var obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_loopCount = 0;
var obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj53761_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj53761_droppedInsideTargetActions_5_loopCount = 0;
var obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj53761_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj53761_droppedInsideTargetActions_4_loopCount = 0;
var obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj53761_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj53761_droppedInsideTargetActions_3_loopCount = 0;
var obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj53761_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj53761_droppedInsideTargetActions_2_loopCount = 0;
var obj53761_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj53761_droppedInsideTargetActions_runningActionsCount = 0;
var obj53761_droppedInsideTargetActions_loopCount = 0;
var obj53694_onDrag_activeActionGroupIndex = -1;
var obj53694_onDrag_runningActionsCount = 0;
var obj53694_onDrag_loopCount = 0;
var obj53694_onTouchDown_activeActionGroupIndex = -1;
var obj53694_onTouchDown_runningActionsCount = 0;
var obj53694_onTouchDown_loopCount = 0;
var obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_runningActionsCount = 0;
var obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_loopCount = 0;
var obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj53694_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj53694_droppedInsideTargetActions_5_loopCount = 0;
var obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj53694_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj53694_droppedInsideTargetActions_4_loopCount = 0;
var obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj53694_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj53694_droppedInsideTargetActions_3_loopCount = 0;
var obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj53694_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj53694_droppedInsideTargetActions_2_loopCount = 0;
var obj53694_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj53694_droppedInsideTargetActions_runningActionsCount = 0;
var obj53694_droppedInsideTargetActions_loopCount = 0;
var obj53627_onDrag_activeActionGroupIndex = -1;
var obj53627_onDrag_runningActionsCount = 0;
var obj53627_onDrag_loopCount = 0;
var obj53627_onTouchDown_activeActionGroupIndex = -1;
var obj53627_onTouchDown_runningActionsCount = 0;
var obj53627_onTouchDown_loopCount = 0;
var obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_runningActionsCount = 0;
var obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_loopCount = 0;
var obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj53627_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj53627_droppedInsideTargetActions_5_loopCount = 0;
var obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj53627_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj53627_droppedInsideTargetActions_4_loopCount = 0;
var obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj53627_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj53627_droppedInsideTargetActions_3_loopCount = 0;
var obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj53627_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj53627_droppedInsideTargetActions_2_loopCount = 0;
var obj53627_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj53627_droppedInsideTargetActions_runningActionsCount = 0;
var obj53627_droppedInsideTargetActions_loopCount = 0;
var obj53560_onDrag_activeActionGroupIndex = -1;
var obj53560_onDrag_runningActionsCount = 0;
var obj53560_onDrag_loopCount = 0;
var obj53560_onTouchDown_activeActionGroupIndex = -1;
var obj53560_onTouchDown_runningActionsCount = 0;
var obj53560_onTouchDown_loopCount = 0;
var obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_runningActionsCount = 0;
var obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_loopCount = 0;
var obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj53560_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj53560_droppedInsideTargetActions_5_loopCount = 0;
var obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj53560_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj53560_droppedInsideTargetActions_4_loopCount = 0;
var obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj53560_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj53560_droppedInsideTargetActions_3_loopCount = 0;
var obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj53560_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj53560_droppedInsideTargetActions_2_loopCount = 0;
var obj53560_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj53560_droppedInsideTargetActions_runningActionsCount = 0;
var obj53560_droppedInsideTargetActions_loopCount = 0;
var obj68110_onTap_activeActionGroupIndex = -1;
var obj68110_onTap_runningActionsCount = 0;
var obj68110_onTap_loopCount = 0;
var obj68102_onTap_activeActionGroupIndex = -1;
var obj68102_onTap_runningActionsCount = 0;
var obj68102_onTap_loopCount = 0;
var obj89197_onTap_activeActionGroupIndex = -1;
var obj89197_onTap_runningActionsCount = 0;
var obj89197_onTap_loopCount = 0;
var obj89192_onTap_activeActionGroupIndex = -1;
var obj89192_onTap_runningActionsCount = 0;
var obj89192_onTap_loopCount = 0;
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
		
obj53950_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53950_onTap_activeActionGroupIndex = -1;
		$("#obj53950").trigger("obj53950_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53950) {
				console.warn("de-queueing event obj53950." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53950").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53950_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_53952();
function goToPage_53952() {
	window.obj53950_onTap_runningActionsCount = obj53950_onTap_runningActionsCount + 1;
	$("#anchor1130")[0].click();
	window.obj53950_onTap_runningActionsCount = window.obj53950_onTap_runningActionsCount - 1;
if (window.obj53950_onTap_runningActionsCount < 0) {
	window.obj53950_onTap_runningActionsCount = 0;
} else if (window.obj53950_onTap_runningActionsCount == 0) {
	obj53950_onTap_actionGroup1();
}
}





















};
obj53950_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53950_onTap_activeActionGroupIndex = -1;
		$("#obj53950").trigger("obj53950_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53950) {
				console.warn("de-queueing event obj53950." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53950").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53950_onTap_activeActionGroupIndex = 1;
	





















};
obj53947_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53947_onTap_activeActionGroupIndex = -1;
		$("#obj53947").trigger("obj53947_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53947) {
				console.warn("de-queueing event obj53947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53947_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_53949();
function goToPage_53949() {
	window.obj53947_onTap_runningActionsCount = obj53947_onTap_runningActionsCount + 1;
	$("#anchor1131")[0].click();
	window.obj53947_onTap_runningActionsCount = window.obj53947_onTap_runningActionsCount - 1;
if (window.obj53947_onTap_runningActionsCount < 0) {
	window.obj53947_onTap_runningActionsCount = 0;
} else if (window.obj53947_onTap_runningActionsCount == 0) {
	obj53947_onTap_actionGroup1();
}
}





















};
obj53947_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53947_onTap_activeActionGroupIndex = -1;
		$("#obj53947").trigger("obj53947_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53947) {
				console.warn("de-queueing event obj53947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53947_onTap_activeActionGroupIndex = 1;
	





















};
obj53943_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53943_onTap_activeActionGroupIndex = -1;
		$("#obj53943").trigger("obj53943_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53943) {
				console.warn("de-queueing event obj53943." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53943").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53943_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_53945();
function goToPage_53945() {
	window.obj53943_onTap_runningActionsCount = obj53943_onTap_runningActionsCount + 1;
	$("#anchor1132")[0].click();
	window.obj53943_onTap_runningActionsCount = window.obj53943_onTap_runningActionsCount - 1;
if (window.obj53943_onTap_runningActionsCount < 0) {
	window.obj53943_onTap_runningActionsCount = 0;
} else if (window.obj53943_onTap_runningActionsCount == 0) {
	obj53943_onTap_actionGroup1();
}
}





















};
obj53943_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53943_onTap_activeActionGroupIndex = -1;
		$("#obj53943").trigger("obj53943_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53943) {
				console.warn("de-queueing event obj53943." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53943").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53943_onTap_activeActionGroupIndex = 1;
	





















};
obj53828_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_onTouchDown_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj53828");
//	action: dragDrop
//	target: obj53828 
dragDrop_53831();
function dragDrop_53831() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj53828_onTouchDown_runningActionsCount = obj53828_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj53828');
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
	  	containerNode = $('#obj53933');
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
    	window.obj53828_onTouchDown_runningActionsCount = window.obj53828_onTouchDown_runningActionsCount - 1;
if (window.obj53828_onTouchDown_runningActionsCount < 0) {
	window.obj53828_onTouchDown_runningActionsCount = 0;
} else if (window.obj53828_onTouchDown_runningActionsCount == 0) {
	obj53828_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj53923","#obj53929","#obj53927","#obj53925","#obj53905");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_53831 = false;
    	var dropped_id_53831;
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
					dropped_53831 = true;
					dropped_id_53831 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_53831) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj53828").trigger('SCActionDragDrop53831_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj53828_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53828_onTouchDown_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj53828 
move_92807();
function move_92807() {
	window.obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_runningActionsCount = obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj53828");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 375;
	var moveY = 658;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_runningActionsCount = window.obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj53828_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53882();
function runjs_53882() {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = obj53828_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53905").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_5_runningActionsCount = window.obj53828_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53883();
function runjs_53883() {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = obj53828_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53905").css("border-color", "#C00000"); $("#obj53905").css("border-width", "2px"); $("#obj53905").css("border-style", "solid"); $("#obj53905").css("border-radius", "10px"); $("#obj53905").css("-webkit-border-radius", "10px"); $("#obj53905").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_5_runningActionsCount = window.obj53828_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53903 
hide_53884();
function hide_53884() {
	var selector = "#obj53903";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = obj53828_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53828_droppedInsideTargetActions_5_runningActionsCount = window.obj53828_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53884(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53828_droppedInsideTargetActions_5_runningActionsCount = window.obj53828_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53828_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53885();
function runjs_53885() {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = obj53828_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53828").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_5_runningActionsCount = window.obj53828_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53886();
function switchText_53886() {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = obj53828_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53828_droppedInsideTargetActions_5_runningActionsCount = window.obj53828_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53828_droppedInsideTargetActions_5_runningActionsCount = window.obj53828_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj53828_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj53828 
move_53887();
function move_53887() {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = obj53828_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj53828");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 375;
	var moveY = 658;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53828_droppedInsideTargetActions_5_runningActionsCount = window.obj53828_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj53828_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53888();
function runjs_53888() {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = obj53828_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53905").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_5_runningActionsCount = window.obj53828_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53889();
function runjs_53889() {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = obj53828_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53905").css("border-color", "#000000"); $("#obj53905").css("border-width", "1px"); $("#obj53905").css("border-style", "solid"); $("#obj53905").css("border-radius", "10px"); $("#obj53905").css("-webkit-border-radius", "10px"); $("#obj53905").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_5_runningActionsCount = window.obj53828_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj53903
(function(){
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = obj53828_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj53903";
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
					window.obj53828_droppedInsideTargetActions_5_runningActionsCount = window.obj53828_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj53828_droppedInsideTargetActions_5_runningActionsCount = window.obj53828_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj53828_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53891();
function runjs_53891() {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = obj53828_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53828").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_5_runningActionsCount = window.obj53828_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53892();
function runjs_53892() {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = obj53828_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53828").css("border-color", "rgba(0,0,0,0)"); $("#obj53828").css("border-width", "0px"); $("#obj53828").css("border-style", "solid"); $("#obj53828").css("border-radius", "10px"); $("#obj53828").css("-webkit-border-radius", "10px"); $("#obj53828").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_5_runningActionsCount = window.obj53828_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj53907 
playAudio_53893();
function playAudio_53893() {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = obj53828_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj53907")[0];
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
		    window.obj53828_droppedInsideTargetActions_5_runningActionsCount = window.obj53828_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53828_droppedInsideTargetActions_5_runningActionsCount = window.obj53828_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj53828_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53894();
function switchText_53894() {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = obj53828_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53828_droppedInsideTargetActions_5_runningActionsCount = window.obj53828_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53828_droppedInsideTargetActions_5_runningActionsCount = window.obj53828_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj53828_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj53828_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53868();
function runjs_53868() {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = obj53828_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53925").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_4_runningActionsCount = window.obj53828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53869();
function runjs_53869() {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = obj53828_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53925").css("border-color", "#C00000"); $("#obj53925").css("border-width", "2px"); $("#obj53925").css("border-style", "solid"); $("#obj53925").css("border-radius", "10px"); $("#obj53925").css("-webkit-border-radius", "10px"); $("#obj53925").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_4_runningActionsCount = window.obj53828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53917 
hide_53870();
function hide_53870() {
	var selector = "#obj53917";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = obj53828_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53828_droppedInsideTargetActions_4_runningActionsCount = window.obj53828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53870(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53828_droppedInsideTargetActions_4_runningActionsCount = window.obj53828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53828_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53871();
function runjs_53871() {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = obj53828_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53828").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_4_runningActionsCount = window.obj53828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53872();
function switchText_53872() {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = obj53828_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53828_droppedInsideTargetActions_4_runningActionsCount = window.obj53828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53828_droppedInsideTargetActions_4_runningActionsCount = window.obj53828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj53828_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj53828 
move_53873();
function move_53873() {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = obj53828_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj53828");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 375;
	var moveY = 658;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53828_droppedInsideTargetActions_4_runningActionsCount = window.obj53828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj53828_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53874();
function runjs_53874() {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = obj53828_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53925").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_4_runningActionsCount = window.obj53828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53875();
function runjs_53875() {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = obj53828_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53925").css("border-color", "#000000"); $("#obj53925").css("border-width", "1px"); $("#obj53925").css("border-style", "solid"); $("#obj53925").css("border-radius", "10px"); $("#obj53925").css("-webkit-border-radius", "10px"); $("#obj53925").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_4_runningActionsCount = window.obj53828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj53917
(function(){
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = obj53828_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj53917";
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
					window.obj53828_droppedInsideTargetActions_4_runningActionsCount = window.obj53828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj53828_droppedInsideTargetActions_4_runningActionsCount = window.obj53828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj53828_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53877();
function runjs_53877() {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = obj53828_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53828").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_4_runningActionsCount = window.obj53828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53878();
function runjs_53878() {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = obj53828_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53828").css("border-color", "rgba(0,0,0,0)"); $("#obj53828").css("border-width", "0px"); $("#obj53828").css("border-style", "solid"); $("#obj53828").css("border-radius", "10px"); $("#obj53828").css("-webkit-border-radius", "10px"); $("#obj53828").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_4_runningActionsCount = window.obj53828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj53907 
playAudio_53879();
function playAudio_53879() {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = obj53828_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj53907")[0];
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
		    window.obj53828_droppedInsideTargetActions_4_runningActionsCount = window.obj53828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53828_droppedInsideTargetActions_4_runningActionsCount = window.obj53828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj53828_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53880();
function switchText_53880() {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = obj53828_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53828_droppedInsideTargetActions_4_runningActionsCount = window.obj53828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53828_droppedInsideTargetActions_4_runningActionsCount = window.obj53828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj53828_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj53828_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53854();
function runjs_53854() {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = obj53828_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53927").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_3_runningActionsCount = window.obj53828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53855();
function runjs_53855() {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = obj53828_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53927").css("border-color", "#C00000"); $("#obj53927").css("border-width", "2px"); $("#obj53927").css("border-style", "solid"); $("#obj53927").css("border-radius", "10px"); $("#obj53927").css("-webkit-border-radius", "10px"); $("#obj53927").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_3_runningActionsCount = window.obj53828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53919 
hide_53856();
function hide_53856() {
	var selector = "#obj53919";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = obj53828_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53828_droppedInsideTargetActions_3_runningActionsCount = window.obj53828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53856(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53828_droppedInsideTargetActions_3_runningActionsCount = window.obj53828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53828_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53857();
function runjs_53857() {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = obj53828_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53828").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_3_runningActionsCount = window.obj53828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53858();
function switchText_53858() {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = obj53828_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53828_droppedInsideTargetActions_3_runningActionsCount = window.obj53828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53828_droppedInsideTargetActions_3_runningActionsCount = window.obj53828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj53828_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj53828 
move_53859();
function move_53859() {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = obj53828_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj53828");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 375;
	var moveY = 658;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53828_droppedInsideTargetActions_3_runningActionsCount = window.obj53828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj53828_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53860();
function runjs_53860() {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = obj53828_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53927").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_3_runningActionsCount = window.obj53828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53861();
function runjs_53861() {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = obj53828_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53927").css("border-color", "#000000"); $("#obj53927").css("border-width", "1px"); $("#obj53927").css("border-style", "solid"); $("#obj53927").css("border-radius", "10px"); $("#obj53927").css("-webkit-border-radius", "10px"); $("#obj53927").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_3_runningActionsCount = window.obj53828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj53919
(function(){
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = obj53828_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj53919";
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
					window.obj53828_droppedInsideTargetActions_3_runningActionsCount = window.obj53828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj53828_droppedInsideTargetActions_3_runningActionsCount = window.obj53828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj53828_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53863();
function runjs_53863() {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = obj53828_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53828").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_3_runningActionsCount = window.obj53828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53864();
function runjs_53864() {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = obj53828_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53828").css("border-color", "rgba(0,0,0,0)"); $("#obj53828").css("border-width", "0px"); $("#obj53828").css("border-style", "solid"); $("#obj53828").css("border-radius", "10px"); $("#obj53828").css("-webkit-border-radius", "10px"); $("#obj53828").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_3_runningActionsCount = window.obj53828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj53907 
playAudio_53865();
function playAudio_53865() {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = obj53828_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj53907")[0];
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
		    window.obj53828_droppedInsideTargetActions_3_runningActionsCount = window.obj53828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53828_droppedInsideTargetActions_3_runningActionsCount = window.obj53828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj53828_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53866();
function switchText_53866() {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = obj53828_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53828_droppedInsideTargetActions_3_runningActionsCount = window.obj53828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53828_droppedInsideTargetActions_3_runningActionsCount = window.obj53828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj53828_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj53828_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53840();
function runjs_53840() {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = obj53828_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53929").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_2_runningActionsCount = window.obj53828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53841();
function runjs_53841() {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = obj53828_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53929").css("border-color", "#C00000"); $("#obj53929").css("border-width", "2px"); $("#obj53929").css("border-style", "solid"); $("#obj53929").css("border-radius", "10px"); $("#obj53929").css("-webkit-border-radius", "10px"); $("#obj53929").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_2_runningActionsCount = window.obj53828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53921 
hide_53842();
function hide_53842() {
	var selector = "#obj53921";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = obj53828_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53828_droppedInsideTargetActions_2_runningActionsCount = window.obj53828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53842(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53828_droppedInsideTargetActions_2_runningActionsCount = window.obj53828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53828_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53843();
function runjs_53843() {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = obj53828_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53828").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_2_runningActionsCount = window.obj53828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53844();
function switchText_53844() {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = obj53828_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53828_droppedInsideTargetActions_2_runningActionsCount = window.obj53828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53828_droppedInsideTargetActions_2_runningActionsCount = window.obj53828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj53828_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj53828 
move_53845();
function move_53845() {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = obj53828_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj53828");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 375;
	var moveY = 658;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53828_droppedInsideTargetActions_2_runningActionsCount = window.obj53828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj53828_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53846();
function runjs_53846() {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = obj53828_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53929").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_2_runningActionsCount = window.obj53828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53847();
function runjs_53847() {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = obj53828_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53929").css("border-color", "#000000"); $("#obj53929").css("border-width", "1px"); $("#obj53929").css("border-style", "solid"); $("#obj53929").css("border-radius", "10px"); $("#obj53929").css("-webkit-border-radius", "10px"); $("#obj53929").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_2_runningActionsCount = window.obj53828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj53921
(function(){
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = obj53828_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj53921";
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
					window.obj53828_droppedInsideTargetActions_2_runningActionsCount = window.obj53828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj53828_droppedInsideTargetActions_2_runningActionsCount = window.obj53828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj53828_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53849();
function runjs_53849() {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = obj53828_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53828").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_2_runningActionsCount = window.obj53828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53850();
function runjs_53850() {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = obj53828_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53828").css("border-color", "rgba(0,0,0,0)"); $("#obj53828").css("border-width", "0px"); $("#obj53828").css("border-style", "solid"); $("#obj53828").css("border-radius", "10px"); $("#obj53828").css("-webkit-border-radius", "10px"); $("#obj53828").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_2_runningActionsCount = window.obj53828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj53907 
playAudio_53851();
function playAudio_53851() {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = obj53828_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj53907")[0];
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
		    window.obj53828_droppedInsideTargetActions_2_runningActionsCount = window.obj53828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53828_droppedInsideTargetActions_2_runningActionsCount = window.obj53828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj53828_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53852();
function switchText_53852() {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = obj53828_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53828_droppedInsideTargetActions_2_runningActionsCount = window.obj53828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53828_droppedInsideTargetActions_2_runningActionsCount = window.obj53828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj53828_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj53828_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53833();
function runjs_53833() {
	window.obj53828_droppedInsideTargetActions_runningActionsCount = obj53828_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj53923").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_runningActionsCount = window.obj53828_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53834();
function runjs_53834() {
	window.obj53828_droppedInsideTargetActions_runningActionsCount = obj53828_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj53923").css("border-color", "#058E3F"); $("#obj53923").css("border-width", "2px"); $("#obj53923").css("border-style", "solid"); $("#obj53923").css("border-radius", "10px"); $("#obj53923").css("-webkit-border-radius", "10px"); $("#obj53923").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_runningActionsCount = window.obj53828_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53915 
hide_53835();
function hide_53835() {
	var selector = "#obj53915";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53828_droppedInsideTargetActions_runningActionsCount = obj53828_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53828_droppedInsideTargetActions_runningActionsCount = window.obj53828_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53835(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53828_droppedInsideTargetActions_runningActionsCount = window.obj53828_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53828_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53836();
function runjs_53836() {
	window.obj53828_droppedInsideTargetActions_runningActionsCount = obj53828_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj53828").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53828_droppedInsideTargetActions_runningActionsCount = window.obj53828_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj53828_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53837();
function switchText_53837() {
	window.obj53828_droppedInsideTargetActions_runningActionsCount = obj53828_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53828_droppedInsideTargetActions_runningActionsCount = window.obj53828_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53828_droppedInsideTargetActions_runningActionsCount = window.obj53828_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj53828_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj53911 
playAudio_53838();
function playAudio_53838() {
	window.obj53828_droppedInsideTargetActions_runningActionsCount = obj53828_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj53911")[0];
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
		    window.obj53828_droppedInsideTargetActions_runningActionsCount = window.obj53828_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53828_droppedInsideTargetActions_runningActionsCount = window.obj53828_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53828_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53828_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53828_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53828_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj53828_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53828_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53828").trigger("obj53828_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53828) {
				console.warn("de-queueing event obj53828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53828_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj53761_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_onTouchDown_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj53761");
//	action: dragDrop
//	target: obj53761 
dragDrop_53764();
function dragDrop_53764() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj53761_onTouchDown_runningActionsCount = obj53761_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj53761');
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
	  	containerNode = $('#obj53933');
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
    	window.obj53761_onTouchDown_runningActionsCount = window.obj53761_onTouchDown_runningActionsCount - 1;
if (window.obj53761_onTouchDown_runningActionsCount < 0) {
	window.obj53761_onTouchDown_runningActionsCount = 0;
} else if (window.obj53761_onTouchDown_runningActionsCount == 0) {
	obj53761_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj53925","#obj53929","#obj53927","#obj53923","#obj53905");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_53764 = false;
    	var dropped_id_53764;
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
					dropped_53764 = true;
					dropped_id_53764 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_53764) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj53761").trigger('SCActionDragDrop53764_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj53761_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53761_onTouchDown_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj53761 
move_92799();
function move_92799() {
	window.obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_runningActionsCount = obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj53761");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 95;
	var moveY = 612;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_runningActionsCount = window.obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj53761_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53815();
function runjs_53815() {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = obj53761_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53905").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_5_runningActionsCount = window.obj53761_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53816();
function runjs_53816() {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = obj53761_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53905").css("border-color", "#C00000"); $("#obj53905").css("border-width", "2px"); $("#obj53905").css("border-style", "solid"); $("#obj53905").css("border-radius", "10px"); $("#obj53905").css("-webkit-border-radius", "10px"); $("#obj53905").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_5_runningActionsCount = window.obj53761_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53903 
hide_53817();
function hide_53817() {
	var selector = "#obj53903";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = obj53761_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53761_droppedInsideTargetActions_5_runningActionsCount = window.obj53761_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53817(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53761_droppedInsideTargetActions_5_runningActionsCount = window.obj53761_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53761_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53818();
function runjs_53818() {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = obj53761_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53761").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_5_runningActionsCount = window.obj53761_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53819();
function switchText_53819() {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = obj53761_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53761_droppedInsideTargetActions_5_runningActionsCount = window.obj53761_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53761_droppedInsideTargetActions_5_runningActionsCount = window.obj53761_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj53761_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj53761 
move_53820();
function move_53820() {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = obj53761_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj53761");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 95;
	var moveY = 612;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53761_droppedInsideTargetActions_5_runningActionsCount = window.obj53761_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj53761_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53821();
function runjs_53821() {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = obj53761_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53905").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_5_runningActionsCount = window.obj53761_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53822();
function runjs_53822() {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = obj53761_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53905").css("border-color", "#000000"); $("#obj53905").css("border-width", "1px"); $("#obj53905").css("border-style", "solid"); $("#obj53905").css("border-radius", "10px"); $("#obj53905").css("-webkit-border-radius", "10px"); $("#obj53905").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_5_runningActionsCount = window.obj53761_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj53903
(function(){
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = obj53761_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj53903";
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
					window.obj53761_droppedInsideTargetActions_5_runningActionsCount = window.obj53761_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj53761_droppedInsideTargetActions_5_runningActionsCount = window.obj53761_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj53761_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53824();
function runjs_53824() {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = obj53761_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53761").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_5_runningActionsCount = window.obj53761_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53825();
function runjs_53825() {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = obj53761_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53761").css("border-color", "rgba(0,0,0,0)"); $("#obj53761").css("border-width", "0px"); $("#obj53761").css("border-style", "solid"); $("#obj53761").css("border-radius", "10px"); $("#obj53761").css("-webkit-border-radius", "10px"); $("#obj53761").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_5_runningActionsCount = window.obj53761_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj53907 
playAudio_53826();
function playAudio_53826() {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = obj53761_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj53907")[0];
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
		    window.obj53761_droppedInsideTargetActions_5_runningActionsCount = window.obj53761_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53761_droppedInsideTargetActions_5_runningActionsCount = window.obj53761_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj53761_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53827();
function switchText_53827() {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = obj53761_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53761_droppedInsideTargetActions_5_runningActionsCount = window.obj53761_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53761_droppedInsideTargetActions_5_runningActionsCount = window.obj53761_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj53761_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj53761_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53801();
function runjs_53801() {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = obj53761_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53923").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_4_runningActionsCount = window.obj53761_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53802();
function runjs_53802() {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = obj53761_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53923").css("border-color", "#C00000"); $("#obj53923").css("border-width", "2px"); $("#obj53923").css("border-style", "solid"); $("#obj53923").css("border-radius", "10px"); $("#obj53923").css("-webkit-border-radius", "10px"); $("#obj53923").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_4_runningActionsCount = window.obj53761_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53915 
hide_53803();
function hide_53803() {
	var selector = "#obj53915";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = obj53761_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53761_droppedInsideTargetActions_4_runningActionsCount = window.obj53761_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53803(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53761_droppedInsideTargetActions_4_runningActionsCount = window.obj53761_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53761_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53804();
function runjs_53804() {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = obj53761_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53761").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_4_runningActionsCount = window.obj53761_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53805();
function switchText_53805() {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = obj53761_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53761_droppedInsideTargetActions_4_runningActionsCount = window.obj53761_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53761_droppedInsideTargetActions_4_runningActionsCount = window.obj53761_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj53761_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj53761 
move_53806();
function move_53806() {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = obj53761_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj53761");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 95;
	var moveY = 612;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53761_droppedInsideTargetActions_4_runningActionsCount = window.obj53761_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj53761_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53807();
function runjs_53807() {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = obj53761_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53923").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_4_runningActionsCount = window.obj53761_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53808();
function runjs_53808() {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = obj53761_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53923").css("border-color", "#000000"); $("#obj53923").css("border-width", "1px"); $("#obj53923").css("border-style", "solid"); $("#obj53923").css("border-radius", "10px"); $("#obj53923").css("-webkit-border-radius", "10px"); $("#obj53923").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_4_runningActionsCount = window.obj53761_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj53915
(function(){
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = obj53761_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj53915";
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
					window.obj53761_droppedInsideTargetActions_4_runningActionsCount = window.obj53761_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj53761_droppedInsideTargetActions_4_runningActionsCount = window.obj53761_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj53761_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53810();
function runjs_53810() {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = obj53761_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53761").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_4_runningActionsCount = window.obj53761_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53811();
function runjs_53811() {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = obj53761_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53761").css("border-color", "rgba(0,0,0,0)"); $("#obj53761").css("border-width", "0px"); $("#obj53761").css("border-style", "solid"); $("#obj53761").css("border-radius", "10px"); $("#obj53761").css("-webkit-border-radius", "10px"); $("#obj53761").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_4_runningActionsCount = window.obj53761_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj53907 
playAudio_53812();
function playAudio_53812() {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = obj53761_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj53907")[0];
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
		    window.obj53761_droppedInsideTargetActions_4_runningActionsCount = window.obj53761_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53761_droppedInsideTargetActions_4_runningActionsCount = window.obj53761_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj53761_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53813();
function switchText_53813() {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = obj53761_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53761_droppedInsideTargetActions_4_runningActionsCount = window.obj53761_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53761_droppedInsideTargetActions_4_runningActionsCount = window.obj53761_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj53761_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj53761_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53787();
function runjs_53787() {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = obj53761_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53927").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_3_runningActionsCount = window.obj53761_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53788();
function runjs_53788() {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = obj53761_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53927").css("border-color", "#C00000"); $("#obj53927").css("border-width", "2px"); $("#obj53927").css("border-style", "solid"); $("#obj53927").css("border-radius", "10px"); $("#obj53927").css("-webkit-border-radius", "10px"); $("#obj53927").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_3_runningActionsCount = window.obj53761_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53919 
hide_53789();
function hide_53789() {
	var selector = "#obj53919";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = obj53761_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53761_droppedInsideTargetActions_3_runningActionsCount = window.obj53761_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53789(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53761_droppedInsideTargetActions_3_runningActionsCount = window.obj53761_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53761_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53790();
function runjs_53790() {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = obj53761_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53761").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_3_runningActionsCount = window.obj53761_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53791();
function switchText_53791() {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = obj53761_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53761_droppedInsideTargetActions_3_runningActionsCount = window.obj53761_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53761_droppedInsideTargetActions_3_runningActionsCount = window.obj53761_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj53761_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj53761 
move_53792();
function move_53792() {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = obj53761_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj53761");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 95;
	var moveY = 612;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53761_droppedInsideTargetActions_3_runningActionsCount = window.obj53761_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj53761_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53793();
function runjs_53793() {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = obj53761_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53927").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_3_runningActionsCount = window.obj53761_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53794();
function runjs_53794() {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = obj53761_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53927").css("border-color", "#000000"); $("#obj53927").css("border-width", "1px"); $("#obj53927").css("border-style", "solid"); $("#obj53927").css("border-radius", "10px"); $("#obj53927").css("-webkit-border-radius", "10px"); $("#obj53927").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_3_runningActionsCount = window.obj53761_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj53919
(function(){
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = obj53761_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj53919";
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
					window.obj53761_droppedInsideTargetActions_3_runningActionsCount = window.obj53761_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj53761_droppedInsideTargetActions_3_runningActionsCount = window.obj53761_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj53761_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53796();
function runjs_53796() {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = obj53761_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53761").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_3_runningActionsCount = window.obj53761_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53797();
function runjs_53797() {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = obj53761_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53761").css("border-color", "rgba(0,0,0,0)"); $("#obj53761").css("border-width", "0px"); $("#obj53761").css("border-style", "solid"); $("#obj53761").css("border-radius", "10px"); $("#obj53761").css("-webkit-border-radius", "10px"); $("#obj53761").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_3_runningActionsCount = window.obj53761_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj53907 
playAudio_53798();
function playAudio_53798() {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = obj53761_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj53907")[0];
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
		    window.obj53761_droppedInsideTargetActions_3_runningActionsCount = window.obj53761_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53761_droppedInsideTargetActions_3_runningActionsCount = window.obj53761_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj53761_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53799();
function switchText_53799() {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = obj53761_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53761_droppedInsideTargetActions_3_runningActionsCount = window.obj53761_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53761_droppedInsideTargetActions_3_runningActionsCount = window.obj53761_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj53761_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj53761_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53773();
function runjs_53773() {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = obj53761_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53929").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_2_runningActionsCount = window.obj53761_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53774();
function runjs_53774() {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = obj53761_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53929").css("border-color", "#C00000"); $("#obj53929").css("border-width", "2px"); $("#obj53929").css("border-style", "solid"); $("#obj53929").css("border-radius", "10px"); $("#obj53929").css("-webkit-border-radius", "10px"); $("#obj53929").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_2_runningActionsCount = window.obj53761_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53921 
hide_53775();
function hide_53775() {
	var selector = "#obj53921";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = obj53761_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53761_droppedInsideTargetActions_2_runningActionsCount = window.obj53761_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53775(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53761_droppedInsideTargetActions_2_runningActionsCount = window.obj53761_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53761_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53776();
function runjs_53776() {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = obj53761_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53761").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_2_runningActionsCount = window.obj53761_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53777();
function switchText_53777() {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = obj53761_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53761_droppedInsideTargetActions_2_runningActionsCount = window.obj53761_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53761_droppedInsideTargetActions_2_runningActionsCount = window.obj53761_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj53761_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj53761 
move_53778();
function move_53778() {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = obj53761_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj53761");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 95;
	var moveY = 612;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53761_droppedInsideTargetActions_2_runningActionsCount = window.obj53761_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj53761_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53779();
function runjs_53779() {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = obj53761_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53929").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_2_runningActionsCount = window.obj53761_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53780();
function runjs_53780() {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = obj53761_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53929").css("border-color", "#000000"); $("#obj53929").css("border-width", "1px"); $("#obj53929").css("border-style", "solid"); $("#obj53929").css("border-radius", "10px"); $("#obj53929").css("-webkit-border-radius", "10px"); $("#obj53929").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_2_runningActionsCount = window.obj53761_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj53921
(function(){
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = obj53761_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj53921";
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
					window.obj53761_droppedInsideTargetActions_2_runningActionsCount = window.obj53761_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj53761_droppedInsideTargetActions_2_runningActionsCount = window.obj53761_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj53761_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53782();
function runjs_53782() {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = obj53761_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53761").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_2_runningActionsCount = window.obj53761_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53783();
function runjs_53783() {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = obj53761_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53761").css("border-color", "rgba(0,0,0,0)"); $("#obj53761").css("border-width", "0px"); $("#obj53761").css("border-style", "solid"); $("#obj53761").css("border-radius", "10px"); $("#obj53761").css("-webkit-border-radius", "10px"); $("#obj53761").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_2_runningActionsCount = window.obj53761_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj53907 
playAudio_53784();
function playAudio_53784() {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = obj53761_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj53907")[0];
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
		    window.obj53761_droppedInsideTargetActions_2_runningActionsCount = window.obj53761_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53761_droppedInsideTargetActions_2_runningActionsCount = window.obj53761_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj53761_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53785();
function switchText_53785() {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = obj53761_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53761_droppedInsideTargetActions_2_runningActionsCount = window.obj53761_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53761_droppedInsideTargetActions_2_runningActionsCount = window.obj53761_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj53761_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj53761_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53766();
function runjs_53766() {
	window.obj53761_droppedInsideTargetActions_runningActionsCount = obj53761_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj53925").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_runningActionsCount = window.obj53761_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53767();
function runjs_53767() {
	window.obj53761_droppedInsideTargetActions_runningActionsCount = obj53761_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj53925").css("border-color", "#058E3F"); $("#obj53925").css("border-width", "2px"); $("#obj53925").css("border-style", "solid"); $("#obj53925").css("border-radius", "10px"); $("#obj53925").css("-webkit-border-radius", "10px"); $("#obj53925").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_runningActionsCount = window.obj53761_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53917 
hide_53768();
function hide_53768() {
	var selector = "#obj53917";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53761_droppedInsideTargetActions_runningActionsCount = obj53761_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53761_droppedInsideTargetActions_runningActionsCount = window.obj53761_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53768(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53761_droppedInsideTargetActions_runningActionsCount = window.obj53761_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53761_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53769();
function runjs_53769() {
	window.obj53761_droppedInsideTargetActions_runningActionsCount = obj53761_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj53761").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53761_droppedInsideTargetActions_runningActionsCount = window.obj53761_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj53761_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53770();
function switchText_53770() {
	window.obj53761_droppedInsideTargetActions_runningActionsCount = obj53761_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53761_droppedInsideTargetActions_runningActionsCount = window.obj53761_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53761_droppedInsideTargetActions_runningActionsCount = window.obj53761_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj53761_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj53911 
playAudio_53771();
function playAudio_53771() {
	window.obj53761_droppedInsideTargetActions_runningActionsCount = obj53761_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj53911")[0];
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
		    window.obj53761_droppedInsideTargetActions_runningActionsCount = window.obj53761_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53761_droppedInsideTargetActions_runningActionsCount = window.obj53761_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53761_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53761_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53761_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53761_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj53761_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53761_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53761").trigger("obj53761_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53761) {
				console.warn("de-queueing event obj53761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53761_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj53694_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_onTouchDown_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj53694");
//	action: dragDrop
//	target: obj53694 
dragDrop_53697();
function dragDrop_53697() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj53694_onTouchDown_runningActionsCount = obj53694_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj53694');
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
	  	containerNode = $('#obj53933');
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
    	window.obj53694_onTouchDown_runningActionsCount = window.obj53694_onTouchDown_runningActionsCount - 1;
if (window.obj53694_onTouchDown_runningActionsCount < 0) {
	window.obj53694_onTouchDown_runningActionsCount = 0;
} else if (window.obj53694_onTouchDown_runningActionsCount == 0) {
	obj53694_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj53929","#obj53927","#obj53925","#obj53923","#obj53905");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_53697 = false;
    	var dropped_id_53697;
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
					dropped_53697 = true;
					dropped_id_53697 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_53697) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj53694").trigger('SCActionDragDrop53697_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj53694_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53694_onTouchDown_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj53694 
move_92803();
function move_92803() {
	window.obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_runningActionsCount = obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj53694");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 231;
	var moveY = 659;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_runningActionsCount = window.obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj53694_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53748();
function runjs_53748() {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = obj53694_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53905").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_5_runningActionsCount = window.obj53694_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53749();
function runjs_53749() {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = obj53694_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53905").css("border-color", "#C00000"); $("#obj53905").css("border-width", "2px"); $("#obj53905").css("border-style", "solid"); $("#obj53905").css("border-radius", "10px"); $("#obj53905").css("-webkit-border-radius", "10px"); $("#obj53905").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_5_runningActionsCount = window.obj53694_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53903 
hide_53750();
function hide_53750() {
	var selector = "#obj53903";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = obj53694_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53694_droppedInsideTargetActions_5_runningActionsCount = window.obj53694_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53750(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53694_droppedInsideTargetActions_5_runningActionsCount = window.obj53694_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53694_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53751();
function runjs_53751() {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = obj53694_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53694").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_5_runningActionsCount = window.obj53694_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53752();
function switchText_53752() {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = obj53694_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53694_droppedInsideTargetActions_5_runningActionsCount = window.obj53694_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53694_droppedInsideTargetActions_5_runningActionsCount = window.obj53694_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj53694_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj53694 
move_53753();
function move_53753() {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = obj53694_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj53694");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 231;
	var moveY = 659;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53694_droppedInsideTargetActions_5_runningActionsCount = window.obj53694_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj53694_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53754();
function runjs_53754() {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = obj53694_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53905").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_5_runningActionsCount = window.obj53694_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53755();
function runjs_53755() {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = obj53694_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53905").css("border-color", "#000000"); $("#obj53905").css("border-width", "1px"); $("#obj53905").css("border-style", "solid"); $("#obj53905").css("border-radius", "10px"); $("#obj53905").css("-webkit-border-radius", "10px"); $("#obj53905").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_5_runningActionsCount = window.obj53694_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj53903
(function(){
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = obj53694_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj53903";
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
					window.obj53694_droppedInsideTargetActions_5_runningActionsCount = window.obj53694_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj53694_droppedInsideTargetActions_5_runningActionsCount = window.obj53694_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj53694_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53757();
function runjs_53757() {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = obj53694_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53694").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_5_runningActionsCount = window.obj53694_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53758();
function runjs_53758() {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = obj53694_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53694").css("border-color", "rgba(0,0,0,0)"); $("#obj53694").css("border-width", "0px"); $("#obj53694").css("border-style", "solid"); $("#obj53694").css("border-radius", "10px"); $("#obj53694").css("-webkit-border-radius", "10px"); $("#obj53694").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_5_runningActionsCount = window.obj53694_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj53907 
playAudio_53759();
function playAudio_53759() {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = obj53694_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj53907")[0];
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
		    window.obj53694_droppedInsideTargetActions_5_runningActionsCount = window.obj53694_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53694_droppedInsideTargetActions_5_runningActionsCount = window.obj53694_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj53694_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53760();
function switchText_53760() {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = obj53694_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53694_droppedInsideTargetActions_5_runningActionsCount = window.obj53694_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53694_droppedInsideTargetActions_5_runningActionsCount = window.obj53694_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj53694_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj53694_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53734();
function runjs_53734() {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = obj53694_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53923").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_4_runningActionsCount = window.obj53694_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53735();
function runjs_53735() {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = obj53694_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53923").css("border-color", "#C00000"); $("#obj53923").css("border-width", "2px"); $("#obj53923").css("border-style", "solid"); $("#obj53923").css("border-radius", "10px"); $("#obj53923").css("-webkit-border-radius", "10px"); $("#obj53923").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_4_runningActionsCount = window.obj53694_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53915 
hide_53736();
function hide_53736() {
	var selector = "#obj53915";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = obj53694_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53694_droppedInsideTargetActions_4_runningActionsCount = window.obj53694_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53736(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53694_droppedInsideTargetActions_4_runningActionsCount = window.obj53694_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53694_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53737();
function runjs_53737() {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = obj53694_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53694").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_4_runningActionsCount = window.obj53694_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53738();
function switchText_53738() {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = obj53694_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53694_droppedInsideTargetActions_4_runningActionsCount = window.obj53694_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53694_droppedInsideTargetActions_4_runningActionsCount = window.obj53694_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj53694_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj53694 
move_53739();
function move_53739() {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = obj53694_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj53694");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 231;
	var moveY = 659;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53694_droppedInsideTargetActions_4_runningActionsCount = window.obj53694_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj53694_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53740();
function runjs_53740() {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = obj53694_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53923").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_4_runningActionsCount = window.obj53694_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53741();
function runjs_53741() {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = obj53694_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53923").css("border-color", "#000000"); $("#obj53923").css("border-width", "1px"); $("#obj53923").css("border-style", "solid"); $("#obj53923").css("border-radius", "10px"); $("#obj53923").css("-webkit-border-radius", "10px"); $("#obj53923").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_4_runningActionsCount = window.obj53694_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj53915
(function(){
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = obj53694_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj53915";
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
					window.obj53694_droppedInsideTargetActions_4_runningActionsCount = window.obj53694_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj53694_droppedInsideTargetActions_4_runningActionsCount = window.obj53694_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj53694_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53743();
function runjs_53743() {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = obj53694_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53694").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_4_runningActionsCount = window.obj53694_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53744();
function runjs_53744() {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = obj53694_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53694").css("border-color", "rgba(0,0,0,0)"); $("#obj53694").css("border-width", "0px"); $("#obj53694").css("border-style", "solid"); $("#obj53694").css("border-radius", "10px"); $("#obj53694").css("-webkit-border-radius", "10px"); $("#obj53694").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_4_runningActionsCount = window.obj53694_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj53907 
playAudio_53745();
function playAudio_53745() {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = obj53694_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj53907")[0];
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
		    window.obj53694_droppedInsideTargetActions_4_runningActionsCount = window.obj53694_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53694_droppedInsideTargetActions_4_runningActionsCount = window.obj53694_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj53694_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53746();
function switchText_53746() {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = obj53694_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53694_droppedInsideTargetActions_4_runningActionsCount = window.obj53694_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53694_droppedInsideTargetActions_4_runningActionsCount = window.obj53694_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj53694_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj53694_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53720();
function runjs_53720() {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = obj53694_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53925").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_3_runningActionsCount = window.obj53694_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53721();
function runjs_53721() {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = obj53694_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53925").css("border-color", "#C00000"); $("#obj53925").css("border-width", "2px"); $("#obj53925").css("border-style", "solid"); $("#obj53925").css("border-radius", "10px"); $("#obj53925").css("-webkit-border-radius", "10px"); $("#obj53925").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_3_runningActionsCount = window.obj53694_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53917 
hide_53722();
function hide_53722() {
	var selector = "#obj53917";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = obj53694_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53694_droppedInsideTargetActions_3_runningActionsCount = window.obj53694_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53722(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53694_droppedInsideTargetActions_3_runningActionsCount = window.obj53694_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53694_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53723();
function runjs_53723() {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = obj53694_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53694").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_3_runningActionsCount = window.obj53694_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53724();
function switchText_53724() {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = obj53694_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53694_droppedInsideTargetActions_3_runningActionsCount = window.obj53694_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53694_droppedInsideTargetActions_3_runningActionsCount = window.obj53694_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj53694_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj53694 
move_53725();
function move_53725() {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = obj53694_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj53694");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 231;
	var moveY = 659;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53694_droppedInsideTargetActions_3_runningActionsCount = window.obj53694_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj53694_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53726();
function runjs_53726() {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = obj53694_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53925").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_3_runningActionsCount = window.obj53694_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53727();
function runjs_53727() {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = obj53694_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53925").css("border-color", "#000000"); $("#obj53925").css("border-width", "1px"); $("#obj53925").css("border-style", "solid"); $("#obj53925").css("border-radius", "10px"); $("#obj53925").css("-webkit-border-radius", "10px"); $("#obj53925").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_3_runningActionsCount = window.obj53694_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj53917
(function(){
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = obj53694_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj53917";
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
					window.obj53694_droppedInsideTargetActions_3_runningActionsCount = window.obj53694_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj53694_droppedInsideTargetActions_3_runningActionsCount = window.obj53694_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj53694_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53729();
function runjs_53729() {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = obj53694_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53694").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_3_runningActionsCount = window.obj53694_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53730();
function runjs_53730() {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = obj53694_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53694").css("border-color", "rgba(0,0,0,0)"); $("#obj53694").css("border-width", "0px"); $("#obj53694").css("border-style", "solid"); $("#obj53694").css("border-radius", "10px"); $("#obj53694").css("-webkit-border-radius", "10px"); $("#obj53694").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_3_runningActionsCount = window.obj53694_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj53907 
playAudio_53731();
function playAudio_53731() {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = obj53694_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj53907")[0];
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
		    window.obj53694_droppedInsideTargetActions_3_runningActionsCount = window.obj53694_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53694_droppedInsideTargetActions_3_runningActionsCount = window.obj53694_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj53694_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53732();
function switchText_53732() {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = obj53694_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53694_droppedInsideTargetActions_3_runningActionsCount = window.obj53694_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53694_droppedInsideTargetActions_3_runningActionsCount = window.obj53694_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj53694_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj53694_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53706();
function runjs_53706() {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = obj53694_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53927").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_2_runningActionsCount = window.obj53694_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53707();
function runjs_53707() {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = obj53694_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53927").css("border-color", "#C00000"); $("#obj53927").css("border-width", "2px"); $("#obj53927").css("border-style", "solid"); $("#obj53927").css("border-radius", "10px"); $("#obj53927").css("-webkit-border-radius", "10px"); $("#obj53927").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_2_runningActionsCount = window.obj53694_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53919 
hide_53708();
function hide_53708() {
	var selector = "#obj53919";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = obj53694_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53694_droppedInsideTargetActions_2_runningActionsCount = window.obj53694_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53708(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53694_droppedInsideTargetActions_2_runningActionsCount = window.obj53694_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53694_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53709();
function runjs_53709() {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = obj53694_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53694").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_2_runningActionsCount = window.obj53694_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53710();
function switchText_53710() {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = obj53694_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53694_droppedInsideTargetActions_2_runningActionsCount = window.obj53694_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53694_droppedInsideTargetActions_2_runningActionsCount = window.obj53694_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj53694_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj53694 
move_53711();
function move_53711() {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = obj53694_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj53694");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 231;
	var moveY = 659;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53694_droppedInsideTargetActions_2_runningActionsCount = window.obj53694_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj53694_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53712();
function runjs_53712() {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = obj53694_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53927").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_2_runningActionsCount = window.obj53694_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53713();
function runjs_53713() {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = obj53694_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53927").css("border-color", "#000000"); $("#obj53927").css("border-width", "1px"); $("#obj53927").css("border-style", "solid"); $("#obj53927").css("border-radius", "10px"); $("#obj53927").css("-webkit-border-radius", "10px"); $("#obj53927").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_2_runningActionsCount = window.obj53694_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj53919
(function(){
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = obj53694_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj53919";
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
					window.obj53694_droppedInsideTargetActions_2_runningActionsCount = window.obj53694_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj53694_droppedInsideTargetActions_2_runningActionsCount = window.obj53694_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj53694_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53715();
function runjs_53715() {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = obj53694_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53694").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_2_runningActionsCount = window.obj53694_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53716();
function runjs_53716() {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = obj53694_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53694").css("border-color", "rgba(0,0,0,0)"); $("#obj53694").css("border-width", "0px"); $("#obj53694").css("border-style", "solid"); $("#obj53694").css("border-radius", "10px"); $("#obj53694").css("-webkit-border-radius", "10px"); $("#obj53694").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_2_runningActionsCount = window.obj53694_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj53907 
playAudio_53717();
function playAudio_53717() {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = obj53694_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj53907")[0];
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
		    window.obj53694_droppedInsideTargetActions_2_runningActionsCount = window.obj53694_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53694_droppedInsideTargetActions_2_runningActionsCount = window.obj53694_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj53694_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53718();
function switchText_53718() {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = obj53694_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53694_droppedInsideTargetActions_2_runningActionsCount = window.obj53694_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53694_droppedInsideTargetActions_2_runningActionsCount = window.obj53694_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj53694_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj53694_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53699();
function runjs_53699() {
	window.obj53694_droppedInsideTargetActions_runningActionsCount = obj53694_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj53929").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_runningActionsCount = window.obj53694_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53700();
function runjs_53700() {
	window.obj53694_droppedInsideTargetActions_runningActionsCount = obj53694_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj53929").css("border-color", "#058E3F"); $("#obj53929").css("border-width", "2px"); $("#obj53929").css("border-style", "solid"); $("#obj53929").css("border-radius", "10px"); $("#obj53929").css("-webkit-border-radius", "10px"); $("#obj53929").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_runningActionsCount = window.obj53694_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53921 
hide_53701();
function hide_53701() {
	var selector = "#obj53921";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53694_droppedInsideTargetActions_runningActionsCount = obj53694_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53694_droppedInsideTargetActions_runningActionsCount = window.obj53694_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53701(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53694_droppedInsideTargetActions_runningActionsCount = window.obj53694_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53694_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53702();
function runjs_53702() {
	window.obj53694_droppedInsideTargetActions_runningActionsCount = obj53694_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj53694").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53694_droppedInsideTargetActions_runningActionsCount = window.obj53694_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj53694_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53703();
function switchText_53703() {
	window.obj53694_droppedInsideTargetActions_runningActionsCount = obj53694_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53694_droppedInsideTargetActions_runningActionsCount = window.obj53694_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53694_droppedInsideTargetActions_runningActionsCount = window.obj53694_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj53694_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj53911 
playAudio_53704();
function playAudio_53704() {
	window.obj53694_droppedInsideTargetActions_runningActionsCount = obj53694_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj53911")[0];
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
		    window.obj53694_droppedInsideTargetActions_runningActionsCount = window.obj53694_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53694_droppedInsideTargetActions_runningActionsCount = window.obj53694_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53694_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53694_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53694_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53694_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj53694_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53694_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53694").trigger("obj53694_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53694) {
				console.warn("de-queueing event obj53694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53694_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj53627_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_onTouchDown_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj53627");
//	action: dragDrop
//	target: obj53627 
dragDrop_53630();
function dragDrop_53630() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj53627_onTouchDown_runningActionsCount = obj53627_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj53627');
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
	  	containerNode = $('#obj53933');
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
    	window.obj53627_onTouchDown_runningActionsCount = window.obj53627_onTouchDown_runningActionsCount - 1;
if (window.obj53627_onTouchDown_runningActionsCount < 0) {
	window.obj53627_onTouchDown_runningActionsCount = 0;
} else if (window.obj53627_onTouchDown_runningActionsCount == 0) {
	obj53627_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj53905","#obj53929","#obj53927","#obj53925","#obj53923");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_53630 = false;
    	var dropped_id_53630;
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
					dropped_53630 = true;
					dropped_id_53630 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_53630) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj53627").trigger('SCActionDragDrop53630_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj53627_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53627_onTouchDown_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj53627 
move_92801();
function move_92801() {
	window.obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_runningActionsCount = obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj53627");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 231;
	var moveY = 611;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_runningActionsCount = window.obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj53627_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53681();
function runjs_53681() {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = obj53627_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53923").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_5_runningActionsCount = window.obj53627_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53682();
function runjs_53682() {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = obj53627_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53923").css("border-color", "#C00000"); $("#obj53923").css("border-width", "2px"); $("#obj53923").css("border-style", "solid"); $("#obj53923").css("border-radius", "10px"); $("#obj53923").css("-webkit-border-radius", "10px"); $("#obj53923").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_5_runningActionsCount = window.obj53627_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53915 
hide_53683();
function hide_53683() {
	var selector = "#obj53915";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = obj53627_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53627_droppedInsideTargetActions_5_runningActionsCount = window.obj53627_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53683(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53627_droppedInsideTargetActions_5_runningActionsCount = window.obj53627_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53627_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53684();
function runjs_53684() {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = obj53627_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53627").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_5_runningActionsCount = window.obj53627_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53685();
function switchText_53685() {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = obj53627_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53627_droppedInsideTargetActions_5_runningActionsCount = window.obj53627_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53627_droppedInsideTargetActions_5_runningActionsCount = window.obj53627_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj53627_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj53627 
move_53686();
function move_53686() {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = obj53627_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj53627");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 231;
	var moveY = 611;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53627_droppedInsideTargetActions_5_runningActionsCount = window.obj53627_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj53627_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53687();
function runjs_53687() {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = obj53627_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53923").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_5_runningActionsCount = window.obj53627_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53688();
function runjs_53688() {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = obj53627_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53923").css("border-color", "#000000"); $("#obj53923").css("border-width", "1px"); $("#obj53923").css("border-style", "solid"); $("#obj53923").css("border-radius", "10px"); $("#obj53923").css("-webkit-border-radius", "10px"); $("#obj53923").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_5_runningActionsCount = window.obj53627_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj53915
(function(){
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = obj53627_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj53915";
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
					window.obj53627_droppedInsideTargetActions_5_runningActionsCount = window.obj53627_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj53627_droppedInsideTargetActions_5_runningActionsCount = window.obj53627_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj53627_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53690();
function runjs_53690() {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = obj53627_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53627").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_5_runningActionsCount = window.obj53627_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53691();
function runjs_53691() {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = obj53627_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53627").css("border-color", "rgba(0,0,0,0)"); $("#obj53627").css("border-width", "0px"); $("#obj53627").css("border-style", "solid"); $("#obj53627").css("border-radius", "10px"); $("#obj53627").css("-webkit-border-radius", "10px"); $("#obj53627").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_5_runningActionsCount = window.obj53627_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj53907 
playAudio_53692();
function playAudio_53692() {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = obj53627_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj53907")[0];
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
		    window.obj53627_droppedInsideTargetActions_5_runningActionsCount = window.obj53627_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53627_droppedInsideTargetActions_5_runningActionsCount = window.obj53627_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj53627_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53693();
function switchText_53693() {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = obj53627_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53627_droppedInsideTargetActions_5_runningActionsCount = window.obj53627_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53627_droppedInsideTargetActions_5_runningActionsCount = window.obj53627_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj53627_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj53627_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53667();
function runjs_53667() {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = obj53627_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53925").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_4_runningActionsCount = window.obj53627_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53668();
function runjs_53668() {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = obj53627_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53925").css("border-color", "#C00000"); $("#obj53925").css("border-width", "2px"); $("#obj53925").css("border-style", "solid"); $("#obj53925").css("border-radius", "10px"); $("#obj53925").css("-webkit-border-radius", "10px"); $("#obj53925").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_4_runningActionsCount = window.obj53627_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53917 
hide_53669();
function hide_53669() {
	var selector = "#obj53917";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = obj53627_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53627_droppedInsideTargetActions_4_runningActionsCount = window.obj53627_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53669(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53627_droppedInsideTargetActions_4_runningActionsCount = window.obj53627_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53627_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53670();
function runjs_53670() {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = obj53627_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53627").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_4_runningActionsCount = window.obj53627_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53671();
function switchText_53671() {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = obj53627_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53627_droppedInsideTargetActions_4_runningActionsCount = window.obj53627_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53627_droppedInsideTargetActions_4_runningActionsCount = window.obj53627_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj53627_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj53627 
move_53672();
function move_53672() {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = obj53627_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj53627");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 231;
	var moveY = 611;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53627_droppedInsideTargetActions_4_runningActionsCount = window.obj53627_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj53627_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53673();
function runjs_53673() {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = obj53627_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53925").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_4_runningActionsCount = window.obj53627_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53674();
function runjs_53674() {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = obj53627_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53925").css("border-color", "#000000"); $("#obj53925").css("border-width", "1px"); $("#obj53925").css("border-style", "solid"); $("#obj53925").css("border-radius", "10px"); $("#obj53925").css("-webkit-border-radius", "10px"); $("#obj53925").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_4_runningActionsCount = window.obj53627_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj53917
(function(){
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = obj53627_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj53917";
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
					window.obj53627_droppedInsideTargetActions_4_runningActionsCount = window.obj53627_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj53627_droppedInsideTargetActions_4_runningActionsCount = window.obj53627_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj53627_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53676();
function runjs_53676() {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = obj53627_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53627").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_4_runningActionsCount = window.obj53627_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53677();
function runjs_53677() {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = obj53627_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53627").css("border-color", "rgba(0,0,0,0)"); $("#obj53627").css("border-width", "0px"); $("#obj53627").css("border-style", "solid"); $("#obj53627").css("border-radius", "10px"); $("#obj53627").css("-webkit-border-radius", "10px"); $("#obj53627").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_4_runningActionsCount = window.obj53627_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj53907 
playAudio_53678();
function playAudio_53678() {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = obj53627_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj53907")[0];
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
		    window.obj53627_droppedInsideTargetActions_4_runningActionsCount = window.obj53627_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53627_droppedInsideTargetActions_4_runningActionsCount = window.obj53627_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj53627_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53679();
function switchText_53679() {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = obj53627_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53627_droppedInsideTargetActions_4_runningActionsCount = window.obj53627_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53627_droppedInsideTargetActions_4_runningActionsCount = window.obj53627_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj53627_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj53627_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53653();
function runjs_53653() {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = obj53627_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53927").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_3_runningActionsCount = window.obj53627_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53654();
function runjs_53654() {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = obj53627_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53927").css("border-color", "#C00000"); $("#obj53927").css("border-width", "2px"); $("#obj53927").css("border-style", "solid"); $("#obj53927").css("border-radius", "10px"); $("#obj53927").css("-webkit-border-radius", "10px"); $("#obj53927").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_3_runningActionsCount = window.obj53627_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53919 
hide_53655();
function hide_53655() {
	var selector = "#obj53919";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = obj53627_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53627_droppedInsideTargetActions_3_runningActionsCount = window.obj53627_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53655(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53627_droppedInsideTargetActions_3_runningActionsCount = window.obj53627_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53627_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53656();
function runjs_53656() {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = obj53627_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53627").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_3_runningActionsCount = window.obj53627_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53657();
function switchText_53657() {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = obj53627_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53627_droppedInsideTargetActions_3_runningActionsCount = window.obj53627_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53627_droppedInsideTargetActions_3_runningActionsCount = window.obj53627_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj53627_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj53627 
move_53658();
function move_53658() {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = obj53627_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj53627");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 231;
	var moveY = 611;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53627_droppedInsideTargetActions_3_runningActionsCount = window.obj53627_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj53627_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53659();
function runjs_53659() {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = obj53627_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53927").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_3_runningActionsCount = window.obj53627_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53660();
function runjs_53660() {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = obj53627_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53927").css("border-color", "#000000"); $("#obj53927").css("border-width", "1px"); $("#obj53927").css("border-style", "solid"); $("#obj53927").css("border-radius", "10px"); $("#obj53927").css("-webkit-border-radius", "10px"); $("#obj53927").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_3_runningActionsCount = window.obj53627_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj53919
(function(){
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = obj53627_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj53919";
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
					window.obj53627_droppedInsideTargetActions_3_runningActionsCount = window.obj53627_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj53627_droppedInsideTargetActions_3_runningActionsCount = window.obj53627_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj53627_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53662();
function runjs_53662() {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = obj53627_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53627").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_3_runningActionsCount = window.obj53627_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53663();
function runjs_53663() {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = obj53627_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53627").css("border-color", "rgba(0,0,0,0)"); $("#obj53627").css("border-width", "0px"); $("#obj53627").css("border-style", "solid"); $("#obj53627").css("border-radius", "10px"); $("#obj53627").css("-webkit-border-radius", "10px"); $("#obj53627").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_3_runningActionsCount = window.obj53627_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj53907 
playAudio_53664();
function playAudio_53664() {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = obj53627_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj53907")[0];
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
		    window.obj53627_droppedInsideTargetActions_3_runningActionsCount = window.obj53627_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53627_droppedInsideTargetActions_3_runningActionsCount = window.obj53627_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj53627_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53665();
function switchText_53665() {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = obj53627_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53627_droppedInsideTargetActions_3_runningActionsCount = window.obj53627_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53627_droppedInsideTargetActions_3_runningActionsCount = window.obj53627_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj53627_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj53627_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53639();
function runjs_53639() {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = obj53627_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53929").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_2_runningActionsCount = window.obj53627_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53640();
function runjs_53640() {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = obj53627_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53929").css("border-color", "#C00000"); $("#obj53929").css("border-width", "2px"); $("#obj53929").css("border-style", "solid"); $("#obj53929").css("border-radius", "10px"); $("#obj53929").css("-webkit-border-radius", "10px"); $("#obj53929").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_2_runningActionsCount = window.obj53627_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53921 
hide_53641();
function hide_53641() {
	var selector = "#obj53921";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = obj53627_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53627_droppedInsideTargetActions_2_runningActionsCount = window.obj53627_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53641(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53627_droppedInsideTargetActions_2_runningActionsCount = window.obj53627_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53627_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53642();
function runjs_53642() {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = obj53627_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53627").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_2_runningActionsCount = window.obj53627_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53643();
function switchText_53643() {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = obj53627_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53627_droppedInsideTargetActions_2_runningActionsCount = window.obj53627_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53627_droppedInsideTargetActions_2_runningActionsCount = window.obj53627_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj53627_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj53627 
move_53644();
function move_53644() {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = obj53627_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj53627");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 231;
	var moveY = 611;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53627_droppedInsideTargetActions_2_runningActionsCount = window.obj53627_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj53627_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53645();
function runjs_53645() {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = obj53627_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53929").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_2_runningActionsCount = window.obj53627_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53646();
function runjs_53646() {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = obj53627_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53929").css("border-color", "#000000"); $("#obj53929").css("border-width", "1px"); $("#obj53929").css("border-style", "solid"); $("#obj53929").css("border-radius", "10px"); $("#obj53929").css("-webkit-border-radius", "10px"); $("#obj53929").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_2_runningActionsCount = window.obj53627_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj53921
(function(){
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = obj53627_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj53921";
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
					window.obj53627_droppedInsideTargetActions_2_runningActionsCount = window.obj53627_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj53627_droppedInsideTargetActions_2_runningActionsCount = window.obj53627_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj53627_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53648();
function runjs_53648() {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = obj53627_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53627").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_2_runningActionsCount = window.obj53627_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53649();
function runjs_53649() {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = obj53627_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53627").css("border-color", "rgba(0,0,0,0)"); $("#obj53627").css("border-width", "0px"); $("#obj53627").css("border-style", "solid"); $("#obj53627").css("border-radius", "10px"); $("#obj53627").css("-webkit-border-radius", "10px"); $("#obj53627").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_2_runningActionsCount = window.obj53627_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj53907 
playAudio_53650();
function playAudio_53650() {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = obj53627_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj53907")[0];
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
		    window.obj53627_droppedInsideTargetActions_2_runningActionsCount = window.obj53627_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53627_droppedInsideTargetActions_2_runningActionsCount = window.obj53627_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj53627_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53651();
function switchText_53651() {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = obj53627_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53627_droppedInsideTargetActions_2_runningActionsCount = window.obj53627_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53627_droppedInsideTargetActions_2_runningActionsCount = window.obj53627_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj53627_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj53627_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53632();
function runjs_53632() {
	window.obj53627_droppedInsideTargetActions_runningActionsCount = obj53627_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj53905").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_runningActionsCount = window.obj53627_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53633();
function runjs_53633() {
	window.obj53627_droppedInsideTargetActions_runningActionsCount = obj53627_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj53905").css("border-color", "#058E3F"); $("#obj53905").css("border-width", "2px"); $("#obj53905").css("border-style", "solid"); $("#obj53905").css("border-radius", "10px"); $("#obj53905").css("-webkit-border-radius", "10px"); $("#obj53905").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_runningActionsCount = window.obj53627_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53903 
hide_53634();
function hide_53634() {
	var selector = "#obj53903";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53627_droppedInsideTargetActions_runningActionsCount = obj53627_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53627_droppedInsideTargetActions_runningActionsCount = window.obj53627_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53634(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53627_droppedInsideTargetActions_runningActionsCount = window.obj53627_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53627_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53635();
function runjs_53635() {
	window.obj53627_droppedInsideTargetActions_runningActionsCount = obj53627_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj53627").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53627_droppedInsideTargetActions_runningActionsCount = window.obj53627_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj53627_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53636();
function switchText_53636() {
	window.obj53627_droppedInsideTargetActions_runningActionsCount = obj53627_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53627_droppedInsideTargetActions_runningActionsCount = window.obj53627_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53627_droppedInsideTargetActions_runningActionsCount = window.obj53627_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj53627_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj53911 
playAudio_53637();
function playAudio_53637() {
	window.obj53627_droppedInsideTargetActions_runningActionsCount = obj53627_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj53911")[0];
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
		    window.obj53627_droppedInsideTargetActions_runningActionsCount = window.obj53627_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53627_droppedInsideTargetActions_runningActionsCount = window.obj53627_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53627_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53627_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53627_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53627_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj53627_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53627_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53627").trigger("obj53627_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53627) {
				console.warn("de-queueing event obj53627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53627_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj53560_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_onTouchDown_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj53560");
//	action: dragDrop
//	target: obj53560 
dragDrop_53563();
function dragDrop_53563() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj53560_onTouchDown_runningActionsCount = obj53560_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj53560');
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
	  	containerNode = $('#obj53933');
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
    	window.obj53560_onTouchDown_runningActionsCount = window.obj53560_onTouchDown_runningActionsCount - 1;
if (window.obj53560_onTouchDown_runningActionsCount < 0) {
	window.obj53560_onTouchDown_runningActionsCount = 0;
} else if (window.obj53560_onTouchDown_runningActionsCount == 0) {
	obj53560_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj53927","#obj53929","#obj53925","#obj53923","#obj53905");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_53563 = false;
    	var dropped_id_53563;
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
					dropped_53563 = true;
					dropped_id_53563 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_53563) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj53560").trigger('SCActionDragDrop53563_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj53560_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53560_onTouchDown_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj53560 
move_92805();
function move_92805() {
	window.obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_runningActionsCount = obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj53560");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 375;
	var moveY = 611;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_runningActionsCount = window.obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj53560_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53614();
function runjs_53614() {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = obj53560_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53905").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_5_runningActionsCount = window.obj53560_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53615();
function runjs_53615() {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = obj53560_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53905").css("border-color", "#C00000"); $("#obj53905").css("border-width", "2px"); $("#obj53905").css("border-style", "solid"); $("#obj53905").css("border-radius", "10px"); $("#obj53905").css("-webkit-border-radius", "10px"); $("#obj53905").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_5_runningActionsCount = window.obj53560_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53903 
hide_53616();
function hide_53616() {
	var selector = "#obj53903";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = obj53560_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53560_droppedInsideTargetActions_5_runningActionsCount = window.obj53560_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53616(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53560_droppedInsideTargetActions_5_runningActionsCount = window.obj53560_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53560_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53617();
function runjs_53617() {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = obj53560_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53560").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_5_runningActionsCount = window.obj53560_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53618();
function switchText_53618() {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = obj53560_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53560_droppedInsideTargetActions_5_runningActionsCount = window.obj53560_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53560_droppedInsideTargetActions_5_runningActionsCount = window.obj53560_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj53560_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj53560 
move_53619();
function move_53619() {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = obj53560_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj53560");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 375;
	var moveY = 611;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53560_droppedInsideTargetActions_5_runningActionsCount = window.obj53560_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj53560_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53620();
function runjs_53620() {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = obj53560_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53905").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_5_runningActionsCount = window.obj53560_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53621();
function runjs_53621() {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = obj53560_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53905").css("border-color", "#000000"); $("#obj53905").css("border-width", "1px"); $("#obj53905").css("border-style", "solid"); $("#obj53905").css("border-radius", "10px"); $("#obj53905").css("-webkit-border-radius", "10px"); $("#obj53905").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_5_runningActionsCount = window.obj53560_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj53903
(function(){
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = obj53560_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj53903";
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
					window.obj53560_droppedInsideTargetActions_5_runningActionsCount = window.obj53560_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj53560_droppedInsideTargetActions_5_runningActionsCount = window.obj53560_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj53560_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53623();
function runjs_53623() {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = obj53560_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53560").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_5_runningActionsCount = window.obj53560_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53624();
function runjs_53624() {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = obj53560_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj53560").css("border-color", "rgba(0,0,0,0)"); $("#obj53560").css("border-width", "0px"); $("#obj53560").css("border-style", "solid"); $("#obj53560").css("border-radius", "10px"); $("#obj53560").css("-webkit-border-radius", "10px"); $("#obj53560").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_5_runningActionsCount = window.obj53560_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj53907 
playAudio_53625();
function playAudio_53625() {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = obj53560_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj53907")[0];
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
		    window.obj53560_droppedInsideTargetActions_5_runningActionsCount = window.obj53560_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53560_droppedInsideTargetActions_5_runningActionsCount = window.obj53560_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj53560_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53626();
function switchText_53626() {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = obj53560_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53560_droppedInsideTargetActions_5_runningActionsCount = window.obj53560_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53560_droppedInsideTargetActions_5_runningActionsCount = window.obj53560_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj53560_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj53560_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53600();
function runjs_53600() {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = obj53560_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53923").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_4_runningActionsCount = window.obj53560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53601();
function runjs_53601() {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = obj53560_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53923").css("border-color", "#C00000"); $("#obj53923").css("border-width", "2px"); $("#obj53923").css("border-style", "solid"); $("#obj53923").css("border-radius", "10px"); $("#obj53923").css("-webkit-border-radius", "10px"); $("#obj53923").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_4_runningActionsCount = window.obj53560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53915 
hide_53602();
function hide_53602() {
	var selector = "#obj53915";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = obj53560_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53560_droppedInsideTargetActions_4_runningActionsCount = window.obj53560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53602(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53560_droppedInsideTargetActions_4_runningActionsCount = window.obj53560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53560_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53603();
function runjs_53603() {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = obj53560_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53560").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_4_runningActionsCount = window.obj53560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53604();
function switchText_53604() {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = obj53560_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53560_droppedInsideTargetActions_4_runningActionsCount = window.obj53560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53560_droppedInsideTargetActions_4_runningActionsCount = window.obj53560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj53560_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj53560 
move_53605();
function move_53605() {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = obj53560_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj53560");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 375;
	var moveY = 611;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53560_droppedInsideTargetActions_4_runningActionsCount = window.obj53560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj53560_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53606();
function runjs_53606() {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = obj53560_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53923").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_4_runningActionsCount = window.obj53560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53607();
function runjs_53607() {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = obj53560_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53923").css("border-color", "#000000"); $("#obj53923").css("border-width", "1px"); $("#obj53923").css("border-style", "solid"); $("#obj53923").css("border-radius", "10px"); $("#obj53923").css("-webkit-border-radius", "10px"); $("#obj53923").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_4_runningActionsCount = window.obj53560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj53915
(function(){
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = obj53560_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj53915";
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
					window.obj53560_droppedInsideTargetActions_4_runningActionsCount = window.obj53560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj53560_droppedInsideTargetActions_4_runningActionsCount = window.obj53560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj53560_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53609();
function runjs_53609() {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = obj53560_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53560").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_4_runningActionsCount = window.obj53560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53610();
function runjs_53610() {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = obj53560_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj53560").css("border-color", "rgba(0,0,0,0)"); $("#obj53560").css("border-width", "0px"); $("#obj53560").css("border-style", "solid"); $("#obj53560").css("border-radius", "10px"); $("#obj53560").css("-webkit-border-radius", "10px"); $("#obj53560").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_4_runningActionsCount = window.obj53560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj53907 
playAudio_53611();
function playAudio_53611() {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = obj53560_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj53907")[0];
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
		    window.obj53560_droppedInsideTargetActions_4_runningActionsCount = window.obj53560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53560_droppedInsideTargetActions_4_runningActionsCount = window.obj53560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj53560_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53612();
function switchText_53612() {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = obj53560_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53560_droppedInsideTargetActions_4_runningActionsCount = window.obj53560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53560_droppedInsideTargetActions_4_runningActionsCount = window.obj53560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj53560_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj53560_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53586();
function runjs_53586() {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = obj53560_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53925").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_3_runningActionsCount = window.obj53560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53587();
function runjs_53587() {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = obj53560_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53925").css("border-color", "#C00000"); $("#obj53925").css("border-width", "2px"); $("#obj53925").css("border-style", "solid"); $("#obj53925").css("border-radius", "10px"); $("#obj53925").css("-webkit-border-radius", "10px"); $("#obj53925").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_3_runningActionsCount = window.obj53560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53917 
hide_53588();
function hide_53588() {
	var selector = "#obj53917";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = obj53560_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53560_droppedInsideTargetActions_3_runningActionsCount = window.obj53560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53588(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53560_droppedInsideTargetActions_3_runningActionsCount = window.obj53560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53560_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53589();
function runjs_53589() {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = obj53560_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53560").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_3_runningActionsCount = window.obj53560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53590();
function switchText_53590() {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = obj53560_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53560_droppedInsideTargetActions_3_runningActionsCount = window.obj53560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53560_droppedInsideTargetActions_3_runningActionsCount = window.obj53560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj53560_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj53560 
move_53591();
function move_53591() {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = obj53560_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj53560");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 375;
	var moveY = 611;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53560_droppedInsideTargetActions_3_runningActionsCount = window.obj53560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj53560_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53592();
function runjs_53592() {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = obj53560_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53925").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_3_runningActionsCount = window.obj53560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53593();
function runjs_53593() {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = obj53560_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53925").css("border-color", "#000000"); $("#obj53925").css("border-width", "1px"); $("#obj53925").css("border-style", "solid"); $("#obj53925").css("border-radius", "10px"); $("#obj53925").css("-webkit-border-radius", "10px"); $("#obj53925").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_3_runningActionsCount = window.obj53560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj53917
(function(){
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = obj53560_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj53917";
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
					window.obj53560_droppedInsideTargetActions_3_runningActionsCount = window.obj53560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj53560_droppedInsideTargetActions_3_runningActionsCount = window.obj53560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj53560_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53595();
function runjs_53595() {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = obj53560_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53560").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_3_runningActionsCount = window.obj53560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53596();
function runjs_53596() {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = obj53560_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj53560").css("border-color", "rgba(0,0,0,0)"); $("#obj53560").css("border-width", "0px"); $("#obj53560").css("border-style", "solid"); $("#obj53560").css("border-radius", "10px"); $("#obj53560").css("-webkit-border-radius", "10px"); $("#obj53560").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_3_runningActionsCount = window.obj53560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj53907 
playAudio_53597();
function playAudio_53597() {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = obj53560_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj53907")[0];
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
		    window.obj53560_droppedInsideTargetActions_3_runningActionsCount = window.obj53560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53560_droppedInsideTargetActions_3_runningActionsCount = window.obj53560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj53560_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53598();
function switchText_53598() {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = obj53560_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53560_droppedInsideTargetActions_3_runningActionsCount = window.obj53560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53560_droppedInsideTargetActions_3_runningActionsCount = window.obj53560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj53560_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj53560_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53572();
function runjs_53572() {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = obj53560_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53929").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_2_runningActionsCount = window.obj53560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53573();
function runjs_53573() {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = obj53560_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53929").css("border-color", "#C00000"); $("#obj53929").css("border-width", "2px"); $("#obj53929").css("border-style", "solid"); $("#obj53929").css("border-radius", "10px"); $("#obj53929").css("-webkit-border-radius", "10px"); $("#obj53929").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_2_runningActionsCount = window.obj53560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53921 
hide_53574();
function hide_53574() {
	var selector = "#obj53921";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = obj53560_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53560_droppedInsideTargetActions_2_runningActionsCount = window.obj53560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53574(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53560_droppedInsideTargetActions_2_runningActionsCount = window.obj53560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53560_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53575();
function runjs_53575() {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = obj53560_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53560").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_2_runningActionsCount = window.obj53560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53576();
function switchText_53576() {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = obj53560_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53560_droppedInsideTargetActions_2_runningActionsCount = window.obj53560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53560_droppedInsideTargetActions_2_runningActionsCount = window.obj53560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj53560_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj53560 
move_53577();
function move_53577() {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = obj53560_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj53560");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 375;
	var moveY = 611;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53560_droppedInsideTargetActions_2_runningActionsCount = window.obj53560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj53560_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53578();
function runjs_53578() {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = obj53560_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53929").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_2_runningActionsCount = window.obj53560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53579();
function runjs_53579() {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = obj53560_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53929").css("border-color", "#000000"); $("#obj53929").css("border-width", "1px"); $("#obj53929").css("border-style", "solid"); $("#obj53929").css("border-radius", "10px"); $("#obj53929").css("-webkit-border-radius", "10px"); $("#obj53929").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_2_runningActionsCount = window.obj53560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj53921
(function(){
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = obj53560_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj53921";
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
					window.obj53560_droppedInsideTargetActions_2_runningActionsCount = window.obj53560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj53560_droppedInsideTargetActions_2_runningActionsCount = window.obj53560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj53560_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53581();
function runjs_53581() {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = obj53560_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53560").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_2_runningActionsCount = window.obj53560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53582();
function runjs_53582() {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = obj53560_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53560").css("border-color", "rgba(0,0,0,0)"); $("#obj53560").css("border-width", "0px"); $("#obj53560").css("border-style", "solid"); $("#obj53560").css("border-radius", "10px"); $("#obj53560").css("-webkit-border-radius", "10px"); $("#obj53560").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_2_runningActionsCount = window.obj53560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj53907 
playAudio_53583();
function playAudio_53583() {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = obj53560_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj53907")[0];
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
		    window.obj53560_droppedInsideTargetActions_2_runningActionsCount = window.obj53560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53560_droppedInsideTargetActions_2_runningActionsCount = window.obj53560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj53560_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53584();
function switchText_53584() {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = obj53560_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53560_droppedInsideTargetActions_2_runningActionsCount = window.obj53560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53560_droppedInsideTargetActions_2_runningActionsCount = window.obj53560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj53560_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj53560_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53565();
function runjs_53565() {
	window.obj53560_droppedInsideTargetActions_runningActionsCount = obj53560_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj53927").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_runningActionsCount = window.obj53560_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53566();
function runjs_53566() {
	window.obj53560_droppedInsideTargetActions_runningActionsCount = obj53560_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj53927").css("border-color", "#058E3F"); $("#obj53927").css("border-width", "2px"); $("#obj53927").css("border-style", "solid"); $("#obj53927").css("border-radius", "10px"); $("#obj53927").css("-webkit-border-radius", "10px"); $("#obj53927").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_runningActionsCount = window.obj53560_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53919 
hide_53567();
function hide_53567() {
	var selector = "#obj53919";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53560_droppedInsideTargetActions_runningActionsCount = obj53560_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53560_droppedInsideTargetActions_runningActionsCount = window.obj53560_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53567(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53560_droppedInsideTargetActions_runningActionsCount = window.obj53560_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53560_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53568();
function runjs_53568() {
	window.obj53560_droppedInsideTargetActions_runningActionsCount = obj53560_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj53560").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53560_droppedInsideTargetActions_runningActionsCount = window.obj53560_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj53560_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53569();
function switchText_53569() {
	window.obj53560_droppedInsideTargetActions_runningActionsCount = obj53560_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53909").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53909_content");
			setTimeout(function () {
				window.obj53560_droppedInsideTargetActions_runningActionsCount = window.obj53560_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53560_droppedInsideTargetActions_runningActionsCount = window.obj53560_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj53560_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj53911 
playAudio_53570();
function playAudio_53570() {
	window.obj53560_droppedInsideTargetActions_runningActionsCount = obj53560_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj53911")[0];
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
		    window.obj53560_droppedInsideTargetActions_runningActionsCount = window.obj53560_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53560_droppedInsideTargetActions_runningActionsCount = window.obj53560_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53560_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53560_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53560_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53560_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj53560_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53560_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53560").trigger("obj53560_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53560) {
				console.warn("de-queueing event obj53560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53560_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj68110_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68110_onTap_activeActionGroupIndex = -1;
		$("#obj68110").trigger("obj68110_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68110) {
				console.warn("de-queueing event obj68110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68110_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68110 
hide_68113();
function hide_68113() {
	var selector = "#obj68110";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68110_onTap_runningActionsCount = obj68110_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68110_onTap_runningActionsCount = window.obj68110_onTap_runningActionsCount - 1;
if (window.obj68110_onTap_runningActionsCount < 0) {
	window.obj68110_onTap_runningActionsCount = 0;
} else if (window.obj68110_onTap_runningActionsCount == 0) {
	obj68110_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68113(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68110_onTap_runningActionsCount = window.obj68110_onTap_runningActionsCount - 1;
if (window.obj68110_onTap_runningActionsCount < 0) {
	window.obj68110_onTap_runningActionsCount = 0;
} else if (window.obj68110_onTap_runningActionsCount == 0) {
	obj68110_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68116 
stopMovie_68112();
function stopMovie_68112() {
	window.obj68110_onTap_runningActionsCount = obj68110_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68116")[0];
	myVideo.pause();
	window.obj68110_onTap_runningActionsCount = window.obj68110_onTap_runningActionsCount - 1;
if (window.obj68110_onTap_runningActionsCount < 0) {
	window.obj68110_onTap_runningActionsCount = 0;
} else if (window.obj68110_onTap_runningActionsCount == 0) {
	obj68110_onTap_actionGroup1();
}
}
















};
obj68110_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68110_onTap_activeActionGroupIndex = -1;
		$("#obj68110").trigger("obj68110_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68110) {
				console.warn("de-queueing event obj68110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68110_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68102
(function(){
	window.obj68110_onTap_runningActionsCount = obj68110_onTap_runningActionsCount + 1;

	var selector = "#obj68102";
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
					window.obj68110_onTap_runningActionsCount = window.obj68110_onTap_runningActionsCount - 1;
if (window.obj68110_onTap_runningActionsCount < 0) {
	window.obj68110_onTap_runningActionsCount = 0;
} else if (window.obj68110_onTap_runningActionsCount == 0) {
	obj68110_onTap_actionGroup2();
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
				window.obj68110_onTap_runningActionsCount = window.obj68110_onTap_runningActionsCount - 1;
if (window.obj68110_onTap_runningActionsCount < 0) {
	window.obj68110_onTap_runningActionsCount = 0;
} else if (window.obj68110_onTap_runningActionsCount == 0) {
	obj68110_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68110_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68110_onTap_activeActionGroupIndex = -1;
		$("#obj68110").trigger("obj68110_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68110) {
				console.warn("de-queueing event obj68110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68110_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68116 
move_68115();
function move_68115() {
	window.obj68110_onTap_runningActionsCount = obj68110_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68116");
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
			window.obj68110_onTap_runningActionsCount = window.obj68110_onTap_runningActionsCount - 1;
if (window.obj68110_onTap_runningActionsCount < 0) {
	window.obj68110_onTap_runningActionsCount = 0;
} else if (window.obj68110_onTap_runningActionsCount == 0) {
	obj68110_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68110_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68110_onTap_activeActionGroupIndex = -1;
		$("#obj68110").trigger("obj68110_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68110) {
				console.warn("de-queueing event obj68110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68110_onTap_activeActionGroupIndex = 3;
	





















};
obj68102_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68102_onTap_activeActionGroupIndex = -1;
		$("#obj68102").trigger("obj68102_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68102) {
				console.warn("de-queueing event obj68102." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68102").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68102_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68102 
hide_68105();
function hide_68105() {
	var selector = "#obj68102";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68102_onTap_runningActionsCount = obj68102_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68102_onTap_runningActionsCount = window.obj68102_onTap_runningActionsCount - 1;
if (window.obj68102_onTap_runningActionsCount < 0) {
	window.obj68102_onTap_runningActionsCount = 0;
} else if (window.obj68102_onTap_runningActionsCount == 0) {
	obj68102_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68105(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68102_onTap_runningActionsCount = window.obj68102_onTap_runningActionsCount - 1;
if (window.obj68102_onTap_runningActionsCount < 0) {
	window.obj68102_onTap_runningActionsCount = 0;
} else if (window.obj68102_onTap_runningActionsCount == 0) {
	obj68102_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68116 
playPauseMovie_68104();
function playPauseMovie_68104() {
	window.obj68102_onTap_runningActionsCount = obj68102_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68116")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68102_onTap_runningActionsCount = window.obj68102_onTap_runningActionsCount - 1;
if (window.obj68102_onTap_runningActionsCount < 0) {
	window.obj68102_onTap_runningActionsCount = 0;
} else if (window.obj68102_onTap_runningActionsCount == 0) {
	obj68102_onTap_actionGroup1();
}
}

















};
obj68102_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68102_onTap_activeActionGroupIndex = -1;
		$("#obj68102").trigger("obj68102_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68102) {
				console.warn("de-queueing event obj68102." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68102").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68102_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68110
(function(){
	window.obj68102_onTap_runningActionsCount = obj68102_onTap_runningActionsCount + 1;

	var selector = "#obj68110";
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
					window.obj68102_onTap_runningActionsCount = window.obj68102_onTap_runningActionsCount - 1;
if (window.obj68102_onTap_runningActionsCount < 0) {
	window.obj68102_onTap_runningActionsCount = 0;
} else if (window.obj68102_onTap_runningActionsCount == 0) {
	obj68102_onTap_actionGroup2();
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
				window.obj68102_onTap_runningActionsCount = window.obj68102_onTap_runningActionsCount - 1;
if (window.obj68102_onTap_runningActionsCount < 0) {
	window.obj68102_onTap_runningActionsCount = 0;
} else if (window.obj68102_onTap_runningActionsCount == 0) {
	obj68102_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68102_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68102_onTap_activeActionGroupIndex = -1;
		$("#obj68102").trigger("obj68102_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68102) {
				console.warn("de-queueing event obj68102." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68102").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68102_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68116 
move_68107();
function move_68107() {
	window.obj68102_onTap_runningActionsCount = obj68102_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68116");
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
			window.obj68102_onTap_runningActionsCount = window.obj68102_onTap_runningActionsCount - 1;
if (window.obj68102_onTap_runningActionsCount < 0) {
	window.obj68102_onTap_runningActionsCount = 0;
} else if (window.obj68102_onTap_runningActionsCount == 0) {
	obj68102_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68102_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68102_onTap_activeActionGroupIndex = -1;
		$("#obj68102").trigger("obj68102_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68102) {
				console.warn("de-queueing event obj68102." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68102").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68102_onTap_activeActionGroupIndex = 3;
	





















};
obj89197_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89197_onTap_activeActionGroupIndex = -1;
		$("#obj89197").trigger("obj89197_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89197) {
				console.warn("de-queueing event obj89197." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89197").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89197_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89202 
stopAudio_89199();
function stopAudio_89199() {
	window.obj89197_onTap_runningActionsCount = obj89197_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89202")[0];
	myAudio.pause();
	window.obj89197_onTap_runningActionsCount = window.obj89197_onTap_runningActionsCount - 1;
if (window.obj89197_onTap_runningActionsCount < 0) {
	window.obj89197_onTap_runningActionsCount = 0;
} else if (window.obj89197_onTap_runningActionsCount == 0) {
	obj89197_onTap_actionGroup1();
}
}








};
obj89197_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89197_onTap_activeActionGroupIndex = -1;
		$("#obj89197").trigger("obj89197_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89197) {
				console.warn("de-queueing event obj89197." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89197").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89197_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89197 
hide_89200();
function hide_89200() {
	var selector = "#obj89197";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89197_onTap_runningActionsCount = obj89197_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89197_onTap_runningActionsCount = window.obj89197_onTap_runningActionsCount - 1;
if (window.obj89197_onTap_runningActionsCount < 0) {
	window.obj89197_onTap_runningActionsCount = 0;
} else if (window.obj89197_onTap_runningActionsCount == 0) {
	obj89197_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89200(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89197_onTap_runningActionsCount = window.obj89197_onTap_runningActionsCount - 1;
if (window.obj89197_onTap_runningActionsCount < 0) {
	window.obj89197_onTap_runningActionsCount = 0;
} else if (window.obj89197_onTap_runningActionsCount == 0) {
	obj89197_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89197_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89197_onTap_activeActionGroupIndex = -1;
		$("#obj89197").trigger("obj89197_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89197) {
				console.warn("de-queueing event obj89197." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89197").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89197_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89192
(function(){
	window.obj89197_onTap_runningActionsCount = obj89197_onTap_runningActionsCount + 1;

	var selector = "#obj89192";
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
					window.obj89197_onTap_runningActionsCount = window.obj89197_onTap_runningActionsCount - 1;
if (window.obj89197_onTap_runningActionsCount < 0) {
	window.obj89197_onTap_runningActionsCount = 0;
} else if (window.obj89197_onTap_runningActionsCount == 0) {
	obj89197_onTap_actionGroup3();
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
				window.obj89197_onTap_runningActionsCount = window.obj89197_onTap_runningActionsCount - 1;
if (window.obj89197_onTap_runningActionsCount < 0) {
	window.obj89197_onTap_runningActionsCount = 0;
} else if (window.obj89197_onTap_runningActionsCount == 0) {
	obj89197_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89197_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89197_onTap_activeActionGroupIndex = -1;
		$("#obj89197").trigger("obj89197_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89197) {
				console.warn("de-queueing event obj89197." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89197").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89197_onTap_activeActionGroupIndex = 3;
	





















};
obj89192_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89192_onTap_activeActionGroupIndex = -1;
		$("#obj89192").trigger("obj89192_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89192) {
				console.warn("de-queueing event obj89192." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89192").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89192_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89192 
hide_89194();
function hide_89194() {
	var selector = "#obj89192";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89192_onTap_runningActionsCount = obj89192_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89192_onTap_runningActionsCount = window.obj89192_onTap_runningActionsCount - 1;
if (window.obj89192_onTap_runningActionsCount < 0) {
	window.obj89192_onTap_runningActionsCount = 0;
} else if (window.obj89192_onTap_runningActionsCount == 0) {
	obj89192_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89194(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89192_onTap_runningActionsCount = window.obj89192_onTap_runningActionsCount - 1;
if (window.obj89192_onTap_runningActionsCount < 0) {
	window.obj89192_onTap_runningActionsCount = 0;
} else if (window.obj89192_onTap_runningActionsCount == 0) {
	obj89192_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89192_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89192_onTap_activeActionGroupIndex = -1;
		$("#obj89192").trigger("obj89192_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89192) {
				console.warn("de-queueing event obj89192." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89192").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89192_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89197
(function(){
	window.obj89192_onTap_runningActionsCount = obj89192_onTap_runningActionsCount + 1;

	var selector = "#obj89197";
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
					window.obj89192_onTap_runningActionsCount = window.obj89192_onTap_runningActionsCount - 1;
if (window.obj89192_onTap_runningActionsCount < 0) {
	window.obj89192_onTap_runningActionsCount = 0;
} else if (window.obj89192_onTap_runningActionsCount == 0) {
	obj89192_onTap_actionGroup2();
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
				window.obj89192_onTap_runningActionsCount = window.obj89192_onTap_runningActionsCount - 1;
if (window.obj89192_onTap_runningActionsCount < 0) {
	window.obj89192_onTap_runningActionsCount = 0;
} else if (window.obj89192_onTap_runningActionsCount == 0) {
	obj89192_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89192_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89192_onTap_activeActionGroupIndex = -1;
		$("#obj89192").trigger("obj89192_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89192) {
				console.warn("de-queueing event obj89192." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89192").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89192_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89202 
playAudio_89196();
function playAudio_89196() {
	window.obj89192_onTap_runningActionsCount = obj89192_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89202")[0];
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
		    window.obj89192_onTap_runningActionsCount = window.obj89192_onTap_runningActionsCount - 1;
if (window.obj89192_onTap_runningActionsCount < 0) {
	window.obj89192_onTap_runningActionsCount = 0;
} else if (window.obj89192_onTap_runningActionsCount == 0) {
	obj89192_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89192_onTap_runningActionsCount = window.obj89192_onTap_runningActionsCount - 1;
if (window.obj89192_onTap_runningActionsCount < 0) {
	window.obj89192_onTap_runningActionsCount = 0;
} else if (window.obj89192_onTap_runningActionsCount == 0) {
	obj89192_onTap_actionGroup3();
}
	}
}









};
obj89192_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89192_onTap_activeActionGroupIndex = -1;
		$("#obj89192").trigger("obj89192_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89192) {
				console.warn("de-queueing event obj89192." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89192").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89192_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj53950: Event Touch Down
 *
 */
$("#obj53950").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj53950_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53950_onTap is still running");
	return;
}
var obj53950_onTap_runningActionsCount = 0;
var obj53950_onTap_loopCount = 0;
obj53950_onTap_actionGroup0();
});










/*
 *
 *   obj53947: Event Touch Down
 *
 */
$("#obj53947").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj53947_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53947_onTap is still running");
	return;
}
var obj53947_onTap_runningActionsCount = 0;
var obj53947_onTap_loopCount = 0;
obj53947_onTap_actionGroup0();
});










/*
 *
 *   obj53943: Event Touch Down
 *
 */
$("#obj53943").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj53943_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53943_onTap is still running");
	return;
}
var obj53943_onTap_runningActionsCount = 0;
var obj53943_onTap_loopCount = 0;
obj53943_onTap_actionGroup0();
});



























































































































































































































































/*
 *
 *   obj53828: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj53828");
	var winTarget = document.getElementById("obj53828");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj53828").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj53828_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj53828_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj53828_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53828_onTouchDown is still running");
	return;
}
var obj53828_onTouchDown_runningActionsCount = 0;
var obj53828_onTouchDown_loopCount = 0;
obj53828_onTouchDown_actionGroup0();
});



/*
 *
 *   obj53828: Event SCActionDragDrop53831_droppedOutsideTargetActions
 *
 */
$("#obj53828").bind("SCActionDragDrop53831_droppedOutsideTargetActions", function(event) {
	if (window.obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53828_SCActionDragDrop53831_droppedOutsideTargetActions is still running");
	return;
}
var obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_runningActionsCount = 0;
var obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_loopCount = 0;
obj53828_SCActionDragDrop53831_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj53828: Event droppedInsideTargetActions_5
 *
 */
$("#obj53828").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj53828_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53828_droppedInsideTargetActions_5 is still running");
	return;
}
var obj53828_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj53828_droppedInsideTargetActions_5_loopCount = 0;
obj53828_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj53828: Event droppedInsideTargetActions_4
 *
 */
$("#obj53828").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj53828_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53828_droppedInsideTargetActions_4 is still running");
	return;
}
var obj53828_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj53828_droppedInsideTargetActions_4_loopCount = 0;
obj53828_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj53828: Event droppedInsideTargetActions_3
 *
 */
$("#obj53828").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj53828_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53828_droppedInsideTargetActions_3 is still running");
	return;
}
var obj53828_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj53828_droppedInsideTargetActions_3_loopCount = 0;
obj53828_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj53828: Event droppedInsideTargetActions_2
 *
 */
$("#obj53828").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj53828_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53828_droppedInsideTargetActions_2 is still running");
	return;
}
var obj53828_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj53828_droppedInsideTargetActions_2_loopCount = 0;
obj53828_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj53828: Event droppedInsideTargetActions
 *
 */
$("#obj53828").bind("droppedInsideTargetActions", function(event) {
	if (window.obj53828_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53828_droppedInsideTargetActions is still running");
	return;
}
var obj53828_droppedInsideTargetActions_runningActionsCount = 0;
var obj53828_droppedInsideTargetActions_loopCount = 0;
obj53828_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj53761: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj53761");
	var winTarget = document.getElementById("obj53761");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj53761").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj53761_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj53761_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj53761_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53761_onTouchDown is still running");
	return;
}
var obj53761_onTouchDown_runningActionsCount = 0;
var obj53761_onTouchDown_loopCount = 0;
obj53761_onTouchDown_actionGroup0();
});



/*
 *
 *   obj53761: Event SCActionDragDrop53764_droppedOutsideTargetActions
 *
 */
$("#obj53761").bind("SCActionDragDrop53764_droppedOutsideTargetActions", function(event) {
	if (window.obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53761_SCActionDragDrop53764_droppedOutsideTargetActions is still running");
	return;
}
var obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_runningActionsCount = 0;
var obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_loopCount = 0;
obj53761_SCActionDragDrop53764_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj53761: Event droppedInsideTargetActions_5
 *
 */
$("#obj53761").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj53761_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53761_droppedInsideTargetActions_5 is still running");
	return;
}
var obj53761_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj53761_droppedInsideTargetActions_5_loopCount = 0;
obj53761_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj53761: Event droppedInsideTargetActions_4
 *
 */
$("#obj53761").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj53761_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53761_droppedInsideTargetActions_4 is still running");
	return;
}
var obj53761_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj53761_droppedInsideTargetActions_4_loopCount = 0;
obj53761_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj53761: Event droppedInsideTargetActions_3
 *
 */
$("#obj53761").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj53761_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53761_droppedInsideTargetActions_3 is still running");
	return;
}
var obj53761_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj53761_droppedInsideTargetActions_3_loopCount = 0;
obj53761_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj53761: Event droppedInsideTargetActions_2
 *
 */
$("#obj53761").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj53761_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53761_droppedInsideTargetActions_2 is still running");
	return;
}
var obj53761_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj53761_droppedInsideTargetActions_2_loopCount = 0;
obj53761_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj53761: Event droppedInsideTargetActions
 *
 */
$("#obj53761").bind("droppedInsideTargetActions", function(event) {
	if (window.obj53761_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53761_droppedInsideTargetActions is still running");
	return;
}
var obj53761_droppedInsideTargetActions_runningActionsCount = 0;
var obj53761_droppedInsideTargetActions_loopCount = 0;
obj53761_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj53694: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj53694");
	var winTarget = document.getElementById("obj53694");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj53694").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj53694_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj53694_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj53694_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53694_onTouchDown is still running");
	return;
}
var obj53694_onTouchDown_runningActionsCount = 0;
var obj53694_onTouchDown_loopCount = 0;
obj53694_onTouchDown_actionGroup0();
});



/*
 *
 *   obj53694: Event SCActionDragDrop53697_droppedOutsideTargetActions
 *
 */
$("#obj53694").bind("SCActionDragDrop53697_droppedOutsideTargetActions", function(event) {
	if (window.obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53694_SCActionDragDrop53697_droppedOutsideTargetActions is still running");
	return;
}
var obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_runningActionsCount = 0;
var obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_loopCount = 0;
obj53694_SCActionDragDrop53697_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj53694: Event droppedInsideTargetActions_5
 *
 */
$("#obj53694").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj53694_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53694_droppedInsideTargetActions_5 is still running");
	return;
}
var obj53694_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj53694_droppedInsideTargetActions_5_loopCount = 0;
obj53694_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj53694: Event droppedInsideTargetActions_4
 *
 */
$("#obj53694").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj53694_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53694_droppedInsideTargetActions_4 is still running");
	return;
}
var obj53694_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj53694_droppedInsideTargetActions_4_loopCount = 0;
obj53694_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj53694: Event droppedInsideTargetActions_3
 *
 */
$("#obj53694").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj53694_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53694_droppedInsideTargetActions_3 is still running");
	return;
}
var obj53694_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj53694_droppedInsideTargetActions_3_loopCount = 0;
obj53694_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj53694: Event droppedInsideTargetActions_2
 *
 */
$("#obj53694").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj53694_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53694_droppedInsideTargetActions_2 is still running");
	return;
}
var obj53694_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj53694_droppedInsideTargetActions_2_loopCount = 0;
obj53694_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj53694: Event droppedInsideTargetActions
 *
 */
$("#obj53694").bind("droppedInsideTargetActions", function(event) {
	if (window.obj53694_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53694_droppedInsideTargetActions is still running");
	return;
}
var obj53694_droppedInsideTargetActions_runningActionsCount = 0;
var obj53694_droppedInsideTargetActions_loopCount = 0;
obj53694_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj53627: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj53627");
	var winTarget = document.getElementById("obj53627");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj53627").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj53627_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj53627_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj53627_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53627_onTouchDown is still running");
	return;
}
var obj53627_onTouchDown_runningActionsCount = 0;
var obj53627_onTouchDown_loopCount = 0;
obj53627_onTouchDown_actionGroup0();
});



/*
 *
 *   obj53627: Event SCActionDragDrop53630_droppedOutsideTargetActions
 *
 */
$("#obj53627").bind("SCActionDragDrop53630_droppedOutsideTargetActions", function(event) {
	if (window.obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53627_SCActionDragDrop53630_droppedOutsideTargetActions is still running");
	return;
}
var obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_runningActionsCount = 0;
var obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_loopCount = 0;
obj53627_SCActionDragDrop53630_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj53627: Event droppedInsideTargetActions_5
 *
 */
$("#obj53627").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj53627_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53627_droppedInsideTargetActions_5 is still running");
	return;
}
var obj53627_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj53627_droppedInsideTargetActions_5_loopCount = 0;
obj53627_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj53627: Event droppedInsideTargetActions_4
 *
 */
$("#obj53627").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj53627_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53627_droppedInsideTargetActions_4 is still running");
	return;
}
var obj53627_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj53627_droppedInsideTargetActions_4_loopCount = 0;
obj53627_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj53627: Event droppedInsideTargetActions_3
 *
 */
$("#obj53627").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj53627_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53627_droppedInsideTargetActions_3 is still running");
	return;
}
var obj53627_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj53627_droppedInsideTargetActions_3_loopCount = 0;
obj53627_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj53627: Event droppedInsideTargetActions_2
 *
 */
$("#obj53627").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj53627_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53627_droppedInsideTargetActions_2 is still running");
	return;
}
var obj53627_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj53627_droppedInsideTargetActions_2_loopCount = 0;
obj53627_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj53627: Event droppedInsideTargetActions
 *
 */
$("#obj53627").bind("droppedInsideTargetActions", function(event) {
	if (window.obj53627_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53627_droppedInsideTargetActions is still running");
	return;
}
var obj53627_droppedInsideTargetActions_runningActionsCount = 0;
var obj53627_droppedInsideTargetActions_loopCount = 0;
obj53627_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj53560: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj53560");
	var winTarget = document.getElementById("obj53560");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj53560").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj53560_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj53560_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj53560_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53560_onTouchDown is still running");
	return;
}
var obj53560_onTouchDown_runningActionsCount = 0;
var obj53560_onTouchDown_loopCount = 0;
obj53560_onTouchDown_actionGroup0();
});



/*
 *
 *   obj53560: Event SCActionDragDrop53563_droppedOutsideTargetActions
 *
 */
$("#obj53560").bind("SCActionDragDrop53563_droppedOutsideTargetActions", function(event) {
	if (window.obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53560_SCActionDragDrop53563_droppedOutsideTargetActions is still running");
	return;
}
var obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_runningActionsCount = 0;
var obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_loopCount = 0;
obj53560_SCActionDragDrop53563_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj53560: Event droppedInsideTargetActions_5
 *
 */
$("#obj53560").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj53560_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53560_droppedInsideTargetActions_5 is still running");
	return;
}
var obj53560_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj53560_droppedInsideTargetActions_5_loopCount = 0;
obj53560_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj53560: Event droppedInsideTargetActions_4
 *
 */
$("#obj53560").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj53560_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53560_droppedInsideTargetActions_4 is still running");
	return;
}
var obj53560_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj53560_droppedInsideTargetActions_4_loopCount = 0;
obj53560_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj53560: Event droppedInsideTargetActions_3
 *
 */
$("#obj53560").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj53560_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53560_droppedInsideTargetActions_3 is still running");
	return;
}
var obj53560_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj53560_droppedInsideTargetActions_3_loopCount = 0;
obj53560_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj53560: Event droppedInsideTargetActions_2
 *
 */
$("#obj53560").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj53560_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53560_droppedInsideTargetActions_2 is still running");
	return;
}
var obj53560_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj53560_droppedInsideTargetActions_2_loopCount = 0;
obj53560_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj53560: Event droppedInsideTargetActions
 *
 */
$("#obj53560").bind("droppedInsideTargetActions", function(event) {
	if (window.obj53560_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53560_droppedInsideTargetActions is still running");
	return;
}
var obj53560_droppedInsideTargetActions_runningActionsCount = 0;
var obj53560_droppedInsideTargetActions_loopCount = 0;
obj53560_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj68110: Event Touch Down
 *
 */
$("#obj68110").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68110_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68110_onTap is still running");
	return;
}
var obj68110_onTap_runningActionsCount = 0;
var obj68110_onTap_loopCount = 0;
obj68110_onTap_actionGroup0();
});










/*
 *
 *   obj68102: Event Touch Down
 *
 */
$("#obj68102").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68102_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68102_onTap is still running");
	return;
}
var obj68102_onTap_runningActionsCount = 0;
var obj68102_onTap_loopCount = 0;
obj68102_onTap_actionGroup0();
});










/*
 *
 *   obj89197: Event Touch Down
 *
 */
$("#obj89197").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89197_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89197_onTap is still running");
	return;
}
var obj89197_onTap_runningActionsCount = 0;
var obj89197_onTap_loopCount = 0;
obj89197_onTap_actionGroup0();
});










/*
 *
 *   obj89192: Event Touch Down
 *
 */
$("#obj89192").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89192_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89192_onTap is still running");
	return;
}
var obj89192_onTap_runningActionsCount = 0;
var obj89192_onTap_loopCount = 0;
obj89192_onTap_actionGroup0();
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
	
$("#obj53966").trigger('SCEventShow');
$("#obj53950").trigger('SCEventShow');
$("#obj53947").trigger('SCEventShow');
$("#obj53943").trigger('SCEventShow');
$("#obj53941").trigger('SCEventShow');
$("#obj53939").trigger('SCEventShow');
$("#obj53937").trigger('SCEventShow');
$("#obj53935").trigger('SCEventShow');
$("#obj53933").trigger('SCEventShow');
$("#obj53931").trigger('SCEventShow');
$("#obj53929").trigger('SCEventShow');
$("#obj53927").trigger('SCEventShow');
$("#obj53925").trigger('SCEventShow');
$("#obj53923").trigger('SCEventShow');
$("#obj53921").trigger('SCEventShow');
$("#obj53919").trigger('SCEventShow');
$("#obj53917").trigger('SCEventShow');
$("#obj53915").trigger('SCEventShow');
$("#obj53913").trigger('SCEventShow');
$("#obj53911").trigger('SCEventShow');
$("#obj53909").trigger('SCEventShow');
$("#obj53907").trigger('SCEventShow');
$("#obj53905").trigger('SCEventShow');
$("#obj53903").trigger('SCEventShow');
$("#obj53901").trigger('SCEventShow');
$("#obj53899").trigger('SCEventShow');
$("#obj53897").trigger('SCEventShow');
$("#obj53895").trigger('SCEventShow');
$("#obj53828").trigger('SCEventShow');
$("#obj53761").trigger('SCEventShow');
$("#obj53694").trigger('SCEventShow');
$("#obj53627").trigger('SCEventShow');
$("#obj53560").trigger('SCEventShow');
$("#obj68110").trigger('SCEventShow');
$("#obj68102").trigger('SCEventShow');
$("#obj89197").trigger('SCEventShow');
$("#obj89192").trigger('SCEventShow');
$("#obj89202").trigger('SCEventShow');
$("#obj95015").trigger('SCEventShow');
$("#obj68116").trigger('SCEventShow');
	
});