pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 21673;
pubcoder.page.title = pubcoder.page.title || "80";
pubcoder.page.number = pubcoder.page.number || 80;
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
var obj77437_onTap_activeActionGroupIndex = -1;
var obj77437_onTap_runningActionsCount = 0;
var obj77437_onTap_loopCount = 0;
var obj77434_onTap_activeActionGroupIndex = -1;
var obj77434_onTap_runningActionsCount = 0;
var obj77434_onTap_loopCount = 0;
var obj77430_onTap_activeActionGroupIndex = -1;
var obj77430_onTap_runningActionsCount = 0;
var obj77430_onTap_loopCount = 0;
var obj77361_onDrag_activeActionGroupIndex = -1;
var obj77361_onDrag_runningActionsCount = 0;
var obj77361_onDrag_loopCount = 0;
var obj77361_onTouchDown_activeActionGroupIndex = -1;
var obj77361_onTouchDown_runningActionsCount = 0;
var obj77361_onTouchDown_loopCount = 0;
var obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_runningActionsCount = 0;
var obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_loopCount = 0;
var obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj77361_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj77361_droppedInsideTargetActions_3_loopCount = 0;
var obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj77361_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj77361_droppedInsideTargetActions_2_loopCount = 0;
var obj77361_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj77361_droppedInsideTargetActions_runningActionsCount = 0;
var obj77361_droppedInsideTargetActions_loopCount = 0;
var obj77318_onDrag_activeActionGroupIndex = -1;
var obj77318_onDrag_runningActionsCount = 0;
var obj77318_onDrag_loopCount = 0;
var obj77318_onTouchDown_activeActionGroupIndex = -1;
var obj77318_onTouchDown_runningActionsCount = 0;
var obj77318_onTouchDown_loopCount = 0;
var obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_runningActionsCount = 0;
var obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_loopCount = 0;
var obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj77318_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj77318_droppedInsideTargetActions_3_loopCount = 0;
var obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj77318_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj77318_droppedInsideTargetActions_2_loopCount = 0;
var obj77318_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj77318_droppedInsideTargetActions_runningActionsCount = 0;
var obj77318_droppedInsideTargetActions_loopCount = 0;
var obj77279_onDrag_activeActionGroupIndex = -1;
var obj77279_onDrag_runningActionsCount = 0;
var obj77279_onDrag_loopCount = 0;
var obj77279_onTouchDown_activeActionGroupIndex = -1;
var obj77279_onTouchDown_runningActionsCount = 0;
var obj77279_onTouchDown_loopCount = 0;
var obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_runningActionsCount = 0;
var obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_loopCount = 0;
var obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj77279_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj77279_droppedInsideTargetActions_3_loopCount = 0;
var obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj77279_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj77279_droppedInsideTargetActions_2_loopCount = 0;
var obj77279_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj77279_droppedInsideTargetActions_runningActionsCount = 0;
var obj77279_droppedInsideTargetActions_loopCount = 0;
var obj77261_onTap_activeActionGroupIndex = -1;
var obj77261_onTap_runningActionsCount = 0;
var obj77261_onTap_loopCount = 0;
var obj77253_onTap_activeActionGroupIndex = -1;
var obj77253_onTap_runningActionsCount = 0;
var obj77253_onTap_loopCount = 0;
var obj87821_onTap_activeActionGroupIndex = -1;
var obj87821_onTap_runningActionsCount = 0;
var obj87821_onTap_loopCount = 0;
var obj87816_onTap_activeActionGroupIndex = -1;
var obj87816_onTap_runningActionsCount = 0;
var obj87816_onTap_loopCount = 0;
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
		
obj77437_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77437_onTap_activeActionGroupIndex = -1;
		$("#obj77437").trigger("obj77437_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77437) {
				console.warn("de-queueing event obj77437." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77437").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77437_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_77439();
function goToPage_77439() {
	window.obj77437_onTap_runningActionsCount = obj77437_onTap_runningActionsCount + 1;
	$("#anchor470")[0].click();
	window.obj77437_onTap_runningActionsCount = window.obj77437_onTap_runningActionsCount - 1;
if (window.obj77437_onTap_runningActionsCount < 0) {
	window.obj77437_onTap_runningActionsCount = 0;
} else if (window.obj77437_onTap_runningActionsCount == 0) {
	obj77437_onTap_actionGroup1();
}
}





















};
obj77437_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77437_onTap_activeActionGroupIndex = -1;
		$("#obj77437").trigger("obj77437_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77437) {
				console.warn("de-queueing event obj77437." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77437").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77437_onTap_activeActionGroupIndex = 1;
	





















};
obj77434_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77434_onTap_activeActionGroupIndex = -1;
		$("#obj77434").trigger("obj77434_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77434) {
				console.warn("de-queueing event obj77434." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77434").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77434_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_77436();
function goToPage_77436() {
	window.obj77434_onTap_runningActionsCount = obj77434_onTap_runningActionsCount + 1;
	$("#anchor471")[0].click();
	window.obj77434_onTap_runningActionsCount = window.obj77434_onTap_runningActionsCount - 1;
if (window.obj77434_onTap_runningActionsCount < 0) {
	window.obj77434_onTap_runningActionsCount = 0;
} else if (window.obj77434_onTap_runningActionsCount == 0) {
	obj77434_onTap_actionGroup1();
}
}





















};
obj77434_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77434_onTap_activeActionGroupIndex = -1;
		$("#obj77434").trigger("obj77434_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77434) {
				console.warn("de-queueing event obj77434." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77434").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77434_onTap_activeActionGroupIndex = 1;
	





















};
obj77430_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77430_onTap_activeActionGroupIndex = -1;
		$("#obj77430").trigger("obj77430_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77430) {
				console.warn("de-queueing event obj77430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77430_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_77432();
function goToPage_77432() {
	window.obj77430_onTap_runningActionsCount = obj77430_onTap_runningActionsCount + 1;
	$("#anchor472")[0].click();
	window.obj77430_onTap_runningActionsCount = window.obj77430_onTap_runningActionsCount - 1;
if (window.obj77430_onTap_runningActionsCount < 0) {
	window.obj77430_onTap_runningActionsCount = 0;
} else if (window.obj77430_onTap_runningActionsCount == 0) {
	obj77430_onTap_actionGroup1();
}
}





















};
obj77430_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77430_onTap_activeActionGroupIndex = -1;
		$("#obj77430").trigger("obj77430_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77430) {
				console.warn("de-queueing event obj77430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77430_onTap_activeActionGroupIndex = 1;
	





















};
obj77361_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_onTouchDown_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj77361");
//	action: dragDrop
//	target: obj77361 
dragDrop_77364();
function dragDrop_77364() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj77361_onTouchDown_runningActionsCount = obj77361_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj77361');
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
	  	containerNode = $('#obj77420');
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
    	window.obj77361_onTouchDown_runningActionsCount = window.obj77361_onTouchDown_runningActionsCount - 1;
if (window.obj77361_onTouchDown_runningActionsCount < 0) {
	window.obj77361_onTouchDown_runningActionsCount = 0;
} else if (window.obj77361_onTouchDown_runningActionsCount == 0) {
	obj77361_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj77408","#obj77412","#obj77410");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_77364 = false;
    	var dropped_id_77364;
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
					dropped_77364 = true;
					dropped_id_77364 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_77364) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj77361").trigger('SCActionDragDrop77364_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj77361_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77361_onTouchDown_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj77361 
move_92338();
function move_92338() {
	window.obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_runningActionsCount = obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj77361");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 59;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_runningActionsCount = window.obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj77361_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_77387();
function runjs_77387() {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = obj77361_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj77410").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj77361_droppedInsideTargetActions_3_runningActionsCount = window.obj77361_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj77361_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_77388();
function runjs_77388() {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = obj77361_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj77410").css("border-color", "#C00000"); $("#obj77410").css("border-width", "2px"); $("#obj77410").css("border-style", "solid"); $("#obj77410").css("border-radius", "10px"); $("#obj77410").css("-webkit-border-radius", "10px"); $("#obj77410").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77361_droppedInsideTargetActions_3_runningActionsCount = window.obj77361_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj77361_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj77404 
hide_77389();
function hide_77389() {
	var selector = "#obj77404";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = obj77361_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj77361_droppedInsideTargetActions_3_runningActionsCount = window.obj77361_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_77389(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj77361_droppedInsideTargetActions_3_runningActionsCount = window.obj77361_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj77361_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_77390();
function runjs_77390() {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = obj77361_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj77361").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj77361_droppedInsideTargetActions_3_runningActionsCount = window.obj77361_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj77361_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_77391();
function switchText_77391() {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = obj77361_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj77359_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj77359_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj77359").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj77359_content");
			setTimeout(function () {
				window.obj77361_droppedInsideTargetActions_3_runningActionsCount = window.obj77361_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj77359 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj77361_droppedInsideTargetActions_3_runningActionsCount = window.obj77361_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj77361_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj77361 
move_77392();
function move_77392() {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = obj77361_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj77361");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 59;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj77361_droppedInsideTargetActions_3_runningActionsCount = window.obj77361_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj77361_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_77393();
function runjs_77393() {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = obj77361_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj77410").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj77361_droppedInsideTargetActions_3_runningActionsCount = window.obj77361_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj77361_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_77394();
function runjs_77394() {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = obj77361_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj77410").css("border-color", "#000000"); $("#obj77410").css("border-width", "1px"); $("#obj77410").css("border-style", "solid"); $("#obj77410").css("border-radius", "10px"); $("#obj77410").css("-webkit-border-radius", "10px"); $("#obj77410").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77361_droppedInsideTargetActions_3_runningActionsCount = window.obj77361_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj77361_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj77404
(function(){
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = obj77361_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj77404";
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
					window.obj77361_droppedInsideTargetActions_3_runningActionsCount = window.obj77361_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj77361_droppedInsideTargetActions_3_runningActionsCount = window.obj77361_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj77361_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_77396();
function runjs_77396() {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = obj77361_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj77361").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj77361_droppedInsideTargetActions_3_runningActionsCount = window.obj77361_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj77361_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_77397();
function runjs_77397() {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = obj77361_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj77361").css("border-color", "rgba(0,0,0,0)"); $("#obj77361").css("border-width", "0px"); $("#obj77361").css("border-style", "solid"); $("#obj77361").css("border-radius", "10px"); $("#obj77361").css("-webkit-border-radius", "10px"); $("#obj77361").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77361_droppedInsideTargetActions_3_runningActionsCount = window.obj77361_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj77361_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj77358 
playAudio_77398();
function playAudio_77398() {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = obj77361_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj77358")[0];
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
		    window.obj77361_droppedInsideTargetActions_3_runningActionsCount = window.obj77361_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj77361_droppedInsideTargetActions_3_runningActionsCount = window.obj77361_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj77361_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_77399();
function switchText_77399() {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = obj77361_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj77359_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj77359_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj77359").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj77359_content");
			setTimeout(function () {
				window.obj77361_droppedInsideTargetActions_3_runningActionsCount = window.obj77361_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj77359 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj77361_droppedInsideTargetActions_3_runningActionsCount = window.obj77361_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj77361_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj77361_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_77373();
function runjs_77373() {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = obj77361_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj77412").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj77361_droppedInsideTargetActions_2_runningActionsCount = window.obj77361_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj77361_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_77374();
function runjs_77374() {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = obj77361_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj77412").css("border-color", "#C00000"); $("#obj77412").css("border-width", "2px"); $("#obj77412").css("border-style", "solid"); $("#obj77412").css("border-radius", "10px"); $("#obj77412").css("-webkit-border-radius", "10px"); $("#obj77412").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77361_droppedInsideTargetActions_2_runningActionsCount = window.obj77361_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj77361_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj77406 
hide_77375();
function hide_77375() {
	var selector = "#obj77406";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = obj77361_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj77361_droppedInsideTargetActions_2_runningActionsCount = window.obj77361_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_77375(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj77361_droppedInsideTargetActions_2_runningActionsCount = window.obj77361_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj77361_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_77376();
function runjs_77376() {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = obj77361_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj77361").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj77361_droppedInsideTargetActions_2_runningActionsCount = window.obj77361_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj77361_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_77377();
function switchText_77377() {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = obj77361_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj77359_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj77359_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj77359").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj77359_content");
			setTimeout(function () {
				window.obj77361_droppedInsideTargetActions_2_runningActionsCount = window.obj77361_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj77359 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj77361_droppedInsideTargetActions_2_runningActionsCount = window.obj77361_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj77361_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj77361 
move_77378();
function move_77378() {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = obj77361_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj77361");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 59;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj77361_droppedInsideTargetActions_2_runningActionsCount = window.obj77361_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj77361_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_77379();
function runjs_77379() {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = obj77361_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj77412").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj77361_droppedInsideTargetActions_2_runningActionsCount = window.obj77361_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj77361_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_77380();
function runjs_77380() {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = obj77361_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj77412").css("border-color", "#000000"); $("#obj77412").css("border-width", "1px"); $("#obj77412").css("border-style", "solid"); $("#obj77412").css("border-radius", "10px"); $("#obj77412").css("-webkit-border-radius", "10px"); $("#obj77412").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77361_droppedInsideTargetActions_2_runningActionsCount = window.obj77361_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj77361_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj77406
(function(){
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = obj77361_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj77406";
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
					window.obj77361_droppedInsideTargetActions_2_runningActionsCount = window.obj77361_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj77361_droppedInsideTargetActions_2_runningActionsCount = window.obj77361_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj77361_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_77382();
function runjs_77382() {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = obj77361_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj77361").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj77361_droppedInsideTargetActions_2_runningActionsCount = window.obj77361_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj77361_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_77383();
function runjs_77383() {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = obj77361_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj77361").css("border-color", "rgba(0,0,0,0)"); $("#obj77361").css("border-width", "0px"); $("#obj77361").css("border-style", "solid"); $("#obj77361").css("border-radius", "10px"); $("#obj77361").css("-webkit-border-radius", "10px"); $("#obj77361").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77361_droppedInsideTargetActions_2_runningActionsCount = window.obj77361_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj77361_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj77358 
playAudio_77384();
function playAudio_77384() {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = obj77361_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj77358")[0];
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
		    window.obj77361_droppedInsideTargetActions_2_runningActionsCount = window.obj77361_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj77361_droppedInsideTargetActions_2_runningActionsCount = window.obj77361_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj77361_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_77385();
function switchText_77385() {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = obj77361_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj77359_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj77359_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj77359").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj77359_content");
			setTimeout(function () {
				window.obj77361_droppedInsideTargetActions_2_runningActionsCount = window.obj77361_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj77359 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj77361_droppedInsideTargetActions_2_runningActionsCount = window.obj77361_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj77361_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj77361_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_77366();
function runjs_77366() {
	window.obj77361_droppedInsideTargetActions_runningActionsCount = obj77361_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj77408").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj77361_droppedInsideTargetActions_runningActionsCount = window.obj77361_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj77361_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_77370();
function switchText_77370() {
	window.obj77361_droppedInsideTargetActions_runningActionsCount = obj77361_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj77359_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj77359_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj77359").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj77359_content");
			setTimeout(function () {
				window.obj77361_droppedInsideTargetActions_runningActionsCount = window.obj77361_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj77359 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj77361_droppedInsideTargetActions_runningActionsCount = window.obj77361_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj77361_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_77367();
function runjs_77367() {
	window.obj77361_droppedInsideTargetActions_runningActionsCount = obj77361_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj77408").css("border-color", "#058E3F"); $("#obj77408").css("border-width", "2px"); $("#obj77408").css("border-style", "solid"); $("#obj77408").css("border-radius", "10px"); $("#obj77408").css("-webkit-border-radius", "10px"); $("#obj77408").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77361_droppedInsideTargetActions_runningActionsCount = window.obj77361_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj77361_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj77402 
hide_77368();
function hide_77368() {
	var selector = "#obj77402";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj77361_droppedInsideTargetActions_runningActionsCount = obj77361_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj77361_droppedInsideTargetActions_runningActionsCount = window.obj77361_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_77368(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj77361_droppedInsideTargetActions_runningActionsCount = window.obj77361_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj77361_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_77369();
function runjs_77369() {
	window.obj77361_droppedInsideTargetActions_runningActionsCount = obj77361_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj77361").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj77361_droppedInsideTargetActions_runningActionsCount = window.obj77361_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj77361_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj77357 
playAudio_77371();
function playAudio_77371() {
	window.obj77361_droppedInsideTargetActions_runningActionsCount = obj77361_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj77357")[0];
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
		    window.obj77361_droppedInsideTargetActions_runningActionsCount = window.obj77361_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj77361_droppedInsideTargetActions_runningActionsCount = window.obj77361_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj77361_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90289();
function switchText_90289() {
	window.obj77361_droppedInsideTargetActions_runningActionsCount = obj77361_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj77359_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj77359_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj77359").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj77359_content");
			setTimeout(function () {
				window.obj77361_droppedInsideTargetActions_runningActionsCount = window.obj77361_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj77359 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj77361_droppedInsideTargetActions_runningActionsCount = window.obj77361_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77361_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77361_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77361_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77361_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj77361_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77361_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77361").trigger("obj77361_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77361) {
				console.warn("de-queueing event obj77361." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77361").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77361_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj77318_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_onTouchDown_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj77318");
//	action: dragDrop
//	target: obj77318 
dragDrop_77321();
function dragDrop_77321() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj77318_onTouchDown_runningActionsCount = obj77318_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj77318');
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
	  	containerNode = $('#obj77420');
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
    	window.obj77318_onTouchDown_runningActionsCount = window.obj77318_onTouchDown_runningActionsCount - 1;
if (window.obj77318_onTouchDown_runningActionsCount < 0) {
	window.obj77318_onTouchDown_runningActionsCount = 0;
} else if (window.obj77318_onTouchDown_runningActionsCount == 0) {
	obj77318_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj77318","#obj77412","#obj77408");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_77321 = false;
    	var dropped_id_77321;
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
					dropped_77321 = true;
					dropped_id_77321 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_77321) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj77318").trigger('SCActionDragDrop77321_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj77318_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77318_onTouchDown_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj77318 
move_92340();
function move_92340() {
	window.obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_runningActionsCount = obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj77318");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 221;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_runningActionsCount = window.obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj77318_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_77344();
function runjs_77344() {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = obj77318_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj77408").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj77318_droppedInsideTargetActions_3_runningActionsCount = window.obj77318_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj77318_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_77345();
function runjs_77345() {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = obj77318_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj77408").css("border-color", "#C00000"); $("#obj77408").css("border-width", "2px"); $("#obj77408").css("border-style", "solid"); $("#obj77408").css("border-radius", "10px"); $("#obj77408").css("-webkit-border-radius", "10px"); $("#obj77408").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77318_droppedInsideTargetActions_3_runningActionsCount = window.obj77318_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj77318_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj77402 
hide_77346();
function hide_77346() {
	var selector = "#obj77402";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = obj77318_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj77318_droppedInsideTargetActions_3_runningActionsCount = window.obj77318_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_77346(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj77318_droppedInsideTargetActions_3_runningActionsCount = window.obj77318_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj77318_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_77347();
function runjs_77347() {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = obj77318_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj77318").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj77318_droppedInsideTargetActions_3_runningActionsCount = window.obj77318_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj77318_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_77348();
function switchText_77348() {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = obj77318_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj77359_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj77359_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj77359").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj77359_content");
			setTimeout(function () {
				window.obj77318_droppedInsideTargetActions_3_runningActionsCount = window.obj77318_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj77359 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj77318_droppedInsideTargetActions_3_runningActionsCount = window.obj77318_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj77318_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj77318 
move_77349();
function move_77349() {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = obj77318_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj77318");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 221;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj77318_droppedInsideTargetActions_3_runningActionsCount = window.obj77318_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj77318_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_77350();
function runjs_77350() {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = obj77318_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj77408").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj77318_droppedInsideTargetActions_3_runningActionsCount = window.obj77318_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj77318_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_77351();
function runjs_77351() {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = obj77318_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj77408").css("border-color", "#000000"); $("#obj77408").css("border-width", "1px"); $("#obj77408").css("border-style", "solid"); $("#obj77408").css("border-radius", "10px"); $("#obj77408").css("-webkit-border-radius", "10px"); $("#obj77408").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77318_droppedInsideTargetActions_3_runningActionsCount = window.obj77318_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj77318_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj77402
(function(){
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = obj77318_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj77402";
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
					window.obj77318_droppedInsideTargetActions_3_runningActionsCount = window.obj77318_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj77318_droppedInsideTargetActions_3_runningActionsCount = window.obj77318_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj77318_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_77353();
function runjs_77353() {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = obj77318_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj77318").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj77318_droppedInsideTargetActions_3_runningActionsCount = window.obj77318_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj77318_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_77354();
function runjs_77354() {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = obj77318_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj77318").css("border-color", "rgba(0,0,0,0)"); $("#obj77318").css("border-width", "0px"); $("#obj77318").css("border-style", "solid"); $("#obj77318").css("border-radius", "10px"); $("#obj77318").css("-webkit-border-radius", "10px"); $("#obj77318").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77318_droppedInsideTargetActions_3_runningActionsCount = window.obj77318_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj77318_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj77358 
playAudio_77355();
function playAudio_77355() {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = obj77318_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj77358")[0];
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
		    window.obj77318_droppedInsideTargetActions_3_runningActionsCount = window.obj77318_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj77318_droppedInsideTargetActions_3_runningActionsCount = window.obj77318_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj77318_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_77356();
function switchText_77356() {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = obj77318_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj77359_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj77359_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj77359").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj77359_content");
			setTimeout(function () {
				window.obj77318_droppedInsideTargetActions_3_runningActionsCount = window.obj77318_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj77359 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj77318_droppedInsideTargetActions_3_runningActionsCount = window.obj77318_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj77318_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj77318_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_77330();
function runjs_77330() {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = obj77318_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj77412").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj77318_droppedInsideTargetActions_2_runningActionsCount = window.obj77318_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj77318_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_77331();
function runjs_77331() {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = obj77318_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj77412").css("border-color", "#C00000"); $("#obj77412").css("border-width", "2px"); $("#obj77412").css("border-style", "solid"); $("#obj77412").css("border-radius", "10px"); $("#obj77412").css("-webkit-border-radius", "10px"); $("#obj77412").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77318_droppedInsideTargetActions_2_runningActionsCount = window.obj77318_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj77318_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj77406 
hide_77332();
function hide_77332() {
	var selector = "#obj77406";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = obj77318_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj77318_droppedInsideTargetActions_2_runningActionsCount = window.obj77318_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_77332(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj77318_droppedInsideTargetActions_2_runningActionsCount = window.obj77318_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj77318_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_77333();
function runjs_77333() {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = obj77318_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj77318").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj77318_droppedInsideTargetActions_2_runningActionsCount = window.obj77318_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj77318_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_77334();
function switchText_77334() {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = obj77318_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj77359_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj77359_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj77359").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj77359_content");
			setTimeout(function () {
				window.obj77318_droppedInsideTargetActions_2_runningActionsCount = window.obj77318_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj77359 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj77318_droppedInsideTargetActions_2_runningActionsCount = window.obj77318_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj77318_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj77318 
move_77335();
function move_77335() {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = obj77318_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj77318");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 221;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj77318_droppedInsideTargetActions_2_runningActionsCount = window.obj77318_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj77318_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_77336();
function runjs_77336() {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = obj77318_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj77412").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj77318_droppedInsideTargetActions_2_runningActionsCount = window.obj77318_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj77318_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_77337();
function runjs_77337() {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = obj77318_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj77412").css("border-color", "#000000"); $("#obj77412").css("border-width", "1px"); $("#obj77412").css("border-style", "solid"); $("#obj77412").css("border-radius", "10px"); $("#obj77412").css("-webkit-border-radius", "10px"); $("#obj77412").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77318_droppedInsideTargetActions_2_runningActionsCount = window.obj77318_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj77318_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj77406
(function(){
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = obj77318_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj77406";
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
					window.obj77318_droppedInsideTargetActions_2_runningActionsCount = window.obj77318_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj77318_droppedInsideTargetActions_2_runningActionsCount = window.obj77318_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj77318_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_77339();
function runjs_77339() {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = obj77318_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj77318").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj77318_droppedInsideTargetActions_2_runningActionsCount = window.obj77318_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj77318_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_77340();
function runjs_77340() {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = obj77318_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj77318").css("border-color", "rgba(0,0,0,0)"); $("#obj77318").css("border-width", "0px"); $("#obj77318").css("border-style", "solid"); $("#obj77318").css("border-radius", "10px"); $("#obj77318").css("-webkit-border-radius", "10px"); $("#obj77318").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77318_droppedInsideTargetActions_2_runningActionsCount = window.obj77318_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj77318_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj77358 
playAudio_77341();
function playAudio_77341() {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = obj77318_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj77358")[0];
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
		    window.obj77318_droppedInsideTargetActions_2_runningActionsCount = window.obj77318_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj77318_droppedInsideTargetActions_2_runningActionsCount = window.obj77318_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj77318_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_77342();
function switchText_77342() {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = obj77318_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj77359_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj77359_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj77359").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj77359_content");
			setTimeout(function () {
				window.obj77318_droppedInsideTargetActions_2_runningActionsCount = window.obj77318_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj77359 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj77318_droppedInsideTargetActions_2_runningActionsCount = window.obj77318_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj77318_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj77318_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_77323();
function runjs_77323() {
	window.obj77318_droppedInsideTargetActions_runningActionsCount = obj77318_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj77410").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj77318_droppedInsideTargetActions_runningActionsCount = window.obj77318_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj77318_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_77327();
function switchText_77327() {
	window.obj77318_droppedInsideTargetActions_runningActionsCount = obj77318_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj77359_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj77359_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj77359").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj77359_content");
			setTimeout(function () {
				window.obj77318_droppedInsideTargetActions_runningActionsCount = window.obj77318_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj77359 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj77318_droppedInsideTargetActions_runningActionsCount = window.obj77318_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj77318_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_77324();
function runjs_77324() {
	window.obj77318_droppedInsideTargetActions_runningActionsCount = obj77318_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj77410").css("border-color", "#058E3F"); $("#obj77410").css("border-width", "2px"); $("#obj77410").css("border-style", "solid"); $("#obj77410").css("border-radius", "10px"); $("#obj77410").css("-webkit-border-radius", "10px"); $("#obj77410").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77318_droppedInsideTargetActions_runningActionsCount = window.obj77318_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj77318_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj77404 
hide_77325();
function hide_77325() {
	var selector = "#obj77404";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj77318_droppedInsideTargetActions_runningActionsCount = obj77318_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj77318_droppedInsideTargetActions_runningActionsCount = window.obj77318_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_77325(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj77318_droppedInsideTargetActions_runningActionsCount = window.obj77318_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj77318_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_77326();
function runjs_77326() {
	window.obj77318_droppedInsideTargetActions_runningActionsCount = obj77318_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj77318").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj77318_droppedInsideTargetActions_runningActionsCount = window.obj77318_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj77318_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj77357 
playAudio_77328();
function playAudio_77328() {
	window.obj77318_droppedInsideTargetActions_runningActionsCount = obj77318_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj77357")[0];
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
		    window.obj77318_droppedInsideTargetActions_runningActionsCount = window.obj77318_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj77318_droppedInsideTargetActions_runningActionsCount = window.obj77318_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj77318_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90290();
function switchText_90290() {
	window.obj77318_droppedInsideTargetActions_runningActionsCount = obj77318_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj77359_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj77359_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj77359").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj77359_content");
			setTimeout(function () {
				window.obj77318_droppedInsideTargetActions_runningActionsCount = window.obj77318_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj77359 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj77318_droppedInsideTargetActions_runningActionsCount = window.obj77318_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77318_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77318_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77318_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77318_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj77318_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77318_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77318").trigger("obj77318_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77318) {
				console.warn("de-queueing event obj77318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77318_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj77279_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_onTouchDown_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj77279");
//	action: dragDrop
//	target: obj77279 
dragDrop_77282();
function dragDrop_77282() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj77279_onTouchDown_runningActionsCount = obj77279_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj77279');
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
	  	containerNode = $('#obj77420');
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
    	window.obj77279_onTouchDown_runningActionsCount = window.obj77279_onTouchDown_runningActionsCount - 1;
if (window.obj77279_onTouchDown_runningActionsCount < 0) {
	window.obj77279_onTouchDown_runningActionsCount = 0;
} else if (window.obj77279_onTouchDown_runningActionsCount == 0) {
	obj77279_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj77412","#obj77410","#obj77408");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_77282 = false;
    	var dropped_id_77282;
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
					dropped_77282 = true;
					dropped_id_77282 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_77282) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj77279").trigger('SCActionDragDrop77282_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj77279_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77279_onTouchDown_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj77279 
move_92342();
function move_92342() {
	window.obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_runningActionsCount = obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj77279");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 378;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_runningActionsCount = window.obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj77279_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_77305();
function runjs_77305() {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = obj77279_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj77408").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj77279_droppedInsideTargetActions_3_runningActionsCount = window.obj77279_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj77279_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_77306();
function runjs_77306() {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = obj77279_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj77408").css("border-color", "#C00000"); $("#obj77408").css("border-width", "2px"); $("#obj77408").css("border-style", "solid"); $("#obj77408").css("border-radius", "10px"); $("#obj77408").css("-webkit-border-radius", "10px"); $("#obj77408").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77279_droppedInsideTargetActions_3_runningActionsCount = window.obj77279_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj77279_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj77402 
hide_77307();
function hide_77307() {
	var selector = "#obj77402";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = obj77279_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj77279_droppedInsideTargetActions_3_runningActionsCount = window.obj77279_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_77307(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj77279_droppedInsideTargetActions_3_runningActionsCount = window.obj77279_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj77279_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_77308();
function runjs_77308() {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = obj77279_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj77279").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj77279_droppedInsideTargetActions_3_runningActionsCount = window.obj77279_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj77279_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_77309();
function switchText_77309() {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = obj77279_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj77359_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj77359_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj77359").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj77359_content");
			setTimeout(function () {
				window.obj77279_droppedInsideTargetActions_3_runningActionsCount = window.obj77279_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj77359 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj77279_droppedInsideTargetActions_3_runningActionsCount = window.obj77279_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj77279_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj77279 
move_77310();
function move_77310() {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = obj77279_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj77279");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 378;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj77279_droppedInsideTargetActions_3_runningActionsCount = window.obj77279_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj77279_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_77311();
function runjs_77311() {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = obj77279_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj77408").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj77279_droppedInsideTargetActions_3_runningActionsCount = window.obj77279_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj77279_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_77312();
function runjs_77312() {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = obj77279_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj77408").css("border-color", "#000000"); $("#obj77408").css("border-width", "1px"); $("#obj77408").css("border-style", "solid"); $("#obj77408").css("border-radius", "10px"); $("#obj77408").css("-webkit-border-radius", "10px"); $("#obj77408").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77279_droppedInsideTargetActions_3_runningActionsCount = window.obj77279_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj77279_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj77402
(function(){
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = obj77279_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj77402";
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
					window.obj77279_droppedInsideTargetActions_3_runningActionsCount = window.obj77279_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj77279_droppedInsideTargetActions_3_runningActionsCount = window.obj77279_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj77279_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_77314();
function runjs_77314() {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = obj77279_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj77279").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj77279_droppedInsideTargetActions_3_runningActionsCount = window.obj77279_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj77279_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_77315();
function runjs_77315() {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = obj77279_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj77279").css("border-color", "rgba(0,0,0,0)"); $("#obj77279").css("border-width", "0px"); $("#obj77279").css("border-style", "solid"); $("#obj77279").css("border-radius", "10px"); $("#obj77279").css("-webkit-border-radius", "10px"); $("#obj77279").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77279_droppedInsideTargetActions_3_runningActionsCount = window.obj77279_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj77279_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj77358 
playAudio_77316();
function playAudio_77316() {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = obj77279_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj77358")[0];
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
		    window.obj77279_droppedInsideTargetActions_3_runningActionsCount = window.obj77279_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj77279_droppedInsideTargetActions_3_runningActionsCount = window.obj77279_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj77279_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_77317();
function switchText_77317() {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = obj77279_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj77359_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj77359_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj77359").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj77359_content");
			setTimeout(function () {
				window.obj77279_droppedInsideTargetActions_3_runningActionsCount = window.obj77279_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj77359 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj77279_droppedInsideTargetActions_3_runningActionsCount = window.obj77279_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj77279_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj77279_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_77291();
function runjs_77291() {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = obj77279_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj77410").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj77279_droppedInsideTargetActions_2_runningActionsCount = window.obj77279_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj77279_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_77292();
function runjs_77292() {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = obj77279_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj77410").css("border-color", "#C00000"); $("#obj77410").css("border-width", "2px"); $("#obj77410").css("border-style", "solid"); $("#obj77410").css("border-radius", "10px"); $("#obj77410").css("-webkit-border-radius", "10px"); $("#obj77410").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77279_droppedInsideTargetActions_2_runningActionsCount = window.obj77279_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj77279_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj77404 
hide_77293();
function hide_77293() {
	var selector = "#obj77404";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = obj77279_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj77279_droppedInsideTargetActions_2_runningActionsCount = window.obj77279_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_77293(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj77279_droppedInsideTargetActions_2_runningActionsCount = window.obj77279_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj77279_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_77294();
function runjs_77294() {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = obj77279_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj77279").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj77279_droppedInsideTargetActions_2_runningActionsCount = window.obj77279_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj77279_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_77295();
function switchText_77295() {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = obj77279_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj77359_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj77359_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj77359").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj77359_content");
			setTimeout(function () {
				window.obj77279_droppedInsideTargetActions_2_runningActionsCount = window.obj77279_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj77359 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj77279_droppedInsideTargetActions_2_runningActionsCount = window.obj77279_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj77279_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj77279 
move_77296();
function move_77296() {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = obj77279_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj77279");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 378;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj77279_droppedInsideTargetActions_2_runningActionsCount = window.obj77279_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj77279_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_77297();
function runjs_77297() {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = obj77279_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj77410").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj77279_droppedInsideTargetActions_2_runningActionsCount = window.obj77279_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj77279_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_77298();
function runjs_77298() {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = obj77279_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj77410").css("border-color", "#000000"); $("#obj77410").css("border-width", "1px"); $("#obj77410").css("border-style", "solid"); $("#obj77410").css("border-radius", "10px"); $("#obj77410").css("-webkit-border-radius", "10px"); $("#obj77410").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77279_droppedInsideTargetActions_2_runningActionsCount = window.obj77279_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj77279_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj77404
(function(){
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = obj77279_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj77404";
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
					window.obj77279_droppedInsideTargetActions_2_runningActionsCount = window.obj77279_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj77279_droppedInsideTargetActions_2_runningActionsCount = window.obj77279_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj77279_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_77300();
function runjs_77300() {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = obj77279_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj77279").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj77279_droppedInsideTargetActions_2_runningActionsCount = window.obj77279_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj77279_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_77301();
function runjs_77301() {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = obj77279_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj77279").css("border-color", "rgba(0,0,0,0)"); $("#obj77279").css("border-width", "0px"); $("#obj77279").css("border-style", "solid"); $("#obj77279").css("border-radius", "10px"); $("#obj77279").css("-webkit-border-radius", "10px"); $("#obj77279").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77279_droppedInsideTargetActions_2_runningActionsCount = window.obj77279_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj77279_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj77358 
playAudio_77302();
function playAudio_77302() {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = obj77279_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj77358")[0];
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
		    window.obj77279_droppedInsideTargetActions_2_runningActionsCount = window.obj77279_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj77279_droppedInsideTargetActions_2_runningActionsCount = window.obj77279_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj77279_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_77303();
function switchText_77303() {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = obj77279_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj77359_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj77359_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj77359").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj77359_content");
			setTimeout(function () {
				window.obj77279_droppedInsideTargetActions_2_runningActionsCount = window.obj77279_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj77359 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj77279_droppedInsideTargetActions_2_runningActionsCount = window.obj77279_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj77279_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj77279_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_77284();
function runjs_77284() {
	window.obj77279_droppedInsideTargetActions_runningActionsCount = obj77279_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj77412").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj77279_droppedInsideTargetActions_runningActionsCount = window.obj77279_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj77279_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_77288();
function switchText_77288() {
	window.obj77279_droppedInsideTargetActions_runningActionsCount = obj77279_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj77359_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj77359_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj77359").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj77359_content");
			setTimeout(function () {
				window.obj77279_droppedInsideTargetActions_runningActionsCount = window.obj77279_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj77359 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj77279_droppedInsideTargetActions_runningActionsCount = window.obj77279_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj77279_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_77285();
function runjs_77285() {
	window.obj77279_droppedInsideTargetActions_runningActionsCount = obj77279_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj77412").css("border-color", "#058E3F"); $("#obj77412").css("border-width", "2px"); $("#obj77412").css("border-style", "solid"); $("#obj77412").css("border-radius", "10px"); $("#obj77412").css("-webkit-border-radius", "10px"); $("#obj77412").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77279_droppedInsideTargetActions_runningActionsCount = window.obj77279_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj77279_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj77406 
hide_77286();
function hide_77286() {
	var selector = "#obj77406";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj77279_droppedInsideTargetActions_runningActionsCount = obj77279_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj77279_droppedInsideTargetActions_runningActionsCount = window.obj77279_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_77286(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj77279_droppedInsideTargetActions_runningActionsCount = window.obj77279_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj77279_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_77287();
function runjs_77287() {
	window.obj77279_droppedInsideTargetActions_runningActionsCount = obj77279_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj77279").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj77279_droppedInsideTargetActions_runningActionsCount = window.obj77279_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj77279_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj77357 
playAudio_77289();
function playAudio_77289() {
	window.obj77279_droppedInsideTargetActions_runningActionsCount = obj77279_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj77357")[0];
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
		    window.obj77279_droppedInsideTargetActions_runningActionsCount = window.obj77279_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj77279_droppedInsideTargetActions_runningActionsCount = window.obj77279_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj77279_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90291();
function switchText_90291() {
	window.obj77279_droppedInsideTargetActions_runningActionsCount = obj77279_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj77359_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj77359_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj77359").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj77359_content");
			setTimeout(function () {
				window.obj77279_droppedInsideTargetActions_runningActionsCount = window.obj77279_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj77359 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj77279_droppedInsideTargetActions_runningActionsCount = window.obj77279_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77279_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77279_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77279_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77279_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj77279_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77279_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77279").trigger("obj77279_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77279) {
				console.warn("de-queueing event obj77279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77279_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj77261_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77261_onTap_activeActionGroupIndex = -1;
		$("#obj77261").trigger("obj77261_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77261) {
				console.warn("de-queueing event obj77261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77261_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj77261 
hide_77264();
function hide_77264() {
	var selector = "#obj77261";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj77261_onTap_runningActionsCount = obj77261_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj77261_onTap_runningActionsCount = window.obj77261_onTap_runningActionsCount - 1;
if (window.obj77261_onTap_runningActionsCount < 0) {
	window.obj77261_onTap_runningActionsCount = 0;
} else if (window.obj77261_onTap_runningActionsCount == 0) {
	obj77261_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_77264(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj77261_onTap_runningActionsCount = window.obj77261_onTap_runningActionsCount - 1;
if (window.obj77261_onTap_runningActionsCount < 0) {
	window.obj77261_onTap_runningActionsCount = 0;
} else if (window.obj77261_onTap_runningActionsCount == 0) {
	obj77261_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj77251 
stopMovie_77263();
function stopMovie_77263() {
	window.obj77261_onTap_runningActionsCount = obj77261_onTap_runningActionsCount + 1;
	var myVideo = $("#obj77251")[0];
	myVideo.pause();
	window.obj77261_onTap_runningActionsCount = window.obj77261_onTap_runningActionsCount - 1;
if (window.obj77261_onTap_runningActionsCount < 0) {
	window.obj77261_onTap_runningActionsCount = 0;
} else if (window.obj77261_onTap_runningActionsCount == 0) {
	obj77261_onTap_actionGroup1();
}
}
















};
obj77261_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77261_onTap_activeActionGroupIndex = -1;
		$("#obj77261").trigger("obj77261_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77261) {
				console.warn("de-queueing event obj77261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77261_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj77253
(function(){
	window.obj77261_onTap_runningActionsCount = obj77261_onTap_runningActionsCount + 1;

	var selector = "#obj77253";
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
					window.obj77261_onTap_runningActionsCount = window.obj77261_onTap_runningActionsCount - 1;
if (window.obj77261_onTap_runningActionsCount < 0) {
	window.obj77261_onTap_runningActionsCount = 0;
} else if (window.obj77261_onTap_runningActionsCount == 0) {
	obj77261_onTap_actionGroup2();
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
				window.obj77261_onTap_runningActionsCount = window.obj77261_onTap_runningActionsCount - 1;
if (window.obj77261_onTap_runningActionsCount < 0) {
	window.obj77261_onTap_runningActionsCount = 0;
} else if (window.obj77261_onTap_runningActionsCount == 0) {
	obj77261_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj77261_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77261_onTap_activeActionGroupIndex = -1;
		$("#obj77261").trigger("obj77261_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77261) {
				console.warn("de-queueing event obj77261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77261_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj77251 
move_77266();
function move_77266() {
	window.obj77261_onTap_runningActionsCount = obj77261_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj77251");
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
			window.obj77261_onTap_runningActionsCount = window.obj77261_onTap_runningActionsCount - 1;
if (window.obj77261_onTap_runningActionsCount < 0) {
	window.obj77261_onTap_runningActionsCount = 0;
} else if (window.obj77261_onTap_runningActionsCount == 0) {
	obj77261_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj77261_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77261_onTap_activeActionGroupIndex = -1;
		$("#obj77261").trigger("obj77261_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77261) {
				console.warn("de-queueing event obj77261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77261_onTap_activeActionGroupIndex = 3;
	





















};
obj77253_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77253_onTap_activeActionGroupIndex = -1;
		$("#obj77253").trigger("obj77253_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77253) {
				console.warn("de-queueing event obj77253." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77253").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77253_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj77253 
hide_77256();
function hide_77256() {
	var selector = "#obj77253";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj77253_onTap_runningActionsCount = obj77253_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj77253_onTap_runningActionsCount = window.obj77253_onTap_runningActionsCount - 1;
if (window.obj77253_onTap_runningActionsCount < 0) {
	window.obj77253_onTap_runningActionsCount = 0;
} else if (window.obj77253_onTap_runningActionsCount == 0) {
	obj77253_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_77256(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj77253_onTap_runningActionsCount = window.obj77253_onTap_runningActionsCount - 1;
if (window.obj77253_onTap_runningActionsCount < 0) {
	window.obj77253_onTap_runningActionsCount = 0;
} else if (window.obj77253_onTap_runningActionsCount == 0) {
	obj77253_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj77251 
playPauseMovie_77255();
function playPauseMovie_77255() {
	window.obj77253_onTap_runningActionsCount = obj77253_onTap_runningActionsCount + 1;
	var myVideo = $("#obj77251")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj77253_onTap_runningActionsCount = window.obj77253_onTap_runningActionsCount - 1;
if (window.obj77253_onTap_runningActionsCount < 0) {
	window.obj77253_onTap_runningActionsCount = 0;
} else if (window.obj77253_onTap_runningActionsCount == 0) {
	obj77253_onTap_actionGroup1();
}
}

















};
obj77253_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77253_onTap_activeActionGroupIndex = -1;
		$("#obj77253").trigger("obj77253_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77253) {
				console.warn("de-queueing event obj77253." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77253").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77253_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj77261
(function(){
	window.obj77253_onTap_runningActionsCount = obj77253_onTap_runningActionsCount + 1;

	var selector = "#obj77261";
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
					window.obj77253_onTap_runningActionsCount = window.obj77253_onTap_runningActionsCount - 1;
if (window.obj77253_onTap_runningActionsCount < 0) {
	window.obj77253_onTap_runningActionsCount = 0;
} else if (window.obj77253_onTap_runningActionsCount == 0) {
	obj77253_onTap_actionGroup2();
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
				window.obj77253_onTap_runningActionsCount = window.obj77253_onTap_runningActionsCount - 1;
if (window.obj77253_onTap_runningActionsCount < 0) {
	window.obj77253_onTap_runningActionsCount = 0;
} else if (window.obj77253_onTap_runningActionsCount == 0) {
	obj77253_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj77253_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77253_onTap_activeActionGroupIndex = -1;
		$("#obj77253").trigger("obj77253_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77253) {
				console.warn("de-queueing event obj77253." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77253").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77253_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj77251 
move_77258();
function move_77258() {
	window.obj77253_onTap_runningActionsCount = obj77253_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj77251");
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
			window.obj77253_onTap_runningActionsCount = window.obj77253_onTap_runningActionsCount - 1;
if (window.obj77253_onTap_runningActionsCount < 0) {
	window.obj77253_onTap_runningActionsCount = 0;
} else if (window.obj77253_onTap_runningActionsCount == 0) {
	obj77253_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj77253_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77253_onTap_activeActionGroupIndex = -1;
		$("#obj77253").trigger("obj77253_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77253) {
				console.warn("de-queueing event obj77253." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77253").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77253_onTap_activeActionGroupIndex = 3;
	





















};
obj87821_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87821_onTap_activeActionGroupIndex = -1;
		$("#obj87821").trigger("obj87821_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87821) {
				console.warn("de-queueing event obj87821." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87821").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87821_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87826 
stopAudio_87823();
function stopAudio_87823() {
	window.obj87821_onTap_runningActionsCount = obj87821_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87826")[0];
	myAudio.pause();
	window.obj87821_onTap_runningActionsCount = window.obj87821_onTap_runningActionsCount - 1;
if (window.obj87821_onTap_runningActionsCount < 0) {
	window.obj87821_onTap_runningActionsCount = 0;
} else if (window.obj87821_onTap_runningActionsCount == 0) {
	obj87821_onTap_actionGroup1();
}
}








};
obj87821_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87821_onTap_activeActionGroupIndex = -1;
		$("#obj87821").trigger("obj87821_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87821) {
				console.warn("de-queueing event obj87821." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87821").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87821_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87821 
hide_87824();
function hide_87824() {
	var selector = "#obj87821";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87821_onTap_runningActionsCount = obj87821_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87821_onTap_runningActionsCount = window.obj87821_onTap_runningActionsCount - 1;
if (window.obj87821_onTap_runningActionsCount < 0) {
	window.obj87821_onTap_runningActionsCount = 0;
} else if (window.obj87821_onTap_runningActionsCount == 0) {
	obj87821_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87824(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87821_onTap_runningActionsCount = window.obj87821_onTap_runningActionsCount - 1;
if (window.obj87821_onTap_runningActionsCount < 0) {
	window.obj87821_onTap_runningActionsCount = 0;
} else if (window.obj87821_onTap_runningActionsCount == 0) {
	obj87821_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87821_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87821_onTap_activeActionGroupIndex = -1;
		$("#obj87821").trigger("obj87821_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87821) {
				console.warn("de-queueing event obj87821." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87821").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87821_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87816
(function(){
	window.obj87821_onTap_runningActionsCount = obj87821_onTap_runningActionsCount + 1;

	var selector = "#obj87816";
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
					window.obj87821_onTap_runningActionsCount = window.obj87821_onTap_runningActionsCount - 1;
if (window.obj87821_onTap_runningActionsCount < 0) {
	window.obj87821_onTap_runningActionsCount = 0;
} else if (window.obj87821_onTap_runningActionsCount == 0) {
	obj87821_onTap_actionGroup3();
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
				window.obj87821_onTap_runningActionsCount = window.obj87821_onTap_runningActionsCount - 1;
if (window.obj87821_onTap_runningActionsCount < 0) {
	window.obj87821_onTap_runningActionsCount = 0;
} else if (window.obj87821_onTap_runningActionsCount == 0) {
	obj87821_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87821_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87821_onTap_activeActionGroupIndex = -1;
		$("#obj87821").trigger("obj87821_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87821) {
				console.warn("de-queueing event obj87821." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87821").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87821_onTap_activeActionGroupIndex = 3;
	





















};
obj87816_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87816_onTap_activeActionGroupIndex = -1;
		$("#obj87816").trigger("obj87816_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87816) {
				console.warn("de-queueing event obj87816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87816_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87816 
hide_87818();
function hide_87818() {
	var selector = "#obj87816";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87816_onTap_runningActionsCount = obj87816_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87816_onTap_runningActionsCount = window.obj87816_onTap_runningActionsCount - 1;
if (window.obj87816_onTap_runningActionsCount < 0) {
	window.obj87816_onTap_runningActionsCount = 0;
} else if (window.obj87816_onTap_runningActionsCount == 0) {
	obj87816_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87818(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87816_onTap_runningActionsCount = window.obj87816_onTap_runningActionsCount - 1;
if (window.obj87816_onTap_runningActionsCount < 0) {
	window.obj87816_onTap_runningActionsCount = 0;
} else if (window.obj87816_onTap_runningActionsCount == 0) {
	obj87816_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87816_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87816_onTap_activeActionGroupIndex = -1;
		$("#obj87816").trigger("obj87816_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87816) {
				console.warn("de-queueing event obj87816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87816_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87821
(function(){
	window.obj87816_onTap_runningActionsCount = obj87816_onTap_runningActionsCount + 1;

	var selector = "#obj87821";
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
					window.obj87816_onTap_runningActionsCount = window.obj87816_onTap_runningActionsCount - 1;
if (window.obj87816_onTap_runningActionsCount < 0) {
	window.obj87816_onTap_runningActionsCount = 0;
} else if (window.obj87816_onTap_runningActionsCount == 0) {
	obj87816_onTap_actionGroup2();
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
				window.obj87816_onTap_runningActionsCount = window.obj87816_onTap_runningActionsCount - 1;
if (window.obj87816_onTap_runningActionsCount < 0) {
	window.obj87816_onTap_runningActionsCount = 0;
} else if (window.obj87816_onTap_runningActionsCount == 0) {
	obj87816_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87816_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87816_onTap_activeActionGroupIndex = -1;
		$("#obj87816").trigger("obj87816_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87816) {
				console.warn("de-queueing event obj87816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87816_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87826 
playAudio_87820();
function playAudio_87820() {
	window.obj87816_onTap_runningActionsCount = obj87816_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87826")[0];
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
		    window.obj87816_onTap_runningActionsCount = window.obj87816_onTap_runningActionsCount - 1;
if (window.obj87816_onTap_runningActionsCount < 0) {
	window.obj87816_onTap_runningActionsCount = 0;
} else if (window.obj87816_onTap_runningActionsCount == 0) {
	obj87816_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87816_onTap_runningActionsCount = window.obj87816_onTap_runningActionsCount - 1;
if (window.obj87816_onTap_runningActionsCount < 0) {
	window.obj87816_onTap_runningActionsCount = 0;
} else if (window.obj87816_onTap_runningActionsCount == 0) {
	obj87816_onTap_actionGroup3();
}
	}
}









};
obj87816_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87816_onTap_activeActionGroupIndex = -1;
		$("#obj87816").trigger("obj87816_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87816) {
				console.warn("de-queueing event obj87816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87816_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj77437: Event Touch Down
 *
 */
$("#obj77437").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77437_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77437_onTap is still running");
	return;
}
var obj77437_onTap_runningActionsCount = 0;
var obj77437_onTap_loopCount = 0;
obj77437_onTap_actionGroup0();
});










/*
 *
 *   obj77434: Event Touch Down
 *
 */
$("#obj77434").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77434_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77434_onTap is still running");
	return;
}
var obj77434_onTap_runningActionsCount = 0;
var obj77434_onTap_loopCount = 0;
obj77434_onTap_actionGroup0();
});










/*
 *
 *   obj77430: Event Touch Down
 *
 */
$("#obj77430").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77430_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77430_onTap is still running");
	return;
}
var obj77430_onTap_runningActionsCount = 0;
var obj77430_onTap_loopCount = 0;
obj77430_onTap_actionGroup0();
});

































































































































































/*
 *
 *   obj77361: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj77361");
	var winTarget = document.getElementById("obj77361");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj77361").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj77361_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj77361_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj77361_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77361_onTouchDown is still running");
	return;
}
var obj77361_onTouchDown_runningActionsCount = 0;
var obj77361_onTouchDown_loopCount = 0;
obj77361_onTouchDown_actionGroup0();
});



/*
 *
 *   obj77361: Event SCActionDragDrop77364_droppedOutsideTargetActions
 *
 */
$("#obj77361").bind("SCActionDragDrop77364_droppedOutsideTargetActions", function(event) {
	if (window.obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77361_SCActionDragDrop77364_droppedOutsideTargetActions is still running");
	return;
}
var obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_runningActionsCount = 0;
var obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_loopCount = 0;
obj77361_SCActionDragDrop77364_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj77361: Event droppedInsideTargetActions_3
 *
 */
$("#obj77361").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj77361_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77361_droppedInsideTargetActions_3 is still running");
	return;
}
var obj77361_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj77361_droppedInsideTargetActions_3_loopCount = 0;
obj77361_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj77361: Event droppedInsideTargetActions_2
 *
 */
$("#obj77361").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj77361_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77361_droppedInsideTargetActions_2 is still running");
	return;
}
var obj77361_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj77361_droppedInsideTargetActions_2_loopCount = 0;
obj77361_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj77361: Event droppedInsideTargetActions
 *
 */
$("#obj77361").bind("droppedInsideTargetActions", function(event) {
	if (window.obj77361_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77361_droppedInsideTargetActions is still running");
	return;
}
var obj77361_droppedInsideTargetActions_runningActionsCount = 0;
var obj77361_droppedInsideTargetActions_loopCount = 0;
obj77361_droppedInsideTargetActions_actionGroup0();
});




































/*
 *
 *   obj77318: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj77318");
	var winTarget = document.getElementById("obj77318");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj77318").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj77318_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj77318_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj77318_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77318_onTouchDown is still running");
	return;
}
var obj77318_onTouchDown_runningActionsCount = 0;
var obj77318_onTouchDown_loopCount = 0;
obj77318_onTouchDown_actionGroup0();
});



/*
 *
 *   obj77318: Event SCActionDragDrop77321_droppedOutsideTargetActions
 *
 */
$("#obj77318").bind("SCActionDragDrop77321_droppedOutsideTargetActions", function(event) {
	if (window.obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77318_SCActionDragDrop77321_droppedOutsideTargetActions is still running");
	return;
}
var obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_runningActionsCount = 0;
var obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_loopCount = 0;
obj77318_SCActionDragDrop77321_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj77318: Event droppedInsideTargetActions_3
 *
 */
$("#obj77318").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj77318_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77318_droppedInsideTargetActions_3 is still running");
	return;
}
var obj77318_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj77318_droppedInsideTargetActions_3_loopCount = 0;
obj77318_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj77318: Event droppedInsideTargetActions_2
 *
 */
$("#obj77318").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj77318_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77318_droppedInsideTargetActions_2 is still running");
	return;
}
var obj77318_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj77318_droppedInsideTargetActions_2_loopCount = 0;
obj77318_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj77318: Event droppedInsideTargetActions
 *
 */
$("#obj77318").bind("droppedInsideTargetActions", function(event) {
	if (window.obj77318_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77318_droppedInsideTargetActions is still running");
	return;
}
var obj77318_droppedInsideTargetActions_runningActionsCount = 0;
var obj77318_droppedInsideTargetActions_loopCount = 0;
obj77318_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj77279: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj77279");
	var winTarget = document.getElementById("obj77279");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj77279").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj77279_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj77279_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj77279_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77279_onTouchDown is still running");
	return;
}
var obj77279_onTouchDown_runningActionsCount = 0;
var obj77279_onTouchDown_loopCount = 0;
obj77279_onTouchDown_actionGroup0();
});



/*
 *
 *   obj77279: Event SCActionDragDrop77282_droppedOutsideTargetActions
 *
 */
$("#obj77279").bind("SCActionDragDrop77282_droppedOutsideTargetActions", function(event) {
	if (window.obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77279_SCActionDragDrop77282_droppedOutsideTargetActions is still running");
	return;
}
var obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_runningActionsCount = 0;
var obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_loopCount = 0;
obj77279_SCActionDragDrop77282_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj77279: Event droppedInsideTargetActions_3
 *
 */
$("#obj77279").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj77279_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77279_droppedInsideTargetActions_3 is still running");
	return;
}
var obj77279_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj77279_droppedInsideTargetActions_3_loopCount = 0;
obj77279_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj77279: Event droppedInsideTargetActions_2
 *
 */
$("#obj77279").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj77279_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77279_droppedInsideTargetActions_2 is still running");
	return;
}
var obj77279_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj77279_droppedInsideTargetActions_2_loopCount = 0;
obj77279_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj77279: Event droppedInsideTargetActions
 *
 */
$("#obj77279").bind("droppedInsideTargetActions", function(event) {
	if (window.obj77279_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77279_droppedInsideTargetActions is still running");
	return;
}
var obj77279_droppedInsideTargetActions_runningActionsCount = 0;
var obj77279_droppedInsideTargetActions_loopCount = 0;
obj77279_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj77261: Event Touch Down
 *
 */
$("#obj77261").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77261_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77261_onTap is still running");
	return;
}
var obj77261_onTap_runningActionsCount = 0;
var obj77261_onTap_loopCount = 0;
obj77261_onTap_actionGroup0();
});










/*
 *
 *   obj77253: Event Touch Down
 *
 */
$("#obj77253").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77253_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77253_onTap is still running");
	return;
}
var obj77253_onTap_runningActionsCount = 0;
var obj77253_onTap_loopCount = 0;
obj77253_onTap_actionGroup0();
});










/*
 *
 *   obj87821: Event Touch Down
 *
 */
$("#obj87821").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87821_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87821_onTap is still running");
	return;
}
var obj87821_onTap_runningActionsCount = 0;
var obj87821_onTap_loopCount = 0;
obj87821_onTap_actionGroup0();
});










/*
 *
 *   obj87816: Event Touch Down
 *
 */
$("#obj87816").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87816_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87816_onTap is still running");
	return;
}
var obj87816_onTap_runningActionsCount = 0;
var obj87816_onTap_loopCount = 0;
obj87816_onTap_actionGroup0();
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
	
$("#obj77440").trigger('SCEventShow');
$("#obj77437").trigger('SCEventShow');
$("#obj77434").trigger('SCEventShow');
$("#obj77430").trigger('SCEventShow');
$("#obj77428").trigger('SCEventShow');
$("#obj77426").trigger('SCEventShow');
$("#obj77424").trigger('SCEventShow');
$("#obj77422").trigger('SCEventShow');
$("#obj77420").trigger('SCEventShow');
$("#obj77418").trigger('SCEventShow');
$("#obj77416").trigger('SCEventShow');
$("#obj77414").trigger('SCEventShow');
$("#obj77412").trigger('SCEventShow');
$("#obj77410").trigger('SCEventShow');
$("#obj77408").trigger('SCEventShow');
$("#obj77406").trigger('SCEventShow');
$("#obj77404").trigger('SCEventShow');
$("#obj77402").trigger('SCEventShow');
$("#obj77400").trigger('SCEventShow');
$("#obj77361").trigger('SCEventShow');
$("#obj77359").trigger('SCEventShow');
$("#obj77358").trigger('SCEventShow');
$("#obj77357").trigger('SCEventShow');
$("#obj77318").trigger('SCEventShow');
$("#obj77279").trigger('SCEventShow');
$("#obj77261").trigger('SCEventShow');
$("#obj77253").trigger('SCEventShow');
$("#obj87821").trigger('SCEventShow');
$("#obj87816").trigger('SCEventShow');
$("#obj87826").trigger('SCEventShow');
$("#obj94789").trigger('SCEventShow');
$("#obj77251").trigger('SCEventShow');
	
});