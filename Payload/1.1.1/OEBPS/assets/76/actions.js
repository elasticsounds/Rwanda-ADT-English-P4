pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 18547;
pubcoder.page.title = pubcoder.page.title || "76";
pubcoder.page.number = pubcoder.page.number || 76;
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
var obj75986_onTap_activeActionGroupIndex = -1;
var obj75986_onTap_runningActionsCount = 0;
var obj75986_onTap_loopCount = 0;
var obj75983_onTap_activeActionGroupIndex = -1;
var obj75983_onTap_runningActionsCount = 0;
var obj75983_onTap_loopCount = 0;
var obj75979_onTap_activeActionGroupIndex = -1;
var obj75979_onTap_runningActionsCount = 0;
var obj75979_onTap_loopCount = 0;
var obj75948_onDrag_activeActionGroupIndex = -1;
var obj75948_onDrag_runningActionsCount = 0;
var obj75948_onDrag_loopCount = 0;
var obj75948_onTouchDown_activeActionGroupIndex = -1;
var obj75948_onTouchDown_runningActionsCount = 0;
var obj75948_onTouchDown_loopCount = 0;
var obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_loopCount = 0;
var obj75948_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj75948_droppedInsideTargetActions_runningActionsCount = 0;
var obj75948_droppedInsideTargetActions_loopCount = 0;
var obj75927_onDrag_activeActionGroupIndex = -1;
var obj75927_onDrag_runningActionsCount = 0;
var obj75927_onDrag_loopCount = 0;
var obj75927_onTouchDown_activeActionGroupIndex = -1;
var obj75927_onTouchDown_runningActionsCount = 0;
var obj75927_onTouchDown_loopCount = 0;
var obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_loopCount = 0;
var obj75927_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj75927_droppedInsideTargetActions_runningActionsCount = 0;
var obj75927_droppedInsideTargetActions_loopCount = 0;
var obj75909_onTap_activeActionGroupIndex = -1;
var obj75909_onTap_runningActionsCount = 0;
var obj75909_onTap_loopCount = 0;
var obj75901_onTap_activeActionGroupIndex = -1;
var obj75901_onTap_runningActionsCount = 0;
var obj75901_onTap_loopCount = 0;
var obj87759_onTap_activeActionGroupIndex = -1;
var obj87759_onTap_runningActionsCount = 0;
var obj87759_onTap_loopCount = 0;
var obj87754_onTap_activeActionGroupIndex = -1;
var obj87754_onTap_runningActionsCount = 0;
var obj87754_onTap_loopCount = 0;
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
		
obj75986_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75986_onTap_activeActionGroupIndex = -1;
		$("#obj75986").trigger("obj75986_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75986) {
				console.warn("de-queueing event obj75986." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75986").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75986_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75988();
function goToPage_75988() {
	window.obj75986_onTap_runningActionsCount = obj75986_onTap_runningActionsCount + 1;
	$("#anchor448")[0].click();
	window.obj75986_onTap_runningActionsCount = window.obj75986_onTap_runningActionsCount - 1;
if (window.obj75986_onTap_runningActionsCount < 0) {
	window.obj75986_onTap_runningActionsCount = 0;
} else if (window.obj75986_onTap_runningActionsCount == 0) {
	obj75986_onTap_actionGroup1();
}
}





















};
obj75986_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75986_onTap_activeActionGroupIndex = -1;
		$("#obj75986").trigger("obj75986_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75986) {
				console.warn("de-queueing event obj75986." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75986").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75986_onTap_activeActionGroupIndex = 1;
	





















};
obj75983_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75983_onTap_activeActionGroupIndex = -1;
		$("#obj75983").trigger("obj75983_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75983) {
				console.warn("de-queueing event obj75983." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75983").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75983_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75985();
function goToPage_75985() {
	window.obj75983_onTap_runningActionsCount = obj75983_onTap_runningActionsCount + 1;
	$("#anchor449")[0].click();
	window.obj75983_onTap_runningActionsCount = window.obj75983_onTap_runningActionsCount - 1;
if (window.obj75983_onTap_runningActionsCount < 0) {
	window.obj75983_onTap_runningActionsCount = 0;
} else if (window.obj75983_onTap_runningActionsCount == 0) {
	obj75983_onTap_actionGroup1();
}
}





















};
obj75983_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75983_onTap_activeActionGroupIndex = -1;
		$("#obj75983").trigger("obj75983_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75983) {
				console.warn("de-queueing event obj75983." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75983").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75983_onTap_activeActionGroupIndex = 1;
	





















};
obj75979_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75979_onTap_activeActionGroupIndex = -1;
		$("#obj75979").trigger("obj75979_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75979) {
				console.warn("de-queueing event obj75979." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75979").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75979_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75981();
function goToPage_75981() {
	window.obj75979_onTap_runningActionsCount = obj75979_onTap_runningActionsCount + 1;
	$("#anchor450")[0].click();
	window.obj75979_onTap_runningActionsCount = window.obj75979_onTap_runningActionsCount - 1;
if (window.obj75979_onTap_runningActionsCount < 0) {
	window.obj75979_onTap_runningActionsCount = 0;
} else if (window.obj75979_onTap_runningActionsCount == 0) {
	obj75979_onTap_actionGroup1();
}
}





















};
obj75979_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75979_onTap_activeActionGroupIndex = -1;
		$("#obj75979").trigger("obj75979_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75979) {
				console.warn("de-queueing event obj75979." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75979").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75979_onTap_activeActionGroupIndex = 1;
	





















};
obj75948_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75948_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75948").trigger("obj75948_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75948) {
				console.warn("de-queueing event obj75948." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75948").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75948_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj75948");
//	action: dragDrop
//	target: obj75948 
dragDrop_75951();
function dragDrop_75951() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj75948_onTouchDown_runningActionsCount = obj75948_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj75948');
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
	  	containerNode = $('#obj75971');
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
    	window.obj75948_onTouchDown_runningActionsCount = window.obj75948_onTouchDown_runningActionsCount - 1;
if (window.obj75948_onTouchDown_runningActionsCount < 0) {
	window.obj75948_onTouchDown_runningActionsCount = 0;
} else if (window.obj75948_onTouchDown_runningActionsCount == 0) {
	obj75948_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj75967");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_75951 = false;
    	var dropped_id_75951;
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
					dropped_75951 = true;
					dropped_id_75951 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_75951) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj75948").trigger('SCActionDragDrop75951_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj75948_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75948_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75948").trigger("obj75948_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75948) {
				console.warn("de-queueing event obj75948." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75948").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75948_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75948").trigger("obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75948) {
				console.warn("de-queueing event obj75948." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75948").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj75948 
move_92334();
function move_92334() {
	window.obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_runningActionsCount = obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj75948");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 58;
	var moveY = 486;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_runningActionsCount = window.obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75948").trigger("obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75948) {
				console.warn("de-queueing event obj75948." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75948").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj75948_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75948").trigger("obj75948_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75948) {
				console.warn("de-queueing event obj75948." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75948").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75953();
function runjs_75953() {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = obj75948_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75967").css("border-color", "#C00000"); $("#obj75967").css("border-width", "2px"); $("#obj75967").css("border-style", "solid"); $("#obj75967").css("border-radius", "10px"); $("#obj75967").css("-webkit-border-radius", "10px"); $("#obj75967").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75948_droppedInsideTargetActions_runningActionsCount = window.obj75948_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75948_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75948_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75948_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj75948_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75948").trigger("obj75948_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75948) {
				console.warn("de-queueing event obj75948." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75948").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj75965 
hide_75954();
function hide_75954() {
	var selector = "#obj75965";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75948_droppedInsideTargetActions_runningActionsCount = obj75948_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75948_droppedInsideTargetActions_runningActionsCount = window.obj75948_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75948_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75948_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75948_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75954(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75948_droppedInsideTargetActions_runningActionsCount = window.obj75948_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75948_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75948_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75948_droppedInsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75948_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75948").trigger("obj75948_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75948) {
				console.warn("de-queueing event obj75948." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75948").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_75955();
function runjs_75955() {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = obj75948_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75967").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75948_droppedInsideTargetActions_runningActionsCount = window.obj75948_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75948_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75948_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75948_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj75948_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75948").trigger("obj75948_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75948) {
				console.warn("de-queueing event obj75948." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75948").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_75956();
function switchText_75956() {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = obj75948_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75942_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75942_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75942").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75942_content");
			setTimeout(function () {
				window.obj75948_droppedInsideTargetActions_runningActionsCount = window.obj75948_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75948_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75948_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75948_droppedInsideTargetActions_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj75942 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75948_droppedInsideTargetActions_runningActionsCount = window.obj75948_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75948_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75948_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75948_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
	}
}






};
obj75948_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75948").trigger("obj75948_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75948) {
				console.warn("de-queueing event obj75948." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75948").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj75948 
move_75957();
function move_75957() {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = obj75948_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj75948");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 58;
	var moveY = 486;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75948_droppedInsideTargetActions_runningActionsCount = window.obj75948_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75948_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75948_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75948_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	});
}



















};
obj75948_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75948").trigger("obj75948_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75948) {
				console.warn("de-queueing event obj75948." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75948").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_75958();
function runjs_75958() {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = obj75948_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75967").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj75948_droppedInsideTargetActions_runningActionsCount = window.obj75948_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75948_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75948_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75948_droppedInsideTargetActions_actionGroup6();
}
	}, 1);
}







};
obj75948_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75948").trigger("obj75948_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75948) {
				console.warn("de-queueing event obj75948." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75948").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_75959();
function runjs_75959() {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = obj75948_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75967").css("border-color", "#000000"); $("#obj75967").css("border-width", "1px"); $("#obj75967").css("border-style", "solid"); $("#obj75967").css("border-radius", "10px"); $("#obj75967").css("-webkit-border-radius", "10px"); $("#obj75967").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75948_droppedInsideTargetActions_runningActionsCount = window.obj75948_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75948_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75948_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75948_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj75948_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75948").trigger("obj75948_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75948) {
				console.warn("de-queueing event obj75948." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75948").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = 7;
	

//	action: show 
//	selector: #obj75965
(function(){
	window.obj75948_droppedInsideTargetActions_runningActionsCount = obj75948_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj75965";
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
					window.obj75948_droppedInsideTargetActions_runningActionsCount = window.obj75948_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75948_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75948_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75948_droppedInsideTargetActions_actionGroup8();
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
				window.obj75948_droppedInsideTargetActions_runningActionsCount = window.obj75948_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75948_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75948_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75948_droppedInsideTargetActions_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75948_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75948").trigger("obj75948_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75948) {
				console.warn("de-queueing event obj75948." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75948").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_75961();
function runjs_75961() {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = obj75948_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75948").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj75948_droppedInsideTargetActions_runningActionsCount = window.obj75948_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75948_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75948_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75948_droppedInsideTargetActions_actionGroup9();
}
	}, 1);
}







};
obj75948_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75948").trigger("obj75948_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75948) {
				console.warn("de-queueing event obj75948." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75948").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_75962();
function runjs_75962() {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = obj75948_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75948").css("border-color", "rgba(0,0,0,0)"); $("#obj75948").css("border-width", "0px"); $("#obj75948").css("border-style", "solid"); $("#obj75948").css("border-radius", "10px"); $("#obj75948").css("-webkit-border-radius", "10px"); $("#obj75948").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75948_droppedInsideTargetActions_runningActionsCount = window.obj75948_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75948_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75948_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75948_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj75948_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75948").trigger("obj75948_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75948) {
				console.warn("de-queueing event obj75948." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75948").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj75938 
playAudio_75963();
function playAudio_75963() {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = obj75948_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj75938")[0];
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
		    window.obj75948_droppedInsideTargetActions_runningActionsCount = window.obj75948_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75948_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75948_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75948_droppedInsideTargetActions_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75948_droppedInsideTargetActions_runningActionsCount = window.obj75948_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75948_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75948_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75948_droppedInsideTargetActions_actionGroup11();
}
	}
}









};
obj75948_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75948").trigger("obj75948_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75948) {
				console.warn("de-queueing event obj75948." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75948").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_75964();
function switchText_75964() {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = obj75948_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75942_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75942_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75942").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75942_content");
			setTimeout(function () {
				window.obj75948_droppedInsideTargetActions_runningActionsCount = window.obj75948_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75948_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75948_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75948_droppedInsideTargetActions_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj75942 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75948_droppedInsideTargetActions_runningActionsCount = window.obj75948_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75948_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75948_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75948_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75948_droppedInsideTargetActions_actionGroup12();
}
		}, 1);
	}
}






};
obj75948_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75948").trigger("obj75948_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75948) {
				console.warn("de-queueing event obj75948." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75948").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75948_droppedInsideTargetActions_activeActionGroupIndex = 12;
	





















};
obj75927_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75927_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75927").trigger("obj75927_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75927) {
				console.warn("de-queueing event obj75927." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75927").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75927_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj75927");
//	action: dragDrop
//	target: obj75927 
dragDrop_75930();
function dragDrop_75930() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj75927_onTouchDown_runningActionsCount = obj75927_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj75927');
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
	  	containerNode = $('#obj75971');
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
    	window.obj75927_onTouchDown_runningActionsCount = window.obj75927_onTouchDown_runningActionsCount - 1;
if (window.obj75927_onTouchDown_runningActionsCount < 0) {
	window.obj75927_onTouchDown_runningActionsCount = 0;
} else if (window.obj75927_onTouchDown_runningActionsCount == 0) {
	obj75927_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj75967");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_75930 = false;
    	var dropped_id_75930;
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
					dropped_75930 = true;
					dropped_id_75930 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_75930) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj75927").trigger('SCActionDragDrop75930_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj75927_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75927_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75927").trigger("obj75927_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75927) {
				console.warn("de-queueing event obj75927." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75927").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75927_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75927").trigger("obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75927) {
				console.warn("de-queueing event obj75927." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75927").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj75927 
move_92336();
function move_92336() {
	window.obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_runningActionsCount = obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj75927");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 357;
	var moveY = 492;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_runningActionsCount = window.obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75927").trigger("obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75927) {
				console.warn("de-queueing event obj75927." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75927").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj75927_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75927_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75927").trigger("obj75927_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75927) {
				console.warn("de-queueing event obj75927." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75927").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75927_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75932();
function runjs_75932() {
	window.obj75927_droppedInsideTargetActions_runningActionsCount = obj75927_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75967").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75927_droppedInsideTargetActions_runningActionsCount = window.obj75927_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75927_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75927_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75927_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75927_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj75927_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75927_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75927").trigger("obj75927_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75927) {
				console.warn("de-queueing event obj75927." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75927").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75927_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_75936();
function switchText_75936() {
	window.obj75927_droppedInsideTargetActions_runningActionsCount = obj75927_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75942_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75942_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75942").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75942_content");
			setTimeout(function () {
				window.obj75927_droppedInsideTargetActions_runningActionsCount = window.obj75927_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75927_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75927_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75927_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75927_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj75942 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75927_droppedInsideTargetActions_runningActionsCount = window.obj75927_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75927_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75927_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75927_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75927_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj75927_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75927_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75927").trigger("obj75927_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75927) {
				console.warn("de-queueing event obj75927." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75927").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75927_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_75933();
function runjs_75933() {
	window.obj75927_droppedInsideTargetActions_runningActionsCount = obj75927_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75967").css("border-color", "#058E3F"); $("#obj75967").css("border-width", "2px"); $("#obj75967").css("border-style", "solid"); $("#obj75967").css("border-radius", "10px"); $("#obj75967").css("-webkit-border-radius", "10px"); $("#obj75967").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75927_droppedInsideTargetActions_runningActionsCount = window.obj75927_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75927_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75927_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75927_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75927_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj75927_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75927_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75927").trigger("obj75927_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75927) {
				console.warn("de-queueing event obj75927." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75927").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75927_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj75965 
hide_75934();
function hide_75934() {
	var selector = "#obj75965";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75927_droppedInsideTargetActions_runningActionsCount = obj75927_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75927_droppedInsideTargetActions_runningActionsCount = window.obj75927_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75927_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75927_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75927_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75927_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75934(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75927_droppedInsideTargetActions_runningActionsCount = window.obj75927_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75927_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75927_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75927_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75927_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75927_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75927_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75927").trigger("obj75927_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75927) {
				console.warn("de-queueing event obj75927." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75927").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75927_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_75935();
function runjs_75935() {
	window.obj75927_droppedInsideTargetActions_runningActionsCount = obj75927_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75927").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75927_droppedInsideTargetActions_runningActionsCount = window.obj75927_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75927_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75927_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75927_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75927_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj75927_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75927_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75927").trigger("obj75927_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75927) {
				console.warn("de-queueing event obj75927." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75927").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75927_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj75946 
playAudio_75937();
function playAudio_75937() {
	window.obj75927_droppedInsideTargetActions_runningActionsCount = obj75927_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj75946")[0];
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
		    window.obj75927_droppedInsideTargetActions_runningActionsCount = window.obj75927_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75927_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75927_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75927_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75927_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75927_droppedInsideTargetActions_runningActionsCount = window.obj75927_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75927_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75927_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75927_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75927_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj75927_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75927_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75927").trigger("obj75927_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75927) {
				console.warn("de-queueing event obj75927." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75927").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75927_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90266();
function switchText_90266() {
	window.obj75927_droppedInsideTargetActions_runningActionsCount = obj75927_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75942_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75942_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75942").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75942_content");
			setTimeout(function () {
				window.obj75927_droppedInsideTargetActions_runningActionsCount = window.obj75927_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75927_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75927_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75927_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75927_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj75942 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75927_droppedInsideTargetActions_runningActionsCount = window.obj75927_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75927_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75927_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75927_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75927_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj75927_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75927_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75927").trigger("obj75927_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75927) {
				console.warn("de-queueing event obj75927." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75927").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75927_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj75909_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75909_onTap_activeActionGroupIndex = -1;
		$("#obj75909").trigger("obj75909_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75909) {
				console.warn("de-queueing event obj75909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75909_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj75909 
hide_75912();
function hide_75912() {
	var selector = "#obj75909";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75909_onTap_runningActionsCount = obj75909_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75909_onTap_runningActionsCount = window.obj75909_onTap_runningActionsCount - 1;
if (window.obj75909_onTap_runningActionsCount < 0) {
	window.obj75909_onTap_runningActionsCount = 0;
} else if (window.obj75909_onTap_runningActionsCount == 0) {
	obj75909_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75912(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75909_onTap_runningActionsCount = window.obj75909_onTap_runningActionsCount - 1;
if (window.obj75909_onTap_runningActionsCount < 0) {
	window.obj75909_onTap_runningActionsCount = 0;
} else if (window.obj75909_onTap_runningActionsCount == 0) {
	obj75909_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj75899 
stopMovie_75911();
function stopMovie_75911() {
	window.obj75909_onTap_runningActionsCount = obj75909_onTap_runningActionsCount + 1;
	var myVideo = $("#obj75899")[0];
	myVideo.pause();
	window.obj75909_onTap_runningActionsCount = window.obj75909_onTap_runningActionsCount - 1;
if (window.obj75909_onTap_runningActionsCount < 0) {
	window.obj75909_onTap_runningActionsCount = 0;
} else if (window.obj75909_onTap_runningActionsCount == 0) {
	obj75909_onTap_actionGroup1();
}
}
















};
obj75909_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75909_onTap_activeActionGroupIndex = -1;
		$("#obj75909").trigger("obj75909_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75909) {
				console.warn("de-queueing event obj75909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75909_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj75901
(function(){
	window.obj75909_onTap_runningActionsCount = obj75909_onTap_runningActionsCount + 1;

	var selector = "#obj75901";
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
					window.obj75909_onTap_runningActionsCount = window.obj75909_onTap_runningActionsCount - 1;
if (window.obj75909_onTap_runningActionsCount < 0) {
	window.obj75909_onTap_runningActionsCount = 0;
} else if (window.obj75909_onTap_runningActionsCount == 0) {
	obj75909_onTap_actionGroup2();
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
				window.obj75909_onTap_runningActionsCount = window.obj75909_onTap_runningActionsCount - 1;
if (window.obj75909_onTap_runningActionsCount < 0) {
	window.obj75909_onTap_runningActionsCount = 0;
} else if (window.obj75909_onTap_runningActionsCount == 0) {
	obj75909_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75909_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75909_onTap_activeActionGroupIndex = -1;
		$("#obj75909").trigger("obj75909_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75909) {
				console.warn("de-queueing event obj75909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75909_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj75899 
move_75914();
function move_75914() {
	window.obj75909_onTap_runningActionsCount = obj75909_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj75899");
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
			window.obj75909_onTap_runningActionsCount = window.obj75909_onTap_runningActionsCount - 1;
if (window.obj75909_onTap_runningActionsCount < 0) {
	window.obj75909_onTap_runningActionsCount = 0;
} else if (window.obj75909_onTap_runningActionsCount == 0) {
	obj75909_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj75909_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75909_onTap_activeActionGroupIndex = -1;
		$("#obj75909").trigger("obj75909_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75909) {
				console.warn("de-queueing event obj75909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75909_onTap_activeActionGroupIndex = 3;
	





















};
obj75901_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75901_onTap_activeActionGroupIndex = -1;
		$("#obj75901").trigger("obj75901_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75901) {
				console.warn("de-queueing event obj75901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75901_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj75901 
hide_75904();
function hide_75904() {
	var selector = "#obj75901";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75901_onTap_runningActionsCount = obj75901_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75901_onTap_runningActionsCount = window.obj75901_onTap_runningActionsCount - 1;
if (window.obj75901_onTap_runningActionsCount < 0) {
	window.obj75901_onTap_runningActionsCount = 0;
} else if (window.obj75901_onTap_runningActionsCount == 0) {
	obj75901_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75904(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75901_onTap_runningActionsCount = window.obj75901_onTap_runningActionsCount - 1;
if (window.obj75901_onTap_runningActionsCount < 0) {
	window.obj75901_onTap_runningActionsCount = 0;
} else if (window.obj75901_onTap_runningActionsCount == 0) {
	obj75901_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj75899 
playPauseMovie_75903();
function playPauseMovie_75903() {
	window.obj75901_onTap_runningActionsCount = obj75901_onTap_runningActionsCount + 1;
	var myVideo = $("#obj75899")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj75901_onTap_runningActionsCount = window.obj75901_onTap_runningActionsCount - 1;
if (window.obj75901_onTap_runningActionsCount < 0) {
	window.obj75901_onTap_runningActionsCount = 0;
} else if (window.obj75901_onTap_runningActionsCount == 0) {
	obj75901_onTap_actionGroup1();
}
}

















};
obj75901_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75901_onTap_activeActionGroupIndex = -1;
		$("#obj75901").trigger("obj75901_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75901) {
				console.warn("de-queueing event obj75901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75901_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj75909
(function(){
	window.obj75901_onTap_runningActionsCount = obj75901_onTap_runningActionsCount + 1;

	var selector = "#obj75909";
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
					window.obj75901_onTap_runningActionsCount = window.obj75901_onTap_runningActionsCount - 1;
if (window.obj75901_onTap_runningActionsCount < 0) {
	window.obj75901_onTap_runningActionsCount = 0;
} else if (window.obj75901_onTap_runningActionsCount == 0) {
	obj75901_onTap_actionGroup2();
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
				window.obj75901_onTap_runningActionsCount = window.obj75901_onTap_runningActionsCount - 1;
if (window.obj75901_onTap_runningActionsCount < 0) {
	window.obj75901_onTap_runningActionsCount = 0;
} else if (window.obj75901_onTap_runningActionsCount == 0) {
	obj75901_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75901_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75901_onTap_activeActionGroupIndex = -1;
		$("#obj75901").trigger("obj75901_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75901) {
				console.warn("de-queueing event obj75901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75901_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj75899 
move_75906();
function move_75906() {
	window.obj75901_onTap_runningActionsCount = obj75901_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj75899");
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
			window.obj75901_onTap_runningActionsCount = window.obj75901_onTap_runningActionsCount - 1;
if (window.obj75901_onTap_runningActionsCount < 0) {
	window.obj75901_onTap_runningActionsCount = 0;
} else if (window.obj75901_onTap_runningActionsCount == 0) {
	obj75901_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj75901_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75901_onTap_activeActionGroupIndex = -1;
		$("#obj75901").trigger("obj75901_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75901) {
				console.warn("de-queueing event obj75901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75901_onTap_activeActionGroupIndex = 3;
	





















};
obj87759_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87759_onTap_activeActionGroupIndex = -1;
		$("#obj87759").trigger("obj87759_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87759) {
				console.warn("de-queueing event obj87759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87759_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87764 
stopAudio_87761();
function stopAudio_87761() {
	window.obj87759_onTap_runningActionsCount = obj87759_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87764")[0];
	myAudio.pause();
	window.obj87759_onTap_runningActionsCount = window.obj87759_onTap_runningActionsCount - 1;
if (window.obj87759_onTap_runningActionsCount < 0) {
	window.obj87759_onTap_runningActionsCount = 0;
} else if (window.obj87759_onTap_runningActionsCount == 0) {
	obj87759_onTap_actionGroup1();
}
}








};
obj87759_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87759_onTap_activeActionGroupIndex = -1;
		$("#obj87759").trigger("obj87759_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87759) {
				console.warn("de-queueing event obj87759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87759_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87759 
hide_87762();
function hide_87762() {
	var selector = "#obj87759";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87759_onTap_runningActionsCount = obj87759_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87759_onTap_runningActionsCount = window.obj87759_onTap_runningActionsCount - 1;
if (window.obj87759_onTap_runningActionsCount < 0) {
	window.obj87759_onTap_runningActionsCount = 0;
} else if (window.obj87759_onTap_runningActionsCount == 0) {
	obj87759_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87762(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87759_onTap_runningActionsCount = window.obj87759_onTap_runningActionsCount - 1;
if (window.obj87759_onTap_runningActionsCount < 0) {
	window.obj87759_onTap_runningActionsCount = 0;
} else if (window.obj87759_onTap_runningActionsCount == 0) {
	obj87759_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87759_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87759_onTap_activeActionGroupIndex = -1;
		$("#obj87759").trigger("obj87759_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87759) {
				console.warn("de-queueing event obj87759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87759_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87754
(function(){
	window.obj87759_onTap_runningActionsCount = obj87759_onTap_runningActionsCount + 1;

	var selector = "#obj87754";
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
					window.obj87759_onTap_runningActionsCount = window.obj87759_onTap_runningActionsCount - 1;
if (window.obj87759_onTap_runningActionsCount < 0) {
	window.obj87759_onTap_runningActionsCount = 0;
} else if (window.obj87759_onTap_runningActionsCount == 0) {
	obj87759_onTap_actionGroup3();
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
				window.obj87759_onTap_runningActionsCount = window.obj87759_onTap_runningActionsCount - 1;
if (window.obj87759_onTap_runningActionsCount < 0) {
	window.obj87759_onTap_runningActionsCount = 0;
} else if (window.obj87759_onTap_runningActionsCount == 0) {
	obj87759_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87759_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87759_onTap_activeActionGroupIndex = -1;
		$("#obj87759").trigger("obj87759_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87759) {
				console.warn("de-queueing event obj87759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87759_onTap_activeActionGroupIndex = 3;
	





















};
obj87754_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87754_onTap_activeActionGroupIndex = -1;
		$("#obj87754").trigger("obj87754_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87754) {
				console.warn("de-queueing event obj87754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87754_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87754 
hide_87756();
function hide_87756() {
	var selector = "#obj87754";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87754_onTap_runningActionsCount = obj87754_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87754_onTap_runningActionsCount = window.obj87754_onTap_runningActionsCount - 1;
if (window.obj87754_onTap_runningActionsCount < 0) {
	window.obj87754_onTap_runningActionsCount = 0;
} else if (window.obj87754_onTap_runningActionsCount == 0) {
	obj87754_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87756(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87754_onTap_runningActionsCount = window.obj87754_onTap_runningActionsCount - 1;
if (window.obj87754_onTap_runningActionsCount < 0) {
	window.obj87754_onTap_runningActionsCount = 0;
} else if (window.obj87754_onTap_runningActionsCount == 0) {
	obj87754_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87754_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87754_onTap_activeActionGroupIndex = -1;
		$("#obj87754").trigger("obj87754_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87754) {
				console.warn("de-queueing event obj87754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87754_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87759
(function(){
	window.obj87754_onTap_runningActionsCount = obj87754_onTap_runningActionsCount + 1;

	var selector = "#obj87759";
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
					window.obj87754_onTap_runningActionsCount = window.obj87754_onTap_runningActionsCount - 1;
if (window.obj87754_onTap_runningActionsCount < 0) {
	window.obj87754_onTap_runningActionsCount = 0;
} else if (window.obj87754_onTap_runningActionsCount == 0) {
	obj87754_onTap_actionGroup2();
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
				window.obj87754_onTap_runningActionsCount = window.obj87754_onTap_runningActionsCount - 1;
if (window.obj87754_onTap_runningActionsCount < 0) {
	window.obj87754_onTap_runningActionsCount = 0;
} else if (window.obj87754_onTap_runningActionsCount == 0) {
	obj87754_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87754_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87754_onTap_activeActionGroupIndex = -1;
		$("#obj87754").trigger("obj87754_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87754) {
				console.warn("de-queueing event obj87754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87754_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87764 
playAudio_87758();
function playAudio_87758() {
	window.obj87754_onTap_runningActionsCount = obj87754_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87764")[0];
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
		    window.obj87754_onTap_runningActionsCount = window.obj87754_onTap_runningActionsCount - 1;
if (window.obj87754_onTap_runningActionsCount < 0) {
	window.obj87754_onTap_runningActionsCount = 0;
} else if (window.obj87754_onTap_runningActionsCount == 0) {
	obj87754_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87754_onTap_runningActionsCount = window.obj87754_onTap_runningActionsCount - 1;
if (window.obj87754_onTap_runningActionsCount < 0) {
	window.obj87754_onTap_runningActionsCount = 0;
} else if (window.obj87754_onTap_runningActionsCount == 0) {
	obj87754_onTap_actionGroup3();
}
	}
}









};
obj87754_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87754_onTap_activeActionGroupIndex = -1;
		$("#obj87754").trigger("obj87754_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87754) {
				console.warn("de-queueing event obj87754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87754_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj75986: Event Touch Down
 *
 */
$("#obj75986").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75986_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75986_onTap is still running");
	return;
}
var obj75986_onTap_runningActionsCount = 0;
var obj75986_onTap_loopCount = 0;
obj75986_onTap_actionGroup0();
});










/*
 *
 *   obj75983: Event Touch Down
 *
 */
$("#obj75983").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75983_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75983_onTap is still running");
	return;
}
var obj75983_onTap_runningActionsCount = 0;
var obj75983_onTap_loopCount = 0;
obj75983_onTap_actionGroup0();
});










/*
 *
 *   obj75979: Event Touch Down
 *
 */
$("#obj75979").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75979_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75979_onTap is still running");
	return;
}
var obj75979_onTap_runningActionsCount = 0;
var obj75979_onTap_loopCount = 0;
obj75979_onTap_actionGroup0();
});



























































































/*
 *
 *   obj75948: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj75948");
	var winTarget = document.getElementById("obj75948");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj75948").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj75948_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj75948_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj75948_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75948_onTouchDown is still running");
	return;
}
var obj75948_onTouchDown_runningActionsCount = 0;
var obj75948_onTouchDown_loopCount = 0;
obj75948_onTouchDown_actionGroup0();
});



/*
 *
 *   obj75948: Event SCActionDragDrop75951_droppedOutsideTargetActions
 *
 */
$("#obj75948").bind("SCActionDragDrop75951_droppedOutsideTargetActions", function(event) {
	if (window.obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75948_SCActionDragDrop75951_droppedOutsideTargetActions is still running");
	return;
}
var obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_loopCount = 0;
obj75948_SCActionDragDrop75951_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj75948: Event droppedInsideTargetActions
 *
 */
$("#obj75948").bind("droppedInsideTargetActions", function(event) {
	if (window.obj75948_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75948_droppedInsideTargetActions is still running");
	return;
}
var obj75948_droppedInsideTargetActions_runningActionsCount = 0;
var obj75948_droppedInsideTargetActions_loopCount = 0;
obj75948_droppedInsideTargetActions_actionGroup0();
});














































/*
 *
 *   obj75927: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj75927");
	var winTarget = document.getElementById("obj75927");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj75927").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj75927_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj75927_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj75927_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75927_onTouchDown is still running");
	return;
}
var obj75927_onTouchDown_runningActionsCount = 0;
var obj75927_onTouchDown_loopCount = 0;
obj75927_onTouchDown_actionGroup0();
});



/*
 *
 *   obj75927: Event SCActionDragDrop75930_droppedOutsideTargetActions
 *
 */
$("#obj75927").bind("SCActionDragDrop75930_droppedOutsideTargetActions", function(event) {
	if (window.obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75927_SCActionDragDrop75930_droppedOutsideTargetActions is still running");
	return;
}
var obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_loopCount = 0;
obj75927_SCActionDragDrop75930_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj75927: Event droppedInsideTargetActions
 *
 */
$("#obj75927").bind("droppedInsideTargetActions", function(event) {
	if (window.obj75927_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75927_droppedInsideTargetActions is still running");
	return;
}
var obj75927_droppedInsideTargetActions_runningActionsCount = 0;
var obj75927_droppedInsideTargetActions_loopCount = 0;
obj75927_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj75909: Event Touch Down
 *
 */
$("#obj75909").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75909_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75909_onTap is still running");
	return;
}
var obj75909_onTap_runningActionsCount = 0;
var obj75909_onTap_loopCount = 0;
obj75909_onTap_actionGroup0();
});










/*
 *
 *   obj75901: Event Touch Down
 *
 */
$("#obj75901").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75901_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75901_onTap is still running");
	return;
}
var obj75901_onTap_runningActionsCount = 0;
var obj75901_onTap_loopCount = 0;
obj75901_onTap_actionGroup0();
});










/*
 *
 *   obj87759: Event Touch Down
 *
 */
$("#obj87759").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87759_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87759_onTap is still running");
	return;
}
var obj87759_onTap_runningActionsCount = 0;
var obj87759_onTap_loopCount = 0;
obj87759_onTap_actionGroup0();
});










/*
 *
 *   obj87754: Event Touch Down
 *
 */
$("#obj87754").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87754_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87754_onTap is still running");
	return;
}
var obj87754_onTap_runningActionsCount = 0;
var obj87754_onTap_loopCount = 0;
obj87754_onTap_actionGroup0();
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
	
$("#obj75989").trigger('SCEventShow');
$("#obj75986").trigger('SCEventShow');
$("#obj75983").trigger('SCEventShow');
$("#obj75979").trigger('SCEventShow');
$("#obj75940").trigger('SCEventShow');
$("#obj75977").trigger('SCEventShow');
$("#obj75975").trigger('SCEventShow');
$("#obj75973").trigger('SCEventShow');
$("#obj75971").trigger('SCEventShow');
$("#obj75969").trigger('SCEventShow');
$("#obj75967").trigger('SCEventShow');
$("#obj75965").trigger('SCEventShow');
$("#obj75948").trigger('SCEventShow');
$("#obj75946").trigger('SCEventShow');
$("#obj75944").trigger('SCEventShow');
$("#obj75942").trigger('SCEventShow');
$("#obj75938").trigger('SCEventShow');
$("#obj75927").trigger('SCEventShow');
$("#obj75909").trigger('SCEventShow');
$("#obj75901").trigger('SCEventShow');
$("#obj87759").trigger('SCEventShow');
$("#obj87754").trigger('SCEventShow');
$("#obj87764").trigger('SCEventShow');
$("#obj94781").trigger('SCEventShow');
$("#obj75899").trigger('SCEventShow');
	
});