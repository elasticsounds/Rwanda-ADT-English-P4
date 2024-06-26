pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 24911;
pubcoder.page.title = pubcoder.page.title || "96";
pubcoder.page.number = pubcoder.page.number || 96;
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
var obj80284_onTap_activeActionGroupIndex = -1;
var obj80284_onTap_runningActionsCount = 0;
var obj80284_onTap_loopCount = 0;
var obj80281_onTap_activeActionGroupIndex = -1;
var obj80281_onTap_runningActionsCount = 0;
var obj80281_onTap_loopCount = 0;
var obj80277_onTap_activeActionGroupIndex = -1;
var obj80277_onTap_runningActionsCount = 0;
var obj80277_onTap_loopCount = 0;
var obj80235_onDrag_activeActionGroupIndex = -1;
var obj80235_onDrag_runningActionsCount = 0;
var obj80235_onDrag_loopCount = 0;
var obj80235_onTouchDown_activeActionGroupIndex = -1;
var obj80235_onTouchDown_runningActionsCount = 0;
var obj80235_onTouchDown_loopCount = 0;
var obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_loopCount = 0;
var obj80235_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj80235_droppedInsideTargetActions_runningActionsCount = 0;
var obj80235_droppedInsideTargetActions_loopCount = 0;
var obj80224_onDrag_activeActionGroupIndex = -1;
var obj80224_onDrag_runningActionsCount = 0;
var obj80224_onDrag_loopCount = 0;
var obj80224_onTouchDown_activeActionGroupIndex = -1;
var obj80224_onTouchDown_runningActionsCount = 0;
var obj80224_onTouchDown_loopCount = 0;
var obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_loopCount = 0;
var obj80224_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj80224_droppedInsideTargetActions_runningActionsCount = 0;
var obj80224_droppedInsideTargetActions_loopCount = 0;
var obj80206_onTap_activeActionGroupIndex = -1;
var obj80206_onTap_runningActionsCount = 0;
var obj80206_onTap_loopCount = 0;
var obj80198_onTap_activeActionGroupIndex = -1;
var obj80198_onTap_runningActionsCount = 0;
var obj80198_onTap_loopCount = 0;
var obj88021_onTap_activeActionGroupIndex = -1;
var obj88021_onTap_runningActionsCount = 0;
var obj88021_onTap_loopCount = 0;
var obj88016_onTap_activeActionGroupIndex = -1;
var obj88016_onTap_runningActionsCount = 0;
var obj88016_onTap_loopCount = 0;
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
		
obj80284_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80284_onTap_activeActionGroupIndex = -1;
		$("#obj80284").trigger("obj80284_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80284) {
				console.warn("de-queueing event obj80284." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80284").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80284_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_80286();
function goToPage_80286() {
	window.obj80284_onTap_runningActionsCount = obj80284_onTap_runningActionsCount + 1;
	$("#anchor567")[0].click();
	window.obj80284_onTap_runningActionsCount = window.obj80284_onTap_runningActionsCount - 1;
if (window.obj80284_onTap_runningActionsCount < 0) {
	window.obj80284_onTap_runningActionsCount = 0;
} else if (window.obj80284_onTap_runningActionsCount == 0) {
	obj80284_onTap_actionGroup1();
}
}





















};
obj80284_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80284_onTap_activeActionGroupIndex = -1;
		$("#obj80284").trigger("obj80284_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80284) {
				console.warn("de-queueing event obj80284." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80284").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80284_onTap_activeActionGroupIndex = 1;
	





















};
obj80281_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80281_onTap_activeActionGroupIndex = -1;
		$("#obj80281").trigger("obj80281_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80281) {
				console.warn("de-queueing event obj80281." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80281").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80281_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_80283();
function goToPage_80283() {
	window.obj80281_onTap_runningActionsCount = obj80281_onTap_runningActionsCount + 1;
	$("#anchor568")[0].click();
	window.obj80281_onTap_runningActionsCount = window.obj80281_onTap_runningActionsCount - 1;
if (window.obj80281_onTap_runningActionsCount < 0) {
	window.obj80281_onTap_runningActionsCount = 0;
} else if (window.obj80281_onTap_runningActionsCount == 0) {
	obj80281_onTap_actionGroup1();
}
}





















};
obj80281_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80281_onTap_activeActionGroupIndex = -1;
		$("#obj80281").trigger("obj80281_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80281) {
				console.warn("de-queueing event obj80281." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80281").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80281_onTap_activeActionGroupIndex = 1;
	





















};
obj80277_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80277_onTap_activeActionGroupIndex = -1;
		$("#obj80277").trigger("obj80277_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80277) {
				console.warn("de-queueing event obj80277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80277_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_80279();
function goToPage_80279() {
	window.obj80277_onTap_runningActionsCount = obj80277_onTap_runningActionsCount + 1;
	$("#anchor569")[0].click();
	window.obj80277_onTap_runningActionsCount = window.obj80277_onTap_runningActionsCount - 1;
if (window.obj80277_onTap_runningActionsCount < 0) {
	window.obj80277_onTap_runningActionsCount = 0;
} else if (window.obj80277_onTap_runningActionsCount == 0) {
	obj80277_onTap_actionGroup1();
}
}





















};
obj80277_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80277_onTap_activeActionGroupIndex = -1;
		$("#obj80277").trigger("obj80277_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80277) {
				console.warn("de-queueing event obj80277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80277_onTap_activeActionGroupIndex = 1;
	





















};
obj80235_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80235_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80235").trigger("obj80235_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80235) {
				console.warn("de-queueing event obj80235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80235_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj80235");
//	action: dragDrop
//	target: obj80235 
dragDrop_80238();
function dragDrop_80238() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj80235_onTouchDown_runningActionsCount = obj80235_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj80235');
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
	  	containerNode = $('#obj80269');
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
    	window.obj80235_onTouchDown_runningActionsCount = window.obj80235_onTouchDown_runningActionsCount - 1;
if (window.obj80235_onTouchDown_runningActionsCount < 0) {
	window.obj80235_onTouchDown_runningActionsCount = 0;
} else if (window.obj80235_onTouchDown_runningActionsCount == 0) {
	obj80235_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj80265");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_80238 = false;
    	var dropped_id_80238;
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
					dropped_80238 = true;
					dropped_id_80238 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_80238) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj80235").trigger('SCActionDragDrop80238_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj80235_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80235_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80235").trigger("obj80235_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80235) {
				console.warn("de-queueing event obj80235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80235_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80235").trigger("obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80235) {
				console.warn("de-queueing event obj80235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj80235 
move_92409();
function move_92409() {
	window.obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_runningActionsCount = obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj80235");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 344;
	var moveY = 517;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_runningActionsCount = window.obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80235").trigger("obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80235) {
				console.warn("de-queueing event obj80235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj80235_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80235").trigger("obj80235_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80235) {
				console.warn("de-queueing event obj80235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80240();
function runjs_80240() {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = obj80235_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80265").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80235_droppedInsideTargetActions_runningActionsCount = window.obj80235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80235_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj80235_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80235").trigger("obj80235_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80235) {
				console.warn("de-queueing event obj80235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_80241();
function runjs_80241() {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = obj80235_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80265").css("border-color", "#C00000"); $("#obj80265").css("border-width", "2px"); $("#obj80265").css("border-style", "solid"); $("#obj80265").css("border-radius", "10px"); $("#obj80265").css("-webkit-border-radius", "10px"); $("#obj80265").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80235_droppedInsideTargetActions_runningActionsCount = window.obj80235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80235_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj80235_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80235").trigger("obj80235_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80235) {
				console.warn("de-queueing event obj80235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj80263 
hide_80242();
function hide_80242() {
	var selector = "#obj80263";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80235_droppedInsideTargetActions_runningActionsCount = obj80235_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80235_droppedInsideTargetActions_runningActionsCount = window.obj80235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80235_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80242(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80235_droppedInsideTargetActions_runningActionsCount = window.obj80235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80235_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80235_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80235").trigger("obj80235_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80235) {
				console.warn("de-queueing event obj80235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80243();
function runjs_80243() {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = obj80235_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80235").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80235_droppedInsideTargetActions_runningActionsCount = window.obj80235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80235_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj80235_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80235").trigger("obj80235_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80235) {
				console.warn("de-queueing event obj80235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80244();
function switchText_80244() {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = obj80235_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80257_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80257_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80257").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80257_content");
			setTimeout(function () {
				window.obj80235_droppedInsideTargetActions_runningActionsCount = window.obj80235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80235_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj80257 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80235_droppedInsideTargetActions_runningActionsCount = window.obj80235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80235_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj80235_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80235").trigger("obj80235_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80235) {
				console.warn("de-queueing event obj80235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80235 
move_80245();
function move_80245() {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = obj80235_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj80235");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 344;
	var moveY = 517;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80235_droppedInsideTargetActions_runningActionsCount = window.obj80235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80235_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj80235_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80235").trigger("obj80235_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80235) {
				console.warn("de-queueing event obj80235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80246();
function runjs_80246() {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = obj80235_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80265").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj80235_droppedInsideTargetActions_runningActionsCount = window.obj80235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80235_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj80235_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80235").trigger("obj80235_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80235) {
				console.warn("de-queueing event obj80235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_80247();
function runjs_80247() {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = obj80235_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80265").css("border-color", "#000000"); $("#obj80265").css("border-width", "1px"); $("#obj80265").css("border-style", "solid"); $("#obj80265").css("border-radius", "10px"); $("#obj80265").css("-webkit-border-radius", "10px"); $("#obj80265").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80235_droppedInsideTargetActions_runningActionsCount = window.obj80235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80235_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj80235_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80235").trigger("obj80235_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80235) {
				console.warn("de-queueing event obj80235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj80263
(function(){
	window.obj80235_droppedInsideTargetActions_runningActionsCount = obj80235_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj80263";
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
					window.obj80235_droppedInsideTargetActions_runningActionsCount = window.obj80235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80235_droppedInsideTargetActions_actionGroup9();
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
				window.obj80235_droppedInsideTargetActions_runningActionsCount = window.obj80235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80235_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80235_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80235").trigger("obj80235_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80235) {
				console.warn("de-queueing event obj80235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80249();
function runjs_80249() {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = obj80235_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80235").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80235_droppedInsideTargetActions_runningActionsCount = window.obj80235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80235_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj80235_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80235").trigger("obj80235_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80235) {
				console.warn("de-queueing event obj80235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80250();
function runjs_80250() {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = obj80235_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80235").css("border-color", "rgba(0,0,0,0)"); $("#obj80235").css("border-width", "0px"); $("#obj80235").css("border-style", "solid"); $("#obj80235").css("border-radius", "10px"); $("#obj80235").css("-webkit-border-radius", "10px"); $("#obj80235").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80235_droppedInsideTargetActions_runningActionsCount = window.obj80235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80235_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj80235_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80235").trigger("obj80235_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80235) {
				console.warn("de-queueing event obj80235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj80253 
playAudio_80251();
function playAudio_80251() {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = obj80235_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj80253")[0];
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
		    window.obj80235_droppedInsideTargetActions_runningActionsCount = window.obj80235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80235_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80235_droppedInsideTargetActions_runningActionsCount = window.obj80235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80235_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj80235_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80235").trigger("obj80235_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80235) {
				console.warn("de-queueing event obj80235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80252();
function switchText_80252() {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = obj80235_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80257_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80257_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80257").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80257_content");
			setTimeout(function () {
				window.obj80235_droppedInsideTargetActions_runningActionsCount = window.obj80235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80235_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj80257 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80235_droppedInsideTargetActions_runningActionsCount = window.obj80235_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80235_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80235_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80235_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80235_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj80235_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80235").trigger("obj80235_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80235) {
				console.warn("de-queueing event obj80235." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80235").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80235_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj80224_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80224_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80224").trigger("obj80224_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80224) {
				console.warn("de-queueing event obj80224." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80224").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80224_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj80224");
//	action: dragDrop
//	target: obj80224 
dragDrop_80227();
function dragDrop_80227() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj80224_onTouchDown_runningActionsCount = obj80224_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj80224');
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
	  	containerNode = $('#obj80269');
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
    	window.obj80224_onTouchDown_runningActionsCount = window.obj80224_onTouchDown_runningActionsCount - 1;
if (window.obj80224_onTouchDown_runningActionsCount < 0) {
	window.obj80224_onTouchDown_runningActionsCount = 0;
} else if (window.obj80224_onTouchDown_runningActionsCount == 0) {
	obj80224_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj80265");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_80227 = false;
    	var dropped_id_80227;
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
					dropped_80227 = true;
					dropped_id_80227 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_80227) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj80224").trigger('SCActionDragDrop80227_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj80224_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80224_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80224").trigger("obj80224_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80224) {
				console.warn("de-queueing event obj80224." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80224").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80224_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80224").trigger("obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80224) {
				console.warn("de-queueing event obj80224." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80224").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj80224 
move_92407();
function move_92407() {
	window.obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_runningActionsCount = obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj80224");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 122;
	var moveY = 517;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_runningActionsCount = window.obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80224").trigger("obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80224) {
				console.warn("de-queueing event obj80224." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80224").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj80224_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80224_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80224").trigger("obj80224_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80224) {
				console.warn("de-queueing event obj80224." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80224").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80224_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80229();
function runjs_80229() {
	window.obj80224_droppedInsideTargetActions_runningActionsCount = obj80224_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80265").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80224_droppedInsideTargetActions_runningActionsCount = window.obj80224_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80224_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80224_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80224_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80224_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj80224_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80224_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80224").trigger("obj80224_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80224) {
				console.warn("de-queueing event obj80224." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80224").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80224_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80233();
function switchText_80233() {
	window.obj80224_droppedInsideTargetActions_runningActionsCount = obj80224_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80257_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80257_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80257").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80257_content");
			setTimeout(function () {
				window.obj80224_droppedInsideTargetActions_runningActionsCount = window.obj80224_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80224_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80224_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80224_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80224_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj80257 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80224_droppedInsideTargetActions_runningActionsCount = window.obj80224_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80224_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80224_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80224_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80224_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj80224_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80224_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80224").trigger("obj80224_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80224) {
				console.warn("de-queueing event obj80224." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80224").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80224_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_80230();
function runjs_80230() {
	window.obj80224_droppedInsideTargetActions_runningActionsCount = obj80224_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80265").css("border-color", "#058E3F"); $("#obj80265").css("border-width", "2px"); $("#obj80265").css("border-style", "solid"); $("#obj80265").css("border-radius", "10px"); $("#obj80265").css("-webkit-border-radius", "10px"); $("#obj80265").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80224_droppedInsideTargetActions_runningActionsCount = window.obj80224_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80224_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80224_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80224_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80224_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj80224_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80224_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80224").trigger("obj80224_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80224) {
				console.warn("de-queueing event obj80224." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80224").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80224_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj80263 
hide_80231();
function hide_80231() {
	var selector = "#obj80263";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80224_droppedInsideTargetActions_runningActionsCount = obj80224_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80224_droppedInsideTargetActions_runningActionsCount = window.obj80224_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80224_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80224_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80224_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80224_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80231(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80224_droppedInsideTargetActions_runningActionsCount = window.obj80224_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80224_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80224_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80224_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80224_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80224_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80224_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80224").trigger("obj80224_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80224) {
				console.warn("de-queueing event obj80224." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80224").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80224_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_80232();
function runjs_80232() {
	window.obj80224_droppedInsideTargetActions_runningActionsCount = obj80224_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80224").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80224_droppedInsideTargetActions_runningActionsCount = window.obj80224_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80224_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80224_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80224_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80224_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj80224_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80224_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80224").trigger("obj80224_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80224) {
				console.warn("de-queueing event obj80224." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80224").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80224_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj80261 
playAudio_80234();
function playAudio_80234() {
	window.obj80224_droppedInsideTargetActions_runningActionsCount = obj80224_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj80261")[0];
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
		    window.obj80224_droppedInsideTargetActions_runningActionsCount = window.obj80224_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80224_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80224_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80224_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80224_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80224_droppedInsideTargetActions_runningActionsCount = window.obj80224_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80224_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80224_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80224_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80224_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj80224_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80224_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80224").trigger("obj80224_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80224) {
				console.warn("de-queueing event obj80224." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80224").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80224_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90325();
function switchText_90325() {
	window.obj80224_droppedInsideTargetActions_runningActionsCount = obj80224_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80257_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80257_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80257").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80257_content");
			setTimeout(function () {
				window.obj80224_droppedInsideTargetActions_runningActionsCount = window.obj80224_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80224_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80224_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80224_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80224_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj80257 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80224_droppedInsideTargetActions_runningActionsCount = window.obj80224_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80224_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80224_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80224_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80224_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj80224_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80224_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80224").trigger("obj80224_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80224) {
				console.warn("de-queueing event obj80224." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80224").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80224_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj80206_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80206_onTap_activeActionGroupIndex = -1;
		$("#obj80206").trigger("obj80206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80206) {
				console.warn("de-queueing event obj80206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80206_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj80206 
hide_80209();
function hide_80209() {
	var selector = "#obj80206";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80206_onTap_runningActionsCount = obj80206_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80206_onTap_runningActionsCount = window.obj80206_onTap_runningActionsCount - 1;
if (window.obj80206_onTap_runningActionsCount < 0) {
	window.obj80206_onTap_runningActionsCount = 0;
} else if (window.obj80206_onTap_runningActionsCount == 0) {
	obj80206_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80209(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80206_onTap_runningActionsCount = window.obj80206_onTap_runningActionsCount - 1;
if (window.obj80206_onTap_runningActionsCount < 0) {
	window.obj80206_onTap_runningActionsCount = 0;
} else if (window.obj80206_onTap_runningActionsCount == 0) {
	obj80206_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj80196 
stopMovie_80208();
function stopMovie_80208() {
	window.obj80206_onTap_runningActionsCount = obj80206_onTap_runningActionsCount + 1;
	var myVideo = $("#obj80196")[0];
	myVideo.pause();
	window.obj80206_onTap_runningActionsCount = window.obj80206_onTap_runningActionsCount - 1;
if (window.obj80206_onTap_runningActionsCount < 0) {
	window.obj80206_onTap_runningActionsCount = 0;
} else if (window.obj80206_onTap_runningActionsCount == 0) {
	obj80206_onTap_actionGroup1();
}
}
















};
obj80206_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80206_onTap_activeActionGroupIndex = -1;
		$("#obj80206").trigger("obj80206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80206) {
				console.warn("de-queueing event obj80206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80206_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj80198
(function(){
	window.obj80206_onTap_runningActionsCount = obj80206_onTap_runningActionsCount + 1;

	var selector = "#obj80198";
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
					window.obj80206_onTap_runningActionsCount = window.obj80206_onTap_runningActionsCount - 1;
if (window.obj80206_onTap_runningActionsCount < 0) {
	window.obj80206_onTap_runningActionsCount = 0;
} else if (window.obj80206_onTap_runningActionsCount == 0) {
	obj80206_onTap_actionGroup2();
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
				window.obj80206_onTap_runningActionsCount = window.obj80206_onTap_runningActionsCount - 1;
if (window.obj80206_onTap_runningActionsCount < 0) {
	window.obj80206_onTap_runningActionsCount = 0;
} else if (window.obj80206_onTap_runningActionsCount == 0) {
	obj80206_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80206_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80206_onTap_activeActionGroupIndex = -1;
		$("#obj80206").trigger("obj80206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80206) {
				console.warn("de-queueing event obj80206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80206_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj80196 
move_80211();
function move_80211() {
	window.obj80206_onTap_runningActionsCount = obj80206_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj80196");
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
			window.obj80206_onTap_runningActionsCount = window.obj80206_onTap_runningActionsCount - 1;
if (window.obj80206_onTap_runningActionsCount < 0) {
	window.obj80206_onTap_runningActionsCount = 0;
} else if (window.obj80206_onTap_runningActionsCount == 0) {
	obj80206_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj80206_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80206_onTap_activeActionGroupIndex = -1;
		$("#obj80206").trigger("obj80206_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80206) {
				console.warn("de-queueing event obj80206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80206_onTap_activeActionGroupIndex = 3;
	





















};
obj80198_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80198_onTap_activeActionGroupIndex = -1;
		$("#obj80198").trigger("obj80198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80198) {
				console.warn("de-queueing event obj80198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80198_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj80198 
hide_80201();
function hide_80201() {
	var selector = "#obj80198";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80198_onTap_runningActionsCount = obj80198_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80198_onTap_runningActionsCount = window.obj80198_onTap_runningActionsCount - 1;
if (window.obj80198_onTap_runningActionsCount < 0) {
	window.obj80198_onTap_runningActionsCount = 0;
} else if (window.obj80198_onTap_runningActionsCount == 0) {
	obj80198_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80201(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80198_onTap_runningActionsCount = window.obj80198_onTap_runningActionsCount - 1;
if (window.obj80198_onTap_runningActionsCount < 0) {
	window.obj80198_onTap_runningActionsCount = 0;
} else if (window.obj80198_onTap_runningActionsCount == 0) {
	obj80198_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj80196 
playPauseMovie_80200();
function playPauseMovie_80200() {
	window.obj80198_onTap_runningActionsCount = obj80198_onTap_runningActionsCount + 1;
	var myVideo = $("#obj80196")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj80198_onTap_runningActionsCount = window.obj80198_onTap_runningActionsCount - 1;
if (window.obj80198_onTap_runningActionsCount < 0) {
	window.obj80198_onTap_runningActionsCount = 0;
} else if (window.obj80198_onTap_runningActionsCount == 0) {
	obj80198_onTap_actionGroup1();
}
}

















};
obj80198_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80198_onTap_activeActionGroupIndex = -1;
		$("#obj80198").trigger("obj80198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80198) {
				console.warn("de-queueing event obj80198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80198_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj80206
(function(){
	window.obj80198_onTap_runningActionsCount = obj80198_onTap_runningActionsCount + 1;

	var selector = "#obj80206";
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
					window.obj80198_onTap_runningActionsCount = window.obj80198_onTap_runningActionsCount - 1;
if (window.obj80198_onTap_runningActionsCount < 0) {
	window.obj80198_onTap_runningActionsCount = 0;
} else if (window.obj80198_onTap_runningActionsCount == 0) {
	obj80198_onTap_actionGroup2();
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
				window.obj80198_onTap_runningActionsCount = window.obj80198_onTap_runningActionsCount - 1;
if (window.obj80198_onTap_runningActionsCount < 0) {
	window.obj80198_onTap_runningActionsCount = 0;
} else if (window.obj80198_onTap_runningActionsCount == 0) {
	obj80198_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80198_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80198_onTap_activeActionGroupIndex = -1;
		$("#obj80198").trigger("obj80198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80198) {
				console.warn("de-queueing event obj80198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80198_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj80196 
move_80203();
function move_80203() {
	window.obj80198_onTap_runningActionsCount = obj80198_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj80196");
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
			window.obj80198_onTap_runningActionsCount = window.obj80198_onTap_runningActionsCount - 1;
if (window.obj80198_onTap_runningActionsCount < 0) {
	window.obj80198_onTap_runningActionsCount = 0;
} else if (window.obj80198_onTap_runningActionsCount == 0) {
	obj80198_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj80198_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80198_onTap_activeActionGroupIndex = -1;
		$("#obj80198").trigger("obj80198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80198) {
				console.warn("de-queueing event obj80198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80198_onTap_activeActionGroupIndex = 3;
	





















};
obj88021_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88021_onTap_activeActionGroupIndex = -1;
		$("#obj88021").trigger("obj88021_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88021) {
				console.warn("de-queueing event obj88021." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88021").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88021_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88026 
stopAudio_88023();
function stopAudio_88023() {
	window.obj88021_onTap_runningActionsCount = obj88021_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88026")[0];
	myAudio.pause();
	window.obj88021_onTap_runningActionsCount = window.obj88021_onTap_runningActionsCount - 1;
if (window.obj88021_onTap_runningActionsCount < 0) {
	window.obj88021_onTap_runningActionsCount = 0;
} else if (window.obj88021_onTap_runningActionsCount == 0) {
	obj88021_onTap_actionGroup1();
}
}








};
obj88021_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88021_onTap_activeActionGroupIndex = -1;
		$("#obj88021").trigger("obj88021_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88021) {
				console.warn("de-queueing event obj88021." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88021").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88021_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88021 
hide_88024();
function hide_88024() {
	var selector = "#obj88021";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88021_onTap_runningActionsCount = obj88021_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88021_onTap_runningActionsCount = window.obj88021_onTap_runningActionsCount - 1;
if (window.obj88021_onTap_runningActionsCount < 0) {
	window.obj88021_onTap_runningActionsCount = 0;
} else if (window.obj88021_onTap_runningActionsCount == 0) {
	obj88021_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88024(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88021_onTap_runningActionsCount = window.obj88021_onTap_runningActionsCount - 1;
if (window.obj88021_onTap_runningActionsCount < 0) {
	window.obj88021_onTap_runningActionsCount = 0;
} else if (window.obj88021_onTap_runningActionsCount == 0) {
	obj88021_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88021_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88021_onTap_activeActionGroupIndex = -1;
		$("#obj88021").trigger("obj88021_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88021) {
				console.warn("de-queueing event obj88021." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88021").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88021_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88016
(function(){
	window.obj88021_onTap_runningActionsCount = obj88021_onTap_runningActionsCount + 1;

	var selector = "#obj88016";
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
					window.obj88021_onTap_runningActionsCount = window.obj88021_onTap_runningActionsCount - 1;
if (window.obj88021_onTap_runningActionsCount < 0) {
	window.obj88021_onTap_runningActionsCount = 0;
} else if (window.obj88021_onTap_runningActionsCount == 0) {
	obj88021_onTap_actionGroup3();
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
				window.obj88021_onTap_runningActionsCount = window.obj88021_onTap_runningActionsCount - 1;
if (window.obj88021_onTap_runningActionsCount < 0) {
	window.obj88021_onTap_runningActionsCount = 0;
} else if (window.obj88021_onTap_runningActionsCount == 0) {
	obj88021_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88021_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88021_onTap_activeActionGroupIndex = -1;
		$("#obj88021").trigger("obj88021_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88021) {
				console.warn("de-queueing event obj88021." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88021").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88021_onTap_activeActionGroupIndex = 3;
	





















};
obj88016_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88016_onTap_activeActionGroupIndex = -1;
		$("#obj88016").trigger("obj88016_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88016) {
				console.warn("de-queueing event obj88016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88016_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88016 
hide_88018();
function hide_88018() {
	var selector = "#obj88016";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88016_onTap_runningActionsCount = obj88016_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88016_onTap_runningActionsCount = window.obj88016_onTap_runningActionsCount - 1;
if (window.obj88016_onTap_runningActionsCount < 0) {
	window.obj88016_onTap_runningActionsCount = 0;
} else if (window.obj88016_onTap_runningActionsCount == 0) {
	obj88016_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88018(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88016_onTap_runningActionsCount = window.obj88016_onTap_runningActionsCount - 1;
if (window.obj88016_onTap_runningActionsCount < 0) {
	window.obj88016_onTap_runningActionsCount = 0;
} else if (window.obj88016_onTap_runningActionsCount == 0) {
	obj88016_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88016_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88016_onTap_activeActionGroupIndex = -1;
		$("#obj88016").trigger("obj88016_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88016) {
				console.warn("de-queueing event obj88016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88016_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88021
(function(){
	window.obj88016_onTap_runningActionsCount = obj88016_onTap_runningActionsCount + 1;

	var selector = "#obj88021";
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
					window.obj88016_onTap_runningActionsCount = window.obj88016_onTap_runningActionsCount - 1;
if (window.obj88016_onTap_runningActionsCount < 0) {
	window.obj88016_onTap_runningActionsCount = 0;
} else if (window.obj88016_onTap_runningActionsCount == 0) {
	obj88016_onTap_actionGroup2();
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
				window.obj88016_onTap_runningActionsCount = window.obj88016_onTap_runningActionsCount - 1;
if (window.obj88016_onTap_runningActionsCount < 0) {
	window.obj88016_onTap_runningActionsCount = 0;
} else if (window.obj88016_onTap_runningActionsCount == 0) {
	obj88016_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88016_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88016_onTap_activeActionGroupIndex = -1;
		$("#obj88016").trigger("obj88016_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88016) {
				console.warn("de-queueing event obj88016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88016_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88026 
playAudio_88020();
function playAudio_88020() {
	window.obj88016_onTap_runningActionsCount = obj88016_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88026")[0];
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
		    window.obj88016_onTap_runningActionsCount = window.obj88016_onTap_runningActionsCount - 1;
if (window.obj88016_onTap_runningActionsCount < 0) {
	window.obj88016_onTap_runningActionsCount = 0;
} else if (window.obj88016_onTap_runningActionsCount == 0) {
	obj88016_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88016_onTap_runningActionsCount = window.obj88016_onTap_runningActionsCount - 1;
if (window.obj88016_onTap_runningActionsCount < 0) {
	window.obj88016_onTap_runningActionsCount = 0;
} else if (window.obj88016_onTap_runningActionsCount == 0) {
	obj88016_onTap_actionGroup3();
}
	}
}









};
obj88016_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88016_onTap_activeActionGroupIndex = -1;
		$("#obj88016").trigger("obj88016_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88016) {
				console.warn("de-queueing event obj88016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88016_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj80284: Event Touch Down
 *
 */
$("#obj80284").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80284_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80284_onTap is still running");
	return;
}
var obj80284_onTap_runningActionsCount = 0;
var obj80284_onTap_loopCount = 0;
obj80284_onTap_actionGroup0();
});










/*
 *
 *   obj80281: Event Touch Down
 *
 */
$("#obj80281").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80281_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80281_onTap is still running");
	return;
}
var obj80281_onTap_runningActionsCount = 0;
var obj80281_onTap_loopCount = 0;
obj80281_onTap_actionGroup0();
});










/*
 *
 *   obj80277: Event Touch Down
 *
 */
$("#obj80277").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80277_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80277_onTap is still running");
	return;
}
var obj80277_onTap_runningActionsCount = 0;
var obj80277_onTap_loopCount = 0;
obj80277_onTap_actionGroup0();
});



































































































































/*
 *
 *   obj80235: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj80235");
	var winTarget = document.getElementById("obj80235");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj80235").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj80235_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj80235_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj80235_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80235_onTouchDown is still running");
	return;
}
var obj80235_onTouchDown_runningActionsCount = 0;
var obj80235_onTouchDown_loopCount = 0;
obj80235_onTouchDown_actionGroup0();
});



/*
 *
 *   obj80235: Event SCActionDragDrop80238_droppedOutsideTargetActions
 *
 */
$("#obj80235").bind("SCActionDragDrop80238_droppedOutsideTargetActions", function(event) {
	if (window.obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80235_SCActionDragDrop80238_droppedOutsideTargetActions is still running");
	return;
}
var obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_loopCount = 0;
obj80235_SCActionDragDrop80238_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj80235: Event droppedInsideTargetActions
 *
 */
$("#obj80235").bind("droppedInsideTargetActions", function(event) {
	if (window.obj80235_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80235_droppedInsideTargetActions is still running");
	return;
}
var obj80235_droppedInsideTargetActions_runningActionsCount = 0;
var obj80235_droppedInsideTargetActions_loopCount = 0;
obj80235_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj80224: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj80224");
	var winTarget = document.getElementById("obj80224");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj80224").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj80224_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj80224_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj80224_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80224_onTouchDown is still running");
	return;
}
var obj80224_onTouchDown_runningActionsCount = 0;
var obj80224_onTouchDown_loopCount = 0;
obj80224_onTouchDown_actionGroup0();
});



/*
 *
 *   obj80224: Event SCActionDragDrop80227_droppedOutsideTargetActions
 *
 */
$("#obj80224").bind("SCActionDragDrop80227_droppedOutsideTargetActions", function(event) {
	if (window.obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80224_SCActionDragDrop80227_droppedOutsideTargetActions is still running");
	return;
}
var obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_loopCount = 0;
obj80224_SCActionDragDrop80227_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj80224: Event droppedInsideTargetActions
 *
 */
$("#obj80224").bind("droppedInsideTargetActions", function(event) {
	if (window.obj80224_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80224_droppedInsideTargetActions is still running");
	return;
}
var obj80224_droppedInsideTargetActions_runningActionsCount = 0;
var obj80224_droppedInsideTargetActions_loopCount = 0;
obj80224_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj80206: Event Touch Down
 *
 */
$("#obj80206").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80206_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80206_onTap is still running");
	return;
}
var obj80206_onTap_runningActionsCount = 0;
var obj80206_onTap_loopCount = 0;
obj80206_onTap_actionGroup0();
});










/*
 *
 *   obj80198: Event Touch Down
 *
 */
$("#obj80198").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80198_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80198_onTap is still running");
	return;
}
var obj80198_onTap_runningActionsCount = 0;
var obj80198_onTap_loopCount = 0;
obj80198_onTap_actionGroup0();
});










/*
 *
 *   obj88021: Event Touch Down
 *
 */
$("#obj88021").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88021_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88021_onTap is still running");
	return;
}
var obj88021_onTap_runningActionsCount = 0;
var obj88021_onTap_loopCount = 0;
obj88021_onTap_actionGroup0();
});










/*
 *
 *   obj88016: Event Touch Down
 *
 */
$("#obj88016").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88016_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88016_onTap is still running");
	return;
}
var obj88016_onTap_runningActionsCount = 0;
var obj88016_onTap_loopCount = 0;
obj88016_onTap_actionGroup0();
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
	
$("#obj80287").trigger('SCEventShow');
$("#obj80284").trigger('SCEventShow');
$("#obj80281").trigger('SCEventShow');
$("#obj80277").trigger('SCEventShow');
$("#obj80275").trigger('SCEventShow');
$("#obj80273").trigger('SCEventShow');
$("#obj80271").trigger('SCEventShow');
$("#obj80269").trigger('SCEventShow');
$("#obj80267").trigger('SCEventShow');
$("#obj80265").trigger('SCEventShow');
$("#obj80263").trigger('SCEventShow');
$("#obj80261").trigger('SCEventShow');
$("#obj80259").trigger('SCEventShow');
$("#obj80257").trigger('SCEventShow');
$("#obj80255").trigger('SCEventShow');
$("#obj80253").trigger('SCEventShow');
$("#obj80235").trigger('SCEventShow');
$("#obj80224").trigger('SCEventShow');
$("#obj80206").trigger('SCEventShow');
$("#obj80198").trigger('SCEventShow');
$("#obj88021").trigger('SCEventShow');
$("#obj88016").trigger('SCEventShow');
$("#obj88026").trigger('SCEventShow');
$("#obj94821").trigger('SCEventShow');
$("#obj80196").trigger('SCEventShow');
	
});