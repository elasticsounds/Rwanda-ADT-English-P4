pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 1734;
pubcoder.page.title = pubcoder.page.title || "12";
pubcoder.page.number = pubcoder.page.number || 12;
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
var obj1740_onTap_activeActionGroupIndex = -1;
var obj1740_onTap_runningActionsCount = 0;
var obj1740_onTap_loopCount = 0;
var obj1737_onTap_activeActionGroupIndex = -1;
var obj1737_onTap_runningActionsCount = 0;
var obj1737_onTap_loopCount = 0;
var obj1743_onTap_activeActionGroupIndex = -1;
var obj1743_onTap_runningActionsCount = 0;
var obj1743_onTap_loopCount = 0;
var obj1776_onDrag_activeActionGroupIndex = -1;
var obj1776_onDrag_runningActionsCount = 0;
var obj1776_onDrag_loopCount = 0;
var obj1776_onTouchDown_activeActionGroupIndex = -1;
var obj1776_onTouchDown_runningActionsCount = 0;
var obj1776_onTouchDown_loopCount = 0;
var obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_loopCount = 0;
var obj1776_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1776_droppedInsideTargetActions_runningActionsCount = 0;
var obj1776_droppedInsideTargetActions_loopCount = 0;
var obj1778_onDrag_activeActionGroupIndex = -1;
var obj1778_onDrag_runningActionsCount = 0;
var obj1778_onDrag_loopCount = 0;
var obj1778_onTouchDown_activeActionGroupIndex = -1;
var obj1778_onTouchDown_runningActionsCount = 0;
var obj1778_onTouchDown_loopCount = 0;
var obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_loopCount = 0;
var obj1778_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1778_droppedInsideTargetActions_runningActionsCount = 0;
var obj1778_droppedInsideTargetActions_loopCount = 0;
var obj1780_onDrag_activeActionGroupIndex = -1;
var obj1780_onDrag_runningActionsCount = 0;
var obj1780_onDrag_loopCount = 0;
var obj1780_onTouchDown_activeActionGroupIndex = -1;
var obj1780_onTouchDown_runningActionsCount = 0;
var obj1780_onTouchDown_loopCount = 0;
var obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_loopCount = 0;
var obj1780_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1780_droppedInsideTargetActions_runningActionsCount = 0;
var obj1780_droppedInsideTargetActions_loopCount = 0;
var obj65150_onTap_activeActionGroupIndex = -1;
var obj65150_onTap_runningActionsCount = 0;
var obj65150_onTap_loopCount = 0;
var obj65142_onTap_activeActionGroupIndex = -1;
var obj65142_onTap_runningActionsCount = 0;
var obj65142_onTap_loopCount = 0;
var obj86934_onTap_activeActionGroupIndex = -1;
var obj86934_onTap_runningActionsCount = 0;
var obj86934_onTap_loopCount = 0;
var obj86929_onTap_activeActionGroupIndex = -1;
var obj86929_onTap_runningActionsCount = 0;
var obj86929_onTap_loopCount = 0;
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
		
obj1740_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1740_onTap_activeActionGroupIndex = -1;
		$("#obj1740").trigger("obj1740_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1740) {
				console.warn("de-queueing event obj1740." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1740").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1740_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1742();
function goToPage_1742() {
	window.obj1740_onTap_runningActionsCount = obj1740_onTap_runningActionsCount + 1;
	$("#anchor79")[0].click();
	window.obj1740_onTap_runningActionsCount = window.obj1740_onTap_runningActionsCount - 1;
if (window.obj1740_onTap_runningActionsCount < 0) {
	window.obj1740_onTap_runningActionsCount = 0;
} else if (window.obj1740_onTap_runningActionsCount == 0) {
	obj1740_onTap_actionGroup1();
}
}





















};
obj1740_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1740_onTap_activeActionGroupIndex = -1;
		$("#obj1740").trigger("obj1740_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1740) {
				console.warn("de-queueing event obj1740." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1740").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1740_onTap_activeActionGroupIndex = 1;
	





















};
obj1737_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1737_onTap_activeActionGroupIndex = -1;
		$("#obj1737").trigger("obj1737_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1737) {
				console.warn("de-queueing event obj1737." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1737").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1737_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1739();
function goToPage_1739() {
	window.obj1737_onTap_runningActionsCount = obj1737_onTap_runningActionsCount + 1;
	$("#anchor80")[0].click();
	window.obj1737_onTap_runningActionsCount = window.obj1737_onTap_runningActionsCount - 1;
if (window.obj1737_onTap_runningActionsCount < 0) {
	window.obj1737_onTap_runningActionsCount = 0;
} else if (window.obj1737_onTap_runningActionsCount == 0) {
	obj1737_onTap_actionGroup1();
}
}





















};
obj1737_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1737_onTap_activeActionGroupIndex = -1;
		$("#obj1737").trigger("obj1737_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1737) {
				console.warn("de-queueing event obj1737." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1737").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1737_onTap_activeActionGroupIndex = 1;
	





















};
obj1743_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1743_onTap_activeActionGroupIndex = -1;
		$("#obj1743").trigger("obj1743_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1743) {
				console.warn("de-queueing event obj1743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1743_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1745();
function goToPage_1745() {
	window.obj1743_onTap_runningActionsCount = obj1743_onTap_runningActionsCount + 1;
	$("#anchor81")[0].click();
	window.obj1743_onTap_runningActionsCount = window.obj1743_onTap_runningActionsCount - 1;
if (window.obj1743_onTap_runningActionsCount < 0) {
	window.obj1743_onTap_runningActionsCount = 0;
} else if (window.obj1743_onTap_runningActionsCount == 0) {
	obj1743_onTap_actionGroup1();
}
}





















};
obj1743_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1743_onTap_activeActionGroupIndex = -1;
		$("#obj1743").trigger("obj1743_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1743) {
				console.warn("de-queueing event obj1743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1743_onTap_activeActionGroupIndex = 1;
	





















};
obj1776_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1776_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1776").trigger("obj1776_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1776) {
				console.warn("de-queueing event obj1776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1776_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1776");
//	action: dragDrop
//	target: obj1776 
dragDrop_1788();
function dragDrop_1788() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1776_onTouchDown_runningActionsCount = obj1776_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1776');
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
	  	containerNode = $('#obj1768');
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
    	window.obj1776_onTouchDown_runningActionsCount = window.obj1776_onTouchDown_runningActionsCount - 1;
if (window.obj1776_onTouchDown_runningActionsCount < 0) {
	window.obj1776_onTouchDown_runningActionsCount = 0;
} else if (window.obj1776_onTouchDown_runningActionsCount == 0) {
	obj1776_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1772");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1788 = false;
    	var dropped_id_1788;
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
					dropped_1788 = true;
					dropped_id_1788 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1788) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1776").trigger('SCActionDragDrop1788_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj1776_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1776_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1776").trigger("obj1776_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1776) {
				console.warn("de-queueing event obj1776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1776_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1776").trigger("obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1776) {
				console.warn("de-queueing event obj1776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1776 
move_92104();
function move_92104() {
	window.obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_runningActionsCount = obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1776");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 93;
	var moveY = 454;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_runningActionsCount = window.obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1776").trigger("obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1776) {
				console.warn("de-queueing event obj1776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj1776_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1776_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1776").trigger("obj1776_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1776) {
				console.warn("de-queueing event obj1776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1776_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1790();
function runjs_1790() {
	window.obj1776_droppedInsideTargetActions_runningActionsCount = obj1776_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1772").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1776_droppedInsideTargetActions_runningActionsCount = window.obj1776_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1776_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1776_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1776_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1776_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj1776_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1776_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1776").trigger("obj1776_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1776) {
				console.warn("de-queueing event obj1776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1776_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_1794();
function switchText_1794() {
	window.obj1776_droppedInsideTargetActions_runningActionsCount = obj1776_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1785_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1785_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1785").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1785_content");
			setTimeout(function () {
				window.obj1776_droppedInsideTargetActions_runningActionsCount = window.obj1776_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1776_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1776_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1776_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1776_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj1785 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1776_droppedInsideTargetActions_runningActionsCount = window.obj1776_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1776_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1776_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1776_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1776_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj1776_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1776_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1776").trigger("obj1776_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1776) {
				console.warn("de-queueing event obj1776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1776_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_1791();
function runjs_1791() {
	window.obj1776_droppedInsideTargetActions_runningActionsCount = obj1776_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1772").css("border-color", "#058E3F"); $("#obj1772").css("border-width", "2px"); $("#obj1772").css("border-style", "solid"); $("#obj1772").css("border-radius", "15px"); $("#obj1772").css("-webkit-border-radius", "15px"); $("#obj1772").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj1776_droppedInsideTargetActions_runningActionsCount = window.obj1776_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1776_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1776_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1776_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1776_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj1776_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1776_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1776").trigger("obj1776_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1776) {
				console.warn("de-queueing event obj1776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1776_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj1774 
hide_1792();
function hide_1792() {
	var selector = "#obj1774";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1776_droppedInsideTargetActions_runningActionsCount = obj1776_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1776_droppedInsideTargetActions_runningActionsCount = window.obj1776_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1776_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1776_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1776_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1776_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1792(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1776_droppedInsideTargetActions_runningActionsCount = window.obj1776_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1776_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1776_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1776_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1776_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1793();
function runjs_1793() {
	window.obj1776_droppedInsideTargetActions_runningActionsCount = obj1776_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1776").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1776_droppedInsideTargetActions_runningActionsCount = window.obj1776_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1776_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1776_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1776_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1776_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj1776_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1776_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1776").trigger("obj1776_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1776) {
				console.warn("de-queueing event obj1776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1776_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj1797 
playAudio_1795();
function playAudio_1795() {
	window.obj1776_droppedInsideTargetActions_runningActionsCount = obj1776_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj1797")[0];
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
		    window.obj1776_droppedInsideTargetActions_runningActionsCount = window.obj1776_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1776_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1776_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1776_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1776_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1776_droppedInsideTargetActions_runningActionsCount = window.obj1776_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1776_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1776_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1776_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1776_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj1776_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1776_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1776").trigger("obj1776_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1776) {
				console.warn("de-queueing event obj1776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1776_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90076();
function switchText_90076() {
	window.obj1776_droppedInsideTargetActions_runningActionsCount = obj1776_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1785_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1785_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1785").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1785_content");
			setTimeout(function () {
				window.obj1776_droppedInsideTargetActions_runningActionsCount = window.obj1776_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1776_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1776_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1776_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1776_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1785 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1776_droppedInsideTargetActions_runningActionsCount = window.obj1776_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1776_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1776_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1776_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1776_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj1776_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1776_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1776").trigger("obj1776_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1776) {
				console.warn("de-queueing event obj1776." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1776").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1776_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj1778_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1778_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1778").trigger("obj1778_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1778) {
				console.warn("de-queueing event obj1778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1778_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1778");
//	action: dragDrop
//	target: obj1778 
dragDrop_1801();
function dragDrop_1801() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1778_onTouchDown_runningActionsCount = obj1778_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1778');
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
	  	containerNode = $('#obj1768');
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
    	window.obj1778_onTouchDown_runningActionsCount = window.obj1778_onTouchDown_runningActionsCount - 1;
if (window.obj1778_onTouchDown_runningActionsCount < 0) {
	window.obj1778_onTouchDown_runningActionsCount = 0;
} else if (window.obj1778_onTouchDown_runningActionsCount == 0) {
	obj1778_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1772");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1801 = false;
    	var dropped_id_1801;
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
					dropped_1801 = true;
					dropped_id_1801 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1801) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1778").trigger('SCActionDragDrop1801_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj1778_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1778_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1778").trigger("obj1778_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1778) {
				console.warn("de-queueing event obj1778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1778_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1778").trigger("obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1778) {
				console.warn("de-queueing event obj1778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1778 
move_92106();
function move_92106() {
	window.obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_runningActionsCount = obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1778");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 221;
	var moveY = 523;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_runningActionsCount = window.obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1778").trigger("obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1778) {
				console.warn("de-queueing event obj1778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj1778_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1778_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1778").trigger("obj1778_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1778) {
				console.warn("de-queueing event obj1778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1778_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1774 
hide_1854();
function hide_1854() {
	var selector = "#obj1774";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1778_droppedInsideTargetActions_runningActionsCount = obj1778_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1778_droppedInsideTargetActions_runningActionsCount = window.obj1778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1778_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1854(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1778_droppedInsideTargetActions_runningActionsCount = window.obj1778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1778_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1851();
function runjs_1851() {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = obj1778_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1772").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1778_droppedInsideTargetActions_runningActionsCount = window.obj1778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1778_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1852();
function runjs_1852() {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = obj1778_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1772").css("border-color", "#C00000"); $("#obj1772").css("border-width", "2px"); $("#obj1772").css("border-style", "solid"); $("#obj1772").css("border-radius", "15px"); $("#obj1772").css("-webkit-border-radius", "15px"); $("#obj1772").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj1778_droppedInsideTargetActions_runningActionsCount = window.obj1778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1778_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1855();
function runjs_1855() {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = obj1778_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1778").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1778_droppedInsideTargetActions_runningActionsCount = window.obj1778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1778_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_1853();
function switchText_1853() {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = obj1778_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1785_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1785_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1785").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1785_content");
			setTimeout(function () {
				window.obj1778_droppedInsideTargetActions_runningActionsCount = window.obj1778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1778_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj1785 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1778_droppedInsideTargetActions_runningActionsCount = window.obj1778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1778_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}






};
obj1778_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1778_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1778").trigger("obj1778_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1778) {
				console.warn("de-queueing event obj1778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1778_droppedInsideTargetActions_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1778 
move_1856();
function move_1856() {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = obj1778_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1778");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 221;
	var moveY = 523;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1778_droppedInsideTargetActions_runningActionsCount = window.obj1778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1778_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	});
}



















};
obj1778_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1778_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1778").trigger("obj1778_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1778) {
				console.warn("de-queueing event obj1778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1778_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj1774
(function(){
	window.obj1778_droppedInsideTargetActions_runningActionsCount = obj1778_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj1774";
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
					window.obj1778_droppedInsideTargetActions_runningActionsCount = window.obj1778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1778_droppedInsideTargetActions_actionGroup3();
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
				window.obj1778_droppedInsideTargetActions_runningActionsCount = window.obj1778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1778_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1796 
playAudio_1862();
function playAudio_1862() {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = obj1778_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj1796")[0];
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
		    window.obj1778_droppedInsideTargetActions_runningActionsCount = window.obj1778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1778_droppedInsideTargetActions_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1778_droppedInsideTargetActions_runningActionsCount = window.obj1778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1778_droppedInsideTargetActions_actionGroup3();
}
	}
}


//	action: Run JavaScript
runjs_1857();
function runjs_1857() {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = obj1778_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1772").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1778_droppedInsideTargetActions_runningActionsCount = window.obj1778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1778_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1858();
function runjs_1858() {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = obj1778_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1772").css("border-color", "#000000"); $("#obj1772").css("border-width", "1px"); $("#obj1772").css("border-style", "solid"); $("#obj1772").css("border-radius", "15px"); $("#obj1772").css("-webkit-border-radius", "15px"); $("#obj1772").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj1778_droppedInsideTargetActions_runningActionsCount = window.obj1778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1778_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1859();
function runjs_1859() {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = obj1778_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1778").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1778_droppedInsideTargetActions_runningActionsCount = window.obj1778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1778_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj1778_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1778_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1778").trigger("obj1778_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1778) {
				console.warn("de-queueing event obj1778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1778_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_1861();
function switchText_1861() {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = obj1778_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1785_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1785_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1785").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1785_content");
			setTimeout(function () {
				window.obj1778_droppedInsideTargetActions_runningActionsCount = window.obj1778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1778_droppedInsideTargetActions_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj1785 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1778_droppedInsideTargetActions_runningActionsCount = window.obj1778_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1778_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1778_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1778_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1778_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
	}
}






};
obj1778_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1778_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1778").trigger("obj1778_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1778) {
				console.warn("de-queueing event obj1778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1778_droppedInsideTargetActions_activeActionGroupIndex = 4;
	





















};
obj1780_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1780_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1780").trigger("obj1780_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1780) {
				console.warn("de-queueing event obj1780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1780_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1780");
//	action: dragDrop
//	target: obj1780 
dragDrop_1834();
function dragDrop_1834() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1780_onTouchDown_runningActionsCount = obj1780_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1780');
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
	  	containerNode = $('#obj1768');
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
    	window.obj1780_onTouchDown_runningActionsCount = window.obj1780_onTouchDown_runningActionsCount - 1;
if (window.obj1780_onTouchDown_runningActionsCount < 0) {
	window.obj1780_onTouchDown_runningActionsCount = 0;
} else if (window.obj1780_onTouchDown_runningActionsCount == 0) {
	obj1780_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1772");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1834 = false;
    	var dropped_id_1834;
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
					dropped_1834 = true;
					dropped_id_1834 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1834) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1780").trigger('SCActionDragDrop1834_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj1780_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1780_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1780").trigger("obj1780_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1780) {
				console.warn("de-queueing event obj1780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1780_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1780").trigger("obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1780) {
				console.warn("de-queueing event obj1780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1780 
move_92108();
function move_92108() {
	window.obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_runningActionsCount = obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1780");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 344;
	var moveY = 454;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_runningActionsCount = window.obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1780").trigger("obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1780) {
				console.warn("de-queueing event obj1780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj1780_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1780_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1780").trigger("obj1780_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1780) {
				console.warn("de-queueing event obj1780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1780_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1774 
hide_1839();
function hide_1839() {
	var selector = "#obj1774";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1780_droppedInsideTargetActions_runningActionsCount = obj1780_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1780_droppedInsideTargetActions_runningActionsCount = window.obj1780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1780_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1839(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1780_droppedInsideTargetActions_runningActionsCount = window.obj1780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1780_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}














//	action: Run JavaScript
runjs_1836();
function runjs_1836() {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = obj1780_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1772").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1780_droppedInsideTargetActions_runningActionsCount = window.obj1780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1780_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1837();
function runjs_1837() {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = obj1780_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1772").css("border-color", "#C00000"); $("#obj1772").css("border-width", "2px"); $("#obj1772").css("border-style", "solid"); $("#obj1772").css("border-radius", "15px"); $("#obj1772").css("-webkit-border-radius", "15px"); $("#obj1772").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj1780_droppedInsideTargetActions_runningActionsCount = window.obj1780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1780_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1840();
function runjs_1840() {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = obj1780_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1780").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1780_droppedInsideTargetActions_runningActionsCount = window.obj1780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1780_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_1838();
function switchText_1838() {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = obj1780_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1785_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1785_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1785").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1785_content");
			setTimeout(function () {
				window.obj1780_droppedInsideTargetActions_runningActionsCount = window.obj1780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1780_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj1785 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1780_droppedInsideTargetActions_runningActionsCount = window.obj1780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1780_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}






};
obj1780_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1780_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1780").trigger("obj1780_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1780) {
				console.warn("de-queueing event obj1780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1780_droppedInsideTargetActions_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1780 
move_1841();
function move_1841() {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = obj1780_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1780");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 344;
	var moveY = 454;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1780_droppedInsideTargetActions_runningActionsCount = window.obj1780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1780_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	});
}



















};
obj1780_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1780_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1780").trigger("obj1780_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1780) {
				console.warn("de-queueing event obj1780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1780_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj1774
(function(){
	window.obj1780_droppedInsideTargetActions_runningActionsCount = obj1780_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj1774";
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
					window.obj1780_droppedInsideTargetActions_runningActionsCount = window.obj1780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1780_droppedInsideTargetActions_actionGroup3();
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
				window.obj1780_droppedInsideTargetActions_runningActionsCount = window.obj1780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1780_droppedInsideTargetActions_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj1796 
playAudio_1847();
function playAudio_1847() {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = obj1780_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj1796")[0];
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
		    window.obj1780_droppedInsideTargetActions_runningActionsCount = window.obj1780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1780_droppedInsideTargetActions_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1780_droppedInsideTargetActions_runningActionsCount = window.obj1780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1780_droppedInsideTargetActions_actionGroup3();
}
	}
}


//	action: Run JavaScript
runjs_1842();
function runjs_1842() {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = obj1780_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1772").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1780_droppedInsideTargetActions_runningActionsCount = window.obj1780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1780_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1843();
function runjs_1843() {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = obj1780_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1772").css("border-color", "#000000"); $("#obj1772").css("border-width", "1px"); $("#obj1772").css("border-style", "solid"); $("#obj1772").css("border-radius", "15px"); $("#obj1772").css("-webkit-border-radius", "15px"); $("#obj1772").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj1780_droppedInsideTargetActions_runningActionsCount = window.obj1780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1780_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1844();
function runjs_1844() {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = obj1780_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1780").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj1780_droppedInsideTargetActions_runningActionsCount = window.obj1780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1780_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}

//	action: Switch Text
switchText_1846();
function switchText_1846() {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = obj1780_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1785_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1785_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1785").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1785_content");
			setTimeout(function () {
				window.obj1780_droppedInsideTargetActions_runningActionsCount = window.obj1780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1780_droppedInsideTargetActions_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj1785 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1780_droppedInsideTargetActions_runningActionsCount = window.obj1780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1780_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
	}
}






};
obj1780_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1780_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1780").trigger("obj1780_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1780) {
				console.warn("de-queueing event obj1780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1780_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj65150_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65150_onTap_activeActionGroupIndex = -1;
		$("#obj65150").trigger("obj65150_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65150) {
				console.warn("de-queueing event obj65150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65150_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65150 
hide_65153();
function hide_65153() {
	var selector = "#obj65150";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65150_onTap_runningActionsCount = obj65150_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65150_onTap_runningActionsCount = window.obj65150_onTap_runningActionsCount - 1;
if (window.obj65150_onTap_runningActionsCount < 0) {
	window.obj65150_onTap_runningActionsCount = 0;
} else if (window.obj65150_onTap_runningActionsCount == 0) {
	obj65150_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65153(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65150_onTap_runningActionsCount = window.obj65150_onTap_runningActionsCount - 1;
if (window.obj65150_onTap_runningActionsCount < 0) {
	window.obj65150_onTap_runningActionsCount = 0;
} else if (window.obj65150_onTap_runningActionsCount == 0) {
	obj65150_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65156 
stopMovie_65152();
function stopMovie_65152() {
	window.obj65150_onTap_runningActionsCount = obj65150_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65156")[0];
	myVideo.pause();
	window.obj65150_onTap_runningActionsCount = window.obj65150_onTap_runningActionsCount - 1;
if (window.obj65150_onTap_runningActionsCount < 0) {
	window.obj65150_onTap_runningActionsCount = 0;
} else if (window.obj65150_onTap_runningActionsCount == 0) {
	obj65150_onTap_actionGroup1();
}
}
















};
obj65150_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65150_onTap_activeActionGroupIndex = -1;
		$("#obj65150").trigger("obj65150_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65150) {
				console.warn("de-queueing event obj65150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65150_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65142
(function(){
	window.obj65150_onTap_runningActionsCount = obj65150_onTap_runningActionsCount + 1;

	var selector = "#obj65142";
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
					window.obj65150_onTap_runningActionsCount = window.obj65150_onTap_runningActionsCount - 1;
if (window.obj65150_onTap_runningActionsCount < 0) {
	window.obj65150_onTap_runningActionsCount = 0;
} else if (window.obj65150_onTap_runningActionsCount == 0) {
	obj65150_onTap_actionGroup2();
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
				window.obj65150_onTap_runningActionsCount = window.obj65150_onTap_runningActionsCount - 1;
if (window.obj65150_onTap_runningActionsCount < 0) {
	window.obj65150_onTap_runningActionsCount = 0;
} else if (window.obj65150_onTap_runningActionsCount == 0) {
	obj65150_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65150_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65150_onTap_activeActionGroupIndex = -1;
		$("#obj65150").trigger("obj65150_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65150) {
				console.warn("de-queueing event obj65150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65150_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65156 
move_65155();
function move_65155() {
	window.obj65150_onTap_runningActionsCount = obj65150_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65156");
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
			window.obj65150_onTap_runningActionsCount = window.obj65150_onTap_runningActionsCount - 1;
if (window.obj65150_onTap_runningActionsCount < 0) {
	window.obj65150_onTap_runningActionsCount = 0;
} else if (window.obj65150_onTap_runningActionsCount == 0) {
	obj65150_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65150_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65150_onTap_activeActionGroupIndex = -1;
		$("#obj65150").trigger("obj65150_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65150) {
				console.warn("de-queueing event obj65150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65150_onTap_activeActionGroupIndex = 3;
	





















};
obj65142_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65142_onTap_activeActionGroupIndex = -1;
		$("#obj65142").trigger("obj65142_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65142) {
				console.warn("de-queueing event obj65142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65142_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65142 
hide_65145();
function hide_65145() {
	var selector = "#obj65142";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65142_onTap_runningActionsCount = obj65142_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65142_onTap_runningActionsCount = window.obj65142_onTap_runningActionsCount - 1;
if (window.obj65142_onTap_runningActionsCount < 0) {
	window.obj65142_onTap_runningActionsCount = 0;
} else if (window.obj65142_onTap_runningActionsCount == 0) {
	obj65142_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65145(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65142_onTap_runningActionsCount = window.obj65142_onTap_runningActionsCount - 1;
if (window.obj65142_onTap_runningActionsCount < 0) {
	window.obj65142_onTap_runningActionsCount = 0;
} else if (window.obj65142_onTap_runningActionsCount == 0) {
	obj65142_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65156 
playPauseMovie_65144();
function playPauseMovie_65144() {
	window.obj65142_onTap_runningActionsCount = obj65142_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65156")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65142_onTap_runningActionsCount = window.obj65142_onTap_runningActionsCount - 1;
if (window.obj65142_onTap_runningActionsCount < 0) {
	window.obj65142_onTap_runningActionsCount = 0;
} else if (window.obj65142_onTap_runningActionsCount == 0) {
	obj65142_onTap_actionGroup1();
}
}

















};
obj65142_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65142_onTap_activeActionGroupIndex = -1;
		$("#obj65142").trigger("obj65142_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65142) {
				console.warn("de-queueing event obj65142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65142_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65150
(function(){
	window.obj65142_onTap_runningActionsCount = obj65142_onTap_runningActionsCount + 1;

	var selector = "#obj65150";
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
					window.obj65142_onTap_runningActionsCount = window.obj65142_onTap_runningActionsCount - 1;
if (window.obj65142_onTap_runningActionsCount < 0) {
	window.obj65142_onTap_runningActionsCount = 0;
} else if (window.obj65142_onTap_runningActionsCount == 0) {
	obj65142_onTap_actionGroup2();
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
				window.obj65142_onTap_runningActionsCount = window.obj65142_onTap_runningActionsCount - 1;
if (window.obj65142_onTap_runningActionsCount < 0) {
	window.obj65142_onTap_runningActionsCount = 0;
} else if (window.obj65142_onTap_runningActionsCount == 0) {
	obj65142_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65142_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65142_onTap_activeActionGroupIndex = -1;
		$("#obj65142").trigger("obj65142_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65142) {
				console.warn("de-queueing event obj65142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65142_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65156 
move_65147();
function move_65147() {
	window.obj65142_onTap_runningActionsCount = obj65142_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65156");
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
			window.obj65142_onTap_runningActionsCount = window.obj65142_onTap_runningActionsCount - 1;
if (window.obj65142_onTap_runningActionsCount < 0) {
	window.obj65142_onTap_runningActionsCount = 0;
} else if (window.obj65142_onTap_runningActionsCount == 0) {
	obj65142_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65142_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65142_onTap_activeActionGroupIndex = -1;
		$("#obj65142").trigger("obj65142_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65142) {
				console.warn("de-queueing event obj65142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65142_onTap_activeActionGroupIndex = 3;
	





















};
obj86934_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86934_onTap_activeActionGroupIndex = -1;
		$("#obj86934").trigger("obj86934_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86934) {
				console.warn("de-queueing event obj86934." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86934").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86934_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj86939 
stopAudio_86936();
function stopAudio_86936() {
	window.obj86934_onTap_runningActionsCount = obj86934_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86939")[0];
	myAudio.pause();
	window.obj86934_onTap_runningActionsCount = window.obj86934_onTap_runningActionsCount - 1;
if (window.obj86934_onTap_runningActionsCount < 0) {
	window.obj86934_onTap_runningActionsCount = 0;
} else if (window.obj86934_onTap_runningActionsCount == 0) {
	obj86934_onTap_actionGroup1();
}
}








};
obj86934_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86934_onTap_activeActionGroupIndex = -1;
		$("#obj86934").trigger("obj86934_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86934) {
				console.warn("de-queueing event obj86934." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86934").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86934_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj86934 
hide_86937();
function hide_86937() {
	var selector = "#obj86934";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86934_onTap_runningActionsCount = obj86934_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86934_onTap_runningActionsCount = window.obj86934_onTap_runningActionsCount - 1;
if (window.obj86934_onTap_runningActionsCount < 0) {
	window.obj86934_onTap_runningActionsCount = 0;
} else if (window.obj86934_onTap_runningActionsCount == 0) {
	obj86934_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86937(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86934_onTap_runningActionsCount = window.obj86934_onTap_runningActionsCount - 1;
if (window.obj86934_onTap_runningActionsCount < 0) {
	window.obj86934_onTap_runningActionsCount = 0;
} else if (window.obj86934_onTap_runningActionsCount == 0) {
	obj86934_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86934_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86934_onTap_activeActionGroupIndex = -1;
		$("#obj86934").trigger("obj86934_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86934) {
				console.warn("de-queueing event obj86934." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86934").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86934_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj86929
(function(){
	window.obj86934_onTap_runningActionsCount = obj86934_onTap_runningActionsCount + 1;

	var selector = "#obj86929";
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
					window.obj86934_onTap_runningActionsCount = window.obj86934_onTap_runningActionsCount - 1;
if (window.obj86934_onTap_runningActionsCount < 0) {
	window.obj86934_onTap_runningActionsCount = 0;
} else if (window.obj86934_onTap_runningActionsCount == 0) {
	obj86934_onTap_actionGroup3();
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
				window.obj86934_onTap_runningActionsCount = window.obj86934_onTap_runningActionsCount - 1;
if (window.obj86934_onTap_runningActionsCount < 0) {
	window.obj86934_onTap_runningActionsCount = 0;
} else if (window.obj86934_onTap_runningActionsCount == 0) {
	obj86934_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86934_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86934_onTap_activeActionGroupIndex = -1;
		$("#obj86934").trigger("obj86934_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86934) {
				console.warn("de-queueing event obj86934." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86934").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86934_onTap_activeActionGroupIndex = 3;
	





















};
obj86929_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86929_onTap_activeActionGroupIndex = -1;
		$("#obj86929").trigger("obj86929_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86929) {
				console.warn("de-queueing event obj86929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86929_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj86929 
hide_86931();
function hide_86931() {
	var selector = "#obj86929";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86929_onTap_runningActionsCount = obj86929_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86929_onTap_runningActionsCount = window.obj86929_onTap_runningActionsCount - 1;
if (window.obj86929_onTap_runningActionsCount < 0) {
	window.obj86929_onTap_runningActionsCount = 0;
} else if (window.obj86929_onTap_runningActionsCount == 0) {
	obj86929_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86931(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86929_onTap_runningActionsCount = window.obj86929_onTap_runningActionsCount - 1;
if (window.obj86929_onTap_runningActionsCount < 0) {
	window.obj86929_onTap_runningActionsCount = 0;
} else if (window.obj86929_onTap_runningActionsCount == 0) {
	obj86929_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86929_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86929_onTap_activeActionGroupIndex = -1;
		$("#obj86929").trigger("obj86929_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86929) {
				console.warn("de-queueing event obj86929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86929_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj86934
(function(){
	window.obj86929_onTap_runningActionsCount = obj86929_onTap_runningActionsCount + 1;

	var selector = "#obj86934";
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
					window.obj86929_onTap_runningActionsCount = window.obj86929_onTap_runningActionsCount - 1;
if (window.obj86929_onTap_runningActionsCount < 0) {
	window.obj86929_onTap_runningActionsCount = 0;
} else if (window.obj86929_onTap_runningActionsCount == 0) {
	obj86929_onTap_actionGroup2();
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
				window.obj86929_onTap_runningActionsCount = window.obj86929_onTap_runningActionsCount - 1;
if (window.obj86929_onTap_runningActionsCount < 0) {
	window.obj86929_onTap_runningActionsCount = 0;
} else if (window.obj86929_onTap_runningActionsCount == 0) {
	obj86929_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86929_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86929_onTap_activeActionGroupIndex = -1;
		$("#obj86929").trigger("obj86929_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86929) {
				console.warn("de-queueing event obj86929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86929_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj86939 
playAudio_86933();
function playAudio_86933() {
	window.obj86929_onTap_runningActionsCount = obj86929_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86939")[0];
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
		    window.obj86929_onTap_runningActionsCount = window.obj86929_onTap_runningActionsCount - 1;
if (window.obj86929_onTap_runningActionsCount < 0) {
	window.obj86929_onTap_runningActionsCount = 0;
} else if (window.obj86929_onTap_runningActionsCount == 0) {
	obj86929_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86929_onTap_runningActionsCount = window.obj86929_onTap_runningActionsCount - 1;
if (window.obj86929_onTap_runningActionsCount < 0) {
	window.obj86929_onTap_runningActionsCount = 0;
} else if (window.obj86929_onTap_runningActionsCount == 0) {
	obj86929_onTap_actionGroup3();
}
	}
}









};
obj86929_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86929_onTap_activeActionGroupIndex = -1;
		$("#obj86929").trigger("obj86929_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86929) {
				console.warn("de-queueing event obj86929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86929_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj1740: Event Touch Down
 *
 */
$("#obj1740").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1740_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1740_onTap is still running");
	return;
}
var obj1740_onTap_runningActionsCount = 0;
var obj1740_onTap_loopCount = 0;
obj1740_onTap_actionGroup0();
});










/*
 *
 *   obj1737: Event Touch Down
 *
 */
$("#obj1737").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1737_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1737_onTap is still running");
	return;
}
var obj1737_onTap_runningActionsCount = 0;
var obj1737_onTap_loopCount = 0;
obj1737_onTap_actionGroup0();
});










/*
 *
 *   obj1743: Event Touch Down
 *
 */
$("#obj1743").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1743_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1743_onTap is still running");
	return;
}
var obj1743_onTap_runningActionsCount = 0;
var obj1743_onTap_loopCount = 0;
obj1743_onTap_actionGroup0();
});



































































































































/*
 *
 *   obj1776: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1776");
	var winTarget = document.getElementById("obj1776");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1776").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1776_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1776_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1776_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1776_onTouchDown is still running");
	return;
}
var obj1776_onTouchDown_runningActionsCount = 0;
var obj1776_onTouchDown_loopCount = 0;
obj1776_onTouchDown_actionGroup0();
});



/*
 *
 *   obj1776: Event SCActionDragDrop1788_droppedOutsideTargetActions
 *
 */
$("#obj1776").bind("SCActionDragDrop1788_droppedOutsideTargetActions", function(event) {
	if (window.obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1776_SCActionDragDrop1788_droppedOutsideTargetActions is still running");
	return;
}
var obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_loopCount = 0;
obj1776_SCActionDragDrop1788_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1776: Event droppedInsideTargetActions
 *
 */
$("#obj1776").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1776_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1776_droppedInsideTargetActions is still running");
	return;
}
var obj1776_droppedInsideTargetActions_runningActionsCount = 0;
var obj1776_droppedInsideTargetActions_loopCount = 0;
obj1776_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj1778: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1778");
	var winTarget = document.getElementById("obj1778");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1778").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1778_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1778_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1778_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1778_onTouchDown is still running");
	return;
}
var obj1778_onTouchDown_runningActionsCount = 0;
var obj1778_onTouchDown_loopCount = 0;
obj1778_onTouchDown_actionGroup0();
});



/*
 *
 *   obj1778: Event SCActionDragDrop1801_droppedOutsideTargetActions
 *
 */
$("#obj1778").bind("SCActionDragDrop1801_droppedOutsideTargetActions", function(event) {
	if (window.obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1778_SCActionDragDrop1801_droppedOutsideTargetActions is still running");
	return;
}
var obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_loopCount = 0;
obj1778_SCActionDragDrop1801_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1778: Event droppedInsideTargetActions
 *
 */
$("#obj1778").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1778_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1778_droppedInsideTargetActions is still running");
	return;
}
var obj1778_droppedInsideTargetActions_runningActionsCount = 0;
var obj1778_droppedInsideTargetActions_loopCount = 0;
obj1778_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj1780: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1780");
	var winTarget = document.getElementById("obj1780");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1780").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1780_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1780_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1780_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1780_onTouchDown is still running");
	return;
}
var obj1780_onTouchDown_runningActionsCount = 0;
var obj1780_onTouchDown_loopCount = 0;
obj1780_onTouchDown_actionGroup0();
});



/*
 *
 *   obj1780: Event SCActionDragDrop1834_droppedOutsideTargetActions
 *
 */
$("#obj1780").bind("SCActionDragDrop1834_droppedOutsideTargetActions", function(event) {
	if (window.obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1780_SCActionDragDrop1834_droppedOutsideTargetActions is still running");
	return;
}
var obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_loopCount = 0;
obj1780_SCActionDragDrop1834_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1780: Event droppedInsideTargetActions
 *
 */
$("#obj1780").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1780_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1780_droppedInsideTargetActions is still running");
	return;
}
var obj1780_droppedInsideTargetActions_runningActionsCount = 0;
var obj1780_droppedInsideTargetActions_loopCount = 0;
obj1780_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj65150: Event Touch Down
 *
 */
$("#obj65150").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65150_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65150_onTap is still running");
	return;
}
var obj65150_onTap_runningActionsCount = 0;
var obj65150_onTap_loopCount = 0;
obj65150_onTap_actionGroup0();
});










/*
 *
 *   obj65142: Event Touch Down
 *
 */
$("#obj65142").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65142_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65142_onTap is still running");
	return;
}
var obj65142_onTap_runningActionsCount = 0;
var obj65142_onTap_loopCount = 0;
obj65142_onTap_actionGroup0();
});










/*
 *
 *   obj86934: Event Touch Down
 *
 */
$("#obj86934").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86934_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86934_onTap is still running");
	return;
}
var obj86934_onTap_runningActionsCount = 0;
var obj86934_onTap_loopCount = 0;
obj86934_onTap_actionGroup0();
});










/*
 *
 *   obj86929: Event Touch Down
 *
 */
$("#obj86929").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86929_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86929_onTap is still running");
	return;
}
var obj86929_onTap_runningActionsCount = 0;
var obj86929_onTap_loopCount = 0;
obj86929_onTap_actionGroup0();
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
	
$("#obj1735").trigger('SCEventShow');
$("#obj1740").trigger('SCEventShow');
$("#obj1737").trigger('SCEventShow');
$("#obj1743").trigger('SCEventShow');
$("#obj1760").trigger('SCEventShow');
$("#obj1766").trigger('SCEventShow');
$("#obj1764").trigger('SCEventShow');
$("#obj1762").trigger('SCEventShow');
$("#obj1768").trigger('SCEventShow');
$("#obj1770").trigger('SCEventShow');
$("#obj1772").trigger('SCEventShow');
$("#obj1774").trigger('SCEventShow');
$("#obj1783").trigger('SCEventShow');
$("#obj1785").trigger('SCEventShow');
$("#obj1796").trigger('SCEventShow');
$("#obj1797").trigger('SCEventShow');
$("#obj1776").trigger('SCEventShow');
$("#obj1778").trigger('SCEventShow');
$("#obj1780").trigger('SCEventShow');
$("#obj65150").trigger('SCEventShow');
$("#obj65142").trigger('SCEventShow');
$("#obj86934").trigger('SCEventShow');
$("#obj86929").trigger('SCEventShow');
$("#obj86939").trigger('SCEventShow');
$("#obj94653").trigger('SCEventShow');
$("#obj65156").trigger('SCEventShow');
	
});