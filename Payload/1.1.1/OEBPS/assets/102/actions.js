pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 25849;
pubcoder.page.title = pubcoder.page.title || "102";
pubcoder.page.number = pubcoder.page.number || 102;
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
var obj81578_onTap_activeActionGroupIndex = -1;
var obj81578_onTap_runningActionsCount = 0;
var obj81578_onTap_loopCount = 0;
var obj81575_onTap_activeActionGroupIndex = -1;
var obj81575_onTap_runningActionsCount = 0;
var obj81575_onTap_loopCount = 0;
var obj81571_onTap_activeActionGroupIndex = -1;
var obj81571_onTap_runningActionsCount = 0;
var obj81571_onTap_loopCount = 0;
var obj81462_onDrag_activeActionGroupIndex = -1;
var obj81462_onDrag_runningActionsCount = 0;
var obj81462_onDrag_loopCount = 0;
var obj81462_onTouchDown_activeActionGroupIndex = -1;
var obj81462_onTouchDown_runningActionsCount = 0;
var obj81462_onTouchDown_loopCount = 0;
var obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_runningActionsCount = 0;
var obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_loopCount = 0;
var obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj81462_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj81462_droppedInsideTargetActions_4_loopCount = 0;
var obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj81462_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj81462_droppedInsideTargetActions_3_loopCount = 0;
var obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj81462_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj81462_droppedInsideTargetActions_2_loopCount = 0;
var obj81462_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj81462_droppedInsideTargetActions_runningActionsCount = 0;
var obj81462_droppedInsideTargetActions_loopCount = 0;
var obj81395_onDrag_activeActionGroupIndex = -1;
var obj81395_onDrag_runningActionsCount = 0;
var obj81395_onDrag_loopCount = 0;
var obj81395_onTouchDown_activeActionGroupIndex = -1;
var obj81395_onTouchDown_runningActionsCount = 0;
var obj81395_onTouchDown_loopCount = 0;
var obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_runningActionsCount = 0;
var obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_loopCount = 0;
var obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj81395_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj81395_droppedInsideTargetActions_4_loopCount = 0;
var obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj81395_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj81395_droppedInsideTargetActions_3_loopCount = 0;
var obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj81395_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj81395_droppedInsideTargetActions_2_loopCount = 0;
var obj81395_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj81395_droppedInsideTargetActions_runningActionsCount = 0;
var obj81395_droppedInsideTargetActions_loopCount = 0;
var obj81328_onDrag_activeActionGroupIndex = -1;
var obj81328_onDrag_runningActionsCount = 0;
var obj81328_onDrag_loopCount = 0;
var obj81328_onTouchDown_activeActionGroupIndex = -1;
var obj81328_onTouchDown_runningActionsCount = 0;
var obj81328_onTouchDown_loopCount = 0;
var obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_runningActionsCount = 0;
var obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_loopCount = 0;
var obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj81328_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj81328_droppedInsideTargetActions_4_loopCount = 0;
var obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj81328_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj81328_droppedInsideTargetActions_3_loopCount = 0;
var obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj81328_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj81328_droppedInsideTargetActions_2_loopCount = 0;
var obj81328_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj81328_droppedInsideTargetActions_runningActionsCount = 0;
var obj81328_droppedInsideTargetActions_loopCount = 0;
var obj81261_onDrag_activeActionGroupIndex = -1;
var obj81261_onDrag_runningActionsCount = 0;
var obj81261_onDrag_loopCount = 0;
var obj81261_onTouchDown_activeActionGroupIndex = -1;
var obj81261_onTouchDown_runningActionsCount = 0;
var obj81261_onTouchDown_loopCount = 0;
var obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_runningActionsCount = 0;
var obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_loopCount = 0;
var obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj81261_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj81261_droppedInsideTargetActions_4_loopCount = 0;
var obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj81261_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj81261_droppedInsideTargetActions_3_loopCount = 0;
var obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj81261_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj81261_droppedInsideTargetActions_2_loopCount = 0;
var obj81261_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj81261_droppedInsideTargetActions_runningActionsCount = 0;
var obj81261_droppedInsideTargetActions_loopCount = 0;
var obj81243_onTap_activeActionGroupIndex = -1;
var obj81243_onTap_runningActionsCount = 0;
var obj81243_onTap_loopCount = 0;
var obj81235_onTap_activeActionGroupIndex = -1;
var obj81235_onTap_runningActionsCount = 0;
var obj81235_onTap_loopCount = 0;
var obj88093_onTap_activeActionGroupIndex = -1;
var obj88093_onTap_runningActionsCount = 0;
var obj88093_onTap_loopCount = 0;
var obj88088_onTap_activeActionGroupIndex = -1;
var obj88088_onTap_runningActionsCount = 0;
var obj88088_onTap_loopCount = 0;
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
		
obj81578_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81578_onTap_activeActionGroupIndex = -1;
		$("#obj81578").trigger("obj81578_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81578) {
				console.warn("de-queueing event obj81578." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81578").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81578_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_81580();
function goToPage_81580() {
	window.obj81578_onTap_runningActionsCount = obj81578_onTap_runningActionsCount + 1;
	$("#anchor606")[0].click();
	window.obj81578_onTap_runningActionsCount = window.obj81578_onTap_runningActionsCount - 1;
if (window.obj81578_onTap_runningActionsCount < 0) {
	window.obj81578_onTap_runningActionsCount = 0;
} else if (window.obj81578_onTap_runningActionsCount == 0) {
	obj81578_onTap_actionGroup1();
}
}





















};
obj81578_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81578_onTap_activeActionGroupIndex = -1;
		$("#obj81578").trigger("obj81578_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81578) {
				console.warn("de-queueing event obj81578." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81578").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81578_onTap_activeActionGroupIndex = 1;
	





















};
obj81575_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81575_onTap_activeActionGroupIndex = -1;
		$("#obj81575").trigger("obj81575_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81575) {
				console.warn("de-queueing event obj81575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81575_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_81577();
function goToPage_81577() {
	window.obj81575_onTap_runningActionsCount = obj81575_onTap_runningActionsCount + 1;
	$("#anchor607")[0].click();
	window.obj81575_onTap_runningActionsCount = window.obj81575_onTap_runningActionsCount - 1;
if (window.obj81575_onTap_runningActionsCount < 0) {
	window.obj81575_onTap_runningActionsCount = 0;
} else if (window.obj81575_onTap_runningActionsCount == 0) {
	obj81575_onTap_actionGroup1();
}
}





















};
obj81575_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81575_onTap_activeActionGroupIndex = -1;
		$("#obj81575").trigger("obj81575_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81575) {
				console.warn("de-queueing event obj81575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81575_onTap_activeActionGroupIndex = 1;
	





















};
obj81571_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81571_onTap_activeActionGroupIndex = -1;
		$("#obj81571").trigger("obj81571_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81571) {
				console.warn("de-queueing event obj81571." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81571").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81571_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_81573();
function goToPage_81573() {
	window.obj81571_onTap_runningActionsCount = obj81571_onTap_runningActionsCount + 1;
	$("#anchor608")[0].click();
	window.obj81571_onTap_runningActionsCount = window.obj81571_onTap_runningActionsCount - 1;
if (window.obj81571_onTap_runningActionsCount < 0) {
	window.obj81571_onTap_runningActionsCount = 0;
} else if (window.obj81571_onTap_runningActionsCount == 0) {
	obj81571_onTap_actionGroup1();
}
}





















};
obj81571_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81571_onTap_activeActionGroupIndex = -1;
		$("#obj81571").trigger("obj81571_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81571) {
				console.warn("de-queueing event obj81571." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81571").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81571_onTap_activeActionGroupIndex = 1;
	





















};
obj81462_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_onTouchDown_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj81462");
//	action: dragDrop
//	target: obj81462 
dragDrop_81465();
function dragDrop_81465() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj81462_onTouchDown_runningActionsCount = obj81462_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj81462');
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
	  	containerNode = $('#obj81561');
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
    	window.obj81462_onTouchDown_runningActionsCount = window.obj81462_onTouchDown_runningActionsCount - 1;
if (window.obj81462_onTouchDown_runningActionsCount < 0) {
	window.obj81462_onTouchDown_runningActionsCount = 0;
} else if (window.obj81462_onTouchDown_runningActionsCount == 0) {
	obj81462_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj81551","#obj81557","#obj81555","#obj81553");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_81465 = false;
    	var dropped_id_81465;
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
					dropped_81465 = true;
					dropped_id_81465 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_81465) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj81462").trigger('SCActionDragDrop81465_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj81462_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81462_onTouchDown_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj81462 
move_92435();
function move_92435() {
	window.obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_runningActionsCount = obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj81462");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 356;
	var moveY = 576;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_runningActionsCount = window.obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj81462_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81502();
function runjs_81502() {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = obj81462_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81553").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_4_runningActionsCount = window.obj81462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81503();
function runjs_81503() {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = obj81462_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81553").css("border-color", "#C00000"); $("#obj81553").css("border-width", "2px"); $("#obj81553").css("border-style", "solid"); $("#obj81553").css("border-radius", "10px"); $("#obj81553").css("-webkit-border-radius", "10px"); $("#obj81553").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_4_runningActionsCount = window.obj81462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81545 
hide_81504();
function hide_81504() {
	var selector = "#obj81545";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = obj81462_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81462_droppedInsideTargetActions_4_runningActionsCount = window.obj81462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81504(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81462_droppedInsideTargetActions_4_runningActionsCount = window.obj81462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81462_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81505();
function runjs_81505() {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = obj81462_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81462").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_4_runningActionsCount = window.obj81462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81506();
function switchText_81506() {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = obj81462_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81462_droppedInsideTargetActions_4_runningActionsCount = window.obj81462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81462_droppedInsideTargetActions_4_runningActionsCount = window.obj81462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj81462_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81462 
move_81507();
function move_81507() {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = obj81462_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj81462");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 356;
	var moveY = 576;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81462_droppedInsideTargetActions_4_runningActionsCount = window.obj81462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj81462_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81508();
function runjs_81508() {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = obj81462_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81553").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_4_runningActionsCount = window.obj81462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81509();
function runjs_81509() {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = obj81462_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81553").css("border-color", "#000000"); $("#obj81553").css("border-width", "1px"); $("#obj81553").css("border-style", "solid"); $("#obj81553").css("border-radius", "10px"); $("#obj81553").css("-webkit-border-radius", "10px"); $("#obj81553").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_4_runningActionsCount = window.obj81462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81545
(function(){
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = obj81462_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj81545";
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
					window.obj81462_droppedInsideTargetActions_4_runningActionsCount = window.obj81462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj81462_droppedInsideTargetActions_4_runningActionsCount = window.obj81462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81462_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81511();
function runjs_81511() {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = obj81462_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81462").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_4_runningActionsCount = window.obj81462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81512();
function runjs_81512() {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = obj81462_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81462").css("border-color", "rgba(0,0,0,0)"); $("#obj81462").css("border-width", "0px"); $("#obj81462").css("border-style", "solid"); $("#obj81462").css("border-radius", "10px"); $("#obj81462").css("-webkit-border-radius", "10px"); $("#obj81462").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_4_runningActionsCount = window.obj81462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81535 
playAudio_81513();
function playAudio_81513() {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = obj81462_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj81535")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj81462_droppedInsideTargetActions_4_runningActionsCount = window.obj81462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81462_droppedInsideTargetActions_4_runningActionsCount = window.obj81462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj81462_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81514();
function switchText_81514() {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = obj81462_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81462_droppedInsideTargetActions_4_runningActionsCount = window.obj81462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81462_droppedInsideTargetActions_4_runningActionsCount = window.obj81462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj81462_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj81462_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81488();
function runjs_81488() {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = obj81462_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81555").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_3_runningActionsCount = window.obj81462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81489();
function runjs_81489() {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = obj81462_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81555").css("border-color", "#C00000"); $("#obj81555").css("border-width", "2px"); $("#obj81555").css("border-style", "solid"); $("#obj81555").css("border-radius", "10px"); $("#obj81555").css("-webkit-border-radius", "10px"); $("#obj81555").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_3_runningActionsCount = window.obj81462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81547 
hide_81490();
function hide_81490() {
	var selector = "#obj81547";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = obj81462_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81462_droppedInsideTargetActions_3_runningActionsCount = window.obj81462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81490(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81462_droppedInsideTargetActions_3_runningActionsCount = window.obj81462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81462_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81491();
function runjs_81491() {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = obj81462_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81462").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_3_runningActionsCount = window.obj81462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81492();
function switchText_81492() {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = obj81462_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81462_droppedInsideTargetActions_3_runningActionsCount = window.obj81462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81462_droppedInsideTargetActions_3_runningActionsCount = window.obj81462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj81462_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81462 
move_81493();
function move_81493() {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = obj81462_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj81462");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 356;
	var moveY = 576;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81462_droppedInsideTargetActions_3_runningActionsCount = window.obj81462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj81462_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81494();
function runjs_81494() {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = obj81462_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81555").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_3_runningActionsCount = window.obj81462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81495();
function runjs_81495() {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = obj81462_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81555").css("border-color", "#000000"); $("#obj81555").css("border-width", "1px"); $("#obj81555").css("border-style", "solid"); $("#obj81555").css("border-radius", "10px"); $("#obj81555").css("-webkit-border-radius", "10px"); $("#obj81555").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_3_runningActionsCount = window.obj81462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81547
(function(){
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = obj81462_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj81547";
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
					window.obj81462_droppedInsideTargetActions_3_runningActionsCount = window.obj81462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj81462_droppedInsideTargetActions_3_runningActionsCount = window.obj81462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81462_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81497();
function runjs_81497() {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = obj81462_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81462").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_3_runningActionsCount = window.obj81462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81498();
function runjs_81498() {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = obj81462_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81462").css("border-color", "rgba(0,0,0,0)"); $("#obj81462").css("border-width", "0px"); $("#obj81462").css("border-style", "solid"); $("#obj81462").css("border-radius", "10px"); $("#obj81462").css("-webkit-border-radius", "10px"); $("#obj81462").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_3_runningActionsCount = window.obj81462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81535 
playAudio_81499();
function playAudio_81499() {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = obj81462_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj81535")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj81462_droppedInsideTargetActions_3_runningActionsCount = window.obj81462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81462_droppedInsideTargetActions_3_runningActionsCount = window.obj81462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj81462_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81500();
function switchText_81500() {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = obj81462_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81462_droppedInsideTargetActions_3_runningActionsCount = window.obj81462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81462_droppedInsideTargetActions_3_runningActionsCount = window.obj81462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj81462_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj81462_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81474();
function runjs_81474() {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = obj81462_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81557").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_2_runningActionsCount = window.obj81462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81475();
function runjs_81475() {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = obj81462_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81557").css("border-color", "#C00000"); $("#obj81557").css("border-width", "2px"); $("#obj81557").css("border-style", "solid"); $("#obj81557").css("border-radius", "10px"); $("#obj81557").css("-webkit-border-radius", "10px"); $("#obj81557").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_2_runningActionsCount = window.obj81462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81549 
hide_81476();
function hide_81476() {
	var selector = "#obj81549";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = obj81462_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81462_droppedInsideTargetActions_2_runningActionsCount = window.obj81462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81476(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81462_droppedInsideTargetActions_2_runningActionsCount = window.obj81462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81462_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81477();
function runjs_81477() {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = obj81462_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81462").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_2_runningActionsCount = window.obj81462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81478();
function switchText_81478() {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = obj81462_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81462_droppedInsideTargetActions_2_runningActionsCount = window.obj81462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81462_droppedInsideTargetActions_2_runningActionsCount = window.obj81462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj81462_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81462 
move_81479();
function move_81479() {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = obj81462_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj81462");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 356;
	var moveY = 576;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81462_droppedInsideTargetActions_2_runningActionsCount = window.obj81462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj81462_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81480();
function runjs_81480() {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = obj81462_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81557").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_2_runningActionsCount = window.obj81462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81481();
function runjs_81481() {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = obj81462_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81557").css("border-color", "#000000"); $("#obj81557").css("border-width", "1px"); $("#obj81557").css("border-style", "solid"); $("#obj81557").css("border-radius", "10px"); $("#obj81557").css("-webkit-border-radius", "10px"); $("#obj81557").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_2_runningActionsCount = window.obj81462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81549
(function(){
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = obj81462_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj81549";
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
					window.obj81462_droppedInsideTargetActions_2_runningActionsCount = window.obj81462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj81462_droppedInsideTargetActions_2_runningActionsCount = window.obj81462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81462_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81483();
function runjs_81483() {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = obj81462_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81462").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_2_runningActionsCount = window.obj81462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81484();
function runjs_81484() {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = obj81462_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81462").css("border-color", "rgba(0,0,0,0)"); $("#obj81462").css("border-width", "0px"); $("#obj81462").css("border-style", "solid"); $("#obj81462").css("border-radius", "10px"); $("#obj81462").css("-webkit-border-radius", "10px"); $("#obj81462").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_2_runningActionsCount = window.obj81462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81535 
playAudio_81485();
function playAudio_81485() {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = obj81462_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj81535")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj81462_droppedInsideTargetActions_2_runningActionsCount = window.obj81462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81462_droppedInsideTargetActions_2_runningActionsCount = window.obj81462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj81462_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81486();
function switchText_81486() {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = obj81462_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81462_droppedInsideTargetActions_2_runningActionsCount = window.obj81462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81462_droppedInsideTargetActions_2_runningActionsCount = window.obj81462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj81462_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj81462_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81467();
function runjs_81467() {
	window.obj81462_droppedInsideTargetActions_runningActionsCount = obj81462_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81551").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_runningActionsCount = window.obj81462_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_81471();
function switchText_81471() {
	window.obj81462_droppedInsideTargetActions_runningActionsCount = obj81462_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81462_droppedInsideTargetActions_runningActionsCount = window.obj81462_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81462_droppedInsideTargetActions_runningActionsCount = window.obj81462_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj81462_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_81468();
function runjs_81468() {
	window.obj81462_droppedInsideTargetActions_runningActionsCount = obj81462_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81551").css("border-color", "#058E3F"); $("#obj81551").css("border-width", "2px"); $("#obj81551").css("border-style", "solid"); $("#obj81551").css("border-radius", "10px"); $("#obj81551").css("-webkit-border-radius", "10px"); $("#obj81551").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_runningActionsCount = window.obj81462_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81543 
hide_81469();
function hide_81469() {
	var selector = "#obj81543";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81462_droppedInsideTargetActions_runningActionsCount = obj81462_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81462_droppedInsideTargetActions_runningActionsCount = window.obj81462_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81469(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81462_droppedInsideTargetActions_runningActionsCount = window.obj81462_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81462_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_81470();
function runjs_81470() {
	window.obj81462_droppedInsideTargetActions_runningActionsCount = obj81462_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81462").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81462_droppedInsideTargetActions_runningActionsCount = window.obj81462_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj81462_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81539 
playAudio_81472();
function playAudio_81472() {
	window.obj81462_droppedInsideTargetActions_runningActionsCount = obj81462_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj81539")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj81462_droppedInsideTargetActions_runningActionsCount = window.obj81462_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81462_droppedInsideTargetActions_runningActionsCount = window.obj81462_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj81462_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90354();
function switchText_90354() {
	window.obj81462_droppedInsideTargetActions_runningActionsCount = obj81462_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81462_droppedInsideTargetActions_runningActionsCount = window.obj81462_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81462_droppedInsideTargetActions_runningActionsCount = window.obj81462_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81462_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81462_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81462_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81462_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj81462_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81462_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81462").trigger("obj81462_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81462) {
				console.warn("de-queueing event obj81462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81462_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj81395_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_onTouchDown_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj81395");
//	action: dragDrop
//	target: obj81395 
dragDrop_81398();
function dragDrop_81398() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj81395_onTouchDown_runningActionsCount = obj81395_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj81395');
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
	  	containerNode = $('#obj81561');
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
    	window.obj81395_onTouchDown_runningActionsCount = window.obj81395_onTouchDown_runningActionsCount - 1;
if (window.obj81395_onTouchDown_runningActionsCount < 0) {
	window.obj81395_onTouchDown_runningActionsCount = 0;
} else if (window.obj81395_onTouchDown_runningActionsCount == 0) {
	obj81395_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj81553","#obj81557","#obj81555","#obj81551");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_81398 = false;
    	var dropped_id_81398;
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
					dropped_81398 = true;
					dropped_id_81398 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_81398) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj81395").trigger('SCActionDragDrop81398_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj81395_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81395_onTouchDown_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj81395 
move_92433();
function move_92433() {
	window.obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_runningActionsCount = obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj81395");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 97;
	var moveY = 576;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_runningActionsCount = window.obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj81395_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81435();
function runjs_81435() {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = obj81395_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81551").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_4_runningActionsCount = window.obj81395_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81436();
function runjs_81436() {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = obj81395_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81551").css("border-color", "#C00000"); $("#obj81551").css("border-width", "2px"); $("#obj81551").css("border-style", "solid"); $("#obj81551").css("border-radius", "10px"); $("#obj81551").css("-webkit-border-radius", "10px"); $("#obj81551").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_4_runningActionsCount = window.obj81395_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81543 
hide_81437();
function hide_81437() {
	var selector = "#obj81543";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = obj81395_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81395_droppedInsideTargetActions_4_runningActionsCount = window.obj81395_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81437(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81395_droppedInsideTargetActions_4_runningActionsCount = window.obj81395_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81395_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81438();
function runjs_81438() {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = obj81395_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81395").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_4_runningActionsCount = window.obj81395_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81439();
function switchText_81439() {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = obj81395_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81395_droppedInsideTargetActions_4_runningActionsCount = window.obj81395_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81395_droppedInsideTargetActions_4_runningActionsCount = window.obj81395_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj81395_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81395 
move_81440();
function move_81440() {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = obj81395_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj81395");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 97;
	var moveY = 576;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81395_droppedInsideTargetActions_4_runningActionsCount = window.obj81395_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj81395_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81441();
function runjs_81441() {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = obj81395_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81551").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_4_runningActionsCount = window.obj81395_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81442();
function runjs_81442() {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = obj81395_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81551").css("border-color", "#000000"); $("#obj81551").css("border-width", "1px"); $("#obj81551").css("border-style", "solid"); $("#obj81551").css("border-radius", "10px"); $("#obj81551").css("-webkit-border-radius", "10px"); $("#obj81551").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_4_runningActionsCount = window.obj81395_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81543
(function(){
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = obj81395_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj81543";
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
					window.obj81395_droppedInsideTargetActions_4_runningActionsCount = window.obj81395_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj81395_droppedInsideTargetActions_4_runningActionsCount = window.obj81395_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81395_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81444();
function runjs_81444() {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = obj81395_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81395").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_4_runningActionsCount = window.obj81395_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81445();
function runjs_81445() {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = obj81395_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81395").css("border-color", "rgba(0,0,0,0)"); $("#obj81395").css("border-width", "0px"); $("#obj81395").css("border-style", "solid"); $("#obj81395").css("border-radius", "10px"); $("#obj81395").css("-webkit-border-radius", "10px"); $("#obj81395").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_4_runningActionsCount = window.obj81395_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81535 
playAudio_81446();
function playAudio_81446() {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = obj81395_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj81535")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj81395_droppedInsideTargetActions_4_runningActionsCount = window.obj81395_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81395_droppedInsideTargetActions_4_runningActionsCount = window.obj81395_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj81395_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81447();
function switchText_81447() {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = obj81395_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81395_droppedInsideTargetActions_4_runningActionsCount = window.obj81395_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81395_droppedInsideTargetActions_4_runningActionsCount = window.obj81395_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj81395_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj81395_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81421();
function runjs_81421() {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = obj81395_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81555").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_3_runningActionsCount = window.obj81395_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81422();
function runjs_81422() {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = obj81395_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81555").css("border-color", "#C00000"); $("#obj81555").css("border-width", "2px"); $("#obj81555").css("border-style", "solid"); $("#obj81555").css("border-radius", "10px"); $("#obj81555").css("-webkit-border-radius", "10px"); $("#obj81555").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_3_runningActionsCount = window.obj81395_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81547 
hide_81423();
function hide_81423() {
	var selector = "#obj81547";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = obj81395_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81395_droppedInsideTargetActions_3_runningActionsCount = window.obj81395_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81423(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81395_droppedInsideTargetActions_3_runningActionsCount = window.obj81395_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81395_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81424();
function runjs_81424() {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = obj81395_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81395").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_3_runningActionsCount = window.obj81395_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81425();
function switchText_81425() {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = obj81395_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81395_droppedInsideTargetActions_3_runningActionsCount = window.obj81395_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81395_droppedInsideTargetActions_3_runningActionsCount = window.obj81395_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj81395_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81395 
move_81426();
function move_81426() {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = obj81395_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj81395");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 97;
	var moveY = 576;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81395_droppedInsideTargetActions_3_runningActionsCount = window.obj81395_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj81395_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81427();
function runjs_81427() {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = obj81395_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81555").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_3_runningActionsCount = window.obj81395_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81428();
function runjs_81428() {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = obj81395_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81555").css("border-color", "#000000"); $("#obj81555").css("border-width", "1px"); $("#obj81555").css("border-style", "solid"); $("#obj81555").css("border-radius", "10px"); $("#obj81555").css("-webkit-border-radius", "10px"); $("#obj81555").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_3_runningActionsCount = window.obj81395_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81547
(function(){
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = obj81395_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj81547";
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
					window.obj81395_droppedInsideTargetActions_3_runningActionsCount = window.obj81395_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj81395_droppedInsideTargetActions_3_runningActionsCount = window.obj81395_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81395_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81430();
function runjs_81430() {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = obj81395_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81395").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_3_runningActionsCount = window.obj81395_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81431();
function runjs_81431() {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = obj81395_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81395").css("border-color", "rgba(0,0,0,0)"); $("#obj81395").css("border-width", "0px"); $("#obj81395").css("border-style", "solid"); $("#obj81395").css("border-radius", "10px"); $("#obj81395").css("-webkit-border-radius", "10px"); $("#obj81395").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_3_runningActionsCount = window.obj81395_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81535 
playAudio_81432();
function playAudio_81432() {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = obj81395_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj81535")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj81395_droppedInsideTargetActions_3_runningActionsCount = window.obj81395_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81395_droppedInsideTargetActions_3_runningActionsCount = window.obj81395_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj81395_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81433();
function switchText_81433() {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = obj81395_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81395_droppedInsideTargetActions_3_runningActionsCount = window.obj81395_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81395_droppedInsideTargetActions_3_runningActionsCount = window.obj81395_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj81395_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj81395_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81407();
function runjs_81407() {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = obj81395_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81557").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_2_runningActionsCount = window.obj81395_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81408();
function runjs_81408() {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = obj81395_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81557").css("border-color", "#C00000"); $("#obj81557").css("border-width", "2px"); $("#obj81557").css("border-style", "solid"); $("#obj81557").css("border-radius", "10px"); $("#obj81557").css("-webkit-border-radius", "10px"); $("#obj81557").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_2_runningActionsCount = window.obj81395_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81549 
hide_81409();
function hide_81409() {
	var selector = "#obj81549";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = obj81395_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81395_droppedInsideTargetActions_2_runningActionsCount = window.obj81395_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81409(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81395_droppedInsideTargetActions_2_runningActionsCount = window.obj81395_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81395_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81410();
function runjs_81410() {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = obj81395_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81395").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_2_runningActionsCount = window.obj81395_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81411();
function switchText_81411() {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = obj81395_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81395_droppedInsideTargetActions_2_runningActionsCount = window.obj81395_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81395_droppedInsideTargetActions_2_runningActionsCount = window.obj81395_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj81395_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81395 
move_81412();
function move_81412() {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = obj81395_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj81395");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 97;
	var moveY = 576;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81395_droppedInsideTargetActions_2_runningActionsCount = window.obj81395_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj81395_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81413();
function runjs_81413() {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = obj81395_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81557").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_2_runningActionsCount = window.obj81395_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81414();
function runjs_81414() {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = obj81395_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81557").css("border-color", "#000000"); $("#obj81557").css("border-width", "1px"); $("#obj81557").css("border-style", "solid"); $("#obj81557").css("border-radius", "10px"); $("#obj81557").css("-webkit-border-radius", "10px"); $("#obj81557").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_2_runningActionsCount = window.obj81395_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81549
(function(){
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = obj81395_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj81549";
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
					window.obj81395_droppedInsideTargetActions_2_runningActionsCount = window.obj81395_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj81395_droppedInsideTargetActions_2_runningActionsCount = window.obj81395_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81395_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81416();
function runjs_81416() {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = obj81395_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81395").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_2_runningActionsCount = window.obj81395_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81417();
function runjs_81417() {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = obj81395_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81395").css("border-color", "rgba(0,0,0,0)"); $("#obj81395").css("border-width", "0px"); $("#obj81395").css("border-style", "solid"); $("#obj81395").css("border-radius", "10px"); $("#obj81395").css("-webkit-border-radius", "10px"); $("#obj81395").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_2_runningActionsCount = window.obj81395_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81535 
playAudio_81418();
function playAudio_81418() {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = obj81395_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj81535")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj81395_droppedInsideTargetActions_2_runningActionsCount = window.obj81395_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81395_droppedInsideTargetActions_2_runningActionsCount = window.obj81395_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj81395_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81419();
function switchText_81419() {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = obj81395_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81395_droppedInsideTargetActions_2_runningActionsCount = window.obj81395_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81395_droppedInsideTargetActions_2_runningActionsCount = window.obj81395_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj81395_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj81395_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81400();
function runjs_81400() {
	window.obj81395_droppedInsideTargetActions_runningActionsCount = obj81395_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81553").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_runningActionsCount = window.obj81395_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_81404();
function switchText_81404() {
	window.obj81395_droppedInsideTargetActions_runningActionsCount = obj81395_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81395_droppedInsideTargetActions_runningActionsCount = window.obj81395_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81395_droppedInsideTargetActions_runningActionsCount = window.obj81395_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj81395_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_81401();
function runjs_81401() {
	window.obj81395_droppedInsideTargetActions_runningActionsCount = obj81395_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81553").css("border-color", "#058E3F"); $("#obj81553").css("border-width", "2px"); $("#obj81553").css("border-style", "solid"); $("#obj81553").css("border-radius", "10px"); $("#obj81553").css("-webkit-border-radius", "10px"); $("#obj81553").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_runningActionsCount = window.obj81395_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81545 
hide_81402();
function hide_81402() {
	var selector = "#obj81545";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81395_droppedInsideTargetActions_runningActionsCount = obj81395_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81395_droppedInsideTargetActions_runningActionsCount = window.obj81395_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81402(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81395_droppedInsideTargetActions_runningActionsCount = window.obj81395_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81395_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_81403();
function runjs_81403() {
	window.obj81395_droppedInsideTargetActions_runningActionsCount = obj81395_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81395").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81395_droppedInsideTargetActions_runningActionsCount = window.obj81395_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj81395_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81539 
playAudio_81405();
function playAudio_81405() {
	window.obj81395_droppedInsideTargetActions_runningActionsCount = obj81395_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj81539")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj81395_droppedInsideTargetActions_runningActionsCount = window.obj81395_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81395_droppedInsideTargetActions_runningActionsCount = window.obj81395_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj81395_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90352();
function switchText_90352() {
	window.obj81395_droppedInsideTargetActions_runningActionsCount = obj81395_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81395_droppedInsideTargetActions_runningActionsCount = window.obj81395_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81395_droppedInsideTargetActions_runningActionsCount = window.obj81395_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81395_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81395_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81395_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81395_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj81395_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81395_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81395").trigger("obj81395_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81395) {
				console.warn("de-queueing event obj81395." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81395").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81395_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj81328_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_onTouchDown_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj81328");
//	action: dragDrop
//	target: obj81328 
dragDrop_81331();
function dragDrop_81331() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj81328_onTouchDown_runningActionsCount = obj81328_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj81328');
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
	  	containerNode = $('#obj81561');
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
    	window.obj81328_onTouchDown_runningActionsCount = window.obj81328_onTouchDown_runningActionsCount - 1;
if (window.obj81328_onTouchDown_runningActionsCount < 0) {
	window.obj81328_onTouchDown_runningActionsCount = 0;
} else if (window.obj81328_onTouchDown_runningActionsCount == 0) {
	obj81328_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj81557","#obj81555","#obj81553","#obj81551");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_81331 = false;
    	var dropped_id_81331;
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
					dropped_81331 = true;
					dropped_id_81331 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_81331) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj81328").trigger('SCActionDragDrop81331_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj81328_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81328_onTouchDown_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj81328 
move_92437();
function move_92437() {
	window.obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_runningActionsCount = obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj81328");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 97;
	var moveY = 641;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_runningActionsCount = window.obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj81328_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81368();
function runjs_81368() {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = obj81328_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81551").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_4_runningActionsCount = window.obj81328_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81369();
function runjs_81369() {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = obj81328_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81551").css("border-color", "#C00000"); $("#obj81551").css("border-width", "2px"); $("#obj81551").css("border-style", "solid"); $("#obj81551").css("border-radius", "10px"); $("#obj81551").css("-webkit-border-radius", "10px"); $("#obj81551").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_4_runningActionsCount = window.obj81328_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81543 
hide_81370();
function hide_81370() {
	var selector = "#obj81543";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = obj81328_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81328_droppedInsideTargetActions_4_runningActionsCount = window.obj81328_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81370(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81328_droppedInsideTargetActions_4_runningActionsCount = window.obj81328_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81328_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81371();
function runjs_81371() {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = obj81328_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81328").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_4_runningActionsCount = window.obj81328_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81372();
function switchText_81372() {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = obj81328_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81328_droppedInsideTargetActions_4_runningActionsCount = window.obj81328_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81328_droppedInsideTargetActions_4_runningActionsCount = window.obj81328_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj81328_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81328 
move_81373();
function move_81373() {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = obj81328_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj81328");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 97;
	var moveY = 641;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81328_droppedInsideTargetActions_4_runningActionsCount = window.obj81328_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj81328_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81374();
function runjs_81374() {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = obj81328_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81551").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_4_runningActionsCount = window.obj81328_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81375();
function runjs_81375() {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = obj81328_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81551").css("border-color", "#000000"); $("#obj81551").css("border-width", "1px"); $("#obj81551").css("border-style", "solid"); $("#obj81551").css("border-radius", "10px"); $("#obj81551").css("-webkit-border-radius", "10px"); $("#obj81551").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_4_runningActionsCount = window.obj81328_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81543
(function(){
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = obj81328_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj81543";
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
					window.obj81328_droppedInsideTargetActions_4_runningActionsCount = window.obj81328_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj81328_droppedInsideTargetActions_4_runningActionsCount = window.obj81328_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81328_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81377();
function runjs_81377() {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = obj81328_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81328").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_4_runningActionsCount = window.obj81328_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81378();
function runjs_81378() {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = obj81328_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81328").css("border-color", "rgba(0,0,0,0)"); $("#obj81328").css("border-width", "0px"); $("#obj81328").css("border-style", "solid"); $("#obj81328").css("border-radius", "10px"); $("#obj81328").css("-webkit-border-radius", "10px"); $("#obj81328").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_4_runningActionsCount = window.obj81328_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81535 
playAudio_81379();
function playAudio_81379() {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = obj81328_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj81535")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj81328_droppedInsideTargetActions_4_runningActionsCount = window.obj81328_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81328_droppedInsideTargetActions_4_runningActionsCount = window.obj81328_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj81328_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81380();
function switchText_81380() {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = obj81328_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81328_droppedInsideTargetActions_4_runningActionsCount = window.obj81328_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81328_droppedInsideTargetActions_4_runningActionsCount = window.obj81328_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj81328_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj81328_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81354();
function runjs_81354() {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = obj81328_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81553").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_3_runningActionsCount = window.obj81328_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81355();
function runjs_81355() {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = obj81328_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81553").css("border-color", "#C00000"); $("#obj81553").css("border-width", "2px"); $("#obj81553").css("border-style", "solid"); $("#obj81553").css("border-radius", "10px"); $("#obj81553").css("-webkit-border-radius", "10px"); $("#obj81553").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_3_runningActionsCount = window.obj81328_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81545 
hide_81356();
function hide_81356() {
	var selector = "#obj81545";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = obj81328_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81328_droppedInsideTargetActions_3_runningActionsCount = window.obj81328_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81356(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81328_droppedInsideTargetActions_3_runningActionsCount = window.obj81328_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81328_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81357();
function runjs_81357() {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = obj81328_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81328").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_3_runningActionsCount = window.obj81328_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81358();
function switchText_81358() {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = obj81328_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81328_droppedInsideTargetActions_3_runningActionsCount = window.obj81328_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81328_droppedInsideTargetActions_3_runningActionsCount = window.obj81328_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj81328_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81328 
move_81359();
function move_81359() {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = obj81328_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj81328");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 97;
	var moveY = 641;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81328_droppedInsideTargetActions_3_runningActionsCount = window.obj81328_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj81328_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81360();
function runjs_81360() {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = obj81328_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81553").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_3_runningActionsCount = window.obj81328_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81361();
function runjs_81361() {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = obj81328_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81553").css("border-color", "#000000"); $("#obj81553").css("border-width", "1px"); $("#obj81553").css("border-style", "solid"); $("#obj81553").css("border-radius", "10px"); $("#obj81553").css("-webkit-border-radius", "10px"); $("#obj81553").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_3_runningActionsCount = window.obj81328_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81545
(function(){
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = obj81328_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj81545";
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
					window.obj81328_droppedInsideTargetActions_3_runningActionsCount = window.obj81328_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj81328_droppedInsideTargetActions_3_runningActionsCount = window.obj81328_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81328_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81363();
function runjs_81363() {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = obj81328_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81328").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_3_runningActionsCount = window.obj81328_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81364();
function runjs_81364() {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = obj81328_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81328").css("border-color", "rgba(0,0,0,0)"); $("#obj81328").css("border-width", "0px"); $("#obj81328").css("border-style", "solid"); $("#obj81328").css("border-radius", "10px"); $("#obj81328").css("-webkit-border-radius", "10px"); $("#obj81328").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_3_runningActionsCount = window.obj81328_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81535 
playAudio_81365();
function playAudio_81365() {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = obj81328_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj81535")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj81328_droppedInsideTargetActions_3_runningActionsCount = window.obj81328_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81328_droppedInsideTargetActions_3_runningActionsCount = window.obj81328_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj81328_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81366();
function switchText_81366() {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = obj81328_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81328_droppedInsideTargetActions_3_runningActionsCount = window.obj81328_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81328_droppedInsideTargetActions_3_runningActionsCount = window.obj81328_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj81328_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj81328_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81340();
function runjs_81340() {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = obj81328_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81555").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_2_runningActionsCount = window.obj81328_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81341();
function runjs_81341() {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = obj81328_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81555").css("border-color", "#C00000"); $("#obj81555").css("border-width", "2px"); $("#obj81555").css("border-style", "solid"); $("#obj81555").css("border-radius", "10px"); $("#obj81555").css("-webkit-border-radius", "10px"); $("#obj81555").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_2_runningActionsCount = window.obj81328_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81547 
hide_81342();
function hide_81342() {
	var selector = "#obj81547";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = obj81328_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81328_droppedInsideTargetActions_2_runningActionsCount = window.obj81328_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81342(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81328_droppedInsideTargetActions_2_runningActionsCount = window.obj81328_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81328_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81343();
function runjs_81343() {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = obj81328_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81328").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_2_runningActionsCount = window.obj81328_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81344();
function switchText_81344() {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = obj81328_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81328_droppedInsideTargetActions_2_runningActionsCount = window.obj81328_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81328_droppedInsideTargetActions_2_runningActionsCount = window.obj81328_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj81328_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81328 
move_81345();
function move_81345() {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = obj81328_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj81328");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 97;
	var moveY = 641;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81328_droppedInsideTargetActions_2_runningActionsCount = window.obj81328_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj81328_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81346();
function runjs_81346() {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = obj81328_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81555").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_2_runningActionsCount = window.obj81328_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81347();
function runjs_81347() {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = obj81328_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81555").css("border-color", "#000000"); $("#obj81555").css("border-width", "1px"); $("#obj81555").css("border-style", "solid"); $("#obj81555").css("border-radius", "10px"); $("#obj81555").css("-webkit-border-radius", "10px"); $("#obj81555").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_2_runningActionsCount = window.obj81328_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81547
(function(){
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = obj81328_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj81547";
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
					window.obj81328_droppedInsideTargetActions_2_runningActionsCount = window.obj81328_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj81328_droppedInsideTargetActions_2_runningActionsCount = window.obj81328_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81328_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81349();
function runjs_81349() {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = obj81328_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81328").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_2_runningActionsCount = window.obj81328_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81350();
function runjs_81350() {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = obj81328_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81328").css("border-color", "rgba(0,0,0,0)"); $("#obj81328").css("border-width", "0px"); $("#obj81328").css("border-style", "solid"); $("#obj81328").css("border-radius", "10px"); $("#obj81328").css("-webkit-border-radius", "10px"); $("#obj81328").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_2_runningActionsCount = window.obj81328_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81535 
playAudio_81351();
function playAudio_81351() {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = obj81328_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj81535")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj81328_droppedInsideTargetActions_2_runningActionsCount = window.obj81328_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81328_droppedInsideTargetActions_2_runningActionsCount = window.obj81328_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj81328_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81352();
function switchText_81352() {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = obj81328_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81328_droppedInsideTargetActions_2_runningActionsCount = window.obj81328_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81328_droppedInsideTargetActions_2_runningActionsCount = window.obj81328_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj81328_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj81328_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81333();
function runjs_81333() {
	window.obj81328_droppedInsideTargetActions_runningActionsCount = obj81328_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81557").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_runningActionsCount = window.obj81328_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_81337();
function switchText_81337() {
	window.obj81328_droppedInsideTargetActions_runningActionsCount = obj81328_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81328_droppedInsideTargetActions_runningActionsCount = window.obj81328_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81328_droppedInsideTargetActions_runningActionsCount = window.obj81328_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj81328_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_81334();
function runjs_81334() {
	window.obj81328_droppedInsideTargetActions_runningActionsCount = obj81328_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81557").css("border-color", "#058E3F"); $("#obj81557").css("border-width", "2px"); $("#obj81557").css("border-style", "solid"); $("#obj81557").css("border-radius", "10px"); $("#obj81557").css("-webkit-border-radius", "10px"); $("#obj81557").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_runningActionsCount = window.obj81328_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81549 
hide_81335();
function hide_81335() {
	var selector = "#obj81549";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81328_droppedInsideTargetActions_runningActionsCount = obj81328_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81328_droppedInsideTargetActions_runningActionsCount = window.obj81328_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81335(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81328_droppedInsideTargetActions_runningActionsCount = window.obj81328_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81328_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_81336();
function runjs_81336() {
	window.obj81328_droppedInsideTargetActions_runningActionsCount = obj81328_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81328").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81328_droppedInsideTargetActions_runningActionsCount = window.obj81328_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj81328_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81539 
playAudio_81338();
function playAudio_81338() {
	window.obj81328_droppedInsideTargetActions_runningActionsCount = obj81328_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj81539")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj81328_droppedInsideTargetActions_runningActionsCount = window.obj81328_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81328_droppedInsideTargetActions_runningActionsCount = window.obj81328_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj81328_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90353();
function switchText_90353() {
	window.obj81328_droppedInsideTargetActions_runningActionsCount = obj81328_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81328_droppedInsideTargetActions_runningActionsCount = window.obj81328_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81328_droppedInsideTargetActions_runningActionsCount = window.obj81328_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81328_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81328_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81328_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81328_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj81328_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81328_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81328").trigger("obj81328_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81328) {
				console.warn("de-queueing event obj81328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81328_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj81261_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_onTouchDown_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj81261");
//	action: dragDrop
//	target: obj81261 
dragDrop_81264();
function dragDrop_81264() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj81261_onTouchDown_runningActionsCount = obj81261_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj81261');
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
	  	containerNode = $('#obj81561');
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
    	window.obj81261_onTouchDown_runningActionsCount = window.obj81261_onTouchDown_runningActionsCount - 1;
if (window.obj81261_onTouchDown_runningActionsCount < 0) {
	window.obj81261_onTouchDown_runningActionsCount = 0;
} else if (window.obj81261_onTouchDown_runningActionsCount == 0) {
	obj81261_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj81555","#obj81557","#obj81553","#obj81551");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_81264 = false;
    	var dropped_id_81264;
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
					dropped_81264 = true;
					dropped_id_81264 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_81264) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj81261").trigger('SCActionDragDrop81264_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj81261_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81261_onTouchDown_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj81261 
move_92439();
function move_92439() {
	window.obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_runningActionsCount = obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj81261");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 356;
	var moveY = 641;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_runningActionsCount = window.obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj81261_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81301();
function runjs_81301() {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = obj81261_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81551").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_4_runningActionsCount = window.obj81261_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81302();
function runjs_81302() {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = obj81261_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81551").css("border-color", "#C00000"); $("#obj81551").css("border-width", "2px"); $("#obj81551").css("border-style", "solid"); $("#obj81551").css("border-radius", "10px"); $("#obj81551").css("-webkit-border-radius", "10px"); $("#obj81551").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_4_runningActionsCount = window.obj81261_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81543 
hide_81303();
function hide_81303() {
	var selector = "#obj81543";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = obj81261_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81261_droppedInsideTargetActions_4_runningActionsCount = window.obj81261_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81303(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81261_droppedInsideTargetActions_4_runningActionsCount = window.obj81261_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81261_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81304();
function runjs_81304() {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = obj81261_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81261").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_4_runningActionsCount = window.obj81261_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81305();
function switchText_81305() {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = obj81261_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81261_droppedInsideTargetActions_4_runningActionsCount = window.obj81261_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81261_droppedInsideTargetActions_4_runningActionsCount = window.obj81261_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj81261_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81261 
move_81306();
function move_81306() {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = obj81261_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj81261");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 356;
	var moveY = 641;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81261_droppedInsideTargetActions_4_runningActionsCount = window.obj81261_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj81261_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81307();
function runjs_81307() {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = obj81261_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81551").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_4_runningActionsCount = window.obj81261_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81308();
function runjs_81308() {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = obj81261_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81551").css("border-color", "#000000"); $("#obj81551").css("border-width", "1px"); $("#obj81551").css("border-style", "solid"); $("#obj81551").css("border-radius", "10px"); $("#obj81551").css("-webkit-border-radius", "10px"); $("#obj81551").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_4_runningActionsCount = window.obj81261_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81543
(function(){
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = obj81261_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj81543";
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
					window.obj81261_droppedInsideTargetActions_4_runningActionsCount = window.obj81261_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj81261_droppedInsideTargetActions_4_runningActionsCount = window.obj81261_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81261_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81310();
function runjs_81310() {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = obj81261_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81261").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_4_runningActionsCount = window.obj81261_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81311();
function runjs_81311() {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = obj81261_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj81261").css("border-color", "rgba(0,0,0,0)"); $("#obj81261").css("border-width", "0px"); $("#obj81261").css("border-style", "solid"); $("#obj81261").css("border-radius", "10px"); $("#obj81261").css("-webkit-border-radius", "10px"); $("#obj81261").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_4_runningActionsCount = window.obj81261_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81535 
playAudio_81312();
function playAudio_81312() {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = obj81261_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj81535")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj81261_droppedInsideTargetActions_4_runningActionsCount = window.obj81261_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81261_droppedInsideTargetActions_4_runningActionsCount = window.obj81261_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj81261_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81313();
function switchText_81313() {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = obj81261_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81261_droppedInsideTargetActions_4_runningActionsCount = window.obj81261_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81261_droppedInsideTargetActions_4_runningActionsCount = window.obj81261_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj81261_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj81261_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81287();
function runjs_81287() {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = obj81261_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81553").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_3_runningActionsCount = window.obj81261_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81288();
function runjs_81288() {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = obj81261_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81553").css("border-color", "#C00000"); $("#obj81553").css("border-width", "2px"); $("#obj81553").css("border-style", "solid"); $("#obj81553").css("border-radius", "10px"); $("#obj81553").css("-webkit-border-radius", "10px"); $("#obj81553").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_3_runningActionsCount = window.obj81261_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81545 
hide_81289();
function hide_81289() {
	var selector = "#obj81545";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = obj81261_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81261_droppedInsideTargetActions_3_runningActionsCount = window.obj81261_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81289(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81261_droppedInsideTargetActions_3_runningActionsCount = window.obj81261_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81261_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81290();
function runjs_81290() {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = obj81261_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81261").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_3_runningActionsCount = window.obj81261_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81291();
function switchText_81291() {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = obj81261_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81261_droppedInsideTargetActions_3_runningActionsCount = window.obj81261_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81261_droppedInsideTargetActions_3_runningActionsCount = window.obj81261_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj81261_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81261 
move_81292();
function move_81292() {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = obj81261_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj81261");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 356;
	var moveY = 641;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81261_droppedInsideTargetActions_3_runningActionsCount = window.obj81261_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj81261_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81293();
function runjs_81293() {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = obj81261_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81553").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_3_runningActionsCount = window.obj81261_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81294();
function runjs_81294() {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = obj81261_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81553").css("border-color", "#000000"); $("#obj81553").css("border-width", "1px"); $("#obj81553").css("border-style", "solid"); $("#obj81553").css("border-radius", "10px"); $("#obj81553").css("-webkit-border-radius", "10px"); $("#obj81553").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_3_runningActionsCount = window.obj81261_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81545
(function(){
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = obj81261_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj81545";
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
					window.obj81261_droppedInsideTargetActions_3_runningActionsCount = window.obj81261_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj81261_droppedInsideTargetActions_3_runningActionsCount = window.obj81261_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81261_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81296();
function runjs_81296() {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = obj81261_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81261").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_3_runningActionsCount = window.obj81261_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81297();
function runjs_81297() {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = obj81261_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81261").css("border-color", "rgba(0,0,0,0)"); $("#obj81261").css("border-width", "0px"); $("#obj81261").css("border-style", "solid"); $("#obj81261").css("border-radius", "10px"); $("#obj81261").css("-webkit-border-radius", "10px"); $("#obj81261").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_3_runningActionsCount = window.obj81261_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81535 
playAudio_81298();
function playAudio_81298() {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = obj81261_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj81535")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj81261_droppedInsideTargetActions_3_runningActionsCount = window.obj81261_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81261_droppedInsideTargetActions_3_runningActionsCount = window.obj81261_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj81261_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81299();
function switchText_81299() {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = obj81261_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81261_droppedInsideTargetActions_3_runningActionsCount = window.obj81261_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81261_droppedInsideTargetActions_3_runningActionsCount = window.obj81261_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj81261_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj81261_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81273();
function runjs_81273() {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = obj81261_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81557").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_2_runningActionsCount = window.obj81261_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81274();
function runjs_81274() {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = obj81261_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81557").css("border-color", "#C00000"); $("#obj81557").css("border-width", "2px"); $("#obj81557").css("border-style", "solid"); $("#obj81557").css("border-radius", "10px"); $("#obj81557").css("-webkit-border-radius", "10px"); $("#obj81557").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_2_runningActionsCount = window.obj81261_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81549 
hide_81275();
function hide_81275() {
	var selector = "#obj81549";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = obj81261_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81261_droppedInsideTargetActions_2_runningActionsCount = window.obj81261_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81275(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81261_droppedInsideTargetActions_2_runningActionsCount = window.obj81261_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81261_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81276();
function runjs_81276() {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = obj81261_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81261").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_2_runningActionsCount = window.obj81261_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81277();
function switchText_81277() {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = obj81261_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81261_droppedInsideTargetActions_2_runningActionsCount = window.obj81261_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81261_droppedInsideTargetActions_2_runningActionsCount = window.obj81261_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj81261_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81261 
move_81278();
function move_81278() {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = obj81261_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj81261");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 356;
	var moveY = 641;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81261_droppedInsideTargetActions_2_runningActionsCount = window.obj81261_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj81261_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81279();
function runjs_81279() {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = obj81261_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81557").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_2_runningActionsCount = window.obj81261_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81280();
function runjs_81280() {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = obj81261_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81557").css("border-color", "#000000"); $("#obj81557").css("border-width", "1px"); $("#obj81557").css("border-style", "solid"); $("#obj81557").css("border-radius", "10px"); $("#obj81557").css("-webkit-border-radius", "10px"); $("#obj81557").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_2_runningActionsCount = window.obj81261_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81549
(function(){
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = obj81261_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj81549";
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
					window.obj81261_droppedInsideTargetActions_2_runningActionsCount = window.obj81261_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj81261_droppedInsideTargetActions_2_runningActionsCount = window.obj81261_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81261_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81282();
function runjs_81282() {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = obj81261_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81261").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_2_runningActionsCount = window.obj81261_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81283();
function runjs_81283() {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = obj81261_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81261").css("border-color", "rgba(0,0,0,0)"); $("#obj81261").css("border-width", "0px"); $("#obj81261").css("border-style", "solid"); $("#obj81261").css("border-radius", "10px"); $("#obj81261").css("-webkit-border-radius", "10px"); $("#obj81261").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_2_runningActionsCount = window.obj81261_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81535 
playAudio_81284();
function playAudio_81284() {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = obj81261_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj81535")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj81261_droppedInsideTargetActions_2_runningActionsCount = window.obj81261_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81261_droppedInsideTargetActions_2_runningActionsCount = window.obj81261_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj81261_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81285();
function switchText_81285() {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = obj81261_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81261_droppedInsideTargetActions_2_runningActionsCount = window.obj81261_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81261_droppedInsideTargetActions_2_runningActionsCount = window.obj81261_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj81261_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj81261_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81266();
function runjs_81266() {
	window.obj81261_droppedInsideTargetActions_runningActionsCount = obj81261_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81555").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_runningActionsCount = window.obj81261_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_81270();
function switchText_81270() {
	window.obj81261_droppedInsideTargetActions_runningActionsCount = obj81261_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81261_droppedInsideTargetActions_runningActionsCount = window.obj81261_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81261_droppedInsideTargetActions_runningActionsCount = window.obj81261_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj81261_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_81267();
function runjs_81267() {
	window.obj81261_droppedInsideTargetActions_runningActionsCount = obj81261_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81555").css("border-color", "#058E3F"); $("#obj81555").css("border-width", "2px"); $("#obj81555").css("border-style", "solid"); $("#obj81555").css("border-radius", "10px"); $("#obj81555").css("-webkit-border-radius", "10px"); $("#obj81555").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_runningActionsCount = window.obj81261_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81547 
hide_81268();
function hide_81268() {
	var selector = "#obj81547";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81261_droppedInsideTargetActions_runningActionsCount = obj81261_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81261_droppedInsideTargetActions_runningActionsCount = window.obj81261_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81268(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81261_droppedInsideTargetActions_runningActionsCount = window.obj81261_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81261_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_81269();
function runjs_81269() {
	window.obj81261_droppedInsideTargetActions_runningActionsCount = obj81261_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81261").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81261_droppedInsideTargetActions_runningActionsCount = window.obj81261_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj81261_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81539 
playAudio_81271();
function playAudio_81271() {
	window.obj81261_droppedInsideTargetActions_runningActionsCount = obj81261_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj81539")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj81261_droppedInsideTargetActions_runningActionsCount = window.obj81261_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81261_droppedInsideTargetActions_runningActionsCount = window.obj81261_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj81261_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90355();
function switchText_90355() {
	window.obj81261_droppedInsideTargetActions_runningActionsCount = obj81261_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81537_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81537_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81537").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81537_content");
			setTimeout(function () {
				window.obj81261_droppedInsideTargetActions_runningActionsCount = window.obj81261_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81537 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81261_droppedInsideTargetActions_runningActionsCount = window.obj81261_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81261_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81261_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81261_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81261_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj81261_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81261_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81261").trigger("obj81261_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81261) {
				console.warn("de-queueing event obj81261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81261_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj81243_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81243_onTap_activeActionGroupIndex = -1;
		$("#obj81243").trigger("obj81243_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81243) {
				console.warn("de-queueing event obj81243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81243_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj81243 
hide_81246();
function hide_81246() {
	var selector = "#obj81243";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81243_onTap_runningActionsCount = obj81243_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81243_onTap_runningActionsCount = window.obj81243_onTap_runningActionsCount - 1;
if (window.obj81243_onTap_runningActionsCount < 0) {
	window.obj81243_onTap_runningActionsCount = 0;
} else if (window.obj81243_onTap_runningActionsCount == 0) {
	obj81243_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81246(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81243_onTap_runningActionsCount = window.obj81243_onTap_runningActionsCount - 1;
if (window.obj81243_onTap_runningActionsCount < 0) {
	window.obj81243_onTap_runningActionsCount = 0;
} else if (window.obj81243_onTap_runningActionsCount == 0) {
	obj81243_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj81233 
stopMovie_81245();
function stopMovie_81245() {
	window.obj81243_onTap_runningActionsCount = obj81243_onTap_runningActionsCount + 1;
	var myVideo = $("#obj81233")[0];
	myVideo.pause();
	window.obj81243_onTap_runningActionsCount = window.obj81243_onTap_runningActionsCount - 1;
if (window.obj81243_onTap_runningActionsCount < 0) {
	window.obj81243_onTap_runningActionsCount = 0;
} else if (window.obj81243_onTap_runningActionsCount == 0) {
	obj81243_onTap_actionGroup1();
}
}
















};
obj81243_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81243_onTap_activeActionGroupIndex = -1;
		$("#obj81243").trigger("obj81243_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81243) {
				console.warn("de-queueing event obj81243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81243_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj81235
(function(){
	window.obj81243_onTap_runningActionsCount = obj81243_onTap_runningActionsCount + 1;

	var selector = "#obj81235";
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
					window.obj81243_onTap_runningActionsCount = window.obj81243_onTap_runningActionsCount - 1;
if (window.obj81243_onTap_runningActionsCount < 0) {
	window.obj81243_onTap_runningActionsCount = 0;
} else if (window.obj81243_onTap_runningActionsCount == 0) {
	obj81243_onTap_actionGroup2();
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
				window.obj81243_onTap_runningActionsCount = window.obj81243_onTap_runningActionsCount - 1;
if (window.obj81243_onTap_runningActionsCount < 0) {
	window.obj81243_onTap_runningActionsCount = 0;
} else if (window.obj81243_onTap_runningActionsCount == 0) {
	obj81243_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81243_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81243_onTap_activeActionGroupIndex = -1;
		$("#obj81243").trigger("obj81243_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81243) {
				console.warn("de-queueing event obj81243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81243_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj81233 
move_81248();
function move_81248() {
	window.obj81243_onTap_runningActionsCount = obj81243_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj81233");
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
			window.obj81243_onTap_runningActionsCount = window.obj81243_onTap_runningActionsCount - 1;
if (window.obj81243_onTap_runningActionsCount < 0) {
	window.obj81243_onTap_runningActionsCount = 0;
} else if (window.obj81243_onTap_runningActionsCount == 0) {
	obj81243_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj81243_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81243_onTap_activeActionGroupIndex = -1;
		$("#obj81243").trigger("obj81243_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81243) {
				console.warn("de-queueing event obj81243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81243_onTap_activeActionGroupIndex = 3;
	





















};
obj81235_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81235_onTap_activeActionGroupIndex = -1;
		$("#obj81235").trigger("obj81235_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81235) {
				console.warn("de-queueing event obj81235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81235_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj81235 
hide_81238();
function hide_81238() {
	var selector = "#obj81235";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81235_onTap_runningActionsCount = obj81235_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81235_onTap_runningActionsCount = window.obj81235_onTap_runningActionsCount - 1;
if (window.obj81235_onTap_runningActionsCount < 0) {
	window.obj81235_onTap_runningActionsCount = 0;
} else if (window.obj81235_onTap_runningActionsCount == 0) {
	obj81235_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81238(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81235_onTap_runningActionsCount = window.obj81235_onTap_runningActionsCount - 1;
if (window.obj81235_onTap_runningActionsCount < 0) {
	window.obj81235_onTap_runningActionsCount = 0;
} else if (window.obj81235_onTap_runningActionsCount == 0) {
	obj81235_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj81233 
playPauseMovie_81237();
function playPauseMovie_81237() {
	window.obj81235_onTap_runningActionsCount = obj81235_onTap_runningActionsCount + 1;
	var myVideo = $("#obj81233")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj81235_onTap_runningActionsCount = window.obj81235_onTap_runningActionsCount - 1;
if (window.obj81235_onTap_runningActionsCount < 0) {
	window.obj81235_onTap_runningActionsCount = 0;
} else if (window.obj81235_onTap_runningActionsCount == 0) {
	obj81235_onTap_actionGroup1();
}
}

















};
obj81235_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81235_onTap_activeActionGroupIndex = -1;
		$("#obj81235").trigger("obj81235_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81235) {
				console.warn("de-queueing event obj81235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81235_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj81243
(function(){
	window.obj81235_onTap_runningActionsCount = obj81235_onTap_runningActionsCount + 1;

	var selector = "#obj81243";
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
					window.obj81235_onTap_runningActionsCount = window.obj81235_onTap_runningActionsCount - 1;
if (window.obj81235_onTap_runningActionsCount < 0) {
	window.obj81235_onTap_runningActionsCount = 0;
} else if (window.obj81235_onTap_runningActionsCount == 0) {
	obj81235_onTap_actionGroup2();
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
				window.obj81235_onTap_runningActionsCount = window.obj81235_onTap_runningActionsCount - 1;
if (window.obj81235_onTap_runningActionsCount < 0) {
	window.obj81235_onTap_runningActionsCount = 0;
} else if (window.obj81235_onTap_runningActionsCount == 0) {
	obj81235_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81235_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81235_onTap_activeActionGroupIndex = -1;
		$("#obj81235").trigger("obj81235_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81235) {
				console.warn("de-queueing event obj81235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81235_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj81233 
move_81240();
function move_81240() {
	window.obj81235_onTap_runningActionsCount = obj81235_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj81233");
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
			window.obj81235_onTap_runningActionsCount = window.obj81235_onTap_runningActionsCount - 1;
if (window.obj81235_onTap_runningActionsCount < 0) {
	window.obj81235_onTap_runningActionsCount = 0;
} else if (window.obj81235_onTap_runningActionsCount == 0) {
	obj81235_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj81235_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81235_onTap_activeActionGroupIndex = -1;
		$("#obj81235").trigger("obj81235_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81235) {
				console.warn("de-queueing event obj81235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81235_onTap_activeActionGroupIndex = 3;
	





















};
obj88093_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88093_onTap_activeActionGroupIndex = -1;
		$("#obj88093").trigger("obj88093_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88093) {
				console.warn("de-queueing event obj88093." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88093").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88093_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88098 
stopAudio_88095();
function stopAudio_88095() {
	window.obj88093_onTap_runningActionsCount = obj88093_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88098")[0];
	myAudio.pause();
	window.obj88093_onTap_runningActionsCount = window.obj88093_onTap_runningActionsCount - 1;
if (window.obj88093_onTap_runningActionsCount < 0) {
	window.obj88093_onTap_runningActionsCount = 0;
} else if (window.obj88093_onTap_runningActionsCount == 0) {
	obj88093_onTap_actionGroup1();
}
}








};
obj88093_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88093_onTap_activeActionGroupIndex = -1;
		$("#obj88093").trigger("obj88093_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88093) {
				console.warn("de-queueing event obj88093." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88093").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88093_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88093 
hide_88096();
function hide_88096() {
	var selector = "#obj88093";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88093_onTap_runningActionsCount = obj88093_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88093_onTap_runningActionsCount = window.obj88093_onTap_runningActionsCount - 1;
if (window.obj88093_onTap_runningActionsCount < 0) {
	window.obj88093_onTap_runningActionsCount = 0;
} else if (window.obj88093_onTap_runningActionsCount == 0) {
	obj88093_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88096(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88093_onTap_runningActionsCount = window.obj88093_onTap_runningActionsCount - 1;
if (window.obj88093_onTap_runningActionsCount < 0) {
	window.obj88093_onTap_runningActionsCount = 0;
} else if (window.obj88093_onTap_runningActionsCount == 0) {
	obj88093_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88093_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88093_onTap_activeActionGroupIndex = -1;
		$("#obj88093").trigger("obj88093_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88093) {
				console.warn("de-queueing event obj88093." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88093").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88093_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88088
(function(){
	window.obj88093_onTap_runningActionsCount = obj88093_onTap_runningActionsCount + 1;

	var selector = "#obj88088";
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
					window.obj88093_onTap_runningActionsCount = window.obj88093_onTap_runningActionsCount - 1;
if (window.obj88093_onTap_runningActionsCount < 0) {
	window.obj88093_onTap_runningActionsCount = 0;
} else if (window.obj88093_onTap_runningActionsCount == 0) {
	obj88093_onTap_actionGroup3();
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
				window.obj88093_onTap_runningActionsCount = window.obj88093_onTap_runningActionsCount - 1;
if (window.obj88093_onTap_runningActionsCount < 0) {
	window.obj88093_onTap_runningActionsCount = 0;
} else if (window.obj88093_onTap_runningActionsCount == 0) {
	obj88093_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88093_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88093_onTap_activeActionGroupIndex = -1;
		$("#obj88093").trigger("obj88093_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88093) {
				console.warn("de-queueing event obj88093." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88093").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88093_onTap_activeActionGroupIndex = 3;
	





















};
obj88088_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88088_onTap_activeActionGroupIndex = -1;
		$("#obj88088").trigger("obj88088_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88088) {
				console.warn("de-queueing event obj88088." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88088").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88088_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88088 
hide_88090();
function hide_88090() {
	var selector = "#obj88088";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88088_onTap_runningActionsCount = obj88088_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88088_onTap_runningActionsCount = window.obj88088_onTap_runningActionsCount - 1;
if (window.obj88088_onTap_runningActionsCount < 0) {
	window.obj88088_onTap_runningActionsCount = 0;
} else if (window.obj88088_onTap_runningActionsCount == 0) {
	obj88088_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88090(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88088_onTap_runningActionsCount = window.obj88088_onTap_runningActionsCount - 1;
if (window.obj88088_onTap_runningActionsCount < 0) {
	window.obj88088_onTap_runningActionsCount = 0;
} else if (window.obj88088_onTap_runningActionsCount == 0) {
	obj88088_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88088_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88088_onTap_activeActionGroupIndex = -1;
		$("#obj88088").trigger("obj88088_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88088) {
				console.warn("de-queueing event obj88088." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88088").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88088_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88093
(function(){
	window.obj88088_onTap_runningActionsCount = obj88088_onTap_runningActionsCount + 1;

	var selector = "#obj88093";
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
					window.obj88088_onTap_runningActionsCount = window.obj88088_onTap_runningActionsCount - 1;
if (window.obj88088_onTap_runningActionsCount < 0) {
	window.obj88088_onTap_runningActionsCount = 0;
} else if (window.obj88088_onTap_runningActionsCount == 0) {
	obj88088_onTap_actionGroup2();
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
				window.obj88088_onTap_runningActionsCount = window.obj88088_onTap_runningActionsCount - 1;
if (window.obj88088_onTap_runningActionsCount < 0) {
	window.obj88088_onTap_runningActionsCount = 0;
} else if (window.obj88088_onTap_runningActionsCount == 0) {
	obj88088_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88088_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88088_onTap_activeActionGroupIndex = -1;
		$("#obj88088").trigger("obj88088_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88088) {
				console.warn("de-queueing event obj88088." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88088").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88088_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88098 
playAudio_88092();
function playAudio_88092() {
	window.obj88088_onTap_runningActionsCount = obj88088_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88098")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj88088_onTap_runningActionsCount = window.obj88088_onTap_runningActionsCount - 1;
if (window.obj88088_onTap_runningActionsCount < 0) {
	window.obj88088_onTap_runningActionsCount = 0;
} else if (window.obj88088_onTap_runningActionsCount == 0) {
	obj88088_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88088_onTap_runningActionsCount = window.obj88088_onTap_runningActionsCount - 1;
if (window.obj88088_onTap_runningActionsCount < 0) {
	window.obj88088_onTap_runningActionsCount = 0;
} else if (window.obj88088_onTap_runningActionsCount == 0) {
	obj88088_onTap_actionGroup3();
}
	}
}









};
obj88088_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88088_onTap_activeActionGroupIndex = -1;
		$("#obj88088").trigger("obj88088_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88088) {
				console.warn("de-queueing event obj88088." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88088").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88088_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj81578: Event Touch Down
 *
 */
$("#obj81578").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81578_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81578_onTap is still running");
	return;
}
var obj81578_onTap_runningActionsCount = 0;
var obj81578_onTap_loopCount = 0;
obj81578_onTap_actionGroup0();
});










/*
 *
 *   obj81575: Event Touch Down
 *
 */
$("#obj81575").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81575_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81575_onTap is still running");
	return;
}
var obj81575_onTap_runningActionsCount = 0;
var obj81575_onTap_loopCount = 0;
obj81575_onTap_actionGroup0();
});










/*
 *
 *   obj81571: Event Touch Down
 *
 */
$("#obj81571").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81571_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81571_onTap is still running");
	return;
}
var obj81571_onTap_runningActionsCount = 0;
var obj81571_onTap_loopCount = 0;
obj81571_onTap_actionGroup0();
});





























































































































































































































/*
 *
 *   obj81462: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj81462");
	var winTarget = document.getElementById("obj81462");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj81462").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj81462_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj81462_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj81462_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81462_onTouchDown is still running");
	return;
}
var obj81462_onTouchDown_runningActionsCount = 0;
var obj81462_onTouchDown_loopCount = 0;
obj81462_onTouchDown_actionGroup0();
});



/*
 *
 *   obj81462: Event SCActionDragDrop81465_droppedOutsideTargetActions
 *
 */
$("#obj81462").bind("SCActionDragDrop81465_droppedOutsideTargetActions", function(event) {
	if (window.obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81462_SCActionDragDrop81465_droppedOutsideTargetActions is still running");
	return;
}
var obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_runningActionsCount = 0;
var obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_loopCount = 0;
obj81462_SCActionDragDrop81465_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj81462: Event droppedInsideTargetActions_4
 *
 */
$("#obj81462").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj81462_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81462_droppedInsideTargetActions_4 is still running");
	return;
}
var obj81462_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj81462_droppedInsideTargetActions_4_loopCount = 0;
obj81462_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj81462: Event droppedInsideTargetActions_3
 *
 */
$("#obj81462").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj81462_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81462_droppedInsideTargetActions_3 is still running");
	return;
}
var obj81462_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj81462_droppedInsideTargetActions_3_loopCount = 0;
obj81462_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj81462: Event droppedInsideTargetActions_2
 *
 */
$("#obj81462").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj81462_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81462_droppedInsideTargetActions_2 is still running");
	return;
}
var obj81462_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj81462_droppedInsideTargetActions_2_loopCount = 0;
obj81462_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj81462: Event droppedInsideTargetActions
 *
 */
$("#obj81462").bind("droppedInsideTargetActions", function(event) {
	if (window.obj81462_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81462_droppedInsideTargetActions is still running");
	return;
}
var obj81462_droppedInsideTargetActions_runningActionsCount = 0;
var obj81462_droppedInsideTargetActions_loopCount = 0;
obj81462_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj81395: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj81395");
	var winTarget = document.getElementById("obj81395");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj81395").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj81395_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj81395_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj81395_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81395_onTouchDown is still running");
	return;
}
var obj81395_onTouchDown_runningActionsCount = 0;
var obj81395_onTouchDown_loopCount = 0;
obj81395_onTouchDown_actionGroup0();
});



/*
 *
 *   obj81395: Event SCActionDragDrop81398_droppedOutsideTargetActions
 *
 */
$("#obj81395").bind("SCActionDragDrop81398_droppedOutsideTargetActions", function(event) {
	if (window.obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81395_SCActionDragDrop81398_droppedOutsideTargetActions is still running");
	return;
}
var obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_runningActionsCount = 0;
var obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_loopCount = 0;
obj81395_SCActionDragDrop81398_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj81395: Event droppedInsideTargetActions_4
 *
 */
$("#obj81395").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj81395_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81395_droppedInsideTargetActions_4 is still running");
	return;
}
var obj81395_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj81395_droppedInsideTargetActions_4_loopCount = 0;
obj81395_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj81395: Event droppedInsideTargetActions_3
 *
 */
$("#obj81395").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj81395_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81395_droppedInsideTargetActions_3 is still running");
	return;
}
var obj81395_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj81395_droppedInsideTargetActions_3_loopCount = 0;
obj81395_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj81395: Event droppedInsideTargetActions_2
 *
 */
$("#obj81395").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj81395_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81395_droppedInsideTargetActions_2 is still running");
	return;
}
var obj81395_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj81395_droppedInsideTargetActions_2_loopCount = 0;
obj81395_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj81395: Event droppedInsideTargetActions
 *
 */
$("#obj81395").bind("droppedInsideTargetActions", function(event) {
	if (window.obj81395_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81395_droppedInsideTargetActions is still running");
	return;
}
var obj81395_droppedInsideTargetActions_runningActionsCount = 0;
var obj81395_droppedInsideTargetActions_loopCount = 0;
obj81395_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj81328: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj81328");
	var winTarget = document.getElementById("obj81328");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj81328").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj81328_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj81328_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj81328_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81328_onTouchDown is still running");
	return;
}
var obj81328_onTouchDown_runningActionsCount = 0;
var obj81328_onTouchDown_loopCount = 0;
obj81328_onTouchDown_actionGroup0();
});



/*
 *
 *   obj81328: Event SCActionDragDrop81331_droppedOutsideTargetActions
 *
 */
$("#obj81328").bind("SCActionDragDrop81331_droppedOutsideTargetActions", function(event) {
	if (window.obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81328_SCActionDragDrop81331_droppedOutsideTargetActions is still running");
	return;
}
var obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_runningActionsCount = 0;
var obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_loopCount = 0;
obj81328_SCActionDragDrop81331_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj81328: Event droppedInsideTargetActions_4
 *
 */
$("#obj81328").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj81328_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81328_droppedInsideTargetActions_4 is still running");
	return;
}
var obj81328_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj81328_droppedInsideTargetActions_4_loopCount = 0;
obj81328_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj81328: Event droppedInsideTargetActions_3
 *
 */
$("#obj81328").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj81328_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81328_droppedInsideTargetActions_3 is still running");
	return;
}
var obj81328_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj81328_droppedInsideTargetActions_3_loopCount = 0;
obj81328_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj81328: Event droppedInsideTargetActions_2
 *
 */
$("#obj81328").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj81328_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81328_droppedInsideTargetActions_2 is still running");
	return;
}
var obj81328_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj81328_droppedInsideTargetActions_2_loopCount = 0;
obj81328_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj81328: Event droppedInsideTargetActions
 *
 */
$("#obj81328").bind("droppedInsideTargetActions", function(event) {
	if (window.obj81328_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81328_droppedInsideTargetActions is still running");
	return;
}
var obj81328_droppedInsideTargetActions_runningActionsCount = 0;
var obj81328_droppedInsideTargetActions_loopCount = 0;
obj81328_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj81261: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj81261");
	var winTarget = document.getElementById("obj81261");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj81261").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj81261_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj81261_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj81261_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81261_onTouchDown is still running");
	return;
}
var obj81261_onTouchDown_runningActionsCount = 0;
var obj81261_onTouchDown_loopCount = 0;
obj81261_onTouchDown_actionGroup0();
});



/*
 *
 *   obj81261: Event SCActionDragDrop81264_droppedOutsideTargetActions
 *
 */
$("#obj81261").bind("SCActionDragDrop81264_droppedOutsideTargetActions", function(event) {
	if (window.obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81261_SCActionDragDrop81264_droppedOutsideTargetActions is still running");
	return;
}
var obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_runningActionsCount = 0;
var obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_loopCount = 0;
obj81261_SCActionDragDrop81264_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj81261: Event droppedInsideTargetActions_4
 *
 */
$("#obj81261").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj81261_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81261_droppedInsideTargetActions_4 is still running");
	return;
}
var obj81261_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj81261_droppedInsideTargetActions_4_loopCount = 0;
obj81261_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj81261: Event droppedInsideTargetActions_3
 *
 */
$("#obj81261").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj81261_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81261_droppedInsideTargetActions_3 is still running");
	return;
}
var obj81261_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj81261_droppedInsideTargetActions_3_loopCount = 0;
obj81261_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj81261: Event droppedInsideTargetActions_2
 *
 */
$("#obj81261").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj81261_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81261_droppedInsideTargetActions_2 is still running");
	return;
}
var obj81261_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj81261_droppedInsideTargetActions_2_loopCount = 0;
obj81261_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj81261: Event droppedInsideTargetActions
 *
 */
$("#obj81261").bind("droppedInsideTargetActions", function(event) {
	if (window.obj81261_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81261_droppedInsideTargetActions is still running");
	return;
}
var obj81261_droppedInsideTargetActions_runningActionsCount = 0;
var obj81261_droppedInsideTargetActions_loopCount = 0;
obj81261_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj81243: Event Touch Down
 *
 */
$("#obj81243").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81243_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81243_onTap is still running");
	return;
}
var obj81243_onTap_runningActionsCount = 0;
var obj81243_onTap_loopCount = 0;
obj81243_onTap_actionGroup0();
});










/*
 *
 *   obj81235: Event Touch Down
 *
 */
$("#obj81235").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81235_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81235_onTap is still running");
	return;
}
var obj81235_onTap_runningActionsCount = 0;
var obj81235_onTap_loopCount = 0;
obj81235_onTap_actionGroup0();
});










/*
 *
 *   obj88093: Event Touch Down
 *
 */
$("#obj88093").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88093_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88093_onTap is still running");
	return;
}
var obj88093_onTap_runningActionsCount = 0;
var obj88093_onTap_loopCount = 0;
obj88093_onTap_actionGroup0();
});










/*
 *
 *   obj88088: Event Touch Down
 *
 */
$("#obj88088").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88088_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88088_onTap is still running");
	return;
}
var obj88088_onTap_runningActionsCount = 0;
var obj88088_onTap_loopCount = 0;
obj88088_onTap_actionGroup0();
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
	
$("#obj81581").trigger('SCEventShow');
$("#obj81578").trigger('SCEventShow');
$("#obj81575").trigger('SCEventShow');
$("#obj81571").trigger('SCEventShow');
$("#obj81569").trigger('SCEventShow');
$("#obj81567").trigger('SCEventShow');
$("#obj81565").trigger('SCEventShow');
$("#obj81563").trigger('SCEventShow');
$("#obj81561").trigger('SCEventShow');
$("#obj81559").trigger('SCEventShow');
$("#obj81557").trigger('SCEventShow');
$("#obj81555").trigger('SCEventShow');
$("#obj81553").trigger('SCEventShow');
$("#obj81551").trigger('SCEventShow');
$("#obj81549").trigger('SCEventShow');
$("#obj81547").trigger('SCEventShow');
$("#obj81545").trigger('SCEventShow');
$("#obj81543").trigger('SCEventShow');
$("#obj81541").trigger('SCEventShow');
$("#obj81539").trigger('SCEventShow');
$("#obj81537").trigger('SCEventShow');
$("#obj81535").trigger('SCEventShow');
$("#obj81533").trigger('SCEventShow');
$("#obj81531").trigger('SCEventShow');
$("#obj81529").trigger('SCEventShow');
$("#obj81462").trigger('SCEventShow');
$("#obj81395").trigger('SCEventShow');
$("#obj81328").trigger('SCEventShow');
$("#obj81261").trigger('SCEventShow');
$("#obj81243").trigger('SCEventShow');
$("#obj81235").trigger('SCEventShow');
$("#obj88093").trigger('SCEventShow');
$("#obj88088").trigger('SCEventShow');
$("#obj88098").trigger('SCEventShow');
$("#obj94833").trigger('SCEventShow');
$("#obj81233").trigger('SCEventShow');
	
});