pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 22615;
pubcoder.page.title = pubcoder.page.title || "86";
pubcoder.page.number = pubcoder.page.number || 86;
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
var obj78365_onTap_activeActionGroupIndex = -1;
var obj78365_onTap_runningActionsCount = 0;
var obj78365_onTap_loopCount = 0;
var obj78362_onTap_activeActionGroupIndex = -1;
var obj78362_onTap_runningActionsCount = 0;
var obj78362_onTap_loopCount = 0;
var obj78358_onTap_activeActionGroupIndex = -1;
var obj78358_onTap_runningActionsCount = 0;
var obj78358_onTap_loopCount = 0;
var obj78290_onDrag_activeActionGroupIndex = -1;
var obj78290_onDrag_runningActionsCount = 0;
var obj78290_onDrag_loopCount = 0;
var obj78290_onTouchDown_activeActionGroupIndex = -1;
var obj78290_onTouchDown_runningActionsCount = 0;
var obj78290_onTouchDown_loopCount = 0;
var obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_runningActionsCount = 0;
var obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_loopCount = 0;
var obj78290_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj78290_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj78290_droppedInsideTargetActions_3_loopCount = 0;
var obj78290_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj78290_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj78290_droppedInsideTargetActions_2_loopCount = 0;
var obj78290_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj78290_droppedInsideTargetActions_runningActionsCount = 0;
var obj78290_droppedInsideTargetActions_loopCount = 0;
var obj78244_onDrag_activeActionGroupIndex = -1;
var obj78244_onDrag_runningActionsCount = 0;
var obj78244_onDrag_loopCount = 0;
var obj78244_onTouchDown_activeActionGroupIndex = -1;
var obj78244_onTouchDown_runningActionsCount = 0;
var obj78244_onTouchDown_loopCount = 0;
var obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_runningActionsCount = 0;
var obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_loopCount = 0;
var obj78244_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj78244_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj78244_droppedInsideTargetActions_3_loopCount = 0;
var obj78244_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj78244_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj78244_droppedInsideTargetActions_2_loopCount = 0;
var obj78244_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj78244_droppedInsideTargetActions_runningActionsCount = 0;
var obj78244_droppedInsideTargetActions_loopCount = 0;
var obj78204_onDrag_activeActionGroupIndex = -1;
var obj78204_onDrag_runningActionsCount = 0;
var obj78204_onDrag_loopCount = 0;
var obj78204_onTouchDown_activeActionGroupIndex = -1;
var obj78204_onTouchDown_runningActionsCount = 0;
var obj78204_onTouchDown_loopCount = 0;
var obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_runningActionsCount = 0;
var obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_loopCount = 0;
var obj78204_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj78204_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj78204_droppedInsideTargetActions_3_loopCount = 0;
var obj78204_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj78204_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj78204_droppedInsideTargetActions_2_loopCount = 0;
var obj78204_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj78204_droppedInsideTargetActions_runningActionsCount = 0;
var obj78204_droppedInsideTargetActions_loopCount = 0;
var obj78186_onTap_activeActionGroupIndex = -1;
var obj78186_onTap_runningActionsCount = 0;
var obj78186_onTap_loopCount = 0;
var obj78178_onTap_activeActionGroupIndex = -1;
var obj78178_onTap_runningActionsCount = 0;
var obj78178_onTap_loopCount = 0;
var obj87901_onTap_activeActionGroupIndex = -1;
var obj87901_onTap_runningActionsCount = 0;
var obj87901_onTap_loopCount = 0;
var obj87896_onTap_activeActionGroupIndex = -1;
var obj87896_onTap_runningActionsCount = 0;
var obj87896_onTap_loopCount = 0;
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
		
obj78365_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78365_onTap_activeActionGroupIndex = -1;
		$("#obj78365").trigger("obj78365_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78365) {
				console.warn("de-queueing event obj78365." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78365").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78365_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_78367();
function goToPage_78367() {
	window.obj78365_onTap_runningActionsCount = obj78365_onTap_runningActionsCount + 1;
	$("#anchor503")[0].click();
	window.obj78365_onTap_runningActionsCount = window.obj78365_onTap_runningActionsCount - 1;
if (window.obj78365_onTap_runningActionsCount < 0) {
	window.obj78365_onTap_runningActionsCount = 0;
} else if (window.obj78365_onTap_runningActionsCount == 0) {
	obj78365_onTap_actionGroup1();
}
}





















};
obj78365_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78365_onTap_activeActionGroupIndex = -1;
		$("#obj78365").trigger("obj78365_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78365) {
				console.warn("de-queueing event obj78365." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78365").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78365_onTap_activeActionGroupIndex = 1;
	





















};
obj78362_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78362_onTap_activeActionGroupIndex = -1;
		$("#obj78362").trigger("obj78362_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78362) {
				console.warn("de-queueing event obj78362." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78362").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78362_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_78364();
function goToPage_78364() {
	window.obj78362_onTap_runningActionsCount = obj78362_onTap_runningActionsCount + 1;
	$("#anchor504")[0].click();
	window.obj78362_onTap_runningActionsCount = window.obj78362_onTap_runningActionsCount - 1;
if (window.obj78362_onTap_runningActionsCount < 0) {
	window.obj78362_onTap_runningActionsCount = 0;
} else if (window.obj78362_onTap_runningActionsCount == 0) {
	obj78362_onTap_actionGroup1();
}
}





















};
obj78362_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78362_onTap_activeActionGroupIndex = -1;
		$("#obj78362").trigger("obj78362_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78362) {
				console.warn("de-queueing event obj78362." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78362").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78362_onTap_activeActionGroupIndex = 1;
	





















};
obj78358_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78358_onTap_activeActionGroupIndex = -1;
		$("#obj78358").trigger("obj78358_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78358) {
				console.warn("de-queueing event obj78358." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78358").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78358_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_78360();
function goToPage_78360() {
	window.obj78358_onTap_runningActionsCount = obj78358_onTap_runningActionsCount + 1;
	$("#anchor505")[0].click();
	window.obj78358_onTap_runningActionsCount = window.obj78358_onTap_runningActionsCount - 1;
if (window.obj78358_onTap_runningActionsCount < 0) {
	window.obj78358_onTap_runningActionsCount = 0;
} else if (window.obj78358_onTap_runningActionsCount == 0) {
	obj78358_onTap_actionGroup1();
}
}





















};
obj78358_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78358_onTap_activeActionGroupIndex = -1;
		$("#obj78358").trigger("obj78358_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78358) {
				console.warn("de-queueing event obj78358." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78358").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78358_onTap_activeActionGroupIndex = 1;
	





















};
obj78290_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_onTouchDown_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj78290");
//	action: dragDrop
//	target: obj78290 
dragDrop_78293();
function dragDrop_78293() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj78290_onTouchDown_runningActionsCount = obj78290_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj78290');
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
	  	containerNode = $('#obj78348');
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
    	window.obj78290_onTouchDown_runningActionsCount = window.obj78290_onTouchDown_runningActionsCount - 1;
if (window.obj78290_onTouchDown_runningActionsCount < 0) {
	window.obj78290_onTouchDown_runningActionsCount = 0;
} else if (window.obj78290_onTouchDown_runningActionsCount == 0) {
	obj78290_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj78342","#obj78346","#obj78344");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_78293 = false;
    	var dropped_id_78293;
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
					dropped_78293 = true;
					dropped_id_78293 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_78293) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj78290").trigger('SCActionDragDrop78293_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj78290_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78290_onTouchDown_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj78290 
move_92362();
function move_92362() {
	window.obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_runningActionsCount = obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj78290");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 231;
	var moveY = 543;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_runningActionsCount = window.obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj78290_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78311();
function runjs_78311() {
	window.obj78290_droppedInsideTargetActions_3_runningActionsCount = obj78290_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78344").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj78290_droppedInsideTargetActions_3_runningActionsCount = window.obj78290_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj78290_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78312();
function runjs_78312() {
	window.obj78290_droppedInsideTargetActions_3_runningActionsCount = obj78290_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78344").css("border-color", "#C00000"); $("#obj78344").css("border-width", "2px"); $("#obj78344").css("border-style", "solid"); $("#obj78344").css("border-radius", "10px"); $("#obj78344").css("-webkit-border-radius", "10px"); $("#obj78344").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj78290_droppedInsideTargetActions_3_runningActionsCount = window.obj78290_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj78290_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_78313();
function switchText_78313() {
	window.obj78290_droppedInsideTargetActions_3_runningActionsCount = obj78290_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78288_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78288_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78288").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78288_content");
			setTimeout(function () {
				window.obj78290_droppedInsideTargetActions_3_runningActionsCount = window.obj78290_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj78288 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78290_droppedInsideTargetActions_3_runningActionsCount = window.obj78290_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj78290_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj78290 
move_78314();
function move_78314() {
	window.obj78290_droppedInsideTargetActions_3_runningActionsCount = obj78290_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj78290");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 231;
	var moveY = 543;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj78290_droppedInsideTargetActions_3_runningActionsCount = window.obj78290_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj78290_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_78315();
function runjs_78315() {
	window.obj78290_droppedInsideTargetActions_3_runningActionsCount = obj78290_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78344").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj78290_droppedInsideTargetActions_3_runningActionsCount = window.obj78290_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj78290_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_78316();
function runjs_78316() {
	window.obj78290_droppedInsideTargetActions_3_runningActionsCount = obj78290_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78344").css("border-color", "#000000"); $("#obj78344").css("border-width", "1px"); $("#obj78344").css("border-style", "solid"); $("#obj78344").css("border-radius", "15px"); $("#obj78344").css("-webkit-border-radius", "15px"); $("#obj78344").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj78290_droppedInsideTargetActions_3_runningActionsCount = window.obj78290_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj78290_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_78317();
function runjs_78317() {
	window.obj78290_droppedInsideTargetActions_3_runningActionsCount = obj78290_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78290").css("border-color", "rgba(0,0,0,0)"); $("#obj78290").css("border-width", "0px"); $("#obj78290").css("border-style", "solid"); $("#obj78290").css("border-radius", "20px"); $("#obj78290").css("-webkit-border-radius", "20px"); $("#obj78290").css("-moz-border-radius", "20px"); $("#obj78290_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj78290_droppedInsideTargetActions_3_runningActionsCount = window.obj78290_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj78290_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_78318();
function switchText_78318() {
	window.obj78290_droppedInsideTargetActions_3_runningActionsCount = obj78290_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78288_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78288_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78288").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78288_content");
			setTimeout(function () {
				window.obj78290_droppedInsideTargetActions_3_runningActionsCount = window.obj78290_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj78288 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78290_droppedInsideTargetActions_3_runningActionsCount = window.obj78290_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj78290_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj78287 
playAudio_78319();
function playAudio_78319() {
	window.obj78290_droppedInsideTargetActions_3_runningActionsCount = obj78290_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj78287")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj78290_droppedInsideTargetActions_3_runningActionsCount = window.obj78290_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78290_droppedInsideTargetActions_3_runningActionsCount = window.obj78290_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj78290_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj78290_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78301();
function runjs_78301() {
	window.obj78290_droppedInsideTargetActions_2_runningActionsCount = obj78290_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78346").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj78290_droppedInsideTargetActions_2_runningActionsCount = window.obj78290_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj78290_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78302();
function runjs_78302() {
	window.obj78290_droppedInsideTargetActions_2_runningActionsCount = obj78290_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78346").css("border-color", "#C00000"); $("#obj78346").css("border-width", "2px"); $("#obj78346").css("border-style", "solid"); $("#obj78346").css("border-radius", "10px"); $("#obj78346").css("-webkit-border-radius", "10px"); $("#obj78346").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj78290_droppedInsideTargetActions_2_runningActionsCount = window.obj78290_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj78290_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_78303();
function switchText_78303() {
	window.obj78290_droppedInsideTargetActions_2_runningActionsCount = obj78290_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78288_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78288_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78288").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78288_content");
			setTimeout(function () {
				window.obj78290_droppedInsideTargetActions_2_runningActionsCount = window.obj78290_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj78288 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78290_droppedInsideTargetActions_2_runningActionsCount = window.obj78290_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj78290_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj78290 
move_78304();
function move_78304() {
	window.obj78290_droppedInsideTargetActions_2_runningActionsCount = obj78290_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj78290");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 231;
	var moveY = 543;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj78290_droppedInsideTargetActions_2_runningActionsCount = window.obj78290_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj78290_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_78305();
function runjs_78305() {
	window.obj78290_droppedInsideTargetActions_2_runningActionsCount = obj78290_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78346").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj78290_droppedInsideTargetActions_2_runningActionsCount = window.obj78290_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj78290_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_78306();
function runjs_78306() {
	window.obj78290_droppedInsideTargetActions_2_runningActionsCount = obj78290_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78346").css("border-color", "#000000"); $("#obj78346").css("border-width", "1px"); $("#obj78346").css("border-style", "solid"); $("#obj78346").css("border-radius", "15px"); $("#obj78346").css("-webkit-border-radius", "15px"); $("#obj78346").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj78290_droppedInsideTargetActions_2_runningActionsCount = window.obj78290_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj78290_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_78307();
function runjs_78307() {
	window.obj78290_droppedInsideTargetActions_2_runningActionsCount = obj78290_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78290").css("border-color", "rgba(0,0,0,0)"); $("#obj78290").css("border-width", "0px"); $("#obj78290").css("border-style", "solid"); $("#obj78290").css("border-radius", "20px"); $("#obj78290").css("-webkit-border-radius", "20px"); $("#obj78290").css("-moz-border-radius", "20px"); $("#obj78290_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj78290_droppedInsideTargetActions_2_runningActionsCount = window.obj78290_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj78290_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_78308();
function switchText_78308() {
	window.obj78290_droppedInsideTargetActions_2_runningActionsCount = obj78290_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78288_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78288_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78288").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78288_content");
			setTimeout(function () {
				window.obj78290_droppedInsideTargetActions_2_runningActionsCount = window.obj78290_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj78288 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78290_droppedInsideTargetActions_2_runningActionsCount = window.obj78290_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj78290_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj78287 
playAudio_78309();
function playAudio_78309() {
	window.obj78290_droppedInsideTargetActions_2_runningActionsCount = obj78290_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj78287")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj78290_droppedInsideTargetActions_2_runningActionsCount = window.obj78290_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78290_droppedInsideTargetActions_2_runningActionsCount = window.obj78290_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj78290_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj78290_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78295();
function runjs_78295() {
	window.obj78290_droppedInsideTargetActions_runningActionsCount = obj78290_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj78342").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj78290_droppedInsideTargetActions_runningActionsCount = window.obj78290_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj78290_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_78298();
function switchText_78298() {
	window.obj78290_droppedInsideTargetActions_runningActionsCount = obj78290_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78288_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78288_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78288").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78288_content");
			setTimeout(function () {
				window.obj78290_droppedInsideTargetActions_runningActionsCount = window.obj78290_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj78288 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78290_droppedInsideTargetActions_runningActionsCount = window.obj78290_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj78290_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_78296();
function runjs_78296() {
	window.obj78290_droppedInsideTargetActions_runningActionsCount = obj78290_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj78342").css("border-color", "#058E3F"); $("#obj78342").css("border-width", "2px"); $("#obj78342").css("border-style", "solid"); $("#obj78342").css("border-radius", "10px"); $("#obj78342").css("-webkit-border-radius", "10px"); $("#obj78342").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj78290_droppedInsideTargetActions_runningActionsCount = window.obj78290_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj78290_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj78330 
hide_78297();
function hide_78297() {
	var selector = "#obj78330";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj78290_droppedInsideTargetActions_runningActionsCount = obj78290_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj78290_droppedInsideTargetActions_runningActionsCount = window.obj78290_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_78297(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj78290_droppedInsideTargetActions_runningActionsCount = window.obj78290_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj78290_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj78286 
playAudio_78299();
function playAudio_78299() {
	window.obj78290_droppedInsideTargetActions_runningActionsCount = obj78290_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj78286")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj78290_droppedInsideTargetActions_runningActionsCount = window.obj78290_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78290_droppedInsideTargetActions_runningActionsCount = window.obj78290_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj78290_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90300();
function switchText_90300() {
	window.obj78290_droppedInsideTargetActions_runningActionsCount = obj78290_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78288_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78288_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78288").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78288_content");
			setTimeout(function () {
				window.obj78290_droppedInsideTargetActions_runningActionsCount = window.obj78290_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj78288 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78290_droppedInsideTargetActions_runningActionsCount = window.obj78290_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78290_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78290_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78290_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78290_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj78290_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78290_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78290").trigger("obj78290_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78290) {
				console.warn("de-queueing event obj78290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78290_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj78244_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_onTouchDown_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj78244");
//	action: dragDrop
//	target: obj78244 
dragDrop_78247();
function dragDrop_78247() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj78244_onTouchDown_runningActionsCount = obj78244_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj78244');
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
	  	containerNode = $('#obj78348');
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
    	window.obj78244_onTouchDown_runningActionsCount = window.obj78244_onTouchDown_runningActionsCount - 1;
if (window.obj78244_onTouchDown_runningActionsCount < 0) {
	window.obj78244_onTouchDown_runningActionsCount = 0;
} else if (window.obj78244_onTouchDown_runningActionsCount == 0) {
	obj78244_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj78344","#obj78346","#obj78342");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_78247 = false;
    	var dropped_id_78247;
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
					dropped_78247 = true;
					dropped_id_78247 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_78247) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj78244").trigger('SCActionDragDrop78247_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj78244_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78244_onTouchDown_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj78244 
move_92364();
function move_92364() {
	window.obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_runningActionsCount = obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj78244");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 400;
	var moveY = 543;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_runningActionsCount = window.obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj78244_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78265();
function runjs_78265() {
	window.obj78244_droppedInsideTargetActions_3_runningActionsCount = obj78244_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78342").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj78244_droppedInsideTargetActions_3_runningActionsCount = window.obj78244_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj78244_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78266();
function runjs_78266() {
	window.obj78244_droppedInsideTargetActions_3_runningActionsCount = obj78244_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78342").css("border-color", "#C00000"); $("#obj78342").css("border-width", "2px"); $("#obj78342").css("border-style", "solid"); $("#obj78342").css("border-radius", "10px"); $("#obj78342").css("-webkit-border-radius", "10px"); $("#obj78342").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj78244_droppedInsideTargetActions_3_runningActionsCount = window.obj78244_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj78244_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_78267();
function switchText_78267() {
	window.obj78244_droppedInsideTargetActions_3_runningActionsCount = obj78244_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78288_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78288_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78288").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78288_content");
			setTimeout(function () {
				window.obj78244_droppedInsideTargetActions_3_runningActionsCount = window.obj78244_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj78288 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78244_droppedInsideTargetActions_3_runningActionsCount = window.obj78244_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj78244_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj78244 
move_78268();
function move_78268() {
	window.obj78244_droppedInsideTargetActions_3_runningActionsCount = obj78244_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj78244");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 400;
	var moveY = 543;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj78244_droppedInsideTargetActions_3_runningActionsCount = window.obj78244_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj78244_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_78269();
function runjs_78269() {
	window.obj78244_droppedInsideTargetActions_3_runningActionsCount = obj78244_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78342").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj78244_droppedInsideTargetActions_3_runningActionsCount = window.obj78244_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj78244_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_78270();
function runjs_78270() {
	window.obj78244_droppedInsideTargetActions_3_runningActionsCount = obj78244_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78342").css("border-color", "#000000"); $("#obj78342").css("border-width", "1px"); $("#obj78342").css("border-style", "solid"); $("#obj78342").css("border-radius", "15px"); $("#obj78342").css("-webkit-border-radius", "15px"); $("#obj78342").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj78244_droppedInsideTargetActions_3_runningActionsCount = window.obj78244_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj78244_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_78271();
function runjs_78271() {
	window.obj78244_droppedInsideTargetActions_3_runningActionsCount = obj78244_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78244").css("border-color", "rgba(0,0,0,0)"); $("#obj78244").css("border-width", "0px"); $("#obj78244").css("border-style", "solid"); $("#obj78244").css("border-radius", "20px"); $("#obj78244").css("-webkit-border-radius", "20px"); $("#obj78244").css("-moz-border-radius", "20px"); $("#obj78244_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj78244_droppedInsideTargetActions_3_runningActionsCount = window.obj78244_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj78244_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_78272();
function switchText_78272() {
	window.obj78244_droppedInsideTargetActions_3_runningActionsCount = obj78244_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78288_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78288_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78288").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78288_content");
			setTimeout(function () {
				window.obj78244_droppedInsideTargetActions_3_runningActionsCount = window.obj78244_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj78288 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78244_droppedInsideTargetActions_3_runningActionsCount = window.obj78244_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj78244_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj78287 
playAudio_78273();
function playAudio_78273() {
	window.obj78244_droppedInsideTargetActions_3_runningActionsCount = obj78244_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj78287")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj78244_droppedInsideTargetActions_3_runningActionsCount = window.obj78244_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78244_droppedInsideTargetActions_3_runningActionsCount = window.obj78244_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj78244_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj78244_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78255();
function runjs_78255() {
	window.obj78244_droppedInsideTargetActions_2_runningActionsCount = obj78244_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78346").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj78244_droppedInsideTargetActions_2_runningActionsCount = window.obj78244_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj78244_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78256();
function runjs_78256() {
	window.obj78244_droppedInsideTargetActions_2_runningActionsCount = obj78244_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78346").css("border-color", "#C00000"); $("#obj78346").css("border-width", "2px"); $("#obj78346").css("border-style", "solid"); $("#obj78346").css("border-radius", "10px"); $("#obj78346").css("-webkit-border-radius", "10px"); $("#obj78346").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj78244_droppedInsideTargetActions_2_runningActionsCount = window.obj78244_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj78244_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_78257();
function switchText_78257() {
	window.obj78244_droppedInsideTargetActions_2_runningActionsCount = obj78244_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78288_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78288_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78288").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78288_content");
			setTimeout(function () {
				window.obj78244_droppedInsideTargetActions_2_runningActionsCount = window.obj78244_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj78288 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78244_droppedInsideTargetActions_2_runningActionsCount = window.obj78244_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj78244_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj78244 
move_78258();
function move_78258() {
	window.obj78244_droppedInsideTargetActions_2_runningActionsCount = obj78244_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj78244");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 400;
	var moveY = 543;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj78244_droppedInsideTargetActions_2_runningActionsCount = window.obj78244_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj78244_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_78259();
function runjs_78259() {
	window.obj78244_droppedInsideTargetActions_2_runningActionsCount = obj78244_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78346").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj78244_droppedInsideTargetActions_2_runningActionsCount = window.obj78244_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj78244_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_78260();
function runjs_78260() {
	window.obj78244_droppedInsideTargetActions_2_runningActionsCount = obj78244_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78346").css("border-color", "#000000"); $("#obj78346").css("border-width", "1px"); $("#obj78346").css("border-style", "solid"); $("#obj78346").css("border-radius", "15px"); $("#obj78346").css("-webkit-border-radius", "15px"); $("#obj78346").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj78244_droppedInsideTargetActions_2_runningActionsCount = window.obj78244_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj78244_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_78261();
function runjs_78261() {
	window.obj78244_droppedInsideTargetActions_2_runningActionsCount = obj78244_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78244").css("border-color", "rgba(0,0,0,0)"); $("#obj78244").css("border-width", "0px"); $("#obj78244").css("border-style", "solid"); $("#obj78244").css("border-radius", "20px"); $("#obj78244").css("-webkit-border-radius", "20px"); $("#obj78244").css("-moz-border-radius", "20px"); $("#obj78244_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj78244_droppedInsideTargetActions_2_runningActionsCount = window.obj78244_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj78244_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_78262();
function switchText_78262() {
	window.obj78244_droppedInsideTargetActions_2_runningActionsCount = obj78244_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78288_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78288_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78288").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78288_content");
			setTimeout(function () {
				window.obj78244_droppedInsideTargetActions_2_runningActionsCount = window.obj78244_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj78288 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78244_droppedInsideTargetActions_2_runningActionsCount = window.obj78244_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj78244_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj78287 
playAudio_78263();
function playAudio_78263() {
	window.obj78244_droppedInsideTargetActions_2_runningActionsCount = obj78244_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj78287")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj78244_droppedInsideTargetActions_2_runningActionsCount = window.obj78244_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78244_droppedInsideTargetActions_2_runningActionsCount = window.obj78244_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj78244_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj78244_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78249();
function runjs_78249() {
	window.obj78244_droppedInsideTargetActions_runningActionsCount = obj78244_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj78344").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj78244_droppedInsideTargetActions_runningActionsCount = window.obj78244_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj78244_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_78252();
function switchText_78252() {
	window.obj78244_droppedInsideTargetActions_runningActionsCount = obj78244_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78288_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78288_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78288").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78288_content");
			setTimeout(function () {
				window.obj78244_droppedInsideTargetActions_runningActionsCount = window.obj78244_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj78288 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78244_droppedInsideTargetActions_runningActionsCount = window.obj78244_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj78244_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_78250();
function runjs_78250() {
	window.obj78244_droppedInsideTargetActions_runningActionsCount = obj78244_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj78344").css("border-color", "#058E3F"); $("#obj78344").css("border-width", "2px"); $("#obj78344").css("border-style", "solid"); $("#obj78344").css("border-radius", "10px"); $("#obj78344").css("-webkit-border-radius", "10px"); $("#obj78344").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj78244_droppedInsideTargetActions_runningActionsCount = window.obj78244_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj78244_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj78332 
hide_78251();
function hide_78251() {
	var selector = "#obj78332";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj78244_droppedInsideTargetActions_runningActionsCount = obj78244_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj78244_droppedInsideTargetActions_runningActionsCount = window.obj78244_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_78251(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj78244_droppedInsideTargetActions_runningActionsCount = window.obj78244_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj78244_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj78286 
playAudio_78253();
function playAudio_78253() {
	window.obj78244_droppedInsideTargetActions_runningActionsCount = obj78244_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj78286")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj78244_droppedInsideTargetActions_runningActionsCount = window.obj78244_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78244_droppedInsideTargetActions_runningActionsCount = window.obj78244_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj78244_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90301();
function switchText_90301() {
	window.obj78244_droppedInsideTargetActions_runningActionsCount = obj78244_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78288_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78288_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78288").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78288_content");
			setTimeout(function () {
				window.obj78244_droppedInsideTargetActions_runningActionsCount = window.obj78244_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj78288 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78244_droppedInsideTargetActions_runningActionsCount = window.obj78244_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78244_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78244_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78244_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78244_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj78244_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78244_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78244").trigger("obj78244_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78244) {
				console.warn("de-queueing event obj78244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78244_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj78204_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_onTouchDown_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj78204");
//	action: dragDrop
//	target: obj78204 
dragDrop_78207();
function dragDrop_78207() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj78204_onTouchDown_runningActionsCount = obj78204_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj78204');
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
	  	containerNode = $('#obj78348');
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
    	window.obj78204_onTouchDown_runningActionsCount = window.obj78204_onTouchDown_runningActionsCount - 1;
if (window.obj78204_onTouchDown_runningActionsCount < 0) {
	window.obj78204_onTouchDown_runningActionsCount = 0;
} else if (window.obj78204_onTouchDown_runningActionsCount == 0) {
	obj78204_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj78346","#obj78342","#obj78344");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_78207 = false;
    	var dropped_id_78207;
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
					dropped_78207 = true;
					dropped_id_78207 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_78207) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj78204").trigger('SCActionDragDrop78207_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj78204_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78204_onTouchDown_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj78204 
move_92360();
function move_92360() {
	window.obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_runningActionsCount = obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj78204");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 62;
	var moveY = 543;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_runningActionsCount = window.obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj78204_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78225();
function runjs_78225() {
	window.obj78204_droppedInsideTargetActions_3_runningActionsCount = obj78204_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78344").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj78204_droppedInsideTargetActions_3_runningActionsCount = window.obj78204_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj78204_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78226();
function runjs_78226() {
	window.obj78204_droppedInsideTargetActions_3_runningActionsCount = obj78204_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78344").css("border-color", "#C00000"); $("#obj78344").css("border-width", "2px"); $("#obj78344").css("border-style", "solid"); $("#obj78344").css("border-radius", "10px"); $("#obj78344").css("-webkit-border-radius", "10px"); $("#obj78344").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj78204_droppedInsideTargetActions_3_runningActionsCount = window.obj78204_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj78204_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_78227();
function switchText_78227() {
	window.obj78204_droppedInsideTargetActions_3_runningActionsCount = obj78204_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78288_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78288_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78288").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78288_content");
			setTimeout(function () {
				window.obj78204_droppedInsideTargetActions_3_runningActionsCount = window.obj78204_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj78288 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78204_droppedInsideTargetActions_3_runningActionsCount = window.obj78204_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj78204_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj78204 
move_78228();
function move_78228() {
	window.obj78204_droppedInsideTargetActions_3_runningActionsCount = obj78204_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj78204");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 62;
	var moveY = 543;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj78204_droppedInsideTargetActions_3_runningActionsCount = window.obj78204_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj78204_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_78229();
function runjs_78229() {
	window.obj78204_droppedInsideTargetActions_3_runningActionsCount = obj78204_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78344").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj78204_droppedInsideTargetActions_3_runningActionsCount = window.obj78204_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj78204_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_78230();
function runjs_78230() {
	window.obj78204_droppedInsideTargetActions_3_runningActionsCount = obj78204_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78344").css("border-color", "#000000"); $("#obj78344").css("border-width", "1px"); $("#obj78344").css("border-style", "solid"); $("#obj78344").css("border-radius", "15px"); $("#obj78344").css("-webkit-border-radius", "15px"); $("#obj78344").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj78204_droppedInsideTargetActions_3_runningActionsCount = window.obj78204_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj78204_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_78231();
function runjs_78231() {
	window.obj78204_droppedInsideTargetActions_3_runningActionsCount = obj78204_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78204").css("border-color", "rgba(0,0,0,0)"); $("#obj78204").css("border-width", "0px"); $("#obj78204").css("border-style", "solid"); $("#obj78204").css("border-radius", "20px"); $("#obj78204").css("-webkit-border-radius", "20px"); $("#obj78204").css("-moz-border-radius", "20px"); $("#obj78204_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj78204_droppedInsideTargetActions_3_runningActionsCount = window.obj78204_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj78204_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_78232();
function switchText_78232() {
	window.obj78204_droppedInsideTargetActions_3_runningActionsCount = obj78204_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78288_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78288_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78288").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78288_content");
			setTimeout(function () {
				window.obj78204_droppedInsideTargetActions_3_runningActionsCount = window.obj78204_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj78288 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78204_droppedInsideTargetActions_3_runningActionsCount = window.obj78204_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj78204_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj78287 
playAudio_78233();
function playAudio_78233() {
	window.obj78204_droppedInsideTargetActions_3_runningActionsCount = obj78204_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj78287")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj78204_droppedInsideTargetActions_3_runningActionsCount = window.obj78204_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78204_droppedInsideTargetActions_3_runningActionsCount = window.obj78204_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj78204_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj78204_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78215();
function runjs_78215() {
	window.obj78204_droppedInsideTargetActions_2_runningActionsCount = obj78204_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78342").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj78204_droppedInsideTargetActions_2_runningActionsCount = window.obj78204_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj78204_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78216();
function runjs_78216() {
	window.obj78204_droppedInsideTargetActions_2_runningActionsCount = obj78204_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78342").css("border-color", "#C00000"); $("#obj78342").css("border-width", "2px"); $("#obj78342").css("border-style", "solid"); $("#obj78342").css("border-radius", "10px"); $("#obj78342").css("-webkit-border-radius", "10px"); $("#obj78342").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj78204_droppedInsideTargetActions_2_runningActionsCount = window.obj78204_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj78204_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_78217();
function switchText_78217() {
	window.obj78204_droppedInsideTargetActions_2_runningActionsCount = obj78204_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78288_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78288_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78288").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78288_content");
			setTimeout(function () {
				window.obj78204_droppedInsideTargetActions_2_runningActionsCount = window.obj78204_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj78288 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78204_droppedInsideTargetActions_2_runningActionsCount = window.obj78204_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj78204_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj78204 
move_78218();
function move_78218() {
	window.obj78204_droppedInsideTargetActions_2_runningActionsCount = obj78204_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj78204");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 62;
	var moveY = 543;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj78204_droppedInsideTargetActions_2_runningActionsCount = window.obj78204_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj78204_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_78219();
function runjs_78219() {
	window.obj78204_droppedInsideTargetActions_2_runningActionsCount = obj78204_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78342").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj78204_droppedInsideTargetActions_2_runningActionsCount = window.obj78204_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj78204_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_78220();
function runjs_78220() {
	window.obj78204_droppedInsideTargetActions_2_runningActionsCount = obj78204_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78342").css("border-color", "#000000"); $("#obj78342").css("border-width", "1px"); $("#obj78342").css("border-style", "solid"); $("#obj78342").css("border-radius", "15px"); $("#obj78342").css("-webkit-border-radius", "15px"); $("#obj78342").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj78204_droppedInsideTargetActions_2_runningActionsCount = window.obj78204_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj78204_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_78221();
function runjs_78221() {
	window.obj78204_droppedInsideTargetActions_2_runningActionsCount = obj78204_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78204").css("border-color", "rgba(0,0,0,0)"); $("#obj78204").css("border-width", "0px"); $("#obj78204").css("border-style", "solid"); $("#obj78204").css("border-radius", "20px"); $("#obj78204").css("-webkit-border-radius", "20px"); $("#obj78204").css("-moz-border-radius", "20px"); $("#obj78204_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj78204_droppedInsideTargetActions_2_runningActionsCount = window.obj78204_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj78204_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_78222();
function switchText_78222() {
	window.obj78204_droppedInsideTargetActions_2_runningActionsCount = obj78204_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78288_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78288_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78288").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78288_content");
			setTimeout(function () {
				window.obj78204_droppedInsideTargetActions_2_runningActionsCount = window.obj78204_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj78288 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78204_droppedInsideTargetActions_2_runningActionsCount = window.obj78204_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj78204_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj78287 
playAudio_78223();
function playAudio_78223() {
	window.obj78204_droppedInsideTargetActions_2_runningActionsCount = obj78204_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj78287")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj78204_droppedInsideTargetActions_2_runningActionsCount = window.obj78204_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78204_droppedInsideTargetActions_2_runningActionsCount = window.obj78204_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj78204_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj78204_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78209();
function runjs_78209() {
	window.obj78204_droppedInsideTargetActions_runningActionsCount = obj78204_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj78346").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj78204_droppedInsideTargetActions_runningActionsCount = window.obj78204_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj78204_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_78212();
function switchText_78212() {
	window.obj78204_droppedInsideTargetActions_runningActionsCount = obj78204_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78288_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78288_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78288").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78288_content");
			setTimeout(function () {
				window.obj78204_droppedInsideTargetActions_runningActionsCount = window.obj78204_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj78288 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78204_droppedInsideTargetActions_runningActionsCount = window.obj78204_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj78204_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_78210();
function runjs_78210() {
	window.obj78204_droppedInsideTargetActions_runningActionsCount = obj78204_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj78346").css("border-color", "#058E3F"); $("#obj78346").css("border-width", "2px"); $("#obj78346").css("border-style", "solid"); $("#obj78346").css("border-radius", "10px"); $("#obj78346").css("-webkit-border-radius", "10px"); $("#obj78346").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj78204_droppedInsideTargetActions_runningActionsCount = window.obj78204_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj78204_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj78334 
hide_78211();
function hide_78211() {
	var selector = "#obj78334";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj78204_droppedInsideTargetActions_runningActionsCount = obj78204_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj78204_droppedInsideTargetActions_runningActionsCount = window.obj78204_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_78211(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj78204_droppedInsideTargetActions_runningActionsCount = window.obj78204_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj78204_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj78286 
playAudio_78213();
function playAudio_78213() {
	window.obj78204_droppedInsideTargetActions_runningActionsCount = obj78204_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj78286")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj78204_droppedInsideTargetActions_runningActionsCount = window.obj78204_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78204_droppedInsideTargetActions_runningActionsCount = window.obj78204_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj78204_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90299();
function switchText_90299() {
	window.obj78204_droppedInsideTargetActions_runningActionsCount = obj78204_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78288_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78288_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78288").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78288_content");
			setTimeout(function () {
				window.obj78204_droppedInsideTargetActions_runningActionsCount = window.obj78204_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj78288 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78204_droppedInsideTargetActions_runningActionsCount = window.obj78204_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78204_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78204_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78204_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78204_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj78204_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78204_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78204").trigger("obj78204_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78204) {
				console.warn("de-queueing event obj78204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78204_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj78186_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78186_onTap_activeActionGroupIndex = -1;
		$("#obj78186").trigger("obj78186_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78186) {
				console.warn("de-queueing event obj78186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78186_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj78186 
hide_78189();
function hide_78189() {
	var selector = "#obj78186";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj78186_onTap_runningActionsCount = obj78186_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj78186_onTap_runningActionsCount = window.obj78186_onTap_runningActionsCount - 1;
if (window.obj78186_onTap_runningActionsCount < 0) {
	window.obj78186_onTap_runningActionsCount = 0;
} else if (window.obj78186_onTap_runningActionsCount == 0) {
	obj78186_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_78189(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj78186_onTap_runningActionsCount = window.obj78186_onTap_runningActionsCount - 1;
if (window.obj78186_onTap_runningActionsCount < 0) {
	window.obj78186_onTap_runningActionsCount = 0;
} else if (window.obj78186_onTap_runningActionsCount == 0) {
	obj78186_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj78176 
stopMovie_78188();
function stopMovie_78188() {
	window.obj78186_onTap_runningActionsCount = obj78186_onTap_runningActionsCount + 1;
	var myVideo = $("#obj78176")[0];
	myVideo.pause();
	window.obj78186_onTap_runningActionsCount = window.obj78186_onTap_runningActionsCount - 1;
if (window.obj78186_onTap_runningActionsCount < 0) {
	window.obj78186_onTap_runningActionsCount = 0;
} else if (window.obj78186_onTap_runningActionsCount == 0) {
	obj78186_onTap_actionGroup1();
}
}
















};
obj78186_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78186_onTap_activeActionGroupIndex = -1;
		$("#obj78186").trigger("obj78186_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78186) {
				console.warn("de-queueing event obj78186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78186_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj78178
(function(){
	window.obj78186_onTap_runningActionsCount = obj78186_onTap_runningActionsCount + 1;

	var selector = "#obj78178";
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
					window.obj78186_onTap_runningActionsCount = window.obj78186_onTap_runningActionsCount - 1;
if (window.obj78186_onTap_runningActionsCount < 0) {
	window.obj78186_onTap_runningActionsCount = 0;
} else if (window.obj78186_onTap_runningActionsCount == 0) {
	obj78186_onTap_actionGroup2();
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
				window.obj78186_onTap_runningActionsCount = window.obj78186_onTap_runningActionsCount - 1;
if (window.obj78186_onTap_runningActionsCount < 0) {
	window.obj78186_onTap_runningActionsCount = 0;
} else if (window.obj78186_onTap_runningActionsCount == 0) {
	obj78186_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj78186_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78186_onTap_activeActionGroupIndex = -1;
		$("#obj78186").trigger("obj78186_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78186) {
				console.warn("de-queueing event obj78186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78186_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj78176 
move_78191();
function move_78191() {
	window.obj78186_onTap_runningActionsCount = obj78186_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj78176");
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
			window.obj78186_onTap_runningActionsCount = window.obj78186_onTap_runningActionsCount - 1;
if (window.obj78186_onTap_runningActionsCount < 0) {
	window.obj78186_onTap_runningActionsCount = 0;
} else if (window.obj78186_onTap_runningActionsCount == 0) {
	obj78186_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj78186_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78186_onTap_activeActionGroupIndex = -1;
		$("#obj78186").trigger("obj78186_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78186) {
				console.warn("de-queueing event obj78186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78186_onTap_activeActionGroupIndex = 3;
	





















};
obj78178_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78178_onTap_activeActionGroupIndex = -1;
		$("#obj78178").trigger("obj78178_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78178) {
				console.warn("de-queueing event obj78178." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78178").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78178_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj78178 
hide_78181();
function hide_78181() {
	var selector = "#obj78178";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj78178_onTap_runningActionsCount = obj78178_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj78178_onTap_runningActionsCount = window.obj78178_onTap_runningActionsCount - 1;
if (window.obj78178_onTap_runningActionsCount < 0) {
	window.obj78178_onTap_runningActionsCount = 0;
} else if (window.obj78178_onTap_runningActionsCount == 0) {
	obj78178_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_78181(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj78178_onTap_runningActionsCount = window.obj78178_onTap_runningActionsCount - 1;
if (window.obj78178_onTap_runningActionsCount < 0) {
	window.obj78178_onTap_runningActionsCount = 0;
} else if (window.obj78178_onTap_runningActionsCount == 0) {
	obj78178_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj78176 
playPauseMovie_78180();
function playPauseMovie_78180() {
	window.obj78178_onTap_runningActionsCount = obj78178_onTap_runningActionsCount + 1;
	var myVideo = $("#obj78176")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj78178_onTap_runningActionsCount = window.obj78178_onTap_runningActionsCount - 1;
if (window.obj78178_onTap_runningActionsCount < 0) {
	window.obj78178_onTap_runningActionsCount = 0;
} else if (window.obj78178_onTap_runningActionsCount == 0) {
	obj78178_onTap_actionGroup1();
}
}

















};
obj78178_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78178_onTap_activeActionGroupIndex = -1;
		$("#obj78178").trigger("obj78178_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78178) {
				console.warn("de-queueing event obj78178." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78178").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78178_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj78186
(function(){
	window.obj78178_onTap_runningActionsCount = obj78178_onTap_runningActionsCount + 1;

	var selector = "#obj78186";
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
					window.obj78178_onTap_runningActionsCount = window.obj78178_onTap_runningActionsCount - 1;
if (window.obj78178_onTap_runningActionsCount < 0) {
	window.obj78178_onTap_runningActionsCount = 0;
} else if (window.obj78178_onTap_runningActionsCount == 0) {
	obj78178_onTap_actionGroup2();
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
				window.obj78178_onTap_runningActionsCount = window.obj78178_onTap_runningActionsCount - 1;
if (window.obj78178_onTap_runningActionsCount < 0) {
	window.obj78178_onTap_runningActionsCount = 0;
} else if (window.obj78178_onTap_runningActionsCount == 0) {
	obj78178_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj78178_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78178_onTap_activeActionGroupIndex = -1;
		$("#obj78178").trigger("obj78178_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78178) {
				console.warn("de-queueing event obj78178." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78178").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78178_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj78176 
move_78183();
function move_78183() {
	window.obj78178_onTap_runningActionsCount = obj78178_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj78176");
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
			window.obj78178_onTap_runningActionsCount = window.obj78178_onTap_runningActionsCount - 1;
if (window.obj78178_onTap_runningActionsCount < 0) {
	window.obj78178_onTap_runningActionsCount = 0;
} else if (window.obj78178_onTap_runningActionsCount == 0) {
	obj78178_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj78178_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78178_onTap_activeActionGroupIndex = -1;
		$("#obj78178").trigger("obj78178_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78178) {
				console.warn("de-queueing event obj78178." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78178").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78178_onTap_activeActionGroupIndex = 3;
	





















};
obj87901_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87901_onTap_activeActionGroupIndex = -1;
		$("#obj87901").trigger("obj87901_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87901) {
				console.warn("de-queueing event obj87901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87901_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87906 
stopAudio_87903();
function stopAudio_87903() {
	window.obj87901_onTap_runningActionsCount = obj87901_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87906")[0];
	myAudio.pause();
	window.obj87901_onTap_runningActionsCount = window.obj87901_onTap_runningActionsCount - 1;
if (window.obj87901_onTap_runningActionsCount < 0) {
	window.obj87901_onTap_runningActionsCount = 0;
} else if (window.obj87901_onTap_runningActionsCount == 0) {
	obj87901_onTap_actionGroup1();
}
}








};
obj87901_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87901_onTap_activeActionGroupIndex = -1;
		$("#obj87901").trigger("obj87901_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87901) {
				console.warn("de-queueing event obj87901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87901_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87901 
hide_87904();
function hide_87904() {
	var selector = "#obj87901";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87901_onTap_runningActionsCount = obj87901_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87901_onTap_runningActionsCount = window.obj87901_onTap_runningActionsCount - 1;
if (window.obj87901_onTap_runningActionsCount < 0) {
	window.obj87901_onTap_runningActionsCount = 0;
} else if (window.obj87901_onTap_runningActionsCount == 0) {
	obj87901_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87904(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87901_onTap_runningActionsCount = window.obj87901_onTap_runningActionsCount - 1;
if (window.obj87901_onTap_runningActionsCount < 0) {
	window.obj87901_onTap_runningActionsCount = 0;
} else if (window.obj87901_onTap_runningActionsCount == 0) {
	obj87901_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87901_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87901_onTap_activeActionGroupIndex = -1;
		$("#obj87901").trigger("obj87901_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87901) {
				console.warn("de-queueing event obj87901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87901_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87896
(function(){
	window.obj87901_onTap_runningActionsCount = obj87901_onTap_runningActionsCount + 1;

	var selector = "#obj87896";
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
					window.obj87901_onTap_runningActionsCount = window.obj87901_onTap_runningActionsCount - 1;
if (window.obj87901_onTap_runningActionsCount < 0) {
	window.obj87901_onTap_runningActionsCount = 0;
} else if (window.obj87901_onTap_runningActionsCount == 0) {
	obj87901_onTap_actionGroup3();
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
				window.obj87901_onTap_runningActionsCount = window.obj87901_onTap_runningActionsCount - 1;
if (window.obj87901_onTap_runningActionsCount < 0) {
	window.obj87901_onTap_runningActionsCount = 0;
} else if (window.obj87901_onTap_runningActionsCount == 0) {
	obj87901_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87901_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87901_onTap_activeActionGroupIndex = -1;
		$("#obj87901").trigger("obj87901_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87901) {
				console.warn("de-queueing event obj87901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87901_onTap_activeActionGroupIndex = 3;
	





















};
obj87896_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87896_onTap_activeActionGroupIndex = -1;
		$("#obj87896").trigger("obj87896_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87896) {
				console.warn("de-queueing event obj87896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87896_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87896 
hide_87898();
function hide_87898() {
	var selector = "#obj87896";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87896_onTap_runningActionsCount = obj87896_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87896_onTap_runningActionsCount = window.obj87896_onTap_runningActionsCount - 1;
if (window.obj87896_onTap_runningActionsCount < 0) {
	window.obj87896_onTap_runningActionsCount = 0;
} else if (window.obj87896_onTap_runningActionsCount == 0) {
	obj87896_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87898(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87896_onTap_runningActionsCount = window.obj87896_onTap_runningActionsCount - 1;
if (window.obj87896_onTap_runningActionsCount < 0) {
	window.obj87896_onTap_runningActionsCount = 0;
} else if (window.obj87896_onTap_runningActionsCount == 0) {
	obj87896_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87896_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87896_onTap_activeActionGroupIndex = -1;
		$("#obj87896").trigger("obj87896_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87896) {
				console.warn("de-queueing event obj87896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87896_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87901
(function(){
	window.obj87896_onTap_runningActionsCount = obj87896_onTap_runningActionsCount + 1;

	var selector = "#obj87901";
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
					window.obj87896_onTap_runningActionsCount = window.obj87896_onTap_runningActionsCount - 1;
if (window.obj87896_onTap_runningActionsCount < 0) {
	window.obj87896_onTap_runningActionsCount = 0;
} else if (window.obj87896_onTap_runningActionsCount == 0) {
	obj87896_onTap_actionGroup2();
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
				window.obj87896_onTap_runningActionsCount = window.obj87896_onTap_runningActionsCount - 1;
if (window.obj87896_onTap_runningActionsCount < 0) {
	window.obj87896_onTap_runningActionsCount = 0;
} else if (window.obj87896_onTap_runningActionsCount == 0) {
	obj87896_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87896_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87896_onTap_activeActionGroupIndex = -1;
		$("#obj87896").trigger("obj87896_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87896) {
				console.warn("de-queueing event obj87896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87896_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87906 
playAudio_87900();
function playAudio_87900() {
	window.obj87896_onTap_runningActionsCount = obj87896_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87906")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj87896_onTap_runningActionsCount = window.obj87896_onTap_runningActionsCount - 1;
if (window.obj87896_onTap_runningActionsCount < 0) {
	window.obj87896_onTap_runningActionsCount = 0;
} else if (window.obj87896_onTap_runningActionsCount == 0) {
	obj87896_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87896_onTap_runningActionsCount = window.obj87896_onTap_runningActionsCount - 1;
if (window.obj87896_onTap_runningActionsCount < 0) {
	window.obj87896_onTap_runningActionsCount = 0;
} else if (window.obj87896_onTap_runningActionsCount == 0) {
	obj87896_onTap_actionGroup3();
}
	}
}









};
obj87896_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87896_onTap_activeActionGroupIndex = -1;
		$("#obj87896").trigger("obj87896_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87896) {
				console.warn("de-queueing event obj87896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87896_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj78365: Event Touch Down
 *
 */
$("#obj78365").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78365_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78365_onTap is still running");
	return;
}
var obj78365_onTap_runningActionsCount = 0;
var obj78365_onTap_loopCount = 0;
obj78365_onTap_actionGroup0();
});










/*
 *
 *   obj78362: Event Touch Down
 *
 */
$("#obj78362").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78362_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78362_onTap is still running");
	return;
}
var obj78362_onTap_runningActionsCount = 0;
var obj78362_onTap_loopCount = 0;
obj78362_onTap_actionGroup0();
});










/*
 *
 *   obj78358: Event Touch Down
 *
 */
$("#obj78358").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78358_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78358_onTap is still running");
	return;
}
var obj78358_onTap_runningActionsCount = 0;
var obj78358_onTap_loopCount = 0;
obj78358_onTap_actionGroup0();
});























































































































































/*
 *
 *   obj78290: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj78290");
	var winTarget = document.getElementById("obj78290");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj78290").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj78290_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj78290_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj78290_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78290_onTouchDown is still running");
	return;
}
var obj78290_onTouchDown_runningActionsCount = 0;
var obj78290_onTouchDown_loopCount = 0;
obj78290_onTouchDown_actionGroup0();
});



/*
 *
 *   obj78290: Event SCActionDragDrop78293_droppedOutsideTargetActions
 *
 */
$("#obj78290").bind("SCActionDragDrop78293_droppedOutsideTargetActions", function(event) {
	if (window.obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78290_SCActionDragDrop78293_droppedOutsideTargetActions is still running");
	return;
}
var obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_runningActionsCount = 0;
var obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_loopCount = 0;
obj78290_SCActionDragDrop78293_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj78290: Event droppedInsideTargetActions_3
 *
 */
$("#obj78290").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj78290_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78290_droppedInsideTargetActions_3 is still running");
	return;
}
var obj78290_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj78290_droppedInsideTargetActions_3_loopCount = 0;
obj78290_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj78290: Event droppedInsideTargetActions_2
 *
 */
$("#obj78290").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj78290_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78290_droppedInsideTargetActions_2 is still running");
	return;
}
var obj78290_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj78290_droppedInsideTargetActions_2_loopCount = 0;
obj78290_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj78290: Event droppedInsideTargetActions
 *
 */
$("#obj78290").bind("droppedInsideTargetActions", function(event) {
	if (window.obj78290_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78290_droppedInsideTargetActions is still running");
	return;
}
var obj78290_droppedInsideTargetActions_runningActionsCount = 0;
var obj78290_droppedInsideTargetActions_loopCount = 0;
obj78290_droppedInsideTargetActions_actionGroup0();
});














































/*
 *
 *   obj78244: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj78244");
	var winTarget = document.getElementById("obj78244");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj78244").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj78244_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj78244_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj78244_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78244_onTouchDown is still running");
	return;
}
var obj78244_onTouchDown_runningActionsCount = 0;
var obj78244_onTouchDown_loopCount = 0;
obj78244_onTouchDown_actionGroup0();
});



/*
 *
 *   obj78244: Event SCActionDragDrop78247_droppedOutsideTargetActions
 *
 */
$("#obj78244").bind("SCActionDragDrop78247_droppedOutsideTargetActions", function(event) {
	if (window.obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78244_SCActionDragDrop78247_droppedOutsideTargetActions is still running");
	return;
}
var obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_runningActionsCount = 0;
var obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_loopCount = 0;
obj78244_SCActionDragDrop78247_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj78244: Event droppedInsideTargetActions_3
 *
 */
$("#obj78244").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj78244_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78244_droppedInsideTargetActions_3 is still running");
	return;
}
var obj78244_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj78244_droppedInsideTargetActions_3_loopCount = 0;
obj78244_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj78244: Event droppedInsideTargetActions_2
 *
 */
$("#obj78244").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj78244_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78244_droppedInsideTargetActions_2 is still running");
	return;
}
var obj78244_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj78244_droppedInsideTargetActions_2_loopCount = 0;
obj78244_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj78244: Event droppedInsideTargetActions
 *
 */
$("#obj78244").bind("droppedInsideTargetActions", function(event) {
	if (window.obj78244_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78244_droppedInsideTargetActions is still running");
	return;
}
var obj78244_droppedInsideTargetActions_runningActionsCount = 0;
var obj78244_droppedInsideTargetActions_loopCount = 0;
obj78244_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj78204: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj78204");
	var winTarget = document.getElementById("obj78204");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj78204").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj78204_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj78204_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj78204_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78204_onTouchDown is still running");
	return;
}
var obj78204_onTouchDown_runningActionsCount = 0;
var obj78204_onTouchDown_loopCount = 0;
obj78204_onTouchDown_actionGroup0();
});



/*
 *
 *   obj78204: Event SCActionDragDrop78207_droppedOutsideTargetActions
 *
 */
$("#obj78204").bind("SCActionDragDrop78207_droppedOutsideTargetActions", function(event) {
	if (window.obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78204_SCActionDragDrop78207_droppedOutsideTargetActions is still running");
	return;
}
var obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_runningActionsCount = 0;
var obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_loopCount = 0;
obj78204_SCActionDragDrop78207_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj78204: Event droppedInsideTargetActions_3
 *
 */
$("#obj78204").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj78204_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78204_droppedInsideTargetActions_3 is still running");
	return;
}
var obj78204_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj78204_droppedInsideTargetActions_3_loopCount = 0;
obj78204_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj78204: Event droppedInsideTargetActions_2
 *
 */
$("#obj78204").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj78204_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78204_droppedInsideTargetActions_2 is still running");
	return;
}
var obj78204_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj78204_droppedInsideTargetActions_2_loopCount = 0;
obj78204_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj78204: Event droppedInsideTargetActions
 *
 */
$("#obj78204").bind("droppedInsideTargetActions", function(event) {
	if (window.obj78204_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78204_droppedInsideTargetActions is still running");
	return;
}
var obj78204_droppedInsideTargetActions_runningActionsCount = 0;
var obj78204_droppedInsideTargetActions_loopCount = 0;
obj78204_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj78186: Event Touch Down
 *
 */
$("#obj78186").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78186_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78186_onTap is still running");
	return;
}
var obj78186_onTap_runningActionsCount = 0;
var obj78186_onTap_loopCount = 0;
obj78186_onTap_actionGroup0();
});










/*
 *
 *   obj78178: Event Touch Down
 *
 */
$("#obj78178").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78178_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78178_onTap is still running");
	return;
}
var obj78178_onTap_runningActionsCount = 0;
var obj78178_onTap_loopCount = 0;
obj78178_onTap_actionGroup0();
});










/*
 *
 *   obj87901: Event Touch Down
 *
 */
$("#obj87901").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87901_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87901_onTap is still running");
	return;
}
var obj87901_onTap_runningActionsCount = 0;
var obj87901_onTap_loopCount = 0;
obj87901_onTap_actionGroup0();
});










/*
 *
 *   obj87896: Event Touch Down
 *
 */
$("#obj87896").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87896_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87896_onTap is still running");
	return;
}
var obj87896_onTap_runningActionsCount = 0;
var obj87896_onTap_loopCount = 0;
obj87896_onTap_actionGroup0();
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
	
$("#obj78368").trigger('SCEventShow');
$("#obj78365").trigger('SCEventShow');
$("#obj78362").trigger('SCEventShow');
$("#obj78358").trigger('SCEventShow');
$("#obj78356").trigger('SCEventShow');
$("#obj78354").trigger('SCEventShow');
$("#obj78352").trigger('SCEventShow');
$("#obj78350").trigger('SCEventShow');
$("#obj78348").trigger('SCEventShow');
$("#obj78346").trigger('SCEventShow');
$("#obj78344").trigger('SCEventShow');
$("#obj78342").trigger('SCEventShow');
$("#obj78340").trigger('SCEventShow');
$("#obj78338").trigger('SCEventShow');
$("#obj78336").trigger('SCEventShow');
$("#obj78334").trigger('SCEventShow');
$("#obj78332").trigger('SCEventShow');
$("#obj78330").trigger('SCEventShow');
$("#obj78290").trigger('SCEventShow');
$("#obj78288").trigger('SCEventShow');
$("#obj78287").trigger('SCEventShow');
$("#obj78286").trigger('SCEventShow');
$("#obj78284").trigger('SCEventShow');
$("#obj78244").trigger('SCEventShow');
$("#obj78204").trigger('SCEventShow');
$("#obj78186").trigger('SCEventShow');
$("#obj78178").trigger('SCEventShow');
$("#obj87901").trigger('SCEventShow');
$("#obj87896").trigger('SCEventShow');
$("#obj87906").trigger('SCEventShow');
$("#obj94801").trigger('SCEventShow');
$("#obj78176").trigger('SCEventShow');
	
});