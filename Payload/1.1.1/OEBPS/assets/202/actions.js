pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 55461;
pubcoder.page.title = pubcoder.page.title || "202";
pubcoder.page.number = pubcoder.page.number || 202;
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
var obj55719_onTap_activeActionGroupIndex = -1;
var obj55719_onTap_runningActionsCount = 0;
var obj55719_onTap_loopCount = 0;
var obj55716_onTap_activeActionGroupIndex = -1;
var obj55716_onTap_runningActionsCount = 0;
var obj55716_onTap_loopCount = 0;
var obj55712_onTap_activeActionGroupIndex = -1;
var obj55712_onTap_runningActionsCount = 0;
var obj55712_onTap_loopCount = 0;
var obj55621_onDrag_activeActionGroupIndex = -1;
var obj55621_onDrag_runningActionsCount = 0;
var obj55621_onDrag_loopCount = 0;
var obj55621_onTouchDown_activeActionGroupIndex = -1;
var obj55621_onTouchDown_runningActionsCount = 0;
var obj55621_onTouchDown_loopCount = 0;
var obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_loopCount = 0;
var obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj55621_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj55621_droppedInsideTargetActions_4_loopCount = 0;
var obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj55621_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55621_droppedInsideTargetActions_3_loopCount = 0;
var obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj55621_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55621_droppedInsideTargetActions_2_loopCount = 0;
var obj55621_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj55621_droppedInsideTargetActions_runningActionsCount = 0;
var obj55621_droppedInsideTargetActions_loopCount = 0;
var obj55568_onDrag_activeActionGroupIndex = -1;
var obj55568_onDrag_runningActionsCount = 0;
var obj55568_onDrag_loopCount = 0;
var obj55568_onTouchDown_activeActionGroupIndex = -1;
var obj55568_onTouchDown_runningActionsCount = 0;
var obj55568_onTouchDown_loopCount = 0;
var obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_loopCount = 0;
var obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj55568_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj55568_droppedInsideTargetActions_4_loopCount = 0;
var obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj55568_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55568_droppedInsideTargetActions_3_loopCount = 0;
var obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj55568_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55568_droppedInsideTargetActions_2_loopCount = 0;
var obj55568_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj55568_droppedInsideTargetActions_runningActionsCount = 0;
var obj55568_droppedInsideTargetActions_loopCount = 0;
var obj55515_onDrag_activeActionGroupIndex = -1;
var obj55515_onDrag_runningActionsCount = 0;
var obj55515_onDrag_loopCount = 0;
var obj55515_onTouchDown_activeActionGroupIndex = -1;
var obj55515_onTouchDown_runningActionsCount = 0;
var obj55515_onTouchDown_loopCount = 0;
var obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_loopCount = 0;
var obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj55515_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj55515_droppedInsideTargetActions_4_loopCount = 0;
var obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj55515_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55515_droppedInsideTargetActions_3_loopCount = 0;
var obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj55515_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55515_droppedInsideTargetActions_2_loopCount = 0;
var obj55515_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj55515_droppedInsideTargetActions_runningActionsCount = 0;
var obj55515_droppedInsideTargetActions_loopCount = 0;
var obj55462_onDrag_activeActionGroupIndex = -1;
var obj55462_onDrag_runningActionsCount = 0;
var obj55462_onDrag_loopCount = 0;
var obj55462_onTouchDown_activeActionGroupIndex = -1;
var obj55462_onTouchDown_runningActionsCount = 0;
var obj55462_onTouchDown_loopCount = 0;
var obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_loopCount = 0;
var obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj55462_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj55462_droppedInsideTargetActions_4_loopCount = 0;
var obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj55462_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55462_droppedInsideTargetActions_3_loopCount = 0;
var obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj55462_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55462_droppedInsideTargetActions_2_loopCount = 0;
var obj55462_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj55462_droppedInsideTargetActions_runningActionsCount = 0;
var obj55462_droppedInsideTargetActions_loopCount = 0;
var obj68270_onTap_activeActionGroupIndex = -1;
var obj68270_onTap_runningActionsCount = 0;
var obj68270_onTap_loopCount = 0;
var obj68262_onTap_activeActionGroupIndex = -1;
var obj68262_onTap_runningActionsCount = 0;
var obj68262_onTap_loopCount = 0;
var obj89305_onTap_activeActionGroupIndex = -1;
var obj89305_onTap_runningActionsCount = 0;
var obj89305_onTap_loopCount = 0;
var obj89300_onTap_activeActionGroupIndex = -1;
var obj89300_onTap_runningActionsCount = 0;
var obj89300_onTap_loopCount = 0;
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
		
obj55719_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55719_onTap_activeActionGroupIndex = -1;
		$("#obj55719").trigger("obj55719_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55719) {
				console.warn("de-queueing event obj55719." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55719").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55719_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_55721();
function goToPage_55721() {
	window.obj55719_onTap_runningActionsCount = obj55719_onTap_runningActionsCount + 1;
	$("#anchor1189")[0].click();
	window.obj55719_onTap_runningActionsCount = window.obj55719_onTap_runningActionsCount - 1;
if (window.obj55719_onTap_runningActionsCount < 0) {
	window.obj55719_onTap_runningActionsCount = 0;
} else if (window.obj55719_onTap_runningActionsCount == 0) {
	obj55719_onTap_actionGroup1();
}
}





















};
obj55719_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55719_onTap_activeActionGroupIndex = -1;
		$("#obj55719").trigger("obj55719_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55719) {
				console.warn("de-queueing event obj55719." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55719").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55719_onTap_activeActionGroupIndex = 1;
	





















};
obj55716_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55716_onTap_activeActionGroupIndex = -1;
		$("#obj55716").trigger("obj55716_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55716) {
				console.warn("de-queueing event obj55716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55716_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_55718();
function goToPage_55718() {
	window.obj55716_onTap_runningActionsCount = obj55716_onTap_runningActionsCount + 1;
	$("#anchor1190")[0].click();
	window.obj55716_onTap_runningActionsCount = window.obj55716_onTap_runningActionsCount - 1;
if (window.obj55716_onTap_runningActionsCount < 0) {
	window.obj55716_onTap_runningActionsCount = 0;
} else if (window.obj55716_onTap_runningActionsCount == 0) {
	obj55716_onTap_actionGroup1();
}
}





















};
obj55716_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55716_onTap_activeActionGroupIndex = -1;
		$("#obj55716").trigger("obj55716_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55716) {
				console.warn("de-queueing event obj55716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55716_onTap_activeActionGroupIndex = 1;
	





















};
obj55712_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55712_onTap_activeActionGroupIndex = -1;
		$("#obj55712").trigger("obj55712_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55712) {
				console.warn("de-queueing event obj55712." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55712").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55712_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_55714();
function goToPage_55714() {
	window.obj55712_onTap_runningActionsCount = obj55712_onTap_runningActionsCount + 1;
	$("#anchor1191")[0].click();
	window.obj55712_onTap_runningActionsCount = window.obj55712_onTap_runningActionsCount - 1;
if (window.obj55712_onTap_runningActionsCount < 0) {
	window.obj55712_onTap_runningActionsCount = 0;
} else if (window.obj55712_onTap_runningActionsCount == 0) {
	obj55712_onTap_actionGroup1();
}
}





















};
obj55712_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55712_onTap_activeActionGroupIndex = -1;
		$("#obj55712").trigger("obj55712_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55712) {
				console.warn("de-queueing event obj55712." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55712").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55712_onTap_activeActionGroupIndex = 1;
	





















};
obj55621_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj55621");
//	action: dragDrop
//	target: obj55621 
dragDrop_55624();
function dragDrop_55624() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj55621_onTouchDown_runningActionsCount = obj55621_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj55621');
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
	  	containerNode = $('#obj55702');
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
    	window.obj55621_onTouchDown_runningActionsCount = window.obj55621_onTouchDown_runningActionsCount - 1;
if (window.obj55621_onTouchDown_runningActionsCount < 0) {
	window.obj55621_onTouchDown_runningActionsCount = 0;
} else if (window.obj55621_onTouchDown_runningActionsCount == 0) {
	obj55621_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj55688","#obj55692","#obj55690","#obj55676");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_55624 = false;
    	var dropped_id_55624;
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
					dropped_55624 = true;
					dropped_id_55624 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_55624) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj55621").trigger('SCActionDragDrop55624_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj55621_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55621_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj55621 
move_92837();
function move_92837() {
	window.obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_runningActionsCount = obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj55621");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 339;
	var moveY = 557;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_runningActionsCount = window.obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj55621_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55661();
function runjs_55661() {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = obj55621_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55676").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_4_runningActionsCount = window.obj55621_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55662();
function runjs_55662() {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = obj55621_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55676").css("border-color", "#C00000"); $("#obj55676").css("border-width", "2px"); $("#obj55676").css("border-style", "solid"); $("#obj55676").css("border-radius", "10px"); $("#obj55676").css("-webkit-border-radius", "10px"); $("#obj55676").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_4_runningActionsCount = window.obj55621_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55674 
hide_55663();
function hide_55663() {
	var selector = "#obj55674";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = obj55621_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55621_droppedInsideTargetActions_4_runningActionsCount = window.obj55621_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55663(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55621_droppedInsideTargetActions_4_runningActionsCount = window.obj55621_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55621_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55664();
function runjs_55664() {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = obj55621_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55621").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_4_runningActionsCount = window.obj55621_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55665();
function switchText_55665() {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = obj55621_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55621_droppedInsideTargetActions_4_runningActionsCount = window.obj55621_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55621_droppedInsideTargetActions_4_runningActionsCount = window.obj55621_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj55621_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55621 
move_55666();
function move_55666() {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = obj55621_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj55621");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 339;
	var moveY = 557;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55621_droppedInsideTargetActions_4_runningActionsCount = window.obj55621_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj55621_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55667();
function runjs_55667() {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = obj55621_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55676").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_4_runningActionsCount = window.obj55621_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55668();
function runjs_55668() {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = obj55621_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55676").css("border-color", "#000000"); $("#obj55676").css("border-width", "1px"); $("#obj55676").css("border-style", "solid"); $("#obj55676").css("border-radius", "10px"); $("#obj55676").css("-webkit-border-radius", "10px"); $("#obj55676").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_4_runningActionsCount = window.obj55621_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj55674
(function(){
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = obj55621_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj55674";
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
					window.obj55621_droppedInsideTargetActions_4_runningActionsCount = window.obj55621_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj55621_droppedInsideTargetActions_4_runningActionsCount = window.obj55621_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55621_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55670();
function runjs_55670() {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = obj55621_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55621").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_4_runningActionsCount = window.obj55621_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55671();
function runjs_55671() {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = obj55621_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55621").css("border-color", "rgba(0,0,0,0)"); $("#obj55621").css("border-width", "0px"); $("#obj55621").css("border-style", "solid"); $("#obj55621").css("border-radius", "10px"); $("#obj55621").css("-webkit-border-radius", "10px"); $("#obj55621").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_4_runningActionsCount = window.obj55621_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55738 
playAudio_55672();
function playAudio_55672() {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = obj55621_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj55738")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj55621_droppedInsideTargetActions_4_runningActionsCount = window.obj55621_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55621_droppedInsideTargetActions_4_runningActionsCount = window.obj55621_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj55621_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55673();
function switchText_55673() {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = obj55621_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55621_droppedInsideTargetActions_4_runningActionsCount = window.obj55621_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55621_droppedInsideTargetActions_4_runningActionsCount = window.obj55621_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj55621_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj55621_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55647();
function runjs_55647() {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = obj55621_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55690").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_3_runningActionsCount = window.obj55621_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55648();
function runjs_55648() {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = obj55621_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55690").css("border-color", "#C00000"); $("#obj55690").css("border-width", "2px"); $("#obj55690").css("border-style", "solid"); $("#obj55690").css("border-radius", "10px"); $("#obj55690").css("-webkit-border-radius", "10px"); $("#obj55690").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_3_runningActionsCount = window.obj55621_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55684 
hide_55649();
function hide_55649() {
	var selector = "#obj55684";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = obj55621_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55621_droppedInsideTargetActions_3_runningActionsCount = window.obj55621_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55649(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55621_droppedInsideTargetActions_3_runningActionsCount = window.obj55621_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55621_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55650();
function runjs_55650() {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = obj55621_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55621").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_3_runningActionsCount = window.obj55621_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55651();
function switchText_55651() {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = obj55621_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55621_droppedInsideTargetActions_3_runningActionsCount = window.obj55621_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55621_droppedInsideTargetActions_3_runningActionsCount = window.obj55621_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj55621_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55621 
move_55652();
function move_55652() {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = obj55621_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj55621");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 339;
	var moveY = 557;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55621_droppedInsideTargetActions_3_runningActionsCount = window.obj55621_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj55621_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55653();
function runjs_55653() {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = obj55621_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55690").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_3_runningActionsCount = window.obj55621_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55654();
function runjs_55654() {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = obj55621_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55690").css("border-color", "#000000"); $("#obj55690").css("border-width", "1px"); $("#obj55690").css("border-style", "solid"); $("#obj55690").css("border-radius", "10px"); $("#obj55690").css("-webkit-border-radius", "10px"); $("#obj55690").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_3_runningActionsCount = window.obj55621_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj55684
(function(){
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = obj55621_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj55684";
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
					window.obj55621_droppedInsideTargetActions_3_runningActionsCount = window.obj55621_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj55621_droppedInsideTargetActions_3_runningActionsCount = window.obj55621_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55621_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55656();
function runjs_55656() {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = obj55621_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55621").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_3_runningActionsCount = window.obj55621_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55657();
function runjs_55657() {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = obj55621_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55621").css("border-color", "rgba(0,0,0,0)"); $("#obj55621").css("border-width", "0px"); $("#obj55621").css("border-style", "solid"); $("#obj55621").css("border-radius", "10px"); $("#obj55621").css("-webkit-border-radius", "10px"); $("#obj55621").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_3_runningActionsCount = window.obj55621_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55738 
playAudio_55658();
function playAudio_55658() {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = obj55621_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj55738")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj55621_droppedInsideTargetActions_3_runningActionsCount = window.obj55621_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55621_droppedInsideTargetActions_3_runningActionsCount = window.obj55621_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj55621_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55659();
function switchText_55659() {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = obj55621_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55621_droppedInsideTargetActions_3_runningActionsCount = window.obj55621_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55621_droppedInsideTargetActions_3_runningActionsCount = window.obj55621_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj55621_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj55621_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55633();
function runjs_55633() {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = obj55621_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55692").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_2_runningActionsCount = window.obj55621_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55634();
function runjs_55634() {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = obj55621_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55692").css("border-color", "#C00000"); $("#obj55692").css("border-width", "2px"); $("#obj55692").css("border-style", "solid"); $("#obj55692").css("border-radius", "10px"); $("#obj55692").css("-webkit-border-radius", "10px"); $("#obj55692").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_2_runningActionsCount = window.obj55621_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55686 
hide_55635();
function hide_55635() {
	var selector = "#obj55686";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = obj55621_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55621_droppedInsideTargetActions_2_runningActionsCount = window.obj55621_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55635(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55621_droppedInsideTargetActions_2_runningActionsCount = window.obj55621_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55621_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55636();
function runjs_55636() {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = obj55621_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55621").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_2_runningActionsCount = window.obj55621_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55637();
function switchText_55637() {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = obj55621_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55621_droppedInsideTargetActions_2_runningActionsCount = window.obj55621_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55621_droppedInsideTargetActions_2_runningActionsCount = window.obj55621_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj55621_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55621 
move_55638();
function move_55638() {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = obj55621_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj55621");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 339;
	var moveY = 557;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55621_droppedInsideTargetActions_2_runningActionsCount = window.obj55621_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj55621_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55639();
function runjs_55639() {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = obj55621_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55692").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_2_runningActionsCount = window.obj55621_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55640();
function runjs_55640() {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = obj55621_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55692").css("border-color", "#000000"); $("#obj55692").css("border-width", "1px"); $("#obj55692").css("border-style", "solid"); $("#obj55692").css("border-radius", "10px"); $("#obj55692").css("-webkit-border-radius", "10px"); $("#obj55692").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_2_runningActionsCount = window.obj55621_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj55686
(function(){
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = obj55621_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj55686";
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
					window.obj55621_droppedInsideTargetActions_2_runningActionsCount = window.obj55621_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj55621_droppedInsideTargetActions_2_runningActionsCount = window.obj55621_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55621_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55642();
function runjs_55642() {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = obj55621_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55621").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_2_runningActionsCount = window.obj55621_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55643();
function runjs_55643() {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = obj55621_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55621").css("border-color", "rgba(0,0,0,0)"); $("#obj55621").css("border-width", "0px"); $("#obj55621").css("border-style", "solid"); $("#obj55621").css("border-radius", "10px"); $("#obj55621").css("-webkit-border-radius", "10px"); $("#obj55621").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_2_runningActionsCount = window.obj55621_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55738 
playAudio_55644();
function playAudio_55644() {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = obj55621_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj55738")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj55621_droppedInsideTargetActions_2_runningActionsCount = window.obj55621_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55621_droppedInsideTargetActions_2_runningActionsCount = window.obj55621_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj55621_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55645();
function switchText_55645() {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = obj55621_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55621_droppedInsideTargetActions_2_runningActionsCount = window.obj55621_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55621_droppedInsideTargetActions_2_runningActionsCount = window.obj55621_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj55621_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj55621_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55626();
function runjs_55626() {
	window.obj55621_droppedInsideTargetActions_runningActionsCount = obj55621_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55688").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_runningActionsCount = window.obj55621_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55627();
function runjs_55627() {
	window.obj55621_droppedInsideTargetActions_runningActionsCount = obj55621_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55688").css("border-color", "#058E3F"); $("#obj55688").css("border-width", "2px"); $("#obj55688").css("border-style", "solid"); $("#obj55688").css("border-radius", "10px"); $("#obj55688").css("-webkit-border-radius", "10px"); $("#obj55688").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_runningActionsCount = window.obj55621_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55682 
hide_55628();
function hide_55628() {
	var selector = "#obj55682";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55621_droppedInsideTargetActions_runningActionsCount = obj55621_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55621_droppedInsideTargetActions_runningActionsCount = window.obj55621_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55628(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55621_droppedInsideTargetActions_runningActionsCount = window.obj55621_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55621_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55629();
function runjs_55629() {
	window.obj55621_droppedInsideTargetActions_runningActionsCount = obj55621_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55621").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55621_droppedInsideTargetActions_runningActionsCount = window.obj55621_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj55621_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55630();
function switchText_55630() {
	window.obj55621_droppedInsideTargetActions_runningActionsCount = obj55621_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55621_droppedInsideTargetActions_runningActionsCount = window.obj55621_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55621_droppedInsideTargetActions_runningActionsCount = window.obj55621_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj55621_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj55737 
playAudio_55631();
function playAudio_55631() {
	window.obj55621_droppedInsideTargetActions_runningActionsCount = obj55621_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj55737")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj55621_droppedInsideTargetActions_runningActionsCount = window.obj55621_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55621_droppedInsideTargetActions_runningActionsCount = window.obj55621_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55621_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55621_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55621_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55621_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj55621_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55621_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55621").trigger("obj55621_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55621) {
				console.warn("de-queueing event obj55621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55621_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj55568_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj55568");
//	action: dragDrop
//	target: obj55568 
dragDrop_55571();
function dragDrop_55571() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj55568_onTouchDown_runningActionsCount = obj55568_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj55568');
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
	  	containerNode = $('#obj55702');
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
    	window.obj55568_onTouchDown_runningActionsCount = window.obj55568_onTouchDown_runningActionsCount - 1;
if (window.obj55568_onTouchDown_runningActionsCount < 0) {
	window.obj55568_onTouchDown_runningActionsCount = 0;
} else if (window.obj55568_onTouchDown_runningActionsCount == 0) {
	obj55568_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj55690","#obj55692","#obj55688","#obj55676");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_55571 = false;
    	var dropped_id_55571;
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
					dropped_55571 = true;
					dropped_id_55571 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_55571) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj55568").trigger('SCActionDragDrop55571_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj55568_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55568_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj55568 
move_92835();
function move_92835() {
	window.obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_runningActionsCount = obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj55568");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 78;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_runningActionsCount = window.obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj55568_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55608();
function runjs_55608() {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = obj55568_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55676").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_4_runningActionsCount = window.obj55568_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55609();
function runjs_55609() {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = obj55568_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55676").css("border-color", "#C00000"); $("#obj55676").css("border-width", "2px"); $("#obj55676").css("border-style", "solid"); $("#obj55676").css("border-radius", "10px"); $("#obj55676").css("-webkit-border-radius", "10px"); $("#obj55676").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_4_runningActionsCount = window.obj55568_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55674 
hide_55610();
function hide_55610() {
	var selector = "#obj55674";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = obj55568_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55568_droppedInsideTargetActions_4_runningActionsCount = window.obj55568_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55610(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55568_droppedInsideTargetActions_4_runningActionsCount = window.obj55568_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55568_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55611();
function runjs_55611() {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = obj55568_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55568").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_4_runningActionsCount = window.obj55568_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55612();
function switchText_55612() {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = obj55568_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55568_droppedInsideTargetActions_4_runningActionsCount = window.obj55568_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55568_droppedInsideTargetActions_4_runningActionsCount = window.obj55568_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj55568_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55568 
move_55613();
function move_55613() {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = obj55568_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj55568");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 78;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55568_droppedInsideTargetActions_4_runningActionsCount = window.obj55568_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj55568_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55614();
function runjs_55614() {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = obj55568_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55676").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_4_runningActionsCount = window.obj55568_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55615();
function runjs_55615() {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = obj55568_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55676").css("border-color", "#000000"); $("#obj55676").css("border-width", "1px"); $("#obj55676").css("border-style", "solid"); $("#obj55676").css("border-radius", "10px"); $("#obj55676").css("-webkit-border-radius", "10px"); $("#obj55676").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_4_runningActionsCount = window.obj55568_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj55674
(function(){
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = obj55568_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj55674";
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
					window.obj55568_droppedInsideTargetActions_4_runningActionsCount = window.obj55568_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj55568_droppedInsideTargetActions_4_runningActionsCount = window.obj55568_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55568_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55617();
function runjs_55617() {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = obj55568_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55568").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_4_runningActionsCount = window.obj55568_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55618();
function runjs_55618() {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = obj55568_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55568").css("border-color", "rgba(0,0,0,0)"); $("#obj55568").css("border-width", "0px"); $("#obj55568").css("border-style", "solid"); $("#obj55568").css("border-radius", "10px"); $("#obj55568").css("-webkit-border-radius", "10px"); $("#obj55568").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_4_runningActionsCount = window.obj55568_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55738 
playAudio_55619();
function playAudio_55619() {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = obj55568_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj55738")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj55568_droppedInsideTargetActions_4_runningActionsCount = window.obj55568_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55568_droppedInsideTargetActions_4_runningActionsCount = window.obj55568_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj55568_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55620();
function switchText_55620() {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = obj55568_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55568_droppedInsideTargetActions_4_runningActionsCount = window.obj55568_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55568_droppedInsideTargetActions_4_runningActionsCount = window.obj55568_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj55568_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj55568_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55594();
function runjs_55594() {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = obj55568_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55688").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_3_runningActionsCount = window.obj55568_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55595();
function runjs_55595() {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = obj55568_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55688").css("border-color", "#C00000"); $("#obj55688").css("border-width", "2px"); $("#obj55688").css("border-style", "solid"); $("#obj55688").css("border-radius", "10px"); $("#obj55688").css("-webkit-border-radius", "10px"); $("#obj55688").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_3_runningActionsCount = window.obj55568_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55682 
hide_55596();
function hide_55596() {
	var selector = "#obj55682";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = obj55568_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55568_droppedInsideTargetActions_3_runningActionsCount = window.obj55568_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55596(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55568_droppedInsideTargetActions_3_runningActionsCount = window.obj55568_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55568_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55597();
function runjs_55597() {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = obj55568_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55568").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_3_runningActionsCount = window.obj55568_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55598();
function switchText_55598() {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = obj55568_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55568_droppedInsideTargetActions_3_runningActionsCount = window.obj55568_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55568_droppedInsideTargetActions_3_runningActionsCount = window.obj55568_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj55568_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55568 
move_55599();
function move_55599() {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = obj55568_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj55568");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 78;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55568_droppedInsideTargetActions_3_runningActionsCount = window.obj55568_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj55568_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55600();
function runjs_55600() {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = obj55568_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55688").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_3_runningActionsCount = window.obj55568_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55601();
function runjs_55601() {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = obj55568_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55688").css("border-color", "#000000"); $("#obj55688").css("border-width", "1px"); $("#obj55688").css("border-style", "solid"); $("#obj55688").css("border-radius", "10px"); $("#obj55688").css("-webkit-border-radius", "10px"); $("#obj55688").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_3_runningActionsCount = window.obj55568_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj55682
(function(){
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = obj55568_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj55682";
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
					window.obj55568_droppedInsideTargetActions_3_runningActionsCount = window.obj55568_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj55568_droppedInsideTargetActions_3_runningActionsCount = window.obj55568_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55568_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55603();
function runjs_55603() {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = obj55568_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55568").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_3_runningActionsCount = window.obj55568_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55604();
function runjs_55604() {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = obj55568_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55568").css("border-color", "rgba(0,0,0,0)"); $("#obj55568").css("border-width", "0px"); $("#obj55568").css("border-style", "solid"); $("#obj55568").css("border-radius", "10px"); $("#obj55568").css("-webkit-border-radius", "10px"); $("#obj55568").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_3_runningActionsCount = window.obj55568_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55738 
playAudio_55605();
function playAudio_55605() {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = obj55568_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj55738")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj55568_droppedInsideTargetActions_3_runningActionsCount = window.obj55568_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55568_droppedInsideTargetActions_3_runningActionsCount = window.obj55568_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj55568_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55606();
function switchText_55606() {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = obj55568_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55568_droppedInsideTargetActions_3_runningActionsCount = window.obj55568_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55568_droppedInsideTargetActions_3_runningActionsCount = window.obj55568_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj55568_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj55568_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55580();
function runjs_55580() {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = obj55568_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55692").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_2_runningActionsCount = window.obj55568_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55581();
function runjs_55581() {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = obj55568_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55692").css("border-color", "#C00000"); $("#obj55692").css("border-width", "2px"); $("#obj55692").css("border-style", "solid"); $("#obj55692").css("border-radius", "10px"); $("#obj55692").css("-webkit-border-radius", "10px"); $("#obj55692").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_2_runningActionsCount = window.obj55568_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55686 
hide_55582();
function hide_55582() {
	var selector = "#obj55686";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = obj55568_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55568_droppedInsideTargetActions_2_runningActionsCount = window.obj55568_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55582(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55568_droppedInsideTargetActions_2_runningActionsCount = window.obj55568_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55568_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55583();
function runjs_55583() {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = obj55568_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55568").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_2_runningActionsCount = window.obj55568_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55584();
function switchText_55584() {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = obj55568_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55568_droppedInsideTargetActions_2_runningActionsCount = window.obj55568_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55568_droppedInsideTargetActions_2_runningActionsCount = window.obj55568_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj55568_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55568 
move_55585();
function move_55585() {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = obj55568_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj55568");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 78;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55568_droppedInsideTargetActions_2_runningActionsCount = window.obj55568_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj55568_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55586();
function runjs_55586() {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = obj55568_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55692").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_2_runningActionsCount = window.obj55568_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55587();
function runjs_55587() {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = obj55568_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55692").css("border-color", "#000000"); $("#obj55692").css("border-width", "1px"); $("#obj55692").css("border-style", "solid"); $("#obj55692").css("border-radius", "10px"); $("#obj55692").css("-webkit-border-radius", "10px"); $("#obj55692").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_2_runningActionsCount = window.obj55568_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj55686
(function(){
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = obj55568_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj55686";
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
					window.obj55568_droppedInsideTargetActions_2_runningActionsCount = window.obj55568_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj55568_droppedInsideTargetActions_2_runningActionsCount = window.obj55568_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55568_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55589();
function runjs_55589() {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = obj55568_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55568").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_2_runningActionsCount = window.obj55568_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55590();
function runjs_55590() {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = obj55568_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55568").css("border-color", "rgba(0,0,0,0)"); $("#obj55568").css("border-width", "0px"); $("#obj55568").css("border-style", "solid"); $("#obj55568").css("border-radius", "10px"); $("#obj55568").css("-webkit-border-radius", "10px"); $("#obj55568").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_2_runningActionsCount = window.obj55568_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55738 
playAudio_55591();
function playAudio_55591() {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = obj55568_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj55738")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj55568_droppedInsideTargetActions_2_runningActionsCount = window.obj55568_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55568_droppedInsideTargetActions_2_runningActionsCount = window.obj55568_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj55568_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55592();
function switchText_55592() {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = obj55568_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55568_droppedInsideTargetActions_2_runningActionsCount = window.obj55568_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55568_droppedInsideTargetActions_2_runningActionsCount = window.obj55568_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj55568_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj55568_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55573();
function runjs_55573() {
	window.obj55568_droppedInsideTargetActions_runningActionsCount = obj55568_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55690").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_runningActionsCount = window.obj55568_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55574();
function runjs_55574() {
	window.obj55568_droppedInsideTargetActions_runningActionsCount = obj55568_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55690").css("border-color", "#058E3F"); $("#obj55690").css("border-width", "2px"); $("#obj55690").css("border-style", "solid"); $("#obj55690").css("border-radius", "10px"); $("#obj55690").css("-webkit-border-radius", "10px"); $("#obj55690").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_runningActionsCount = window.obj55568_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55684 
hide_55575();
function hide_55575() {
	var selector = "#obj55684";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55568_droppedInsideTargetActions_runningActionsCount = obj55568_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55568_droppedInsideTargetActions_runningActionsCount = window.obj55568_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55575(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55568_droppedInsideTargetActions_runningActionsCount = window.obj55568_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55568_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55576();
function runjs_55576() {
	window.obj55568_droppedInsideTargetActions_runningActionsCount = obj55568_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55568").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55568_droppedInsideTargetActions_runningActionsCount = window.obj55568_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj55568_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55577();
function switchText_55577() {
	window.obj55568_droppedInsideTargetActions_runningActionsCount = obj55568_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55568_droppedInsideTargetActions_runningActionsCount = window.obj55568_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55568_droppedInsideTargetActions_runningActionsCount = window.obj55568_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj55568_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj55737 
playAudio_55578();
function playAudio_55578() {
	window.obj55568_droppedInsideTargetActions_runningActionsCount = obj55568_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj55737")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj55568_droppedInsideTargetActions_runningActionsCount = window.obj55568_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55568_droppedInsideTargetActions_runningActionsCount = window.obj55568_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55568_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55568_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55568_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55568_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj55568_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55568_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55568").trigger("obj55568_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55568) {
				console.warn("de-queueing event obj55568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55568_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj55515_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj55515");
//	action: dragDrop
//	target: obj55515 
dragDrop_55518();
function dragDrop_55518() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj55515_onTouchDown_runningActionsCount = obj55515_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj55515');
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
	  	containerNode = $('#obj55702');
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
    	window.obj55515_onTouchDown_runningActionsCount = window.obj55515_onTouchDown_runningActionsCount - 1;
if (window.obj55515_onTouchDown_runningActionsCount < 0) {
	window.obj55515_onTouchDown_runningActionsCount = 0;
} else if (window.obj55515_onTouchDown_runningActionsCount == 0) {
	obj55515_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj55676","#obj55692","#obj55688","#obj55690");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_55518 = false;
    	var dropped_id_55518;
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
					dropped_55518 = true;
					dropped_id_55518 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_55518) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj55515").trigger('SCActionDragDrop55518_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj55515_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55515_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj55515 
move_92833();
function move_92833() {
	window.obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_runningActionsCount = obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj55515");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 80;
	var moveY = 557;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_runningActionsCount = window.obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj55515_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55555();
function runjs_55555() {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = obj55515_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55690").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_4_runningActionsCount = window.obj55515_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55556();
function runjs_55556() {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = obj55515_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55690").css("border-color", "#C00000"); $("#obj55690").css("border-width", "2px"); $("#obj55690").css("border-style", "solid"); $("#obj55690").css("border-radius", "10px"); $("#obj55690").css("-webkit-border-radius", "10px"); $("#obj55690").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_4_runningActionsCount = window.obj55515_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55684 
hide_55557();
function hide_55557() {
	var selector = "#obj55684";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = obj55515_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55515_droppedInsideTargetActions_4_runningActionsCount = window.obj55515_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55557(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55515_droppedInsideTargetActions_4_runningActionsCount = window.obj55515_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55515_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55558();
function runjs_55558() {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = obj55515_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55515").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_4_runningActionsCount = window.obj55515_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55559();
function switchText_55559() {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = obj55515_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55515_droppedInsideTargetActions_4_runningActionsCount = window.obj55515_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55515_droppedInsideTargetActions_4_runningActionsCount = window.obj55515_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj55515_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55515 
move_55560();
function move_55560() {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = obj55515_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj55515");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 80;
	var moveY = 557;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55515_droppedInsideTargetActions_4_runningActionsCount = window.obj55515_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj55515_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55561();
function runjs_55561() {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = obj55515_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55690").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_4_runningActionsCount = window.obj55515_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55562();
function runjs_55562() {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = obj55515_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55690").css("border-color", "#000000"); $("#obj55690").css("border-width", "1px"); $("#obj55690").css("border-style", "solid"); $("#obj55690").css("border-radius", "10px"); $("#obj55690").css("-webkit-border-radius", "10px"); $("#obj55690").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_4_runningActionsCount = window.obj55515_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj55684
(function(){
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = obj55515_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj55684";
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
					window.obj55515_droppedInsideTargetActions_4_runningActionsCount = window.obj55515_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj55515_droppedInsideTargetActions_4_runningActionsCount = window.obj55515_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55515_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55564();
function runjs_55564() {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = obj55515_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55515").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_4_runningActionsCount = window.obj55515_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55565();
function runjs_55565() {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = obj55515_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55515").css("border-color", "rgba(0,0,0,0)"); $("#obj55515").css("border-width", "0px"); $("#obj55515").css("border-style", "solid"); $("#obj55515").css("border-radius", "10px"); $("#obj55515").css("-webkit-border-radius", "10px"); $("#obj55515").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_4_runningActionsCount = window.obj55515_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55738 
playAudio_55566();
function playAudio_55566() {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = obj55515_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj55738")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj55515_droppedInsideTargetActions_4_runningActionsCount = window.obj55515_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55515_droppedInsideTargetActions_4_runningActionsCount = window.obj55515_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj55515_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55567();
function switchText_55567() {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = obj55515_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55515_droppedInsideTargetActions_4_runningActionsCount = window.obj55515_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55515_droppedInsideTargetActions_4_runningActionsCount = window.obj55515_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj55515_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj55515_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55541();
function runjs_55541() {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = obj55515_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55688").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_3_runningActionsCount = window.obj55515_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55542();
function runjs_55542() {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = obj55515_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55688").css("border-color", "#C00000"); $("#obj55688").css("border-width", "2px"); $("#obj55688").css("border-style", "solid"); $("#obj55688").css("border-radius", "10px"); $("#obj55688").css("-webkit-border-radius", "10px"); $("#obj55688").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_3_runningActionsCount = window.obj55515_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55682 
hide_55543();
function hide_55543() {
	var selector = "#obj55682";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = obj55515_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55515_droppedInsideTargetActions_3_runningActionsCount = window.obj55515_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55543(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55515_droppedInsideTargetActions_3_runningActionsCount = window.obj55515_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55515_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55544();
function runjs_55544() {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = obj55515_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55515").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_3_runningActionsCount = window.obj55515_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55545();
function switchText_55545() {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = obj55515_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55515_droppedInsideTargetActions_3_runningActionsCount = window.obj55515_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55515_droppedInsideTargetActions_3_runningActionsCount = window.obj55515_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj55515_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55515 
move_55546();
function move_55546() {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = obj55515_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj55515");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 80;
	var moveY = 557;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55515_droppedInsideTargetActions_3_runningActionsCount = window.obj55515_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj55515_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55547();
function runjs_55547() {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = obj55515_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55688").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_3_runningActionsCount = window.obj55515_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55548();
function runjs_55548() {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = obj55515_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55688").css("border-color", "#000000"); $("#obj55688").css("border-width", "1px"); $("#obj55688").css("border-style", "solid"); $("#obj55688").css("border-radius", "10px"); $("#obj55688").css("-webkit-border-radius", "10px"); $("#obj55688").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_3_runningActionsCount = window.obj55515_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj55682
(function(){
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = obj55515_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj55682";
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
					window.obj55515_droppedInsideTargetActions_3_runningActionsCount = window.obj55515_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj55515_droppedInsideTargetActions_3_runningActionsCount = window.obj55515_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55515_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55550();
function runjs_55550() {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = obj55515_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55515").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_3_runningActionsCount = window.obj55515_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55551();
function runjs_55551() {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = obj55515_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55515").css("border-color", "rgba(0,0,0,0)"); $("#obj55515").css("border-width", "0px"); $("#obj55515").css("border-style", "solid"); $("#obj55515").css("border-radius", "10px"); $("#obj55515").css("-webkit-border-radius", "10px"); $("#obj55515").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_3_runningActionsCount = window.obj55515_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55738 
playAudio_55552();
function playAudio_55552() {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = obj55515_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj55738")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj55515_droppedInsideTargetActions_3_runningActionsCount = window.obj55515_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55515_droppedInsideTargetActions_3_runningActionsCount = window.obj55515_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj55515_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55553();
function switchText_55553() {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = obj55515_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55515_droppedInsideTargetActions_3_runningActionsCount = window.obj55515_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55515_droppedInsideTargetActions_3_runningActionsCount = window.obj55515_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj55515_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj55515_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55527();
function runjs_55527() {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = obj55515_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55692").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_2_runningActionsCount = window.obj55515_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55528();
function runjs_55528() {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = obj55515_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55692").css("border-color", "#C00000"); $("#obj55692").css("border-width", "2px"); $("#obj55692").css("border-style", "solid"); $("#obj55692").css("border-radius", "10px"); $("#obj55692").css("-webkit-border-radius", "10px"); $("#obj55692").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_2_runningActionsCount = window.obj55515_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55686 
hide_55529();
function hide_55529() {
	var selector = "#obj55686";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = obj55515_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55515_droppedInsideTargetActions_2_runningActionsCount = window.obj55515_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55529(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55515_droppedInsideTargetActions_2_runningActionsCount = window.obj55515_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55515_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55530();
function runjs_55530() {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = obj55515_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55515").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_2_runningActionsCount = window.obj55515_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55531();
function switchText_55531() {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = obj55515_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55515_droppedInsideTargetActions_2_runningActionsCount = window.obj55515_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55515_droppedInsideTargetActions_2_runningActionsCount = window.obj55515_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj55515_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55515 
move_55532();
function move_55532() {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = obj55515_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj55515");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 80;
	var moveY = 557;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55515_droppedInsideTargetActions_2_runningActionsCount = window.obj55515_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj55515_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55533();
function runjs_55533() {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = obj55515_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55692").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_2_runningActionsCount = window.obj55515_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55534();
function runjs_55534() {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = obj55515_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55692").css("border-color", "#000000"); $("#obj55692").css("border-width", "1px"); $("#obj55692").css("border-style", "solid"); $("#obj55692").css("border-radius", "10px"); $("#obj55692").css("-webkit-border-radius", "10px"); $("#obj55692").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_2_runningActionsCount = window.obj55515_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj55686
(function(){
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = obj55515_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj55686";
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
					window.obj55515_droppedInsideTargetActions_2_runningActionsCount = window.obj55515_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj55515_droppedInsideTargetActions_2_runningActionsCount = window.obj55515_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55515_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55536();
function runjs_55536() {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = obj55515_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55515").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_2_runningActionsCount = window.obj55515_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55537();
function runjs_55537() {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = obj55515_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55515").css("border-color", "rgba(0,0,0,0)"); $("#obj55515").css("border-width", "0px"); $("#obj55515").css("border-style", "solid"); $("#obj55515").css("border-radius", "10px"); $("#obj55515").css("-webkit-border-radius", "10px"); $("#obj55515").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_2_runningActionsCount = window.obj55515_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55738 
playAudio_55538();
function playAudio_55538() {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = obj55515_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj55738")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj55515_droppedInsideTargetActions_2_runningActionsCount = window.obj55515_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55515_droppedInsideTargetActions_2_runningActionsCount = window.obj55515_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj55515_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55539();
function switchText_55539() {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = obj55515_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55515_droppedInsideTargetActions_2_runningActionsCount = window.obj55515_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55515_droppedInsideTargetActions_2_runningActionsCount = window.obj55515_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj55515_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj55515_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55520();
function runjs_55520() {
	window.obj55515_droppedInsideTargetActions_runningActionsCount = obj55515_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55676").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_runningActionsCount = window.obj55515_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55521();
function runjs_55521() {
	window.obj55515_droppedInsideTargetActions_runningActionsCount = obj55515_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55676").css("border-color", "#058E3F"); $("#obj55676").css("border-width", "2px"); $("#obj55676").css("border-style", "solid"); $("#obj55676").css("border-radius", "10px"); $("#obj55676").css("-webkit-border-radius", "10px"); $("#obj55676").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_runningActionsCount = window.obj55515_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55674 
hide_55522();
function hide_55522() {
	var selector = "#obj55674";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55515_droppedInsideTargetActions_runningActionsCount = obj55515_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55515_droppedInsideTargetActions_runningActionsCount = window.obj55515_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55522(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55515_droppedInsideTargetActions_runningActionsCount = window.obj55515_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55515_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55523();
function runjs_55523() {
	window.obj55515_droppedInsideTargetActions_runningActionsCount = obj55515_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55515").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55515_droppedInsideTargetActions_runningActionsCount = window.obj55515_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj55515_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55524();
function switchText_55524() {
	window.obj55515_droppedInsideTargetActions_runningActionsCount = obj55515_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55515_droppedInsideTargetActions_runningActionsCount = window.obj55515_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55515_droppedInsideTargetActions_runningActionsCount = window.obj55515_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj55515_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj55737 
playAudio_55525();
function playAudio_55525() {
	window.obj55515_droppedInsideTargetActions_runningActionsCount = obj55515_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj55737")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj55515_droppedInsideTargetActions_runningActionsCount = window.obj55515_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55515_droppedInsideTargetActions_runningActionsCount = window.obj55515_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55515_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55515_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55515_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55515_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj55515_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55515_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55515").trigger("obj55515_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55515) {
				console.warn("de-queueing event obj55515." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55515").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55515_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj55462_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj55462");
//	action: dragDrop
//	target: obj55462 
dragDrop_55465();
function dragDrop_55465() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj55462_onTouchDown_runningActionsCount = obj55462_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj55462');
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
	  	containerNode = $('#obj55702');
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
    	window.obj55462_onTouchDown_runningActionsCount = window.obj55462_onTouchDown_runningActionsCount - 1;
if (window.obj55462_onTouchDown_runningActionsCount < 0) {
	window.obj55462_onTouchDown_runningActionsCount = 0;
} else if (window.obj55462_onTouchDown_runningActionsCount == 0) {
	obj55462_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj55692","#obj55690","#obj55688","#obj55676");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_55465 = false;
    	var dropped_id_55465;
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
					dropped_55465 = true;
					dropped_id_55465 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_55465) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj55462").trigger('SCActionDragDrop55465_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj55462_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55462_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj55462 
move_92839();
function move_92839() {
	window.obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_runningActionsCount = obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj55462");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 339;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_runningActionsCount = window.obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj55462_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55502();
function runjs_55502() {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = obj55462_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55676").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_4_runningActionsCount = window.obj55462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55503();
function runjs_55503() {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = obj55462_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55676").css("border-color", "#C00000"); $("#obj55676").css("border-width", "2px"); $("#obj55676").css("border-style", "solid"); $("#obj55676").css("border-radius", "10px"); $("#obj55676").css("-webkit-border-radius", "10px"); $("#obj55676").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_4_runningActionsCount = window.obj55462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55674 
hide_55504();
function hide_55504() {
	var selector = "#obj55674";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = obj55462_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55462_droppedInsideTargetActions_4_runningActionsCount = window.obj55462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55504(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55462_droppedInsideTargetActions_4_runningActionsCount = window.obj55462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55462_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55505();
function runjs_55505() {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = obj55462_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55462").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_4_runningActionsCount = window.obj55462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55506();
function switchText_55506() {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = obj55462_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55462_droppedInsideTargetActions_4_runningActionsCount = window.obj55462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55462_droppedInsideTargetActions_4_runningActionsCount = window.obj55462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj55462_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55462 
move_55507();
function move_55507() {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = obj55462_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj55462");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 339;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55462_droppedInsideTargetActions_4_runningActionsCount = window.obj55462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj55462_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55508();
function runjs_55508() {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = obj55462_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55676").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_4_runningActionsCount = window.obj55462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55509();
function runjs_55509() {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = obj55462_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55676").css("border-color", "#000000"); $("#obj55676").css("border-width", "1px"); $("#obj55676").css("border-style", "solid"); $("#obj55676").css("border-radius", "10px"); $("#obj55676").css("-webkit-border-radius", "10px"); $("#obj55676").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_4_runningActionsCount = window.obj55462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj55674
(function(){
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = obj55462_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj55674";
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
					window.obj55462_droppedInsideTargetActions_4_runningActionsCount = window.obj55462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj55462_droppedInsideTargetActions_4_runningActionsCount = window.obj55462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55462_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55511();
function runjs_55511() {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = obj55462_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55462").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_4_runningActionsCount = window.obj55462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55512();
function runjs_55512() {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = obj55462_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj55462").css("border-color", "rgba(0,0,0,0)"); $("#obj55462").css("border-width", "0px"); $("#obj55462").css("border-style", "solid"); $("#obj55462").css("border-radius", "10px"); $("#obj55462").css("-webkit-border-radius", "10px"); $("#obj55462").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_4_runningActionsCount = window.obj55462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55738 
playAudio_55513();
function playAudio_55513() {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = obj55462_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj55738")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj55462_droppedInsideTargetActions_4_runningActionsCount = window.obj55462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55462_droppedInsideTargetActions_4_runningActionsCount = window.obj55462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj55462_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55514();
function switchText_55514() {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = obj55462_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55462_droppedInsideTargetActions_4_runningActionsCount = window.obj55462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55462_droppedInsideTargetActions_4_runningActionsCount = window.obj55462_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj55462_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj55462_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55488();
function runjs_55488() {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = obj55462_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55688").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_3_runningActionsCount = window.obj55462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55489();
function runjs_55489() {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = obj55462_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55688").css("border-color", "#C00000"); $("#obj55688").css("border-width", "2px"); $("#obj55688").css("border-style", "solid"); $("#obj55688").css("border-radius", "10px"); $("#obj55688").css("-webkit-border-radius", "10px"); $("#obj55688").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_3_runningActionsCount = window.obj55462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55682 
hide_55490();
function hide_55490() {
	var selector = "#obj55682";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = obj55462_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55462_droppedInsideTargetActions_3_runningActionsCount = window.obj55462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55490(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55462_droppedInsideTargetActions_3_runningActionsCount = window.obj55462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55462_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55491();
function runjs_55491() {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = obj55462_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55462").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_3_runningActionsCount = window.obj55462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55492();
function switchText_55492() {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = obj55462_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55462_droppedInsideTargetActions_3_runningActionsCount = window.obj55462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55462_droppedInsideTargetActions_3_runningActionsCount = window.obj55462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj55462_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55462 
move_55493();
function move_55493() {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = obj55462_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj55462");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 339;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55462_droppedInsideTargetActions_3_runningActionsCount = window.obj55462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj55462_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55494();
function runjs_55494() {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = obj55462_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55688").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_3_runningActionsCount = window.obj55462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55495();
function runjs_55495() {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = obj55462_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55688").css("border-color", "#000000"); $("#obj55688").css("border-width", "1px"); $("#obj55688").css("border-style", "solid"); $("#obj55688").css("border-radius", "10px"); $("#obj55688").css("-webkit-border-radius", "10px"); $("#obj55688").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_3_runningActionsCount = window.obj55462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj55682
(function(){
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = obj55462_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj55682";
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
					window.obj55462_droppedInsideTargetActions_3_runningActionsCount = window.obj55462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj55462_droppedInsideTargetActions_3_runningActionsCount = window.obj55462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55462_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55497();
function runjs_55497() {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = obj55462_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55462").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_3_runningActionsCount = window.obj55462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55498();
function runjs_55498() {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = obj55462_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55462").css("border-color", "rgba(0,0,0,0)"); $("#obj55462").css("border-width", "0px"); $("#obj55462").css("border-style", "solid"); $("#obj55462").css("border-radius", "10px"); $("#obj55462").css("-webkit-border-radius", "10px"); $("#obj55462").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_3_runningActionsCount = window.obj55462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55738 
playAudio_55499();
function playAudio_55499() {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = obj55462_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj55738")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj55462_droppedInsideTargetActions_3_runningActionsCount = window.obj55462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55462_droppedInsideTargetActions_3_runningActionsCount = window.obj55462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj55462_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55500();
function switchText_55500() {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = obj55462_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55462_droppedInsideTargetActions_3_runningActionsCount = window.obj55462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55462_droppedInsideTargetActions_3_runningActionsCount = window.obj55462_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj55462_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj55462_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55474();
function runjs_55474() {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = obj55462_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55690").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_2_runningActionsCount = window.obj55462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55475();
function runjs_55475() {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = obj55462_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55690").css("border-color", "#C00000"); $("#obj55690").css("border-width", "2px"); $("#obj55690").css("border-style", "solid"); $("#obj55690").css("border-radius", "10px"); $("#obj55690").css("-webkit-border-radius", "10px"); $("#obj55690").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_2_runningActionsCount = window.obj55462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55684 
hide_55476();
function hide_55476() {
	var selector = "#obj55684";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = obj55462_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55462_droppedInsideTargetActions_2_runningActionsCount = window.obj55462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55476(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55462_droppedInsideTargetActions_2_runningActionsCount = window.obj55462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55462_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55477();
function runjs_55477() {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = obj55462_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55462").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_2_runningActionsCount = window.obj55462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55478();
function switchText_55478() {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = obj55462_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55462_droppedInsideTargetActions_2_runningActionsCount = window.obj55462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55462_droppedInsideTargetActions_2_runningActionsCount = window.obj55462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj55462_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55462 
move_55479();
function move_55479() {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = obj55462_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj55462");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 339;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55462_droppedInsideTargetActions_2_runningActionsCount = window.obj55462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj55462_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55480();
function runjs_55480() {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = obj55462_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55690").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_2_runningActionsCount = window.obj55462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55481();
function runjs_55481() {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = obj55462_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55690").css("border-color", "#000000"); $("#obj55690").css("border-width", "1px"); $("#obj55690").css("border-style", "solid"); $("#obj55690").css("border-radius", "10px"); $("#obj55690").css("-webkit-border-radius", "10px"); $("#obj55690").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_2_runningActionsCount = window.obj55462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj55684
(function(){
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = obj55462_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj55684";
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
					window.obj55462_droppedInsideTargetActions_2_runningActionsCount = window.obj55462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj55462_droppedInsideTargetActions_2_runningActionsCount = window.obj55462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55462_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55483();
function runjs_55483() {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = obj55462_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55462").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_2_runningActionsCount = window.obj55462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55484();
function runjs_55484() {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = obj55462_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55462").css("border-color", "rgba(0,0,0,0)"); $("#obj55462").css("border-width", "0px"); $("#obj55462").css("border-style", "solid"); $("#obj55462").css("border-radius", "10px"); $("#obj55462").css("-webkit-border-radius", "10px"); $("#obj55462").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_2_runningActionsCount = window.obj55462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55738 
playAudio_55485();
function playAudio_55485() {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = obj55462_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj55738")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj55462_droppedInsideTargetActions_2_runningActionsCount = window.obj55462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55462_droppedInsideTargetActions_2_runningActionsCount = window.obj55462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj55462_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55486();
function switchText_55486() {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = obj55462_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55462_droppedInsideTargetActions_2_runningActionsCount = window.obj55462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55462_droppedInsideTargetActions_2_runningActionsCount = window.obj55462_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj55462_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj55462_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55467();
function runjs_55467() {
	window.obj55462_droppedInsideTargetActions_runningActionsCount = obj55462_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55692").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_runningActionsCount = window.obj55462_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55468();
function runjs_55468() {
	window.obj55462_droppedInsideTargetActions_runningActionsCount = obj55462_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55692").css("border-color", "#058E3F"); $("#obj55692").css("border-width", "2px"); $("#obj55692").css("border-style", "solid"); $("#obj55692").css("border-radius", "10px"); $("#obj55692").css("-webkit-border-radius", "10px"); $("#obj55692").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_runningActionsCount = window.obj55462_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55686 
hide_55469();
function hide_55469() {
	var selector = "#obj55686";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55462_droppedInsideTargetActions_runningActionsCount = obj55462_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55462_droppedInsideTargetActions_runningActionsCount = window.obj55462_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55469(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55462_droppedInsideTargetActions_runningActionsCount = window.obj55462_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55462_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55470();
function runjs_55470() {
	window.obj55462_droppedInsideTargetActions_runningActionsCount = obj55462_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55462").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55462_droppedInsideTargetActions_runningActionsCount = window.obj55462_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj55462_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55471();
function switchText_55471() {
	window.obj55462_droppedInsideTargetActions_runningActionsCount = obj55462_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55700_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55700_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55700").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55700_content");
			setTimeout(function () {
				window.obj55462_droppedInsideTargetActions_runningActionsCount = window.obj55462_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55700 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55462_droppedInsideTargetActions_runningActionsCount = window.obj55462_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj55462_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj55737 
playAudio_55472();
function playAudio_55472() {
	window.obj55462_droppedInsideTargetActions_runningActionsCount = obj55462_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj55737")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj55462_droppedInsideTargetActions_runningActionsCount = window.obj55462_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55462_droppedInsideTargetActions_runningActionsCount = window.obj55462_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55462_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55462_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55462_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55462_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj55462_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55462_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55462").trigger("obj55462_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55462) {
				console.warn("de-queueing event obj55462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55462_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj68270_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68270_onTap_activeActionGroupIndex = -1;
		$("#obj68270").trigger("obj68270_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68270) {
				console.warn("de-queueing event obj68270." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68270").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68270_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68270 
hide_68273();
function hide_68273() {
	var selector = "#obj68270";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68270_onTap_runningActionsCount = obj68270_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68270_onTap_runningActionsCount = window.obj68270_onTap_runningActionsCount - 1;
if (window.obj68270_onTap_runningActionsCount < 0) {
	window.obj68270_onTap_runningActionsCount = 0;
} else if (window.obj68270_onTap_runningActionsCount == 0) {
	obj68270_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68273(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68270_onTap_runningActionsCount = window.obj68270_onTap_runningActionsCount - 1;
if (window.obj68270_onTap_runningActionsCount < 0) {
	window.obj68270_onTap_runningActionsCount = 0;
} else if (window.obj68270_onTap_runningActionsCount == 0) {
	obj68270_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68276 
stopMovie_68272();
function stopMovie_68272() {
	window.obj68270_onTap_runningActionsCount = obj68270_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68276")[0];
	myVideo.pause();
	window.obj68270_onTap_runningActionsCount = window.obj68270_onTap_runningActionsCount - 1;
if (window.obj68270_onTap_runningActionsCount < 0) {
	window.obj68270_onTap_runningActionsCount = 0;
} else if (window.obj68270_onTap_runningActionsCount == 0) {
	obj68270_onTap_actionGroup1();
}
}
















};
obj68270_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68270_onTap_activeActionGroupIndex = -1;
		$("#obj68270").trigger("obj68270_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68270) {
				console.warn("de-queueing event obj68270." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68270").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68270_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68262
(function(){
	window.obj68270_onTap_runningActionsCount = obj68270_onTap_runningActionsCount + 1;

	var selector = "#obj68262";
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
					window.obj68270_onTap_runningActionsCount = window.obj68270_onTap_runningActionsCount - 1;
if (window.obj68270_onTap_runningActionsCount < 0) {
	window.obj68270_onTap_runningActionsCount = 0;
} else if (window.obj68270_onTap_runningActionsCount == 0) {
	obj68270_onTap_actionGroup2();
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
				window.obj68270_onTap_runningActionsCount = window.obj68270_onTap_runningActionsCount - 1;
if (window.obj68270_onTap_runningActionsCount < 0) {
	window.obj68270_onTap_runningActionsCount = 0;
} else if (window.obj68270_onTap_runningActionsCount == 0) {
	obj68270_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68270_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68270_onTap_activeActionGroupIndex = -1;
		$("#obj68270").trigger("obj68270_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68270) {
				console.warn("de-queueing event obj68270." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68270").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68270_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68276 
move_68275();
function move_68275() {
	window.obj68270_onTap_runningActionsCount = obj68270_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68276");
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
			window.obj68270_onTap_runningActionsCount = window.obj68270_onTap_runningActionsCount - 1;
if (window.obj68270_onTap_runningActionsCount < 0) {
	window.obj68270_onTap_runningActionsCount = 0;
} else if (window.obj68270_onTap_runningActionsCount == 0) {
	obj68270_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68270_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68270_onTap_activeActionGroupIndex = -1;
		$("#obj68270").trigger("obj68270_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68270) {
				console.warn("de-queueing event obj68270." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68270").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68270_onTap_activeActionGroupIndex = 3;
	





















};
obj68262_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68262_onTap_activeActionGroupIndex = -1;
		$("#obj68262").trigger("obj68262_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68262) {
				console.warn("de-queueing event obj68262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68262_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68262 
hide_68265();
function hide_68265() {
	var selector = "#obj68262";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68262_onTap_runningActionsCount = obj68262_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68262_onTap_runningActionsCount = window.obj68262_onTap_runningActionsCount - 1;
if (window.obj68262_onTap_runningActionsCount < 0) {
	window.obj68262_onTap_runningActionsCount = 0;
} else if (window.obj68262_onTap_runningActionsCount == 0) {
	obj68262_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68265(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68262_onTap_runningActionsCount = window.obj68262_onTap_runningActionsCount - 1;
if (window.obj68262_onTap_runningActionsCount < 0) {
	window.obj68262_onTap_runningActionsCount = 0;
} else if (window.obj68262_onTap_runningActionsCount == 0) {
	obj68262_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68276 
playPauseMovie_68264();
function playPauseMovie_68264() {
	window.obj68262_onTap_runningActionsCount = obj68262_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68276")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68262_onTap_runningActionsCount = window.obj68262_onTap_runningActionsCount - 1;
if (window.obj68262_onTap_runningActionsCount < 0) {
	window.obj68262_onTap_runningActionsCount = 0;
} else if (window.obj68262_onTap_runningActionsCount == 0) {
	obj68262_onTap_actionGroup1();
}
}

















};
obj68262_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68262_onTap_activeActionGroupIndex = -1;
		$("#obj68262").trigger("obj68262_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68262) {
				console.warn("de-queueing event obj68262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68262_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68270
(function(){
	window.obj68262_onTap_runningActionsCount = obj68262_onTap_runningActionsCount + 1;

	var selector = "#obj68270";
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
					window.obj68262_onTap_runningActionsCount = window.obj68262_onTap_runningActionsCount - 1;
if (window.obj68262_onTap_runningActionsCount < 0) {
	window.obj68262_onTap_runningActionsCount = 0;
} else if (window.obj68262_onTap_runningActionsCount == 0) {
	obj68262_onTap_actionGroup2();
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
				window.obj68262_onTap_runningActionsCount = window.obj68262_onTap_runningActionsCount - 1;
if (window.obj68262_onTap_runningActionsCount < 0) {
	window.obj68262_onTap_runningActionsCount = 0;
} else if (window.obj68262_onTap_runningActionsCount == 0) {
	obj68262_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68262_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68262_onTap_activeActionGroupIndex = -1;
		$("#obj68262").trigger("obj68262_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68262) {
				console.warn("de-queueing event obj68262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68262_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68276 
move_68267();
function move_68267() {
	window.obj68262_onTap_runningActionsCount = obj68262_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68276");
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
			window.obj68262_onTap_runningActionsCount = window.obj68262_onTap_runningActionsCount - 1;
if (window.obj68262_onTap_runningActionsCount < 0) {
	window.obj68262_onTap_runningActionsCount = 0;
} else if (window.obj68262_onTap_runningActionsCount == 0) {
	obj68262_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68262_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68262_onTap_activeActionGroupIndex = -1;
		$("#obj68262").trigger("obj68262_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68262) {
				console.warn("de-queueing event obj68262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68262_onTap_activeActionGroupIndex = 3;
	





















};
obj89305_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89305_onTap_activeActionGroupIndex = -1;
		$("#obj89305").trigger("obj89305_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89305) {
				console.warn("de-queueing event obj89305." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89305").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89305_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89310 
stopAudio_89307();
function stopAudio_89307() {
	window.obj89305_onTap_runningActionsCount = obj89305_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89310")[0];
	myAudio.pause();
	window.obj89305_onTap_runningActionsCount = window.obj89305_onTap_runningActionsCount - 1;
if (window.obj89305_onTap_runningActionsCount < 0) {
	window.obj89305_onTap_runningActionsCount = 0;
} else if (window.obj89305_onTap_runningActionsCount == 0) {
	obj89305_onTap_actionGroup1();
}
}








};
obj89305_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89305_onTap_activeActionGroupIndex = -1;
		$("#obj89305").trigger("obj89305_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89305) {
				console.warn("de-queueing event obj89305." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89305").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89305_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89305 
hide_89308();
function hide_89308() {
	var selector = "#obj89305";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89305_onTap_runningActionsCount = obj89305_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89305_onTap_runningActionsCount = window.obj89305_onTap_runningActionsCount - 1;
if (window.obj89305_onTap_runningActionsCount < 0) {
	window.obj89305_onTap_runningActionsCount = 0;
} else if (window.obj89305_onTap_runningActionsCount == 0) {
	obj89305_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89308(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89305_onTap_runningActionsCount = window.obj89305_onTap_runningActionsCount - 1;
if (window.obj89305_onTap_runningActionsCount < 0) {
	window.obj89305_onTap_runningActionsCount = 0;
} else if (window.obj89305_onTap_runningActionsCount == 0) {
	obj89305_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89305_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89305_onTap_activeActionGroupIndex = -1;
		$("#obj89305").trigger("obj89305_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89305) {
				console.warn("de-queueing event obj89305." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89305").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89305_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89300
(function(){
	window.obj89305_onTap_runningActionsCount = obj89305_onTap_runningActionsCount + 1;

	var selector = "#obj89300";
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
					window.obj89305_onTap_runningActionsCount = window.obj89305_onTap_runningActionsCount - 1;
if (window.obj89305_onTap_runningActionsCount < 0) {
	window.obj89305_onTap_runningActionsCount = 0;
} else if (window.obj89305_onTap_runningActionsCount == 0) {
	obj89305_onTap_actionGroup3();
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
				window.obj89305_onTap_runningActionsCount = window.obj89305_onTap_runningActionsCount - 1;
if (window.obj89305_onTap_runningActionsCount < 0) {
	window.obj89305_onTap_runningActionsCount = 0;
} else if (window.obj89305_onTap_runningActionsCount == 0) {
	obj89305_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89305_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89305_onTap_activeActionGroupIndex = -1;
		$("#obj89305").trigger("obj89305_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89305) {
				console.warn("de-queueing event obj89305." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89305").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89305_onTap_activeActionGroupIndex = 3;
	





















};
obj89300_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89300_onTap_activeActionGroupIndex = -1;
		$("#obj89300").trigger("obj89300_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89300) {
				console.warn("de-queueing event obj89300." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89300").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89300_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89300 
hide_89302();
function hide_89302() {
	var selector = "#obj89300";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89300_onTap_runningActionsCount = obj89300_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89300_onTap_runningActionsCount = window.obj89300_onTap_runningActionsCount - 1;
if (window.obj89300_onTap_runningActionsCount < 0) {
	window.obj89300_onTap_runningActionsCount = 0;
} else if (window.obj89300_onTap_runningActionsCount == 0) {
	obj89300_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89302(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89300_onTap_runningActionsCount = window.obj89300_onTap_runningActionsCount - 1;
if (window.obj89300_onTap_runningActionsCount < 0) {
	window.obj89300_onTap_runningActionsCount = 0;
} else if (window.obj89300_onTap_runningActionsCount == 0) {
	obj89300_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89300_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89300_onTap_activeActionGroupIndex = -1;
		$("#obj89300").trigger("obj89300_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89300) {
				console.warn("de-queueing event obj89300." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89300").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89300_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89305
(function(){
	window.obj89300_onTap_runningActionsCount = obj89300_onTap_runningActionsCount + 1;

	var selector = "#obj89305";
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
					window.obj89300_onTap_runningActionsCount = window.obj89300_onTap_runningActionsCount - 1;
if (window.obj89300_onTap_runningActionsCount < 0) {
	window.obj89300_onTap_runningActionsCount = 0;
} else if (window.obj89300_onTap_runningActionsCount == 0) {
	obj89300_onTap_actionGroup2();
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
				window.obj89300_onTap_runningActionsCount = window.obj89300_onTap_runningActionsCount - 1;
if (window.obj89300_onTap_runningActionsCount < 0) {
	window.obj89300_onTap_runningActionsCount = 0;
} else if (window.obj89300_onTap_runningActionsCount == 0) {
	obj89300_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89300_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89300_onTap_activeActionGroupIndex = -1;
		$("#obj89300").trigger("obj89300_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89300) {
				console.warn("de-queueing event obj89300." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89300").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89300_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89310 
playAudio_89304();
function playAudio_89304() {
	window.obj89300_onTap_runningActionsCount = obj89300_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89310")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj89300_onTap_runningActionsCount = window.obj89300_onTap_runningActionsCount - 1;
if (window.obj89300_onTap_runningActionsCount < 0) {
	window.obj89300_onTap_runningActionsCount = 0;
} else if (window.obj89300_onTap_runningActionsCount == 0) {
	obj89300_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89300_onTap_runningActionsCount = window.obj89300_onTap_runningActionsCount - 1;
if (window.obj89300_onTap_runningActionsCount < 0) {
	window.obj89300_onTap_runningActionsCount = 0;
} else if (window.obj89300_onTap_runningActionsCount == 0) {
	obj89300_onTap_actionGroup3();
}
	}
}









};
obj89300_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89300_onTap_activeActionGroupIndex = -1;
		$("#obj89300").trigger("obj89300_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89300) {
				console.warn("de-queueing event obj89300." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89300").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89300_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

































/*
 *
 *   obj55719: Event Touch Down
 *
 */
$("#obj55719").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj55719_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55719_onTap is still running");
	return;
}
var obj55719_onTap_runningActionsCount = 0;
var obj55719_onTap_loopCount = 0;
obj55719_onTap_actionGroup0();
});










/*
 *
 *   obj55716: Event Touch Down
 *
 */
$("#obj55716").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj55716_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55716_onTap is still running");
	return;
}
var obj55716_onTap_runningActionsCount = 0;
var obj55716_onTap_loopCount = 0;
obj55716_onTap_actionGroup0();
});










/*
 *
 *   obj55712: Event Touch Down
 *
 */
$("#obj55712").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj55712_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55712_onTap is still running");
	return;
}
var obj55712_onTap_runningActionsCount = 0;
var obj55712_onTap_loopCount = 0;
obj55712_onTap_actionGroup0();
});









































































































































































































/*
 *
 *   obj55621: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj55621");
	var winTarget = document.getElementById("obj55621");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj55621").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj55621_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj55621_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj55621_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55621_onTouchDown is still running");
	return;
}
var obj55621_onTouchDown_runningActionsCount = 0;
var obj55621_onTouchDown_loopCount = 0;
obj55621_onTouchDown_actionGroup0();
});



/*
 *
 *   obj55621: Event SCActionDragDrop55624_droppedOutsideTargetActions
 *
 */
$("#obj55621").bind("SCActionDragDrop55624_droppedOutsideTargetActions", function(event) {
	if (window.obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55621_SCActionDragDrop55624_droppedOutsideTargetActions is still running");
	return;
}
var obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_loopCount = 0;
obj55621_SCActionDragDrop55624_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj55621: Event droppedInsideTargetActions_4
 *
 */
$("#obj55621").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj55621_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55621_droppedInsideTargetActions_4 is still running");
	return;
}
var obj55621_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj55621_droppedInsideTargetActions_4_loopCount = 0;
obj55621_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj55621: Event droppedInsideTargetActions_3
 *
 */
$("#obj55621").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj55621_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55621_droppedInsideTargetActions_3 is still running");
	return;
}
var obj55621_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55621_droppedInsideTargetActions_3_loopCount = 0;
obj55621_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj55621: Event droppedInsideTargetActions_2
 *
 */
$("#obj55621").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj55621_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55621_droppedInsideTargetActions_2 is still running");
	return;
}
var obj55621_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55621_droppedInsideTargetActions_2_loopCount = 0;
obj55621_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj55621: Event droppedInsideTargetActions
 *
 */
$("#obj55621").bind("droppedInsideTargetActions", function(event) {
	if (window.obj55621_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55621_droppedInsideTargetActions is still running");
	return;
}
var obj55621_droppedInsideTargetActions_runningActionsCount = 0;
var obj55621_droppedInsideTargetActions_loopCount = 0;
obj55621_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj55568: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj55568");
	var winTarget = document.getElementById("obj55568");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj55568").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj55568_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj55568_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj55568_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55568_onTouchDown is still running");
	return;
}
var obj55568_onTouchDown_runningActionsCount = 0;
var obj55568_onTouchDown_loopCount = 0;
obj55568_onTouchDown_actionGroup0();
});



/*
 *
 *   obj55568: Event SCActionDragDrop55571_droppedOutsideTargetActions
 *
 */
$("#obj55568").bind("SCActionDragDrop55571_droppedOutsideTargetActions", function(event) {
	if (window.obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55568_SCActionDragDrop55571_droppedOutsideTargetActions is still running");
	return;
}
var obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_loopCount = 0;
obj55568_SCActionDragDrop55571_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj55568: Event droppedInsideTargetActions_4
 *
 */
$("#obj55568").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj55568_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55568_droppedInsideTargetActions_4 is still running");
	return;
}
var obj55568_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj55568_droppedInsideTargetActions_4_loopCount = 0;
obj55568_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj55568: Event droppedInsideTargetActions_3
 *
 */
$("#obj55568").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj55568_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55568_droppedInsideTargetActions_3 is still running");
	return;
}
var obj55568_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55568_droppedInsideTargetActions_3_loopCount = 0;
obj55568_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj55568: Event droppedInsideTargetActions_2
 *
 */
$("#obj55568").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj55568_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55568_droppedInsideTargetActions_2 is still running");
	return;
}
var obj55568_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55568_droppedInsideTargetActions_2_loopCount = 0;
obj55568_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj55568: Event droppedInsideTargetActions
 *
 */
$("#obj55568").bind("droppedInsideTargetActions", function(event) {
	if (window.obj55568_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55568_droppedInsideTargetActions is still running");
	return;
}
var obj55568_droppedInsideTargetActions_runningActionsCount = 0;
var obj55568_droppedInsideTargetActions_loopCount = 0;
obj55568_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj55515: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj55515");
	var winTarget = document.getElementById("obj55515");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj55515").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj55515_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj55515_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj55515_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55515_onTouchDown is still running");
	return;
}
var obj55515_onTouchDown_runningActionsCount = 0;
var obj55515_onTouchDown_loopCount = 0;
obj55515_onTouchDown_actionGroup0();
});



/*
 *
 *   obj55515: Event SCActionDragDrop55518_droppedOutsideTargetActions
 *
 */
$("#obj55515").bind("SCActionDragDrop55518_droppedOutsideTargetActions", function(event) {
	if (window.obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55515_SCActionDragDrop55518_droppedOutsideTargetActions is still running");
	return;
}
var obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_loopCount = 0;
obj55515_SCActionDragDrop55518_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj55515: Event droppedInsideTargetActions_4
 *
 */
$("#obj55515").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj55515_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55515_droppedInsideTargetActions_4 is still running");
	return;
}
var obj55515_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj55515_droppedInsideTargetActions_4_loopCount = 0;
obj55515_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj55515: Event droppedInsideTargetActions_3
 *
 */
$("#obj55515").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj55515_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55515_droppedInsideTargetActions_3 is still running");
	return;
}
var obj55515_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55515_droppedInsideTargetActions_3_loopCount = 0;
obj55515_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj55515: Event droppedInsideTargetActions_2
 *
 */
$("#obj55515").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj55515_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55515_droppedInsideTargetActions_2 is still running");
	return;
}
var obj55515_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55515_droppedInsideTargetActions_2_loopCount = 0;
obj55515_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj55515: Event droppedInsideTargetActions
 *
 */
$("#obj55515").bind("droppedInsideTargetActions", function(event) {
	if (window.obj55515_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55515_droppedInsideTargetActions is still running");
	return;
}
var obj55515_droppedInsideTargetActions_runningActionsCount = 0;
var obj55515_droppedInsideTargetActions_loopCount = 0;
obj55515_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj55462: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj55462");
	var winTarget = document.getElementById("obj55462");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj55462").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj55462_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj55462_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj55462_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55462_onTouchDown is still running");
	return;
}
var obj55462_onTouchDown_runningActionsCount = 0;
var obj55462_onTouchDown_loopCount = 0;
obj55462_onTouchDown_actionGroup0();
});



/*
 *
 *   obj55462: Event SCActionDragDrop55465_droppedOutsideTargetActions
 *
 */
$("#obj55462").bind("SCActionDragDrop55465_droppedOutsideTargetActions", function(event) {
	if (window.obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55462_SCActionDragDrop55465_droppedOutsideTargetActions is still running");
	return;
}
var obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_loopCount = 0;
obj55462_SCActionDragDrop55465_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj55462: Event droppedInsideTargetActions_4
 *
 */
$("#obj55462").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj55462_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55462_droppedInsideTargetActions_4 is still running");
	return;
}
var obj55462_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj55462_droppedInsideTargetActions_4_loopCount = 0;
obj55462_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj55462: Event droppedInsideTargetActions_3
 *
 */
$("#obj55462").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj55462_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55462_droppedInsideTargetActions_3 is still running");
	return;
}
var obj55462_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55462_droppedInsideTargetActions_3_loopCount = 0;
obj55462_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj55462: Event droppedInsideTargetActions_2
 *
 */
$("#obj55462").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj55462_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55462_droppedInsideTargetActions_2 is still running");
	return;
}
var obj55462_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55462_droppedInsideTargetActions_2_loopCount = 0;
obj55462_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj55462: Event droppedInsideTargetActions
 *
 */
$("#obj55462").bind("droppedInsideTargetActions", function(event) {
	if (window.obj55462_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55462_droppedInsideTargetActions is still running");
	return;
}
var obj55462_droppedInsideTargetActions_runningActionsCount = 0;
var obj55462_droppedInsideTargetActions_loopCount = 0;
obj55462_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj68270: Event Touch Down
 *
 */
$("#obj68270").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68270_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68270_onTap is still running");
	return;
}
var obj68270_onTap_runningActionsCount = 0;
var obj68270_onTap_loopCount = 0;
obj68270_onTap_actionGroup0();
});










/*
 *
 *   obj68262: Event Touch Down
 *
 */
$("#obj68262").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68262_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68262_onTap is still running");
	return;
}
var obj68262_onTap_runningActionsCount = 0;
var obj68262_onTap_loopCount = 0;
obj68262_onTap_actionGroup0();
});










/*
 *
 *   obj89305: Event Touch Down
 *
 */
$("#obj89305").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89305_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89305_onTap is still running");
	return;
}
var obj89305_onTap_runningActionsCount = 0;
var obj89305_onTap_loopCount = 0;
obj89305_onTap_actionGroup0();
});










/*
 *
 *   obj89300: Event Touch Down
 *
 */
$("#obj89300").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89300_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89300_onTap is still running");
	return;
}
var obj89300_onTap_runningActionsCount = 0;
var obj89300_onTap_loopCount = 0;
obj89300_onTap_actionGroup0();
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
	
$("#obj55738").trigger('SCEventShow');
$("#obj55737").trigger('SCEventShow');
$("#obj55735").trigger('SCEventShow');
$("#obj55719").trigger('SCEventShow');
$("#obj55716").trigger('SCEventShow');
$("#obj55712").trigger('SCEventShow');
$("#obj55710").trigger('SCEventShow');
$("#obj55708").trigger('SCEventShow');
$("#obj55706").trigger('SCEventShow');
$("#obj55704").trigger('SCEventShow');
$("#obj55702").trigger('SCEventShow');
$("#obj55700").trigger('SCEventShow');
$("#obj55698").trigger('SCEventShow');
$("#obj55696").trigger('SCEventShow');
$("#obj55694").trigger('SCEventShow');
$("#obj55692").trigger('SCEventShow');
$("#obj55690").trigger('SCEventShow');
$("#obj55688").trigger('SCEventShow');
$("#obj55686").trigger('SCEventShow');
$("#obj55684").trigger('SCEventShow');
$("#obj55682").trigger('SCEventShow');
$("#obj55680").trigger('SCEventShow');
$("#obj55678").trigger('SCEventShow');
$("#obj55676").trigger('SCEventShow');
$("#obj55674").trigger('SCEventShow');
$("#obj55621").trigger('SCEventShow');
$("#obj55568").trigger('SCEventShow');
$("#obj55515").trigger('SCEventShow');
$("#obj55462").trigger('SCEventShow');
$("#obj68270").trigger('SCEventShow');
$("#obj68262").trigger('SCEventShow');
$("#obj89305").trigger('SCEventShow');
$("#obj89300").trigger('SCEventShow');
$("#obj89310").trigger('SCEventShow');
$("#obj95033").trigger('SCEventShow');
$("#obj68276").trigger('SCEventShow');
	
});