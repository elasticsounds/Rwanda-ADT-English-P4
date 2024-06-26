pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 25362;
pubcoder.page.title = pubcoder.page.title || "99";
pubcoder.page.number = pubcoder.page.number || 99;
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
var obj80639_onTap_activeActionGroupIndex = -1;
var obj80639_onTap_runningActionsCount = 0;
var obj80639_onTap_loopCount = 0;
var obj80636_onTap_activeActionGroupIndex = -1;
var obj80636_onTap_runningActionsCount = 0;
var obj80636_onTap_loopCount = 0;
var obj80632_onTap_activeActionGroupIndex = -1;
var obj80632_onTap_runningActionsCount = 0;
var obj80632_onTap_loopCount = 0;
var obj80559_onDrag_activeActionGroupIndex = -1;
var obj80559_onDrag_runningActionsCount = 0;
var obj80559_onDrag_loopCount = 0;
var obj80559_onTouchDown_activeActionGroupIndex = -1;
var obj80559_onTouchDown_runningActionsCount = 0;
var obj80559_onTouchDown_loopCount = 0;
var obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_loopCount = 0;
var obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj80559_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj80559_droppedInsideTargetActions_3_loopCount = 0;
var obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj80559_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj80559_droppedInsideTargetActions_2_loopCount = 0;
var obj80559_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj80559_droppedInsideTargetActions_runningActionsCount = 0;
var obj80559_droppedInsideTargetActions_loopCount = 0;
var obj80520_onDrag_activeActionGroupIndex = -1;
var obj80520_onDrag_runningActionsCount = 0;
var obj80520_onDrag_loopCount = 0;
var obj80520_onTouchDown_activeActionGroupIndex = -1;
var obj80520_onTouchDown_runningActionsCount = 0;
var obj80520_onTouchDown_loopCount = 0;
var obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_loopCount = 0;
var obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj80520_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj80520_droppedInsideTargetActions_3_loopCount = 0;
var obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj80520_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj80520_droppedInsideTargetActions_2_loopCount = 0;
var obj80520_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj80520_droppedInsideTargetActions_runningActionsCount = 0;
var obj80520_droppedInsideTargetActions_loopCount = 0;
var obj80481_onDrag_activeActionGroupIndex = -1;
var obj80481_onDrag_runningActionsCount = 0;
var obj80481_onDrag_loopCount = 0;
var obj80481_onTouchDown_activeActionGroupIndex = -1;
var obj80481_onTouchDown_runningActionsCount = 0;
var obj80481_onTouchDown_loopCount = 0;
var obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_loopCount = 0;
var obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj80481_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj80481_droppedInsideTargetActions_3_loopCount = 0;
var obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj80481_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj80481_droppedInsideTargetActions_2_loopCount = 0;
var obj80481_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj80481_droppedInsideTargetActions_runningActionsCount = 0;
var obj80481_droppedInsideTargetActions_loopCount = 0;
var obj80463_onTap_activeActionGroupIndex = -1;
var obj80463_onTap_runningActionsCount = 0;
var obj80463_onTap_loopCount = 0;
var obj80455_onTap_activeActionGroupIndex = -1;
var obj80455_onTap_runningActionsCount = 0;
var obj80455_onTap_loopCount = 0;
var obj88057_onTap_activeActionGroupIndex = -1;
var obj88057_onTap_runningActionsCount = 0;
var obj88057_onTap_loopCount = 0;
var obj88052_onTap_activeActionGroupIndex = -1;
var obj88052_onTap_runningActionsCount = 0;
var obj88052_onTap_loopCount = 0;
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
		
obj80639_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80639_onTap_activeActionGroupIndex = -1;
		$("#obj80639").trigger("obj80639_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80639) {
				console.warn("de-queueing event obj80639." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80639").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80639_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_80641();
function goToPage_80641() {
	window.obj80639_onTap_runningActionsCount = obj80639_onTap_runningActionsCount + 1;
	$("#anchor585")[0].click();
	window.obj80639_onTap_runningActionsCount = window.obj80639_onTap_runningActionsCount - 1;
if (window.obj80639_onTap_runningActionsCount < 0) {
	window.obj80639_onTap_runningActionsCount = 0;
} else if (window.obj80639_onTap_runningActionsCount == 0) {
	obj80639_onTap_actionGroup1();
}
}





















};
obj80639_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80639_onTap_activeActionGroupIndex = -1;
		$("#obj80639").trigger("obj80639_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80639) {
				console.warn("de-queueing event obj80639." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80639").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80639_onTap_activeActionGroupIndex = 1;
	





















};
obj80636_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80636_onTap_activeActionGroupIndex = -1;
		$("#obj80636").trigger("obj80636_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80636) {
				console.warn("de-queueing event obj80636." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80636").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80636_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_80638();
function goToPage_80638() {
	window.obj80636_onTap_runningActionsCount = obj80636_onTap_runningActionsCount + 1;
	$("#anchor586")[0].click();
	window.obj80636_onTap_runningActionsCount = window.obj80636_onTap_runningActionsCount - 1;
if (window.obj80636_onTap_runningActionsCount < 0) {
	window.obj80636_onTap_runningActionsCount = 0;
} else if (window.obj80636_onTap_runningActionsCount == 0) {
	obj80636_onTap_actionGroup1();
}
}





















};
obj80636_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80636_onTap_activeActionGroupIndex = -1;
		$("#obj80636").trigger("obj80636_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80636) {
				console.warn("de-queueing event obj80636." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80636").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80636_onTap_activeActionGroupIndex = 1;
	





















};
obj80632_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80632_onTap_activeActionGroupIndex = -1;
		$("#obj80632").trigger("obj80632_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80632) {
				console.warn("de-queueing event obj80632." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80632").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80632_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_80634();
function goToPage_80634() {
	window.obj80632_onTap_runningActionsCount = obj80632_onTap_runningActionsCount + 1;
	$("#anchor587")[0].click();
	window.obj80632_onTap_runningActionsCount = window.obj80632_onTap_runningActionsCount - 1;
if (window.obj80632_onTap_runningActionsCount < 0) {
	window.obj80632_onTap_runningActionsCount = 0;
} else if (window.obj80632_onTap_runningActionsCount == 0) {
	obj80632_onTap_actionGroup1();
}
}





















};
obj80632_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80632_onTap_activeActionGroupIndex = -1;
		$("#obj80632").trigger("obj80632_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80632) {
				console.warn("de-queueing event obj80632." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80632").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80632_onTap_activeActionGroupIndex = 1;
	





















};
obj80559_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj80559");
//	action: dragDrop
//	target: obj80559 
dragDrop_80562();
function dragDrop_80562() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj80559_onTouchDown_runningActionsCount = obj80559_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj80559');
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
	  	containerNode = $('#obj80622');
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
    	window.obj80559_onTouchDown_runningActionsCount = window.obj80559_onTouchDown_runningActionsCount - 1;
if (window.obj80559_onTouchDown_runningActionsCount < 0) {
	window.obj80559_onTouchDown_runningActionsCount = 0;
} else if (window.obj80559_onTouchDown_runningActionsCount == 0) {
	obj80559_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj80612","#obj80614","#obj80610");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_80562 = false;
    	var dropped_id_80562;
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
					dropped_80562 = true;
					dropped_id_80562 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_80562) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj80559").trigger('SCActionDragDrop80562_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj80559_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80559_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj80559 
move_92415();
function move_92415() {
	window.obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_runningActionsCount = obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj80559");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 379;
	var moveY = 610;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_runningActionsCount = window.obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj80559_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80585();
function runjs_80585() {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = obj80559_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80610").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80559_droppedInsideTargetActions_3_runningActionsCount = window.obj80559_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj80559_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_80586();
function runjs_80586() {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = obj80559_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80610").css("border-color", "#C00000"); $("#obj80610").css("border-width", "2px"); $("#obj80610").css("border-style", "solid"); $("#obj80610").css("border-radius", "10px"); $("#obj80610").css("-webkit-border-radius", "10px"); $("#obj80610").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80559_droppedInsideTargetActions_3_runningActionsCount = window.obj80559_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj80559_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj80604 
hide_80587();
function hide_80587() {
	var selector = "#obj80604";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = obj80559_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80559_droppedInsideTargetActions_3_runningActionsCount = window.obj80559_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80587(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80559_droppedInsideTargetActions_3_runningActionsCount = window.obj80559_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80559_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80588();
function runjs_80588() {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = obj80559_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80559").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80559_droppedInsideTargetActions_3_runningActionsCount = window.obj80559_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj80559_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80589();
function switchText_80589() {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = obj80559_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80600_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80600_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80600").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80600_content");
			setTimeout(function () {
				window.obj80559_droppedInsideTargetActions_3_runningActionsCount = window.obj80559_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj80600 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80559_droppedInsideTargetActions_3_runningActionsCount = window.obj80559_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj80559_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80559 
move_80590();
function move_80590() {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = obj80559_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj80559");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 379;
	var moveY = 610;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80559_droppedInsideTargetActions_3_runningActionsCount = window.obj80559_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj80559_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80591();
function runjs_80591() {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = obj80559_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80610").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj80559_droppedInsideTargetActions_3_runningActionsCount = window.obj80559_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj80559_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_80592();
function runjs_80592() {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = obj80559_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80610").css("border-color", "#000000"); $("#obj80610").css("border-width", "1px"); $("#obj80610").css("border-style", "solid"); $("#obj80610").css("border-radius", "10px"); $("#obj80610").css("-webkit-border-radius", "10px"); $("#obj80610").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80559_droppedInsideTargetActions_3_runningActionsCount = window.obj80559_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj80559_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj80604
(function(){
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = obj80559_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj80604";
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
					window.obj80559_droppedInsideTargetActions_3_runningActionsCount = window.obj80559_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj80559_droppedInsideTargetActions_3_runningActionsCount = window.obj80559_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80559_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80594();
function runjs_80594() {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = obj80559_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80559").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80559_droppedInsideTargetActions_3_runningActionsCount = window.obj80559_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj80559_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80595();
function runjs_80595() {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = obj80559_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80559").css("border-color", "rgba(0,0,0,0)"); $("#obj80559").css("border-width", "0px"); $("#obj80559").css("border-style", "solid"); $("#obj80559").css("border-radius", "10px"); $("#obj80559").css("-webkit-border-radius", "10px"); $("#obj80559").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80559_droppedInsideTargetActions_3_runningActionsCount = window.obj80559_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj80559_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj80599 
playAudio_80596();
function playAudio_80596() {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = obj80559_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj80599")[0];
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
		    window.obj80559_droppedInsideTargetActions_3_runningActionsCount = window.obj80559_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80559_droppedInsideTargetActions_3_runningActionsCount = window.obj80559_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj80559_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80597();
function switchText_80597() {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = obj80559_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80600_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80600_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80600").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80600_content");
			setTimeout(function () {
				window.obj80559_droppedInsideTargetActions_3_runningActionsCount = window.obj80559_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj80600 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80559_droppedInsideTargetActions_3_runningActionsCount = window.obj80559_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj80559_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj80559_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80571();
function runjs_80571() {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = obj80559_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80614").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80559_droppedInsideTargetActions_2_runningActionsCount = window.obj80559_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj80559_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_80572();
function runjs_80572() {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = obj80559_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80614").css("border-color", "#C00000"); $("#obj80614").css("border-width", "2px"); $("#obj80614").css("border-style", "solid"); $("#obj80614").css("border-radius", "10px"); $("#obj80614").css("-webkit-border-radius", "10px"); $("#obj80614").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80559_droppedInsideTargetActions_2_runningActionsCount = window.obj80559_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj80559_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj80608 
hide_80573();
function hide_80573() {
	var selector = "#obj80608";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = obj80559_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80559_droppedInsideTargetActions_2_runningActionsCount = window.obj80559_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80573(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80559_droppedInsideTargetActions_2_runningActionsCount = window.obj80559_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80559_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80574();
function runjs_80574() {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = obj80559_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80559").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80559_droppedInsideTargetActions_2_runningActionsCount = window.obj80559_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj80559_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80575();
function switchText_80575() {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = obj80559_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80600_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80600_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80600").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80600_content");
			setTimeout(function () {
				window.obj80559_droppedInsideTargetActions_2_runningActionsCount = window.obj80559_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj80600 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80559_droppedInsideTargetActions_2_runningActionsCount = window.obj80559_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj80559_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80559 
move_80576();
function move_80576() {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = obj80559_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj80559");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 379;
	var moveY = 610;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80559_droppedInsideTargetActions_2_runningActionsCount = window.obj80559_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj80559_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80577();
function runjs_80577() {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = obj80559_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80614").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj80559_droppedInsideTargetActions_2_runningActionsCount = window.obj80559_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj80559_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_80578();
function runjs_80578() {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = obj80559_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80614").css("border-color", "#000000"); $("#obj80614").css("border-width", "1px"); $("#obj80614").css("border-style", "solid"); $("#obj80614").css("border-radius", "10px"); $("#obj80614").css("-webkit-border-radius", "10px"); $("#obj80614").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80559_droppedInsideTargetActions_2_runningActionsCount = window.obj80559_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj80559_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj80608
(function(){
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = obj80559_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj80608";
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
					window.obj80559_droppedInsideTargetActions_2_runningActionsCount = window.obj80559_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj80559_droppedInsideTargetActions_2_runningActionsCount = window.obj80559_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80559_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80580();
function runjs_80580() {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = obj80559_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80559").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80559_droppedInsideTargetActions_2_runningActionsCount = window.obj80559_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj80559_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80581();
function runjs_80581() {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = obj80559_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80559").css("border-color", "rgba(0,0,0,0)"); $("#obj80559").css("border-width", "0px"); $("#obj80559").css("border-style", "solid"); $("#obj80559").css("border-radius", "10px"); $("#obj80559").css("-webkit-border-radius", "10px"); $("#obj80559").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80559_droppedInsideTargetActions_2_runningActionsCount = window.obj80559_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj80559_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj80599 
playAudio_80582();
function playAudio_80582() {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = obj80559_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj80599")[0];
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
		    window.obj80559_droppedInsideTargetActions_2_runningActionsCount = window.obj80559_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80559_droppedInsideTargetActions_2_runningActionsCount = window.obj80559_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj80559_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80583();
function switchText_80583() {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = obj80559_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80600_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80600_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80600").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80600_content");
			setTimeout(function () {
				window.obj80559_droppedInsideTargetActions_2_runningActionsCount = window.obj80559_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj80600 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80559_droppedInsideTargetActions_2_runningActionsCount = window.obj80559_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj80559_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj80559_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80564();
function runjs_80564() {
	window.obj80559_droppedInsideTargetActions_runningActionsCount = obj80559_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80612").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80559_droppedInsideTargetActions_runningActionsCount = window.obj80559_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj80559_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80568();
function switchText_80568() {
	window.obj80559_droppedInsideTargetActions_runningActionsCount = obj80559_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80600_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80600_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80600").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80600_content");
			setTimeout(function () {
				window.obj80559_droppedInsideTargetActions_runningActionsCount = window.obj80559_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj80600 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80559_droppedInsideTargetActions_runningActionsCount = window.obj80559_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj80559_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_80565();
function runjs_80565() {
	window.obj80559_droppedInsideTargetActions_runningActionsCount = obj80559_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80612").css("border-color", "#058E3F"); $("#obj80612").css("border-width", "2px"); $("#obj80612").css("border-style", "solid"); $("#obj80612").css("border-radius", "10px"); $("#obj80612").css("-webkit-border-radius", "10px"); $("#obj80612").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80559_droppedInsideTargetActions_runningActionsCount = window.obj80559_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj80559_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj80606 
hide_80566();
function hide_80566() {
	var selector = "#obj80606";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80559_droppedInsideTargetActions_runningActionsCount = obj80559_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80559_droppedInsideTargetActions_runningActionsCount = window.obj80559_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80566(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80559_droppedInsideTargetActions_runningActionsCount = window.obj80559_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80559_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_80567();
function runjs_80567() {
	window.obj80559_droppedInsideTargetActions_runningActionsCount = obj80559_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80559").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80559_droppedInsideTargetActions_runningActionsCount = window.obj80559_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj80559_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj80598 
playAudio_80569();
function playAudio_80569() {
	window.obj80559_droppedInsideTargetActions_runningActionsCount = obj80559_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj80598")[0];
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
		    window.obj80559_droppedInsideTargetActions_runningActionsCount = window.obj80559_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80559_droppedInsideTargetActions_runningActionsCount = window.obj80559_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj80559_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90332();
function switchText_90332() {
	window.obj80559_droppedInsideTargetActions_runningActionsCount = obj80559_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80600_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80600_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80600").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80600_content");
			setTimeout(function () {
				window.obj80559_droppedInsideTargetActions_runningActionsCount = window.obj80559_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj80600 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80559_droppedInsideTargetActions_runningActionsCount = window.obj80559_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80559_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80559_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80559_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80559_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj80559_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80559_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80559").trigger("obj80559_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80559) {
				console.warn("de-queueing event obj80559." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80559").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80559_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj80520_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj80520");
//	action: dragDrop
//	target: obj80520 
dragDrop_80523();
function dragDrop_80523() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj80520_onTouchDown_runningActionsCount = obj80520_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj80520');
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
	  	containerNode = $('#obj80622');
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
    	window.obj80520_onTouchDown_runningActionsCount = window.obj80520_onTouchDown_runningActionsCount - 1;
if (window.obj80520_onTouchDown_runningActionsCount < 0) {
	window.obj80520_onTouchDown_runningActionsCount = 0;
} else if (window.obj80520_onTouchDown_runningActionsCount == 0) {
	obj80520_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj80610","#obj80614","#obj80612");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_80523 = false;
    	var dropped_id_80523;
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
					dropped_80523 = true;
					dropped_id_80523 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_80523) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj80520").trigger('SCActionDragDrop80523_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj80520_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80520_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj80520 
move_92413();
function move_92413() {
	window.obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_runningActionsCount = obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj80520");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 219;
	var moveY = 615;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_runningActionsCount = window.obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj80520_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80546();
function runjs_80546() {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = obj80520_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80612").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80520_droppedInsideTargetActions_3_runningActionsCount = window.obj80520_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj80520_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_80547();
function runjs_80547() {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = obj80520_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80612").css("border-color", "#C00000"); $("#obj80612").css("border-width", "2px"); $("#obj80612").css("border-style", "solid"); $("#obj80612").css("border-radius", "10px"); $("#obj80612").css("-webkit-border-radius", "10px"); $("#obj80612").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80520_droppedInsideTargetActions_3_runningActionsCount = window.obj80520_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj80520_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj80606 
hide_80548();
function hide_80548() {
	var selector = "#obj80606";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = obj80520_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80520_droppedInsideTargetActions_3_runningActionsCount = window.obj80520_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80548(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80520_droppedInsideTargetActions_3_runningActionsCount = window.obj80520_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80520_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80549();
function runjs_80549() {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = obj80520_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80520").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80520_droppedInsideTargetActions_3_runningActionsCount = window.obj80520_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj80520_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80550();
function switchText_80550() {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = obj80520_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80600_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80600_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80600").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80600_content");
			setTimeout(function () {
				window.obj80520_droppedInsideTargetActions_3_runningActionsCount = window.obj80520_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj80600 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80520_droppedInsideTargetActions_3_runningActionsCount = window.obj80520_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj80520_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80520 
move_80551();
function move_80551() {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = obj80520_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj80520");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 219;
	var moveY = 615;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80520_droppedInsideTargetActions_3_runningActionsCount = window.obj80520_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj80520_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80552();
function runjs_80552() {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = obj80520_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80612").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj80520_droppedInsideTargetActions_3_runningActionsCount = window.obj80520_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj80520_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_80553();
function runjs_80553() {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = obj80520_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80612").css("border-color", "#000000"); $("#obj80612").css("border-width", "1px"); $("#obj80612").css("border-style", "solid"); $("#obj80612").css("border-radius", "10px"); $("#obj80612").css("-webkit-border-radius", "10px"); $("#obj80612").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80520_droppedInsideTargetActions_3_runningActionsCount = window.obj80520_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj80520_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj80606
(function(){
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = obj80520_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj80606";
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
					window.obj80520_droppedInsideTargetActions_3_runningActionsCount = window.obj80520_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj80520_droppedInsideTargetActions_3_runningActionsCount = window.obj80520_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80520_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80555();
function runjs_80555() {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = obj80520_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80520").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80520_droppedInsideTargetActions_3_runningActionsCount = window.obj80520_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj80520_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80556();
function runjs_80556() {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = obj80520_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80520").css("border-color", "rgba(0,0,0,0)"); $("#obj80520").css("border-width", "0px"); $("#obj80520").css("border-style", "solid"); $("#obj80520").css("border-radius", "10px"); $("#obj80520").css("-webkit-border-radius", "10px"); $("#obj80520").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80520_droppedInsideTargetActions_3_runningActionsCount = window.obj80520_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj80520_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj80599 
playAudio_80557();
function playAudio_80557() {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = obj80520_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj80599")[0];
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
		    window.obj80520_droppedInsideTargetActions_3_runningActionsCount = window.obj80520_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80520_droppedInsideTargetActions_3_runningActionsCount = window.obj80520_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj80520_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80558();
function switchText_80558() {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = obj80520_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80600_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80600_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80600").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80600_content");
			setTimeout(function () {
				window.obj80520_droppedInsideTargetActions_3_runningActionsCount = window.obj80520_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj80600 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80520_droppedInsideTargetActions_3_runningActionsCount = window.obj80520_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj80520_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj80520_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80532();
function runjs_80532() {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = obj80520_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80614").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80520_droppedInsideTargetActions_2_runningActionsCount = window.obj80520_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj80520_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_80533();
function runjs_80533() {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = obj80520_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80614").css("border-color", "#C00000"); $("#obj80614").css("border-width", "2px"); $("#obj80614").css("border-style", "solid"); $("#obj80614").css("border-radius", "10px"); $("#obj80614").css("-webkit-border-radius", "10px"); $("#obj80614").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80520_droppedInsideTargetActions_2_runningActionsCount = window.obj80520_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj80520_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj80608 
hide_80534();
function hide_80534() {
	var selector = "#obj80608";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = obj80520_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80520_droppedInsideTargetActions_2_runningActionsCount = window.obj80520_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80534(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80520_droppedInsideTargetActions_2_runningActionsCount = window.obj80520_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80520_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80535();
function runjs_80535() {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = obj80520_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80520").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80520_droppedInsideTargetActions_2_runningActionsCount = window.obj80520_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj80520_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80536();
function switchText_80536() {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = obj80520_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80600_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80600_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80600").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80600_content");
			setTimeout(function () {
				window.obj80520_droppedInsideTargetActions_2_runningActionsCount = window.obj80520_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj80600 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80520_droppedInsideTargetActions_2_runningActionsCount = window.obj80520_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj80520_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80520 
move_80537();
function move_80537() {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = obj80520_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj80520");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 219;
	var moveY = 615;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80520_droppedInsideTargetActions_2_runningActionsCount = window.obj80520_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj80520_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80538();
function runjs_80538() {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = obj80520_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80614").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj80520_droppedInsideTargetActions_2_runningActionsCount = window.obj80520_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj80520_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_80539();
function runjs_80539() {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = obj80520_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80614").css("border-color", "#000000"); $("#obj80614").css("border-width", "1px"); $("#obj80614").css("border-style", "solid"); $("#obj80614").css("border-radius", "10px"); $("#obj80614").css("-webkit-border-radius", "10px"); $("#obj80614").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80520_droppedInsideTargetActions_2_runningActionsCount = window.obj80520_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj80520_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj80608
(function(){
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = obj80520_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj80608";
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
					window.obj80520_droppedInsideTargetActions_2_runningActionsCount = window.obj80520_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj80520_droppedInsideTargetActions_2_runningActionsCount = window.obj80520_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80520_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80541();
function runjs_80541() {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = obj80520_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80520").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80520_droppedInsideTargetActions_2_runningActionsCount = window.obj80520_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj80520_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80542();
function runjs_80542() {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = obj80520_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80520").css("border-color", "rgba(0,0,0,0)"); $("#obj80520").css("border-width", "0px"); $("#obj80520").css("border-style", "solid"); $("#obj80520").css("border-radius", "10px"); $("#obj80520").css("-webkit-border-radius", "10px"); $("#obj80520").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80520_droppedInsideTargetActions_2_runningActionsCount = window.obj80520_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj80520_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj80599 
playAudio_80543();
function playAudio_80543() {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = obj80520_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj80599")[0];
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
		    window.obj80520_droppedInsideTargetActions_2_runningActionsCount = window.obj80520_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80520_droppedInsideTargetActions_2_runningActionsCount = window.obj80520_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj80520_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80544();
function switchText_80544() {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = obj80520_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80600_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80600_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80600").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80600_content");
			setTimeout(function () {
				window.obj80520_droppedInsideTargetActions_2_runningActionsCount = window.obj80520_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj80600 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80520_droppedInsideTargetActions_2_runningActionsCount = window.obj80520_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj80520_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj80520_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80525();
function runjs_80525() {
	window.obj80520_droppedInsideTargetActions_runningActionsCount = obj80520_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80610").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80520_droppedInsideTargetActions_runningActionsCount = window.obj80520_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj80520_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80529();
function switchText_80529() {
	window.obj80520_droppedInsideTargetActions_runningActionsCount = obj80520_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80600_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80600_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80600").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80600_content");
			setTimeout(function () {
				window.obj80520_droppedInsideTargetActions_runningActionsCount = window.obj80520_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj80600 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80520_droppedInsideTargetActions_runningActionsCount = window.obj80520_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj80520_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_80526();
function runjs_80526() {
	window.obj80520_droppedInsideTargetActions_runningActionsCount = obj80520_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80610").css("border-color", "#058E3F"); $("#obj80610").css("border-width", "2px"); $("#obj80610").css("border-style", "solid"); $("#obj80610").css("border-radius", "10px"); $("#obj80610").css("-webkit-border-radius", "10px"); $("#obj80610").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80520_droppedInsideTargetActions_runningActionsCount = window.obj80520_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj80520_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj80604 
hide_80527();
function hide_80527() {
	var selector = "#obj80604";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80520_droppedInsideTargetActions_runningActionsCount = obj80520_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80520_droppedInsideTargetActions_runningActionsCount = window.obj80520_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80527(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80520_droppedInsideTargetActions_runningActionsCount = window.obj80520_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80520_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_80528();
function runjs_80528() {
	window.obj80520_droppedInsideTargetActions_runningActionsCount = obj80520_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80520").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80520_droppedInsideTargetActions_runningActionsCount = window.obj80520_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj80520_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj80598 
playAudio_80530();
function playAudio_80530() {
	window.obj80520_droppedInsideTargetActions_runningActionsCount = obj80520_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj80598")[0];
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
		    window.obj80520_droppedInsideTargetActions_runningActionsCount = window.obj80520_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80520_droppedInsideTargetActions_runningActionsCount = window.obj80520_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj80520_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90331();
function switchText_90331() {
	window.obj80520_droppedInsideTargetActions_runningActionsCount = obj80520_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80600_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80600_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80600").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80600_content");
			setTimeout(function () {
				window.obj80520_droppedInsideTargetActions_runningActionsCount = window.obj80520_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj80600 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80520_droppedInsideTargetActions_runningActionsCount = window.obj80520_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80520_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80520_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80520_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80520_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj80520_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80520_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80520").trigger("obj80520_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80520) {
				console.warn("de-queueing event obj80520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80520_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj80481_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj80481");
//	action: dragDrop
//	target: obj80481 
dragDrop_80484();
function dragDrop_80484() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj80481_onTouchDown_runningActionsCount = obj80481_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj80481');
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
	  	containerNode = $('#obj80622');
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
    	window.obj80481_onTouchDown_runningActionsCount = window.obj80481_onTouchDown_runningActionsCount - 1;
if (window.obj80481_onTouchDown_runningActionsCount < 0) {
	window.obj80481_onTouchDown_runningActionsCount = 0;
} else if (window.obj80481_onTouchDown_runningActionsCount == 0) {
	obj80481_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj80614","#obj80612","#obj80610");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_80484 = false;
    	var dropped_id_80484;
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
					dropped_80484 = true;
					dropped_id_80484 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_80484) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj80481").trigger('SCActionDragDrop80484_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj80481_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80481_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj80481 
move_92411();
function move_92411() {
	window.obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_runningActionsCount = obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj80481");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 58;
	var moveY = 615;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_runningActionsCount = window.obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj80481_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80507();
function runjs_80507() {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = obj80481_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80610").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80481_droppedInsideTargetActions_3_runningActionsCount = window.obj80481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj80481_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_80508();
function runjs_80508() {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = obj80481_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80610").css("border-color", "#C00000"); $("#obj80610").css("border-width", "2px"); $("#obj80610").css("border-style", "solid"); $("#obj80610").css("border-radius", "10px"); $("#obj80610").css("-webkit-border-radius", "10px"); $("#obj80610").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80481_droppedInsideTargetActions_3_runningActionsCount = window.obj80481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj80481_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj80604 
hide_80509();
function hide_80509() {
	var selector = "#obj80604";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = obj80481_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80481_droppedInsideTargetActions_3_runningActionsCount = window.obj80481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80509(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80481_droppedInsideTargetActions_3_runningActionsCount = window.obj80481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80481_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80510();
function runjs_80510() {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = obj80481_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80481").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80481_droppedInsideTargetActions_3_runningActionsCount = window.obj80481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj80481_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80511();
function switchText_80511() {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = obj80481_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80600_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80600_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80600").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80600_content");
			setTimeout(function () {
				window.obj80481_droppedInsideTargetActions_3_runningActionsCount = window.obj80481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj80600 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80481_droppedInsideTargetActions_3_runningActionsCount = window.obj80481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj80481_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80481 
move_80512();
function move_80512() {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = obj80481_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj80481");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 58;
	var moveY = 615;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80481_droppedInsideTargetActions_3_runningActionsCount = window.obj80481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj80481_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80513();
function runjs_80513() {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = obj80481_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80610").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj80481_droppedInsideTargetActions_3_runningActionsCount = window.obj80481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj80481_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_80514();
function runjs_80514() {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = obj80481_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80610").css("border-color", "#000000"); $("#obj80610").css("border-width", "1px"); $("#obj80610").css("border-style", "solid"); $("#obj80610").css("border-radius", "10px"); $("#obj80610").css("-webkit-border-radius", "10px"); $("#obj80610").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80481_droppedInsideTargetActions_3_runningActionsCount = window.obj80481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj80481_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj80604
(function(){
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = obj80481_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj80604";
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
					window.obj80481_droppedInsideTargetActions_3_runningActionsCount = window.obj80481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj80481_droppedInsideTargetActions_3_runningActionsCount = window.obj80481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80481_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80516();
function runjs_80516() {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = obj80481_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80481").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80481_droppedInsideTargetActions_3_runningActionsCount = window.obj80481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj80481_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80517();
function runjs_80517() {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = obj80481_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80481").css("border-color", "rgba(0,0,0,0)"); $("#obj80481").css("border-width", "0px"); $("#obj80481").css("border-style", "solid"); $("#obj80481").css("border-radius", "10px"); $("#obj80481").css("-webkit-border-radius", "10px"); $("#obj80481").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80481_droppedInsideTargetActions_3_runningActionsCount = window.obj80481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj80481_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj80599 
playAudio_80518();
function playAudio_80518() {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = obj80481_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj80599")[0];
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
		    window.obj80481_droppedInsideTargetActions_3_runningActionsCount = window.obj80481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80481_droppedInsideTargetActions_3_runningActionsCount = window.obj80481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj80481_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80519();
function switchText_80519() {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = obj80481_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80600_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80600_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80600").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80600_content");
			setTimeout(function () {
				window.obj80481_droppedInsideTargetActions_3_runningActionsCount = window.obj80481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj80600 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80481_droppedInsideTargetActions_3_runningActionsCount = window.obj80481_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj80481_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj80481_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80493();
function runjs_80493() {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = obj80481_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80612").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80481_droppedInsideTargetActions_2_runningActionsCount = window.obj80481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj80481_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_80494();
function runjs_80494() {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = obj80481_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80612").css("border-color", "#C00000"); $("#obj80612").css("border-width", "2px"); $("#obj80612").css("border-style", "solid"); $("#obj80612").css("border-radius", "10px"); $("#obj80612").css("-webkit-border-radius", "10px"); $("#obj80612").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80481_droppedInsideTargetActions_2_runningActionsCount = window.obj80481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj80481_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj80606 
hide_80495();
function hide_80495() {
	var selector = "#obj80606";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = obj80481_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80481_droppedInsideTargetActions_2_runningActionsCount = window.obj80481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80495(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80481_droppedInsideTargetActions_2_runningActionsCount = window.obj80481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80481_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80496();
function runjs_80496() {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = obj80481_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80481").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80481_droppedInsideTargetActions_2_runningActionsCount = window.obj80481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj80481_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80497();
function switchText_80497() {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = obj80481_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80600_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80600_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80600").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80600_content");
			setTimeout(function () {
				window.obj80481_droppedInsideTargetActions_2_runningActionsCount = window.obj80481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj80600 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80481_droppedInsideTargetActions_2_runningActionsCount = window.obj80481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj80481_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80481 
move_80498();
function move_80498() {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = obj80481_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj80481");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 58;
	var moveY = 615;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80481_droppedInsideTargetActions_2_runningActionsCount = window.obj80481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj80481_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80499();
function runjs_80499() {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = obj80481_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80612").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj80481_droppedInsideTargetActions_2_runningActionsCount = window.obj80481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj80481_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_80500();
function runjs_80500() {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = obj80481_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80612").css("border-color", "#000000"); $("#obj80612").css("border-width", "1px"); $("#obj80612").css("border-style", "solid"); $("#obj80612").css("border-radius", "10px"); $("#obj80612").css("-webkit-border-radius", "10px"); $("#obj80612").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80481_droppedInsideTargetActions_2_runningActionsCount = window.obj80481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj80481_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj80606
(function(){
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = obj80481_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj80606";
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
					window.obj80481_droppedInsideTargetActions_2_runningActionsCount = window.obj80481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj80481_droppedInsideTargetActions_2_runningActionsCount = window.obj80481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80481_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80502();
function runjs_80502() {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = obj80481_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80481").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80481_droppedInsideTargetActions_2_runningActionsCount = window.obj80481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj80481_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80503();
function runjs_80503() {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = obj80481_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80481").css("border-color", "rgba(0,0,0,0)"); $("#obj80481").css("border-width", "0px"); $("#obj80481").css("border-style", "solid"); $("#obj80481").css("border-radius", "10px"); $("#obj80481").css("-webkit-border-radius", "10px"); $("#obj80481").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80481_droppedInsideTargetActions_2_runningActionsCount = window.obj80481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj80481_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj80599 
playAudio_80504();
function playAudio_80504() {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = obj80481_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj80599")[0];
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
		    window.obj80481_droppedInsideTargetActions_2_runningActionsCount = window.obj80481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80481_droppedInsideTargetActions_2_runningActionsCount = window.obj80481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj80481_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80505();
function switchText_80505() {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = obj80481_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80600_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80600_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80600").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80600_content");
			setTimeout(function () {
				window.obj80481_droppedInsideTargetActions_2_runningActionsCount = window.obj80481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj80600 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80481_droppedInsideTargetActions_2_runningActionsCount = window.obj80481_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj80481_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj80481_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80486();
function runjs_80486() {
	window.obj80481_droppedInsideTargetActions_runningActionsCount = obj80481_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80614").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80481_droppedInsideTargetActions_runningActionsCount = window.obj80481_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj80481_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80490();
function switchText_80490() {
	window.obj80481_droppedInsideTargetActions_runningActionsCount = obj80481_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80600_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80600_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80600").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80600_content");
			setTimeout(function () {
				window.obj80481_droppedInsideTargetActions_runningActionsCount = window.obj80481_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj80600 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80481_droppedInsideTargetActions_runningActionsCount = window.obj80481_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj80481_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_80487();
function runjs_80487() {
	window.obj80481_droppedInsideTargetActions_runningActionsCount = obj80481_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80614").css("border-color", "#058E3F"); $("#obj80614").css("border-width", "2px"); $("#obj80614").css("border-style", "solid"); $("#obj80614").css("border-radius", "10px"); $("#obj80614").css("-webkit-border-radius", "10px"); $("#obj80614").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80481_droppedInsideTargetActions_runningActionsCount = window.obj80481_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj80481_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj80608 
hide_80488();
function hide_80488() {
	var selector = "#obj80608";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80481_droppedInsideTargetActions_runningActionsCount = obj80481_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80481_droppedInsideTargetActions_runningActionsCount = window.obj80481_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80488(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80481_droppedInsideTargetActions_runningActionsCount = window.obj80481_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80481_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_80489();
function runjs_80489() {
	window.obj80481_droppedInsideTargetActions_runningActionsCount = obj80481_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80481").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80481_droppedInsideTargetActions_runningActionsCount = window.obj80481_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj80481_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj80598 
playAudio_80491();
function playAudio_80491() {
	window.obj80481_droppedInsideTargetActions_runningActionsCount = obj80481_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj80598")[0];
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
		    window.obj80481_droppedInsideTargetActions_runningActionsCount = window.obj80481_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80481_droppedInsideTargetActions_runningActionsCount = window.obj80481_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj80481_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90330();
function switchText_90330() {
	window.obj80481_droppedInsideTargetActions_runningActionsCount = obj80481_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80600_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80600_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80600").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80600_content");
			setTimeout(function () {
				window.obj80481_droppedInsideTargetActions_runningActionsCount = window.obj80481_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj80600 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80481_droppedInsideTargetActions_runningActionsCount = window.obj80481_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80481_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80481_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80481_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80481_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj80481_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80481_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80481").trigger("obj80481_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80481) {
				console.warn("de-queueing event obj80481." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80481").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80481_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj80463_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80463_onTap_activeActionGroupIndex = -1;
		$("#obj80463").trigger("obj80463_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80463) {
				console.warn("de-queueing event obj80463." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80463").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80463_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj80463 
hide_80466();
function hide_80466() {
	var selector = "#obj80463";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80463_onTap_runningActionsCount = obj80463_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80463_onTap_runningActionsCount = window.obj80463_onTap_runningActionsCount - 1;
if (window.obj80463_onTap_runningActionsCount < 0) {
	window.obj80463_onTap_runningActionsCount = 0;
} else if (window.obj80463_onTap_runningActionsCount == 0) {
	obj80463_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80466(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80463_onTap_runningActionsCount = window.obj80463_onTap_runningActionsCount - 1;
if (window.obj80463_onTap_runningActionsCount < 0) {
	window.obj80463_onTap_runningActionsCount = 0;
} else if (window.obj80463_onTap_runningActionsCount == 0) {
	obj80463_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj80453 
stopMovie_80465();
function stopMovie_80465() {
	window.obj80463_onTap_runningActionsCount = obj80463_onTap_runningActionsCount + 1;
	var myVideo = $("#obj80453")[0];
	myVideo.pause();
	window.obj80463_onTap_runningActionsCount = window.obj80463_onTap_runningActionsCount - 1;
if (window.obj80463_onTap_runningActionsCount < 0) {
	window.obj80463_onTap_runningActionsCount = 0;
} else if (window.obj80463_onTap_runningActionsCount == 0) {
	obj80463_onTap_actionGroup1();
}
}
















};
obj80463_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80463_onTap_activeActionGroupIndex = -1;
		$("#obj80463").trigger("obj80463_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80463) {
				console.warn("de-queueing event obj80463." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80463").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80463_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj80455
(function(){
	window.obj80463_onTap_runningActionsCount = obj80463_onTap_runningActionsCount + 1;

	var selector = "#obj80455";
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
					window.obj80463_onTap_runningActionsCount = window.obj80463_onTap_runningActionsCount - 1;
if (window.obj80463_onTap_runningActionsCount < 0) {
	window.obj80463_onTap_runningActionsCount = 0;
} else if (window.obj80463_onTap_runningActionsCount == 0) {
	obj80463_onTap_actionGroup2();
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
				window.obj80463_onTap_runningActionsCount = window.obj80463_onTap_runningActionsCount - 1;
if (window.obj80463_onTap_runningActionsCount < 0) {
	window.obj80463_onTap_runningActionsCount = 0;
} else if (window.obj80463_onTap_runningActionsCount == 0) {
	obj80463_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80463_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80463_onTap_activeActionGroupIndex = -1;
		$("#obj80463").trigger("obj80463_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80463) {
				console.warn("de-queueing event obj80463." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80463").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80463_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj80453 
move_80468();
function move_80468() {
	window.obj80463_onTap_runningActionsCount = obj80463_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj80453");
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
			window.obj80463_onTap_runningActionsCount = window.obj80463_onTap_runningActionsCount - 1;
if (window.obj80463_onTap_runningActionsCount < 0) {
	window.obj80463_onTap_runningActionsCount = 0;
} else if (window.obj80463_onTap_runningActionsCount == 0) {
	obj80463_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj80463_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80463_onTap_activeActionGroupIndex = -1;
		$("#obj80463").trigger("obj80463_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80463) {
				console.warn("de-queueing event obj80463." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80463").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80463_onTap_activeActionGroupIndex = 3;
	





















};
obj80455_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80455_onTap_activeActionGroupIndex = -1;
		$("#obj80455").trigger("obj80455_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80455) {
				console.warn("de-queueing event obj80455." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80455").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80455_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj80455 
hide_80458();
function hide_80458() {
	var selector = "#obj80455";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80455_onTap_runningActionsCount = obj80455_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80455_onTap_runningActionsCount = window.obj80455_onTap_runningActionsCount - 1;
if (window.obj80455_onTap_runningActionsCount < 0) {
	window.obj80455_onTap_runningActionsCount = 0;
} else if (window.obj80455_onTap_runningActionsCount == 0) {
	obj80455_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80458(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80455_onTap_runningActionsCount = window.obj80455_onTap_runningActionsCount - 1;
if (window.obj80455_onTap_runningActionsCount < 0) {
	window.obj80455_onTap_runningActionsCount = 0;
} else if (window.obj80455_onTap_runningActionsCount == 0) {
	obj80455_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj80453 
playPauseMovie_80457();
function playPauseMovie_80457() {
	window.obj80455_onTap_runningActionsCount = obj80455_onTap_runningActionsCount + 1;
	var myVideo = $("#obj80453")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj80455_onTap_runningActionsCount = window.obj80455_onTap_runningActionsCount - 1;
if (window.obj80455_onTap_runningActionsCount < 0) {
	window.obj80455_onTap_runningActionsCount = 0;
} else if (window.obj80455_onTap_runningActionsCount == 0) {
	obj80455_onTap_actionGroup1();
}
}

















};
obj80455_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80455_onTap_activeActionGroupIndex = -1;
		$("#obj80455").trigger("obj80455_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80455) {
				console.warn("de-queueing event obj80455." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80455").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80455_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj80463
(function(){
	window.obj80455_onTap_runningActionsCount = obj80455_onTap_runningActionsCount + 1;

	var selector = "#obj80463";
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
					window.obj80455_onTap_runningActionsCount = window.obj80455_onTap_runningActionsCount - 1;
if (window.obj80455_onTap_runningActionsCount < 0) {
	window.obj80455_onTap_runningActionsCount = 0;
} else if (window.obj80455_onTap_runningActionsCount == 0) {
	obj80455_onTap_actionGroup2();
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
				window.obj80455_onTap_runningActionsCount = window.obj80455_onTap_runningActionsCount - 1;
if (window.obj80455_onTap_runningActionsCount < 0) {
	window.obj80455_onTap_runningActionsCount = 0;
} else if (window.obj80455_onTap_runningActionsCount == 0) {
	obj80455_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80455_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80455_onTap_activeActionGroupIndex = -1;
		$("#obj80455").trigger("obj80455_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80455) {
				console.warn("de-queueing event obj80455." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80455").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80455_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj80453 
move_80460();
function move_80460() {
	window.obj80455_onTap_runningActionsCount = obj80455_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj80453");
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
			window.obj80455_onTap_runningActionsCount = window.obj80455_onTap_runningActionsCount - 1;
if (window.obj80455_onTap_runningActionsCount < 0) {
	window.obj80455_onTap_runningActionsCount = 0;
} else if (window.obj80455_onTap_runningActionsCount == 0) {
	obj80455_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj80455_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80455_onTap_activeActionGroupIndex = -1;
		$("#obj80455").trigger("obj80455_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80455) {
				console.warn("de-queueing event obj80455." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80455").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80455_onTap_activeActionGroupIndex = 3;
	





















};
obj88057_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88057_onTap_activeActionGroupIndex = -1;
		$("#obj88057").trigger("obj88057_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88057) {
				console.warn("de-queueing event obj88057." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88057").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88057_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88062 
stopAudio_88059();
function stopAudio_88059() {
	window.obj88057_onTap_runningActionsCount = obj88057_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88062")[0];
	myAudio.pause();
	window.obj88057_onTap_runningActionsCount = window.obj88057_onTap_runningActionsCount - 1;
if (window.obj88057_onTap_runningActionsCount < 0) {
	window.obj88057_onTap_runningActionsCount = 0;
} else if (window.obj88057_onTap_runningActionsCount == 0) {
	obj88057_onTap_actionGroup1();
}
}








};
obj88057_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88057_onTap_activeActionGroupIndex = -1;
		$("#obj88057").trigger("obj88057_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88057) {
				console.warn("de-queueing event obj88057." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88057").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88057_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88057 
hide_88060();
function hide_88060() {
	var selector = "#obj88057";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88057_onTap_runningActionsCount = obj88057_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88057_onTap_runningActionsCount = window.obj88057_onTap_runningActionsCount - 1;
if (window.obj88057_onTap_runningActionsCount < 0) {
	window.obj88057_onTap_runningActionsCount = 0;
} else if (window.obj88057_onTap_runningActionsCount == 0) {
	obj88057_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88060(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88057_onTap_runningActionsCount = window.obj88057_onTap_runningActionsCount - 1;
if (window.obj88057_onTap_runningActionsCount < 0) {
	window.obj88057_onTap_runningActionsCount = 0;
} else if (window.obj88057_onTap_runningActionsCount == 0) {
	obj88057_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88057_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88057_onTap_activeActionGroupIndex = -1;
		$("#obj88057").trigger("obj88057_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88057) {
				console.warn("de-queueing event obj88057." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88057").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88057_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88052
(function(){
	window.obj88057_onTap_runningActionsCount = obj88057_onTap_runningActionsCount + 1;

	var selector = "#obj88052";
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
					window.obj88057_onTap_runningActionsCount = window.obj88057_onTap_runningActionsCount - 1;
if (window.obj88057_onTap_runningActionsCount < 0) {
	window.obj88057_onTap_runningActionsCount = 0;
} else if (window.obj88057_onTap_runningActionsCount == 0) {
	obj88057_onTap_actionGroup3();
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
				window.obj88057_onTap_runningActionsCount = window.obj88057_onTap_runningActionsCount - 1;
if (window.obj88057_onTap_runningActionsCount < 0) {
	window.obj88057_onTap_runningActionsCount = 0;
} else if (window.obj88057_onTap_runningActionsCount == 0) {
	obj88057_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88057_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88057_onTap_activeActionGroupIndex = -1;
		$("#obj88057").trigger("obj88057_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88057) {
				console.warn("de-queueing event obj88057." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88057").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88057_onTap_activeActionGroupIndex = 3;
	





















};
obj88052_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88052_onTap_activeActionGroupIndex = -1;
		$("#obj88052").trigger("obj88052_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88052) {
				console.warn("de-queueing event obj88052." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88052").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88052_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88052 
hide_88054();
function hide_88054() {
	var selector = "#obj88052";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88052_onTap_runningActionsCount = obj88052_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88052_onTap_runningActionsCount = window.obj88052_onTap_runningActionsCount - 1;
if (window.obj88052_onTap_runningActionsCount < 0) {
	window.obj88052_onTap_runningActionsCount = 0;
} else if (window.obj88052_onTap_runningActionsCount == 0) {
	obj88052_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88054(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88052_onTap_runningActionsCount = window.obj88052_onTap_runningActionsCount - 1;
if (window.obj88052_onTap_runningActionsCount < 0) {
	window.obj88052_onTap_runningActionsCount = 0;
} else if (window.obj88052_onTap_runningActionsCount == 0) {
	obj88052_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88052_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88052_onTap_activeActionGroupIndex = -1;
		$("#obj88052").trigger("obj88052_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88052) {
				console.warn("de-queueing event obj88052." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88052").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88052_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88057
(function(){
	window.obj88052_onTap_runningActionsCount = obj88052_onTap_runningActionsCount + 1;

	var selector = "#obj88057";
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
					window.obj88052_onTap_runningActionsCount = window.obj88052_onTap_runningActionsCount - 1;
if (window.obj88052_onTap_runningActionsCount < 0) {
	window.obj88052_onTap_runningActionsCount = 0;
} else if (window.obj88052_onTap_runningActionsCount == 0) {
	obj88052_onTap_actionGroup2();
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
				window.obj88052_onTap_runningActionsCount = window.obj88052_onTap_runningActionsCount - 1;
if (window.obj88052_onTap_runningActionsCount < 0) {
	window.obj88052_onTap_runningActionsCount = 0;
} else if (window.obj88052_onTap_runningActionsCount == 0) {
	obj88052_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88052_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88052_onTap_activeActionGroupIndex = -1;
		$("#obj88052").trigger("obj88052_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88052) {
				console.warn("de-queueing event obj88052." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88052").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88052_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88062 
playAudio_88056();
function playAudio_88056() {
	window.obj88052_onTap_runningActionsCount = obj88052_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88062")[0];
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
		    window.obj88052_onTap_runningActionsCount = window.obj88052_onTap_runningActionsCount - 1;
if (window.obj88052_onTap_runningActionsCount < 0) {
	window.obj88052_onTap_runningActionsCount = 0;
} else if (window.obj88052_onTap_runningActionsCount == 0) {
	obj88052_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88052_onTap_runningActionsCount = window.obj88052_onTap_runningActionsCount - 1;
if (window.obj88052_onTap_runningActionsCount < 0) {
	window.obj88052_onTap_runningActionsCount = 0;
} else if (window.obj88052_onTap_runningActionsCount == 0) {
	obj88052_onTap_actionGroup3();
}
	}
}









};
obj88052_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88052_onTap_activeActionGroupIndex = -1;
		$("#obj88052").trigger("obj88052_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88052) {
				console.warn("de-queueing event obj88052." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88052").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88052_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj80639: Event Touch Down
 *
 */
$("#obj80639").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80639_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80639_onTap is still running");
	return;
}
var obj80639_onTap_runningActionsCount = 0;
var obj80639_onTap_loopCount = 0;
obj80639_onTap_actionGroup0();
});










/*
 *
 *   obj80636: Event Touch Down
 *
 */
$("#obj80636").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80636_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80636_onTap is still running");
	return;
}
var obj80636_onTap_runningActionsCount = 0;
var obj80636_onTap_loopCount = 0;
obj80636_onTap_actionGroup0();
});










/*
 *
 *   obj80632: Event Touch Down
 *
 */
$("#obj80632").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80632_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80632_onTap is still running");
	return;
}
var obj80632_onTap_runningActionsCount = 0;
var obj80632_onTap_loopCount = 0;
obj80632_onTap_actionGroup0();
});































































































































































































/*
 *
 *   obj80559: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj80559");
	var winTarget = document.getElementById("obj80559");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj80559").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj80559_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj80559_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj80559_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80559_onTouchDown is still running");
	return;
}
var obj80559_onTouchDown_runningActionsCount = 0;
var obj80559_onTouchDown_loopCount = 0;
obj80559_onTouchDown_actionGroup0();
});



/*
 *
 *   obj80559: Event SCActionDragDrop80562_droppedOutsideTargetActions
 *
 */
$("#obj80559").bind("SCActionDragDrop80562_droppedOutsideTargetActions", function(event) {
	if (window.obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80559_SCActionDragDrop80562_droppedOutsideTargetActions is still running");
	return;
}
var obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_loopCount = 0;
obj80559_SCActionDragDrop80562_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj80559: Event droppedInsideTargetActions_3
 *
 */
$("#obj80559").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj80559_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80559_droppedInsideTargetActions_3 is still running");
	return;
}
var obj80559_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj80559_droppedInsideTargetActions_3_loopCount = 0;
obj80559_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj80559: Event droppedInsideTargetActions_2
 *
 */
$("#obj80559").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj80559_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80559_droppedInsideTargetActions_2 is still running");
	return;
}
var obj80559_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj80559_droppedInsideTargetActions_2_loopCount = 0;
obj80559_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj80559: Event droppedInsideTargetActions
 *
 */
$("#obj80559").bind("droppedInsideTargetActions", function(event) {
	if (window.obj80559_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80559_droppedInsideTargetActions is still running");
	return;
}
var obj80559_droppedInsideTargetActions_runningActionsCount = 0;
var obj80559_droppedInsideTargetActions_loopCount = 0;
obj80559_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj80520: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj80520");
	var winTarget = document.getElementById("obj80520");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj80520").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj80520_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj80520_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj80520_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80520_onTouchDown is still running");
	return;
}
var obj80520_onTouchDown_runningActionsCount = 0;
var obj80520_onTouchDown_loopCount = 0;
obj80520_onTouchDown_actionGroup0();
});



/*
 *
 *   obj80520: Event SCActionDragDrop80523_droppedOutsideTargetActions
 *
 */
$("#obj80520").bind("SCActionDragDrop80523_droppedOutsideTargetActions", function(event) {
	if (window.obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80520_SCActionDragDrop80523_droppedOutsideTargetActions is still running");
	return;
}
var obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_loopCount = 0;
obj80520_SCActionDragDrop80523_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj80520: Event droppedInsideTargetActions_3
 *
 */
$("#obj80520").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj80520_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80520_droppedInsideTargetActions_3 is still running");
	return;
}
var obj80520_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj80520_droppedInsideTargetActions_3_loopCount = 0;
obj80520_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj80520: Event droppedInsideTargetActions_2
 *
 */
$("#obj80520").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj80520_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80520_droppedInsideTargetActions_2 is still running");
	return;
}
var obj80520_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj80520_droppedInsideTargetActions_2_loopCount = 0;
obj80520_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj80520: Event droppedInsideTargetActions
 *
 */
$("#obj80520").bind("droppedInsideTargetActions", function(event) {
	if (window.obj80520_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80520_droppedInsideTargetActions is still running");
	return;
}
var obj80520_droppedInsideTargetActions_runningActionsCount = 0;
var obj80520_droppedInsideTargetActions_loopCount = 0;
obj80520_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj80481: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj80481");
	var winTarget = document.getElementById("obj80481");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj80481").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj80481_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj80481_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj80481_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80481_onTouchDown is still running");
	return;
}
var obj80481_onTouchDown_runningActionsCount = 0;
var obj80481_onTouchDown_loopCount = 0;
obj80481_onTouchDown_actionGroup0();
});



/*
 *
 *   obj80481: Event SCActionDragDrop80484_droppedOutsideTargetActions
 *
 */
$("#obj80481").bind("SCActionDragDrop80484_droppedOutsideTargetActions", function(event) {
	if (window.obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80481_SCActionDragDrop80484_droppedOutsideTargetActions is still running");
	return;
}
var obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_loopCount = 0;
obj80481_SCActionDragDrop80484_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj80481: Event droppedInsideTargetActions_3
 *
 */
$("#obj80481").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj80481_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80481_droppedInsideTargetActions_3 is still running");
	return;
}
var obj80481_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj80481_droppedInsideTargetActions_3_loopCount = 0;
obj80481_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj80481: Event droppedInsideTargetActions_2
 *
 */
$("#obj80481").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj80481_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80481_droppedInsideTargetActions_2 is still running");
	return;
}
var obj80481_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj80481_droppedInsideTargetActions_2_loopCount = 0;
obj80481_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj80481: Event droppedInsideTargetActions
 *
 */
$("#obj80481").bind("droppedInsideTargetActions", function(event) {
	if (window.obj80481_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80481_droppedInsideTargetActions is still running");
	return;
}
var obj80481_droppedInsideTargetActions_runningActionsCount = 0;
var obj80481_droppedInsideTargetActions_loopCount = 0;
obj80481_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj80463: Event Touch Down
 *
 */
$("#obj80463").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80463_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80463_onTap is still running");
	return;
}
var obj80463_onTap_runningActionsCount = 0;
var obj80463_onTap_loopCount = 0;
obj80463_onTap_actionGroup0();
});










/*
 *
 *   obj80455: Event Touch Down
 *
 */
$("#obj80455").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80455_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80455_onTap is still running");
	return;
}
var obj80455_onTap_runningActionsCount = 0;
var obj80455_onTap_loopCount = 0;
obj80455_onTap_actionGroup0();
});










/*
 *
 *   obj88057: Event Touch Down
 *
 */
$("#obj88057").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88057_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88057_onTap is still running");
	return;
}
var obj88057_onTap_runningActionsCount = 0;
var obj88057_onTap_loopCount = 0;
obj88057_onTap_actionGroup0();
});










/*
 *
 *   obj88052: Event Touch Down
 *
 */
$("#obj88052").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88052_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88052_onTap is still running");
	return;
}
var obj88052_onTap_runningActionsCount = 0;
var obj88052_onTap_loopCount = 0;
obj88052_onTap_actionGroup0();
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
	
$("#obj80642").trigger('SCEventShow');
$("#obj80639").trigger('SCEventShow');
$("#obj80636").trigger('SCEventShow');
$("#obj80632").trigger('SCEventShow');
$("#obj80630").trigger('SCEventShow');
$("#obj80628").trigger('SCEventShow');
$("#obj80626").trigger('SCEventShow');
$("#obj80624").trigger('SCEventShow');
$("#obj80622").trigger('SCEventShow');
$("#obj80620").trigger('SCEventShow');
$("#obj80618").trigger('SCEventShow');
$("#obj80616").trigger('SCEventShow');
$("#obj80614").trigger('SCEventShow');
$("#obj80612").trigger('SCEventShow');
$("#obj80610").trigger('SCEventShow');
$("#obj80608").trigger('SCEventShow');
$("#obj80606").trigger('SCEventShow');
$("#obj80604").trigger('SCEventShow');
$("#obj80602").trigger('SCEventShow');
$("#obj80600").trigger('SCEventShow');
$("#obj80599").trigger('SCEventShow');
$("#obj80598").trigger('SCEventShow');
$("#obj80559").trigger('SCEventShow');
$("#obj80520").trigger('SCEventShow');
$("#obj80481").trigger('SCEventShow');
$("#obj80463").trigger('SCEventShow');
$("#obj80455").trigger('SCEventShow');
$("#obj88057").trigger('SCEventShow');
$("#obj88052").trigger('SCEventShow');
$("#obj88062").trigger('SCEventShow');
$("#obj94827").trigger('SCEventShow');
$("#obj80453").trigger('SCEventShow');
	
});