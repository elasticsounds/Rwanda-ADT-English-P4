pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 35711;
pubcoder.page.title = pubcoder.page.title || "123";
pubcoder.page.number = pubcoder.page.number || 123;
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
var obj35877_onTap_activeActionGroupIndex = -1;
var obj35877_onTap_runningActionsCount = 0;
var obj35877_onTap_loopCount = 0;
var obj35874_onTap_activeActionGroupIndex = -1;
var obj35874_onTap_runningActionsCount = 0;
var obj35874_onTap_loopCount = 0;
var obj35870_onTap_activeActionGroupIndex = -1;
var obj35870_onTap_runningActionsCount = 0;
var obj35870_onTap_loopCount = 0;
var obj35802_onDrag_activeActionGroupIndex = -1;
var obj35802_onDrag_runningActionsCount = 0;
var obj35802_onDrag_loopCount = 0;
var obj35802_onTouchDown_activeActionGroupIndex = -1;
var obj35802_onTouchDown_runningActionsCount = 0;
var obj35802_onTouchDown_loopCount = 0;
var obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_runningActionsCount = 0;
var obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_loopCount = 0;
var obj35802_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj35802_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj35802_droppedInsideTargetActions_3_loopCount = 0;
var obj35802_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj35802_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj35802_droppedInsideTargetActions_2_loopCount = 0;
var obj35802_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj35802_droppedInsideTargetActions_runningActionsCount = 0;
var obj35802_droppedInsideTargetActions_loopCount = 0;
var obj35756_onDrag_activeActionGroupIndex = -1;
var obj35756_onDrag_runningActionsCount = 0;
var obj35756_onDrag_loopCount = 0;
var obj35756_onTouchDown_activeActionGroupIndex = -1;
var obj35756_onTouchDown_runningActionsCount = 0;
var obj35756_onTouchDown_loopCount = 0;
var obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_runningActionsCount = 0;
var obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_loopCount = 0;
var obj35756_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj35756_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj35756_droppedInsideTargetActions_3_loopCount = 0;
var obj35756_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj35756_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj35756_droppedInsideTargetActions_2_loopCount = 0;
var obj35756_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj35756_droppedInsideTargetActions_runningActionsCount = 0;
var obj35756_droppedInsideTargetActions_loopCount = 0;
var obj35716_onDrag_activeActionGroupIndex = -1;
var obj35716_onDrag_runningActionsCount = 0;
var obj35716_onDrag_loopCount = 0;
var obj35716_onTouchDown_activeActionGroupIndex = -1;
var obj35716_onTouchDown_runningActionsCount = 0;
var obj35716_onTouchDown_loopCount = 0;
var obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_runningActionsCount = 0;
var obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_loopCount = 0;
var obj35716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj35716_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj35716_droppedInsideTargetActions_3_loopCount = 0;
var obj35716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj35716_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj35716_droppedInsideTargetActions_2_loopCount = 0;
var obj35716_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj35716_droppedInsideTargetActions_runningActionsCount = 0;
var obj35716_droppedInsideTargetActions_loopCount = 0;
var obj66974_onTap_activeActionGroupIndex = -1;
var obj66974_onTap_runningActionsCount = 0;
var obj66974_onTap_loopCount = 0;
var obj66966_onTap_activeActionGroupIndex = -1;
var obj66966_onTap_runningActionsCount = 0;
var obj66966_onTap_loopCount = 0;
var obj88345_onTap_activeActionGroupIndex = -1;
var obj88345_onTap_runningActionsCount = 0;
var obj88345_onTap_loopCount = 0;
var obj88340_onTap_activeActionGroupIndex = -1;
var obj88340_onTap_runningActionsCount = 0;
var obj88340_onTap_loopCount = 0;
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
		
obj35877_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35877_onTap_activeActionGroupIndex = -1;
		$("#obj35877").trigger("obj35877_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35877) {
				console.warn("de-queueing event obj35877." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35877").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35877_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_35879();
function goToPage_35879() {
	window.obj35877_onTap_runningActionsCount = obj35877_onTap_runningActionsCount + 1;
	$("#anchor736")[0].click();
	window.obj35877_onTap_runningActionsCount = window.obj35877_onTap_runningActionsCount - 1;
if (window.obj35877_onTap_runningActionsCount < 0) {
	window.obj35877_onTap_runningActionsCount = 0;
} else if (window.obj35877_onTap_runningActionsCount == 0) {
	obj35877_onTap_actionGroup1();
}
}





















};
obj35877_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35877_onTap_activeActionGroupIndex = -1;
		$("#obj35877").trigger("obj35877_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35877) {
				console.warn("de-queueing event obj35877." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35877").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35877_onTap_activeActionGroupIndex = 1;
	





















};
obj35874_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35874_onTap_activeActionGroupIndex = -1;
		$("#obj35874").trigger("obj35874_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35874) {
				console.warn("de-queueing event obj35874." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35874").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35874_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_35876();
function goToPage_35876() {
	window.obj35874_onTap_runningActionsCount = obj35874_onTap_runningActionsCount + 1;
	$("#anchor737")[0].click();
	window.obj35874_onTap_runningActionsCount = window.obj35874_onTap_runningActionsCount - 1;
if (window.obj35874_onTap_runningActionsCount < 0) {
	window.obj35874_onTap_runningActionsCount = 0;
} else if (window.obj35874_onTap_runningActionsCount == 0) {
	obj35874_onTap_actionGroup1();
}
}





















};
obj35874_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35874_onTap_activeActionGroupIndex = -1;
		$("#obj35874").trigger("obj35874_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35874) {
				console.warn("de-queueing event obj35874." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35874").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35874_onTap_activeActionGroupIndex = 1;
	





















};
obj35870_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35870_onTap_activeActionGroupIndex = -1;
		$("#obj35870").trigger("obj35870_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35870) {
				console.warn("de-queueing event obj35870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35870_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_35872();
function goToPage_35872() {
	window.obj35870_onTap_runningActionsCount = obj35870_onTap_runningActionsCount + 1;
	$("#anchor738")[0].click();
	window.obj35870_onTap_runningActionsCount = window.obj35870_onTap_runningActionsCount - 1;
if (window.obj35870_onTap_runningActionsCount < 0) {
	window.obj35870_onTap_runningActionsCount = 0;
} else if (window.obj35870_onTap_runningActionsCount == 0) {
	obj35870_onTap_actionGroup1();
}
}





















};
obj35870_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35870_onTap_activeActionGroupIndex = -1;
		$("#obj35870").trigger("obj35870_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35870) {
				console.warn("de-queueing event obj35870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35870_onTap_activeActionGroupIndex = 1;
	





















};
obj35802_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_onTouchDown_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj35802");
//	action: dragDrop
//	target: obj35802 
dragDrop_35805();
function dragDrop_35805() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj35802_onTouchDown_runningActionsCount = obj35802_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj35802');
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
	  	containerNode = $('#obj35860');
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
    	window.obj35802_onTouchDown_runningActionsCount = window.obj35802_onTouchDown_runningActionsCount - 1;
if (window.obj35802_onTouchDown_runningActionsCount < 0) {
	window.obj35802_onTouchDown_runningActionsCount = 0;
} else if (window.obj35802_onTouchDown_runningActionsCount == 0) {
	obj35802_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj35854","#obj35858","#obj35856");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_35805 = false;
    	var dropped_id_35805;
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
					dropped_35805 = true;
					dropped_id_35805 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_35805) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj35802").trigger('SCActionDragDrop35805_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj35802_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35802_onTouchDown_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj35802 
move_92547();
function move_92547() {
	window.obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_runningActionsCount = obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj35802");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 68;
	var moveY = 566;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_runningActionsCount = window.obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj35802_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_35823();
function runjs_35823() {
	window.obj35802_droppedInsideTargetActions_3_runningActionsCount = obj35802_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35856").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj35802_droppedInsideTargetActions_3_runningActionsCount = window.obj35802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj35802_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_35824();
function runjs_35824() {
	window.obj35802_droppedInsideTargetActions_3_runningActionsCount = obj35802_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35856").css("border-color", "#C00000"); $("#obj35856").css("border-width", "2px"); $("#obj35856").css("border-style", "solid"); $("#obj35856").css("border-radius", "10px"); $("#obj35856").css("-webkit-border-radius", "10px"); $("#obj35856").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35802_droppedInsideTargetActions_3_runningActionsCount = window.obj35802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj35802_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_35825();
function switchText_35825() {
	window.obj35802_droppedInsideTargetActions_3_runningActionsCount = obj35802_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35800_content");
			setTimeout(function () {
				window.obj35802_droppedInsideTargetActions_3_runningActionsCount = window.obj35802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj35800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35802_droppedInsideTargetActions_3_runningActionsCount = window.obj35802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj35802_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj35802 
move_35826();
function move_35826() {
	window.obj35802_droppedInsideTargetActions_3_runningActionsCount = obj35802_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj35802");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 68;
	var moveY = 566;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj35802_droppedInsideTargetActions_3_runningActionsCount = window.obj35802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj35802_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_35827();
function runjs_35827() {
	window.obj35802_droppedInsideTargetActions_3_runningActionsCount = obj35802_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35856").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj35802_droppedInsideTargetActions_3_runningActionsCount = window.obj35802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj35802_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_35828();
function runjs_35828() {
	window.obj35802_droppedInsideTargetActions_3_runningActionsCount = obj35802_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35856").css("border-color", "#000000"); $("#obj35856").css("border-width", "1px"); $("#obj35856").css("border-style", "solid"); $("#obj35856").css("border-radius", "15px"); $("#obj35856").css("-webkit-border-radius", "15px"); $("#obj35856").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj35802_droppedInsideTargetActions_3_runningActionsCount = window.obj35802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj35802_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_35829();
function runjs_35829() {
	window.obj35802_droppedInsideTargetActions_3_runningActionsCount = obj35802_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35802").css("border-color", "rgba(0,0,0,0)"); $("#obj35802").css("border-width", "0px"); $("#obj35802").css("border-style", "solid"); $("#obj35802").css("border-radius", "20px"); $("#obj35802").css("-webkit-border-radius", "20px"); $("#obj35802").css("-moz-border-radius", "20px"); $("#obj35802_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj35802_droppedInsideTargetActions_3_runningActionsCount = window.obj35802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj35802_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_35830();
function switchText_35830() {
	window.obj35802_droppedInsideTargetActions_3_runningActionsCount = obj35802_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35800_content");
			setTimeout(function () {
				window.obj35802_droppedInsideTargetActions_3_runningActionsCount = window.obj35802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj35800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35802_droppedInsideTargetActions_3_runningActionsCount = window.obj35802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj35802_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj35799 
playAudio_35831();
function playAudio_35831() {
	window.obj35802_droppedInsideTargetActions_3_runningActionsCount = obj35802_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj35799")[0];
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
		    window.obj35802_droppedInsideTargetActions_3_runningActionsCount = window.obj35802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj35802_droppedInsideTargetActions_3_runningActionsCount = window.obj35802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj35802_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj35802_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_35813();
function runjs_35813() {
	window.obj35802_droppedInsideTargetActions_2_runningActionsCount = obj35802_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35858").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj35802_droppedInsideTargetActions_2_runningActionsCount = window.obj35802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj35802_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_35814();
function runjs_35814() {
	window.obj35802_droppedInsideTargetActions_2_runningActionsCount = obj35802_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35858").css("border-color", "#C00000"); $("#obj35858").css("border-width", "2px"); $("#obj35858").css("border-style", "solid"); $("#obj35858").css("border-radius", "10px"); $("#obj35858").css("-webkit-border-radius", "10px"); $("#obj35858").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35802_droppedInsideTargetActions_2_runningActionsCount = window.obj35802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj35802_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_35815();
function switchText_35815() {
	window.obj35802_droppedInsideTargetActions_2_runningActionsCount = obj35802_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35800_content");
			setTimeout(function () {
				window.obj35802_droppedInsideTargetActions_2_runningActionsCount = window.obj35802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj35800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35802_droppedInsideTargetActions_2_runningActionsCount = window.obj35802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj35802_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj35802 
move_35816();
function move_35816() {
	window.obj35802_droppedInsideTargetActions_2_runningActionsCount = obj35802_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj35802");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 68;
	var moveY = 566;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj35802_droppedInsideTargetActions_2_runningActionsCount = window.obj35802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj35802_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_35817();
function runjs_35817() {
	window.obj35802_droppedInsideTargetActions_2_runningActionsCount = obj35802_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35858").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj35802_droppedInsideTargetActions_2_runningActionsCount = window.obj35802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj35802_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_35818();
function runjs_35818() {
	window.obj35802_droppedInsideTargetActions_2_runningActionsCount = obj35802_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35858").css("border-color", "#000000"); $("#obj35858").css("border-width", "1px"); $("#obj35858").css("border-style", "solid"); $("#obj35858").css("border-radius", "15px"); $("#obj35858").css("-webkit-border-radius", "15px"); $("#obj35858").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj35802_droppedInsideTargetActions_2_runningActionsCount = window.obj35802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj35802_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_35819();
function runjs_35819() {
	window.obj35802_droppedInsideTargetActions_2_runningActionsCount = obj35802_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35802").css("border-color", "rgba(0,0,0,0)"); $("#obj35802").css("border-width", "0px"); $("#obj35802").css("border-style", "solid"); $("#obj35802").css("border-radius", "20px"); $("#obj35802").css("-webkit-border-radius", "20px"); $("#obj35802").css("-moz-border-radius", "20px"); $("#obj35802_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj35802_droppedInsideTargetActions_2_runningActionsCount = window.obj35802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj35802_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_35820();
function switchText_35820() {
	window.obj35802_droppedInsideTargetActions_2_runningActionsCount = obj35802_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35800_content");
			setTimeout(function () {
				window.obj35802_droppedInsideTargetActions_2_runningActionsCount = window.obj35802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj35800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35802_droppedInsideTargetActions_2_runningActionsCount = window.obj35802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj35802_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj35799 
playAudio_35821();
function playAudio_35821() {
	window.obj35802_droppedInsideTargetActions_2_runningActionsCount = obj35802_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj35799")[0];
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
		    window.obj35802_droppedInsideTargetActions_2_runningActionsCount = window.obj35802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj35802_droppedInsideTargetActions_2_runningActionsCount = window.obj35802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj35802_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj35802_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_35807();
function runjs_35807() {
	window.obj35802_droppedInsideTargetActions_runningActionsCount = obj35802_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj35854").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj35802_droppedInsideTargetActions_runningActionsCount = window.obj35802_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj35802_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_35810();
function switchText_35810() {
	window.obj35802_droppedInsideTargetActions_runningActionsCount = obj35802_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35800_content");
			setTimeout(function () {
				window.obj35802_droppedInsideTargetActions_runningActionsCount = window.obj35802_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj35800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35802_droppedInsideTargetActions_runningActionsCount = window.obj35802_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj35802_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_35808();
function runjs_35808() {
	window.obj35802_droppedInsideTargetActions_runningActionsCount = obj35802_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj35854").css("border-color", "#058E3F"); $("#obj35854").css("border-width", "2px"); $("#obj35854").css("border-style", "solid"); $("#obj35854").css("border-radius", "10px"); $("#obj35854").css("-webkit-border-radius", "10px"); $("#obj35854").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35802_droppedInsideTargetActions_runningActionsCount = window.obj35802_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj35802_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj35842 
hide_35809();
function hide_35809() {
	var selector = "#obj35842";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj35802_droppedInsideTargetActions_runningActionsCount = obj35802_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj35802_droppedInsideTargetActions_runningActionsCount = window.obj35802_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_35809(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj35802_droppedInsideTargetActions_runningActionsCount = window.obj35802_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj35802_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj35798 
playAudio_35811();
function playAudio_35811() {
	window.obj35802_droppedInsideTargetActions_runningActionsCount = obj35802_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj35798")[0];
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
		    window.obj35802_droppedInsideTargetActions_runningActionsCount = window.obj35802_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj35802_droppedInsideTargetActions_runningActionsCount = window.obj35802_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj35802_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90431();
function switchText_90431() {
	window.obj35802_droppedInsideTargetActions_runningActionsCount = obj35802_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35800_content");
			setTimeout(function () {
				window.obj35802_droppedInsideTargetActions_runningActionsCount = window.obj35802_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj35800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35802_droppedInsideTargetActions_runningActionsCount = window.obj35802_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35802_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj35802_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35802_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35802").trigger("obj35802_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35802) {
				console.warn("de-queueing event obj35802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35802_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj35756_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_onTouchDown_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj35756");
//	action: dragDrop
//	target: obj35756 
dragDrop_35759();
function dragDrop_35759() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj35756_onTouchDown_runningActionsCount = obj35756_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj35756');
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
	  	containerNode = $('#obj35860');
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
    	window.obj35756_onTouchDown_runningActionsCount = window.obj35756_onTouchDown_runningActionsCount - 1;
if (window.obj35756_onTouchDown_runningActionsCount < 0) {
	window.obj35756_onTouchDown_runningActionsCount = 0;
} else if (window.obj35756_onTouchDown_runningActionsCount == 0) {
	obj35756_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj35856","#obj35858","#obj35854");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_35759 = false;
    	var dropped_id_35759;
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
					dropped_35759 = true;
					dropped_id_35759 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_35759) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj35756").trigger('SCActionDragDrop35759_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj35756_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35756_onTouchDown_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj35756 
move_92551();
function move_92551() {
	window.obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_runningActionsCount = obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj35756");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 398;
	var moveY = 565;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_runningActionsCount = window.obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj35756_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_35777();
function runjs_35777() {
	window.obj35756_droppedInsideTargetActions_3_runningActionsCount = obj35756_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35854").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj35756_droppedInsideTargetActions_3_runningActionsCount = window.obj35756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj35756_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_35778();
function runjs_35778() {
	window.obj35756_droppedInsideTargetActions_3_runningActionsCount = obj35756_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35854").css("border-color", "#C00000"); $("#obj35854").css("border-width", "2px"); $("#obj35854").css("border-style", "solid"); $("#obj35854").css("border-radius", "10px"); $("#obj35854").css("-webkit-border-radius", "10px"); $("#obj35854").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35756_droppedInsideTargetActions_3_runningActionsCount = window.obj35756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj35756_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_35779();
function switchText_35779() {
	window.obj35756_droppedInsideTargetActions_3_runningActionsCount = obj35756_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35800_content");
			setTimeout(function () {
				window.obj35756_droppedInsideTargetActions_3_runningActionsCount = window.obj35756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj35800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35756_droppedInsideTargetActions_3_runningActionsCount = window.obj35756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj35756_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj35756 
move_35780();
function move_35780() {
	window.obj35756_droppedInsideTargetActions_3_runningActionsCount = obj35756_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj35756");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 398;
	var moveY = 565;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj35756_droppedInsideTargetActions_3_runningActionsCount = window.obj35756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj35756_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_35781();
function runjs_35781() {
	window.obj35756_droppedInsideTargetActions_3_runningActionsCount = obj35756_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35854").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj35756_droppedInsideTargetActions_3_runningActionsCount = window.obj35756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj35756_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_35782();
function runjs_35782() {
	window.obj35756_droppedInsideTargetActions_3_runningActionsCount = obj35756_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35854").css("border-color", "#000000"); $("#obj35854").css("border-width", "1px"); $("#obj35854").css("border-style", "solid"); $("#obj35854").css("border-radius", "15px"); $("#obj35854").css("-webkit-border-radius", "15px"); $("#obj35854").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj35756_droppedInsideTargetActions_3_runningActionsCount = window.obj35756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj35756_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_35783();
function runjs_35783() {
	window.obj35756_droppedInsideTargetActions_3_runningActionsCount = obj35756_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35756").css("border-color", "rgba(0,0,0,0)"); $("#obj35756").css("border-width", "0px"); $("#obj35756").css("border-style", "solid"); $("#obj35756").css("border-radius", "20px"); $("#obj35756").css("-webkit-border-radius", "20px"); $("#obj35756").css("-moz-border-radius", "20px"); $("#obj35756_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj35756_droppedInsideTargetActions_3_runningActionsCount = window.obj35756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj35756_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_35784();
function switchText_35784() {
	window.obj35756_droppedInsideTargetActions_3_runningActionsCount = obj35756_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35800_content");
			setTimeout(function () {
				window.obj35756_droppedInsideTargetActions_3_runningActionsCount = window.obj35756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj35800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35756_droppedInsideTargetActions_3_runningActionsCount = window.obj35756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj35756_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj35799 
playAudio_35785();
function playAudio_35785() {
	window.obj35756_droppedInsideTargetActions_3_runningActionsCount = obj35756_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj35799")[0];
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
		    window.obj35756_droppedInsideTargetActions_3_runningActionsCount = window.obj35756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj35756_droppedInsideTargetActions_3_runningActionsCount = window.obj35756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj35756_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj35756_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_35767();
function runjs_35767() {
	window.obj35756_droppedInsideTargetActions_2_runningActionsCount = obj35756_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35858").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj35756_droppedInsideTargetActions_2_runningActionsCount = window.obj35756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj35756_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_35768();
function runjs_35768() {
	window.obj35756_droppedInsideTargetActions_2_runningActionsCount = obj35756_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35858").css("border-color", "#C00000"); $("#obj35858").css("border-width", "2px"); $("#obj35858").css("border-style", "solid"); $("#obj35858").css("border-radius", "10px"); $("#obj35858").css("-webkit-border-radius", "10px"); $("#obj35858").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35756_droppedInsideTargetActions_2_runningActionsCount = window.obj35756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj35756_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_35769();
function switchText_35769() {
	window.obj35756_droppedInsideTargetActions_2_runningActionsCount = obj35756_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35800_content");
			setTimeout(function () {
				window.obj35756_droppedInsideTargetActions_2_runningActionsCount = window.obj35756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj35800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35756_droppedInsideTargetActions_2_runningActionsCount = window.obj35756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj35756_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj35756 
move_35770();
function move_35770() {
	window.obj35756_droppedInsideTargetActions_2_runningActionsCount = obj35756_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj35756");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 398;
	var moveY = 565;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj35756_droppedInsideTargetActions_2_runningActionsCount = window.obj35756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj35756_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_35771();
function runjs_35771() {
	window.obj35756_droppedInsideTargetActions_2_runningActionsCount = obj35756_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35858").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj35756_droppedInsideTargetActions_2_runningActionsCount = window.obj35756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj35756_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_35772();
function runjs_35772() {
	window.obj35756_droppedInsideTargetActions_2_runningActionsCount = obj35756_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35858").css("border-color", "#000000"); $("#obj35858").css("border-width", "1px"); $("#obj35858").css("border-style", "solid"); $("#obj35858").css("border-radius", "15px"); $("#obj35858").css("-webkit-border-radius", "15px"); $("#obj35858").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj35756_droppedInsideTargetActions_2_runningActionsCount = window.obj35756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj35756_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_35773();
function runjs_35773() {
	window.obj35756_droppedInsideTargetActions_2_runningActionsCount = obj35756_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35756").css("border-color", "rgba(0,0,0,0)"); $("#obj35756").css("border-width", "0px"); $("#obj35756").css("border-style", "solid"); $("#obj35756").css("border-radius", "20px"); $("#obj35756").css("-webkit-border-radius", "20px"); $("#obj35756").css("-moz-border-radius", "20px"); $("#obj35756_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj35756_droppedInsideTargetActions_2_runningActionsCount = window.obj35756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj35756_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_35774();
function switchText_35774() {
	window.obj35756_droppedInsideTargetActions_2_runningActionsCount = obj35756_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35800_content");
			setTimeout(function () {
				window.obj35756_droppedInsideTargetActions_2_runningActionsCount = window.obj35756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj35800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35756_droppedInsideTargetActions_2_runningActionsCount = window.obj35756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj35756_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj35799 
playAudio_35775();
function playAudio_35775() {
	window.obj35756_droppedInsideTargetActions_2_runningActionsCount = obj35756_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj35799")[0];
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
		    window.obj35756_droppedInsideTargetActions_2_runningActionsCount = window.obj35756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj35756_droppedInsideTargetActions_2_runningActionsCount = window.obj35756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj35756_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj35756_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_35761();
function runjs_35761() {
	window.obj35756_droppedInsideTargetActions_runningActionsCount = obj35756_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj35856").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj35756_droppedInsideTargetActions_runningActionsCount = window.obj35756_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj35756_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_35764();
function switchText_35764() {
	window.obj35756_droppedInsideTargetActions_runningActionsCount = obj35756_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35800_content");
			setTimeout(function () {
				window.obj35756_droppedInsideTargetActions_runningActionsCount = window.obj35756_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj35800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35756_droppedInsideTargetActions_runningActionsCount = window.obj35756_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj35756_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_35762();
function runjs_35762() {
	window.obj35756_droppedInsideTargetActions_runningActionsCount = obj35756_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj35856").css("border-color", "#058E3F"); $("#obj35856").css("border-width", "2px"); $("#obj35856").css("border-style", "solid"); $("#obj35856").css("border-radius", "10px"); $("#obj35856").css("-webkit-border-radius", "10px"); $("#obj35856").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35756_droppedInsideTargetActions_runningActionsCount = window.obj35756_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj35756_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj35844 
hide_35763();
function hide_35763() {
	var selector = "#obj35844";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj35756_droppedInsideTargetActions_runningActionsCount = obj35756_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj35756_droppedInsideTargetActions_runningActionsCount = window.obj35756_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_35763(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj35756_droppedInsideTargetActions_runningActionsCount = window.obj35756_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj35756_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj35798 
playAudio_35765();
function playAudio_35765() {
	window.obj35756_droppedInsideTargetActions_runningActionsCount = obj35756_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj35798")[0];
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
		    window.obj35756_droppedInsideTargetActions_runningActionsCount = window.obj35756_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj35756_droppedInsideTargetActions_runningActionsCount = window.obj35756_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj35756_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90433();
function switchText_90433() {
	window.obj35756_droppedInsideTargetActions_runningActionsCount = obj35756_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35800_content");
			setTimeout(function () {
				window.obj35756_droppedInsideTargetActions_runningActionsCount = window.obj35756_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj35800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35756_droppedInsideTargetActions_runningActionsCount = window.obj35756_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35756_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35756_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35756_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35756_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj35756_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35756_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35756").trigger("obj35756_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35756) {
				console.warn("de-queueing event obj35756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35756_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj35716_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_onTouchDown_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj35716");
//	action: dragDrop
//	target: obj35716 
dragDrop_35719();
function dragDrop_35719() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj35716_onTouchDown_runningActionsCount = obj35716_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj35716');
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
	  	containerNode = $('#obj35860');
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
    	window.obj35716_onTouchDown_runningActionsCount = window.obj35716_onTouchDown_runningActionsCount - 1;
if (window.obj35716_onTouchDown_runningActionsCount < 0) {
	window.obj35716_onTouchDown_runningActionsCount = 0;
} else if (window.obj35716_onTouchDown_runningActionsCount == 0) {
	obj35716_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj35858","#obj35854","#obj35856");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_35719 = false;
    	var dropped_id_35719;
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
					dropped_35719 = true;
					dropped_id_35719 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_35719) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj35716").trigger('SCActionDragDrop35719_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj35716_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35716_onTouchDown_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj35716 
move_92549();
function move_92549() {
	window.obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_runningActionsCount = obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj35716");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 232;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_runningActionsCount = window.obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj35716_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_35737();
function runjs_35737() {
	window.obj35716_droppedInsideTargetActions_3_runningActionsCount = obj35716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35856").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj35716_droppedInsideTargetActions_3_runningActionsCount = window.obj35716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj35716_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_35738();
function runjs_35738() {
	window.obj35716_droppedInsideTargetActions_3_runningActionsCount = obj35716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35856").css("border-color", "#C00000"); $("#obj35856").css("border-width", "2px"); $("#obj35856").css("border-style", "solid"); $("#obj35856").css("border-radius", "10px"); $("#obj35856").css("-webkit-border-radius", "10px"); $("#obj35856").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35716_droppedInsideTargetActions_3_runningActionsCount = window.obj35716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj35716_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_35739();
function switchText_35739() {
	window.obj35716_droppedInsideTargetActions_3_runningActionsCount = obj35716_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35800_content");
			setTimeout(function () {
				window.obj35716_droppedInsideTargetActions_3_runningActionsCount = window.obj35716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj35800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35716_droppedInsideTargetActions_3_runningActionsCount = window.obj35716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj35716_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj35716 
move_35740();
function move_35740() {
	window.obj35716_droppedInsideTargetActions_3_runningActionsCount = obj35716_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj35716");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 232;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj35716_droppedInsideTargetActions_3_runningActionsCount = window.obj35716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj35716_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_35741();
function runjs_35741() {
	window.obj35716_droppedInsideTargetActions_3_runningActionsCount = obj35716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35856").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj35716_droppedInsideTargetActions_3_runningActionsCount = window.obj35716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj35716_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_35742();
function runjs_35742() {
	window.obj35716_droppedInsideTargetActions_3_runningActionsCount = obj35716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35856").css("border-color", "#000000"); $("#obj35856").css("border-width", "1px"); $("#obj35856").css("border-style", "solid"); $("#obj35856").css("border-radius", "15px"); $("#obj35856").css("-webkit-border-radius", "15px"); $("#obj35856").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj35716_droppedInsideTargetActions_3_runningActionsCount = window.obj35716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj35716_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_35743();
function runjs_35743() {
	window.obj35716_droppedInsideTargetActions_3_runningActionsCount = obj35716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35716").css("border-color", "rgba(0,0,0,0)"); $("#obj35716").css("border-width", "0px"); $("#obj35716").css("border-style", "solid"); $("#obj35716").css("border-radius", "20px"); $("#obj35716").css("-webkit-border-radius", "20px"); $("#obj35716").css("-moz-border-radius", "20px"); $("#obj35716_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj35716_droppedInsideTargetActions_3_runningActionsCount = window.obj35716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj35716_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_35744();
function switchText_35744() {
	window.obj35716_droppedInsideTargetActions_3_runningActionsCount = obj35716_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35800_content");
			setTimeout(function () {
				window.obj35716_droppedInsideTargetActions_3_runningActionsCount = window.obj35716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj35800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35716_droppedInsideTargetActions_3_runningActionsCount = window.obj35716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj35716_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj35799 
playAudio_35745();
function playAudio_35745() {
	window.obj35716_droppedInsideTargetActions_3_runningActionsCount = obj35716_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj35799")[0];
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
		    window.obj35716_droppedInsideTargetActions_3_runningActionsCount = window.obj35716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj35716_droppedInsideTargetActions_3_runningActionsCount = window.obj35716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj35716_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj35716_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_35727();
function runjs_35727() {
	window.obj35716_droppedInsideTargetActions_2_runningActionsCount = obj35716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35854").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj35716_droppedInsideTargetActions_2_runningActionsCount = window.obj35716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj35716_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_35728();
function runjs_35728() {
	window.obj35716_droppedInsideTargetActions_2_runningActionsCount = obj35716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35854").css("border-color", "#C00000"); $("#obj35854").css("border-width", "2px"); $("#obj35854").css("border-style", "solid"); $("#obj35854").css("border-radius", "10px"); $("#obj35854").css("-webkit-border-radius", "10px"); $("#obj35854").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35716_droppedInsideTargetActions_2_runningActionsCount = window.obj35716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj35716_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_35729();
function switchText_35729() {
	window.obj35716_droppedInsideTargetActions_2_runningActionsCount = obj35716_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35800_content");
			setTimeout(function () {
				window.obj35716_droppedInsideTargetActions_2_runningActionsCount = window.obj35716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj35800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35716_droppedInsideTargetActions_2_runningActionsCount = window.obj35716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj35716_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj35716 
move_35730();
function move_35730() {
	window.obj35716_droppedInsideTargetActions_2_runningActionsCount = obj35716_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj35716");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 232;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj35716_droppedInsideTargetActions_2_runningActionsCount = window.obj35716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj35716_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_35731();
function runjs_35731() {
	window.obj35716_droppedInsideTargetActions_2_runningActionsCount = obj35716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35854").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj35716_droppedInsideTargetActions_2_runningActionsCount = window.obj35716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj35716_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_35732();
function runjs_35732() {
	window.obj35716_droppedInsideTargetActions_2_runningActionsCount = obj35716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35854").css("border-color", "#000000"); $("#obj35854").css("border-width", "1px"); $("#obj35854").css("border-style", "solid"); $("#obj35854").css("border-radius", "15px"); $("#obj35854").css("-webkit-border-radius", "15px"); $("#obj35854").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj35716_droppedInsideTargetActions_2_runningActionsCount = window.obj35716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj35716_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_35733();
function runjs_35733() {
	window.obj35716_droppedInsideTargetActions_2_runningActionsCount = obj35716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35716").css("border-color", "rgba(0,0,0,0)"); $("#obj35716").css("border-width", "0px"); $("#obj35716").css("border-style", "solid"); $("#obj35716").css("border-radius", "20px"); $("#obj35716").css("-webkit-border-radius", "20px"); $("#obj35716").css("-moz-border-radius", "20px"); $("#obj35716_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj35716_droppedInsideTargetActions_2_runningActionsCount = window.obj35716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj35716_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_35734();
function switchText_35734() {
	window.obj35716_droppedInsideTargetActions_2_runningActionsCount = obj35716_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35800_content");
			setTimeout(function () {
				window.obj35716_droppedInsideTargetActions_2_runningActionsCount = window.obj35716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj35800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35716_droppedInsideTargetActions_2_runningActionsCount = window.obj35716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj35716_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj35799 
playAudio_35735();
function playAudio_35735() {
	window.obj35716_droppedInsideTargetActions_2_runningActionsCount = obj35716_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj35799")[0];
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
		    window.obj35716_droppedInsideTargetActions_2_runningActionsCount = window.obj35716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj35716_droppedInsideTargetActions_2_runningActionsCount = window.obj35716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj35716_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj35716_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_35721();
function runjs_35721() {
	window.obj35716_droppedInsideTargetActions_runningActionsCount = obj35716_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj35858").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj35716_droppedInsideTargetActions_runningActionsCount = window.obj35716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj35716_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_35724();
function switchText_35724() {
	window.obj35716_droppedInsideTargetActions_runningActionsCount = obj35716_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35800_content");
			setTimeout(function () {
				window.obj35716_droppedInsideTargetActions_runningActionsCount = window.obj35716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj35800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35716_droppedInsideTargetActions_runningActionsCount = window.obj35716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj35716_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_35722();
function runjs_35722() {
	window.obj35716_droppedInsideTargetActions_runningActionsCount = obj35716_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj35858").css("border-color", "#058E3F"); $("#obj35858").css("border-width", "2px"); $("#obj35858").css("border-style", "solid"); $("#obj35858").css("border-radius", "10px"); $("#obj35858").css("-webkit-border-radius", "10px"); $("#obj35858").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35716_droppedInsideTargetActions_runningActionsCount = window.obj35716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj35716_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj35846 
hide_35723();
function hide_35723() {
	var selector = "#obj35846";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj35716_droppedInsideTargetActions_runningActionsCount = obj35716_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj35716_droppedInsideTargetActions_runningActionsCount = window.obj35716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_35723(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj35716_droppedInsideTargetActions_runningActionsCount = window.obj35716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj35716_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj35798 
playAudio_35725();
function playAudio_35725() {
	window.obj35716_droppedInsideTargetActions_runningActionsCount = obj35716_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj35798")[0];
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
		    window.obj35716_droppedInsideTargetActions_runningActionsCount = window.obj35716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj35716_droppedInsideTargetActions_runningActionsCount = window.obj35716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj35716_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90432();
function switchText_90432() {
	window.obj35716_droppedInsideTargetActions_runningActionsCount = obj35716_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35800_content");
			setTimeout(function () {
				window.obj35716_droppedInsideTargetActions_runningActionsCount = window.obj35716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj35800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35716_droppedInsideTargetActions_runningActionsCount = window.obj35716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35716_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj35716_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35716").trigger("obj35716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35716) {
				console.warn("de-queueing event obj35716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35716_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj66974_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj66974_onTap_activeActionGroupIndex = -1;
		$("#obj66974").trigger("obj66974_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66974) {
				console.warn("de-queueing event obj66974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66974_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj66974 
hide_66977();
function hide_66977() {
	var selector = "#obj66974";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj66974_onTap_runningActionsCount = obj66974_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj66974_onTap_runningActionsCount = window.obj66974_onTap_runningActionsCount - 1;
if (window.obj66974_onTap_runningActionsCount < 0) {
	window.obj66974_onTap_runningActionsCount = 0;
} else if (window.obj66974_onTap_runningActionsCount == 0) {
	obj66974_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_66977(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj66974_onTap_runningActionsCount = window.obj66974_onTap_runningActionsCount - 1;
if (window.obj66974_onTap_runningActionsCount < 0) {
	window.obj66974_onTap_runningActionsCount = 0;
} else if (window.obj66974_onTap_runningActionsCount == 0) {
	obj66974_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj66980 
stopMovie_66976();
function stopMovie_66976() {
	window.obj66974_onTap_runningActionsCount = obj66974_onTap_runningActionsCount + 1;
	var myVideo = $("#obj66980")[0];
	myVideo.pause();
	window.obj66974_onTap_runningActionsCount = window.obj66974_onTap_runningActionsCount - 1;
if (window.obj66974_onTap_runningActionsCount < 0) {
	window.obj66974_onTap_runningActionsCount = 0;
} else if (window.obj66974_onTap_runningActionsCount == 0) {
	obj66974_onTap_actionGroup1();
}
}
















};
obj66974_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj66974_onTap_activeActionGroupIndex = -1;
		$("#obj66974").trigger("obj66974_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66974) {
				console.warn("de-queueing event obj66974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66974_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj66966
(function(){
	window.obj66974_onTap_runningActionsCount = obj66974_onTap_runningActionsCount + 1;

	var selector = "#obj66966";
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
					window.obj66974_onTap_runningActionsCount = window.obj66974_onTap_runningActionsCount - 1;
if (window.obj66974_onTap_runningActionsCount < 0) {
	window.obj66974_onTap_runningActionsCount = 0;
} else if (window.obj66974_onTap_runningActionsCount == 0) {
	obj66974_onTap_actionGroup2();
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
				window.obj66974_onTap_runningActionsCount = window.obj66974_onTap_runningActionsCount - 1;
if (window.obj66974_onTap_runningActionsCount < 0) {
	window.obj66974_onTap_runningActionsCount = 0;
} else if (window.obj66974_onTap_runningActionsCount == 0) {
	obj66974_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj66974_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj66974_onTap_activeActionGroupIndex = -1;
		$("#obj66974").trigger("obj66974_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66974) {
				console.warn("de-queueing event obj66974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66974_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj66980 
move_66979();
function move_66979() {
	window.obj66974_onTap_runningActionsCount = obj66974_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj66980");
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
			window.obj66974_onTap_runningActionsCount = window.obj66974_onTap_runningActionsCount - 1;
if (window.obj66974_onTap_runningActionsCount < 0) {
	window.obj66974_onTap_runningActionsCount = 0;
} else if (window.obj66974_onTap_runningActionsCount == 0) {
	obj66974_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj66974_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj66974_onTap_activeActionGroupIndex = -1;
		$("#obj66974").trigger("obj66974_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66974) {
				console.warn("de-queueing event obj66974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66974_onTap_activeActionGroupIndex = 3;
	





















};
obj66966_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj66966_onTap_activeActionGroupIndex = -1;
		$("#obj66966").trigger("obj66966_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66966) {
				console.warn("de-queueing event obj66966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66966_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj66966 
hide_66969();
function hide_66969() {
	var selector = "#obj66966";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj66966_onTap_runningActionsCount = obj66966_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj66966_onTap_runningActionsCount = window.obj66966_onTap_runningActionsCount - 1;
if (window.obj66966_onTap_runningActionsCount < 0) {
	window.obj66966_onTap_runningActionsCount = 0;
} else if (window.obj66966_onTap_runningActionsCount == 0) {
	obj66966_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_66969(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj66966_onTap_runningActionsCount = window.obj66966_onTap_runningActionsCount - 1;
if (window.obj66966_onTap_runningActionsCount < 0) {
	window.obj66966_onTap_runningActionsCount = 0;
} else if (window.obj66966_onTap_runningActionsCount == 0) {
	obj66966_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj66980 
playPauseMovie_66968();
function playPauseMovie_66968() {
	window.obj66966_onTap_runningActionsCount = obj66966_onTap_runningActionsCount + 1;
	var myVideo = $("#obj66980")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj66966_onTap_runningActionsCount = window.obj66966_onTap_runningActionsCount - 1;
if (window.obj66966_onTap_runningActionsCount < 0) {
	window.obj66966_onTap_runningActionsCount = 0;
} else if (window.obj66966_onTap_runningActionsCount == 0) {
	obj66966_onTap_actionGroup1();
}
}

















};
obj66966_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj66966_onTap_activeActionGroupIndex = -1;
		$("#obj66966").trigger("obj66966_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66966) {
				console.warn("de-queueing event obj66966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66966_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj66974
(function(){
	window.obj66966_onTap_runningActionsCount = obj66966_onTap_runningActionsCount + 1;

	var selector = "#obj66974";
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
					window.obj66966_onTap_runningActionsCount = window.obj66966_onTap_runningActionsCount - 1;
if (window.obj66966_onTap_runningActionsCount < 0) {
	window.obj66966_onTap_runningActionsCount = 0;
} else if (window.obj66966_onTap_runningActionsCount == 0) {
	obj66966_onTap_actionGroup2();
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
				window.obj66966_onTap_runningActionsCount = window.obj66966_onTap_runningActionsCount - 1;
if (window.obj66966_onTap_runningActionsCount < 0) {
	window.obj66966_onTap_runningActionsCount = 0;
} else if (window.obj66966_onTap_runningActionsCount == 0) {
	obj66966_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj66966_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj66966_onTap_activeActionGroupIndex = -1;
		$("#obj66966").trigger("obj66966_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66966) {
				console.warn("de-queueing event obj66966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66966_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj66980 
move_66971();
function move_66971() {
	window.obj66966_onTap_runningActionsCount = obj66966_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj66980");
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
			window.obj66966_onTap_runningActionsCount = window.obj66966_onTap_runningActionsCount - 1;
if (window.obj66966_onTap_runningActionsCount < 0) {
	window.obj66966_onTap_runningActionsCount = 0;
} else if (window.obj66966_onTap_runningActionsCount == 0) {
	obj66966_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj66966_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj66966_onTap_activeActionGroupIndex = -1;
		$("#obj66966").trigger("obj66966_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66966) {
				console.warn("de-queueing event obj66966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66966_onTap_activeActionGroupIndex = 3;
	





















};
obj88345_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88345_onTap_activeActionGroupIndex = -1;
		$("#obj88345").trigger("obj88345_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88345) {
				console.warn("de-queueing event obj88345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88345_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88350 
stopAudio_88347();
function stopAudio_88347() {
	window.obj88345_onTap_runningActionsCount = obj88345_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88350")[0];
	myAudio.pause();
	window.obj88345_onTap_runningActionsCount = window.obj88345_onTap_runningActionsCount - 1;
if (window.obj88345_onTap_runningActionsCount < 0) {
	window.obj88345_onTap_runningActionsCount = 0;
} else if (window.obj88345_onTap_runningActionsCount == 0) {
	obj88345_onTap_actionGroup1();
}
}








};
obj88345_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88345_onTap_activeActionGroupIndex = -1;
		$("#obj88345").trigger("obj88345_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88345) {
				console.warn("de-queueing event obj88345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88345_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88345 
hide_88348();
function hide_88348() {
	var selector = "#obj88345";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88345_onTap_runningActionsCount = obj88345_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88345_onTap_runningActionsCount = window.obj88345_onTap_runningActionsCount - 1;
if (window.obj88345_onTap_runningActionsCount < 0) {
	window.obj88345_onTap_runningActionsCount = 0;
} else if (window.obj88345_onTap_runningActionsCount == 0) {
	obj88345_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88348(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88345_onTap_runningActionsCount = window.obj88345_onTap_runningActionsCount - 1;
if (window.obj88345_onTap_runningActionsCount < 0) {
	window.obj88345_onTap_runningActionsCount = 0;
} else if (window.obj88345_onTap_runningActionsCount == 0) {
	obj88345_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88345_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88345_onTap_activeActionGroupIndex = -1;
		$("#obj88345").trigger("obj88345_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88345) {
				console.warn("de-queueing event obj88345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88345_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88340
(function(){
	window.obj88345_onTap_runningActionsCount = obj88345_onTap_runningActionsCount + 1;

	var selector = "#obj88340";
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
					window.obj88345_onTap_runningActionsCount = window.obj88345_onTap_runningActionsCount - 1;
if (window.obj88345_onTap_runningActionsCount < 0) {
	window.obj88345_onTap_runningActionsCount = 0;
} else if (window.obj88345_onTap_runningActionsCount == 0) {
	obj88345_onTap_actionGroup3();
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
				window.obj88345_onTap_runningActionsCount = window.obj88345_onTap_runningActionsCount - 1;
if (window.obj88345_onTap_runningActionsCount < 0) {
	window.obj88345_onTap_runningActionsCount = 0;
} else if (window.obj88345_onTap_runningActionsCount == 0) {
	obj88345_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88345_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88345_onTap_activeActionGroupIndex = -1;
		$("#obj88345").trigger("obj88345_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88345) {
				console.warn("de-queueing event obj88345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88345_onTap_activeActionGroupIndex = 3;
	





















};
obj88340_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88340_onTap_activeActionGroupIndex = -1;
		$("#obj88340").trigger("obj88340_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88340) {
				console.warn("de-queueing event obj88340." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88340").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88340_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88340 
hide_88342();
function hide_88342() {
	var selector = "#obj88340";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88340_onTap_runningActionsCount = obj88340_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88340_onTap_runningActionsCount = window.obj88340_onTap_runningActionsCount - 1;
if (window.obj88340_onTap_runningActionsCount < 0) {
	window.obj88340_onTap_runningActionsCount = 0;
} else if (window.obj88340_onTap_runningActionsCount == 0) {
	obj88340_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88342(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88340_onTap_runningActionsCount = window.obj88340_onTap_runningActionsCount - 1;
if (window.obj88340_onTap_runningActionsCount < 0) {
	window.obj88340_onTap_runningActionsCount = 0;
} else if (window.obj88340_onTap_runningActionsCount == 0) {
	obj88340_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88340_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88340_onTap_activeActionGroupIndex = -1;
		$("#obj88340").trigger("obj88340_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88340) {
				console.warn("de-queueing event obj88340." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88340").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88340_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88345
(function(){
	window.obj88340_onTap_runningActionsCount = obj88340_onTap_runningActionsCount + 1;

	var selector = "#obj88345";
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
					window.obj88340_onTap_runningActionsCount = window.obj88340_onTap_runningActionsCount - 1;
if (window.obj88340_onTap_runningActionsCount < 0) {
	window.obj88340_onTap_runningActionsCount = 0;
} else if (window.obj88340_onTap_runningActionsCount == 0) {
	obj88340_onTap_actionGroup2();
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
				window.obj88340_onTap_runningActionsCount = window.obj88340_onTap_runningActionsCount - 1;
if (window.obj88340_onTap_runningActionsCount < 0) {
	window.obj88340_onTap_runningActionsCount = 0;
} else if (window.obj88340_onTap_runningActionsCount == 0) {
	obj88340_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88340_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88340_onTap_activeActionGroupIndex = -1;
		$("#obj88340").trigger("obj88340_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88340) {
				console.warn("de-queueing event obj88340." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88340").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88340_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88350 
playAudio_88344();
function playAudio_88344() {
	window.obj88340_onTap_runningActionsCount = obj88340_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88350")[0];
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
		    window.obj88340_onTap_runningActionsCount = window.obj88340_onTap_runningActionsCount - 1;
if (window.obj88340_onTap_runningActionsCount < 0) {
	window.obj88340_onTap_runningActionsCount = 0;
} else if (window.obj88340_onTap_runningActionsCount == 0) {
	obj88340_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88340_onTap_runningActionsCount = window.obj88340_onTap_runningActionsCount - 1;
if (window.obj88340_onTap_runningActionsCount < 0) {
	window.obj88340_onTap_runningActionsCount = 0;
} else if (window.obj88340_onTap_runningActionsCount == 0) {
	obj88340_onTap_actionGroup3();
}
	}
}









};
obj88340_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88340_onTap_activeActionGroupIndex = -1;
		$("#obj88340").trigger("obj88340_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88340) {
				console.warn("de-queueing event obj88340." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88340").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88340_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj35877: Event Touch Down
 *
 */
$("#obj35877").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj35877_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35877_onTap is still running");
	return;
}
var obj35877_onTap_runningActionsCount = 0;
var obj35877_onTap_loopCount = 0;
obj35877_onTap_actionGroup0();
});










/*
 *
 *   obj35874: Event Touch Down
 *
 */
$("#obj35874").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj35874_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35874_onTap is still running");
	return;
}
var obj35874_onTap_runningActionsCount = 0;
var obj35874_onTap_loopCount = 0;
obj35874_onTap_actionGroup0();
});










/*
 *
 *   obj35870: Event Touch Down
 *
 */
$("#obj35870").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj35870_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35870_onTap is still running");
	return;
}
var obj35870_onTap_runningActionsCount = 0;
var obj35870_onTap_loopCount = 0;
obj35870_onTap_actionGroup0();
});

































































































































































/*
 *
 *   obj35802: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj35802");
	var winTarget = document.getElementById("obj35802");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj35802").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj35802_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj35802_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj35802_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35802_onTouchDown is still running");
	return;
}
var obj35802_onTouchDown_runningActionsCount = 0;
var obj35802_onTouchDown_loopCount = 0;
obj35802_onTouchDown_actionGroup0();
});



/*
 *
 *   obj35802: Event SCActionDragDrop35805_droppedOutsideTargetActions
 *
 */
$("#obj35802").bind("SCActionDragDrop35805_droppedOutsideTargetActions", function(event) {
	if (window.obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35802_SCActionDragDrop35805_droppedOutsideTargetActions is still running");
	return;
}
var obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_runningActionsCount = 0;
var obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_loopCount = 0;
obj35802_SCActionDragDrop35805_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj35802: Event droppedInsideTargetActions_3
 *
 */
$("#obj35802").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj35802_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35802_droppedInsideTargetActions_3 is still running");
	return;
}
var obj35802_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj35802_droppedInsideTargetActions_3_loopCount = 0;
obj35802_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj35802: Event droppedInsideTargetActions_2
 *
 */
$("#obj35802").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj35802_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35802_droppedInsideTargetActions_2 is still running");
	return;
}
var obj35802_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj35802_droppedInsideTargetActions_2_loopCount = 0;
obj35802_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj35802: Event droppedInsideTargetActions
 *
 */
$("#obj35802").bind("droppedInsideTargetActions", function(event) {
	if (window.obj35802_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35802_droppedInsideTargetActions is still running");
	return;
}
var obj35802_droppedInsideTargetActions_runningActionsCount = 0;
var obj35802_droppedInsideTargetActions_loopCount = 0;
obj35802_droppedInsideTargetActions_actionGroup0();
});




































/*
 *
 *   obj35756: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj35756");
	var winTarget = document.getElementById("obj35756");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj35756").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj35756_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj35756_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj35756_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35756_onTouchDown is still running");
	return;
}
var obj35756_onTouchDown_runningActionsCount = 0;
var obj35756_onTouchDown_loopCount = 0;
obj35756_onTouchDown_actionGroup0();
});



/*
 *
 *   obj35756: Event SCActionDragDrop35759_droppedOutsideTargetActions
 *
 */
$("#obj35756").bind("SCActionDragDrop35759_droppedOutsideTargetActions", function(event) {
	if (window.obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35756_SCActionDragDrop35759_droppedOutsideTargetActions is still running");
	return;
}
var obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_runningActionsCount = 0;
var obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_loopCount = 0;
obj35756_SCActionDragDrop35759_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj35756: Event droppedInsideTargetActions_3
 *
 */
$("#obj35756").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj35756_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35756_droppedInsideTargetActions_3 is still running");
	return;
}
var obj35756_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj35756_droppedInsideTargetActions_3_loopCount = 0;
obj35756_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj35756: Event droppedInsideTargetActions_2
 *
 */
$("#obj35756").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj35756_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35756_droppedInsideTargetActions_2 is still running");
	return;
}
var obj35756_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj35756_droppedInsideTargetActions_2_loopCount = 0;
obj35756_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj35756: Event droppedInsideTargetActions
 *
 */
$("#obj35756").bind("droppedInsideTargetActions", function(event) {
	if (window.obj35756_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35756_droppedInsideTargetActions is still running");
	return;
}
var obj35756_droppedInsideTargetActions_runningActionsCount = 0;
var obj35756_droppedInsideTargetActions_loopCount = 0;
obj35756_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj35716: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj35716");
	var winTarget = document.getElementById("obj35716");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj35716").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj35716_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj35716_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj35716_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35716_onTouchDown is still running");
	return;
}
var obj35716_onTouchDown_runningActionsCount = 0;
var obj35716_onTouchDown_loopCount = 0;
obj35716_onTouchDown_actionGroup0();
});



/*
 *
 *   obj35716: Event SCActionDragDrop35719_droppedOutsideTargetActions
 *
 */
$("#obj35716").bind("SCActionDragDrop35719_droppedOutsideTargetActions", function(event) {
	if (window.obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35716_SCActionDragDrop35719_droppedOutsideTargetActions is still running");
	return;
}
var obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_runningActionsCount = 0;
var obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_loopCount = 0;
obj35716_SCActionDragDrop35719_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj35716: Event droppedInsideTargetActions_3
 *
 */
$("#obj35716").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj35716_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35716_droppedInsideTargetActions_3 is still running");
	return;
}
var obj35716_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj35716_droppedInsideTargetActions_3_loopCount = 0;
obj35716_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj35716: Event droppedInsideTargetActions_2
 *
 */
$("#obj35716").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj35716_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35716_droppedInsideTargetActions_2 is still running");
	return;
}
var obj35716_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj35716_droppedInsideTargetActions_2_loopCount = 0;
obj35716_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj35716: Event droppedInsideTargetActions
 *
 */
$("#obj35716").bind("droppedInsideTargetActions", function(event) {
	if (window.obj35716_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35716_droppedInsideTargetActions is still running");
	return;
}
var obj35716_droppedInsideTargetActions_runningActionsCount = 0;
var obj35716_droppedInsideTargetActions_loopCount = 0;
obj35716_droppedInsideTargetActions_actionGroup0();
});

























/*
 *
 *   obj66974: Event Touch Down
 *
 */
$("#obj66974").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj66974_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj66974_onTap is still running");
	return;
}
var obj66974_onTap_runningActionsCount = 0;
var obj66974_onTap_loopCount = 0;
obj66974_onTap_actionGroup0();
});










/*
 *
 *   obj66966: Event Touch Down
 *
 */
$("#obj66966").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj66966_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj66966_onTap is still running");
	return;
}
var obj66966_onTap_runningActionsCount = 0;
var obj66966_onTap_loopCount = 0;
obj66966_onTap_actionGroup0();
});










/*
 *
 *   obj88345: Event Touch Down
 *
 */
$("#obj88345").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88345_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88345_onTap is still running");
	return;
}
var obj88345_onTap_runningActionsCount = 0;
var obj88345_onTap_loopCount = 0;
obj88345_onTap_actionGroup0();
});










/*
 *
 *   obj88340: Event Touch Down
 *
 */
$("#obj88340").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88340_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88340_onTap is still running");
	return;
}
var obj88340_onTap_runningActionsCount = 0;
var obj88340_onTap_loopCount = 0;
obj88340_onTap_actionGroup0();
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
	
$("#obj35893").trigger('SCEventShow');
$("#obj35877").trigger('SCEventShow');
$("#obj35874").trigger('SCEventShow');
$("#obj35870").trigger('SCEventShow');
$("#obj35868").trigger('SCEventShow');
$("#obj35866").trigger('SCEventShow');
$("#obj35796").trigger('SCEventShow');
$("#obj35864").trigger('SCEventShow');
$("#obj35862").trigger('SCEventShow');
$("#obj35860").trigger('SCEventShow');
$("#obj35858").trigger('SCEventShow');
$("#obj35856").trigger('SCEventShow');
$("#obj35854").trigger('SCEventShow');
$("#obj35852").trigger('SCEventShow');
$("#obj35850").trigger('SCEventShow');
$("#obj35848").trigger('SCEventShow');
$("#obj35846").trigger('SCEventShow');
$("#obj35844").trigger('SCEventShow');
$("#obj35842").trigger('SCEventShow');
$("#obj35802").trigger('SCEventShow');
$("#obj35800").trigger('SCEventShow');
$("#obj35799").trigger('SCEventShow');
$("#obj35798").trigger('SCEventShow');
$("#obj35756").trigger('SCEventShow');
$("#obj35716").trigger('SCEventShow');
$("#obj35714").trigger('SCEventShow');
$("#obj35712").trigger('SCEventShow');
$("#obj66974").trigger('SCEventShow');
$("#obj66966").trigger('SCEventShow');
$("#obj88345").trigger('SCEventShow');
$("#obj88340").trigger('SCEventShow');
$("#obj88350").trigger('SCEventShow');
$("#obj94875").trigger('SCEventShow');
$("#obj66980").trigger('SCEventShow');
	
});