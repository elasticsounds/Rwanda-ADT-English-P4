pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 18242;
pubcoder.page.title = pubcoder.page.title || "72";
pubcoder.page.number = pubcoder.page.number || 72;
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
var obj75595_onTap_activeActionGroupIndex = -1;
var obj75595_onTap_runningActionsCount = 0;
var obj75595_onTap_loopCount = 0;
var obj75592_onTap_activeActionGroupIndex = -1;
var obj75592_onTap_runningActionsCount = 0;
var obj75592_onTap_loopCount = 0;
var obj75588_onTap_activeActionGroupIndex = -1;
var obj75588_onTap_runningActionsCount = 0;
var obj75588_onTap_loopCount = 0;
var obj75556_onDrag_activeActionGroupIndex = -1;
var obj75556_onDrag_runningActionsCount = 0;
var obj75556_onDrag_loopCount = 0;
var obj75556_onTouchDown_activeActionGroupIndex = -1;
var obj75556_onTouchDown_runningActionsCount = 0;
var obj75556_onTouchDown_loopCount = 0;
var obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_loopCount = 0;
var obj75556_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj75556_droppedInsideTargetActions_runningActionsCount = 0;
var obj75556_droppedInsideTargetActions_loopCount = 0;
var obj75539_onDrag_activeActionGroupIndex = -1;
var obj75539_onDrag_runningActionsCount = 0;
var obj75539_onDrag_loopCount = 0;
var obj75539_onTouchDown_activeActionGroupIndex = -1;
var obj75539_onTouchDown_runningActionsCount = 0;
var obj75539_onTouchDown_loopCount = 0;
var obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_loopCount = 0;
var obj75539_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj75539_droppedInsideTargetActions_runningActionsCount = 0;
var obj75539_droppedInsideTargetActions_loopCount = 0;
var obj75517_onTap_activeActionGroupIndex = -1;
var obj75517_onTap_runningActionsCount = 0;
var obj75517_onTap_loopCount = 0;
var obj75509_onTap_activeActionGroupIndex = -1;
var obj75509_onTap_runningActionsCount = 0;
var obj75509_onTap_loopCount = 0;
var obj87703_onTap_activeActionGroupIndex = -1;
var obj87703_onTap_runningActionsCount = 0;
var obj87703_onTap_loopCount = 0;
var obj87698_onTap_activeActionGroupIndex = -1;
var obj87698_onTap_runningActionsCount = 0;
var obj87698_onTap_loopCount = 0;
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
		
obj75595_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75595_onTap_activeActionGroupIndex = -1;
		$("#obj75595").trigger("obj75595_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75595) {
				console.warn("de-queueing event obj75595." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75595").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75595_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75597();
function goToPage_75597() {
	window.obj75595_onTap_runningActionsCount = obj75595_onTap_runningActionsCount + 1;
	$("#anchor426")[0].click();
	window.obj75595_onTap_runningActionsCount = window.obj75595_onTap_runningActionsCount - 1;
if (window.obj75595_onTap_runningActionsCount < 0) {
	window.obj75595_onTap_runningActionsCount = 0;
} else if (window.obj75595_onTap_runningActionsCount == 0) {
	obj75595_onTap_actionGroup1();
}
}





















};
obj75595_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75595_onTap_activeActionGroupIndex = -1;
		$("#obj75595").trigger("obj75595_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75595) {
				console.warn("de-queueing event obj75595." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75595").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75595_onTap_activeActionGroupIndex = 1;
	





















};
obj75592_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75592_onTap_activeActionGroupIndex = -1;
		$("#obj75592").trigger("obj75592_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75592) {
				console.warn("de-queueing event obj75592." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75592").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75592_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75594();
function goToPage_75594() {
	window.obj75592_onTap_runningActionsCount = obj75592_onTap_runningActionsCount + 1;
	$("#anchor427")[0].click();
	window.obj75592_onTap_runningActionsCount = window.obj75592_onTap_runningActionsCount - 1;
if (window.obj75592_onTap_runningActionsCount < 0) {
	window.obj75592_onTap_runningActionsCount = 0;
} else if (window.obj75592_onTap_runningActionsCount == 0) {
	obj75592_onTap_actionGroup1();
}
}





















};
obj75592_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75592_onTap_activeActionGroupIndex = -1;
		$("#obj75592").trigger("obj75592_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75592) {
				console.warn("de-queueing event obj75592." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75592").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75592_onTap_activeActionGroupIndex = 1;
	





















};
obj75588_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75588_onTap_activeActionGroupIndex = -1;
		$("#obj75588").trigger("obj75588_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75588) {
				console.warn("de-queueing event obj75588." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75588").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75588_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75590();
function goToPage_75590() {
	window.obj75588_onTap_runningActionsCount = obj75588_onTap_runningActionsCount + 1;
	$("#anchor428")[0].click();
	window.obj75588_onTap_runningActionsCount = window.obj75588_onTap_runningActionsCount - 1;
if (window.obj75588_onTap_runningActionsCount < 0) {
	window.obj75588_onTap_runningActionsCount = 0;
} else if (window.obj75588_onTap_runningActionsCount == 0) {
	obj75588_onTap_actionGroup1();
}
}





















};
obj75588_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75588_onTap_activeActionGroupIndex = -1;
		$("#obj75588").trigger("obj75588_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75588) {
				console.warn("de-queueing event obj75588." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75588").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75588_onTap_activeActionGroupIndex = 1;
	





















};
obj75556_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75556_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75556").trigger("obj75556_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75556) {
				console.warn("de-queueing event obj75556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75556_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj75556");
//	action: dragDrop
//	target: obj75556 
dragDrop_75559();
function dragDrop_75559() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj75556_onTouchDown_runningActionsCount = obj75556_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj75556');
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
	  	containerNode = $('#obj75580');
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
    	window.obj75556_onTouchDown_runningActionsCount = window.obj75556_onTouchDown_runningActionsCount - 1;
if (window.obj75556_onTouchDown_runningActionsCount < 0) {
	window.obj75556_onTouchDown_runningActionsCount = 0;
} else if (window.obj75556_onTouchDown_runningActionsCount == 0) {
	obj75556_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj75576");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_75559 = false;
    	var dropped_id_75559;
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
					dropped_75559 = true;
					dropped_id_75559 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_75559) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj75556").trigger('SCActionDragDrop75559_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj75556_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75556_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75556").trigger("obj75556_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75556) {
				console.warn("de-queueing event obj75556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75556_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75556").trigger("obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75556) {
				console.warn("de-queueing event obj75556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj75556 
move_92324();
function move_92324() {
	window.obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_runningActionsCount = obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj75556");
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
			window.obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_runningActionsCount = window.obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75556").trigger("obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75556) {
				console.warn("de-queueing event obj75556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj75556_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75556").trigger("obj75556_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75556) {
				console.warn("de-queueing event obj75556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75561();
function runjs_75561() {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = obj75556_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75576").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75556_droppedInsideTargetActions_runningActionsCount = window.obj75556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75556_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj75556_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75556").trigger("obj75556_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75556) {
				console.warn("de-queueing event obj75556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_75562();
function runjs_75562() {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = obj75556_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75576").css("border-color", "#C00000"); $("#obj75576").css("border-width", "2px"); $("#obj75576").css("border-style", "solid"); $("#obj75576").css("border-radius", "10px"); $("#obj75576").css("-webkit-border-radius", "10px"); $("#obj75576").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75556_droppedInsideTargetActions_runningActionsCount = window.obj75556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75556_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj75556_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75556").trigger("obj75556_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75556) {
				console.warn("de-queueing event obj75556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj75574 
hide_75563();
function hide_75563() {
	var selector = "#obj75574";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75556_droppedInsideTargetActions_runningActionsCount = obj75556_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75556_droppedInsideTargetActions_runningActionsCount = window.obj75556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75556_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75563(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75556_droppedInsideTargetActions_runningActionsCount = window.obj75556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75556_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75556_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75556").trigger("obj75556_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75556) {
				console.warn("de-queueing event obj75556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_75564();
function runjs_75564() {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = obj75556_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75556").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75556_droppedInsideTargetActions_runningActionsCount = window.obj75556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75556_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj75556_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75556").trigger("obj75556_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75556) {
				console.warn("de-queueing event obj75556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_75565();
function switchText_75565() {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = obj75556_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75550_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75550_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75550").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75550_content");
			setTimeout(function () {
				window.obj75556_droppedInsideTargetActions_runningActionsCount = window.obj75556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75556_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj75550 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75556_droppedInsideTargetActions_runningActionsCount = window.obj75556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75556_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj75556_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75556").trigger("obj75556_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75556) {
				console.warn("de-queueing event obj75556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj75556 
move_75566();
function move_75566() {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = obj75556_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj75556");
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
			window.obj75556_droppedInsideTargetActions_runningActionsCount = window.obj75556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75556_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj75556_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75556").trigger("obj75556_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75556) {
				console.warn("de-queueing event obj75556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_75567();
function runjs_75567() {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = obj75556_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75576").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj75556_droppedInsideTargetActions_runningActionsCount = window.obj75556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75556_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj75556_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75556").trigger("obj75556_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75556) {
				console.warn("de-queueing event obj75556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_75568();
function runjs_75568() {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = obj75556_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75576").css("border-color", "#000000"); $("#obj75576").css("border-width", "1px"); $("#obj75576").css("border-style", "solid"); $("#obj75576").css("border-radius", "10px"); $("#obj75576").css("-webkit-border-radius", "10px"); $("#obj75576").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75556_droppedInsideTargetActions_runningActionsCount = window.obj75556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75556_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj75556_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75556").trigger("obj75556_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75556) {
				console.warn("de-queueing event obj75556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj75574
(function(){
	window.obj75556_droppedInsideTargetActions_runningActionsCount = obj75556_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj75574";
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
					window.obj75556_droppedInsideTargetActions_runningActionsCount = window.obj75556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75556_droppedInsideTargetActions_actionGroup9();
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
				window.obj75556_droppedInsideTargetActions_runningActionsCount = window.obj75556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75556_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75556_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75556").trigger("obj75556_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75556) {
				console.warn("de-queueing event obj75556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_75570();
function runjs_75570() {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = obj75556_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75556").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj75556_droppedInsideTargetActions_runningActionsCount = window.obj75556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75556_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj75556_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75556").trigger("obj75556_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75556) {
				console.warn("de-queueing event obj75556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_75571();
function runjs_75571() {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = obj75556_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75556").css("border-color", "rgba(0,0,0,0)"); $("#obj75556").css("border-width", "0px"); $("#obj75556").css("border-style", "solid"); $("#obj75556").css("border-radius", "10px"); $("#obj75556").css("-webkit-border-radius", "10px"); $("#obj75556").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75556_droppedInsideTargetActions_runningActionsCount = window.obj75556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75556_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj75556_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75556").trigger("obj75556_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75556) {
				console.warn("de-queueing event obj75556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj75535 
playAudio_75572();
function playAudio_75572() {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = obj75556_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj75535")[0];
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
		    window.obj75556_droppedInsideTargetActions_runningActionsCount = window.obj75556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75556_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75556_droppedInsideTargetActions_runningActionsCount = window.obj75556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75556_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj75556_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75556").trigger("obj75556_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75556) {
				console.warn("de-queueing event obj75556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_75573();
function switchText_75573() {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = obj75556_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75550_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75550_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75550").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75550_content");
			setTimeout(function () {
				window.obj75556_droppedInsideTargetActions_runningActionsCount = window.obj75556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75556_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj75550 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75556_droppedInsideTargetActions_runningActionsCount = window.obj75556_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75556_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75556_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75556_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75556_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj75556_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75556").trigger("obj75556_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75556) {
				console.warn("de-queueing event obj75556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75556_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj75539_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75539_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75539").trigger("obj75539_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75539) {
				console.warn("de-queueing event obj75539." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75539").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75539_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj75539");
//	action: dragDrop
//	target: obj75539 
dragDrop_75542();
function dragDrop_75542() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj75539_onTouchDown_runningActionsCount = obj75539_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj75539');
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
	  	containerNode = $('#obj75580');
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
    	window.obj75539_onTouchDown_runningActionsCount = window.obj75539_onTouchDown_runningActionsCount - 1;
if (window.obj75539_onTouchDown_runningActionsCount < 0) {
	window.obj75539_onTouchDown_runningActionsCount = 0;
} else if (window.obj75539_onTouchDown_runningActionsCount == 0) {
	obj75539_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj75576");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_75542 = false;
    	var dropped_id_75542;
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
					dropped_75542 = true;
					dropped_id_75542 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_75542) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj75539").trigger('SCActionDragDrop75542_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj75539_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75539_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75539").trigger("obj75539_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75539) {
				console.warn("de-queueing event obj75539." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75539").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75539_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75539").trigger("obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75539) {
				console.warn("de-queueing event obj75539." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75539").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj75539 
move_92326();
function move_92326() {
	window.obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_runningActionsCount = obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj75539");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 133;
	var moveY = 510;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_runningActionsCount = window.obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75539").trigger("obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75539) {
				console.warn("de-queueing event obj75539." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75539").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj75539_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75539_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75539").trigger("obj75539_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75539) {
				console.warn("de-queueing event obj75539." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75539").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75539_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75544();
function runjs_75544() {
	window.obj75539_droppedInsideTargetActions_runningActionsCount = obj75539_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75576").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75539_droppedInsideTargetActions_runningActionsCount = window.obj75539_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75539_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75539_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75539_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75539_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj75539_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75539_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75539").trigger("obj75539_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75539) {
				console.warn("de-queueing event obj75539." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75539").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75539_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_75548();
function switchText_75548() {
	window.obj75539_droppedInsideTargetActions_runningActionsCount = obj75539_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75550_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75550_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75550").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75550_content");
			setTimeout(function () {
				window.obj75539_droppedInsideTargetActions_runningActionsCount = window.obj75539_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75539_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75539_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75539_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75539_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj75550 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75539_droppedInsideTargetActions_runningActionsCount = window.obj75539_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75539_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75539_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75539_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75539_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj75539_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75539_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75539").trigger("obj75539_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75539) {
				console.warn("de-queueing event obj75539." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75539").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75539_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_75545();
function runjs_75545() {
	window.obj75539_droppedInsideTargetActions_runningActionsCount = obj75539_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75576").css("border-color", "#058E3F"); $("#obj75576").css("border-width", "2px"); $("#obj75576").css("border-style", "solid"); $("#obj75576").css("border-radius", "10px"); $("#obj75576").css("-webkit-border-radius", "10px"); $("#obj75576").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75539_droppedInsideTargetActions_runningActionsCount = window.obj75539_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75539_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75539_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75539_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75539_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj75539_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75539_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75539").trigger("obj75539_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75539) {
				console.warn("de-queueing event obj75539." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75539").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75539_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj75574 
hide_75546();
function hide_75546() {
	var selector = "#obj75574";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75539_droppedInsideTargetActions_runningActionsCount = obj75539_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75539_droppedInsideTargetActions_runningActionsCount = window.obj75539_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75539_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75539_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75539_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75539_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75546(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75539_droppedInsideTargetActions_runningActionsCount = window.obj75539_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75539_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75539_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75539_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75539_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75539_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75539_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75539").trigger("obj75539_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75539) {
				console.warn("de-queueing event obj75539." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75539").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75539_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_75547();
function runjs_75547() {
	window.obj75539_droppedInsideTargetActions_runningActionsCount = obj75539_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75539").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75539_droppedInsideTargetActions_runningActionsCount = window.obj75539_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75539_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75539_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75539_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75539_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj75539_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75539_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75539").trigger("obj75539_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75539) {
				console.warn("de-queueing event obj75539." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75539").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75539_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj75554 
playAudio_75549();
function playAudio_75549() {
	window.obj75539_droppedInsideTargetActions_runningActionsCount = obj75539_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj75554")[0];
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
		    window.obj75539_droppedInsideTargetActions_runningActionsCount = window.obj75539_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75539_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75539_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75539_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75539_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75539_droppedInsideTargetActions_runningActionsCount = window.obj75539_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75539_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75539_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75539_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75539_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj75539_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75539_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75539").trigger("obj75539_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75539) {
				console.warn("de-queueing event obj75539." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75539").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75539_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90262();
function switchText_90262() {
	window.obj75539_droppedInsideTargetActions_runningActionsCount = obj75539_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75550_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75550_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75550").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75550_content");
			setTimeout(function () {
				window.obj75539_droppedInsideTargetActions_runningActionsCount = window.obj75539_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75539_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75539_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75539_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75539_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj75550 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75539_droppedInsideTargetActions_runningActionsCount = window.obj75539_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75539_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75539_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75539_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75539_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj75539_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75539_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75539").trigger("obj75539_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75539) {
				console.warn("de-queueing event obj75539." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75539").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75539_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj75517_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75517_onTap_activeActionGroupIndex = -1;
		$("#obj75517").trigger("obj75517_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75517) {
				console.warn("de-queueing event obj75517." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75517").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75517_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj75517 
hide_75520();
function hide_75520() {
	var selector = "#obj75517";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75517_onTap_runningActionsCount = obj75517_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75517_onTap_runningActionsCount = window.obj75517_onTap_runningActionsCount - 1;
if (window.obj75517_onTap_runningActionsCount < 0) {
	window.obj75517_onTap_runningActionsCount = 0;
} else if (window.obj75517_onTap_runningActionsCount == 0) {
	obj75517_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75520(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75517_onTap_runningActionsCount = window.obj75517_onTap_runningActionsCount - 1;
if (window.obj75517_onTap_runningActionsCount < 0) {
	window.obj75517_onTap_runningActionsCount = 0;
} else if (window.obj75517_onTap_runningActionsCount == 0) {
	obj75517_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj75507 
stopMovie_75519();
function stopMovie_75519() {
	window.obj75517_onTap_runningActionsCount = obj75517_onTap_runningActionsCount + 1;
	var myVideo = $("#obj75507")[0];
	myVideo.pause();
	window.obj75517_onTap_runningActionsCount = window.obj75517_onTap_runningActionsCount - 1;
if (window.obj75517_onTap_runningActionsCount < 0) {
	window.obj75517_onTap_runningActionsCount = 0;
} else if (window.obj75517_onTap_runningActionsCount == 0) {
	obj75517_onTap_actionGroup1();
}
}
















};
obj75517_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75517_onTap_activeActionGroupIndex = -1;
		$("#obj75517").trigger("obj75517_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75517) {
				console.warn("de-queueing event obj75517." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75517").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75517_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj75509
(function(){
	window.obj75517_onTap_runningActionsCount = obj75517_onTap_runningActionsCount + 1;

	var selector = "#obj75509";
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
					window.obj75517_onTap_runningActionsCount = window.obj75517_onTap_runningActionsCount - 1;
if (window.obj75517_onTap_runningActionsCount < 0) {
	window.obj75517_onTap_runningActionsCount = 0;
} else if (window.obj75517_onTap_runningActionsCount == 0) {
	obj75517_onTap_actionGroup2();
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
				window.obj75517_onTap_runningActionsCount = window.obj75517_onTap_runningActionsCount - 1;
if (window.obj75517_onTap_runningActionsCount < 0) {
	window.obj75517_onTap_runningActionsCount = 0;
} else if (window.obj75517_onTap_runningActionsCount == 0) {
	obj75517_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75517_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75517_onTap_activeActionGroupIndex = -1;
		$("#obj75517").trigger("obj75517_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75517) {
				console.warn("de-queueing event obj75517." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75517").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75517_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj75507 
move_75522();
function move_75522() {
	window.obj75517_onTap_runningActionsCount = obj75517_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj75507");
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
			window.obj75517_onTap_runningActionsCount = window.obj75517_onTap_runningActionsCount - 1;
if (window.obj75517_onTap_runningActionsCount < 0) {
	window.obj75517_onTap_runningActionsCount = 0;
} else if (window.obj75517_onTap_runningActionsCount == 0) {
	obj75517_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj75517_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75517_onTap_activeActionGroupIndex = -1;
		$("#obj75517").trigger("obj75517_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75517) {
				console.warn("de-queueing event obj75517." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75517").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75517_onTap_activeActionGroupIndex = 3;
	





















};
obj75509_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75509_onTap_activeActionGroupIndex = -1;
		$("#obj75509").trigger("obj75509_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75509) {
				console.warn("de-queueing event obj75509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75509_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj75509 
hide_75512();
function hide_75512() {
	var selector = "#obj75509";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75509_onTap_runningActionsCount = obj75509_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75509_onTap_runningActionsCount = window.obj75509_onTap_runningActionsCount - 1;
if (window.obj75509_onTap_runningActionsCount < 0) {
	window.obj75509_onTap_runningActionsCount = 0;
} else if (window.obj75509_onTap_runningActionsCount == 0) {
	obj75509_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75512(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75509_onTap_runningActionsCount = window.obj75509_onTap_runningActionsCount - 1;
if (window.obj75509_onTap_runningActionsCount < 0) {
	window.obj75509_onTap_runningActionsCount = 0;
} else if (window.obj75509_onTap_runningActionsCount == 0) {
	obj75509_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj75507 
playPauseMovie_75511();
function playPauseMovie_75511() {
	window.obj75509_onTap_runningActionsCount = obj75509_onTap_runningActionsCount + 1;
	var myVideo = $("#obj75507")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj75509_onTap_runningActionsCount = window.obj75509_onTap_runningActionsCount - 1;
if (window.obj75509_onTap_runningActionsCount < 0) {
	window.obj75509_onTap_runningActionsCount = 0;
} else if (window.obj75509_onTap_runningActionsCount == 0) {
	obj75509_onTap_actionGroup1();
}
}

















};
obj75509_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75509_onTap_activeActionGroupIndex = -1;
		$("#obj75509").trigger("obj75509_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75509) {
				console.warn("de-queueing event obj75509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75509_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj75517
(function(){
	window.obj75509_onTap_runningActionsCount = obj75509_onTap_runningActionsCount + 1;

	var selector = "#obj75517";
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
					window.obj75509_onTap_runningActionsCount = window.obj75509_onTap_runningActionsCount - 1;
if (window.obj75509_onTap_runningActionsCount < 0) {
	window.obj75509_onTap_runningActionsCount = 0;
} else if (window.obj75509_onTap_runningActionsCount == 0) {
	obj75509_onTap_actionGroup2();
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
				window.obj75509_onTap_runningActionsCount = window.obj75509_onTap_runningActionsCount - 1;
if (window.obj75509_onTap_runningActionsCount < 0) {
	window.obj75509_onTap_runningActionsCount = 0;
} else if (window.obj75509_onTap_runningActionsCount == 0) {
	obj75509_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75509_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75509_onTap_activeActionGroupIndex = -1;
		$("#obj75509").trigger("obj75509_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75509) {
				console.warn("de-queueing event obj75509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75509_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj75507 
move_75514();
function move_75514() {
	window.obj75509_onTap_runningActionsCount = obj75509_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj75507");
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
			window.obj75509_onTap_runningActionsCount = window.obj75509_onTap_runningActionsCount - 1;
if (window.obj75509_onTap_runningActionsCount < 0) {
	window.obj75509_onTap_runningActionsCount = 0;
} else if (window.obj75509_onTap_runningActionsCount == 0) {
	obj75509_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj75509_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75509_onTap_activeActionGroupIndex = -1;
		$("#obj75509").trigger("obj75509_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75509) {
				console.warn("de-queueing event obj75509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75509_onTap_activeActionGroupIndex = 3;
	





















};
obj87703_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87703_onTap_activeActionGroupIndex = -1;
		$("#obj87703").trigger("obj87703_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87703) {
				console.warn("de-queueing event obj87703." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87703").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87703_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87708 
stopAudio_87705();
function stopAudio_87705() {
	window.obj87703_onTap_runningActionsCount = obj87703_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87708")[0];
	myAudio.pause();
	window.obj87703_onTap_runningActionsCount = window.obj87703_onTap_runningActionsCount - 1;
if (window.obj87703_onTap_runningActionsCount < 0) {
	window.obj87703_onTap_runningActionsCount = 0;
} else if (window.obj87703_onTap_runningActionsCount == 0) {
	obj87703_onTap_actionGroup1();
}
}








};
obj87703_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87703_onTap_activeActionGroupIndex = -1;
		$("#obj87703").trigger("obj87703_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87703) {
				console.warn("de-queueing event obj87703." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87703").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87703_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87703 
hide_87706();
function hide_87706() {
	var selector = "#obj87703";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87703_onTap_runningActionsCount = obj87703_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87703_onTap_runningActionsCount = window.obj87703_onTap_runningActionsCount - 1;
if (window.obj87703_onTap_runningActionsCount < 0) {
	window.obj87703_onTap_runningActionsCount = 0;
} else if (window.obj87703_onTap_runningActionsCount == 0) {
	obj87703_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87706(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87703_onTap_runningActionsCount = window.obj87703_onTap_runningActionsCount - 1;
if (window.obj87703_onTap_runningActionsCount < 0) {
	window.obj87703_onTap_runningActionsCount = 0;
} else if (window.obj87703_onTap_runningActionsCount == 0) {
	obj87703_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87703_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87703_onTap_activeActionGroupIndex = -1;
		$("#obj87703").trigger("obj87703_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87703) {
				console.warn("de-queueing event obj87703." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87703").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87703_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87698
(function(){
	window.obj87703_onTap_runningActionsCount = obj87703_onTap_runningActionsCount + 1;

	var selector = "#obj87698";
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
					window.obj87703_onTap_runningActionsCount = window.obj87703_onTap_runningActionsCount - 1;
if (window.obj87703_onTap_runningActionsCount < 0) {
	window.obj87703_onTap_runningActionsCount = 0;
} else if (window.obj87703_onTap_runningActionsCount == 0) {
	obj87703_onTap_actionGroup3();
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
				window.obj87703_onTap_runningActionsCount = window.obj87703_onTap_runningActionsCount - 1;
if (window.obj87703_onTap_runningActionsCount < 0) {
	window.obj87703_onTap_runningActionsCount = 0;
} else if (window.obj87703_onTap_runningActionsCount == 0) {
	obj87703_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87703_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87703_onTap_activeActionGroupIndex = -1;
		$("#obj87703").trigger("obj87703_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87703) {
				console.warn("de-queueing event obj87703." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87703").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87703_onTap_activeActionGroupIndex = 3;
	





















};
obj87698_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87698_onTap_activeActionGroupIndex = -1;
		$("#obj87698").trigger("obj87698_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87698) {
				console.warn("de-queueing event obj87698." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87698").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87698_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87698 
hide_87700();
function hide_87700() {
	var selector = "#obj87698";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87698_onTap_runningActionsCount = obj87698_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87698_onTap_runningActionsCount = window.obj87698_onTap_runningActionsCount - 1;
if (window.obj87698_onTap_runningActionsCount < 0) {
	window.obj87698_onTap_runningActionsCount = 0;
} else if (window.obj87698_onTap_runningActionsCount == 0) {
	obj87698_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87700(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87698_onTap_runningActionsCount = window.obj87698_onTap_runningActionsCount - 1;
if (window.obj87698_onTap_runningActionsCount < 0) {
	window.obj87698_onTap_runningActionsCount = 0;
} else if (window.obj87698_onTap_runningActionsCount == 0) {
	obj87698_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87698_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87698_onTap_activeActionGroupIndex = -1;
		$("#obj87698").trigger("obj87698_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87698) {
				console.warn("de-queueing event obj87698." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87698").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87698_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87703
(function(){
	window.obj87698_onTap_runningActionsCount = obj87698_onTap_runningActionsCount + 1;

	var selector = "#obj87703";
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
					window.obj87698_onTap_runningActionsCount = window.obj87698_onTap_runningActionsCount - 1;
if (window.obj87698_onTap_runningActionsCount < 0) {
	window.obj87698_onTap_runningActionsCount = 0;
} else if (window.obj87698_onTap_runningActionsCount == 0) {
	obj87698_onTap_actionGroup2();
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
				window.obj87698_onTap_runningActionsCount = window.obj87698_onTap_runningActionsCount - 1;
if (window.obj87698_onTap_runningActionsCount < 0) {
	window.obj87698_onTap_runningActionsCount = 0;
} else if (window.obj87698_onTap_runningActionsCount == 0) {
	obj87698_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87698_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87698_onTap_activeActionGroupIndex = -1;
		$("#obj87698").trigger("obj87698_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87698) {
				console.warn("de-queueing event obj87698." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87698").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87698_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87708 
playAudio_87702();
function playAudio_87702() {
	window.obj87698_onTap_runningActionsCount = obj87698_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87708")[0];
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
		    window.obj87698_onTap_runningActionsCount = window.obj87698_onTap_runningActionsCount - 1;
if (window.obj87698_onTap_runningActionsCount < 0) {
	window.obj87698_onTap_runningActionsCount = 0;
} else if (window.obj87698_onTap_runningActionsCount == 0) {
	obj87698_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87698_onTap_runningActionsCount = window.obj87698_onTap_runningActionsCount - 1;
if (window.obj87698_onTap_runningActionsCount < 0) {
	window.obj87698_onTap_runningActionsCount = 0;
} else if (window.obj87698_onTap_runningActionsCount == 0) {
	obj87698_onTap_actionGroup3();
}
	}
}









};
obj87698_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87698_onTap_activeActionGroupIndex = -1;
		$("#obj87698").trigger("obj87698_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87698) {
				console.warn("de-queueing event obj87698." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87698").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87698_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj75595: Event Touch Down
 *
 */
$("#obj75595").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75595_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75595_onTap is still running");
	return;
}
var obj75595_onTap_runningActionsCount = 0;
var obj75595_onTap_loopCount = 0;
obj75595_onTap_actionGroup0();
});










/*
 *
 *   obj75592: Event Touch Down
 *
 */
$("#obj75592").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75592_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75592_onTap is still running");
	return;
}
var obj75592_onTap_runningActionsCount = 0;
var obj75592_onTap_loopCount = 0;
obj75592_onTap_actionGroup0();
});










/*
 *
 *   obj75588: Event Touch Down
 *
 */
$("#obj75588").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75588_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75588_onTap is still running");
	return;
}
var obj75588_onTap_runningActionsCount = 0;
var obj75588_onTap_loopCount = 0;
obj75588_onTap_actionGroup0();
});

















































































/*
 *
 *   obj75556: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj75556");
	var winTarget = document.getElementById("obj75556");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj75556").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj75556_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj75556_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj75556_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75556_onTouchDown is still running");
	return;
}
var obj75556_onTouchDown_runningActionsCount = 0;
var obj75556_onTouchDown_loopCount = 0;
obj75556_onTouchDown_actionGroup0();
});



/*
 *
 *   obj75556: Event SCActionDragDrop75559_droppedOutsideTargetActions
 *
 */
$("#obj75556").bind("SCActionDragDrop75559_droppedOutsideTargetActions", function(event) {
	if (window.obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75556_SCActionDragDrop75559_droppedOutsideTargetActions is still running");
	return;
}
var obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_loopCount = 0;
obj75556_SCActionDragDrop75559_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj75556: Event droppedInsideTargetActions
 *
 */
$("#obj75556").bind("droppedInsideTargetActions", function(event) {
	if (window.obj75556_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75556_droppedInsideTargetActions is still running");
	return;
}
var obj75556_droppedInsideTargetActions_runningActionsCount = 0;
var obj75556_droppedInsideTargetActions_loopCount = 0;
obj75556_droppedInsideTargetActions_actionGroup0();
});




































/*
 *
 *   obj75539: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj75539");
	var winTarget = document.getElementById("obj75539");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj75539").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj75539_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj75539_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj75539_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75539_onTouchDown is still running");
	return;
}
var obj75539_onTouchDown_runningActionsCount = 0;
var obj75539_onTouchDown_loopCount = 0;
obj75539_onTouchDown_actionGroup0();
});



/*
 *
 *   obj75539: Event SCActionDragDrop75542_droppedOutsideTargetActions
 *
 */
$("#obj75539").bind("SCActionDragDrop75542_droppedOutsideTargetActions", function(event) {
	if (window.obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75539_SCActionDragDrop75542_droppedOutsideTargetActions is still running");
	return;
}
var obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_loopCount = 0;
obj75539_SCActionDragDrop75542_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj75539: Event droppedInsideTargetActions
 *
 */
$("#obj75539").bind("droppedInsideTargetActions", function(event) {
	if (window.obj75539_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75539_droppedInsideTargetActions is still running");
	return;
}
var obj75539_droppedInsideTargetActions_runningActionsCount = 0;
var obj75539_droppedInsideTargetActions_loopCount = 0;
obj75539_droppedInsideTargetActions_actionGroup0();
});

























/*
 *
 *   obj75517: Event Touch Down
 *
 */
$("#obj75517").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75517_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75517_onTap is still running");
	return;
}
var obj75517_onTap_runningActionsCount = 0;
var obj75517_onTap_loopCount = 0;
obj75517_onTap_actionGroup0();
});










/*
 *
 *   obj75509: Event Touch Down
 *
 */
$("#obj75509").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75509_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75509_onTap is still running");
	return;
}
var obj75509_onTap_runningActionsCount = 0;
var obj75509_onTap_loopCount = 0;
obj75509_onTap_actionGroup0();
});










/*
 *
 *   obj87703: Event Touch Down
 *
 */
$("#obj87703").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87703_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87703_onTap is still running");
	return;
}
var obj87703_onTap_runningActionsCount = 0;
var obj87703_onTap_loopCount = 0;
obj87703_onTap_actionGroup0();
});










/*
 *
 *   obj87698: Event Touch Down
 *
 */
$("#obj87698").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87698_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87698_onTap is still running");
	return;
}
var obj87698_onTap_runningActionsCount = 0;
var obj87698_onTap_loopCount = 0;
obj87698_onTap_actionGroup0();
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
	
$("#obj75598").trigger('SCEventShow');
$("#obj75595").trigger('SCEventShow');
$("#obj75592").trigger('SCEventShow');
$("#obj75588").trigger('SCEventShow');
$("#obj75586").trigger('SCEventShow');
$("#obj75584").trigger('SCEventShow');
$("#obj75582").trigger('SCEventShow');
$("#obj75580").trigger('SCEventShow');
$("#obj75578").trigger('SCEventShow');
$("#obj75576").trigger('SCEventShow');
$("#obj75574").trigger('SCEventShow');
$("#obj75556").trigger('SCEventShow');
$("#obj75554").trigger('SCEventShow');
$("#obj75552").trigger('SCEventShow');
$("#obj75550").trigger('SCEventShow');
$("#obj75539").trigger('SCEventShow');
$("#obj75537").trigger('SCEventShow');
$("#obj75535").trigger('SCEventShow');
$("#obj75517").trigger('SCEventShow');
$("#obj75509").trigger('SCEventShow');
$("#obj87703").trigger('SCEventShow');
$("#obj87698").trigger('SCEventShow');
$("#obj87708").trigger('SCEventShow');
$("#obj94773").trigger('SCEventShow');
$("#obj75507").trigger('SCEventShow');
	
});