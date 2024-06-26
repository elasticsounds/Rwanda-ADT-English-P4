pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 2490;
pubcoder.page.title = pubcoder.page.title || "17";
pubcoder.page.number = pubcoder.page.number || 17;
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
var obj2496_onTap_activeActionGroupIndex = -1;
var obj2496_onTap_runningActionsCount = 0;
var obj2496_onTap_loopCount = 0;
var obj2493_onTap_activeActionGroupIndex = -1;
var obj2493_onTap_runningActionsCount = 0;
var obj2493_onTap_loopCount = 0;
var obj2499_onTap_activeActionGroupIndex = -1;
var obj2499_onTap_runningActionsCount = 0;
var obj2499_onTap_loopCount = 0;
var obj2554_onDrag_activeActionGroupIndex = -1;
var obj2554_onDrag_runningActionsCount = 0;
var obj2554_onDrag_loopCount = 0;
var obj2554_onTouchDown_activeActionGroupIndex = -1;
var obj2554_onTouchDown_runningActionsCount = 0;
var obj2554_onTouchDown_loopCount = 0;
var obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_loopCount = 0;
var obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj2554_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj2554_droppedInsideTargetActions_4_loopCount = 0;
var obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj2554_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2554_droppedInsideTargetActions_3_loopCount = 0;
var obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj2554_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2554_droppedInsideTargetActions_2_loopCount = 0;
var obj2554_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2554_droppedInsideTargetActions_runningActionsCount = 0;
var obj2554_droppedInsideTargetActions_loopCount = 0;
var obj2556_onDrag_activeActionGroupIndex = -1;
var obj2556_onDrag_runningActionsCount = 0;
var obj2556_onDrag_loopCount = 0;
var obj2556_onTouchDown_activeActionGroupIndex = -1;
var obj2556_onTouchDown_runningActionsCount = 0;
var obj2556_onTouchDown_loopCount = 0;
var obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_loopCount = 0;
var obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj2556_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj2556_droppedInsideTargetActions_4_loopCount = 0;
var obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj2556_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2556_droppedInsideTargetActions_3_loopCount = 0;
var obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj2556_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2556_droppedInsideTargetActions_2_loopCount = 0;
var obj2556_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2556_droppedInsideTargetActions_runningActionsCount = 0;
var obj2556_droppedInsideTargetActions_loopCount = 0;
var obj2560_onDrag_activeActionGroupIndex = -1;
var obj2560_onDrag_runningActionsCount = 0;
var obj2560_onDrag_loopCount = 0;
var obj2560_onTouchDown_activeActionGroupIndex = -1;
var obj2560_onTouchDown_runningActionsCount = 0;
var obj2560_onTouchDown_loopCount = 0;
var obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_loopCount = 0;
var obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj2560_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj2560_droppedInsideTargetActions_4_loopCount = 0;
var obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj2560_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2560_droppedInsideTargetActions_3_loopCount = 0;
var obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj2560_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2560_droppedInsideTargetActions_2_loopCount = 0;
var obj2560_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2560_droppedInsideTargetActions_runningActionsCount = 0;
var obj2560_droppedInsideTargetActions_loopCount = 0;
var obj2558_onDrag_activeActionGroupIndex = -1;
var obj2558_onDrag_runningActionsCount = 0;
var obj2558_onDrag_loopCount = 0;
var obj2558_onTouchDown_activeActionGroupIndex = -1;
var obj2558_onTouchDown_runningActionsCount = 0;
var obj2558_onTouchDown_loopCount = 0;
var obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_loopCount = 0;
var obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj2558_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj2558_droppedInsideTargetActions_4_loopCount = 0;
var obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj2558_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2558_droppedInsideTargetActions_3_loopCount = 0;
var obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj2558_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2558_droppedInsideTargetActions_2_loopCount = 0;
var obj2558_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2558_droppedInsideTargetActions_runningActionsCount = 0;
var obj2558_droppedInsideTargetActions_loopCount = 0;
var obj65230_onTap_activeActionGroupIndex = -1;
var obj65230_onTap_runningActionsCount = 0;
var obj65230_onTap_loopCount = 0;
var obj65222_onTap_activeActionGroupIndex = -1;
var obj65222_onTap_runningActionsCount = 0;
var obj65222_onTap_loopCount = 0;
var obj87005_onTap_activeActionGroupIndex = -1;
var obj87005_onTap_runningActionsCount = 0;
var obj87005_onTap_loopCount = 0;
var obj87000_onTap_activeActionGroupIndex = -1;
var obj87000_onTap_runningActionsCount = 0;
var obj87000_onTap_loopCount = 0;
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
		
obj2496_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2496_onTap_activeActionGroupIndex = -1;
		$("#obj2496").trigger("obj2496_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2496) {
				console.warn("de-queueing event obj2496." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2496").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2496_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2498();
function goToPage_2498() {
	window.obj2496_onTap_runningActionsCount = obj2496_onTap_runningActionsCount + 1;
	$("#anchor108")[0].click();
	window.obj2496_onTap_runningActionsCount = window.obj2496_onTap_runningActionsCount - 1;
if (window.obj2496_onTap_runningActionsCount < 0) {
	window.obj2496_onTap_runningActionsCount = 0;
} else if (window.obj2496_onTap_runningActionsCount == 0) {
	obj2496_onTap_actionGroup1();
}
}





















};
obj2496_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2496_onTap_activeActionGroupIndex = -1;
		$("#obj2496").trigger("obj2496_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2496) {
				console.warn("de-queueing event obj2496." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2496").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2496_onTap_activeActionGroupIndex = 1;
	





















};
obj2493_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2493_onTap_activeActionGroupIndex = -1;
		$("#obj2493").trigger("obj2493_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2493) {
				console.warn("de-queueing event obj2493." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2493").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2493_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2495();
function goToPage_2495() {
	window.obj2493_onTap_runningActionsCount = obj2493_onTap_runningActionsCount + 1;
	$("#anchor109")[0].click();
	window.obj2493_onTap_runningActionsCount = window.obj2493_onTap_runningActionsCount - 1;
if (window.obj2493_onTap_runningActionsCount < 0) {
	window.obj2493_onTap_runningActionsCount = 0;
} else if (window.obj2493_onTap_runningActionsCount == 0) {
	obj2493_onTap_actionGroup1();
}
}





















};
obj2493_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2493_onTap_activeActionGroupIndex = -1;
		$("#obj2493").trigger("obj2493_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2493) {
				console.warn("de-queueing event obj2493." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2493").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2493_onTap_activeActionGroupIndex = 1;
	





















};
obj2499_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2499_onTap_activeActionGroupIndex = -1;
		$("#obj2499").trigger("obj2499_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2499) {
				console.warn("de-queueing event obj2499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2499_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2501();
function goToPage_2501() {
	window.obj2499_onTap_runningActionsCount = obj2499_onTap_runningActionsCount + 1;
	$("#anchor110")[0].click();
	window.obj2499_onTap_runningActionsCount = window.obj2499_onTap_runningActionsCount - 1;
if (window.obj2499_onTap_runningActionsCount < 0) {
	window.obj2499_onTap_runningActionsCount = 0;
} else if (window.obj2499_onTap_runningActionsCount == 0) {
	obj2499_onTap_actionGroup1();
}
}





















};
obj2499_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2499_onTap_activeActionGroupIndex = -1;
		$("#obj2499").trigger("obj2499_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2499) {
				console.warn("de-queueing event obj2499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2499_onTap_activeActionGroupIndex = 1;
	





















};
obj2554_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2554");
//	action: dragDrop
//	target: obj2554 
dragDrop_2577();
function dragDrop_2577() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2554_onTouchDown_runningActionsCount = obj2554_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2554');
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
	  	containerNode = $('#obj2524');
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
    	window.obj2554_onTouchDown_runningActionsCount = window.obj2554_onTouchDown_runningActionsCount - 1;
if (window.obj2554_onTouchDown_runningActionsCount < 0) {
	window.obj2554_onTouchDown_runningActionsCount = 0;
} else if (window.obj2554_onTouchDown_runningActionsCount == 0) {
	obj2554_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2540","#obj2538","#obj2542","#obj2544");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2577 = false;
    	var dropped_id_2577;
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
					dropped_2577 = true;
					dropped_id_2577 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2577) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2554").trigger('SCActionDragDrop2577_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj2554_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2554_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2554 
move_92132();
function move_92132() {
	window.obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_runningActionsCount = obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj2554");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 144;
	var moveY = 615;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_runningActionsCount = window.obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj2554_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2640();
function runjs_2640() {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = obj2554_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2544").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2554_droppedInsideTargetActions_4_runningActionsCount = window.obj2554_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj2554_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2641();
function runjs_2641() {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = obj2554_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2544").css("border-color", "#C00000"); $("#obj2544").css("border-width", "2px"); $("#obj2544").css("border-style", "solid"); $("#obj2544").css("border-radius", "10px"); $("#obj2544").css("-webkit-border-radius", "10px"); $("#obj2544").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2554_droppedInsideTargetActions_4_runningActionsCount = window.obj2554_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj2554_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2642();
function runjs_2642() {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = obj2554_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2554").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2554_droppedInsideTargetActions_4_runningActionsCount = window.obj2554_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj2554_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2546 
hide_2643();
function hide_2643() {
	var selector = "#obj2546";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = obj2554_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2554_droppedInsideTargetActions_4_runningActionsCount = window.obj2554_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2643(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2554_droppedInsideTargetActions_4_runningActionsCount = window.obj2554_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_4_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2554_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2644();
function switchText_2644() {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = obj2554_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2554_droppedInsideTargetActions_4_runningActionsCount = window.obj2554_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2554_droppedInsideTargetActions_4_runningActionsCount = window.obj2554_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj2554_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2554 
move_2645();
function move_2645() {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = obj2554_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj2554");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 144;
	var moveY = 615;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2554_droppedInsideTargetActions_4_runningActionsCount = window.obj2554_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj2554_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2646();
function runjs_2646() {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = obj2554_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2544").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2554_droppedInsideTargetActions_4_runningActionsCount = window.obj2554_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj2554_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2647();
function runjs_2647() {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = obj2554_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2544").css("border-color", "#000000"); $("#obj2544").css("border-width", "1px"); $("#obj2544").css("border-style", "solid"); $("#obj2544").css("border-radius", "10px"); $("#obj2544").css("-webkit-border-radius", "10px"); $("#obj2544").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2554_droppedInsideTargetActions_4_runningActionsCount = window.obj2554_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj2554_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2648();
function runjs_2648() {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = obj2554_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2554").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj2554_droppedInsideTargetActions_4_runningActionsCount = window.obj2554_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_4_actionGroup9();
}
	}, 1);
}







};
obj2554_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2546
(function(){
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = obj2554_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj2546";
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
					window.obj2554_droppedInsideTargetActions_4_runningActionsCount = window.obj2554_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_4_actionGroup10();
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
				window.obj2554_droppedInsideTargetActions_4_runningActionsCount = window.obj2554_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_4_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2554_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2573 
playAudio_2650();
function playAudio_2650() {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = obj2554_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj2573")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2554_droppedInsideTargetActions_4_runningActionsCount = window.obj2554_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_4_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2554_droppedInsideTargetActions_4_runningActionsCount = window.obj2554_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_4_actionGroup11();
}
	}
}









};
obj2554_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2651();
function switchText_2651() {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = obj2554_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2554_droppedInsideTargetActions_4_runningActionsCount = window.obj2554_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_4_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2554_droppedInsideTargetActions_4_runningActionsCount = window.obj2554_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_4_actionGroup12();
}
		}, 1);
	}
}






};
obj2554_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	





















};
obj2554_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2627();
function runjs_2627() {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = obj2554_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2542").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2554_droppedInsideTargetActions_3_runningActionsCount = window.obj2554_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj2554_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2628();
function runjs_2628() {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = obj2554_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2542").css("border-color", "#C00000"); $("#obj2542").css("border-width", "2px"); $("#obj2542").css("border-style", "solid"); $("#obj2542").css("border-radius", "10px"); $("#obj2542").css("-webkit-border-radius", "10px"); $("#obj2542").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2554_droppedInsideTargetActions_3_runningActionsCount = window.obj2554_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj2554_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2629();
function runjs_2629() {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = obj2554_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2554").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2554_droppedInsideTargetActions_3_runningActionsCount = window.obj2554_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj2554_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2548 
hide_2630();
function hide_2630() {
	var selector = "#obj2548";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = obj2554_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2554_droppedInsideTargetActions_3_runningActionsCount = window.obj2554_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2630(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2554_droppedInsideTargetActions_3_runningActionsCount = window.obj2554_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2554_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2631();
function switchText_2631() {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = obj2554_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2554_droppedInsideTargetActions_3_runningActionsCount = window.obj2554_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2554_droppedInsideTargetActions_3_runningActionsCount = window.obj2554_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj2554_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2554 
move_2632();
function move_2632() {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = obj2554_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj2554");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 144;
	var moveY = 615;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2554_droppedInsideTargetActions_3_runningActionsCount = window.obj2554_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj2554_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2633();
function runjs_2633() {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = obj2554_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2542").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2554_droppedInsideTargetActions_3_runningActionsCount = window.obj2554_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj2554_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2634();
function runjs_2634() {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = obj2554_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2542").css("border-color", "#000000"); $("#obj2542").css("border-width", "1px"); $("#obj2542").css("border-style", "solid"); $("#obj2542").css("border-radius", "10px"); $("#obj2542").css("-webkit-border-radius", "10px"); $("#obj2542").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2554_droppedInsideTargetActions_3_runningActionsCount = window.obj2554_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj2554_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2635();
function runjs_2635() {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = obj2554_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2554").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj2554_droppedInsideTargetActions_3_runningActionsCount = window.obj2554_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_3_actionGroup9();
}
	}, 1);
}







};
obj2554_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2548
(function(){
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = obj2554_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj2548";
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
					window.obj2554_droppedInsideTargetActions_3_runningActionsCount = window.obj2554_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_3_actionGroup10();
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
				window.obj2554_droppedInsideTargetActions_3_runningActionsCount = window.obj2554_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_3_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2554_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2573 
playAudio_2637();
function playAudio_2637() {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = obj2554_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj2573")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2554_droppedInsideTargetActions_3_runningActionsCount = window.obj2554_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_3_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2554_droppedInsideTargetActions_3_runningActionsCount = window.obj2554_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_3_actionGroup11();
}
	}
}









};
obj2554_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2638();
function switchText_2638() {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = obj2554_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2554_droppedInsideTargetActions_3_runningActionsCount = window.obj2554_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_3_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2554_droppedInsideTargetActions_3_runningActionsCount = window.obj2554_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_3_actionGroup12();
}
		}, 1);
	}
}






};
obj2554_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	





















};
obj2554_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2604();
function runjs_2604() {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = obj2554_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2538").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2554_droppedInsideTargetActions_2_runningActionsCount = window.obj2554_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj2554_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2605();
function runjs_2605() {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = obj2554_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2538").css("border-color", "#C00000"); $("#obj2538").css("border-width", "2px"); $("#obj2538").css("border-style", "solid"); $("#obj2538").css("border-radius", "10px"); $("#obj2538").css("-webkit-border-radius", "10px"); $("#obj2538").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2554_droppedInsideTargetActions_2_runningActionsCount = window.obj2554_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj2554_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2620();
function runjs_2620() {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = obj2554_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2554").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2554_droppedInsideTargetActions_2_runningActionsCount = window.obj2554_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj2554_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2536 
hide_2607();
function hide_2607() {
	var selector = "#obj2536";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = obj2554_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2554_droppedInsideTargetActions_2_runningActionsCount = window.obj2554_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2607(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2554_droppedInsideTargetActions_2_runningActionsCount = window.obj2554_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2554_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2608();
function switchText_2608() {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = obj2554_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2554_droppedInsideTargetActions_2_runningActionsCount = window.obj2554_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2554_droppedInsideTargetActions_2_runningActionsCount = window.obj2554_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj2554_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2554 
move_2609();
function move_2609() {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = obj2554_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj2554");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 144;
	var moveY = 615;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2554_droppedInsideTargetActions_2_runningActionsCount = window.obj2554_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj2554_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2610();
function runjs_2610() {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = obj2554_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2538").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2554_droppedInsideTargetActions_2_runningActionsCount = window.obj2554_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj2554_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2611();
function runjs_2611() {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = obj2554_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2538").css("border-color", "#000000"); $("#obj2538").css("border-width", "1px"); $("#obj2538").css("border-style", "solid"); $("#obj2538").css("border-radius", "10px"); $("#obj2538").css("-webkit-border-radius", "10px"); $("#obj2538").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2554_droppedInsideTargetActions_2_runningActionsCount = window.obj2554_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj2554_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2621();
function runjs_2621() {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = obj2554_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2554").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj2554_droppedInsideTargetActions_2_runningActionsCount = window.obj2554_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_2_actionGroup9();
}
	}, 1);
}







};
obj2554_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2536
(function(){
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = obj2554_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj2536";
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
					window.obj2554_droppedInsideTargetActions_2_runningActionsCount = window.obj2554_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_2_actionGroup10();
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
				window.obj2554_droppedInsideTargetActions_2_runningActionsCount = window.obj2554_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_2_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2554_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2573 
playAudio_2614();
function playAudio_2614() {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = obj2554_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj2573")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2554_droppedInsideTargetActions_2_runningActionsCount = window.obj2554_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_2_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2554_droppedInsideTargetActions_2_runningActionsCount = window.obj2554_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_2_actionGroup11();
}
	}
}









};
obj2554_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2615();
function switchText_2615() {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = obj2554_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2554_droppedInsideTargetActions_2_runningActionsCount = window.obj2554_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_2_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2554_droppedInsideTargetActions_2_runningActionsCount = window.obj2554_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_2_actionGroup12();
}
		}, 1);
	}
}






};
obj2554_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	





















};
obj2554_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2579();
function runjs_2579() {
	window.obj2554_droppedInsideTargetActions_runningActionsCount = obj2554_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2540").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2554_droppedInsideTargetActions_runningActionsCount = window.obj2554_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj2554_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_2583();
function switchText_2583() {
	window.obj2554_droppedInsideTargetActions_runningActionsCount = obj2554_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2554_droppedInsideTargetActions_runningActionsCount = window.obj2554_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2554_droppedInsideTargetActions_runningActionsCount = window.obj2554_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj2554_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2580();
function runjs_2580() {
	window.obj2554_droppedInsideTargetActions_runningActionsCount = obj2554_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2540").css("border-color", "#058E3F"); $("#obj2540").css("border-width", "2px"); $("#obj2540").css("border-style", "solid"); $("#obj2540").css("border-radius", "10px"); $("#obj2540").css("-webkit-border-radius", "10px"); $("#obj2540").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2554_droppedInsideTargetActions_runningActionsCount = window.obj2554_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj2554_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2550 
hide_2581();
function hide_2581() {
	var selector = "#obj2550";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2554_droppedInsideTargetActions_runningActionsCount = obj2554_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2554_droppedInsideTargetActions_runningActionsCount = window.obj2554_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2581(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2554_droppedInsideTargetActions_runningActionsCount = window.obj2554_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2554_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_2582();
function runjs_2582() {
	window.obj2554_droppedInsideTargetActions_runningActionsCount = obj2554_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2554").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2554_droppedInsideTargetActions_runningActionsCount = window.obj2554_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj2554_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj2574 
playAudio_2584();
function playAudio_2584() {
	window.obj2554_droppedInsideTargetActions_runningActionsCount = obj2554_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj2574")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2554_droppedInsideTargetActions_runningActionsCount = window.obj2554_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2554_droppedInsideTargetActions_runningActionsCount = window.obj2554_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj2554_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90095();
function switchText_90095() {
	window.obj2554_droppedInsideTargetActions_runningActionsCount = obj2554_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2554_droppedInsideTargetActions_runningActionsCount = window.obj2554_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2554_droppedInsideTargetActions_runningActionsCount = window.obj2554_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2554_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2554_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2554_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2554_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj2554_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2554_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2554").trigger("obj2554_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2554) {
				console.warn("de-queueing event obj2554." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2554").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2554_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj2556_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2556");
//	action: dragDrop
//	target: obj2556 
dragDrop_2563();
function dragDrop_2563() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2556_onTouchDown_runningActionsCount = obj2556_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2556');
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
	  	containerNode = $('#obj2524');
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
    	window.obj2556_onTouchDown_runningActionsCount = window.obj2556_onTouchDown_runningActionsCount - 1;
if (window.obj2556_onTouchDown_runningActionsCount < 0) {
	window.obj2556_onTouchDown_runningActionsCount = 0;
} else if (window.obj2556_onTouchDown_runningActionsCount == 0) {
	obj2556_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2538","#obj2540","#obj2542","#obj2544");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2563 = false;
    	var dropped_id_2563;
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
					dropped_2563 = true;
					dropped_id_2563 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2563) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2556").trigger('SCActionDragDrop2563_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj2556_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2556_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2556 
move_92134();
function move_92134() {
	window.obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_runningActionsCount = obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj2556");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 325;
	var moveY = 614;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_runningActionsCount = window.obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj2556_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2679();
function runjs_2679() {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = obj2556_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2544").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2556_droppedInsideTargetActions_4_runningActionsCount = window.obj2556_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj2556_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2680();
function runjs_2680() {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = obj2556_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2544").css("border-color", "#C00000"); $("#obj2544").css("border-width", "2px"); $("#obj2544").css("border-style", "solid"); $("#obj2544").css("border-radius", "10px"); $("#obj2544").css("-webkit-border-radius", "10px"); $("#obj2544").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2556_droppedInsideTargetActions_4_runningActionsCount = window.obj2556_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj2556_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2681();
function runjs_2681() {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = obj2556_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2556").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2556_droppedInsideTargetActions_4_runningActionsCount = window.obj2556_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj2556_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2546 
hide_2682();
function hide_2682() {
	var selector = "#obj2546";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = obj2556_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2556_droppedInsideTargetActions_4_runningActionsCount = window.obj2556_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2682(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2556_droppedInsideTargetActions_4_runningActionsCount = window.obj2556_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_4_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2556_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2683();
function switchText_2683() {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = obj2556_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2556_droppedInsideTargetActions_4_runningActionsCount = window.obj2556_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2556_droppedInsideTargetActions_4_runningActionsCount = window.obj2556_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj2556_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2556 
move_2684();
function move_2684() {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = obj2556_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj2556");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 325;
	var moveY = 614;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2556_droppedInsideTargetActions_4_runningActionsCount = window.obj2556_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj2556_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2685();
function runjs_2685() {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = obj2556_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2544").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2556_droppedInsideTargetActions_4_runningActionsCount = window.obj2556_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj2556_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2686();
function runjs_2686() {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = obj2556_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2544").css("border-color", "#000000"); $("#obj2544").css("border-width", "1px"); $("#obj2544").css("border-style", "solid"); $("#obj2544").css("border-radius", "10px"); $("#obj2544").css("-webkit-border-radius", "10px"); $("#obj2544").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2556_droppedInsideTargetActions_4_runningActionsCount = window.obj2556_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj2556_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2687();
function runjs_2687() {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = obj2556_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2556").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj2556_droppedInsideTargetActions_4_runningActionsCount = window.obj2556_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_4_actionGroup9();
}
	}, 1);
}







};
obj2556_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2546
(function(){
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = obj2556_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj2546";
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
					window.obj2556_droppedInsideTargetActions_4_runningActionsCount = window.obj2556_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_4_actionGroup10();
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
				window.obj2556_droppedInsideTargetActions_4_runningActionsCount = window.obj2556_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_4_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2556_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2573 
playAudio_2689();
function playAudio_2689() {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = obj2556_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj2573")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2556_droppedInsideTargetActions_4_runningActionsCount = window.obj2556_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_4_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2556_droppedInsideTargetActions_4_runningActionsCount = window.obj2556_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_4_actionGroup11();
}
	}
}









};
obj2556_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2690();
function switchText_2690() {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = obj2556_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2556_droppedInsideTargetActions_4_runningActionsCount = window.obj2556_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_4_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2556_droppedInsideTargetActions_4_runningActionsCount = window.obj2556_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_4_actionGroup12();
}
		}, 1);
	}
}






};
obj2556_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	





















};
obj2556_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2666();
function runjs_2666() {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = obj2556_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2542").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2556_droppedInsideTargetActions_3_runningActionsCount = window.obj2556_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj2556_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2667();
function runjs_2667() {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = obj2556_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2542").css("border-color", "#C00000"); $("#obj2542").css("border-width", "2px"); $("#obj2542").css("border-style", "solid"); $("#obj2542").css("border-radius", "10px"); $("#obj2542").css("-webkit-border-radius", "10px"); $("#obj2542").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2556_droppedInsideTargetActions_3_runningActionsCount = window.obj2556_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj2556_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2668();
function runjs_2668() {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = obj2556_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2556").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2556_droppedInsideTargetActions_3_runningActionsCount = window.obj2556_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj2556_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2548 
hide_2669();
function hide_2669() {
	var selector = "#obj2548";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = obj2556_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2556_droppedInsideTargetActions_3_runningActionsCount = window.obj2556_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2669(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2556_droppedInsideTargetActions_3_runningActionsCount = window.obj2556_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2556_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2670();
function switchText_2670() {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = obj2556_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2556_droppedInsideTargetActions_3_runningActionsCount = window.obj2556_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2556_droppedInsideTargetActions_3_runningActionsCount = window.obj2556_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj2556_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2556 
move_2671();
function move_2671() {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = obj2556_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj2556");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 325;
	var moveY = 614;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2556_droppedInsideTargetActions_3_runningActionsCount = window.obj2556_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj2556_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2672();
function runjs_2672() {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = obj2556_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2542").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2556_droppedInsideTargetActions_3_runningActionsCount = window.obj2556_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj2556_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2673();
function runjs_2673() {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = obj2556_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2542").css("border-color", "#000000"); $("#obj2542").css("border-width", "1px"); $("#obj2542").css("border-style", "solid"); $("#obj2542").css("border-radius", "10px"); $("#obj2542").css("-webkit-border-radius", "10px"); $("#obj2542").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2556_droppedInsideTargetActions_3_runningActionsCount = window.obj2556_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj2556_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2674();
function runjs_2674() {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = obj2556_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2556").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj2556_droppedInsideTargetActions_3_runningActionsCount = window.obj2556_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_3_actionGroup9();
}
	}, 1);
}







};
obj2556_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2548
(function(){
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = obj2556_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj2548";
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
					window.obj2556_droppedInsideTargetActions_3_runningActionsCount = window.obj2556_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_3_actionGroup10();
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
				window.obj2556_droppedInsideTargetActions_3_runningActionsCount = window.obj2556_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_3_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2556_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2573 
playAudio_2676();
function playAudio_2676() {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = obj2556_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj2573")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2556_droppedInsideTargetActions_3_runningActionsCount = window.obj2556_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_3_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2556_droppedInsideTargetActions_3_runningActionsCount = window.obj2556_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_3_actionGroup11();
}
	}
}









};
obj2556_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2677();
function switchText_2677() {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = obj2556_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2556_droppedInsideTargetActions_3_runningActionsCount = window.obj2556_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_3_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2556_droppedInsideTargetActions_3_runningActionsCount = window.obj2556_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_3_actionGroup12();
}
		}, 1);
	}
}






};
obj2556_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	





















};
obj2556_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2653();
function runjs_2653() {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = obj2556_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2540").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2556_droppedInsideTargetActions_2_runningActionsCount = window.obj2556_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj2556_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2654();
function runjs_2654() {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = obj2556_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2540").css("border-color", "#C00000"); $("#obj2540").css("border-width", "2px"); $("#obj2540").css("border-style", "solid"); $("#obj2540").css("border-radius", "10px"); $("#obj2540").css("-webkit-border-radius", "10px"); $("#obj2540").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2556_droppedInsideTargetActions_2_runningActionsCount = window.obj2556_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj2556_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2655();
function runjs_2655() {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = obj2556_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2556").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2556_droppedInsideTargetActions_2_runningActionsCount = window.obj2556_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj2556_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2550 
hide_2656();
function hide_2656() {
	var selector = "#obj2550";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = obj2556_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2556_droppedInsideTargetActions_2_runningActionsCount = window.obj2556_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2656(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2556_droppedInsideTargetActions_2_runningActionsCount = window.obj2556_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2556_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2657();
function switchText_2657() {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = obj2556_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2556_droppedInsideTargetActions_2_runningActionsCount = window.obj2556_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2556_droppedInsideTargetActions_2_runningActionsCount = window.obj2556_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj2556_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2556 
move_2658();
function move_2658() {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = obj2556_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj2556");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 325;
	var moveY = 614;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2556_droppedInsideTargetActions_2_runningActionsCount = window.obj2556_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj2556_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2659();
function runjs_2659() {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = obj2556_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2540").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2556_droppedInsideTargetActions_2_runningActionsCount = window.obj2556_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj2556_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2660();
function runjs_2660() {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = obj2556_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2540").css("border-color", "#000000"); $("#obj2540").css("border-width", "1px"); $("#obj2540").css("border-style", "solid"); $("#obj2540").css("border-radius", "10px"); $("#obj2540").css("-webkit-border-radius", "10px"); $("#obj2540").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2556_droppedInsideTargetActions_2_runningActionsCount = window.obj2556_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj2556_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2661();
function runjs_2661() {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = obj2556_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2556").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj2556_droppedInsideTargetActions_2_runningActionsCount = window.obj2556_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_2_actionGroup9();
}
	}, 1);
}







};
obj2556_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2550
(function(){
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = obj2556_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj2550";
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
					window.obj2556_droppedInsideTargetActions_2_runningActionsCount = window.obj2556_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_2_actionGroup10();
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
				window.obj2556_droppedInsideTargetActions_2_runningActionsCount = window.obj2556_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_2_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2556_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2573 
playAudio_2663();
function playAudio_2663() {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = obj2556_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj2573")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2556_droppedInsideTargetActions_2_runningActionsCount = window.obj2556_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_2_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2556_droppedInsideTargetActions_2_runningActionsCount = window.obj2556_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_2_actionGroup11();
}
	}
}









};
obj2556_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2664();
function switchText_2664() {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = obj2556_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2556_droppedInsideTargetActions_2_runningActionsCount = window.obj2556_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_2_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2556_droppedInsideTargetActions_2_runningActionsCount = window.obj2556_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_2_actionGroup12();
}
		}, 1);
	}
}






};
obj2556_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	





















};
obj2556_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2571();
function runjs_2571() {
	window.obj2556_droppedInsideTargetActions_runningActionsCount = obj2556_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2538").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2556_droppedInsideTargetActions_runningActionsCount = window.obj2556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj2556_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_2569();
function switchText_2569() {
	window.obj2556_droppedInsideTargetActions_runningActionsCount = obj2556_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2556_droppedInsideTargetActions_runningActionsCount = window.obj2556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2556_droppedInsideTargetActions_runningActionsCount = window.obj2556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj2556_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2572();
function runjs_2572() {
	window.obj2556_droppedInsideTargetActions_runningActionsCount = obj2556_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2538").css("border-color", "#058E3F"); $("#obj2538").css("border-width", "2px"); $("#obj2538").css("border-style", "solid"); $("#obj2538").css("border-radius", "10px"); $("#obj2538").css("-webkit-border-radius", "10px"); $("#obj2538").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2556_droppedInsideTargetActions_runningActionsCount = window.obj2556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj2556_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2536 
hide_2567();
function hide_2567() {
	var selector = "#obj2536";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2556_droppedInsideTargetActions_runningActionsCount = obj2556_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2556_droppedInsideTargetActions_runningActionsCount = window.obj2556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2567(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2556_droppedInsideTargetActions_runningActionsCount = window.obj2556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2556_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_2568();
function runjs_2568() {
	window.obj2556_droppedInsideTargetActions_runningActionsCount = obj2556_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2556").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2556_droppedInsideTargetActions_runningActionsCount = window.obj2556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj2556_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj2574 
playAudio_2570();
function playAudio_2570() {
	window.obj2556_droppedInsideTargetActions_runningActionsCount = obj2556_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj2574")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2556_droppedInsideTargetActions_runningActionsCount = window.obj2556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2556_droppedInsideTargetActions_runningActionsCount = window.obj2556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj2556_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90097();
function switchText_90097() {
	window.obj2556_droppedInsideTargetActions_runningActionsCount = obj2556_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2556_droppedInsideTargetActions_runningActionsCount = window.obj2556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2556_droppedInsideTargetActions_runningActionsCount = window.obj2556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2556_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj2556_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2556_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2556").trigger("obj2556_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2556) {
				console.warn("de-queueing event obj2556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2556_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj2560_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2560");
//	action: dragDrop
//	target: obj2560 
dragDrop_2595();
function dragDrop_2595() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2560_onTouchDown_runningActionsCount = obj2560_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2560');
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
	  	containerNode = $('#obj2524');
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
    	window.obj2560_onTouchDown_runningActionsCount = window.obj2560_onTouchDown_runningActionsCount - 1;
if (window.obj2560_onTouchDown_runningActionsCount < 0) {
	window.obj2560_onTouchDown_runningActionsCount = 0;
} else if (window.obj2560_onTouchDown_runningActionsCount == 0) {
	obj2560_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2544","#obj2538","#obj2540","#obj2542");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2595 = false;
    	var dropped_id_2595;
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
					dropped_2595 = true;
					dropped_id_2595 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2595) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2560").trigger('SCActionDragDrop2595_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj2560_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2560_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2560 
move_92136();
function move_92136() {
	window.obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_runningActionsCount = obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj2560");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 144;
	var moveY = 666;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_runningActionsCount = window.obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj2560_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2718();
function runjs_2718() {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = obj2560_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2542").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2560_droppedInsideTargetActions_4_runningActionsCount = window.obj2560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj2560_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2719();
function runjs_2719() {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = obj2560_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2542").css("border-color", "#C00000"); $("#obj2542").css("border-width", "2px"); $("#obj2542").css("border-style", "solid"); $("#obj2542").css("border-radius", "10px"); $("#obj2542").css("-webkit-border-radius", "10px"); $("#obj2542").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2560_droppedInsideTargetActions_4_runningActionsCount = window.obj2560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj2560_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2720();
function runjs_2720() {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = obj2560_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2560").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2560_droppedInsideTargetActions_4_runningActionsCount = window.obj2560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj2560_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2548 
hide_2721();
function hide_2721() {
	var selector = "#obj2548";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = obj2560_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2560_droppedInsideTargetActions_4_runningActionsCount = window.obj2560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2721(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2560_droppedInsideTargetActions_4_runningActionsCount = window.obj2560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_4_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2560_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2722();
function switchText_2722() {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = obj2560_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2560_droppedInsideTargetActions_4_runningActionsCount = window.obj2560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2560_droppedInsideTargetActions_4_runningActionsCount = window.obj2560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj2560_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2560 
move_2723();
function move_2723() {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = obj2560_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj2560");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 144;
	var moveY = 666;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2560_droppedInsideTargetActions_4_runningActionsCount = window.obj2560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj2560_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2724();
function runjs_2724() {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = obj2560_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2542").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2560_droppedInsideTargetActions_4_runningActionsCount = window.obj2560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj2560_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2725();
function runjs_2725() {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = obj2560_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2542").css("border-color", "#000000"); $("#obj2542").css("border-width", "1px"); $("#obj2542").css("border-style", "solid"); $("#obj2542").css("border-radius", "10px"); $("#obj2542").css("-webkit-border-radius", "10px"); $("#obj2542").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2560_droppedInsideTargetActions_4_runningActionsCount = window.obj2560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj2560_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2726();
function runjs_2726() {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = obj2560_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2560").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj2560_droppedInsideTargetActions_4_runningActionsCount = window.obj2560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_4_actionGroup9();
}
	}, 1);
}







};
obj2560_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2548
(function(){
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = obj2560_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj2548";
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
					window.obj2560_droppedInsideTargetActions_4_runningActionsCount = window.obj2560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_4_actionGroup10();
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
				window.obj2560_droppedInsideTargetActions_4_runningActionsCount = window.obj2560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_4_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2560_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2573 
playAudio_2728();
function playAudio_2728() {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = obj2560_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj2573")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2560_droppedInsideTargetActions_4_runningActionsCount = window.obj2560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_4_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2560_droppedInsideTargetActions_4_runningActionsCount = window.obj2560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_4_actionGroup11();
}
	}
}









};
obj2560_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2729();
function switchText_2729() {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = obj2560_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2560_droppedInsideTargetActions_4_runningActionsCount = window.obj2560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_4_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2560_droppedInsideTargetActions_4_runningActionsCount = window.obj2560_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_4_actionGroup12();
}
		}, 1);
	}
}






};
obj2560_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	





















};
obj2560_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2705();
function runjs_2705() {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = obj2560_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2540").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2560_droppedInsideTargetActions_3_runningActionsCount = window.obj2560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj2560_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2706();
function runjs_2706() {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = obj2560_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2540").css("border-color", "#C00000"); $("#obj2540").css("border-width", "2px"); $("#obj2540").css("border-style", "solid"); $("#obj2540").css("border-radius", "10px"); $("#obj2540").css("-webkit-border-radius", "10px"); $("#obj2540").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2560_droppedInsideTargetActions_3_runningActionsCount = window.obj2560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj2560_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2707();
function runjs_2707() {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = obj2560_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2560").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2560_droppedInsideTargetActions_3_runningActionsCount = window.obj2560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj2560_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2550 
hide_2708();
function hide_2708() {
	var selector = "#obj2550";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = obj2560_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2560_droppedInsideTargetActions_3_runningActionsCount = window.obj2560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2708(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2560_droppedInsideTargetActions_3_runningActionsCount = window.obj2560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2560_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2709();
function switchText_2709() {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = obj2560_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2560_droppedInsideTargetActions_3_runningActionsCount = window.obj2560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2560_droppedInsideTargetActions_3_runningActionsCount = window.obj2560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj2560_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2560 
move_2710();
function move_2710() {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = obj2560_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj2560");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 144;
	var moveY = 666;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2560_droppedInsideTargetActions_3_runningActionsCount = window.obj2560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj2560_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2711();
function runjs_2711() {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = obj2560_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2540").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2560_droppedInsideTargetActions_3_runningActionsCount = window.obj2560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj2560_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2712();
function runjs_2712() {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = obj2560_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2540").css("border-color", "#000000"); $("#obj2540").css("border-width", "1px"); $("#obj2540").css("border-style", "solid"); $("#obj2540").css("border-radius", "10px"); $("#obj2540").css("-webkit-border-radius", "10px"); $("#obj2540").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2560_droppedInsideTargetActions_3_runningActionsCount = window.obj2560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj2560_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2713();
function runjs_2713() {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = obj2560_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2560").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj2560_droppedInsideTargetActions_3_runningActionsCount = window.obj2560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_3_actionGroup9();
}
	}, 1);
}







};
obj2560_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2550
(function(){
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = obj2560_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj2550";
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
					window.obj2560_droppedInsideTargetActions_3_runningActionsCount = window.obj2560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_3_actionGroup10();
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
				window.obj2560_droppedInsideTargetActions_3_runningActionsCount = window.obj2560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_3_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2560_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2573 
playAudio_2715();
function playAudio_2715() {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = obj2560_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj2573")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2560_droppedInsideTargetActions_3_runningActionsCount = window.obj2560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_3_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2560_droppedInsideTargetActions_3_runningActionsCount = window.obj2560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_3_actionGroup11();
}
	}
}









};
obj2560_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2716();
function switchText_2716() {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = obj2560_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2560_droppedInsideTargetActions_3_runningActionsCount = window.obj2560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_3_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2560_droppedInsideTargetActions_3_runningActionsCount = window.obj2560_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_3_actionGroup12();
}
		}, 1);
	}
}






};
obj2560_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	





















};
obj2560_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2692();
function runjs_2692() {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = obj2560_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2538").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2560_droppedInsideTargetActions_2_runningActionsCount = window.obj2560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj2560_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2693();
function runjs_2693() {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = obj2560_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2538").css("border-color", "#C00000"); $("#obj2538").css("border-width", "2px"); $("#obj2538").css("border-style", "solid"); $("#obj2538").css("border-radius", "10px"); $("#obj2538").css("-webkit-border-radius", "10px"); $("#obj2538").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2560_droppedInsideTargetActions_2_runningActionsCount = window.obj2560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj2560_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2694();
function runjs_2694() {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = obj2560_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2560").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2560_droppedInsideTargetActions_2_runningActionsCount = window.obj2560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj2560_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2536 
hide_2695();
function hide_2695() {
	var selector = "#obj2536";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = obj2560_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2560_droppedInsideTargetActions_2_runningActionsCount = window.obj2560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2695(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2560_droppedInsideTargetActions_2_runningActionsCount = window.obj2560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2560_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2696();
function switchText_2696() {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = obj2560_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2560_droppedInsideTargetActions_2_runningActionsCount = window.obj2560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2560_droppedInsideTargetActions_2_runningActionsCount = window.obj2560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj2560_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2560 
move_2697();
function move_2697() {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = obj2560_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj2560");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 144;
	var moveY = 666;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2560_droppedInsideTargetActions_2_runningActionsCount = window.obj2560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj2560_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2698();
function runjs_2698() {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = obj2560_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2538").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2560_droppedInsideTargetActions_2_runningActionsCount = window.obj2560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj2560_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2699();
function runjs_2699() {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = obj2560_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2538").css("border-color", "#000000"); $("#obj2538").css("border-width", "1px"); $("#obj2538").css("border-style", "solid"); $("#obj2538").css("border-radius", "10px"); $("#obj2538").css("-webkit-border-radius", "10px"); $("#obj2538").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2560_droppedInsideTargetActions_2_runningActionsCount = window.obj2560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj2560_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2700();
function runjs_2700() {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = obj2560_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2560").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj2560_droppedInsideTargetActions_2_runningActionsCount = window.obj2560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_2_actionGroup9();
}
	}, 1);
}







};
obj2560_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2536
(function(){
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = obj2560_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj2536";
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
					window.obj2560_droppedInsideTargetActions_2_runningActionsCount = window.obj2560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_2_actionGroup10();
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
				window.obj2560_droppedInsideTargetActions_2_runningActionsCount = window.obj2560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_2_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2560_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2573 
playAudio_2702();
function playAudio_2702() {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = obj2560_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj2573")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2560_droppedInsideTargetActions_2_runningActionsCount = window.obj2560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_2_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2560_droppedInsideTargetActions_2_runningActionsCount = window.obj2560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_2_actionGroup11();
}
	}
}









};
obj2560_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2703();
function switchText_2703() {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = obj2560_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2560_droppedInsideTargetActions_2_runningActionsCount = window.obj2560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_2_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2560_droppedInsideTargetActions_2_runningActionsCount = window.obj2560_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_2_actionGroup12();
}
		}, 1);
	}
}






};
obj2560_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	





















};
obj2560_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2597();
function runjs_2597() {
	window.obj2560_droppedInsideTargetActions_runningActionsCount = obj2560_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2544").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2560_droppedInsideTargetActions_runningActionsCount = window.obj2560_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj2560_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_2601();
function switchText_2601() {
	window.obj2560_droppedInsideTargetActions_runningActionsCount = obj2560_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2560_droppedInsideTargetActions_runningActionsCount = window.obj2560_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2560_droppedInsideTargetActions_runningActionsCount = window.obj2560_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj2560_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2598();
function runjs_2598() {
	window.obj2560_droppedInsideTargetActions_runningActionsCount = obj2560_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2544").css("border-color", "#058E3F"); $("#obj2544").css("border-width", "2px"); $("#obj2544").css("border-style", "solid"); $("#obj2544").css("border-radius", "10px"); $("#obj2544").css("-webkit-border-radius", "10px"); $("#obj2544").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2560_droppedInsideTargetActions_runningActionsCount = window.obj2560_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj2560_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2546 
hide_2599();
function hide_2599() {
	var selector = "#obj2546";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2560_droppedInsideTargetActions_runningActionsCount = obj2560_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2560_droppedInsideTargetActions_runningActionsCount = window.obj2560_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2599(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2560_droppedInsideTargetActions_runningActionsCount = window.obj2560_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2560_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_2600();
function runjs_2600() {
	window.obj2560_droppedInsideTargetActions_runningActionsCount = obj2560_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2560").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2560_droppedInsideTargetActions_runningActionsCount = window.obj2560_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj2560_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj2574 
playAudio_2602();
function playAudio_2602() {
	window.obj2560_droppedInsideTargetActions_runningActionsCount = obj2560_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj2574")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2560_droppedInsideTargetActions_runningActionsCount = window.obj2560_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2560_droppedInsideTargetActions_runningActionsCount = window.obj2560_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj2560_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90096();
function switchText_90096() {
	window.obj2560_droppedInsideTargetActions_runningActionsCount = obj2560_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2560_droppedInsideTargetActions_runningActionsCount = window.obj2560_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2560_droppedInsideTargetActions_runningActionsCount = window.obj2560_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2560_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2560_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2560_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2560_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj2560_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2560_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2560").trigger("obj2560_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2560) {
				console.warn("de-queueing event obj2560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2560_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj2558_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2558");
//	action: dragDrop
//	target: obj2558 
dragDrop_2586();
function dragDrop_2586() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2558_onTouchDown_runningActionsCount = obj2558_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2558');
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
	  	containerNode = $('#obj2524');
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
    	window.obj2558_onTouchDown_runningActionsCount = window.obj2558_onTouchDown_runningActionsCount - 1;
if (window.obj2558_onTouchDown_runningActionsCount < 0) {
	window.obj2558_onTouchDown_runningActionsCount = 0;
} else if (window.obj2558_onTouchDown_runningActionsCount == 0) {
	obj2558_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2542","#obj2538","#obj2540","#obj2544");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2586 = false;
    	var dropped_id_2586;
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
					dropped_2586 = true;
					dropped_id_2586 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2586) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2558").trigger('SCActionDragDrop2586_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj2558_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2558_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2558 
move_92138();
function move_92138() {
	window.obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_runningActionsCount = obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj2558");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 325;
	var moveY = 665;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_runningActionsCount = window.obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj2558_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2758();
function runjs_2758() {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = obj2558_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2544").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2558_droppedInsideTargetActions_4_runningActionsCount = window.obj2558_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj2558_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2759();
function runjs_2759() {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = obj2558_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2544").css("border-color", "#C00000"); $("#obj2544").css("border-width", "2px"); $("#obj2544").css("border-style", "solid"); $("#obj2544").css("border-radius", "10px"); $("#obj2544").css("-webkit-border-radius", "10px"); $("#obj2544").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2558_droppedInsideTargetActions_4_runningActionsCount = window.obj2558_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj2558_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2760();
function runjs_2760() {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = obj2558_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2558").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2558_droppedInsideTargetActions_4_runningActionsCount = window.obj2558_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj2558_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2546 
hide_2761();
function hide_2761() {
	var selector = "#obj2546";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = obj2558_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2558_droppedInsideTargetActions_4_runningActionsCount = window.obj2558_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2761(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2558_droppedInsideTargetActions_4_runningActionsCount = window.obj2558_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_4_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2558_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2762();
function switchText_2762() {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = obj2558_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2558_droppedInsideTargetActions_4_runningActionsCount = window.obj2558_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2558_droppedInsideTargetActions_4_runningActionsCount = window.obj2558_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj2558_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2558 
move_2763();
function move_2763() {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = obj2558_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj2558");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 325;
	var moveY = 665;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2558_droppedInsideTargetActions_4_runningActionsCount = window.obj2558_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj2558_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2764();
function runjs_2764() {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = obj2558_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2544").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2558_droppedInsideTargetActions_4_runningActionsCount = window.obj2558_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj2558_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2765();
function runjs_2765() {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = obj2558_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2544").css("border-color", "#000000"); $("#obj2544").css("border-width", "1px"); $("#obj2544").css("border-style", "solid"); $("#obj2544").css("border-radius", "10px"); $("#obj2544").css("-webkit-border-radius", "10px"); $("#obj2544").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2558_droppedInsideTargetActions_4_runningActionsCount = window.obj2558_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj2558_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2766();
function runjs_2766() {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = obj2558_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2558").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj2558_droppedInsideTargetActions_4_runningActionsCount = window.obj2558_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_4_actionGroup9();
}
	}, 1);
}







};
obj2558_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2546
(function(){
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = obj2558_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj2546";
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
					window.obj2558_droppedInsideTargetActions_4_runningActionsCount = window.obj2558_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_4_actionGroup10();
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
				window.obj2558_droppedInsideTargetActions_4_runningActionsCount = window.obj2558_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_4_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2558_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2573 
playAudio_2768();
function playAudio_2768() {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = obj2558_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj2573")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2558_droppedInsideTargetActions_4_runningActionsCount = window.obj2558_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_4_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2558_droppedInsideTargetActions_4_runningActionsCount = window.obj2558_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_4_actionGroup11();
}
	}
}









};
obj2558_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2769();
function switchText_2769() {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = obj2558_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2558_droppedInsideTargetActions_4_runningActionsCount = window.obj2558_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_4_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2558_droppedInsideTargetActions_4_runningActionsCount = window.obj2558_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_4_actionGroup12();
}
		}, 1);
	}
}






};
obj2558_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	





















};
obj2558_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2745();
function runjs_2745() {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = obj2558_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2540").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2558_droppedInsideTargetActions_3_runningActionsCount = window.obj2558_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj2558_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2746();
function runjs_2746() {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = obj2558_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2540").css("border-color", "#C00000"); $("#obj2540").css("border-width", "2px"); $("#obj2540").css("border-style", "solid"); $("#obj2540").css("border-radius", "10px"); $("#obj2540").css("-webkit-border-radius", "10px"); $("#obj2540").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2558_droppedInsideTargetActions_3_runningActionsCount = window.obj2558_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj2558_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2747();
function runjs_2747() {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = obj2558_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2558").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2558_droppedInsideTargetActions_3_runningActionsCount = window.obj2558_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj2558_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2550 
hide_2748();
function hide_2748() {
	var selector = "#obj2550";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = obj2558_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2558_droppedInsideTargetActions_3_runningActionsCount = window.obj2558_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2748(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2558_droppedInsideTargetActions_3_runningActionsCount = window.obj2558_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2558_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2749();
function switchText_2749() {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = obj2558_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2558_droppedInsideTargetActions_3_runningActionsCount = window.obj2558_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2558_droppedInsideTargetActions_3_runningActionsCount = window.obj2558_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj2558_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2558 
move_2750();
function move_2750() {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = obj2558_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj2558");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 325;
	var moveY = 665;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2558_droppedInsideTargetActions_3_runningActionsCount = window.obj2558_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj2558_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2751();
function runjs_2751() {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = obj2558_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2540").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2558_droppedInsideTargetActions_3_runningActionsCount = window.obj2558_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj2558_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2752();
function runjs_2752() {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = obj2558_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2540").css("border-color", "#000000"); $("#obj2540").css("border-width", "1px"); $("#obj2540").css("border-style", "solid"); $("#obj2540").css("border-radius", "10px"); $("#obj2540").css("-webkit-border-radius", "10px"); $("#obj2540").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2558_droppedInsideTargetActions_3_runningActionsCount = window.obj2558_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj2558_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2753();
function runjs_2753() {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = obj2558_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2558").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj2558_droppedInsideTargetActions_3_runningActionsCount = window.obj2558_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_3_actionGroup9();
}
	}, 1);
}







};
obj2558_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2550
(function(){
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = obj2558_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj2550";
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
					window.obj2558_droppedInsideTargetActions_3_runningActionsCount = window.obj2558_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_3_actionGroup10();
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
				window.obj2558_droppedInsideTargetActions_3_runningActionsCount = window.obj2558_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_3_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2558_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2573 
playAudio_2755();
function playAudio_2755() {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = obj2558_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj2573")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2558_droppedInsideTargetActions_3_runningActionsCount = window.obj2558_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_3_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2558_droppedInsideTargetActions_3_runningActionsCount = window.obj2558_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_3_actionGroup11();
}
	}
}









};
obj2558_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2756();
function switchText_2756() {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = obj2558_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2558_droppedInsideTargetActions_3_runningActionsCount = window.obj2558_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_3_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2558_droppedInsideTargetActions_3_runningActionsCount = window.obj2558_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_3_actionGroup12();
}
		}, 1);
	}
}






};
obj2558_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	





















};
obj2558_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2732();
function runjs_2732() {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = obj2558_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2538").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2558_droppedInsideTargetActions_2_runningActionsCount = window.obj2558_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj2558_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2733();
function runjs_2733() {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = obj2558_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2538").css("border-color", "#C00000"); $("#obj2538").css("border-width", "2px"); $("#obj2538").css("border-style", "solid"); $("#obj2538").css("border-radius", "10px"); $("#obj2538").css("-webkit-border-radius", "10px"); $("#obj2538").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2558_droppedInsideTargetActions_2_runningActionsCount = window.obj2558_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj2558_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2734();
function runjs_2734() {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = obj2558_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2558").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2558_droppedInsideTargetActions_2_runningActionsCount = window.obj2558_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj2558_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2536 
hide_2735();
function hide_2735() {
	var selector = "#obj2536";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = obj2558_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2558_droppedInsideTargetActions_2_runningActionsCount = window.obj2558_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2735(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2558_droppedInsideTargetActions_2_runningActionsCount = window.obj2558_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2558_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2736();
function switchText_2736() {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = obj2558_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2558_droppedInsideTargetActions_2_runningActionsCount = window.obj2558_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2558_droppedInsideTargetActions_2_runningActionsCount = window.obj2558_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj2558_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2558 
move_2737();
function move_2737() {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = obj2558_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj2558");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 325;
	var moveY = 665;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2558_droppedInsideTargetActions_2_runningActionsCount = window.obj2558_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj2558_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2738();
function runjs_2738() {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = obj2558_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2538").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2558_droppedInsideTargetActions_2_runningActionsCount = window.obj2558_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj2558_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2739();
function runjs_2739() {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = obj2558_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2538").css("border-color", "#000000"); $("#obj2538").css("border-width", "1px"); $("#obj2538").css("border-style", "solid"); $("#obj2538").css("border-radius", "10px"); $("#obj2538").css("-webkit-border-radius", "10px"); $("#obj2538").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2558_droppedInsideTargetActions_2_runningActionsCount = window.obj2558_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj2558_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2740();
function runjs_2740() {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = obj2558_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2558").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj2558_droppedInsideTargetActions_2_runningActionsCount = window.obj2558_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_2_actionGroup9();
}
	}, 1);
}







};
obj2558_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2536
(function(){
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = obj2558_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj2536";
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
					window.obj2558_droppedInsideTargetActions_2_runningActionsCount = window.obj2558_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_2_actionGroup10();
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
				window.obj2558_droppedInsideTargetActions_2_runningActionsCount = window.obj2558_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_2_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2558_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2573 
playAudio_2742();
function playAudio_2742() {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = obj2558_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj2573")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2558_droppedInsideTargetActions_2_runningActionsCount = window.obj2558_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_2_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2558_droppedInsideTargetActions_2_runningActionsCount = window.obj2558_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_2_actionGroup11();
}
	}
}









};
obj2558_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2743();
function switchText_2743() {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = obj2558_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2558_droppedInsideTargetActions_2_runningActionsCount = window.obj2558_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_2_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2558_droppedInsideTargetActions_2_runningActionsCount = window.obj2558_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_2_actionGroup12();
}
		}, 1);
	}
}






};
obj2558_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	





















};
obj2558_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2588();
function runjs_2588() {
	window.obj2558_droppedInsideTargetActions_runningActionsCount = obj2558_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2542").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2558_droppedInsideTargetActions_runningActionsCount = window.obj2558_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj2558_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_2592();
function switchText_2592() {
	window.obj2558_droppedInsideTargetActions_runningActionsCount = obj2558_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2558_droppedInsideTargetActions_runningActionsCount = window.obj2558_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2558_droppedInsideTargetActions_runningActionsCount = window.obj2558_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj2558_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2589();
function runjs_2589() {
	window.obj2558_droppedInsideTargetActions_runningActionsCount = obj2558_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2542").css("border-color", "#058E3F"); $("#obj2542").css("border-width", "2px"); $("#obj2542").css("border-style", "solid"); $("#obj2542").css("border-radius", "10px"); $("#obj2542").css("-webkit-border-radius", "10px"); $("#obj2542").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2558_droppedInsideTargetActions_runningActionsCount = window.obj2558_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj2558_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2548 
hide_2590();
function hide_2590() {
	var selector = "#obj2548";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2558_droppedInsideTargetActions_runningActionsCount = obj2558_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2558_droppedInsideTargetActions_runningActionsCount = window.obj2558_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2590(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2558_droppedInsideTargetActions_runningActionsCount = window.obj2558_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2558_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_2591();
function runjs_2591() {
	window.obj2558_droppedInsideTargetActions_runningActionsCount = obj2558_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2558").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2558_droppedInsideTargetActions_runningActionsCount = window.obj2558_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj2558_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj2574 
playAudio_2593();
function playAudio_2593() {
	window.obj2558_droppedInsideTargetActions_runningActionsCount = obj2558_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj2574")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2558_droppedInsideTargetActions_runningActionsCount = window.obj2558_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2558_droppedInsideTargetActions_runningActionsCount = window.obj2558_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj2558_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90098();
function switchText_90098() {
	window.obj2558_droppedInsideTargetActions_runningActionsCount = obj2558_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2526_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2526_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2526").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2526_content");
			setTimeout(function () {
				window.obj2558_droppedInsideTargetActions_runningActionsCount = window.obj2558_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj2526 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2558_droppedInsideTargetActions_runningActionsCount = window.obj2558_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2558_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2558_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2558_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2558_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj2558_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2558_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2558").trigger("obj2558_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2558) {
				console.warn("de-queueing event obj2558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2558_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj65230_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65230_onTap_activeActionGroupIndex = -1;
		$("#obj65230").trigger("obj65230_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65230) {
				console.warn("de-queueing event obj65230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65230_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65230 
hide_65233();
function hide_65233() {
	var selector = "#obj65230";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65230_onTap_runningActionsCount = obj65230_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65230_onTap_runningActionsCount = window.obj65230_onTap_runningActionsCount - 1;
if (window.obj65230_onTap_runningActionsCount < 0) {
	window.obj65230_onTap_runningActionsCount = 0;
} else if (window.obj65230_onTap_runningActionsCount == 0) {
	obj65230_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65233(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65230_onTap_runningActionsCount = window.obj65230_onTap_runningActionsCount - 1;
if (window.obj65230_onTap_runningActionsCount < 0) {
	window.obj65230_onTap_runningActionsCount = 0;
} else if (window.obj65230_onTap_runningActionsCount == 0) {
	obj65230_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65236 
stopMovie_65232();
function stopMovie_65232() {
	window.obj65230_onTap_runningActionsCount = obj65230_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65236")[0];
	myVideo.pause();
	window.obj65230_onTap_runningActionsCount = window.obj65230_onTap_runningActionsCount - 1;
if (window.obj65230_onTap_runningActionsCount < 0) {
	window.obj65230_onTap_runningActionsCount = 0;
} else if (window.obj65230_onTap_runningActionsCount == 0) {
	obj65230_onTap_actionGroup1();
}
}
















};
obj65230_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65230_onTap_activeActionGroupIndex = -1;
		$("#obj65230").trigger("obj65230_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65230) {
				console.warn("de-queueing event obj65230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65230_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65222
(function(){
	window.obj65230_onTap_runningActionsCount = obj65230_onTap_runningActionsCount + 1;

	var selector = "#obj65222";
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
					window.obj65230_onTap_runningActionsCount = window.obj65230_onTap_runningActionsCount - 1;
if (window.obj65230_onTap_runningActionsCount < 0) {
	window.obj65230_onTap_runningActionsCount = 0;
} else if (window.obj65230_onTap_runningActionsCount == 0) {
	obj65230_onTap_actionGroup2();
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
				window.obj65230_onTap_runningActionsCount = window.obj65230_onTap_runningActionsCount - 1;
if (window.obj65230_onTap_runningActionsCount < 0) {
	window.obj65230_onTap_runningActionsCount = 0;
} else if (window.obj65230_onTap_runningActionsCount == 0) {
	obj65230_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65230_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65230_onTap_activeActionGroupIndex = -1;
		$("#obj65230").trigger("obj65230_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65230) {
				console.warn("de-queueing event obj65230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65230_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65236 
move_65235();
function move_65235() {
	window.obj65230_onTap_runningActionsCount = obj65230_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65236");
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
			window.obj65230_onTap_runningActionsCount = window.obj65230_onTap_runningActionsCount - 1;
if (window.obj65230_onTap_runningActionsCount < 0) {
	window.obj65230_onTap_runningActionsCount = 0;
} else if (window.obj65230_onTap_runningActionsCount == 0) {
	obj65230_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65230_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65230_onTap_activeActionGroupIndex = -1;
		$("#obj65230").trigger("obj65230_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65230) {
				console.warn("de-queueing event obj65230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65230_onTap_activeActionGroupIndex = 3;
	





















};
obj65222_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65222_onTap_activeActionGroupIndex = -1;
		$("#obj65222").trigger("obj65222_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65222) {
				console.warn("de-queueing event obj65222." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65222").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65222_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65222 
hide_65225();
function hide_65225() {
	var selector = "#obj65222";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65222_onTap_runningActionsCount = obj65222_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65222_onTap_runningActionsCount = window.obj65222_onTap_runningActionsCount - 1;
if (window.obj65222_onTap_runningActionsCount < 0) {
	window.obj65222_onTap_runningActionsCount = 0;
} else if (window.obj65222_onTap_runningActionsCount == 0) {
	obj65222_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65225(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65222_onTap_runningActionsCount = window.obj65222_onTap_runningActionsCount - 1;
if (window.obj65222_onTap_runningActionsCount < 0) {
	window.obj65222_onTap_runningActionsCount = 0;
} else if (window.obj65222_onTap_runningActionsCount == 0) {
	obj65222_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65236 
playPauseMovie_65224();
function playPauseMovie_65224() {
	window.obj65222_onTap_runningActionsCount = obj65222_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65236")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65222_onTap_runningActionsCount = window.obj65222_onTap_runningActionsCount - 1;
if (window.obj65222_onTap_runningActionsCount < 0) {
	window.obj65222_onTap_runningActionsCount = 0;
} else if (window.obj65222_onTap_runningActionsCount == 0) {
	obj65222_onTap_actionGroup1();
}
}

















};
obj65222_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65222_onTap_activeActionGroupIndex = -1;
		$("#obj65222").trigger("obj65222_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65222) {
				console.warn("de-queueing event obj65222." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65222").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65222_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65230
(function(){
	window.obj65222_onTap_runningActionsCount = obj65222_onTap_runningActionsCount + 1;

	var selector = "#obj65230";
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
					window.obj65222_onTap_runningActionsCount = window.obj65222_onTap_runningActionsCount - 1;
if (window.obj65222_onTap_runningActionsCount < 0) {
	window.obj65222_onTap_runningActionsCount = 0;
} else if (window.obj65222_onTap_runningActionsCount == 0) {
	obj65222_onTap_actionGroup2();
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
				window.obj65222_onTap_runningActionsCount = window.obj65222_onTap_runningActionsCount - 1;
if (window.obj65222_onTap_runningActionsCount < 0) {
	window.obj65222_onTap_runningActionsCount = 0;
} else if (window.obj65222_onTap_runningActionsCount == 0) {
	obj65222_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65222_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65222_onTap_activeActionGroupIndex = -1;
		$("#obj65222").trigger("obj65222_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65222) {
				console.warn("de-queueing event obj65222." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65222").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65222_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65236 
move_65227();
function move_65227() {
	window.obj65222_onTap_runningActionsCount = obj65222_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65236");
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
			window.obj65222_onTap_runningActionsCount = window.obj65222_onTap_runningActionsCount - 1;
if (window.obj65222_onTap_runningActionsCount < 0) {
	window.obj65222_onTap_runningActionsCount = 0;
} else if (window.obj65222_onTap_runningActionsCount == 0) {
	obj65222_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65222_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65222_onTap_activeActionGroupIndex = -1;
		$("#obj65222").trigger("obj65222_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65222) {
				console.warn("de-queueing event obj65222." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65222").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65222_onTap_activeActionGroupIndex = 3;
	





















};
obj87005_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87005_onTap_activeActionGroupIndex = -1;
		$("#obj87005").trigger("obj87005_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87005) {
				console.warn("de-queueing event obj87005." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87005").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87005_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87010 
stopAudio_87007();
function stopAudio_87007() {
	window.obj87005_onTap_runningActionsCount = obj87005_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87010")[0];
	myAudio.pause();
	window.obj87005_onTap_runningActionsCount = window.obj87005_onTap_runningActionsCount - 1;
if (window.obj87005_onTap_runningActionsCount < 0) {
	window.obj87005_onTap_runningActionsCount = 0;
} else if (window.obj87005_onTap_runningActionsCount == 0) {
	obj87005_onTap_actionGroup1();
}
}








};
obj87005_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87005_onTap_activeActionGroupIndex = -1;
		$("#obj87005").trigger("obj87005_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87005) {
				console.warn("de-queueing event obj87005." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87005").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87005_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87005 
hide_87008();
function hide_87008() {
	var selector = "#obj87005";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87005_onTap_runningActionsCount = obj87005_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87005_onTap_runningActionsCount = window.obj87005_onTap_runningActionsCount - 1;
if (window.obj87005_onTap_runningActionsCount < 0) {
	window.obj87005_onTap_runningActionsCount = 0;
} else if (window.obj87005_onTap_runningActionsCount == 0) {
	obj87005_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87008(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87005_onTap_runningActionsCount = window.obj87005_onTap_runningActionsCount - 1;
if (window.obj87005_onTap_runningActionsCount < 0) {
	window.obj87005_onTap_runningActionsCount = 0;
} else if (window.obj87005_onTap_runningActionsCount == 0) {
	obj87005_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87005_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87005_onTap_activeActionGroupIndex = -1;
		$("#obj87005").trigger("obj87005_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87005) {
				console.warn("de-queueing event obj87005." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87005").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87005_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87000
(function(){
	window.obj87005_onTap_runningActionsCount = obj87005_onTap_runningActionsCount + 1;

	var selector = "#obj87000";
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
					window.obj87005_onTap_runningActionsCount = window.obj87005_onTap_runningActionsCount - 1;
if (window.obj87005_onTap_runningActionsCount < 0) {
	window.obj87005_onTap_runningActionsCount = 0;
} else if (window.obj87005_onTap_runningActionsCount == 0) {
	obj87005_onTap_actionGroup3();
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
				window.obj87005_onTap_runningActionsCount = window.obj87005_onTap_runningActionsCount - 1;
if (window.obj87005_onTap_runningActionsCount < 0) {
	window.obj87005_onTap_runningActionsCount = 0;
} else if (window.obj87005_onTap_runningActionsCount == 0) {
	obj87005_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87005_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87005_onTap_activeActionGroupIndex = -1;
		$("#obj87005").trigger("obj87005_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87005) {
				console.warn("de-queueing event obj87005." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87005").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87005_onTap_activeActionGroupIndex = 3;
	





















};
obj87000_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87000_onTap_activeActionGroupIndex = -1;
		$("#obj87000").trigger("obj87000_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87000) {
				console.warn("de-queueing event obj87000." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87000").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87000_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87000 
hide_87002();
function hide_87002() {
	var selector = "#obj87000";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87000_onTap_runningActionsCount = obj87000_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87000_onTap_runningActionsCount = window.obj87000_onTap_runningActionsCount - 1;
if (window.obj87000_onTap_runningActionsCount < 0) {
	window.obj87000_onTap_runningActionsCount = 0;
} else if (window.obj87000_onTap_runningActionsCount == 0) {
	obj87000_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87002(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87000_onTap_runningActionsCount = window.obj87000_onTap_runningActionsCount - 1;
if (window.obj87000_onTap_runningActionsCount < 0) {
	window.obj87000_onTap_runningActionsCount = 0;
} else if (window.obj87000_onTap_runningActionsCount == 0) {
	obj87000_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87000_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87000_onTap_activeActionGroupIndex = -1;
		$("#obj87000").trigger("obj87000_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87000) {
				console.warn("de-queueing event obj87000." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87000").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87000_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87005
(function(){
	window.obj87000_onTap_runningActionsCount = obj87000_onTap_runningActionsCount + 1;

	var selector = "#obj87005";
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
					window.obj87000_onTap_runningActionsCount = window.obj87000_onTap_runningActionsCount - 1;
if (window.obj87000_onTap_runningActionsCount < 0) {
	window.obj87000_onTap_runningActionsCount = 0;
} else if (window.obj87000_onTap_runningActionsCount == 0) {
	obj87000_onTap_actionGroup2();
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
				window.obj87000_onTap_runningActionsCount = window.obj87000_onTap_runningActionsCount - 1;
if (window.obj87000_onTap_runningActionsCount < 0) {
	window.obj87000_onTap_runningActionsCount = 0;
} else if (window.obj87000_onTap_runningActionsCount == 0) {
	obj87000_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87000_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87000_onTap_activeActionGroupIndex = -1;
		$("#obj87000").trigger("obj87000_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87000) {
				console.warn("de-queueing event obj87000." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87000").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87000_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87010 
playAudio_87004();
function playAudio_87004() {
	window.obj87000_onTap_runningActionsCount = obj87000_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87010")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj87000_onTap_runningActionsCount = window.obj87000_onTap_runningActionsCount - 1;
if (window.obj87000_onTap_runningActionsCount < 0) {
	window.obj87000_onTap_runningActionsCount = 0;
} else if (window.obj87000_onTap_runningActionsCount == 0) {
	obj87000_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87000_onTap_runningActionsCount = window.obj87000_onTap_runningActionsCount - 1;
if (window.obj87000_onTap_runningActionsCount < 0) {
	window.obj87000_onTap_runningActionsCount = 0;
} else if (window.obj87000_onTap_runningActionsCount == 0) {
	obj87000_onTap_actionGroup3();
}
	}
}









};
obj87000_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87000_onTap_activeActionGroupIndex = -1;
		$("#obj87000").trigger("obj87000_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87000) {
				console.warn("de-queueing event obj87000." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87000").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87000_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj2496: Event Touch Down
 *
 */
$("#obj2496").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2496_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2496_onTap is still running");
	return;
}
var obj2496_onTap_runningActionsCount = 0;
var obj2496_onTap_loopCount = 0;
obj2496_onTap_actionGroup0();
});










/*
 *
 *   obj2493: Event Touch Down
 *
 */
$("#obj2493").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2493_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2493_onTap is still running");
	return;
}
var obj2493_onTap_runningActionsCount = 0;
var obj2493_onTap_loopCount = 0;
obj2493_onTap_actionGroup0();
});










/*
 *
 *   obj2499: Event Touch Down
 *
 */
$("#obj2499").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2499_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2499_onTap is still running");
	return;
}
var obj2499_onTap_runningActionsCount = 0;
var obj2499_onTap_loopCount = 0;
obj2499_onTap_actionGroup0();
});





























































































































































































































/*
 *
 *   obj2554: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2554");
	var winTarget = document.getElementById("obj2554");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2554").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2554_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2554_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2554_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2554_onTouchDown is still running");
	return;
}
var obj2554_onTouchDown_runningActionsCount = 0;
var obj2554_onTouchDown_loopCount = 0;
obj2554_onTouchDown_actionGroup0();
});



/*
 *
 *   obj2554: Event SCActionDragDrop2577_droppedOutsideTargetActions
 *
 */
$("#obj2554").bind("SCActionDragDrop2577_droppedOutsideTargetActions", function(event) {
	if (window.obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2554_SCActionDragDrop2577_droppedOutsideTargetActions is still running");
	return;
}
var obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_loopCount = 0;
obj2554_SCActionDragDrop2577_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj2554: Event droppedInsideTargetActions_4
 *
 */
$("#obj2554").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj2554_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2554_droppedInsideTargetActions_4 is still running");
	return;
}
var obj2554_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj2554_droppedInsideTargetActions_4_loopCount = 0;
obj2554_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj2554: Event droppedInsideTargetActions_3
 *
 */
$("#obj2554").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj2554_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2554_droppedInsideTargetActions_3 is still running");
	return;
}
var obj2554_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2554_droppedInsideTargetActions_3_loopCount = 0;
obj2554_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj2554: Event droppedInsideTargetActions_2
 *
 */
$("#obj2554").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj2554_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2554_droppedInsideTargetActions_2 is still running");
	return;
}
var obj2554_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2554_droppedInsideTargetActions_2_loopCount = 0;
obj2554_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj2554: Event droppedInsideTargetActions
 *
 */
$("#obj2554").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2554_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2554_droppedInsideTargetActions is still running");
	return;
}
var obj2554_droppedInsideTargetActions_runningActionsCount = 0;
var obj2554_droppedInsideTargetActions_loopCount = 0;
obj2554_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj2556: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2556");
	var winTarget = document.getElementById("obj2556");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2556").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2556_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2556_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2556_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2556_onTouchDown is still running");
	return;
}
var obj2556_onTouchDown_runningActionsCount = 0;
var obj2556_onTouchDown_loopCount = 0;
obj2556_onTouchDown_actionGroup0();
});



/*
 *
 *   obj2556: Event SCActionDragDrop2563_droppedOutsideTargetActions
 *
 */
$("#obj2556").bind("SCActionDragDrop2563_droppedOutsideTargetActions", function(event) {
	if (window.obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2556_SCActionDragDrop2563_droppedOutsideTargetActions is still running");
	return;
}
var obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_loopCount = 0;
obj2556_SCActionDragDrop2563_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj2556: Event droppedInsideTargetActions_4
 *
 */
$("#obj2556").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj2556_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2556_droppedInsideTargetActions_4 is still running");
	return;
}
var obj2556_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj2556_droppedInsideTargetActions_4_loopCount = 0;
obj2556_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj2556: Event droppedInsideTargetActions_3
 *
 */
$("#obj2556").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj2556_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2556_droppedInsideTargetActions_3 is still running");
	return;
}
var obj2556_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2556_droppedInsideTargetActions_3_loopCount = 0;
obj2556_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj2556: Event droppedInsideTargetActions_2
 *
 */
$("#obj2556").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj2556_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2556_droppedInsideTargetActions_2 is still running");
	return;
}
var obj2556_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2556_droppedInsideTargetActions_2_loopCount = 0;
obj2556_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj2556: Event droppedInsideTargetActions
 *
 */
$("#obj2556").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2556_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2556_droppedInsideTargetActions is still running");
	return;
}
var obj2556_droppedInsideTargetActions_runningActionsCount = 0;
var obj2556_droppedInsideTargetActions_loopCount = 0;
obj2556_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj2560: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2560");
	var winTarget = document.getElementById("obj2560");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2560").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2560_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2560_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2560_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2560_onTouchDown is still running");
	return;
}
var obj2560_onTouchDown_runningActionsCount = 0;
var obj2560_onTouchDown_loopCount = 0;
obj2560_onTouchDown_actionGroup0();
});



/*
 *
 *   obj2560: Event SCActionDragDrop2595_droppedOutsideTargetActions
 *
 */
$("#obj2560").bind("SCActionDragDrop2595_droppedOutsideTargetActions", function(event) {
	if (window.obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2560_SCActionDragDrop2595_droppedOutsideTargetActions is still running");
	return;
}
var obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_loopCount = 0;
obj2560_SCActionDragDrop2595_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj2560: Event droppedInsideTargetActions_4
 *
 */
$("#obj2560").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj2560_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2560_droppedInsideTargetActions_4 is still running");
	return;
}
var obj2560_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj2560_droppedInsideTargetActions_4_loopCount = 0;
obj2560_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj2560: Event droppedInsideTargetActions_3
 *
 */
$("#obj2560").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj2560_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2560_droppedInsideTargetActions_3 is still running");
	return;
}
var obj2560_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2560_droppedInsideTargetActions_3_loopCount = 0;
obj2560_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj2560: Event droppedInsideTargetActions_2
 *
 */
$("#obj2560").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj2560_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2560_droppedInsideTargetActions_2 is still running");
	return;
}
var obj2560_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2560_droppedInsideTargetActions_2_loopCount = 0;
obj2560_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj2560: Event droppedInsideTargetActions
 *
 */
$("#obj2560").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2560_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2560_droppedInsideTargetActions is still running");
	return;
}
var obj2560_droppedInsideTargetActions_runningActionsCount = 0;
var obj2560_droppedInsideTargetActions_loopCount = 0;
obj2560_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj2558: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2558");
	var winTarget = document.getElementById("obj2558");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2558").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2558_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2558_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2558_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2558_onTouchDown is still running");
	return;
}
var obj2558_onTouchDown_runningActionsCount = 0;
var obj2558_onTouchDown_loopCount = 0;
obj2558_onTouchDown_actionGroup0();
});



/*
 *
 *   obj2558: Event SCActionDragDrop2586_droppedOutsideTargetActions
 *
 */
$("#obj2558").bind("SCActionDragDrop2586_droppedOutsideTargetActions", function(event) {
	if (window.obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2558_SCActionDragDrop2586_droppedOutsideTargetActions is still running");
	return;
}
var obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_loopCount = 0;
obj2558_SCActionDragDrop2586_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj2558: Event droppedInsideTargetActions_4
 *
 */
$("#obj2558").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj2558_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2558_droppedInsideTargetActions_4 is still running");
	return;
}
var obj2558_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj2558_droppedInsideTargetActions_4_loopCount = 0;
obj2558_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj2558: Event droppedInsideTargetActions_3
 *
 */
$("#obj2558").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj2558_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2558_droppedInsideTargetActions_3 is still running");
	return;
}
var obj2558_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2558_droppedInsideTargetActions_3_loopCount = 0;
obj2558_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj2558: Event droppedInsideTargetActions_2
 *
 */
$("#obj2558").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj2558_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2558_droppedInsideTargetActions_2 is still running");
	return;
}
var obj2558_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2558_droppedInsideTargetActions_2_loopCount = 0;
obj2558_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj2558: Event droppedInsideTargetActions
 *
 */
$("#obj2558").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2558_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2558_droppedInsideTargetActions is still running");
	return;
}
var obj2558_droppedInsideTargetActions_runningActionsCount = 0;
var obj2558_droppedInsideTargetActions_loopCount = 0;
obj2558_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj65230: Event Touch Down
 *
 */
$("#obj65230").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65230_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65230_onTap is still running");
	return;
}
var obj65230_onTap_runningActionsCount = 0;
var obj65230_onTap_loopCount = 0;
obj65230_onTap_actionGroup0();
});










/*
 *
 *   obj65222: Event Touch Down
 *
 */
$("#obj65222").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65222_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65222_onTap is still running");
	return;
}
var obj65222_onTap_runningActionsCount = 0;
var obj65222_onTap_loopCount = 0;
obj65222_onTap_actionGroup0();
});










/*
 *
 *   obj87005: Event Touch Down
 *
 */
$("#obj87005").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87005_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87005_onTap is still running");
	return;
}
var obj87005_onTap_runningActionsCount = 0;
var obj87005_onTap_loopCount = 0;
obj87005_onTap_actionGroup0();
});










/*
 *
 *   obj87000: Event Touch Down
 *
 */
$("#obj87000").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87000_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87000_onTap is still running");
	return;
}
var obj87000_onTap_runningActionsCount = 0;
var obj87000_onTap_loopCount = 0;
obj87000_onTap_actionGroup0();
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
	
$("#obj2491").trigger('SCEventShow');
$("#obj2496").trigger('SCEventShow');
$("#obj2493").trigger('SCEventShow');
$("#obj2499").trigger('SCEventShow');
$("#obj2516").trigger('SCEventShow');
$("#obj2520").trigger('SCEventShow');
$("#obj2522").trigger('SCEventShow');
$("#obj2518").trigger('SCEventShow');
$("#obj2524").trigger('SCEventShow');
$("#obj2528").trigger('SCEventShow');
$("#obj2530").trigger('SCEventShow');
$("#obj2532").trigger('SCEventShow');
$("#obj2534").trigger('SCEventShow');
$("#obj2538").trigger('SCEventShow');
$("#obj2540").trigger('SCEventShow');
$("#obj2542").trigger('SCEventShow');
$("#obj2544").trigger('SCEventShow');
$("#obj2536").trigger('SCEventShow');
$("#obj2550").trigger('SCEventShow');
$("#obj2548").trigger('SCEventShow');
$("#obj2546").trigger('SCEventShow');
$("#obj2552").trigger('SCEventShow');
$("#obj2526").trigger('SCEventShow');
$("#obj2573").trigger('SCEventShow');
$("#obj2574").trigger('SCEventShow');
$("#obj2554").trigger('SCEventShow');
$("#obj2556").trigger('SCEventShow');
$("#obj2560").trigger('SCEventShow');
$("#obj2558").trigger('SCEventShow');
$("#obj65230").trigger('SCEventShow');
$("#obj65222").trigger('SCEventShow');
$("#obj87005").trigger('SCEventShow');
$("#obj87000").trigger('SCEventShow');
$("#obj87010").trigger('SCEventShow');
$("#obj94663").trigger('SCEventShow');
$("#obj65236").trigger('SCEventShow');
	
});