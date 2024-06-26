pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 48920;
pubcoder.page.title = pubcoder.page.title || "175";
pubcoder.page.number = pubcoder.page.number || 175;
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
var obj49079_onTap_activeActionGroupIndex = -1;
var obj49079_onTap_runningActionsCount = 0;
var obj49079_onTap_loopCount = 0;
var obj49076_onTap_activeActionGroupIndex = -1;
var obj49076_onTap_runningActionsCount = 0;
var obj49076_onTap_loopCount = 0;
var obj49072_onTap_activeActionGroupIndex = -1;
var obj49072_onTap_runningActionsCount = 0;
var obj49072_onTap_loopCount = 0;
var obj49003_onDrag_activeActionGroupIndex = -1;
var obj49003_onDrag_runningActionsCount = 0;
var obj49003_onDrag_loopCount = 0;
var obj49003_onTouchDown_activeActionGroupIndex = -1;
var obj49003_onTouchDown_runningActionsCount = 0;
var obj49003_onTouchDown_loopCount = 0;
var obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_runningActionsCount = 0;
var obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_loopCount = 0;
var obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj49003_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj49003_droppedInsideTargetActions_3_loopCount = 0;
var obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj49003_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj49003_droppedInsideTargetActions_2_loopCount = 0;
var obj49003_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj49003_droppedInsideTargetActions_runningActionsCount = 0;
var obj49003_droppedInsideTargetActions_loopCount = 0;
var obj48960_onDrag_activeActionGroupIndex = -1;
var obj48960_onDrag_runningActionsCount = 0;
var obj48960_onDrag_loopCount = 0;
var obj48960_onTouchDown_activeActionGroupIndex = -1;
var obj48960_onTouchDown_runningActionsCount = 0;
var obj48960_onTouchDown_loopCount = 0;
var obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_runningActionsCount = 0;
var obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_loopCount = 0;
var obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj48960_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj48960_droppedInsideTargetActions_3_loopCount = 0;
var obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj48960_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj48960_droppedInsideTargetActions_2_loopCount = 0;
var obj48960_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj48960_droppedInsideTargetActions_runningActionsCount = 0;
var obj48960_droppedInsideTargetActions_loopCount = 0;
var obj48921_onDrag_activeActionGroupIndex = -1;
var obj48921_onDrag_runningActionsCount = 0;
var obj48921_onDrag_loopCount = 0;
var obj48921_onTouchDown_activeActionGroupIndex = -1;
var obj48921_onTouchDown_runningActionsCount = 0;
var obj48921_onTouchDown_loopCount = 0;
var obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_runningActionsCount = 0;
var obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_loopCount = 0;
var obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj48921_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj48921_droppedInsideTargetActions_3_loopCount = 0;
var obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj48921_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj48921_droppedInsideTargetActions_2_loopCount = 0;
var obj48921_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj48921_droppedInsideTargetActions_runningActionsCount = 0;
var obj48921_droppedInsideTargetActions_loopCount = 0;
var obj67806_onTap_activeActionGroupIndex = -1;
var obj67806_onTap_runningActionsCount = 0;
var obj67806_onTap_loopCount = 0;
var obj67798_onTap_activeActionGroupIndex = -1;
var obj67798_onTap_runningActionsCount = 0;
var obj67798_onTap_loopCount = 0;
var obj88981_onTap_activeActionGroupIndex = -1;
var obj88981_onTap_runningActionsCount = 0;
var obj88981_onTap_loopCount = 0;
var obj88976_onTap_activeActionGroupIndex = -1;
var obj88976_onTap_runningActionsCount = 0;
var obj88976_onTap_loopCount = 0;
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
		
obj49079_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49079_onTap_activeActionGroupIndex = -1;
		$("#obj49079").trigger("obj49079_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49079) {
				console.warn("de-queueing event obj49079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49079_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_49081();
function goToPage_49081() {
	window.obj49079_onTap_runningActionsCount = obj49079_onTap_runningActionsCount + 1;
	$("#anchor1028")[0].click();
	window.obj49079_onTap_runningActionsCount = window.obj49079_onTap_runningActionsCount - 1;
if (window.obj49079_onTap_runningActionsCount < 0) {
	window.obj49079_onTap_runningActionsCount = 0;
} else if (window.obj49079_onTap_runningActionsCount == 0) {
	obj49079_onTap_actionGroup1();
}
}





















};
obj49079_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49079_onTap_activeActionGroupIndex = -1;
		$("#obj49079").trigger("obj49079_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49079) {
				console.warn("de-queueing event obj49079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49079_onTap_activeActionGroupIndex = 1;
	





















};
obj49076_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49076_onTap_activeActionGroupIndex = -1;
		$("#obj49076").trigger("obj49076_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49076) {
				console.warn("de-queueing event obj49076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49076_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_49078();
function goToPage_49078() {
	window.obj49076_onTap_runningActionsCount = obj49076_onTap_runningActionsCount + 1;
	$("#anchor1029")[0].click();
	window.obj49076_onTap_runningActionsCount = window.obj49076_onTap_runningActionsCount - 1;
if (window.obj49076_onTap_runningActionsCount < 0) {
	window.obj49076_onTap_runningActionsCount = 0;
} else if (window.obj49076_onTap_runningActionsCount == 0) {
	obj49076_onTap_actionGroup1();
}
}





















};
obj49076_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49076_onTap_activeActionGroupIndex = -1;
		$("#obj49076").trigger("obj49076_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49076) {
				console.warn("de-queueing event obj49076." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49076").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49076_onTap_activeActionGroupIndex = 1;
	





















};
obj49072_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49072_onTap_activeActionGroupIndex = -1;
		$("#obj49072").trigger("obj49072_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49072) {
				console.warn("de-queueing event obj49072." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49072").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49072_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_49074();
function goToPage_49074() {
	window.obj49072_onTap_runningActionsCount = obj49072_onTap_runningActionsCount + 1;
	$("#anchor1030")[0].click();
	window.obj49072_onTap_runningActionsCount = window.obj49072_onTap_runningActionsCount - 1;
if (window.obj49072_onTap_runningActionsCount < 0) {
	window.obj49072_onTap_runningActionsCount = 0;
} else if (window.obj49072_onTap_runningActionsCount == 0) {
	obj49072_onTap_actionGroup1();
}
}





















};
obj49072_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49072_onTap_activeActionGroupIndex = -1;
		$("#obj49072").trigger("obj49072_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49072) {
				console.warn("de-queueing event obj49072." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49072").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49072_onTap_activeActionGroupIndex = 1;
	





















};
obj49003_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_onTouchDown_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj49003");
//	action: dragDrop
//	target: obj49003 
dragDrop_49006();
function dragDrop_49006() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj49003_onTouchDown_runningActionsCount = obj49003_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj49003');
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
	  	containerNode = $('#obj49062');
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
    	window.obj49003_onTouchDown_runningActionsCount = window.obj49003_onTouchDown_runningActionsCount - 1;
if (window.obj49003_onTouchDown_runningActionsCount < 0) {
	window.obj49003_onTouchDown_runningActionsCount = 0;
} else if (window.obj49003_onTouchDown_runningActionsCount == 0) {
	obj49003_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj49050","#obj49054","#obj49052");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_49006 = false;
    	var dropped_id_49006;
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
					dropped_49006 = true;
					dropped_id_49006 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_49006) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj49003").trigger('SCActionDragDrop49006_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj49003_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49003_onTouchDown_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj49003 
move_92741();
function move_92741() {
	window.obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_runningActionsCount = obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj49003");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 69;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_runningActionsCount = window.obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj49003_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_49029();
function runjs_49029() {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = obj49003_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49052").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj49003_droppedInsideTargetActions_3_runningActionsCount = window.obj49003_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj49003_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_49030();
function runjs_49030() {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = obj49003_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49052").css("border-color", "#C00000"); $("#obj49052").css("border-width", "2px"); $("#obj49052").css("border-style", "solid"); $("#obj49052").css("border-radius", "10px"); $("#obj49052").css("-webkit-border-radius", "10px"); $("#obj49052").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj49003_droppedInsideTargetActions_3_runningActionsCount = window.obj49003_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj49003_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj49046 
hide_49031();
function hide_49031() {
	var selector = "#obj49046";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = obj49003_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj49003_droppedInsideTargetActions_3_runningActionsCount = window.obj49003_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_49031(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj49003_droppedInsideTargetActions_3_runningActionsCount = window.obj49003_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj49003_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_49032();
function runjs_49032() {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = obj49003_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49003").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj49003_droppedInsideTargetActions_3_runningActionsCount = window.obj49003_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj49003_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_49033();
function switchText_49033() {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = obj49003_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49001_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49001_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49001").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49001_content");
			setTimeout(function () {
				window.obj49003_droppedInsideTargetActions_3_runningActionsCount = window.obj49003_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj49001 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj49003_droppedInsideTargetActions_3_runningActionsCount = window.obj49003_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj49003_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj49003 
move_49034();
function move_49034() {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = obj49003_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj49003");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 69;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj49003_droppedInsideTargetActions_3_runningActionsCount = window.obj49003_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj49003_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_49035();
function runjs_49035() {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = obj49003_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49052").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj49003_droppedInsideTargetActions_3_runningActionsCount = window.obj49003_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj49003_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_49036();
function runjs_49036() {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = obj49003_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49052").css("border-color", "#000000"); $("#obj49052").css("border-width", "1px"); $("#obj49052").css("border-style", "solid"); $("#obj49052").css("border-radius", "10px"); $("#obj49052").css("-webkit-border-radius", "10px"); $("#obj49052").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj49003_droppedInsideTargetActions_3_runningActionsCount = window.obj49003_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj49003_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj49046
(function(){
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = obj49003_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj49046";
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
					window.obj49003_droppedInsideTargetActions_3_runningActionsCount = window.obj49003_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj49003_droppedInsideTargetActions_3_runningActionsCount = window.obj49003_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj49003_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_49038();
function runjs_49038() {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = obj49003_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49003").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj49003_droppedInsideTargetActions_3_runningActionsCount = window.obj49003_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj49003_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_49039();
function runjs_49039() {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = obj49003_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49003").css("border-color", "rgba(0,0,0,0)"); $("#obj49003").css("border-width", "0px"); $("#obj49003").css("border-style", "solid"); $("#obj49003").css("border-radius", "10px"); $("#obj49003").css("-webkit-border-radius", "10px"); $("#obj49003").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj49003_droppedInsideTargetActions_3_runningActionsCount = window.obj49003_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj49003_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj49000 
playAudio_49040();
function playAudio_49040() {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = obj49003_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj49000")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj49003_droppedInsideTargetActions_3_runningActionsCount = window.obj49003_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj49003_droppedInsideTargetActions_3_runningActionsCount = window.obj49003_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj49003_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_49041();
function switchText_49041() {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = obj49003_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49001_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49001_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49001").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49001_content");
			setTimeout(function () {
				window.obj49003_droppedInsideTargetActions_3_runningActionsCount = window.obj49003_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj49001 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj49003_droppedInsideTargetActions_3_runningActionsCount = window.obj49003_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj49003_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj49003_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_49015();
function runjs_49015() {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = obj49003_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49054").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj49003_droppedInsideTargetActions_2_runningActionsCount = window.obj49003_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj49003_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_49016();
function runjs_49016() {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = obj49003_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49054").css("border-color", "#C00000"); $("#obj49054").css("border-width", "2px"); $("#obj49054").css("border-style", "solid"); $("#obj49054").css("border-radius", "10px"); $("#obj49054").css("-webkit-border-radius", "10px"); $("#obj49054").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj49003_droppedInsideTargetActions_2_runningActionsCount = window.obj49003_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj49003_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj49048 
hide_49017();
function hide_49017() {
	var selector = "#obj49048";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = obj49003_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj49003_droppedInsideTargetActions_2_runningActionsCount = window.obj49003_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_49017(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj49003_droppedInsideTargetActions_2_runningActionsCount = window.obj49003_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj49003_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_49018();
function runjs_49018() {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = obj49003_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49003").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj49003_droppedInsideTargetActions_2_runningActionsCount = window.obj49003_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj49003_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_49019();
function switchText_49019() {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = obj49003_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49001_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49001_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49001").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49001_content");
			setTimeout(function () {
				window.obj49003_droppedInsideTargetActions_2_runningActionsCount = window.obj49003_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj49001 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj49003_droppedInsideTargetActions_2_runningActionsCount = window.obj49003_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj49003_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj49003 
move_49020();
function move_49020() {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = obj49003_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj49003");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 69;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj49003_droppedInsideTargetActions_2_runningActionsCount = window.obj49003_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj49003_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_49021();
function runjs_49021() {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = obj49003_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49054").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj49003_droppedInsideTargetActions_2_runningActionsCount = window.obj49003_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj49003_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_49022();
function runjs_49022() {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = obj49003_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49054").css("border-color", "#000000"); $("#obj49054").css("border-width", "1px"); $("#obj49054").css("border-style", "solid"); $("#obj49054").css("border-radius", "10px"); $("#obj49054").css("-webkit-border-radius", "10px"); $("#obj49054").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj49003_droppedInsideTargetActions_2_runningActionsCount = window.obj49003_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj49003_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj49048
(function(){
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = obj49003_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj49048";
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
					window.obj49003_droppedInsideTargetActions_2_runningActionsCount = window.obj49003_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj49003_droppedInsideTargetActions_2_runningActionsCount = window.obj49003_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj49003_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_49024();
function runjs_49024() {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = obj49003_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49003").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj49003_droppedInsideTargetActions_2_runningActionsCount = window.obj49003_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj49003_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_49025();
function runjs_49025() {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = obj49003_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49003").css("border-color", "rgba(0,0,0,0)"); $("#obj49003").css("border-width", "0px"); $("#obj49003").css("border-style", "solid"); $("#obj49003").css("border-radius", "10px"); $("#obj49003").css("-webkit-border-radius", "10px"); $("#obj49003").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj49003_droppedInsideTargetActions_2_runningActionsCount = window.obj49003_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj49003_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj49000 
playAudio_49026();
function playAudio_49026() {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = obj49003_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj49000")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj49003_droppedInsideTargetActions_2_runningActionsCount = window.obj49003_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj49003_droppedInsideTargetActions_2_runningActionsCount = window.obj49003_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj49003_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_49027();
function switchText_49027() {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = obj49003_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49001_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49001_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49001").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49001_content");
			setTimeout(function () {
				window.obj49003_droppedInsideTargetActions_2_runningActionsCount = window.obj49003_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj49001 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj49003_droppedInsideTargetActions_2_runningActionsCount = window.obj49003_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj49003_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj49003_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_49008();
function runjs_49008() {
	window.obj49003_droppedInsideTargetActions_runningActionsCount = obj49003_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj49050").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj49003_droppedInsideTargetActions_runningActionsCount = window.obj49003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj49003_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_49009();
function runjs_49009() {
	window.obj49003_droppedInsideTargetActions_runningActionsCount = obj49003_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj49050").css("border-color", "#058E3F"); $("#obj49050").css("border-width", "2px"); $("#obj49050").css("border-style", "solid"); $("#obj49050").css("border-radius", "10px"); $("#obj49050").css("-webkit-border-radius", "10px"); $("#obj49050").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj49003_droppedInsideTargetActions_runningActionsCount = window.obj49003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj49003_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj49044 
hide_49010();
function hide_49010() {
	var selector = "#obj49044";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj49003_droppedInsideTargetActions_runningActionsCount = obj49003_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj49003_droppedInsideTargetActions_runningActionsCount = window.obj49003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_49010(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj49003_droppedInsideTargetActions_runningActionsCount = window.obj49003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj49003_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_49011();
function runjs_49011() {
	window.obj49003_droppedInsideTargetActions_runningActionsCount = obj49003_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj49003").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj49003_droppedInsideTargetActions_runningActionsCount = window.obj49003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj49003_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_49012();
function switchText_49012() {
	window.obj49003_droppedInsideTargetActions_runningActionsCount = obj49003_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49001_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49001_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49001").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49001_content");
			setTimeout(function () {
				window.obj49003_droppedInsideTargetActions_runningActionsCount = window.obj49003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj49001 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj49003_droppedInsideTargetActions_runningActionsCount = window.obj49003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj49003_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj48999 
playAudio_49013();
function playAudio_49013() {
	window.obj49003_droppedInsideTargetActions_runningActionsCount = obj49003_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj48999")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj49003_droppedInsideTargetActions_runningActionsCount = window.obj49003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj49003_droppedInsideTargetActions_runningActionsCount = window.obj49003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49003_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj49003_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49003").trigger("obj49003_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49003) {
				console.warn("de-queueing event obj49003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49003_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj48960_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_onTouchDown_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj48960");
//	action: dragDrop
//	target: obj48960 
dragDrop_48963();
function dragDrop_48963() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj48960_onTouchDown_runningActionsCount = obj48960_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj48960');
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
	  	containerNode = $('#obj49062');
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
    	window.obj48960_onTouchDown_runningActionsCount = window.obj48960_onTouchDown_runningActionsCount - 1;
if (window.obj48960_onTouchDown_runningActionsCount < 0) {
	window.obj48960_onTouchDown_runningActionsCount = 0;
} else if (window.obj48960_onTouchDown_runningActionsCount == 0) {
	obj48960_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj49052","#obj49054","#obj49050");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_48963 = false;
    	var dropped_id_48963;
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
					dropped_48963 = true;
					dropped_id_48963 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_48963) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj48960").trigger('SCActionDragDrop48963_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj48960_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48960_onTouchDown_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj48960 
move_92745();
function move_92745() {
	window.obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_runningActionsCount = obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj48960");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 388;
	var moveY = 634;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_runningActionsCount = window.obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj48960_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_48986();
function runjs_48986() {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = obj48960_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49050").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj48960_droppedInsideTargetActions_3_runningActionsCount = window.obj48960_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj48960_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_48987();
function runjs_48987() {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = obj48960_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49050").css("border-color", "#C00000"); $("#obj49050").css("border-width", "2px"); $("#obj49050").css("border-style", "solid"); $("#obj49050").css("border-radius", "10px"); $("#obj49050").css("-webkit-border-radius", "10px"); $("#obj49050").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj48960_droppedInsideTargetActions_3_runningActionsCount = window.obj48960_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj48960_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj49044 
hide_48988();
function hide_48988() {
	var selector = "#obj49044";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = obj48960_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj48960_droppedInsideTargetActions_3_runningActionsCount = window.obj48960_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_48988(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj48960_droppedInsideTargetActions_3_runningActionsCount = window.obj48960_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj48960_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_48989();
function runjs_48989() {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = obj48960_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj48960").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj48960_droppedInsideTargetActions_3_runningActionsCount = window.obj48960_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj48960_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_48990();
function switchText_48990() {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = obj48960_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49001_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49001_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49001").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49001_content");
			setTimeout(function () {
				window.obj48960_droppedInsideTargetActions_3_runningActionsCount = window.obj48960_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj49001 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48960_droppedInsideTargetActions_3_runningActionsCount = window.obj48960_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj48960_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj48960 
move_48991();
function move_48991() {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = obj48960_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj48960");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 388;
	var moveY = 634;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj48960_droppedInsideTargetActions_3_runningActionsCount = window.obj48960_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj48960_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_48992();
function runjs_48992() {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = obj48960_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49050").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj48960_droppedInsideTargetActions_3_runningActionsCount = window.obj48960_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj48960_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_48993();
function runjs_48993() {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = obj48960_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49050").css("border-color", "#000000"); $("#obj49050").css("border-width", "1px"); $("#obj49050").css("border-style", "solid"); $("#obj49050").css("border-radius", "10px"); $("#obj49050").css("-webkit-border-radius", "10px"); $("#obj49050").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj48960_droppedInsideTargetActions_3_runningActionsCount = window.obj48960_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj48960_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj49044
(function(){
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = obj48960_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj49044";
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
					window.obj48960_droppedInsideTargetActions_3_runningActionsCount = window.obj48960_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj48960_droppedInsideTargetActions_3_runningActionsCount = window.obj48960_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj48960_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_48995();
function runjs_48995() {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = obj48960_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj48960").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj48960_droppedInsideTargetActions_3_runningActionsCount = window.obj48960_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj48960_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_48996();
function runjs_48996() {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = obj48960_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj48960").css("border-color", "rgba(0,0,0,0)"); $("#obj48960").css("border-width", "0px"); $("#obj48960").css("border-style", "solid"); $("#obj48960").css("border-radius", "10px"); $("#obj48960").css("-webkit-border-radius", "10px"); $("#obj48960").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj48960_droppedInsideTargetActions_3_runningActionsCount = window.obj48960_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj48960_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj49000 
playAudio_48997();
function playAudio_48997() {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = obj48960_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj49000")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj48960_droppedInsideTargetActions_3_runningActionsCount = window.obj48960_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj48960_droppedInsideTargetActions_3_runningActionsCount = window.obj48960_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj48960_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_48998();
function switchText_48998() {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = obj48960_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49001_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49001_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49001").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49001_content");
			setTimeout(function () {
				window.obj48960_droppedInsideTargetActions_3_runningActionsCount = window.obj48960_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj49001 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48960_droppedInsideTargetActions_3_runningActionsCount = window.obj48960_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj48960_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj48960_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_48972();
function runjs_48972() {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = obj48960_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49054").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj48960_droppedInsideTargetActions_2_runningActionsCount = window.obj48960_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj48960_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_48973();
function runjs_48973() {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = obj48960_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49054").css("border-color", "#C00000"); $("#obj49054").css("border-width", "2px"); $("#obj49054").css("border-style", "solid"); $("#obj49054").css("border-radius", "10px"); $("#obj49054").css("-webkit-border-radius", "10px"); $("#obj49054").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj48960_droppedInsideTargetActions_2_runningActionsCount = window.obj48960_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj48960_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj49048 
hide_48974();
function hide_48974() {
	var selector = "#obj49048";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = obj48960_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj48960_droppedInsideTargetActions_2_runningActionsCount = window.obj48960_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_48974(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj48960_droppedInsideTargetActions_2_runningActionsCount = window.obj48960_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj48960_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_48975();
function runjs_48975() {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = obj48960_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj48960").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj48960_droppedInsideTargetActions_2_runningActionsCount = window.obj48960_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj48960_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_48976();
function switchText_48976() {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = obj48960_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49001_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49001_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49001").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49001_content");
			setTimeout(function () {
				window.obj48960_droppedInsideTargetActions_2_runningActionsCount = window.obj48960_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj49001 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48960_droppedInsideTargetActions_2_runningActionsCount = window.obj48960_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj48960_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj48960 
move_48977();
function move_48977() {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = obj48960_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj48960");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 388;
	var moveY = 634;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj48960_droppedInsideTargetActions_2_runningActionsCount = window.obj48960_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj48960_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_48978();
function runjs_48978() {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = obj48960_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49054").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj48960_droppedInsideTargetActions_2_runningActionsCount = window.obj48960_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj48960_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_48979();
function runjs_48979() {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = obj48960_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49054").css("border-color", "#000000"); $("#obj49054").css("border-width", "1px"); $("#obj49054").css("border-style", "solid"); $("#obj49054").css("border-radius", "10px"); $("#obj49054").css("-webkit-border-radius", "10px"); $("#obj49054").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj48960_droppedInsideTargetActions_2_runningActionsCount = window.obj48960_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj48960_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj49048
(function(){
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = obj48960_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj49048";
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
					window.obj48960_droppedInsideTargetActions_2_runningActionsCount = window.obj48960_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj48960_droppedInsideTargetActions_2_runningActionsCount = window.obj48960_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj48960_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_48981();
function runjs_48981() {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = obj48960_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj48960").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj48960_droppedInsideTargetActions_2_runningActionsCount = window.obj48960_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj48960_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_48982();
function runjs_48982() {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = obj48960_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj48960").css("border-color", "rgba(0,0,0,0)"); $("#obj48960").css("border-width", "0px"); $("#obj48960").css("border-style", "solid"); $("#obj48960").css("border-radius", "10px"); $("#obj48960").css("-webkit-border-radius", "10px"); $("#obj48960").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj48960_droppedInsideTargetActions_2_runningActionsCount = window.obj48960_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj48960_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj49000 
playAudio_48983();
function playAudio_48983() {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = obj48960_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj49000")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj48960_droppedInsideTargetActions_2_runningActionsCount = window.obj48960_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj48960_droppedInsideTargetActions_2_runningActionsCount = window.obj48960_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj48960_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_48984();
function switchText_48984() {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = obj48960_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49001_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49001_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49001").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49001_content");
			setTimeout(function () {
				window.obj48960_droppedInsideTargetActions_2_runningActionsCount = window.obj48960_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj49001 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48960_droppedInsideTargetActions_2_runningActionsCount = window.obj48960_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj48960_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj48960_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_48965();
function runjs_48965() {
	window.obj48960_droppedInsideTargetActions_runningActionsCount = obj48960_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj49052").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj48960_droppedInsideTargetActions_runningActionsCount = window.obj48960_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj48960_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_48966();
function runjs_48966() {
	window.obj48960_droppedInsideTargetActions_runningActionsCount = obj48960_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj49052").css("border-color", "#058E3F"); $("#obj49052").css("border-width", "2px"); $("#obj49052").css("border-style", "solid"); $("#obj49052").css("border-radius", "10px"); $("#obj49052").css("-webkit-border-radius", "10px"); $("#obj49052").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj48960_droppedInsideTargetActions_runningActionsCount = window.obj48960_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj48960_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj49046 
hide_48967();
function hide_48967() {
	var selector = "#obj49046";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj48960_droppedInsideTargetActions_runningActionsCount = obj48960_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj48960_droppedInsideTargetActions_runningActionsCount = window.obj48960_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_48967(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj48960_droppedInsideTargetActions_runningActionsCount = window.obj48960_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj48960_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_48968();
function runjs_48968() {
	window.obj48960_droppedInsideTargetActions_runningActionsCount = obj48960_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj48960").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj48960_droppedInsideTargetActions_runningActionsCount = window.obj48960_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj48960_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_48969();
function switchText_48969() {
	window.obj48960_droppedInsideTargetActions_runningActionsCount = obj48960_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49001_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49001_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49001").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49001_content");
			setTimeout(function () {
				window.obj48960_droppedInsideTargetActions_runningActionsCount = window.obj48960_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj49001 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48960_droppedInsideTargetActions_runningActionsCount = window.obj48960_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj48960_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj48999 
playAudio_48970();
function playAudio_48970() {
	window.obj48960_droppedInsideTargetActions_runningActionsCount = obj48960_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj48999")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj48960_droppedInsideTargetActions_runningActionsCount = window.obj48960_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj48960_droppedInsideTargetActions_runningActionsCount = window.obj48960_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj48960_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj48960_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj48960_droppedInsideTargetActions_runningActionsCount == 0) {
	obj48960_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj48960_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48960_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj48960").trigger("obj48960_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48960) {
				console.warn("de-queueing event obj48960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48960_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj48921_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_onTouchDown_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj48921");
//	action: dragDrop
//	target: obj48921 
dragDrop_48924();
function dragDrop_48924() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj48921_onTouchDown_runningActionsCount = obj48921_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj48921');
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
	  	containerNode = $('#obj49062');
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
    	window.obj48921_onTouchDown_runningActionsCount = window.obj48921_onTouchDown_runningActionsCount - 1;
if (window.obj48921_onTouchDown_runningActionsCount < 0) {
	window.obj48921_onTouchDown_runningActionsCount = 0;
} else if (window.obj48921_onTouchDown_runningActionsCount == 0) {
	obj48921_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj49054","#obj49052","#obj49050");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_48924 = false;
    	var dropped_id_48924;
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
					dropped_48924 = true;
					dropped_id_48924 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_48924) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj48921").trigger('SCActionDragDrop48924_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj48921_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48921_onTouchDown_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj48921 
move_92743();
function move_92743() {
	window.obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_runningActionsCount = obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj48921");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 235;
	var moveY = 634;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_runningActionsCount = window.obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj48921_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_48947();
function runjs_48947() {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = obj48921_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49050").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj48921_droppedInsideTargetActions_3_runningActionsCount = window.obj48921_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj48921_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_48948();
function runjs_48948() {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = obj48921_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49050").css("border-color", "#C00000"); $("#obj49050").css("border-width", "2px"); $("#obj49050").css("border-style", "solid"); $("#obj49050").css("border-radius", "10px"); $("#obj49050").css("-webkit-border-radius", "10px"); $("#obj49050").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj48921_droppedInsideTargetActions_3_runningActionsCount = window.obj48921_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj48921_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj49044 
hide_48949();
function hide_48949() {
	var selector = "#obj49044";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = obj48921_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj48921_droppedInsideTargetActions_3_runningActionsCount = window.obj48921_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_48949(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj48921_droppedInsideTargetActions_3_runningActionsCount = window.obj48921_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj48921_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_48950();
function runjs_48950() {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = obj48921_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj48921").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj48921_droppedInsideTargetActions_3_runningActionsCount = window.obj48921_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj48921_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_48951();
function switchText_48951() {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = obj48921_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49001_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49001_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49001").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49001_content");
			setTimeout(function () {
				window.obj48921_droppedInsideTargetActions_3_runningActionsCount = window.obj48921_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj49001 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48921_droppedInsideTargetActions_3_runningActionsCount = window.obj48921_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj48921_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj48921 
move_48952();
function move_48952() {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = obj48921_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj48921");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 235;
	var moveY = 634;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj48921_droppedInsideTargetActions_3_runningActionsCount = window.obj48921_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj48921_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_48953();
function runjs_48953() {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = obj48921_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49050").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj48921_droppedInsideTargetActions_3_runningActionsCount = window.obj48921_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj48921_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_48954();
function runjs_48954() {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = obj48921_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49050").css("border-color", "#000000"); $("#obj49050").css("border-width", "1px"); $("#obj49050").css("border-style", "solid"); $("#obj49050").css("border-radius", "10px"); $("#obj49050").css("-webkit-border-radius", "10px"); $("#obj49050").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj48921_droppedInsideTargetActions_3_runningActionsCount = window.obj48921_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj48921_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj49044
(function(){
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = obj48921_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj49044";
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
					window.obj48921_droppedInsideTargetActions_3_runningActionsCount = window.obj48921_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj48921_droppedInsideTargetActions_3_runningActionsCount = window.obj48921_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj48921_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_48956();
function runjs_48956() {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = obj48921_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj48921").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj48921_droppedInsideTargetActions_3_runningActionsCount = window.obj48921_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj48921_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_48957();
function runjs_48957() {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = obj48921_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj48921").css("border-color", "rgba(0,0,0,0)"); $("#obj48921").css("border-width", "0px"); $("#obj48921").css("border-style", "solid"); $("#obj48921").css("border-radius", "10px"); $("#obj48921").css("-webkit-border-radius", "10px"); $("#obj48921").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj48921_droppedInsideTargetActions_3_runningActionsCount = window.obj48921_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj48921_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj49000 
playAudio_48958();
function playAudio_48958() {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = obj48921_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj49000")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj48921_droppedInsideTargetActions_3_runningActionsCount = window.obj48921_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj48921_droppedInsideTargetActions_3_runningActionsCount = window.obj48921_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj48921_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_48959();
function switchText_48959() {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = obj48921_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49001_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49001_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49001").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49001_content");
			setTimeout(function () {
				window.obj48921_droppedInsideTargetActions_3_runningActionsCount = window.obj48921_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj49001 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48921_droppedInsideTargetActions_3_runningActionsCount = window.obj48921_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj48921_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj48921_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_48933();
function runjs_48933() {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = obj48921_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49052").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj48921_droppedInsideTargetActions_2_runningActionsCount = window.obj48921_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj48921_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_48934();
function runjs_48934() {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = obj48921_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49052").css("border-color", "#C00000"); $("#obj49052").css("border-width", "2px"); $("#obj49052").css("border-style", "solid"); $("#obj49052").css("border-radius", "10px"); $("#obj49052").css("-webkit-border-radius", "10px"); $("#obj49052").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj48921_droppedInsideTargetActions_2_runningActionsCount = window.obj48921_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj48921_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj49046 
hide_48935();
function hide_48935() {
	var selector = "#obj49046";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = obj48921_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj48921_droppedInsideTargetActions_2_runningActionsCount = window.obj48921_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_48935(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj48921_droppedInsideTargetActions_2_runningActionsCount = window.obj48921_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj48921_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_48936();
function runjs_48936() {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = obj48921_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj48921").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj48921_droppedInsideTargetActions_2_runningActionsCount = window.obj48921_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj48921_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_48937();
function switchText_48937() {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = obj48921_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49001_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49001_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49001").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49001_content");
			setTimeout(function () {
				window.obj48921_droppedInsideTargetActions_2_runningActionsCount = window.obj48921_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj49001 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48921_droppedInsideTargetActions_2_runningActionsCount = window.obj48921_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj48921_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj48921 
move_48938();
function move_48938() {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = obj48921_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj48921");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 235;
	var moveY = 634;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj48921_droppedInsideTargetActions_2_runningActionsCount = window.obj48921_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj48921_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_48939();
function runjs_48939() {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = obj48921_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49052").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj48921_droppedInsideTargetActions_2_runningActionsCount = window.obj48921_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj48921_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_48940();
function runjs_48940() {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = obj48921_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49052").css("border-color", "#000000"); $("#obj49052").css("border-width", "1px"); $("#obj49052").css("border-style", "solid"); $("#obj49052").css("border-radius", "10px"); $("#obj49052").css("-webkit-border-radius", "10px"); $("#obj49052").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj48921_droppedInsideTargetActions_2_runningActionsCount = window.obj48921_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj48921_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj49046
(function(){
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = obj48921_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj49046";
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
					window.obj48921_droppedInsideTargetActions_2_runningActionsCount = window.obj48921_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj48921_droppedInsideTargetActions_2_runningActionsCount = window.obj48921_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj48921_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_48942();
function runjs_48942() {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = obj48921_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj48921").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj48921_droppedInsideTargetActions_2_runningActionsCount = window.obj48921_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj48921_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_48943();
function runjs_48943() {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = obj48921_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj48921").css("border-color", "rgba(0,0,0,0)"); $("#obj48921").css("border-width", "0px"); $("#obj48921").css("border-style", "solid"); $("#obj48921").css("border-radius", "10px"); $("#obj48921").css("-webkit-border-radius", "10px"); $("#obj48921").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj48921_droppedInsideTargetActions_2_runningActionsCount = window.obj48921_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj48921_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj49000 
playAudio_48944();
function playAudio_48944() {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = obj48921_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj49000")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj48921_droppedInsideTargetActions_2_runningActionsCount = window.obj48921_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj48921_droppedInsideTargetActions_2_runningActionsCount = window.obj48921_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj48921_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_48945();
function switchText_48945() {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = obj48921_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49001_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49001_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49001").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49001_content");
			setTimeout(function () {
				window.obj48921_droppedInsideTargetActions_2_runningActionsCount = window.obj48921_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj49001 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48921_droppedInsideTargetActions_2_runningActionsCount = window.obj48921_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj48921_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj48921_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_48926();
function runjs_48926() {
	window.obj48921_droppedInsideTargetActions_runningActionsCount = obj48921_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj49054").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj48921_droppedInsideTargetActions_runningActionsCount = window.obj48921_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj48921_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_48927();
function runjs_48927() {
	window.obj48921_droppedInsideTargetActions_runningActionsCount = obj48921_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj49054").css("border-color", "#058E3F"); $("#obj49054").css("border-width", "2px"); $("#obj49054").css("border-style", "solid"); $("#obj49054").css("border-radius", "10px"); $("#obj49054").css("-webkit-border-radius", "10px"); $("#obj49054").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj48921_droppedInsideTargetActions_runningActionsCount = window.obj48921_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj48921_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj49048 
hide_48928();
function hide_48928() {
	var selector = "#obj49048";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj48921_droppedInsideTargetActions_runningActionsCount = obj48921_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj48921_droppedInsideTargetActions_runningActionsCount = window.obj48921_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_48928(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj48921_droppedInsideTargetActions_runningActionsCount = window.obj48921_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj48921_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_48929();
function runjs_48929() {
	window.obj48921_droppedInsideTargetActions_runningActionsCount = obj48921_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj48921").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj48921_droppedInsideTargetActions_runningActionsCount = window.obj48921_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj48921_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_48930();
function switchText_48930() {
	window.obj48921_droppedInsideTargetActions_runningActionsCount = obj48921_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49001_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49001_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49001").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49001_content");
			setTimeout(function () {
				window.obj48921_droppedInsideTargetActions_runningActionsCount = window.obj48921_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj49001 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj48921_droppedInsideTargetActions_runningActionsCount = window.obj48921_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj48921_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj48999 
playAudio_48931();
function playAudio_48931() {
	window.obj48921_droppedInsideTargetActions_runningActionsCount = obj48921_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj48999")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj48921_droppedInsideTargetActions_runningActionsCount = window.obj48921_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj48921_droppedInsideTargetActions_runningActionsCount = window.obj48921_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj48921_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj48921_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj48921_droppedInsideTargetActions_runningActionsCount == 0) {
	obj48921_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj48921_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj48921_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj48921").trigger("obj48921_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 48921) {
				console.warn("de-queueing event obj48921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj48921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj48921_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj67806_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67806_onTap_activeActionGroupIndex = -1;
		$("#obj67806").trigger("obj67806_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67806) {
				console.warn("de-queueing event obj67806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67806_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67806 
hide_67809();
function hide_67809() {
	var selector = "#obj67806";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67806_onTap_runningActionsCount = obj67806_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67806_onTap_runningActionsCount = window.obj67806_onTap_runningActionsCount - 1;
if (window.obj67806_onTap_runningActionsCount < 0) {
	window.obj67806_onTap_runningActionsCount = 0;
} else if (window.obj67806_onTap_runningActionsCount == 0) {
	obj67806_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67809(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67806_onTap_runningActionsCount = window.obj67806_onTap_runningActionsCount - 1;
if (window.obj67806_onTap_runningActionsCount < 0) {
	window.obj67806_onTap_runningActionsCount = 0;
} else if (window.obj67806_onTap_runningActionsCount == 0) {
	obj67806_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67812 
stopMovie_67808();
function stopMovie_67808() {
	window.obj67806_onTap_runningActionsCount = obj67806_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67812")[0];
	myVideo.pause();
	window.obj67806_onTap_runningActionsCount = window.obj67806_onTap_runningActionsCount - 1;
if (window.obj67806_onTap_runningActionsCount < 0) {
	window.obj67806_onTap_runningActionsCount = 0;
} else if (window.obj67806_onTap_runningActionsCount == 0) {
	obj67806_onTap_actionGroup1();
}
}
















};
obj67806_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67806_onTap_activeActionGroupIndex = -1;
		$("#obj67806").trigger("obj67806_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67806) {
				console.warn("de-queueing event obj67806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67806_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67798
(function(){
	window.obj67806_onTap_runningActionsCount = obj67806_onTap_runningActionsCount + 1;

	var selector = "#obj67798";
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
					window.obj67806_onTap_runningActionsCount = window.obj67806_onTap_runningActionsCount - 1;
if (window.obj67806_onTap_runningActionsCount < 0) {
	window.obj67806_onTap_runningActionsCount = 0;
} else if (window.obj67806_onTap_runningActionsCount == 0) {
	obj67806_onTap_actionGroup2();
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
				window.obj67806_onTap_runningActionsCount = window.obj67806_onTap_runningActionsCount - 1;
if (window.obj67806_onTap_runningActionsCount < 0) {
	window.obj67806_onTap_runningActionsCount = 0;
} else if (window.obj67806_onTap_runningActionsCount == 0) {
	obj67806_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67806_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67806_onTap_activeActionGroupIndex = -1;
		$("#obj67806").trigger("obj67806_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67806) {
				console.warn("de-queueing event obj67806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67806_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67812 
move_67811();
function move_67811() {
	window.obj67806_onTap_runningActionsCount = obj67806_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67812");
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
			window.obj67806_onTap_runningActionsCount = window.obj67806_onTap_runningActionsCount - 1;
if (window.obj67806_onTap_runningActionsCount < 0) {
	window.obj67806_onTap_runningActionsCount = 0;
} else if (window.obj67806_onTap_runningActionsCount == 0) {
	obj67806_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67806_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67806_onTap_activeActionGroupIndex = -1;
		$("#obj67806").trigger("obj67806_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67806) {
				console.warn("de-queueing event obj67806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67806_onTap_activeActionGroupIndex = 3;
	





















};
obj67798_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67798_onTap_activeActionGroupIndex = -1;
		$("#obj67798").trigger("obj67798_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67798) {
				console.warn("de-queueing event obj67798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67798_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67798 
hide_67801();
function hide_67801() {
	var selector = "#obj67798";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67798_onTap_runningActionsCount = obj67798_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67798_onTap_runningActionsCount = window.obj67798_onTap_runningActionsCount - 1;
if (window.obj67798_onTap_runningActionsCount < 0) {
	window.obj67798_onTap_runningActionsCount = 0;
} else if (window.obj67798_onTap_runningActionsCount == 0) {
	obj67798_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67801(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67798_onTap_runningActionsCount = window.obj67798_onTap_runningActionsCount - 1;
if (window.obj67798_onTap_runningActionsCount < 0) {
	window.obj67798_onTap_runningActionsCount = 0;
} else if (window.obj67798_onTap_runningActionsCount == 0) {
	obj67798_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67812 
playPauseMovie_67800();
function playPauseMovie_67800() {
	window.obj67798_onTap_runningActionsCount = obj67798_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67812")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67798_onTap_runningActionsCount = window.obj67798_onTap_runningActionsCount - 1;
if (window.obj67798_onTap_runningActionsCount < 0) {
	window.obj67798_onTap_runningActionsCount = 0;
} else if (window.obj67798_onTap_runningActionsCount == 0) {
	obj67798_onTap_actionGroup1();
}
}

















};
obj67798_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67798_onTap_activeActionGroupIndex = -1;
		$("#obj67798").trigger("obj67798_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67798) {
				console.warn("de-queueing event obj67798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67798_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67806
(function(){
	window.obj67798_onTap_runningActionsCount = obj67798_onTap_runningActionsCount + 1;

	var selector = "#obj67806";
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
					window.obj67798_onTap_runningActionsCount = window.obj67798_onTap_runningActionsCount - 1;
if (window.obj67798_onTap_runningActionsCount < 0) {
	window.obj67798_onTap_runningActionsCount = 0;
} else if (window.obj67798_onTap_runningActionsCount == 0) {
	obj67798_onTap_actionGroup2();
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
				window.obj67798_onTap_runningActionsCount = window.obj67798_onTap_runningActionsCount - 1;
if (window.obj67798_onTap_runningActionsCount < 0) {
	window.obj67798_onTap_runningActionsCount = 0;
} else if (window.obj67798_onTap_runningActionsCount == 0) {
	obj67798_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67798_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67798_onTap_activeActionGroupIndex = -1;
		$("#obj67798").trigger("obj67798_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67798) {
				console.warn("de-queueing event obj67798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67798_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67812 
move_67803();
function move_67803() {
	window.obj67798_onTap_runningActionsCount = obj67798_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67812");
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
			window.obj67798_onTap_runningActionsCount = window.obj67798_onTap_runningActionsCount - 1;
if (window.obj67798_onTap_runningActionsCount < 0) {
	window.obj67798_onTap_runningActionsCount = 0;
} else if (window.obj67798_onTap_runningActionsCount == 0) {
	obj67798_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67798_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67798_onTap_activeActionGroupIndex = -1;
		$("#obj67798").trigger("obj67798_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67798) {
				console.warn("de-queueing event obj67798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67798_onTap_activeActionGroupIndex = 3;
	





















};
obj88981_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88981_onTap_activeActionGroupIndex = -1;
		$("#obj88981").trigger("obj88981_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88981) {
				console.warn("de-queueing event obj88981." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88981").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88981_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88986 
stopAudio_88983();
function stopAudio_88983() {
	window.obj88981_onTap_runningActionsCount = obj88981_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88986")[0];
	myAudio.pause();
	window.obj88981_onTap_runningActionsCount = window.obj88981_onTap_runningActionsCount - 1;
if (window.obj88981_onTap_runningActionsCount < 0) {
	window.obj88981_onTap_runningActionsCount = 0;
} else if (window.obj88981_onTap_runningActionsCount == 0) {
	obj88981_onTap_actionGroup1();
}
}








};
obj88981_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88981_onTap_activeActionGroupIndex = -1;
		$("#obj88981").trigger("obj88981_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88981) {
				console.warn("de-queueing event obj88981." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88981").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88981_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88981 
hide_88984();
function hide_88984() {
	var selector = "#obj88981";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88981_onTap_runningActionsCount = obj88981_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88981_onTap_runningActionsCount = window.obj88981_onTap_runningActionsCount - 1;
if (window.obj88981_onTap_runningActionsCount < 0) {
	window.obj88981_onTap_runningActionsCount = 0;
} else if (window.obj88981_onTap_runningActionsCount == 0) {
	obj88981_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88984(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88981_onTap_runningActionsCount = window.obj88981_onTap_runningActionsCount - 1;
if (window.obj88981_onTap_runningActionsCount < 0) {
	window.obj88981_onTap_runningActionsCount = 0;
} else if (window.obj88981_onTap_runningActionsCount == 0) {
	obj88981_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88981_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88981_onTap_activeActionGroupIndex = -1;
		$("#obj88981").trigger("obj88981_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88981) {
				console.warn("de-queueing event obj88981." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88981").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88981_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88976
(function(){
	window.obj88981_onTap_runningActionsCount = obj88981_onTap_runningActionsCount + 1;

	var selector = "#obj88976";
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
					window.obj88981_onTap_runningActionsCount = window.obj88981_onTap_runningActionsCount - 1;
if (window.obj88981_onTap_runningActionsCount < 0) {
	window.obj88981_onTap_runningActionsCount = 0;
} else if (window.obj88981_onTap_runningActionsCount == 0) {
	obj88981_onTap_actionGroup3();
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
				window.obj88981_onTap_runningActionsCount = window.obj88981_onTap_runningActionsCount - 1;
if (window.obj88981_onTap_runningActionsCount < 0) {
	window.obj88981_onTap_runningActionsCount = 0;
} else if (window.obj88981_onTap_runningActionsCount == 0) {
	obj88981_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88981_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88981_onTap_activeActionGroupIndex = -1;
		$("#obj88981").trigger("obj88981_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88981) {
				console.warn("de-queueing event obj88981." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88981").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88981_onTap_activeActionGroupIndex = 3;
	





















};
obj88976_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88976_onTap_activeActionGroupIndex = -1;
		$("#obj88976").trigger("obj88976_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88976) {
				console.warn("de-queueing event obj88976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88976_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88976 
hide_88978();
function hide_88978() {
	var selector = "#obj88976";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88976_onTap_runningActionsCount = obj88976_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88976_onTap_runningActionsCount = window.obj88976_onTap_runningActionsCount - 1;
if (window.obj88976_onTap_runningActionsCount < 0) {
	window.obj88976_onTap_runningActionsCount = 0;
} else if (window.obj88976_onTap_runningActionsCount == 0) {
	obj88976_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88978(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88976_onTap_runningActionsCount = window.obj88976_onTap_runningActionsCount - 1;
if (window.obj88976_onTap_runningActionsCount < 0) {
	window.obj88976_onTap_runningActionsCount = 0;
} else if (window.obj88976_onTap_runningActionsCount == 0) {
	obj88976_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88976_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88976_onTap_activeActionGroupIndex = -1;
		$("#obj88976").trigger("obj88976_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88976) {
				console.warn("de-queueing event obj88976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88976_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88981
(function(){
	window.obj88976_onTap_runningActionsCount = obj88976_onTap_runningActionsCount + 1;

	var selector = "#obj88981";
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
					window.obj88976_onTap_runningActionsCount = window.obj88976_onTap_runningActionsCount - 1;
if (window.obj88976_onTap_runningActionsCount < 0) {
	window.obj88976_onTap_runningActionsCount = 0;
} else if (window.obj88976_onTap_runningActionsCount == 0) {
	obj88976_onTap_actionGroup2();
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
				window.obj88976_onTap_runningActionsCount = window.obj88976_onTap_runningActionsCount - 1;
if (window.obj88976_onTap_runningActionsCount < 0) {
	window.obj88976_onTap_runningActionsCount = 0;
} else if (window.obj88976_onTap_runningActionsCount == 0) {
	obj88976_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88976_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88976_onTap_activeActionGroupIndex = -1;
		$("#obj88976").trigger("obj88976_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88976) {
				console.warn("de-queueing event obj88976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88976_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88986 
playAudio_88980();
function playAudio_88980() {
	window.obj88976_onTap_runningActionsCount = obj88976_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88986")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj88976_onTap_runningActionsCount = window.obj88976_onTap_runningActionsCount - 1;
if (window.obj88976_onTap_runningActionsCount < 0) {
	window.obj88976_onTap_runningActionsCount = 0;
} else if (window.obj88976_onTap_runningActionsCount == 0) {
	obj88976_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88976_onTap_runningActionsCount = window.obj88976_onTap_runningActionsCount - 1;
if (window.obj88976_onTap_runningActionsCount < 0) {
	window.obj88976_onTap_runningActionsCount = 0;
} else if (window.obj88976_onTap_runningActionsCount == 0) {
	obj88976_onTap_actionGroup3();
}
	}
}









};
obj88976_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88976_onTap_activeActionGroupIndex = -1;
		$("#obj88976").trigger("obj88976_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88976) {
				console.warn("de-queueing event obj88976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88976_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj49079: Event Touch Down
 *
 */
$("#obj49079").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj49079_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49079_onTap is still running");
	return;
}
var obj49079_onTap_runningActionsCount = 0;
var obj49079_onTap_loopCount = 0;
obj49079_onTap_actionGroup0();
});










/*
 *
 *   obj49076: Event Touch Down
 *
 */
$("#obj49076").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj49076_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49076_onTap is still running");
	return;
}
var obj49076_onTap_runningActionsCount = 0;
var obj49076_onTap_loopCount = 0;
obj49076_onTap_actionGroup0();
});










/*
 *
 *   obj49072: Event Touch Down
 *
 */
$("#obj49072").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj49072_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49072_onTap is still running");
	return;
}
var obj49072_onTap_runningActionsCount = 0;
var obj49072_onTap_loopCount = 0;
obj49072_onTap_actionGroup0();
});























































































































































/*
 *
 *   obj49003: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj49003");
	var winTarget = document.getElementById("obj49003");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj49003").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj49003_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj49003_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj49003_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49003_onTouchDown is still running");
	return;
}
var obj49003_onTouchDown_runningActionsCount = 0;
var obj49003_onTouchDown_loopCount = 0;
obj49003_onTouchDown_actionGroup0();
});



/*
 *
 *   obj49003: Event SCActionDragDrop49006_droppedOutsideTargetActions
 *
 */
$("#obj49003").bind("SCActionDragDrop49006_droppedOutsideTargetActions", function(event) {
	if (window.obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49003_SCActionDragDrop49006_droppedOutsideTargetActions is still running");
	return;
}
var obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_runningActionsCount = 0;
var obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_loopCount = 0;
obj49003_SCActionDragDrop49006_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj49003: Event droppedInsideTargetActions_3
 *
 */
$("#obj49003").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj49003_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49003_droppedInsideTargetActions_3 is still running");
	return;
}
var obj49003_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj49003_droppedInsideTargetActions_3_loopCount = 0;
obj49003_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj49003: Event droppedInsideTargetActions_2
 *
 */
$("#obj49003").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj49003_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49003_droppedInsideTargetActions_2 is still running");
	return;
}
var obj49003_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj49003_droppedInsideTargetActions_2_loopCount = 0;
obj49003_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj49003: Event droppedInsideTargetActions
 *
 */
$("#obj49003").bind("droppedInsideTargetActions", function(event) {
	if (window.obj49003_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49003_droppedInsideTargetActions is still running");
	return;
}
var obj49003_droppedInsideTargetActions_runningActionsCount = 0;
var obj49003_droppedInsideTargetActions_loopCount = 0;
obj49003_droppedInsideTargetActions_actionGroup0();
});




































/*
 *
 *   obj48960: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj48960");
	var winTarget = document.getElementById("obj48960");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj48960").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj48960_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj48960_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj48960_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48960_onTouchDown is still running");
	return;
}
var obj48960_onTouchDown_runningActionsCount = 0;
var obj48960_onTouchDown_loopCount = 0;
obj48960_onTouchDown_actionGroup0();
});



/*
 *
 *   obj48960: Event SCActionDragDrop48963_droppedOutsideTargetActions
 *
 */
$("#obj48960").bind("SCActionDragDrop48963_droppedOutsideTargetActions", function(event) {
	if (window.obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48960_SCActionDragDrop48963_droppedOutsideTargetActions is still running");
	return;
}
var obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_runningActionsCount = 0;
var obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_loopCount = 0;
obj48960_SCActionDragDrop48963_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj48960: Event droppedInsideTargetActions_3
 *
 */
$("#obj48960").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj48960_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48960_droppedInsideTargetActions_3 is still running");
	return;
}
var obj48960_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj48960_droppedInsideTargetActions_3_loopCount = 0;
obj48960_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj48960: Event droppedInsideTargetActions_2
 *
 */
$("#obj48960").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj48960_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48960_droppedInsideTargetActions_2 is still running");
	return;
}
var obj48960_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj48960_droppedInsideTargetActions_2_loopCount = 0;
obj48960_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj48960: Event droppedInsideTargetActions
 *
 */
$("#obj48960").bind("droppedInsideTargetActions", function(event) {
	if (window.obj48960_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48960_droppedInsideTargetActions is still running");
	return;
}
var obj48960_droppedInsideTargetActions_runningActionsCount = 0;
var obj48960_droppedInsideTargetActions_loopCount = 0;
obj48960_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj48921: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj48921");
	var winTarget = document.getElementById("obj48921");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj48921").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj48921_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj48921_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj48921_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48921_onTouchDown is still running");
	return;
}
var obj48921_onTouchDown_runningActionsCount = 0;
var obj48921_onTouchDown_loopCount = 0;
obj48921_onTouchDown_actionGroup0();
});



/*
 *
 *   obj48921: Event SCActionDragDrop48924_droppedOutsideTargetActions
 *
 */
$("#obj48921").bind("SCActionDragDrop48924_droppedOutsideTargetActions", function(event) {
	if (window.obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48921_SCActionDragDrop48924_droppedOutsideTargetActions is still running");
	return;
}
var obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_runningActionsCount = 0;
var obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_loopCount = 0;
obj48921_SCActionDragDrop48924_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj48921: Event droppedInsideTargetActions_3
 *
 */
$("#obj48921").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj48921_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48921_droppedInsideTargetActions_3 is still running");
	return;
}
var obj48921_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj48921_droppedInsideTargetActions_3_loopCount = 0;
obj48921_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj48921: Event droppedInsideTargetActions_2
 *
 */
$("#obj48921").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj48921_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48921_droppedInsideTargetActions_2 is still running");
	return;
}
var obj48921_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj48921_droppedInsideTargetActions_2_loopCount = 0;
obj48921_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj48921: Event droppedInsideTargetActions
 *
 */
$("#obj48921").bind("droppedInsideTargetActions", function(event) {
	if (window.obj48921_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj48921_droppedInsideTargetActions is still running");
	return;
}
var obj48921_droppedInsideTargetActions_runningActionsCount = 0;
var obj48921_droppedInsideTargetActions_loopCount = 0;
obj48921_droppedInsideTargetActions_actionGroup0();
});



































/*
 *
 *   obj67806: Event Touch Down
 *
 */
$("#obj67806").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67806_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67806_onTap is still running");
	return;
}
var obj67806_onTap_runningActionsCount = 0;
var obj67806_onTap_loopCount = 0;
obj67806_onTap_actionGroup0();
});










/*
 *
 *   obj67798: Event Touch Down
 *
 */
$("#obj67798").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67798_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67798_onTap is still running");
	return;
}
var obj67798_onTap_runningActionsCount = 0;
var obj67798_onTap_loopCount = 0;
obj67798_onTap_actionGroup0();
});










/*
 *
 *   obj88981: Event Touch Down
 *
 */
$("#obj88981").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88981_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88981_onTap is still running");
	return;
}
var obj88981_onTap_runningActionsCount = 0;
var obj88981_onTap_loopCount = 0;
obj88981_onTap_actionGroup0();
});










/*
 *
 *   obj88976: Event Touch Down
 *
 */
$("#obj88976").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88976_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88976_onTap is still running");
	return;
}
var obj88976_onTap_runningActionsCount = 0;
var obj88976_onTap_loopCount = 0;
obj88976_onTap_actionGroup0();
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
	
$("#obj49095").trigger('SCEventShow');
$("#obj49079").trigger('SCEventShow');
$("#obj49076").trigger('SCEventShow');
$("#obj49072").trigger('SCEventShow');
$("#obj49068").trigger('SCEventShow');
$("#obj49066").trigger('SCEventShow');
$("#obj49064").trigger('SCEventShow');
$("#obj49062").trigger('SCEventShow');
$("#obj49060").trigger('SCEventShow');
$("#obj49058").trigger('SCEventShow');
$("#obj49056").trigger('SCEventShow');
$("#obj49054").trigger('SCEventShow');
$("#obj49052").trigger('SCEventShow');
$("#obj49050").trigger('SCEventShow');
$("#obj49048").trigger('SCEventShow');
$("#obj49046").trigger('SCEventShow');
$("#obj49044").trigger('SCEventShow');
$("#obj49042").trigger('SCEventShow');
$("#obj49003").trigger('SCEventShow');
$("#obj49001").trigger('SCEventShow');
$("#obj49000").trigger('SCEventShow');
$("#obj48999").trigger('SCEventShow');
$("#obj48960").trigger('SCEventShow');
$("#obj48921").trigger('SCEventShow');
$("#obj49097").trigger('SCEventShow');
$("#obj49099").trigger('SCEventShow');
$("#obj49101").trigger('SCEventShow');
$("#obj67806").trigger('SCEventShow');
$("#obj67798").trigger('SCEventShow');
$("#obj88981").trigger('SCEventShow');
$("#obj88976").trigger('SCEventShow');
$("#obj88986").trigger('SCEventShow');
$("#obj90848").trigger('SCEventShow');
$("#obj94979").trigger('SCEventShow');
$("#obj67812").trigger('SCEventShow');
	
});