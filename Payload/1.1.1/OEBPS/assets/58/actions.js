pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 14681;
pubcoder.page.title = pubcoder.page.title || "58";
pubcoder.page.number = pubcoder.page.number || 58;
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
var obj74043_onTap_activeActionGroupIndex = -1;
var obj74043_onTap_runningActionsCount = 0;
var obj74043_onTap_loopCount = 0;
var obj74040_onTap_activeActionGroupIndex = -1;
var obj74040_onTap_runningActionsCount = 0;
var obj74040_onTap_loopCount = 0;
var obj74036_onTap_activeActionGroupIndex = -1;
var obj74036_onTap_runningActionsCount = 0;
var obj74036_onTap_loopCount = 0;
var obj74004_onDrag_activeActionGroupIndex = -1;
var obj74004_onDrag_runningActionsCount = 0;
var obj74004_onDrag_loopCount = 0;
var obj74004_onTouchDown_activeActionGroupIndex = -1;
var obj74004_onTouchDown_runningActionsCount = 0;
var obj74004_onTouchDown_loopCount = 0;
var obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_runningActionsCount = 0;
var obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_loopCount = 0;
var obj74004_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj74004_droppedInsideTargetActions_runningActionsCount = 0;
var obj74004_droppedInsideTargetActions_loopCount = 0;
var obj73988_onDrag_activeActionGroupIndex = -1;
var obj73988_onDrag_runningActionsCount = 0;
var obj73988_onDrag_loopCount = 0;
var obj73988_onTouchDown_activeActionGroupIndex = -1;
var obj73988_onTouchDown_runningActionsCount = 0;
var obj73988_onTouchDown_loopCount = 0;
var obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_runningActionsCount = 0;
var obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_loopCount = 0;
var obj73988_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj73988_droppedInsideTargetActions_runningActionsCount = 0;
var obj73988_droppedInsideTargetActions_loopCount = 0;
var obj73966_onTap_activeActionGroupIndex = -1;
var obj73966_onTap_runningActionsCount = 0;
var obj73966_onTap_loopCount = 0;
var obj73958_onTap_activeActionGroupIndex = -1;
var obj73958_onTap_runningActionsCount = 0;
var obj73958_onTap_loopCount = 0;
var obj89928_onTap_activeActionGroupIndex = -1;
var obj89928_onTap_runningActionsCount = 0;
var obj89928_onTap_loopCount = 0;
var obj89923_onTap_activeActionGroupIndex = -1;
var obj89923_onTap_runningActionsCount = 0;
var obj89923_onTap_loopCount = 0;
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
		
obj74043_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74043_onTap_activeActionGroupIndex = -1;
		$("#obj74043").trigger("obj74043_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74043) {
				console.warn("de-queueing event obj74043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74043_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74045();
function goToPage_74045() {
	window.obj74043_onTap_runningActionsCount = obj74043_onTap_runningActionsCount + 1;
	$("#anchor345")[0].click();
	window.obj74043_onTap_runningActionsCount = window.obj74043_onTap_runningActionsCount - 1;
if (window.obj74043_onTap_runningActionsCount < 0) {
	window.obj74043_onTap_runningActionsCount = 0;
} else if (window.obj74043_onTap_runningActionsCount == 0) {
	obj74043_onTap_actionGroup1();
}
}





















};
obj74043_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74043_onTap_activeActionGroupIndex = -1;
		$("#obj74043").trigger("obj74043_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74043) {
				console.warn("de-queueing event obj74043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74043_onTap_activeActionGroupIndex = 1;
	





















};
obj74040_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74040_onTap_activeActionGroupIndex = -1;
		$("#obj74040").trigger("obj74040_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74040) {
				console.warn("de-queueing event obj74040." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74040").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74040_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74042();
function goToPage_74042() {
	window.obj74040_onTap_runningActionsCount = obj74040_onTap_runningActionsCount + 1;
	$("#anchor346")[0].click();
	window.obj74040_onTap_runningActionsCount = window.obj74040_onTap_runningActionsCount - 1;
if (window.obj74040_onTap_runningActionsCount < 0) {
	window.obj74040_onTap_runningActionsCount = 0;
} else if (window.obj74040_onTap_runningActionsCount == 0) {
	obj74040_onTap_actionGroup1();
}
}





















};
obj74040_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74040_onTap_activeActionGroupIndex = -1;
		$("#obj74040").trigger("obj74040_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74040) {
				console.warn("de-queueing event obj74040." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74040").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74040_onTap_activeActionGroupIndex = 1;
	





















};
obj74036_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74036_onTap_activeActionGroupIndex = -1;
		$("#obj74036").trigger("obj74036_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74036) {
				console.warn("de-queueing event obj74036." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74036").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74036_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74038();
function goToPage_74038() {
	window.obj74036_onTap_runningActionsCount = obj74036_onTap_runningActionsCount + 1;
	$("#anchor347")[0].click();
	window.obj74036_onTap_runningActionsCount = window.obj74036_onTap_runningActionsCount - 1;
if (window.obj74036_onTap_runningActionsCount < 0) {
	window.obj74036_onTap_runningActionsCount = 0;
} else if (window.obj74036_onTap_runningActionsCount == 0) {
	obj74036_onTap_actionGroup1();
}
}





















};
obj74036_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74036_onTap_activeActionGroupIndex = -1;
		$("#obj74036").trigger("obj74036_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74036) {
				console.warn("de-queueing event obj74036." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74036").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74036_onTap_activeActionGroupIndex = 1;
	





















};
obj74004_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74004_onTouchDown_activeActionGroupIndex = -1;
		$("#obj74004").trigger("obj74004_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74004) {
				console.warn("de-queueing event obj74004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74004_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj74004");
//	action: dragDrop
//	target: obj74004 
dragDrop_74007();
function dragDrop_74007() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj74004_onTouchDown_runningActionsCount = obj74004_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj74004');
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
	  	containerNode = $('#obj74028');
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
    	window.obj74004_onTouchDown_runningActionsCount = window.obj74004_onTouchDown_runningActionsCount - 1;
if (window.obj74004_onTouchDown_runningActionsCount < 0) {
	window.obj74004_onTouchDown_runningActionsCount = 0;
} else if (window.obj74004_onTouchDown_runningActionsCount == 0) {
	obj74004_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj74024");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_74007 = false;
    	var dropped_id_74007;
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
					dropped_74007 = true;
					dropped_id_74007 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_74007) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj74004").trigger('SCActionDragDrop74007_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj74004_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74004_onTouchDown_activeActionGroupIndex = -1;
		$("#obj74004").trigger("obj74004_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74004) {
				console.warn("de-queueing event obj74004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74004_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74004").trigger("obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74004) {
				console.warn("de-queueing event obj74004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj74004 
move_92288();
function move_92288() {
	window.obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_runningActionsCount = obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj74004");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 138;
	var moveY = 510;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_runningActionsCount = window.obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74004").trigger("obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74004) {
				console.warn("de-queueing event obj74004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj74004_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74004").trigger("obj74004_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74004) {
				console.warn("de-queueing event obj74004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74009();
function runjs_74009() {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = obj74004_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74024").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74004_droppedInsideTargetActions_runningActionsCount = window.obj74004_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74004_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74004_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74004_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj74004_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74004").trigger("obj74004_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74004) {
				console.warn("de-queueing event obj74004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74010();
function runjs_74010() {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = obj74004_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74024").css("border-color", "#C00000"); $("#obj74024").css("border-width", "2px"); $("#obj74024").css("border-style", "solid"); $("#obj74024").css("border-radius", "10px"); $("#obj74024").css("-webkit-border-radius", "10px"); $("#obj74024").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74004_droppedInsideTargetActions_runningActionsCount = window.obj74004_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74004_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74004_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74004_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj74004_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74004").trigger("obj74004_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74004) {
				console.warn("de-queueing event obj74004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74022 
hide_74011();
function hide_74011() {
	var selector = "#obj74022";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74004_droppedInsideTargetActions_runningActionsCount = obj74004_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74004_droppedInsideTargetActions_runningActionsCount = window.obj74004_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74004_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74004_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74004_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74011(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74004_droppedInsideTargetActions_runningActionsCount = window.obj74004_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74004_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74004_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74004_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74004_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74004").trigger("obj74004_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74004) {
				console.warn("de-queueing event obj74004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74012();
function runjs_74012() {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = obj74004_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74004").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74004_droppedInsideTargetActions_runningActionsCount = window.obj74004_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74004_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74004_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74004_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj74004_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74004").trigger("obj74004_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74004) {
				console.warn("de-queueing event obj74004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74013();
function switchText_74013() {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = obj74004_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73999_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73999_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73999").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73999_content");
			setTimeout(function () {
				window.obj74004_droppedInsideTargetActions_runningActionsCount = window.obj74004_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74004_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74004_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74004_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj73999 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74004_droppedInsideTargetActions_runningActionsCount = window.obj74004_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74004_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74004_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74004_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj74004_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74004").trigger("obj74004_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74004) {
				console.warn("de-queueing event obj74004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74004 
move_74014();
function move_74014() {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = obj74004_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj74004");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 138;
	var moveY = 510;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74004_droppedInsideTargetActions_runningActionsCount = window.obj74004_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74004_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74004_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74004_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj74004_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74004").trigger("obj74004_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74004) {
				console.warn("de-queueing event obj74004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74015();
function runjs_74015() {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = obj74004_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74024").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj74004_droppedInsideTargetActions_runningActionsCount = window.obj74004_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74004_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74004_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74004_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj74004_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74004").trigger("obj74004_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74004) {
				console.warn("de-queueing event obj74004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74016();
function runjs_74016() {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = obj74004_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74024").css("border-color", "#000000"); $("#obj74024").css("border-width", "1px"); $("#obj74024").css("border-style", "solid"); $("#obj74024").css("border-radius", "10px"); $("#obj74024").css("-webkit-border-radius", "10px"); $("#obj74024").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74004_droppedInsideTargetActions_runningActionsCount = window.obj74004_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74004_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74004_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74004_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj74004_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74004").trigger("obj74004_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74004) {
				console.warn("de-queueing event obj74004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74022
(function(){
	window.obj74004_droppedInsideTargetActions_runningActionsCount = obj74004_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj74022";
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
					window.obj74004_droppedInsideTargetActions_runningActionsCount = window.obj74004_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74004_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74004_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74004_droppedInsideTargetActions_actionGroup9();
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
				window.obj74004_droppedInsideTargetActions_runningActionsCount = window.obj74004_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74004_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74004_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74004_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74004_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74004").trigger("obj74004_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74004) {
				console.warn("de-queueing event obj74004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74018();
function runjs_74018() {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = obj74004_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74004").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74004_droppedInsideTargetActions_runningActionsCount = window.obj74004_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74004_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74004_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74004_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj74004_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74004").trigger("obj74004_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74004) {
				console.warn("de-queueing event obj74004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74019();
function runjs_74019() {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = obj74004_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74004").css("border-color", "rgba(0,0,0,0)"); $("#obj74004").css("border-width", "0px"); $("#obj74004").css("border-style", "solid"); $("#obj74004").css("border-radius", "10px"); $("#obj74004").css("-webkit-border-radius", "10px"); $("#obj74004").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74004_droppedInsideTargetActions_runningActionsCount = window.obj74004_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74004_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74004_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74004_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj74004_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74004").trigger("obj74004_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74004) {
				console.warn("de-queueing event obj74004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj73984 
playAudio_74020();
function playAudio_74020() {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = obj74004_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj73984")[0];
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
		    window.obj74004_droppedInsideTargetActions_runningActionsCount = window.obj74004_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74004_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74004_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74004_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74004_droppedInsideTargetActions_runningActionsCount = window.obj74004_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74004_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74004_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74004_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj74004_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74004").trigger("obj74004_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74004) {
				console.warn("de-queueing event obj74004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74021();
function switchText_74021() {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = obj74004_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73999_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73999_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73999").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73999_content");
			setTimeout(function () {
				window.obj74004_droppedInsideTargetActions_runningActionsCount = window.obj74004_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74004_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74004_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74004_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj73999 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74004_droppedInsideTargetActions_runningActionsCount = window.obj74004_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74004_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74004_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74004_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74004_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj74004_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74004").trigger("obj74004_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74004) {
				console.warn("de-queueing event obj74004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74004_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj73988_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73988_onTouchDown_activeActionGroupIndex = -1;
		$("#obj73988").trigger("obj73988_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73988) {
				console.warn("de-queueing event obj73988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73988_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj73988");
//	action: dragDrop
//	target: obj73988 
dragDrop_73991();
function dragDrop_73991() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj73988_onTouchDown_runningActionsCount = obj73988_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj73988');
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
	  	containerNode = $('#obj74028');
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
    	window.obj73988_onTouchDown_runningActionsCount = window.obj73988_onTouchDown_runningActionsCount - 1;
if (window.obj73988_onTouchDown_runningActionsCount < 0) {
	window.obj73988_onTouchDown_runningActionsCount = 0;
} else if (window.obj73988_onTouchDown_runningActionsCount == 0) {
	obj73988_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj74024");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_73991 = false;
    	var dropped_id_73991;
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
					dropped_73991 = true;
					dropped_id_73991 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_73991) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj73988").trigger('SCActionDragDrop73991_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj73988_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73988_onTouchDown_activeActionGroupIndex = -1;
		$("#obj73988").trigger("obj73988_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73988) {
				console.warn("de-queueing event obj73988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73988_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73988").trigger("obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73988) {
				console.warn("de-queueing event obj73988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj73988 
move_92290();
function move_92290() {
	window.obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_runningActionsCount = obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj73988");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 329;
	var moveY = 509;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_runningActionsCount = window.obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73988").trigger("obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73988) {
				console.warn("de-queueing event obj73988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj73988_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73988_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73988").trigger("obj73988_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73988) {
				console.warn("de-queueing event obj73988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73988_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_73993();
function runjs_73993() {
	window.obj73988_droppedInsideTargetActions_runningActionsCount = obj73988_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74024").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj73988_droppedInsideTargetActions_runningActionsCount = window.obj73988_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73988_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73988_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73988_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73988_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj73988_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73988_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73988").trigger("obj73988_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73988) {
				console.warn("de-queueing event obj73988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73988_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_73997();
function switchText_73997() {
	window.obj73988_droppedInsideTargetActions_runningActionsCount = obj73988_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73999_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73999_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73999").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73999_content");
			setTimeout(function () {
				window.obj73988_droppedInsideTargetActions_runningActionsCount = window.obj73988_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73988_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73988_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73988_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73988_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj73999 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73988_droppedInsideTargetActions_runningActionsCount = window.obj73988_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73988_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73988_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73988_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73988_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj73988_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73988_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73988").trigger("obj73988_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73988) {
				console.warn("de-queueing event obj73988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73988_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_73994();
function runjs_73994() {
	window.obj73988_droppedInsideTargetActions_runningActionsCount = obj73988_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74024").css("border-color", "#058E3F"); $("#obj74024").css("border-width", "2px"); $("#obj74024").css("border-style", "solid"); $("#obj74024").css("border-radius", "10px"); $("#obj74024").css("-webkit-border-radius", "10px"); $("#obj74024").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73988_droppedInsideTargetActions_runningActionsCount = window.obj73988_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73988_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73988_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73988_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73988_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj73988_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73988_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73988").trigger("obj73988_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73988) {
				console.warn("de-queueing event obj73988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73988_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj74022 
hide_73995();
function hide_73995() {
	var selector = "#obj74022";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73988_droppedInsideTargetActions_runningActionsCount = obj73988_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73988_droppedInsideTargetActions_runningActionsCount = window.obj73988_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73988_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73988_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73988_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73988_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73995(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73988_droppedInsideTargetActions_runningActionsCount = window.obj73988_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73988_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73988_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73988_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73988_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj73988_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73988_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73988").trigger("obj73988_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73988) {
				console.warn("de-queueing event obj73988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73988_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_73996();
function runjs_73996() {
	window.obj73988_droppedInsideTargetActions_runningActionsCount = obj73988_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj73988").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj73988_droppedInsideTargetActions_runningActionsCount = window.obj73988_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73988_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73988_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73988_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73988_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj73988_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73988_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73988").trigger("obj73988_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73988) {
				console.warn("de-queueing event obj73988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73988_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj74003 
playAudio_73998();
function playAudio_73998() {
	window.obj73988_droppedInsideTargetActions_runningActionsCount = obj73988_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj74003")[0];
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
		    window.obj73988_droppedInsideTargetActions_runningActionsCount = window.obj73988_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73988_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73988_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73988_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73988_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj73988_droppedInsideTargetActions_runningActionsCount = window.obj73988_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73988_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73988_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73988_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73988_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj73988_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73988_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73988").trigger("obj73988_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73988) {
				console.warn("de-queueing event obj73988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73988_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90183();
function switchText_90183() {
	window.obj73988_droppedInsideTargetActions_runningActionsCount = obj73988_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73999_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73999_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73999").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73999_content");
			setTimeout(function () {
				window.obj73988_droppedInsideTargetActions_runningActionsCount = window.obj73988_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73988_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73988_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73988_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73988_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj73999 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73988_droppedInsideTargetActions_runningActionsCount = window.obj73988_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73988_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73988_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73988_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73988_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj73988_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73988_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73988").trigger("obj73988_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73988) {
				console.warn("de-queueing event obj73988." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73988").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73988_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj73966_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73966_onTap_activeActionGroupIndex = -1;
		$("#obj73966").trigger("obj73966_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73966) {
				console.warn("de-queueing event obj73966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73966_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj73966 
hide_73969();
function hide_73969() {
	var selector = "#obj73966";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73966_onTap_runningActionsCount = obj73966_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73966_onTap_runningActionsCount = window.obj73966_onTap_runningActionsCount - 1;
if (window.obj73966_onTap_runningActionsCount < 0) {
	window.obj73966_onTap_runningActionsCount = 0;
} else if (window.obj73966_onTap_runningActionsCount == 0) {
	obj73966_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73969(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73966_onTap_runningActionsCount = window.obj73966_onTap_runningActionsCount - 1;
if (window.obj73966_onTap_runningActionsCount < 0) {
	window.obj73966_onTap_runningActionsCount = 0;
} else if (window.obj73966_onTap_runningActionsCount == 0) {
	obj73966_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj73956 
stopMovie_73968();
function stopMovie_73968() {
	window.obj73966_onTap_runningActionsCount = obj73966_onTap_runningActionsCount + 1;
	var myVideo = $("#obj73956")[0];
	myVideo.pause();
	window.obj73966_onTap_runningActionsCount = window.obj73966_onTap_runningActionsCount - 1;
if (window.obj73966_onTap_runningActionsCount < 0) {
	window.obj73966_onTap_runningActionsCount = 0;
} else if (window.obj73966_onTap_runningActionsCount == 0) {
	obj73966_onTap_actionGroup1();
}
}
















};
obj73966_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73966_onTap_activeActionGroupIndex = -1;
		$("#obj73966").trigger("obj73966_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73966) {
				console.warn("de-queueing event obj73966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73966_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj73958
(function(){
	window.obj73966_onTap_runningActionsCount = obj73966_onTap_runningActionsCount + 1;

	var selector = "#obj73958";
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
					window.obj73966_onTap_runningActionsCount = window.obj73966_onTap_runningActionsCount - 1;
if (window.obj73966_onTap_runningActionsCount < 0) {
	window.obj73966_onTap_runningActionsCount = 0;
} else if (window.obj73966_onTap_runningActionsCount == 0) {
	obj73966_onTap_actionGroup2();
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
				window.obj73966_onTap_runningActionsCount = window.obj73966_onTap_runningActionsCount - 1;
if (window.obj73966_onTap_runningActionsCount < 0) {
	window.obj73966_onTap_runningActionsCount = 0;
} else if (window.obj73966_onTap_runningActionsCount == 0) {
	obj73966_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj73966_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73966_onTap_activeActionGroupIndex = -1;
		$("#obj73966").trigger("obj73966_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73966) {
				console.warn("de-queueing event obj73966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73966_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj73956 
move_73971();
function move_73971() {
	window.obj73966_onTap_runningActionsCount = obj73966_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj73956");
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
			window.obj73966_onTap_runningActionsCount = window.obj73966_onTap_runningActionsCount - 1;
if (window.obj73966_onTap_runningActionsCount < 0) {
	window.obj73966_onTap_runningActionsCount = 0;
} else if (window.obj73966_onTap_runningActionsCount == 0) {
	obj73966_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj73966_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73966_onTap_activeActionGroupIndex = -1;
		$("#obj73966").trigger("obj73966_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73966) {
				console.warn("de-queueing event obj73966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73966_onTap_activeActionGroupIndex = 3;
	





















};
obj73958_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73958_onTap_activeActionGroupIndex = -1;
		$("#obj73958").trigger("obj73958_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73958) {
				console.warn("de-queueing event obj73958." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73958").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73958_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj73958 
hide_73961();
function hide_73961() {
	var selector = "#obj73958";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73958_onTap_runningActionsCount = obj73958_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73958_onTap_runningActionsCount = window.obj73958_onTap_runningActionsCount - 1;
if (window.obj73958_onTap_runningActionsCount < 0) {
	window.obj73958_onTap_runningActionsCount = 0;
} else if (window.obj73958_onTap_runningActionsCount == 0) {
	obj73958_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73961(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73958_onTap_runningActionsCount = window.obj73958_onTap_runningActionsCount - 1;
if (window.obj73958_onTap_runningActionsCount < 0) {
	window.obj73958_onTap_runningActionsCount = 0;
} else if (window.obj73958_onTap_runningActionsCount == 0) {
	obj73958_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj73956 
playPauseMovie_73960();
function playPauseMovie_73960() {
	window.obj73958_onTap_runningActionsCount = obj73958_onTap_runningActionsCount + 1;
	var myVideo = $("#obj73956")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj73958_onTap_runningActionsCount = window.obj73958_onTap_runningActionsCount - 1;
if (window.obj73958_onTap_runningActionsCount < 0) {
	window.obj73958_onTap_runningActionsCount = 0;
} else if (window.obj73958_onTap_runningActionsCount == 0) {
	obj73958_onTap_actionGroup1();
}
}

















};
obj73958_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73958_onTap_activeActionGroupIndex = -1;
		$("#obj73958").trigger("obj73958_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73958) {
				console.warn("de-queueing event obj73958." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73958").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73958_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj73966
(function(){
	window.obj73958_onTap_runningActionsCount = obj73958_onTap_runningActionsCount + 1;

	var selector = "#obj73966";
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
					window.obj73958_onTap_runningActionsCount = window.obj73958_onTap_runningActionsCount - 1;
if (window.obj73958_onTap_runningActionsCount < 0) {
	window.obj73958_onTap_runningActionsCount = 0;
} else if (window.obj73958_onTap_runningActionsCount == 0) {
	obj73958_onTap_actionGroup2();
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
				window.obj73958_onTap_runningActionsCount = window.obj73958_onTap_runningActionsCount - 1;
if (window.obj73958_onTap_runningActionsCount < 0) {
	window.obj73958_onTap_runningActionsCount = 0;
} else if (window.obj73958_onTap_runningActionsCount == 0) {
	obj73958_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj73958_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73958_onTap_activeActionGroupIndex = -1;
		$("#obj73958").trigger("obj73958_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73958) {
				console.warn("de-queueing event obj73958." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73958").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73958_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj73956 
move_73963();
function move_73963() {
	window.obj73958_onTap_runningActionsCount = obj73958_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj73956");
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
			window.obj73958_onTap_runningActionsCount = window.obj73958_onTap_runningActionsCount - 1;
if (window.obj73958_onTap_runningActionsCount < 0) {
	window.obj73958_onTap_runningActionsCount = 0;
} else if (window.obj73958_onTap_runningActionsCount == 0) {
	obj73958_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj73958_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73958_onTap_activeActionGroupIndex = -1;
		$("#obj73958").trigger("obj73958_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73958) {
				console.warn("de-queueing event obj73958." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73958").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73958_onTap_activeActionGroupIndex = 3;
	





















};
obj89928_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89928_onTap_activeActionGroupIndex = -1;
		$("#obj89928").trigger("obj89928_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89928) {
				console.warn("de-queueing event obj89928." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89928").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89928_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89933 
stopAudio_89930();
function stopAudio_89930() {
	window.obj89928_onTap_runningActionsCount = obj89928_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89933")[0];
	myAudio.pause();
	window.obj89928_onTap_runningActionsCount = window.obj89928_onTap_runningActionsCount - 1;
if (window.obj89928_onTap_runningActionsCount < 0) {
	window.obj89928_onTap_runningActionsCount = 0;
} else if (window.obj89928_onTap_runningActionsCount == 0) {
	obj89928_onTap_actionGroup1();
}
}








};
obj89928_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89928_onTap_activeActionGroupIndex = -1;
		$("#obj89928").trigger("obj89928_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89928) {
				console.warn("de-queueing event obj89928." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89928").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89928_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89928 
hide_89931();
function hide_89931() {
	var selector = "#obj89928";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89928_onTap_runningActionsCount = obj89928_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89928_onTap_runningActionsCount = window.obj89928_onTap_runningActionsCount - 1;
if (window.obj89928_onTap_runningActionsCount < 0) {
	window.obj89928_onTap_runningActionsCount = 0;
} else if (window.obj89928_onTap_runningActionsCount == 0) {
	obj89928_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89931(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89928_onTap_runningActionsCount = window.obj89928_onTap_runningActionsCount - 1;
if (window.obj89928_onTap_runningActionsCount < 0) {
	window.obj89928_onTap_runningActionsCount = 0;
} else if (window.obj89928_onTap_runningActionsCount == 0) {
	obj89928_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89928_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89928_onTap_activeActionGroupIndex = -1;
		$("#obj89928").trigger("obj89928_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89928) {
				console.warn("de-queueing event obj89928." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89928").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89928_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89923
(function(){
	window.obj89928_onTap_runningActionsCount = obj89928_onTap_runningActionsCount + 1;

	var selector = "#obj89923";
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
					window.obj89928_onTap_runningActionsCount = window.obj89928_onTap_runningActionsCount - 1;
if (window.obj89928_onTap_runningActionsCount < 0) {
	window.obj89928_onTap_runningActionsCount = 0;
} else if (window.obj89928_onTap_runningActionsCount == 0) {
	obj89928_onTap_actionGroup3();
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
				window.obj89928_onTap_runningActionsCount = window.obj89928_onTap_runningActionsCount - 1;
if (window.obj89928_onTap_runningActionsCount < 0) {
	window.obj89928_onTap_runningActionsCount = 0;
} else if (window.obj89928_onTap_runningActionsCount == 0) {
	obj89928_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89928_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89928_onTap_activeActionGroupIndex = -1;
		$("#obj89928").trigger("obj89928_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89928) {
				console.warn("de-queueing event obj89928." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89928").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89928_onTap_activeActionGroupIndex = 3;
	





















};
obj89923_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89923_onTap_activeActionGroupIndex = -1;
		$("#obj89923").trigger("obj89923_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89923) {
				console.warn("de-queueing event obj89923." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89923").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89923_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89923 
hide_89925();
function hide_89925() {
	var selector = "#obj89923";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89923_onTap_runningActionsCount = obj89923_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89923_onTap_runningActionsCount = window.obj89923_onTap_runningActionsCount - 1;
if (window.obj89923_onTap_runningActionsCount < 0) {
	window.obj89923_onTap_runningActionsCount = 0;
} else if (window.obj89923_onTap_runningActionsCount == 0) {
	obj89923_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89925(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89923_onTap_runningActionsCount = window.obj89923_onTap_runningActionsCount - 1;
if (window.obj89923_onTap_runningActionsCount < 0) {
	window.obj89923_onTap_runningActionsCount = 0;
} else if (window.obj89923_onTap_runningActionsCount == 0) {
	obj89923_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89923_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89923_onTap_activeActionGroupIndex = -1;
		$("#obj89923").trigger("obj89923_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89923) {
				console.warn("de-queueing event obj89923." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89923").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89923_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89928
(function(){
	window.obj89923_onTap_runningActionsCount = obj89923_onTap_runningActionsCount + 1;

	var selector = "#obj89928";
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
					window.obj89923_onTap_runningActionsCount = window.obj89923_onTap_runningActionsCount - 1;
if (window.obj89923_onTap_runningActionsCount < 0) {
	window.obj89923_onTap_runningActionsCount = 0;
} else if (window.obj89923_onTap_runningActionsCount == 0) {
	obj89923_onTap_actionGroup2();
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
				window.obj89923_onTap_runningActionsCount = window.obj89923_onTap_runningActionsCount - 1;
if (window.obj89923_onTap_runningActionsCount < 0) {
	window.obj89923_onTap_runningActionsCount = 0;
} else if (window.obj89923_onTap_runningActionsCount == 0) {
	obj89923_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89923_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89923_onTap_activeActionGroupIndex = -1;
		$("#obj89923").trigger("obj89923_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89923) {
				console.warn("de-queueing event obj89923." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89923").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89923_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89933 
playAudio_89927();
function playAudio_89927() {
	window.obj89923_onTap_runningActionsCount = obj89923_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89933")[0];
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
		    window.obj89923_onTap_runningActionsCount = window.obj89923_onTap_runningActionsCount - 1;
if (window.obj89923_onTap_runningActionsCount < 0) {
	window.obj89923_onTap_runningActionsCount = 0;
} else if (window.obj89923_onTap_runningActionsCount == 0) {
	obj89923_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89923_onTap_runningActionsCount = window.obj89923_onTap_runningActionsCount - 1;
if (window.obj89923_onTap_runningActionsCount < 0) {
	window.obj89923_onTap_runningActionsCount = 0;
} else if (window.obj89923_onTap_runningActionsCount == 0) {
	obj89923_onTap_actionGroup3();
}
	}
}









};
obj89923_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89923_onTap_activeActionGroupIndex = -1;
		$("#obj89923").trigger("obj89923_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89923) {
				console.warn("de-queueing event obj89923." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89923").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89923_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj74043: Event Touch Down
 *
 */
$("#obj74043").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74043_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74043_onTap is still running");
	return;
}
var obj74043_onTap_runningActionsCount = 0;
var obj74043_onTap_loopCount = 0;
obj74043_onTap_actionGroup0();
});










/*
 *
 *   obj74040: Event Touch Down
 *
 */
$("#obj74040").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74040_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74040_onTap is still running");
	return;
}
var obj74040_onTap_runningActionsCount = 0;
var obj74040_onTap_loopCount = 0;
obj74040_onTap_actionGroup0();
});










/*
 *
 *   obj74036: Event Touch Down
 *
 */
$("#obj74036").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74036_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74036_onTap is still running");
	return;
}
var obj74036_onTap_runningActionsCount = 0;
var obj74036_onTap_loopCount = 0;
obj74036_onTap_actionGroup0();
});

















































































/*
 *
 *   obj74004: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj74004");
	var winTarget = document.getElementById("obj74004");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj74004").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj74004_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj74004_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj74004_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74004_onTouchDown is still running");
	return;
}
var obj74004_onTouchDown_runningActionsCount = 0;
var obj74004_onTouchDown_loopCount = 0;
obj74004_onTouchDown_actionGroup0();
});



/*
 *
 *   obj74004: Event SCActionDragDrop74007_droppedOutsideTargetActions
 *
 */
$("#obj74004").bind("SCActionDragDrop74007_droppedOutsideTargetActions", function(event) {
	if (window.obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74004_SCActionDragDrop74007_droppedOutsideTargetActions is still running");
	return;
}
var obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_runningActionsCount = 0;
var obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_loopCount = 0;
obj74004_SCActionDragDrop74007_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj74004: Event droppedInsideTargetActions
 *
 */
$("#obj74004").bind("droppedInsideTargetActions", function(event) {
	if (window.obj74004_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74004_droppedInsideTargetActions is still running");
	return;
}
var obj74004_droppedInsideTargetActions_runningActionsCount = 0;
var obj74004_droppedInsideTargetActions_loopCount = 0;
obj74004_droppedInsideTargetActions_actionGroup0();
});




































/*
 *
 *   obj73988: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj73988");
	var winTarget = document.getElementById("obj73988");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj73988").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj73988_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj73988_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj73988_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73988_onTouchDown is still running");
	return;
}
var obj73988_onTouchDown_runningActionsCount = 0;
var obj73988_onTouchDown_loopCount = 0;
obj73988_onTouchDown_actionGroup0();
});



/*
 *
 *   obj73988: Event SCActionDragDrop73991_droppedOutsideTargetActions
 *
 */
$("#obj73988").bind("SCActionDragDrop73991_droppedOutsideTargetActions", function(event) {
	if (window.obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73988_SCActionDragDrop73991_droppedOutsideTargetActions is still running");
	return;
}
var obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_runningActionsCount = 0;
var obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_loopCount = 0;
obj73988_SCActionDragDrop73991_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj73988: Event droppedInsideTargetActions
 *
 */
$("#obj73988").bind("droppedInsideTargetActions", function(event) {
	if (window.obj73988_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73988_droppedInsideTargetActions is still running");
	return;
}
var obj73988_droppedInsideTargetActions_runningActionsCount = 0;
var obj73988_droppedInsideTargetActions_loopCount = 0;
obj73988_droppedInsideTargetActions_actionGroup0();
});

























/*
 *
 *   obj73966: Event Touch Down
 *
 */
$("#obj73966").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj73966_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73966_onTap is still running");
	return;
}
var obj73966_onTap_runningActionsCount = 0;
var obj73966_onTap_loopCount = 0;
obj73966_onTap_actionGroup0();
});










/*
 *
 *   obj73958: Event Touch Down
 *
 */
$("#obj73958").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj73958_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73958_onTap is still running");
	return;
}
var obj73958_onTap_runningActionsCount = 0;
var obj73958_onTap_loopCount = 0;
obj73958_onTap_actionGroup0();
});










/*
 *
 *   obj89928: Event Touch Down
 *
 */
$("#obj89928").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89928_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89928_onTap is still running");
	return;
}
var obj89928_onTap_runningActionsCount = 0;
var obj89928_onTap_loopCount = 0;
obj89928_onTap_actionGroup0();
});










/*
 *
 *   obj89923: Event Touch Down
 *
 */
$("#obj89923").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89923_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89923_onTap is still running");
	return;
}
var obj89923_onTap_runningActionsCount = 0;
var obj89923_onTap_loopCount = 0;
obj89923_onTap_actionGroup0();
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
	
$("#obj74046").trigger('SCEventShow');
$("#obj74043").trigger('SCEventShow');
$("#obj74040").trigger('SCEventShow');
$("#obj74036").trigger('SCEventShow');
$("#obj74034").trigger('SCEventShow');
$("#obj74032").trigger('SCEventShow');
$("#obj74030").trigger('SCEventShow');
$("#obj74028").trigger('SCEventShow');
$("#obj74026").trigger('SCEventShow');
$("#obj74024").trigger('SCEventShow');
$("#obj74022").trigger('SCEventShow');
$("#obj74004").trigger('SCEventShow');
$("#obj74003").trigger('SCEventShow');
$("#obj74001").trigger('SCEventShow');
$("#obj73999").trigger('SCEventShow');
$("#obj73988").trigger('SCEventShow');
$("#obj73986").trigger('SCEventShow');
$("#obj73984").trigger('SCEventShow');
$("#obj73966").trigger('SCEventShow');
$("#obj73958").trigger('SCEventShow');
$("#obj89928").trigger('SCEventShow');
$("#obj89923").trigger('SCEventShow');
$("#obj89933").trigger('SCEventShow');
$("#obj94745").trigger('SCEventShow');
$("#obj73956").trigger('SCEventShow');
	
});