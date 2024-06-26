pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 6875;
pubcoder.page.title = pubcoder.page.title || "33";
pubcoder.page.number = pubcoder.page.number || 33;
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
var obj68572_onTap_activeActionGroupIndex = -1;
var obj68572_onTap_runningActionsCount = 0;
var obj68572_onTap_loopCount = 0;
var obj68569_onTap_activeActionGroupIndex = -1;
var obj68569_onTap_runningActionsCount = 0;
var obj68569_onTap_loopCount = 0;
var obj68565_onTap_activeActionGroupIndex = -1;
var obj68565_onTap_runningActionsCount = 0;
var obj68565_onTap_loopCount = 0;
var obj68486_onDrag_activeActionGroupIndex = -1;
var obj68486_onDrag_runningActionsCount = 0;
var obj68486_onDrag_loopCount = 0;
var obj68486_onTouchDown_activeActionGroupIndex = -1;
var obj68486_onTouchDown_runningActionsCount = 0;
var obj68486_onTouchDown_loopCount = 0;
var obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_runningActionsCount = 0;
var obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_loopCount = 0;
var obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj68486_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj68486_droppedInsideTargetActions_3_loopCount = 0;
var obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj68486_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj68486_droppedInsideTargetActions_2_loopCount = 0;
var obj68486_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj68486_droppedInsideTargetActions_runningActionsCount = 0;
var obj68486_droppedInsideTargetActions_loopCount = 0;
var obj68447_onDrag_activeActionGroupIndex = -1;
var obj68447_onDrag_runningActionsCount = 0;
var obj68447_onDrag_loopCount = 0;
var obj68447_onTouchDown_activeActionGroupIndex = -1;
var obj68447_onTouchDown_runningActionsCount = 0;
var obj68447_onTouchDown_loopCount = 0;
var obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_runningActionsCount = 0;
var obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_loopCount = 0;
var obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj68447_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj68447_droppedInsideTargetActions_3_loopCount = 0;
var obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj68447_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj68447_droppedInsideTargetActions_2_loopCount = 0;
var obj68447_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj68447_droppedInsideTargetActions_runningActionsCount = 0;
var obj68447_droppedInsideTargetActions_loopCount = 0;
var obj68408_onDrag_activeActionGroupIndex = -1;
var obj68408_onDrag_runningActionsCount = 0;
var obj68408_onDrag_loopCount = 0;
var obj68408_onTouchDown_activeActionGroupIndex = -1;
var obj68408_onTouchDown_runningActionsCount = 0;
var obj68408_onTouchDown_loopCount = 0;
var obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_runningActionsCount = 0;
var obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_loopCount = 0;
var obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj68408_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj68408_droppedInsideTargetActions_3_loopCount = 0;
var obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj68408_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj68408_droppedInsideTargetActions_2_loopCount = 0;
var obj68408_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj68408_droppedInsideTargetActions_runningActionsCount = 0;
var obj68408_droppedInsideTargetActions_loopCount = 0;
var obj68405_onTap_activeActionGroupIndex = -1;
var obj68405_onTap_runningActionsCount = 0;
var obj68405_onTap_loopCount = 0;
var obj68387_onTap_activeActionGroupIndex = -1;
var obj68387_onTap_runningActionsCount = 0;
var obj68387_onTap_loopCount = 0;
var obj68379_onTap_activeActionGroupIndex = -1;
var obj68379_onTap_runningActionsCount = 0;
var obj68379_onTap_loopCount = 0;
var obj89859_onTap_activeActionGroupIndex = -1;
var obj89859_onTap_runningActionsCount = 0;
var obj89859_onTap_loopCount = 0;
var obj89854_onTap_activeActionGroupIndex = -1;
var obj89854_onTap_runningActionsCount = 0;
var obj89854_onTap_loopCount = 0;
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
		
obj68572_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68572_onTap_activeActionGroupIndex = -1;
		$("#obj68572").trigger("obj68572_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68572) {
				console.warn("de-queueing event obj68572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68572_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_68584();
function goToPage_68584() {
	window.obj68572_onTap_runningActionsCount = obj68572_onTap_runningActionsCount + 1;
	$("#anchor202")[0].click();
	window.obj68572_onTap_runningActionsCount = window.obj68572_onTap_runningActionsCount - 1;
if (window.obj68572_onTap_runningActionsCount < 0) {
	window.obj68572_onTap_runningActionsCount = 0;
} else if (window.obj68572_onTap_runningActionsCount == 0) {
	obj68572_onTap_actionGroup1();
}
}





















};
obj68572_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68572_onTap_activeActionGroupIndex = -1;
		$("#obj68572").trigger("obj68572_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68572) {
				console.warn("de-queueing event obj68572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68572_onTap_activeActionGroupIndex = 1;
	





















};
obj68569_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68569_onTap_activeActionGroupIndex = -1;
		$("#obj68569").trigger("obj68569_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68569) {
				console.warn("de-queueing event obj68569." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68569").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68569_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_68582();
function goToPage_68582() {
	window.obj68569_onTap_runningActionsCount = obj68569_onTap_runningActionsCount + 1;
	$("#anchor203")[0].click();
	window.obj68569_onTap_runningActionsCount = window.obj68569_onTap_runningActionsCount - 1;
if (window.obj68569_onTap_runningActionsCount < 0) {
	window.obj68569_onTap_runningActionsCount = 0;
} else if (window.obj68569_onTap_runningActionsCount == 0) {
	obj68569_onTap_actionGroup1();
}
}





















};
obj68569_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68569_onTap_activeActionGroupIndex = -1;
		$("#obj68569").trigger("obj68569_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68569) {
				console.warn("de-queueing event obj68569." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68569").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68569_onTap_activeActionGroupIndex = 1;
	





















};
obj68565_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68565_onTap_activeActionGroupIndex = -1;
		$("#obj68565").trigger("obj68565_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68565) {
				console.warn("de-queueing event obj68565." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68565").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68565_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_68567();
function goToPage_68567() {
	window.obj68565_onTap_runningActionsCount = obj68565_onTap_runningActionsCount + 1;
	$("#anchor204")[0].click();
	window.obj68565_onTap_runningActionsCount = window.obj68565_onTap_runningActionsCount - 1;
if (window.obj68565_onTap_runningActionsCount < 0) {
	window.obj68565_onTap_runningActionsCount = 0;
} else if (window.obj68565_onTap_runningActionsCount == 0) {
	obj68565_onTap_actionGroup1();
}
}





















};
obj68565_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68565_onTap_activeActionGroupIndex = -1;
		$("#obj68565").trigger("obj68565_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68565) {
				console.warn("de-queueing event obj68565." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68565").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68565_onTap_activeActionGroupIndex = 1;
	





















};
obj68486_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_onTouchDown_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj68486");
//	action: dragDrop
//	target: obj68486 
dragDrop_68489();
function dragDrop_68489() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj68486_onTouchDown_runningActionsCount = obj68486_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj68486');
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
	  	containerNode = $('#obj68557');
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
    	window.obj68486_onTouchDown_runningActionsCount = window.obj68486_onTouchDown_runningActionsCount - 1;
if (window.obj68486_onTouchDown_runningActionsCount < 0) {
	window.obj68486_onTouchDown_runningActionsCount = 0;
} else if (window.obj68486_onTouchDown_runningActionsCount == 0) {
	obj68486_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj68527","#obj68551","#obj68535");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_68489 = false;
    	var dropped_id_68489;
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
					dropped_68489 = true;
					dropped_id_68489 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_68489) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj68486").trigger('SCActionDragDrop68489_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj68486_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68486_onTouchDown_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj68486 
move_92190();
function move_92190() {
	window.obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_runningActionsCount = obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj68486");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 115;
	var moveY = 663;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_runningActionsCount = window.obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj68486_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68512();
function runjs_68512() {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = obj68486_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68535").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68486_droppedInsideTargetActions_3_runningActionsCount = window.obj68486_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj68486_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68513();
function runjs_68513() {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = obj68486_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68535").css("border-color", "#C00000"); $("#obj68535").css("border-width", "2px"); $("#obj68535").css("border-style", "solid"); $("#obj68535").css("border-radius", "10px"); $("#obj68535").css("-webkit-border-radius", "10px"); $("#obj68535").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68486_droppedInsideTargetActions_3_runningActionsCount = window.obj68486_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj68486_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj68533 
hide_68514();
function hide_68514() {
	var selector = "#obj68533";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = obj68486_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68486_droppedInsideTargetActions_3_runningActionsCount = window.obj68486_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68514(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68486_droppedInsideTargetActions_3_runningActionsCount = window.obj68486_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68486_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_68515();
function runjs_68515() {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = obj68486_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68486").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj68486_droppedInsideTargetActions_3_runningActionsCount = window.obj68486_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj68486_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_68516();
function switchText_68516() {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = obj68486_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68545_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68545_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68545").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68545_content");
			setTimeout(function () {
				window.obj68486_droppedInsideTargetActions_3_runningActionsCount = window.obj68486_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj68545 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68486_droppedInsideTargetActions_3_runningActionsCount = window.obj68486_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj68486_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj68486 
move_68517();
function move_68517() {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = obj68486_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj68486");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 115;
	var moveY = 663;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68486_droppedInsideTargetActions_3_runningActionsCount = window.obj68486_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj68486_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68518();
function runjs_68518() {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = obj68486_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68535").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68486_droppedInsideTargetActions_3_runningActionsCount = window.obj68486_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj68486_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_68519();
function runjs_68519() {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = obj68486_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68535").css("border-color", "#000000"); $("#obj68535").css("border-width", "1px"); $("#obj68535").css("border-style", "solid"); $("#obj68535").css("border-radius", "10px"); $("#obj68535").css("-webkit-border-radius", "10px"); $("#obj68535").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68486_droppedInsideTargetActions_3_runningActionsCount = window.obj68486_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj68486_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj68533
(function(){
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = obj68486_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj68533";
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
					window.obj68486_droppedInsideTargetActions_3_runningActionsCount = window.obj68486_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj68486_droppedInsideTargetActions_3_runningActionsCount = window.obj68486_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68486_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_68521();
function runjs_68521() {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = obj68486_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68486").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj68486_droppedInsideTargetActions_3_runningActionsCount = window.obj68486_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj68486_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_68522();
function runjs_68522() {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = obj68486_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68486").css("border-color", "rgba(0,0,0,0)"); $("#obj68486").css("border-width", "0px"); $("#obj68486").css("border-style", "solid"); $("#obj68486").css("border-radius", "10px"); $("#obj68486").css("-webkit-border-radius", "10px"); $("#obj68486").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68486_droppedInsideTargetActions_3_runningActionsCount = window.obj68486_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj68486_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj68544 
playAudio_68523();
function playAudio_68523() {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = obj68486_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj68544")[0];
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
		    window.obj68486_droppedInsideTargetActions_3_runningActionsCount = window.obj68486_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68486_droppedInsideTargetActions_3_runningActionsCount = window.obj68486_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj68486_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_68524();
function switchText_68524() {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = obj68486_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68545_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68545_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68545").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68545_content");
			setTimeout(function () {
				window.obj68486_droppedInsideTargetActions_3_runningActionsCount = window.obj68486_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj68545 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68486_droppedInsideTargetActions_3_runningActionsCount = window.obj68486_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj68486_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj68486_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68498();
function runjs_68498() {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = obj68486_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68551").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68486_droppedInsideTargetActions_2_runningActionsCount = window.obj68486_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj68486_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68499();
function runjs_68499() {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = obj68486_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68551").css("border-color", "#C00000"); $("#obj68551").css("border-width", "2px"); $("#obj68551").css("border-style", "solid"); $("#obj68551").css("border-radius", "10px"); $("#obj68551").css("-webkit-border-radius", "10px"); $("#obj68551").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68486_droppedInsideTargetActions_2_runningActionsCount = window.obj68486_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj68486_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj68549 
hide_68500();
function hide_68500() {
	var selector = "#obj68549";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = obj68486_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68486_droppedInsideTargetActions_2_runningActionsCount = window.obj68486_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68500(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68486_droppedInsideTargetActions_2_runningActionsCount = window.obj68486_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68486_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_68501();
function runjs_68501() {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = obj68486_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68486").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj68486_droppedInsideTargetActions_2_runningActionsCount = window.obj68486_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj68486_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_68502();
function switchText_68502() {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = obj68486_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68545_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68545_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68545").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68545_content");
			setTimeout(function () {
				window.obj68486_droppedInsideTargetActions_2_runningActionsCount = window.obj68486_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj68545 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68486_droppedInsideTargetActions_2_runningActionsCount = window.obj68486_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj68486_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj68486 
move_68503();
function move_68503() {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = obj68486_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj68486");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 115;
	var moveY = 663;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68486_droppedInsideTargetActions_2_runningActionsCount = window.obj68486_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj68486_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68504();
function runjs_68504() {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = obj68486_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68551").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68486_droppedInsideTargetActions_2_runningActionsCount = window.obj68486_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj68486_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_68505();
function runjs_68505() {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = obj68486_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68551").css("border-color", "#000000"); $("#obj68551").css("border-width", "1px"); $("#obj68551").css("border-style", "solid"); $("#obj68551").css("border-radius", "10px"); $("#obj68551").css("-webkit-border-radius", "10px"); $("#obj68551").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68486_droppedInsideTargetActions_2_runningActionsCount = window.obj68486_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj68486_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj68549
(function(){
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = obj68486_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj68549";
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
					window.obj68486_droppedInsideTargetActions_2_runningActionsCount = window.obj68486_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj68486_droppedInsideTargetActions_2_runningActionsCount = window.obj68486_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68486_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_68507();
function runjs_68507() {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = obj68486_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68486").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj68486_droppedInsideTargetActions_2_runningActionsCount = window.obj68486_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj68486_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_68508();
function runjs_68508() {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = obj68486_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68486").css("border-color", "rgba(0,0,0,0)"); $("#obj68486").css("border-width", "0px"); $("#obj68486").css("border-style", "solid"); $("#obj68486").css("border-radius", "10px"); $("#obj68486").css("-webkit-border-radius", "10px"); $("#obj68486").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68486_droppedInsideTargetActions_2_runningActionsCount = window.obj68486_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj68486_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj68544 
playAudio_68509();
function playAudio_68509() {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = obj68486_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj68544")[0];
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
		    window.obj68486_droppedInsideTargetActions_2_runningActionsCount = window.obj68486_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68486_droppedInsideTargetActions_2_runningActionsCount = window.obj68486_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj68486_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_68510();
function switchText_68510() {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = obj68486_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68545_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68545_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68545").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68545_content");
			setTimeout(function () {
				window.obj68486_droppedInsideTargetActions_2_runningActionsCount = window.obj68486_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj68545 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68486_droppedInsideTargetActions_2_runningActionsCount = window.obj68486_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj68486_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj68486_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68491();
function runjs_68491() {
	window.obj68486_droppedInsideTargetActions_runningActionsCount = obj68486_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj68527").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68486_droppedInsideTargetActions_runningActionsCount = window.obj68486_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj68486_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_68495();
function switchText_68495() {
	window.obj68486_droppedInsideTargetActions_runningActionsCount = obj68486_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68545_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68545_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68545").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68545_content");
			setTimeout(function () {
				window.obj68486_droppedInsideTargetActions_runningActionsCount = window.obj68486_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj68545 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68486_droppedInsideTargetActions_runningActionsCount = window.obj68486_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj68486_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_68492();
function runjs_68492() {
	window.obj68486_droppedInsideTargetActions_runningActionsCount = obj68486_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj68527").css("border-color", "#058E3F"); $("#obj68527").css("border-width", "2px"); $("#obj68527").css("border-style", "solid"); $("#obj68527").css("border-radius", "10px"); $("#obj68527").css("-webkit-border-radius", "10px"); $("#obj68527").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68486_droppedInsideTargetActions_runningActionsCount = window.obj68486_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj68486_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj68525 
hide_68493();
function hide_68493() {
	var selector = "#obj68525";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68486_droppedInsideTargetActions_runningActionsCount = obj68486_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68486_droppedInsideTargetActions_runningActionsCount = window.obj68486_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68493(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68486_droppedInsideTargetActions_runningActionsCount = window.obj68486_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68486_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_68494();
function runjs_68494() {
	window.obj68486_droppedInsideTargetActions_runningActionsCount = obj68486_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj68486").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj68486_droppedInsideTargetActions_runningActionsCount = window.obj68486_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj68486_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj68543 
playAudio_68496();
function playAudio_68496() {
	window.obj68486_droppedInsideTargetActions_runningActionsCount = obj68486_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj68543")[0];
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
		    window.obj68486_droppedInsideTargetActions_runningActionsCount = window.obj68486_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68486_droppedInsideTargetActions_runningActionsCount = window.obj68486_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj68486_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90127();
function switchText_90127() {
	window.obj68486_droppedInsideTargetActions_runningActionsCount = obj68486_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68545_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68545_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68545").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68545_content");
			setTimeout(function () {
				window.obj68486_droppedInsideTargetActions_runningActionsCount = window.obj68486_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj68545 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68486_droppedInsideTargetActions_runningActionsCount = window.obj68486_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68486_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68486_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68486_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68486_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj68486_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68486_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68486").trigger("obj68486_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68486) {
				console.warn("de-queueing event obj68486." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68486").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68486_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj68447_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_onTouchDown_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj68447");
//	action: dragDrop
//	target: obj68447 
dragDrop_68450();
function dragDrop_68450() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj68447_onTouchDown_runningActionsCount = obj68447_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj68447');
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
	  	containerNode = $('#obj68557');
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
    	window.obj68447_onTouchDown_runningActionsCount = window.obj68447_onTouchDown_runningActionsCount - 1;
if (window.obj68447_onTouchDown_runningActionsCount < 0) {
	window.obj68447_onTouchDown_runningActionsCount = 0;
} else if (window.obj68447_onTouchDown_runningActionsCount == 0) {
	obj68447_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj68551","#obj68535","#obj68527");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_68450 = false;
    	var dropped_id_68450;
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
					dropped_68450 = true;
					dropped_id_68450 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_68450) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj68447").trigger('SCActionDragDrop68450_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj68447_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68447_onTouchDown_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj68447 
move_92192();
function move_92192() {
	window.obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_runningActionsCount = obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj68447");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 240;
	var moveY = 663;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_runningActionsCount = window.obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj68447_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68473();
function runjs_68473() {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = obj68447_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68527").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68447_droppedInsideTargetActions_3_runningActionsCount = window.obj68447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj68447_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68474();
function runjs_68474() {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = obj68447_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68527").css("border-color", "#C00000"); $("#obj68527").css("border-width", "2px"); $("#obj68527").css("border-style", "solid"); $("#obj68527").css("border-radius", "10px"); $("#obj68527").css("-webkit-border-radius", "10px"); $("#obj68527").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68447_droppedInsideTargetActions_3_runningActionsCount = window.obj68447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj68447_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj68525 
hide_68475();
function hide_68475() {
	var selector = "#obj68525";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = obj68447_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68447_droppedInsideTargetActions_3_runningActionsCount = window.obj68447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68475(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68447_droppedInsideTargetActions_3_runningActionsCount = window.obj68447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68447_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_68476();
function runjs_68476() {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = obj68447_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68447").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj68447_droppedInsideTargetActions_3_runningActionsCount = window.obj68447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj68447_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_68477();
function switchText_68477() {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = obj68447_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68545_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68545_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68545").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68545_content");
			setTimeout(function () {
				window.obj68447_droppedInsideTargetActions_3_runningActionsCount = window.obj68447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj68545 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68447_droppedInsideTargetActions_3_runningActionsCount = window.obj68447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj68447_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj68447 
move_68478();
function move_68478() {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = obj68447_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj68447");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 240;
	var moveY = 663;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68447_droppedInsideTargetActions_3_runningActionsCount = window.obj68447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj68447_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68479();
function runjs_68479() {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = obj68447_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68527").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68447_droppedInsideTargetActions_3_runningActionsCount = window.obj68447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj68447_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_68480();
function runjs_68480() {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = obj68447_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68527").css("border-color", "#000000"); $("#obj68527").css("border-width", "1px"); $("#obj68527").css("border-style", "solid"); $("#obj68527").css("border-radius", "10px"); $("#obj68527").css("-webkit-border-radius", "10px"); $("#obj68527").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68447_droppedInsideTargetActions_3_runningActionsCount = window.obj68447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj68447_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj68525
(function(){
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = obj68447_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj68525";
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
					window.obj68447_droppedInsideTargetActions_3_runningActionsCount = window.obj68447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj68447_droppedInsideTargetActions_3_runningActionsCount = window.obj68447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68447_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_68482();
function runjs_68482() {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = obj68447_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68447").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj68447_droppedInsideTargetActions_3_runningActionsCount = window.obj68447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj68447_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_68483();
function runjs_68483() {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = obj68447_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68447").css("border-color", "rgba(0,0,0,0)"); $("#obj68447").css("border-width", "0px"); $("#obj68447").css("border-style", "solid"); $("#obj68447").css("border-radius", "10px"); $("#obj68447").css("-webkit-border-radius", "10px"); $("#obj68447").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68447_droppedInsideTargetActions_3_runningActionsCount = window.obj68447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj68447_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj68544 
playAudio_68484();
function playAudio_68484() {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = obj68447_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj68544")[0];
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
		    window.obj68447_droppedInsideTargetActions_3_runningActionsCount = window.obj68447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68447_droppedInsideTargetActions_3_runningActionsCount = window.obj68447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj68447_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_68485();
function switchText_68485() {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = obj68447_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68545_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68545_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68545").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68545_content");
			setTimeout(function () {
				window.obj68447_droppedInsideTargetActions_3_runningActionsCount = window.obj68447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj68545 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68447_droppedInsideTargetActions_3_runningActionsCount = window.obj68447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj68447_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj68447_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68459();
function runjs_68459() {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = obj68447_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68535").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68447_droppedInsideTargetActions_2_runningActionsCount = window.obj68447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj68447_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68460();
function runjs_68460() {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = obj68447_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68535").css("border-color", "#C00000"); $("#obj68535").css("border-width", "2px"); $("#obj68535").css("border-style", "solid"); $("#obj68535").css("border-radius", "10px"); $("#obj68535").css("-webkit-border-radius", "10px"); $("#obj68535").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68447_droppedInsideTargetActions_2_runningActionsCount = window.obj68447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj68447_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj68533 
hide_68461();
function hide_68461() {
	var selector = "#obj68533";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = obj68447_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68447_droppedInsideTargetActions_2_runningActionsCount = window.obj68447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68461(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68447_droppedInsideTargetActions_2_runningActionsCount = window.obj68447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68447_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_68462();
function runjs_68462() {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = obj68447_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68447").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj68447_droppedInsideTargetActions_2_runningActionsCount = window.obj68447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj68447_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_68463();
function switchText_68463() {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = obj68447_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68545_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68545_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68545").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68545_content");
			setTimeout(function () {
				window.obj68447_droppedInsideTargetActions_2_runningActionsCount = window.obj68447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj68545 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68447_droppedInsideTargetActions_2_runningActionsCount = window.obj68447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj68447_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj68447 
move_68464();
function move_68464() {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = obj68447_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj68447");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 240;
	var moveY = 663;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68447_droppedInsideTargetActions_2_runningActionsCount = window.obj68447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj68447_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68465();
function runjs_68465() {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = obj68447_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68535").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68447_droppedInsideTargetActions_2_runningActionsCount = window.obj68447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj68447_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_68466();
function runjs_68466() {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = obj68447_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68535").css("border-color", "#000000"); $("#obj68535").css("border-width", "1px"); $("#obj68535").css("border-style", "solid"); $("#obj68535").css("border-radius", "10px"); $("#obj68535").css("-webkit-border-radius", "10px"); $("#obj68535").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68447_droppedInsideTargetActions_2_runningActionsCount = window.obj68447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj68447_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj68533
(function(){
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = obj68447_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj68533";
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
					window.obj68447_droppedInsideTargetActions_2_runningActionsCount = window.obj68447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj68447_droppedInsideTargetActions_2_runningActionsCount = window.obj68447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68447_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_68468();
function runjs_68468() {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = obj68447_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68447").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj68447_droppedInsideTargetActions_2_runningActionsCount = window.obj68447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj68447_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_68469();
function runjs_68469() {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = obj68447_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68447").css("border-color", "rgba(0,0,0,0)"); $("#obj68447").css("border-width", "0px"); $("#obj68447").css("border-style", "solid"); $("#obj68447").css("border-radius", "10px"); $("#obj68447").css("-webkit-border-radius", "10px"); $("#obj68447").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68447_droppedInsideTargetActions_2_runningActionsCount = window.obj68447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj68447_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj68544 
playAudio_68470();
function playAudio_68470() {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = obj68447_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj68544")[0];
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
		    window.obj68447_droppedInsideTargetActions_2_runningActionsCount = window.obj68447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68447_droppedInsideTargetActions_2_runningActionsCount = window.obj68447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj68447_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_68471();
function switchText_68471() {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = obj68447_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68545_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68545_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68545").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68545_content");
			setTimeout(function () {
				window.obj68447_droppedInsideTargetActions_2_runningActionsCount = window.obj68447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj68545 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68447_droppedInsideTargetActions_2_runningActionsCount = window.obj68447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj68447_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj68447_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68452();
function runjs_68452() {
	window.obj68447_droppedInsideTargetActions_runningActionsCount = obj68447_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj68551").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68447_droppedInsideTargetActions_runningActionsCount = window.obj68447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj68447_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_68456();
function switchText_68456() {
	window.obj68447_droppedInsideTargetActions_runningActionsCount = obj68447_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68545_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68545_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68545").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68545_content");
			setTimeout(function () {
				window.obj68447_droppedInsideTargetActions_runningActionsCount = window.obj68447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj68545 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68447_droppedInsideTargetActions_runningActionsCount = window.obj68447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj68447_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_68453();
function runjs_68453() {
	window.obj68447_droppedInsideTargetActions_runningActionsCount = obj68447_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj68551").css("border-color", "#058E3F"); $("#obj68551").css("border-width", "2px"); $("#obj68551").css("border-style", "solid"); $("#obj68551").css("border-radius", "10px"); $("#obj68551").css("-webkit-border-radius", "10px"); $("#obj68551").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68447_droppedInsideTargetActions_runningActionsCount = window.obj68447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj68447_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj68549 
hide_68454();
function hide_68454() {
	var selector = "#obj68549";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68447_droppedInsideTargetActions_runningActionsCount = obj68447_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68447_droppedInsideTargetActions_runningActionsCount = window.obj68447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68454(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68447_droppedInsideTargetActions_runningActionsCount = window.obj68447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68447_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_68455();
function runjs_68455() {
	window.obj68447_droppedInsideTargetActions_runningActionsCount = obj68447_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj68447").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj68447_droppedInsideTargetActions_runningActionsCount = window.obj68447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj68447_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj68543 
playAudio_68457();
function playAudio_68457() {
	window.obj68447_droppedInsideTargetActions_runningActionsCount = obj68447_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj68543")[0];
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
		    window.obj68447_droppedInsideTargetActions_runningActionsCount = window.obj68447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68447_droppedInsideTargetActions_runningActionsCount = window.obj68447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj68447_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90128();
function switchText_90128() {
	window.obj68447_droppedInsideTargetActions_runningActionsCount = obj68447_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68545_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68545_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68545").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68545_content");
			setTimeout(function () {
				window.obj68447_droppedInsideTargetActions_runningActionsCount = window.obj68447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj68545 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68447_droppedInsideTargetActions_runningActionsCount = window.obj68447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68447_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj68447_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68447").trigger("obj68447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68447) {
				console.warn("de-queueing event obj68447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68447_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj68408_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_onTouchDown_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj68408");
//	action: dragDrop
//	target: obj68408 
dragDrop_68411();
function dragDrop_68411() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj68408_onTouchDown_runningActionsCount = obj68408_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj68408');
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
	  	containerNode = $('#obj68557');
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
    	window.obj68408_onTouchDown_runningActionsCount = window.obj68408_onTouchDown_runningActionsCount - 1;
if (window.obj68408_onTouchDown_runningActionsCount < 0) {
	window.obj68408_onTouchDown_runningActionsCount = 0;
} else if (window.obj68408_onTouchDown_runningActionsCount == 0) {
	obj68408_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj68535","#obj68551","#obj68527");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_68411 = false;
    	var dropped_id_68411;
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
					dropped_68411 = true;
					dropped_id_68411 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_68411) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj68408").trigger('SCActionDragDrop68411_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj68408_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68408_onTouchDown_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj68408 
move_92194();
function move_92194() {
	window.obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_runningActionsCount = obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj68408");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 368;
	var moveY = 663;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_runningActionsCount = window.obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj68408_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68434();
function runjs_68434() {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = obj68408_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68527").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68408_droppedInsideTargetActions_3_runningActionsCount = window.obj68408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj68408_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68435();
function runjs_68435() {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = obj68408_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68527").css("border-color", "#C00000"); $("#obj68527").css("border-width", "2px"); $("#obj68527").css("border-style", "solid"); $("#obj68527").css("border-radius", "10px"); $("#obj68527").css("-webkit-border-radius", "10px"); $("#obj68527").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68408_droppedInsideTargetActions_3_runningActionsCount = window.obj68408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj68408_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj68525 
hide_68436();
function hide_68436() {
	var selector = "#obj68525";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = obj68408_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68408_droppedInsideTargetActions_3_runningActionsCount = window.obj68408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68436(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68408_droppedInsideTargetActions_3_runningActionsCount = window.obj68408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68408_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_68437();
function runjs_68437() {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = obj68408_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68408").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj68408_droppedInsideTargetActions_3_runningActionsCount = window.obj68408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj68408_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_68438();
function switchText_68438() {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = obj68408_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68545_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68545_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68545").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68545_content");
			setTimeout(function () {
				window.obj68408_droppedInsideTargetActions_3_runningActionsCount = window.obj68408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj68545 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68408_droppedInsideTargetActions_3_runningActionsCount = window.obj68408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj68408_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj68408 
move_68439();
function move_68439() {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = obj68408_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj68408");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 368;
	var moveY = 663;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68408_droppedInsideTargetActions_3_runningActionsCount = window.obj68408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj68408_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68440();
function runjs_68440() {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = obj68408_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68527").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68408_droppedInsideTargetActions_3_runningActionsCount = window.obj68408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj68408_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_68441();
function runjs_68441() {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = obj68408_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68527").css("border-color", "#000000"); $("#obj68527").css("border-width", "1px"); $("#obj68527").css("border-style", "solid"); $("#obj68527").css("border-radius", "10px"); $("#obj68527").css("-webkit-border-radius", "10px"); $("#obj68527").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68408_droppedInsideTargetActions_3_runningActionsCount = window.obj68408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj68408_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj68525
(function(){
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = obj68408_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj68525";
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
					window.obj68408_droppedInsideTargetActions_3_runningActionsCount = window.obj68408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj68408_droppedInsideTargetActions_3_runningActionsCount = window.obj68408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68408_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_68443();
function runjs_68443() {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = obj68408_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68408").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj68408_droppedInsideTargetActions_3_runningActionsCount = window.obj68408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj68408_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_68444();
function runjs_68444() {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = obj68408_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68408").css("border-color", "rgba(0,0,0,0)"); $("#obj68408").css("border-width", "0px"); $("#obj68408").css("border-style", "solid"); $("#obj68408").css("border-radius", "10px"); $("#obj68408").css("-webkit-border-radius", "10px"); $("#obj68408").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68408_droppedInsideTargetActions_3_runningActionsCount = window.obj68408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj68408_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj68544 
playAudio_68445();
function playAudio_68445() {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = obj68408_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj68544")[0];
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
		    window.obj68408_droppedInsideTargetActions_3_runningActionsCount = window.obj68408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68408_droppedInsideTargetActions_3_runningActionsCount = window.obj68408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj68408_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_68446();
function switchText_68446() {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = obj68408_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68545_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68545_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68545").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68545_content");
			setTimeout(function () {
				window.obj68408_droppedInsideTargetActions_3_runningActionsCount = window.obj68408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj68545 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68408_droppedInsideTargetActions_3_runningActionsCount = window.obj68408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj68408_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj68408_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68420();
function runjs_68420() {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = obj68408_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68551").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68408_droppedInsideTargetActions_2_runningActionsCount = window.obj68408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj68408_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68421();
function runjs_68421() {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = obj68408_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68551").css("border-color", "#C00000"); $("#obj68551").css("border-width", "2px"); $("#obj68551").css("border-style", "solid"); $("#obj68551").css("border-radius", "10px"); $("#obj68551").css("-webkit-border-radius", "10px"); $("#obj68551").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68408_droppedInsideTargetActions_2_runningActionsCount = window.obj68408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj68408_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj68549 
hide_68422();
function hide_68422() {
	var selector = "#obj68549";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = obj68408_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68408_droppedInsideTargetActions_2_runningActionsCount = window.obj68408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68422(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68408_droppedInsideTargetActions_2_runningActionsCount = window.obj68408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68408_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_68423();
function runjs_68423() {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = obj68408_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68408").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj68408_droppedInsideTargetActions_2_runningActionsCount = window.obj68408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj68408_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_68424();
function switchText_68424() {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = obj68408_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68545_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68545_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68545").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68545_content");
			setTimeout(function () {
				window.obj68408_droppedInsideTargetActions_2_runningActionsCount = window.obj68408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj68545 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68408_droppedInsideTargetActions_2_runningActionsCount = window.obj68408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj68408_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj68408 
move_68425();
function move_68425() {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = obj68408_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj68408");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 368;
	var moveY = 663;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68408_droppedInsideTargetActions_2_runningActionsCount = window.obj68408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj68408_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68426();
function runjs_68426() {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = obj68408_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68551").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68408_droppedInsideTargetActions_2_runningActionsCount = window.obj68408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj68408_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_68427();
function runjs_68427() {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = obj68408_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68551").css("border-color", "#000000"); $("#obj68551").css("border-width", "1px"); $("#obj68551").css("border-style", "solid"); $("#obj68551").css("border-radius", "10px"); $("#obj68551").css("-webkit-border-radius", "10px"); $("#obj68551").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68408_droppedInsideTargetActions_2_runningActionsCount = window.obj68408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj68408_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj68549
(function(){
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = obj68408_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj68549";
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
					window.obj68408_droppedInsideTargetActions_2_runningActionsCount = window.obj68408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj68408_droppedInsideTargetActions_2_runningActionsCount = window.obj68408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68408_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_68429();
function runjs_68429() {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = obj68408_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68408").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj68408_droppedInsideTargetActions_2_runningActionsCount = window.obj68408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj68408_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_68430();
function runjs_68430() {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = obj68408_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68408").css("border-color", "rgba(0,0,0,0)"); $("#obj68408").css("border-width", "0px"); $("#obj68408").css("border-style", "solid"); $("#obj68408").css("border-radius", "10px"); $("#obj68408").css("-webkit-border-radius", "10px"); $("#obj68408").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68408_droppedInsideTargetActions_2_runningActionsCount = window.obj68408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj68408_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj68544 
playAudio_68431();
function playAudio_68431() {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = obj68408_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj68544")[0];
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
		    window.obj68408_droppedInsideTargetActions_2_runningActionsCount = window.obj68408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68408_droppedInsideTargetActions_2_runningActionsCount = window.obj68408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj68408_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_68432();
function switchText_68432() {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = obj68408_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68545_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68545_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68545").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68545_content");
			setTimeout(function () {
				window.obj68408_droppedInsideTargetActions_2_runningActionsCount = window.obj68408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj68545 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68408_droppedInsideTargetActions_2_runningActionsCount = window.obj68408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj68408_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj68408_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68413();
function runjs_68413() {
	window.obj68408_droppedInsideTargetActions_runningActionsCount = obj68408_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj68535").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68408_droppedInsideTargetActions_runningActionsCount = window.obj68408_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj68408_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_68417();
function switchText_68417() {
	window.obj68408_droppedInsideTargetActions_runningActionsCount = obj68408_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68545_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68545_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68545").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68545_content");
			setTimeout(function () {
				window.obj68408_droppedInsideTargetActions_runningActionsCount = window.obj68408_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj68545 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68408_droppedInsideTargetActions_runningActionsCount = window.obj68408_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj68408_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_68414();
function runjs_68414() {
	window.obj68408_droppedInsideTargetActions_runningActionsCount = obj68408_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj68535").css("border-color", "#058E3F"); $("#obj68535").css("border-width", "2px"); $("#obj68535").css("border-style", "solid"); $("#obj68535").css("border-radius", "10px"); $("#obj68535").css("-webkit-border-radius", "10px"); $("#obj68535").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68408_droppedInsideTargetActions_runningActionsCount = window.obj68408_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj68408_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj68533 
hide_68415();
function hide_68415() {
	var selector = "#obj68533";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68408_droppedInsideTargetActions_runningActionsCount = obj68408_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68408_droppedInsideTargetActions_runningActionsCount = window.obj68408_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68415(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68408_droppedInsideTargetActions_runningActionsCount = window.obj68408_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68408_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_68416();
function runjs_68416() {
	window.obj68408_droppedInsideTargetActions_runningActionsCount = obj68408_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj68408").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj68408_droppedInsideTargetActions_runningActionsCount = window.obj68408_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj68408_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj68543 
playAudio_68418();
function playAudio_68418() {
	window.obj68408_droppedInsideTargetActions_runningActionsCount = obj68408_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj68543")[0];
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
		    window.obj68408_droppedInsideTargetActions_runningActionsCount = window.obj68408_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68408_droppedInsideTargetActions_runningActionsCount = window.obj68408_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj68408_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90129();
function switchText_90129() {
	window.obj68408_droppedInsideTargetActions_runningActionsCount = obj68408_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68545_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68545_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68545").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68545_content");
			setTimeout(function () {
				window.obj68408_droppedInsideTargetActions_runningActionsCount = window.obj68408_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj68545 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68408_droppedInsideTargetActions_runningActionsCount = window.obj68408_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68408_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68408_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68408_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68408_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj68408_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68408_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68408").trigger("obj68408_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68408) {
				console.warn("de-queueing event obj68408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68408_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj68405_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68405_onTap_activeActionGroupIndex = -1;
		$("#obj68405").trigger("obj68405_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68405) {
				console.warn("de-queueing event obj68405." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68405").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68405_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_68579();
function goToPage_68579() {
	window.obj68405_onTap_runningActionsCount = obj68405_onTap_runningActionsCount + 1;
	$("#anchor207")[0].click();
	window.obj68405_onTap_runningActionsCount = window.obj68405_onTap_runningActionsCount - 1;
if (window.obj68405_onTap_runningActionsCount < 0) {
	window.obj68405_onTap_runningActionsCount = 0;
} else if (window.obj68405_onTap_runningActionsCount == 0) {
	obj68405_onTap_actionGroup1();
}
}





















};
obj68405_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68405_onTap_activeActionGroupIndex = -1;
		$("#obj68405").trigger("obj68405_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68405) {
				console.warn("de-queueing event obj68405." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68405").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68405_onTap_activeActionGroupIndex = 1;
	





















};
obj68387_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68387_onTap_activeActionGroupIndex = -1;
		$("#obj68387").trigger("obj68387_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68387) {
				console.warn("de-queueing event obj68387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68387_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68387 
hide_68390();
function hide_68390() {
	var selector = "#obj68387";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68387_onTap_runningActionsCount = obj68387_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68387_onTap_runningActionsCount = window.obj68387_onTap_runningActionsCount - 1;
if (window.obj68387_onTap_runningActionsCount < 0) {
	window.obj68387_onTap_runningActionsCount = 0;
} else if (window.obj68387_onTap_runningActionsCount == 0) {
	obj68387_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68390(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68387_onTap_runningActionsCount = window.obj68387_onTap_runningActionsCount - 1;
if (window.obj68387_onTap_runningActionsCount < 0) {
	window.obj68387_onTap_runningActionsCount = 0;
} else if (window.obj68387_onTap_runningActionsCount == 0) {
	obj68387_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68377 
stopMovie_68389();
function stopMovie_68389() {
	window.obj68387_onTap_runningActionsCount = obj68387_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68377")[0];
	myVideo.pause();
	window.obj68387_onTap_runningActionsCount = window.obj68387_onTap_runningActionsCount - 1;
if (window.obj68387_onTap_runningActionsCount < 0) {
	window.obj68387_onTap_runningActionsCount = 0;
} else if (window.obj68387_onTap_runningActionsCount == 0) {
	obj68387_onTap_actionGroup1();
}
}
















};
obj68387_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68387_onTap_activeActionGroupIndex = -1;
		$("#obj68387").trigger("obj68387_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68387) {
				console.warn("de-queueing event obj68387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68387_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68379
(function(){
	window.obj68387_onTap_runningActionsCount = obj68387_onTap_runningActionsCount + 1;

	var selector = "#obj68379";
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
					window.obj68387_onTap_runningActionsCount = window.obj68387_onTap_runningActionsCount - 1;
if (window.obj68387_onTap_runningActionsCount < 0) {
	window.obj68387_onTap_runningActionsCount = 0;
} else if (window.obj68387_onTap_runningActionsCount == 0) {
	obj68387_onTap_actionGroup2();
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
				window.obj68387_onTap_runningActionsCount = window.obj68387_onTap_runningActionsCount - 1;
if (window.obj68387_onTap_runningActionsCount < 0) {
	window.obj68387_onTap_runningActionsCount = 0;
} else if (window.obj68387_onTap_runningActionsCount == 0) {
	obj68387_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68387_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68387_onTap_activeActionGroupIndex = -1;
		$("#obj68387").trigger("obj68387_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68387) {
				console.warn("de-queueing event obj68387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68387_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68377 
move_68392();
function move_68392() {
	window.obj68387_onTap_runningActionsCount = obj68387_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68377");
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
			window.obj68387_onTap_runningActionsCount = window.obj68387_onTap_runningActionsCount - 1;
if (window.obj68387_onTap_runningActionsCount < 0) {
	window.obj68387_onTap_runningActionsCount = 0;
} else if (window.obj68387_onTap_runningActionsCount == 0) {
	obj68387_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68387_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68387_onTap_activeActionGroupIndex = -1;
		$("#obj68387").trigger("obj68387_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68387) {
				console.warn("de-queueing event obj68387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68387_onTap_activeActionGroupIndex = 3;
	





















};
obj68379_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68379_onTap_activeActionGroupIndex = -1;
		$("#obj68379").trigger("obj68379_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68379) {
				console.warn("de-queueing event obj68379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68379_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68379 
hide_68382();
function hide_68382() {
	var selector = "#obj68379";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68379_onTap_runningActionsCount = obj68379_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68379_onTap_runningActionsCount = window.obj68379_onTap_runningActionsCount - 1;
if (window.obj68379_onTap_runningActionsCount < 0) {
	window.obj68379_onTap_runningActionsCount = 0;
} else if (window.obj68379_onTap_runningActionsCount == 0) {
	obj68379_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68382(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68379_onTap_runningActionsCount = window.obj68379_onTap_runningActionsCount - 1;
if (window.obj68379_onTap_runningActionsCount < 0) {
	window.obj68379_onTap_runningActionsCount = 0;
} else if (window.obj68379_onTap_runningActionsCount == 0) {
	obj68379_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68377 
playPauseMovie_68381();
function playPauseMovie_68381() {
	window.obj68379_onTap_runningActionsCount = obj68379_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68377")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68379_onTap_runningActionsCount = window.obj68379_onTap_runningActionsCount - 1;
if (window.obj68379_onTap_runningActionsCount < 0) {
	window.obj68379_onTap_runningActionsCount = 0;
} else if (window.obj68379_onTap_runningActionsCount == 0) {
	obj68379_onTap_actionGroup1();
}
}

















};
obj68379_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68379_onTap_activeActionGroupIndex = -1;
		$("#obj68379").trigger("obj68379_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68379) {
				console.warn("de-queueing event obj68379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68379_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68387
(function(){
	window.obj68379_onTap_runningActionsCount = obj68379_onTap_runningActionsCount + 1;

	var selector = "#obj68387";
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
					window.obj68379_onTap_runningActionsCount = window.obj68379_onTap_runningActionsCount - 1;
if (window.obj68379_onTap_runningActionsCount < 0) {
	window.obj68379_onTap_runningActionsCount = 0;
} else if (window.obj68379_onTap_runningActionsCount == 0) {
	obj68379_onTap_actionGroup2();
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
				window.obj68379_onTap_runningActionsCount = window.obj68379_onTap_runningActionsCount - 1;
if (window.obj68379_onTap_runningActionsCount < 0) {
	window.obj68379_onTap_runningActionsCount = 0;
} else if (window.obj68379_onTap_runningActionsCount == 0) {
	obj68379_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68379_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68379_onTap_activeActionGroupIndex = -1;
		$("#obj68379").trigger("obj68379_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68379) {
				console.warn("de-queueing event obj68379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68379_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68377 
move_68384();
function move_68384() {
	window.obj68379_onTap_runningActionsCount = obj68379_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68377");
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
			window.obj68379_onTap_runningActionsCount = window.obj68379_onTap_runningActionsCount - 1;
if (window.obj68379_onTap_runningActionsCount < 0) {
	window.obj68379_onTap_runningActionsCount = 0;
} else if (window.obj68379_onTap_runningActionsCount == 0) {
	obj68379_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68379_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68379_onTap_activeActionGroupIndex = -1;
		$("#obj68379").trigger("obj68379_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68379) {
				console.warn("de-queueing event obj68379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68379_onTap_activeActionGroupIndex = 3;
	





















};
obj89859_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89859_onTap_activeActionGroupIndex = -1;
		$("#obj89859").trigger("obj89859_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89859) {
				console.warn("de-queueing event obj89859." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89859").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89859_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89864 
stopAudio_89861();
function stopAudio_89861() {
	window.obj89859_onTap_runningActionsCount = obj89859_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89864")[0];
	myAudio.pause();
	window.obj89859_onTap_runningActionsCount = window.obj89859_onTap_runningActionsCount - 1;
if (window.obj89859_onTap_runningActionsCount < 0) {
	window.obj89859_onTap_runningActionsCount = 0;
} else if (window.obj89859_onTap_runningActionsCount == 0) {
	obj89859_onTap_actionGroup1();
}
}








};
obj89859_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89859_onTap_activeActionGroupIndex = -1;
		$("#obj89859").trigger("obj89859_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89859) {
				console.warn("de-queueing event obj89859." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89859").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89859_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89859 
hide_89862();
function hide_89862() {
	var selector = "#obj89859";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89859_onTap_runningActionsCount = obj89859_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89859_onTap_runningActionsCount = window.obj89859_onTap_runningActionsCount - 1;
if (window.obj89859_onTap_runningActionsCount < 0) {
	window.obj89859_onTap_runningActionsCount = 0;
} else if (window.obj89859_onTap_runningActionsCount == 0) {
	obj89859_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89862(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89859_onTap_runningActionsCount = window.obj89859_onTap_runningActionsCount - 1;
if (window.obj89859_onTap_runningActionsCount < 0) {
	window.obj89859_onTap_runningActionsCount = 0;
} else if (window.obj89859_onTap_runningActionsCount == 0) {
	obj89859_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89859_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89859_onTap_activeActionGroupIndex = -1;
		$("#obj89859").trigger("obj89859_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89859) {
				console.warn("de-queueing event obj89859." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89859").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89859_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89854
(function(){
	window.obj89859_onTap_runningActionsCount = obj89859_onTap_runningActionsCount + 1;

	var selector = "#obj89854";
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
					window.obj89859_onTap_runningActionsCount = window.obj89859_onTap_runningActionsCount - 1;
if (window.obj89859_onTap_runningActionsCount < 0) {
	window.obj89859_onTap_runningActionsCount = 0;
} else if (window.obj89859_onTap_runningActionsCount == 0) {
	obj89859_onTap_actionGroup3();
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
				window.obj89859_onTap_runningActionsCount = window.obj89859_onTap_runningActionsCount - 1;
if (window.obj89859_onTap_runningActionsCount < 0) {
	window.obj89859_onTap_runningActionsCount = 0;
} else if (window.obj89859_onTap_runningActionsCount == 0) {
	obj89859_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89859_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89859_onTap_activeActionGroupIndex = -1;
		$("#obj89859").trigger("obj89859_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89859) {
				console.warn("de-queueing event obj89859." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89859").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89859_onTap_activeActionGroupIndex = 3;
	





















};
obj89854_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89854_onTap_activeActionGroupIndex = -1;
		$("#obj89854").trigger("obj89854_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89854) {
				console.warn("de-queueing event obj89854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89854_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89854 
hide_89856();
function hide_89856() {
	var selector = "#obj89854";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89854_onTap_runningActionsCount = obj89854_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89854_onTap_runningActionsCount = window.obj89854_onTap_runningActionsCount - 1;
if (window.obj89854_onTap_runningActionsCount < 0) {
	window.obj89854_onTap_runningActionsCount = 0;
} else if (window.obj89854_onTap_runningActionsCount == 0) {
	obj89854_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89856(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89854_onTap_runningActionsCount = window.obj89854_onTap_runningActionsCount - 1;
if (window.obj89854_onTap_runningActionsCount < 0) {
	window.obj89854_onTap_runningActionsCount = 0;
} else if (window.obj89854_onTap_runningActionsCount == 0) {
	obj89854_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89854_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89854_onTap_activeActionGroupIndex = -1;
		$("#obj89854").trigger("obj89854_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89854) {
				console.warn("de-queueing event obj89854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89854_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89859
(function(){
	window.obj89854_onTap_runningActionsCount = obj89854_onTap_runningActionsCount + 1;

	var selector = "#obj89859";
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
					window.obj89854_onTap_runningActionsCount = window.obj89854_onTap_runningActionsCount - 1;
if (window.obj89854_onTap_runningActionsCount < 0) {
	window.obj89854_onTap_runningActionsCount = 0;
} else if (window.obj89854_onTap_runningActionsCount == 0) {
	obj89854_onTap_actionGroup2();
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
				window.obj89854_onTap_runningActionsCount = window.obj89854_onTap_runningActionsCount - 1;
if (window.obj89854_onTap_runningActionsCount < 0) {
	window.obj89854_onTap_runningActionsCount = 0;
} else if (window.obj89854_onTap_runningActionsCount == 0) {
	obj89854_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89854_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89854_onTap_activeActionGroupIndex = -1;
		$("#obj89854").trigger("obj89854_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89854) {
				console.warn("de-queueing event obj89854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89854_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89864 
playAudio_89858();
function playAudio_89858() {
	window.obj89854_onTap_runningActionsCount = obj89854_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89864")[0];
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
		    window.obj89854_onTap_runningActionsCount = window.obj89854_onTap_runningActionsCount - 1;
if (window.obj89854_onTap_runningActionsCount < 0) {
	window.obj89854_onTap_runningActionsCount = 0;
} else if (window.obj89854_onTap_runningActionsCount == 0) {
	obj89854_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89854_onTap_runningActionsCount = window.obj89854_onTap_runningActionsCount - 1;
if (window.obj89854_onTap_runningActionsCount < 0) {
	window.obj89854_onTap_runningActionsCount = 0;
} else if (window.obj89854_onTap_runningActionsCount == 0) {
	obj89854_onTap_actionGroup3();
}
	}
}









};
obj89854_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89854_onTap_activeActionGroupIndex = -1;
		$("#obj89854").trigger("obj89854_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89854) {
				console.warn("de-queueing event obj89854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89854_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj68572: Event Touch Down
 *
 */
$("#obj68572").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68572_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68572_onTap is still running");
	return;
}
var obj68572_onTap_runningActionsCount = 0;
var obj68572_onTap_loopCount = 0;
obj68572_onTap_actionGroup0();
});










/*
 *
 *   obj68569: Event Touch Down
 *
 */
$("#obj68569").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68569_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68569_onTap is still running");
	return;
}
var obj68569_onTap_runningActionsCount = 0;
var obj68569_onTap_loopCount = 0;
obj68569_onTap_actionGroup0();
});










/*
 *
 *   obj68565: Event Touch Down
 *
 */
$("#obj68565").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68565_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68565_onTap is still running");
	return;
}
var obj68565_onTap_runningActionsCount = 0;
var obj68565_onTap_loopCount = 0;
obj68565_onTap_actionGroup0();
});





























































































































































































































/*
 *
 *   obj68486: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj68486");
	var winTarget = document.getElementById("obj68486");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj68486").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj68486_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj68486_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj68486_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68486_onTouchDown is still running");
	return;
}
var obj68486_onTouchDown_runningActionsCount = 0;
var obj68486_onTouchDown_loopCount = 0;
obj68486_onTouchDown_actionGroup0();
});



/*
 *
 *   obj68486: Event SCActionDragDrop68489_droppedOutsideTargetActions
 *
 */
$("#obj68486").bind("SCActionDragDrop68489_droppedOutsideTargetActions", function(event) {
	if (window.obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68486_SCActionDragDrop68489_droppedOutsideTargetActions is still running");
	return;
}
var obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_runningActionsCount = 0;
var obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_loopCount = 0;
obj68486_SCActionDragDrop68489_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj68486: Event droppedInsideTargetActions_3
 *
 */
$("#obj68486").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj68486_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68486_droppedInsideTargetActions_3 is still running");
	return;
}
var obj68486_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj68486_droppedInsideTargetActions_3_loopCount = 0;
obj68486_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj68486: Event droppedInsideTargetActions_2
 *
 */
$("#obj68486").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj68486_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68486_droppedInsideTargetActions_2 is still running");
	return;
}
var obj68486_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj68486_droppedInsideTargetActions_2_loopCount = 0;
obj68486_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj68486: Event droppedInsideTargetActions
 *
 */
$("#obj68486").bind("droppedInsideTargetActions", function(event) {
	if (window.obj68486_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68486_droppedInsideTargetActions is still running");
	return;
}
var obj68486_droppedInsideTargetActions_runningActionsCount = 0;
var obj68486_droppedInsideTargetActions_loopCount = 0;
obj68486_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj68447: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj68447");
	var winTarget = document.getElementById("obj68447");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj68447").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj68447_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj68447_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj68447_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68447_onTouchDown is still running");
	return;
}
var obj68447_onTouchDown_runningActionsCount = 0;
var obj68447_onTouchDown_loopCount = 0;
obj68447_onTouchDown_actionGroup0();
});



/*
 *
 *   obj68447: Event SCActionDragDrop68450_droppedOutsideTargetActions
 *
 */
$("#obj68447").bind("SCActionDragDrop68450_droppedOutsideTargetActions", function(event) {
	if (window.obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68447_SCActionDragDrop68450_droppedOutsideTargetActions is still running");
	return;
}
var obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_runningActionsCount = 0;
var obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_loopCount = 0;
obj68447_SCActionDragDrop68450_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj68447: Event droppedInsideTargetActions_3
 *
 */
$("#obj68447").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj68447_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68447_droppedInsideTargetActions_3 is still running");
	return;
}
var obj68447_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj68447_droppedInsideTargetActions_3_loopCount = 0;
obj68447_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj68447: Event droppedInsideTargetActions_2
 *
 */
$("#obj68447").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj68447_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68447_droppedInsideTargetActions_2 is still running");
	return;
}
var obj68447_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj68447_droppedInsideTargetActions_2_loopCount = 0;
obj68447_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj68447: Event droppedInsideTargetActions
 *
 */
$("#obj68447").bind("droppedInsideTargetActions", function(event) {
	if (window.obj68447_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68447_droppedInsideTargetActions is still running");
	return;
}
var obj68447_droppedInsideTargetActions_runningActionsCount = 0;
var obj68447_droppedInsideTargetActions_loopCount = 0;
obj68447_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj68408: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj68408");
	var winTarget = document.getElementById("obj68408");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj68408").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj68408_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj68408_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj68408_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68408_onTouchDown is still running");
	return;
}
var obj68408_onTouchDown_runningActionsCount = 0;
var obj68408_onTouchDown_loopCount = 0;
obj68408_onTouchDown_actionGroup0();
});



/*
 *
 *   obj68408: Event SCActionDragDrop68411_droppedOutsideTargetActions
 *
 */
$("#obj68408").bind("SCActionDragDrop68411_droppedOutsideTargetActions", function(event) {
	if (window.obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68408_SCActionDragDrop68411_droppedOutsideTargetActions is still running");
	return;
}
var obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_runningActionsCount = 0;
var obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_loopCount = 0;
obj68408_SCActionDragDrop68411_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj68408: Event droppedInsideTargetActions_3
 *
 */
$("#obj68408").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj68408_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68408_droppedInsideTargetActions_3 is still running");
	return;
}
var obj68408_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj68408_droppedInsideTargetActions_3_loopCount = 0;
obj68408_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj68408: Event droppedInsideTargetActions_2
 *
 */
$("#obj68408").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj68408_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68408_droppedInsideTargetActions_2 is still running");
	return;
}
var obj68408_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj68408_droppedInsideTargetActions_2_loopCount = 0;
obj68408_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj68408: Event droppedInsideTargetActions
 *
 */
$("#obj68408").bind("droppedInsideTargetActions", function(event) {
	if (window.obj68408_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68408_droppedInsideTargetActions is still running");
	return;
}
var obj68408_droppedInsideTargetActions_runningActionsCount = 0;
var obj68408_droppedInsideTargetActions_loopCount = 0;
obj68408_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj68405: Event Touch Down
 *
 */
$("#obj68405").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68405_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68405_onTap is still running");
	return;
}
var obj68405_onTap_runningActionsCount = 0;
var obj68405_onTap_loopCount = 0;
obj68405_onTap_actionGroup0();
});










/*
 *
 *   obj68387: Event Touch Down
 *
 */
$("#obj68387").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68387_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68387_onTap is still running");
	return;
}
var obj68387_onTap_runningActionsCount = 0;
var obj68387_onTap_loopCount = 0;
obj68387_onTap_actionGroup0();
});










/*
 *
 *   obj68379: Event Touch Down
 *
 */
$("#obj68379").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68379_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68379_onTap is still running");
	return;
}
var obj68379_onTap_runningActionsCount = 0;
var obj68379_onTap_loopCount = 0;
obj68379_onTap_actionGroup0();
});










/*
 *
 *   obj89859: Event Touch Down
 *
 */
$("#obj89859").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89859_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89859_onTap is still running");
	return;
}
var obj89859_onTap_runningActionsCount = 0;
var obj89859_onTap_loopCount = 0;
obj89859_onTap_actionGroup0();
});










/*
 *
 *   obj89854: Event Touch Down
 *
 */
$("#obj89854").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89854_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89854_onTap is still running");
	return;
}
var obj89854_onTap_runningActionsCount = 0;
var obj89854_onTap_loopCount = 0;
obj89854_onTap_actionGroup0();
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
	
$("#obj68575").trigger('SCEventShow');
$("#obj68572").trigger('SCEventShow');
$("#obj68569").trigger('SCEventShow');
$("#obj68565").trigger('SCEventShow');
$("#obj68563").trigger('SCEventShow');
$("#obj68561").trigger('SCEventShow');
$("#obj68559").trigger('SCEventShow');
$("#obj68557").trigger('SCEventShow');
$("#obj68555").trigger('SCEventShow');
$("#obj68553").trigger('SCEventShow');
$("#obj68551").trigger('SCEventShow');
$("#obj68549").trigger('SCEventShow');
$("#obj68547").trigger('SCEventShow');
$("#obj68545").trigger('SCEventShow');
$("#obj68544").trigger('SCEventShow');
$("#obj68543").trigger('SCEventShow');
$("#obj68541").trigger('SCEventShow');
$("#obj68539").trigger('SCEventShow');
$("#obj68537").trigger('SCEventShow');
$("#obj68535").trigger('SCEventShow');
$("#obj68533").trigger('SCEventShow');
$("#obj68531").trigger('SCEventShow');
$("#obj68529").trigger('SCEventShow');
$("#obj68527").trigger('SCEventShow');
$("#obj68525").trigger('SCEventShow');
$("#obj68486").trigger('SCEventShow');
$("#obj68447").trigger('SCEventShow');
$("#obj68408").trigger('SCEventShow');
$("#obj68405").trigger('SCEventShow');
$("#obj68387").trigger('SCEventShow');
$("#obj68379").trigger('SCEventShow');
$("#obj89859").trigger('SCEventShow');
$("#obj89854").trigger('SCEventShow');
$("#obj89864").trigger('SCEventShow');
$("#obj94695").trigger('SCEventShow');
$("#obj68377").trigger('SCEventShow');
	
});