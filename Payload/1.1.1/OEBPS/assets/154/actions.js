pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 45597;
pubcoder.page.title = pubcoder.page.title || "154";
pubcoder.page.number = pubcoder.page.number || 154;
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
var obj45658_onTap_activeActionGroupIndex = -1;
var obj45658_onTap_runningActionsCount = 0;
var obj45658_onTap_loopCount = 0;
var obj45655_onTap_activeActionGroupIndex = -1;
var obj45655_onTap_runningActionsCount = 0;
var obj45655_onTap_loopCount = 0;
var obj45651_onTap_activeActionGroupIndex = -1;
var obj45651_onTap_runningActionsCount = 0;
var obj45651_onTap_loopCount = 0;
var obj45619_onDrag_activeActionGroupIndex = -1;
var obj45619_onDrag_runningActionsCount = 0;
var obj45619_onDrag_loopCount = 0;
var obj45619_onTouchDown_activeActionGroupIndex = -1;
var obj45619_onTouchDown_runningActionsCount = 0;
var obj45619_onTouchDown_loopCount = 0;
var obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_loopCount = 0;
var obj45619_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj45619_droppedInsideTargetActions_runningActionsCount = 0;
var obj45619_droppedInsideTargetActions_loopCount = 0;
var obj45602_onDrag_activeActionGroupIndex = -1;
var obj45602_onDrag_runningActionsCount = 0;
var obj45602_onDrag_loopCount = 0;
var obj45602_onTouchDown_activeActionGroupIndex = -1;
var obj45602_onTouchDown_runningActionsCount = 0;
var obj45602_onTouchDown_loopCount = 0;
var obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_loopCount = 0;
var obj45602_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj45602_droppedInsideTargetActions_runningActionsCount = 0;
var obj45602_droppedInsideTargetActions_loopCount = 0;
var obj67470_onTap_activeActionGroupIndex = -1;
var obj67470_onTap_runningActionsCount = 0;
var obj67470_onTap_loopCount = 0;
var obj67462_onTap_activeActionGroupIndex = -1;
var obj67462_onTap_runningActionsCount = 0;
var obj67462_onTap_loopCount = 0;
var obj88729_onTap_activeActionGroupIndex = -1;
var obj88729_onTap_runningActionsCount = 0;
var obj88729_onTap_loopCount = 0;
var obj88724_onTap_activeActionGroupIndex = -1;
var obj88724_onTap_runningActionsCount = 0;
var obj88724_onTap_loopCount = 0;
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
		
obj45658_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45658_onTap_activeActionGroupIndex = -1;
		$("#obj45658").trigger("obj45658_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45658) {
				console.warn("de-queueing event obj45658." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45658").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45658_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_45660();
function goToPage_45660() {
	window.obj45658_onTap_runningActionsCount = obj45658_onTap_runningActionsCount + 1;
	$("#anchor911")[0].click();
	window.obj45658_onTap_runningActionsCount = window.obj45658_onTap_runningActionsCount - 1;
if (window.obj45658_onTap_runningActionsCount < 0) {
	window.obj45658_onTap_runningActionsCount = 0;
} else if (window.obj45658_onTap_runningActionsCount == 0) {
	obj45658_onTap_actionGroup1();
}
}





















};
obj45658_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45658_onTap_activeActionGroupIndex = -1;
		$("#obj45658").trigger("obj45658_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45658) {
				console.warn("de-queueing event obj45658." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45658").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45658_onTap_activeActionGroupIndex = 1;
	





















};
obj45655_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45655_onTap_activeActionGroupIndex = -1;
		$("#obj45655").trigger("obj45655_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45655) {
				console.warn("de-queueing event obj45655." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45655").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45655_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_45657();
function goToPage_45657() {
	window.obj45655_onTap_runningActionsCount = obj45655_onTap_runningActionsCount + 1;
	$("#anchor912")[0].click();
	window.obj45655_onTap_runningActionsCount = window.obj45655_onTap_runningActionsCount - 1;
if (window.obj45655_onTap_runningActionsCount < 0) {
	window.obj45655_onTap_runningActionsCount = 0;
} else if (window.obj45655_onTap_runningActionsCount == 0) {
	obj45655_onTap_actionGroup1();
}
}





















};
obj45655_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45655_onTap_activeActionGroupIndex = -1;
		$("#obj45655").trigger("obj45655_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45655) {
				console.warn("de-queueing event obj45655." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45655").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45655_onTap_activeActionGroupIndex = 1;
	





















};
obj45651_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45651_onTap_activeActionGroupIndex = -1;
		$("#obj45651").trigger("obj45651_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45651) {
				console.warn("de-queueing event obj45651." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45651").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45651_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_45653();
function goToPage_45653() {
	window.obj45651_onTap_runningActionsCount = obj45651_onTap_runningActionsCount + 1;
	$("#anchor913")[0].click();
	window.obj45651_onTap_runningActionsCount = window.obj45651_onTap_runningActionsCount - 1;
if (window.obj45651_onTap_runningActionsCount < 0) {
	window.obj45651_onTap_runningActionsCount = 0;
} else if (window.obj45651_onTap_runningActionsCount == 0) {
	obj45651_onTap_actionGroup1();
}
}





















};
obj45651_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45651_onTap_activeActionGroupIndex = -1;
		$("#obj45651").trigger("obj45651_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45651) {
				console.warn("de-queueing event obj45651." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45651").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45651_onTap_activeActionGroupIndex = 1;
	





















};
obj45619_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45619_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45619").trigger("obj45619_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45619) {
				console.warn("de-queueing event obj45619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45619_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj45619");
//	action: dragDrop
//	target: obj45619 
dragDrop_45622();
function dragDrop_45622() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj45619_onTouchDown_runningActionsCount = obj45619_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj45619');
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
	  	containerNode = $('#obj45643');
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
    	window.obj45619_onTouchDown_runningActionsCount = window.obj45619_onTouchDown_runningActionsCount - 1;
if (window.obj45619_onTouchDown_runningActionsCount < 0) {
	window.obj45619_onTouchDown_runningActionsCount = 0;
} else if (window.obj45619_onTouchDown_runningActionsCount == 0) {
	obj45619_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj45639");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_45622 = false;
    	var dropped_id_45622;
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
					dropped_45622 = true;
					dropped_id_45622 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_45622) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj45619").trigger('SCActionDragDrop45622_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj45619_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45619_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45619").trigger("obj45619_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45619) {
				console.warn("de-queueing event obj45619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45619_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45619").trigger("obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45619) {
				console.warn("de-queueing event obj45619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj45619 
move_92681();
function move_92681() {
	window.obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_runningActionsCount = obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj45619");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 319;
	var moveY = 552;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_runningActionsCount = window.obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45619").trigger("obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45619) {
				console.warn("de-queueing event obj45619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj45619_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45619").trigger("obj45619_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45619) {
				console.warn("de-queueing event obj45619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45624();
function runjs_45624() {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = obj45619_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45639").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45619_droppedInsideTargetActions_runningActionsCount = window.obj45619_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45619_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45619_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45619_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj45619_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45619").trigger("obj45619_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45619) {
				console.warn("de-queueing event obj45619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45625();
function runjs_45625() {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = obj45619_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45639").css("border-color", "#C00000"); $("#obj45639").css("border-width", "2px"); $("#obj45639").css("border-style", "solid"); $("#obj45639").css("border-radius", "10px"); $("#obj45639").css("-webkit-border-radius", "10px"); $("#obj45639").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45619_droppedInsideTargetActions_runningActionsCount = window.obj45619_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45619_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45619_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45619_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj45619_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45619").trigger("obj45619_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45619) {
				console.warn("de-queueing event obj45619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45637 
hide_45626();
function hide_45626() {
	var selector = "#obj45637";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45619_droppedInsideTargetActions_runningActionsCount = obj45619_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45619_droppedInsideTargetActions_runningActionsCount = window.obj45619_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45619_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45619_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45619_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45626(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45619_droppedInsideTargetActions_runningActionsCount = window.obj45619_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45619_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45619_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45619_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45619_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45619").trigger("obj45619_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45619) {
				console.warn("de-queueing event obj45619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45627();
function runjs_45627() {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = obj45619_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45619").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45619_droppedInsideTargetActions_runningActionsCount = window.obj45619_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45619_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45619_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45619_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj45619_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45619").trigger("obj45619_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45619) {
				console.warn("de-queueing event obj45619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45628();
function switchText_45628() {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = obj45619_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45613_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45613_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45613").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45613_content");
			setTimeout(function () {
				window.obj45619_droppedInsideTargetActions_runningActionsCount = window.obj45619_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45619_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45619_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45619_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45613 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45619_droppedInsideTargetActions_runningActionsCount = window.obj45619_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45619_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45619_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45619_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj45619_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45619").trigger("obj45619_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45619) {
				console.warn("de-queueing event obj45619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45619 
move_45629();
function move_45629() {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = obj45619_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj45619");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 319;
	var moveY = 552;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45619_droppedInsideTargetActions_runningActionsCount = window.obj45619_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45619_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45619_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45619_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj45619_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45619").trigger("obj45619_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45619) {
				console.warn("de-queueing event obj45619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45630();
function runjs_45630() {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = obj45619_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45639").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45619_droppedInsideTargetActions_runningActionsCount = window.obj45619_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45619_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45619_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45619_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj45619_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45619").trigger("obj45619_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45619) {
				console.warn("de-queueing event obj45619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45631();
function runjs_45631() {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = obj45619_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45639").css("border-color", "#000000"); $("#obj45639").css("border-width", "1px"); $("#obj45639").css("border-style", "solid"); $("#obj45639").css("border-radius", "10px"); $("#obj45639").css("-webkit-border-radius", "10px"); $("#obj45639").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45619_droppedInsideTargetActions_runningActionsCount = window.obj45619_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45619_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45619_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45619_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj45619_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45619").trigger("obj45619_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45619) {
				console.warn("de-queueing event obj45619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45637
(function(){
	window.obj45619_droppedInsideTargetActions_runningActionsCount = obj45619_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj45637";
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
					window.obj45619_droppedInsideTargetActions_runningActionsCount = window.obj45619_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45619_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45619_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45619_droppedInsideTargetActions_actionGroup9();
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
				window.obj45619_droppedInsideTargetActions_runningActionsCount = window.obj45619_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45619_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45619_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45619_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45619_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45619").trigger("obj45619_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45619) {
				console.warn("de-queueing event obj45619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45633();
function runjs_45633() {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = obj45619_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45619").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45619_droppedInsideTargetActions_runningActionsCount = window.obj45619_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45619_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45619_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45619_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj45619_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45619").trigger("obj45619_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45619) {
				console.warn("de-queueing event obj45619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45634();
function runjs_45634() {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = obj45619_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45619").css("border-color", "rgba(0,0,0,0)"); $("#obj45619").css("border-width", "0px"); $("#obj45619").css("border-style", "solid"); $("#obj45619").css("border-radius", "10px"); $("#obj45619").css("-webkit-border-radius", "10px"); $("#obj45619").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45619_droppedInsideTargetActions_runningActionsCount = window.obj45619_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45619_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45619_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45619_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj45619_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45619").trigger("obj45619_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45619) {
				console.warn("de-queueing event obj45619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45598 
playAudio_45635();
function playAudio_45635() {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = obj45619_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj45598")[0];
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
		    window.obj45619_droppedInsideTargetActions_runningActionsCount = window.obj45619_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45619_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45619_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45619_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45619_droppedInsideTargetActions_runningActionsCount = window.obj45619_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45619_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45619_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45619_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj45619_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45619").trigger("obj45619_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45619) {
				console.warn("de-queueing event obj45619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45636();
function switchText_45636() {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = obj45619_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45613_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45613_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45613").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45613_content");
			setTimeout(function () {
				window.obj45619_droppedInsideTargetActions_runningActionsCount = window.obj45619_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45619_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45619_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45619_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45613 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45619_droppedInsideTargetActions_runningActionsCount = window.obj45619_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45619_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45619_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45619_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45619_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj45619_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45619").trigger("obj45619_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45619) {
				console.warn("de-queueing event obj45619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45619_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj45602_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45602_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45602").trigger("obj45602_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45602) {
				console.warn("de-queueing event obj45602." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45602").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45602_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj45602");
//	action: dragDrop
//	target: obj45602 
dragDrop_45605();
function dragDrop_45605() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj45602_onTouchDown_runningActionsCount = obj45602_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj45602');
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
	  	containerNode = $('#obj45643');
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
    	window.obj45602_onTouchDown_runningActionsCount = window.obj45602_onTouchDown_runningActionsCount - 1;
if (window.obj45602_onTouchDown_runningActionsCount < 0) {
	window.obj45602_onTouchDown_runningActionsCount = 0;
} else if (window.obj45602_onTouchDown_runningActionsCount == 0) {
	obj45602_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj45639");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_45605 = false;
    	var dropped_id_45605;
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
					dropped_45605 = true;
					dropped_id_45605 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_45605) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj45602").trigger('SCActionDragDrop45605_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj45602_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45602_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45602").trigger("obj45602_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45602) {
				console.warn("de-queueing event obj45602." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45602").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45602_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45602").trigger("obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45602) {
				console.warn("de-queueing event obj45602." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45602").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj45602 
move_92679();
function move_92679() {
	window.obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_runningActionsCount = obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj45602");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 121;
	var moveY = 553;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_runningActionsCount = window.obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45602").trigger("obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45602) {
				console.warn("de-queueing event obj45602." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45602").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj45602_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45602_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45602").trigger("obj45602_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45602) {
				console.warn("de-queueing event obj45602." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45602").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45602_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45607();
function runjs_45607() {
	window.obj45602_droppedInsideTargetActions_runningActionsCount = obj45602_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45639").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45602_droppedInsideTargetActions_runningActionsCount = window.obj45602_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45602_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45602_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45602_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45602_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj45602_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45602_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45602").trigger("obj45602_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45602) {
				console.warn("de-queueing event obj45602." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45602").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45602_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_45611();
function switchText_45611() {
	window.obj45602_droppedInsideTargetActions_runningActionsCount = obj45602_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45613_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45613_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45613").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45613_content");
			setTimeout(function () {
				window.obj45602_droppedInsideTargetActions_runningActionsCount = window.obj45602_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45602_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45602_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45602_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45602_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45613 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45602_droppedInsideTargetActions_runningActionsCount = window.obj45602_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45602_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45602_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45602_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45602_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj45602_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45602_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45602").trigger("obj45602_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45602) {
				console.warn("de-queueing event obj45602." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45602").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45602_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_45608();
function runjs_45608() {
	window.obj45602_droppedInsideTargetActions_runningActionsCount = obj45602_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45639").css("border-color", "#058E3F"); $("#obj45639").css("border-width", "2px"); $("#obj45639").css("border-style", "solid"); $("#obj45639").css("border-radius", "10px"); $("#obj45639").css("-webkit-border-radius", "10px"); $("#obj45639").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45602_droppedInsideTargetActions_runningActionsCount = window.obj45602_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45602_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45602_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45602_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45602_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj45602_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45602_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45602").trigger("obj45602_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45602) {
				console.warn("de-queueing event obj45602." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45602").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45602_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj45637 
hide_45609();
function hide_45609() {
	var selector = "#obj45637";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45602_droppedInsideTargetActions_runningActionsCount = obj45602_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45602_droppedInsideTargetActions_runningActionsCount = window.obj45602_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45602_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45602_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45602_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45602_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45609(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45602_droppedInsideTargetActions_runningActionsCount = window.obj45602_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45602_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45602_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45602_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45602_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45602_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45602_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45602").trigger("obj45602_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45602) {
				console.warn("de-queueing event obj45602." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45602").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45602_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_45610();
function runjs_45610() {
	window.obj45602_droppedInsideTargetActions_runningActionsCount = obj45602_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45602").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45602_droppedInsideTargetActions_runningActionsCount = window.obj45602_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45602_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45602_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45602_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45602_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj45602_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45602_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45602").trigger("obj45602_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45602) {
				console.warn("de-queueing event obj45602." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45602").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45602_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj45617 
playAudio_45612();
function playAudio_45612() {
	window.obj45602_droppedInsideTargetActions_runningActionsCount = obj45602_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj45617")[0];
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
		    window.obj45602_droppedInsideTargetActions_runningActionsCount = window.obj45602_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45602_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45602_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45602_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45602_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45602_droppedInsideTargetActions_runningActionsCount = window.obj45602_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45602_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45602_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45602_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45602_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj45602_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45602_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45602").trigger("obj45602_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45602) {
				console.warn("de-queueing event obj45602." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45602").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45602_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90575();
function switchText_90575() {
	window.obj45602_droppedInsideTargetActions_runningActionsCount = obj45602_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45613_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45613_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45613").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45613_content");
			setTimeout(function () {
				window.obj45602_droppedInsideTargetActions_runningActionsCount = window.obj45602_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45602_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45602_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45602_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45602_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj45613 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45602_droppedInsideTargetActions_runningActionsCount = window.obj45602_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45602_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45602_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45602_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45602_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj45602_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45602_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45602").trigger("obj45602_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45602) {
				console.warn("de-queueing event obj45602." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45602").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45602_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj67470_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67470_onTap_activeActionGroupIndex = -1;
		$("#obj67470").trigger("obj67470_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67470) {
				console.warn("de-queueing event obj67470." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67470").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67470_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67470 
hide_67473();
function hide_67473() {
	var selector = "#obj67470";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67470_onTap_runningActionsCount = obj67470_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67470_onTap_runningActionsCount = window.obj67470_onTap_runningActionsCount - 1;
if (window.obj67470_onTap_runningActionsCount < 0) {
	window.obj67470_onTap_runningActionsCount = 0;
} else if (window.obj67470_onTap_runningActionsCount == 0) {
	obj67470_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67473(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67470_onTap_runningActionsCount = window.obj67470_onTap_runningActionsCount - 1;
if (window.obj67470_onTap_runningActionsCount < 0) {
	window.obj67470_onTap_runningActionsCount = 0;
} else if (window.obj67470_onTap_runningActionsCount == 0) {
	obj67470_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67476 
stopMovie_67472();
function stopMovie_67472() {
	window.obj67470_onTap_runningActionsCount = obj67470_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67476")[0];
	myVideo.pause();
	window.obj67470_onTap_runningActionsCount = window.obj67470_onTap_runningActionsCount - 1;
if (window.obj67470_onTap_runningActionsCount < 0) {
	window.obj67470_onTap_runningActionsCount = 0;
} else if (window.obj67470_onTap_runningActionsCount == 0) {
	obj67470_onTap_actionGroup1();
}
}
















};
obj67470_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67470_onTap_activeActionGroupIndex = -1;
		$("#obj67470").trigger("obj67470_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67470) {
				console.warn("de-queueing event obj67470." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67470").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67470_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67462
(function(){
	window.obj67470_onTap_runningActionsCount = obj67470_onTap_runningActionsCount + 1;

	var selector = "#obj67462";
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
					window.obj67470_onTap_runningActionsCount = window.obj67470_onTap_runningActionsCount - 1;
if (window.obj67470_onTap_runningActionsCount < 0) {
	window.obj67470_onTap_runningActionsCount = 0;
} else if (window.obj67470_onTap_runningActionsCount == 0) {
	obj67470_onTap_actionGroup2();
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
				window.obj67470_onTap_runningActionsCount = window.obj67470_onTap_runningActionsCount - 1;
if (window.obj67470_onTap_runningActionsCount < 0) {
	window.obj67470_onTap_runningActionsCount = 0;
} else if (window.obj67470_onTap_runningActionsCount == 0) {
	obj67470_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67470_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67470_onTap_activeActionGroupIndex = -1;
		$("#obj67470").trigger("obj67470_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67470) {
				console.warn("de-queueing event obj67470." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67470").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67470_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67476 
move_67475();
function move_67475() {
	window.obj67470_onTap_runningActionsCount = obj67470_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67476");
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
			window.obj67470_onTap_runningActionsCount = window.obj67470_onTap_runningActionsCount - 1;
if (window.obj67470_onTap_runningActionsCount < 0) {
	window.obj67470_onTap_runningActionsCount = 0;
} else if (window.obj67470_onTap_runningActionsCount == 0) {
	obj67470_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67470_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67470_onTap_activeActionGroupIndex = -1;
		$("#obj67470").trigger("obj67470_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67470) {
				console.warn("de-queueing event obj67470." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67470").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67470_onTap_activeActionGroupIndex = 3;
	





















};
obj67462_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67462_onTap_activeActionGroupIndex = -1;
		$("#obj67462").trigger("obj67462_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67462) {
				console.warn("de-queueing event obj67462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67462_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67462 
hide_67465();
function hide_67465() {
	var selector = "#obj67462";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67462_onTap_runningActionsCount = obj67462_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67462_onTap_runningActionsCount = window.obj67462_onTap_runningActionsCount - 1;
if (window.obj67462_onTap_runningActionsCount < 0) {
	window.obj67462_onTap_runningActionsCount = 0;
} else if (window.obj67462_onTap_runningActionsCount == 0) {
	obj67462_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67465(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67462_onTap_runningActionsCount = window.obj67462_onTap_runningActionsCount - 1;
if (window.obj67462_onTap_runningActionsCount < 0) {
	window.obj67462_onTap_runningActionsCount = 0;
} else if (window.obj67462_onTap_runningActionsCount == 0) {
	obj67462_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67476 
playPauseMovie_67464();
function playPauseMovie_67464() {
	window.obj67462_onTap_runningActionsCount = obj67462_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67476")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67462_onTap_runningActionsCount = window.obj67462_onTap_runningActionsCount - 1;
if (window.obj67462_onTap_runningActionsCount < 0) {
	window.obj67462_onTap_runningActionsCount = 0;
} else if (window.obj67462_onTap_runningActionsCount == 0) {
	obj67462_onTap_actionGroup1();
}
}

















};
obj67462_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67462_onTap_activeActionGroupIndex = -1;
		$("#obj67462").trigger("obj67462_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67462) {
				console.warn("de-queueing event obj67462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67462_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67470
(function(){
	window.obj67462_onTap_runningActionsCount = obj67462_onTap_runningActionsCount + 1;

	var selector = "#obj67470";
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
					window.obj67462_onTap_runningActionsCount = window.obj67462_onTap_runningActionsCount - 1;
if (window.obj67462_onTap_runningActionsCount < 0) {
	window.obj67462_onTap_runningActionsCount = 0;
} else if (window.obj67462_onTap_runningActionsCount == 0) {
	obj67462_onTap_actionGroup2();
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
				window.obj67462_onTap_runningActionsCount = window.obj67462_onTap_runningActionsCount - 1;
if (window.obj67462_onTap_runningActionsCount < 0) {
	window.obj67462_onTap_runningActionsCount = 0;
} else if (window.obj67462_onTap_runningActionsCount == 0) {
	obj67462_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67462_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67462_onTap_activeActionGroupIndex = -1;
		$("#obj67462").trigger("obj67462_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67462) {
				console.warn("de-queueing event obj67462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67462_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67476 
move_67467();
function move_67467() {
	window.obj67462_onTap_runningActionsCount = obj67462_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67476");
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
			window.obj67462_onTap_runningActionsCount = window.obj67462_onTap_runningActionsCount - 1;
if (window.obj67462_onTap_runningActionsCount < 0) {
	window.obj67462_onTap_runningActionsCount = 0;
} else if (window.obj67462_onTap_runningActionsCount == 0) {
	obj67462_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67462_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67462_onTap_activeActionGroupIndex = -1;
		$("#obj67462").trigger("obj67462_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67462) {
				console.warn("de-queueing event obj67462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67462_onTap_activeActionGroupIndex = 3;
	





















};
obj88729_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88729_onTap_activeActionGroupIndex = -1;
		$("#obj88729").trigger("obj88729_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88729) {
				console.warn("de-queueing event obj88729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88729_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88734 
stopAudio_88731();
function stopAudio_88731() {
	window.obj88729_onTap_runningActionsCount = obj88729_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88734")[0];
	myAudio.pause();
	window.obj88729_onTap_runningActionsCount = window.obj88729_onTap_runningActionsCount - 1;
if (window.obj88729_onTap_runningActionsCount < 0) {
	window.obj88729_onTap_runningActionsCount = 0;
} else if (window.obj88729_onTap_runningActionsCount == 0) {
	obj88729_onTap_actionGroup1();
}
}








};
obj88729_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88729_onTap_activeActionGroupIndex = -1;
		$("#obj88729").trigger("obj88729_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88729) {
				console.warn("de-queueing event obj88729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88729_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88729 
hide_88732();
function hide_88732() {
	var selector = "#obj88729";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88729_onTap_runningActionsCount = obj88729_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88729_onTap_runningActionsCount = window.obj88729_onTap_runningActionsCount - 1;
if (window.obj88729_onTap_runningActionsCount < 0) {
	window.obj88729_onTap_runningActionsCount = 0;
} else if (window.obj88729_onTap_runningActionsCount == 0) {
	obj88729_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88732(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88729_onTap_runningActionsCount = window.obj88729_onTap_runningActionsCount - 1;
if (window.obj88729_onTap_runningActionsCount < 0) {
	window.obj88729_onTap_runningActionsCount = 0;
} else if (window.obj88729_onTap_runningActionsCount == 0) {
	obj88729_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88729_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88729_onTap_activeActionGroupIndex = -1;
		$("#obj88729").trigger("obj88729_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88729) {
				console.warn("de-queueing event obj88729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88729_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88724
(function(){
	window.obj88729_onTap_runningActionsCount = obj88729_onTap_runningActionsCount + 1;

	var selector = "#obj88724";
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
					window.obj88729_onTap_runningActionsCount = window.obj88729_onTap_runningActionsCount - 1;
if (window.obj88729_onTap_runningActionsCount < 0) {
	window.obj88729_onTap_runningActionsCount = 0;
} else if (window.obj88729_onTap_runningActionsCount == 0) {
	obj88729_onTap_actionGroup3();
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
				window.obj88729_onTap_runningActionsCount = window.obj88729_onTap_runningActionsCount - 1;
if (window.obj88729_onTap_runningActionsCount < 0) {
	window.obj88729_onTap_runningActionsCount = 0;
} else if (window.obj88729_onTap_runningActionsCount == 0) {
	obj88729_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88729_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88729_onTap_activeActionGroupIndex = -1;
		$("#obj88729").trigger("obj88729_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88729) {
				console.warn("de-queueing event obj88729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88729_onTap_activeActionGroupIndex = 3;
	





















};
obj88724_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88724_onTap_activeActionGroupIndex = -1;
		$("#obj88724").trigger("obj88724_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88724) {
				console.warn("de-queueing event obj88724." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88724").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88724_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88724 
hide_88726();
function hide_88726() {
	var selector = "#obj88724";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88724_onTap_runningActionsCount = obj88724_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88724_onTap_runningActionsCount = window.obj88724_onTap_runningActionsCount - 1;
if (window.obj88724_onTap_runningActionsCount < 0) {
	window.obj88724_onTap_runningActionsCount = 0;
} else if (window.obj88724_onTap_runningActionsCount == 0) {
	obj88724_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88726(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88724_onTap_runningActionsCount = window.obj88724_onTap_runningActionsCount - 1;
if (window.obj88724_onTap_runningActionsCount < 0) {
	window.obj88724_onTap_runningActionsCount = 0;
} else if (window.obj88724_onTap_runningActionsCount == 0) {
	obj88724_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88724_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88724_onTap_activeActionGroupIndex = -1;
		$("#obj88724").trigger("obj88724_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88724) {
				console.warn("de-queueing event obj88724." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88724").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88724_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88729
(function(){
	window.obj88724_onTap_runningActionsCount = obj88724_onTap_runningActionsCount + 1;

	var selector = "#obj88729";
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
					window.obj88724_onTap_runningActionsCount = window.obj88724_onTap_runningActionsCount - 1;
if (window.obj88724_onTap_runningActionsCount < 0) {
	window.obj88724_onTap_runningActionsCount = 0;
} else if (window.obj88724_onTap_runningActionsCount == 0) {
	obj88724_onTap_actionGroup2();
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
				window.obj88724_onTap_runningActionsCount = window.obj88724_onTap_runningActionsCount - 1;
if (window.obj88724_onTap_runningActionsCount < 0) {
	window.obj88724_onTap_runningActionsCount = 0;
} else if (window.obj88724_onTap_runningActionsCount == 0) {
	obj88724_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88724_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88724_onTap_activeActionGroupIndex = -1;
		$("#obj88724").trigger("obj88724_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88724) {
				console.warn("de-queueing event obj88724." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88724").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88724_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88734 
playAudio_88728();
function playAudio_88728() {
	window.obj88724_onTap_runningActionsCount = obj88724_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88734")[0];
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
		    window.obj88724_onTap_runningActionsCount = window.obj88724_onTap_runningActionsCount - 1;
if (window.obj88724_onTap_runningActionsCount < 0) {
	window.obj88724_onTap_runningActionsCount = 0;
} else if (window.obj88724_onTap_runningActionsCount == 0) {
	obj88724_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88724_onTap_runningActionsCount = window.obj88724_onTap_runningActionsCount - 1;
if (window.obj88724_onTap_runningActionsCount < 0) {
	window.obj88724_onTap_runningActionsCount = 0;
} else if (window.obj88724_onTap_runningActionsCount == 0) {
	obj88724_onTap_actionGroup3();
}
	}
}









};
obj88724_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88724_onTap_activeActionGroupIndex = -1;
		$("#obj88724").trigger("obj88724_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88724) {
				console.warn("de-queueing event obj88724." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88724").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88724_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj45658: Event Touch Down
 *
 */
$("#obj45658").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj45658_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45658_onTap is still running");
	return;
}
var obj45658_onTap_runningActionsCount = 0;
var obj45658_onTap_loopCount = 0;
obj45658_onTap_actionGroup0();
});










/*
 *
 *   obj45655: Event Touch Down
 *
 */
$("#obj45655").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj45655_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45655_onTap is still running");
	return;
}
var obj45655_onTap_runningActionsCount = 0;
var obj45655_onTap_loopCount = 0;
obj45655_onTap_actionGroup0();
});










/*
 *
 *   obj45651: Event Touch Down
 *
 */
$("#obj45651").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj45651_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45651_onTap is still running");
	return;
}
var obj45651_onTap_runningActionsCount = 0;
var obj45651_onTap_loopCount = 0;
obj45651_onTap_actionGroup0();
});

















































































/*
 *
 *   obj45619: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj45619");
	var winTarget = document.getElementById("obj45619");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj45619").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj45619_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj45619_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj45619_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45619_onTouchDown is still running");
	return;
}
var obj45619_onTouchDown_runningActionsCount = 0;
var obj45619_onTouchDown_loopCount = 0;
obj45619_onTouchDown_actionGroup0();
});



/*
 *
 *   obj45619: Event SCActionDragDrop45622_droppedOutsideTargetActions
 *
 */
$("#obj45619").bind("SCActionDragDrop45622_droppedOutsideTargetActions", function(event) {
	if (window.obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45619_SCActionDragDrop45622_droppedOutsideTargetActions is still running");
	return;
}
var obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_loopCount = 0;
obj45619_SCActionDragDrop45622_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj45619: Event droppedInsideTargetActions
 *
 */
$("#obj45619").bind("droppedInsideTargetActions", function(event) {
	if (window.obj45619_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45619_droppedInsideTargetActions is still running");
	return;
}
var obj45619_droppedInsideTargetActions_runningActionsCount = 0;
var obj45619_droppedInsideTargetActions_loopCount = 0;
obj45619_droppedInsideTargetActions_actionGroup0();
});




































/*
 *
 *   obj45602: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj45602");
	var winTarget = document.getElementById("obj45602");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj45602").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj45602_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj45602_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj45602_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45602_onTouchDown is still running");
	return;
}
var obj45602_onTouchDown_runningActionsCount = 0;
var obj45602_onTouchDown_loopCount = 0;
obj45602_onTouchDown_actionGroup0();
});



/*
 *
 *   obj45602: Event SCActionDragDrop45605_droppedOutsideTargetActions
 *
 */
$("#obj45602").bind("SCActionDragDrop45605_droppedOutsideTargetActions", function(event) {
	if (window.obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45602_SCActionDragDrop45605_droppedOutsideTargetActions is still running");
	return;
}
var obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_loopCount = 0;
obj45602_SCActionDragDrop45605_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj45602: Event droppedInsideTargetActions
 *
 */
$("#obj45602").bind("droppedInsideTargetActions", function(event) {
	if (window.obj45602_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45602_droppedInsideTargetActions is still running");
	return;
}
var obj45602_droppedInsideTargetActions_runningActionsCount = 0;
var obj45602_droppedInsideTargetActions_loopCount = 0;
obj45602_droppedInsideTargetActions_actionGroup0();
});

























/*
 *
 *   obj67470: Event Touch Down
 *
 */
$("#obj67470").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67470_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67470_onTap is still running");
	return;
}
var obj67470_onTap_runningActionsCount = 0;
var obj67470_onTap_loopCount = 0;
obj67470_onTap_actionGroup0();
});










/*
 *
 *   obj67462: Event Touch Down
 *
 */
$("#obj67462").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67462_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67462_onTap is still running");
	return;
}
var obj67462_onTap_runningActionsCount = 0;
var obj67462_onTap_loopCount = 0;
obj67462_onTap_actionGroup0();
});










/*
 *
 *   obj88729: Event Touch Down
 *
 */
$("#obj88729").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88729_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88729_onTap is still running");
	return;
}
var obj88729_onTap_runningActionsCount = 0;
var obj88729_onTap_loopCount = 0;
obj88729_onTap_actionGroup0();
});










/*
 *
 *   obj88724: Event Touch Down
 *
 */
$("#obj88724").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88724_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88724_onTap is still running");
	return;
}
var obj88724_onTap_runningActionsCount = 0;
var obj88724_onTap_loopCount = 0;
obj88724_onTap_actionGroup0();
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
	
$("#obj45674").trigger('SCEventShow');
$("#obj45658").trigger('SCEventShow');
$("#obj45655").trigger('SCEventShow');
$("#obj45651").trigger('SCEventShow');
$("#obj45649").trigger('SCEventShow');
$("#obj45647").trigger('SCEventShow');
$("#obj45645").trigger('SCEventShow');
$("#obj45643").trigger('SCEventShow');
$("#obj45641").trigger('SCEventShow');
$("#obj45639").trigger('SCEventShow');
$("#obj45637").trigger('SCEventShow');
$("#obj45619").trigger('SCEventShow');
$("#obj45617").trigger('SCEventShow');
$("#obj45615").trigger('SCEventShow');
$("#obj45613").trigger('SCEventShow');
$("#obj45602").trigger('SCEventShow');
$("#obj45600").trigger('SCEventShow');
$("#obj45598").trigger('SCEventShow');
$("#obj67470").trigger('SCEventShow');
$("#obj67462").trigger('SCEventShow');
$("#obj88729").trigger('SCEventShow');
$("#obj88724").trigger('SCEventShow');
$("#obj88734").trigger('SCEventShow');
$("#obj94937").trigger('SCEventShow');
$("#obj67476").trigger('SCEventShow');
	
});