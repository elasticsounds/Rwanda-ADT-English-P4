pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 55241;
pubcoder.page.title = pubcoder.page.title || "200";
pubcoder.page.number = pubcoder.page.number || 200;
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
var obj55401_onTap_activeActionGroupIndex = -1;
var obj55401_onTap_runningActionsCount = 0;
var obj55401_onTap_loopCount = 0;
var obj55398_onTap_activeActionGroupIndex = -1;
var obj55398_onTap_runningActionsCount = 0;
var obj55398_onTap_loopCount = 0;
var obj55394_onTap_activeActionGroupIndex = -1;
var obj55394_onTap_runningActionsCount = 0;
var obj55394_onTap_loopCount = 0;
var obj55334_onDrag_activeActionGroupIndex = -1;
var obj55334_onDrag_runningActionsCount = 0;
var obj55334_onDrag_loopCount = 0;
var obj55334_onTouchDown_activeActionGroupIndex = -1;
var obj55334_onTouchDown_runningActionsCount = 0;
var obj55334_onTouchDown_loopCount = 0;
var obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_loopCount = 0;
var obj55334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj55334_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55334_droppedInsideTargetActions_3_loopCount = 0;
var obj55334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj55334_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55334_droppedInsideTargetActions_2_loopCount = 0;
var obj55334_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj55334_droppedInsideTargetActions_runningActionsCount = 0;
var obj55334_droppedInsideTargetActions_loopCount = 0;
var obj55288_onDrag_activeActionGroupIndex = -1;
var obj55288_onDrag_runningActionsCount = 0;
var obj55288_onDrag_loopCount = 0;
var obj55288_onTouchDown_activeActionGroupIndex = -1;
var obj55288_onTouchDown_runningActionsCount = 0;
var obj55288_onTouchDown_loopCount = 0;
var obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_loopCount = 0;
var obj55288_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj55288_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55288_droppedInsideTargetActions_3_loopCount = 0;
var obj55288_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj55288_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55288_droppedInsideTargetActions_2_loopCount = 0;
var obj55288_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj55288_droppedInsideTargetActions_runningActionsCount = 0;
var obj55288_droppedInsideTargetActions_loopCount = 0;
var obj55248_onDrag_activeActionGroupIndex = -1;
var obj55248_onDrag_runningActionsCount = 0;
var obj55248_onDrag_loopCount = 0;
var obj55248_onTouchDown_activeActionGroupIndex = -1;
var obj55248_onTouchDown_runningActionsCount = 0;
var obj55248_onTouchDown_loopCount = 0;
var obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_loopCount = 0;
var obj55248_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj55248_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55248_droppedInsideTargetActions_3_loopCount = 0;
var obj55248_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj55248_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55248_droppedInsideTargetActions_2_loopCount = 0;
var obj55248_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj55248_droppedInsideTargetActions_runningActionsCount = 0;
var obj55248_droppedInsideTargetActions_loopCount = 0;
var obj68238_onTap_activeActionGroupIndex = -1;
var obj68238_onTap_runningActionsCount = 0;
var obj68238_onTap_loopCount = 0;
var obj68230_onTap_activeActionGroupIndex = -1;
var obj68230_onTap_runningActionsCount = 0;
var obj68230_onTap_loopCount = 0;
var obj89281_onTap_activeActionGroupIndex = -1;
var obj89281_onTap_runningActionsCount = 0;
var obj89281_onTap_loopCount = 0;
var obj89276_onTap_activeActionGroupIndex = -1;
var obj89276_onTap_runningActionsCount = 0;
var obj89276_onTap_loopCount = 0;
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
		
obj55401_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55401_onTap_activeActionGroupIndex = -1;
		$("#obj55401").trigger("obj55401_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55401) {
				console.warn("de-queueing event obj55401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55401_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_55403();
function goToPage_55403() {
	window.obj55401_onTap_runningActionsCount = obj55401_onTap_runningActionsCount + 1;
	$("#anchor1176")[0].click();
	window.obj55401_onTap_runningActionsCount = window.obj55401_onTap_runningActionsCount - 1;
if (window.obj55401_onTap_runningActionsCount < 0) {
	window.obj55401_onTap_runningActionsCount = 0;
} else if (window.obj55401_onTap_runningActionsCount == 0) {
	obj55401_onTap_actionGroup1();
}
}





















};
obj55401_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55401_onTap_activeActionGroupIndex = -1;
		$("#obj55401").trigger("obj55401_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55401) {
				console.warn("de-queueing event obj55401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55401_onTap_activeActionGroupIndex = 1;
	





















};
obj55398_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55398_onTap_activeActionGroupIndex = -1;
		$("#obj55398").trigger("obj55398_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55398) {
				console.warn("de-queueing event obj55398." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55398").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55398_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_55400();
function goToPage_55400() {
	window.obj55398_onTap_runningActionsCount = obj55398_onTap_runningActionsCount + 1;
	$("#anchor1177")[0].click();
	window.obj55398_onTap_runningActionsCount = window.obj55398_onTap_runningActionsCount - 1;
if (window.obj55398_onTap_runningActionsCount < 0) {
	window.obj55398_onTap_runningActionsCount = 0;
} else if (window.obj55398_onTap_runningActionsCount == 0) {
	obj55398_onTap_actionGroup1();
}
}





















};
obj55398_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55398_onTap_activeActionGroupIndex = -1;
		$("#obj55398").trigger("obj55398_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55398) {
				console.warn("de-queueing event obj55398." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55398").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55398_onTap_activeActionGroupIndex = 1;
	





















};
obj55394_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55394_onTap_activeActionGroupIndex = -1;
		$("#obj55394").trigger("obj55394_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55394) {
				console.warn("de-queueing event obj55394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55394_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_55396();
function goToPage_55396() {
	window.obj55394_onTap_runningActionsCount = obj55394_onTap_runningActionsCount + 1;
	$("#anchor1178")[0].click();
	window.obj55394_onTap_runningActionsCount = window.obj55394_onTap_runningActionsCount - 1;
if (window.obj55394_onTap_runningActionsCount < 0) {
	window.obj55394_onTap_runningActionsCount = 0;
} else if (window.obj55394_onTap_runningActionsCount == 0) {
	obj55394_onTap_actionGroup1();
}
}





















};
obj55394_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55394_onTap_activeActionGroupIndex = -1;
		$("#obj55394").trigger("obj55394_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55394) {
				console.warn("de-queueing event obj55394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55394_onTap_activeActionGroupIndex = 1;
	





















};
obj55334_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj55334");
//	action: dragDrop
//	target: obj55334 
dragDrop_55337();
function dragDrop_55337() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj55334_onTouchDown_runningActionsCount = obj55334_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj55334');
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
	  	containerNode = $('#obj55386');
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
    	window.obj55334_onTouchDown_runningActionsCount = window.obj55334_onTouchDown_runningActionsCount - 1;
if (window.obj55334_onTouchDown_runningActionsCount < 0) {
	window.obj55334_onTouchDown_runningActionsCount = 0;
} else if (window.obj55334_onTouchDown_runningActionsCount == 0) {
	obj55334_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj55380","#obj55384","#obj55382");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_55337 = false;
    	var dropped_id_55337;
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
					dropped_55337 = true;
					dropped_id_55337 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_55337) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj55334").trigger('SCActionDragDrop55337_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj55334_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55334_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj55334 
move_92831();
function move_92831() {
	window.obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_runningActionsCount = obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj55334");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 404;
	var moveY = 591;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_runningActionsCount = window.obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj55334_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55355();
function runjs_55355() {
	window.obj55334_droppedInsideTargetActions_3_runningActionsCount = obj55334_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55382").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55334_droppedInsideTargetActions_3_runningActionsCount = window.obj55334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj55334_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55356();
function runjs_55356() {
	window.obj55334_droppedInsideTargetActions_3_runningActionsCount = obj55334_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55382").css("border-color", "#C00000"); $("#obj55382").css("border-width", "2px"); $("#obj55382").css("border-style", "solid"); $("#obj55382").css("border-radius", "10px"); $("#obj55382").css("-webkit-border-radius", "10px"); $("#obj55382").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55334_droppedInsideTargetActions_3_runningActionsCount = window.obj55334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj55334_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_55357();
function switchText_55357() {
	window.obj55334_droppedInsideTargetActions_3_runningActionsCount = obj55334_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55332_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55332_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55332").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55332_content");
			setTimeout(function () {
				window.obj55334_droppedInsideTargetActions_3_runningActionsCount = window.obj55334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj55332 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55334_droppedInsideTargetActions_3_runningActionsCount = window.obj55334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj55334_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj55334 
move_55358();
function move_55358() {
	window.obj55334_droppedInsideTargetActions_3_runningActionsCount = obj55334_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj55334");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 404;
	var moveY = 591;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55334_droppedInsideTargetActions_3_runningActionsCount = window.obj55334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj55334_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_55359();
function runjs_55359() {
	window.obj55334_droppedInsideTargetActions_3_runningActionsCount = obj55334_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55382").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55334_droppedInsideTargetActions_3_runningActionsCount = window.obj55334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj55334_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_55360();
function runjs_55360() {
	window.obj55334_droppedInsideTargetActions_3_runningActionsCount = obj55334_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55382").css("border-color", "#000000"); $("#obj55382").css("border-width", "1px"); $("#obj55382").css("border-style", "solid"); $("#obj55382").css("border-radius", "15px"); $("#obj55382").css("-webkit-border-radius", "15px"); $("#obj55382").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj55334_droppedInsideTargetActions_3_runningActionsCount = window.obj55334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj55334_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55361();
function runjs_55361() {
	window.obj55334_droppedInsideTargetActions_3_runningActionsCount = obj55334_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55334").css("border-color", "rgba(0,0,0,0)"); $("#obj55334").css("border-width", "0px"); $("#obj55334").css("border-style", "solid"); $("#obj55334").css("border-radius", "20px"); $("#obj55334").css("-webkit-border-radius", "20px"); $("#obj55334").css("-moz-border-radius", "20px"); $("#obj55334_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj55334_droppedInsideTargetActions_3_runningActionsCount = window.obj55334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj55334_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_55362();
function switchText_55362() {
	window.obj55334_droppedInsideTargetActions_3_runningActionsCount = obj55334_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55332_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55332_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55332").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55332_content");
			setTimeout(function () {
				window.obj55334_droppedInsideTargetActions_3_runningActionsCount = window.obj55334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj55332 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55334_droppedInsideTargetActions_3_runningActionsCount = window.obj55334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj55334_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj55331 
playAudio_55363();
function playAudio_55363() {
	window.obj55334_droppedInsideTargetActions_3_runningActionsCount = obj55334_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj55331")[0];
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
		    window.obj55334_droppedInsideTargetActions_3_runningActionsCount = window.obj55334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55334_droppedInsideTargetActions_3_runningActionsCount = window.obj55334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj55334_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj55334_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55345();
function runjs_55345() {
	window.obj55334_droppedInsideTargetActions_2_runningActionsCount = obj55334_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55384").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55334_droppedInsideTargetActions_2_runningActionsCount = window.obj55334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj55334_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55346();
function runjs_55346() {
	window.obj55334_droppedInsideTargetActions_2_runningActionsCount = obj55334_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55384").css("border-color", "#C00000"); $("#obj55384").css("border-width", "2px"); $("#obj55384").css("border-style", "solid"); $("#obj55384").css("border-radius", "10px"); $("#obj55384").css("-webkit-border-radius", "10px"); $("#obj55384").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55334_droppedInsideTargetActions_2_runningActionsCount = window.obj55334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj55334_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_55347();
function switchText_55347() {
	window.obj55334_droppedInsideTargetActions_2_runningActionsCount = obj55334_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55332_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55332_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55332").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55332_content");
			setTimeout(function () {
				window.obj55334_droppedInsideTargetActions_2_runningActionsCount = window.obj55334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj55332 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55334_droppedInsideTargetActions_2_runningActionsCount = window.obj55334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj55334_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj55334 
move_55348();
function move_55348() {
	window.obj55334_droppedInsideTargetActions_2_runningActionsCount = obj55334_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj55334");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 404;
	var moveY = 591;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55334_droppedInsideTargetActions_2_runningActionsCount = window.obj55334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj55334_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_55349();
function runjs_55349() {
	window.obj55334_droppedInsideTargetActions_2_runningActionsCount = obj55334_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55384").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55334_droppedInsideTargetActions_2_runningActionsCount = window.obj55334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj55334_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_55350();
function runjs_55350() {
	window.obj55334_droppedInsideTargetActions_2_runningActionsCount = obj55334_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55384").css("border-color", "#000000"); $("#obj55384").css("border-width", "1px"); $("#obj55384").css("border-style", "solid"); $("#obj55384").css("border-radius", "15px"); $("#obj55384").css("-webkit-border-radius", "15px"); $("#obj55384").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj55334_droppedInsideTargetActions_2_runningActionsCount = window.obj55334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj55334_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55351();
function runjs_55351() {
	window.obj55334_droppedInsideTargetActions_2_runningActionsCount = obj55334_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55334").css("border-color", "rgba(0,0,0,0)"); $("#obj55334").css("border-width", "0px"); $("#obj55334").css("border-style", "solid"); $("#obj55334").css("border-radius", "20px"); $("#obj55334").css("-webkit-border-radius", "20px"); $("#obj55334").css("-moz-border-radius", "20px"); $("#obj55334_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj55334_droppedInsideTargetActions_2_runningActionsCount = window.obj55334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj55334_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_55352();
function switchText_55352() {
	window.obj55334_droppedInsideTargetActions_2_runningActionsCount = obj55334_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55332_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55332_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55332").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55332_content");
			setTimeout(function () {
				window.obj55334_droppedInsideTargetActions_2_runningActionsCount = window.obj55334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj55332 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55334_droppedInsideTargetActions_2_runningActionsCount = window.obj55334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj55334_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj55331 
playAudio_55353();
function playAudio_55353() {
	window.obj55334_droppedInsideTargetActions_2_runningActionsCount = obj55334_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj55331")[0];
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
		    window.obj55334_droppedInsideTargetActions_2_runningActionsCount = window.obj55334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55334_droppedInsideTargetActions_2_runningActionsCount = window.obj55334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj55334_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj55334_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55339();
function runjs_55339() {
	window.obj55334_droppedInsideTargetActions_runningActionsCount = obj55334_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55380").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55334_droppedInsideTargetActions_runningActionsCount = window.obj55334_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj55334_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55340();
function runjs_55340() {
	window.obj55334_droppedInsideTargetActions_runningActionsCount = obj55334_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55380").css("border-color", "#058E3F"); $("#obj55380").css("border-width", "2px"); $("#obj55380").css("border-style", "solid"); $("#obj55380").css("border-radius", "10px"); $("#obj55380").css("-webkit-border-radius", "10px"); $("#obj55380").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55334_droppedInsideTargetActions_runningActionsCount = window.obj55334_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj55334_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55374 
hide_55341();
function hide_55341() {
	var selector = "#obj55374";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55334_droppedInsideTargetActions_runningActionsCount = obj55334_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55334_droppedInsideTargetActions_runningActionsCount = window.obj55334_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55341(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55334_droppedInsideTargetActions_runningActionsCount = window.obj55334_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55334_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_55342();
function switchText_55342() {
	window.obj55334_droppedInsideTargetActions_runningActionsCount = obj55334_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55332_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55332_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55332").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55332_content");
			setTimeout(function () {
				window.obj55334_droppedInsideTargetActions_runningActionsCount = window.obj55334_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj55332 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55334_droppedInsideTargetActions_runningActionsCount = window.obj55334_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
	}
}






};
obj55334_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj55330 
playAudio_55343();
function playAudio_55343() {
	window.obj55334_droppedInsideTargetActions_runningActionsCount = obj55334_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj55330")[0];
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
		    window.obj55334_droppedInsideTargetActions_runningActionsCount = window.obj55334_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55334_droppedInsideTargetActions_runningActionsCount = window.obj55334_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55334_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55334_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55334_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55334_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj55334_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55334_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55334").trigger("obj55334_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55334) {
				console.warn("de-queueing event obj55334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55334_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj55288_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj55288");
//	action: dragDrop
//	target: obj55288 
dragDrop_55291();
function dragDrop_55291() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj55288_onTouchDown_runningActionsCount = obj55288_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj55288');
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
	  	containerNode = $('#obj55386');
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
    	window.obj55288_onTouchDown_runningActionsCount = window.obj55288_onTouchDown_runningActionsCount - 1;
if (window.obj55288_onTouchDown_runningActionsCount < 0) {
	window.obj55288_onTouchDown_runningActionsCount = 0;
} else if (window.obj55288_onTouchDown_runningActionsCount == 0) {
	obj55288_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj55382","#obj55384","#obj55380");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_55291 = false;
    	var dropped_id_55291;
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
					dropped_55291 = true;
					dropped_id_55291 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_55291) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj55288").trigger('SCActionDragDrop55291_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj55288_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55288_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj55288 
move_92827();
function move_92827() {
	window.obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_runningActionsCount = obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj55288");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 87;
	var moveY = 591;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_runningActionsCount = window.obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj55288_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55309();
function runjs_55309() {
	window.obj55288_droppedInsideTargetActions_3_runningActionsCount = obj55288_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55380").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55288_droppedInsideTargetActions_3_runningActionsCount = window.obj55288_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj55288_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55310();
function runjs_55310() {
	window.obj55288_droppedInsideTargetActions_3_runningActionsCount = obj55288_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55380").css("border-color", "#C00000"); $("#obj55380").css("border-width", "2px"); $("#obj55380").css("border-style", "solid"); $("#obj55380").css("border-radius", "10px"); $("#obj55380").css("-webkit-border-radius", "10px"); $("#obj55380").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55288_droppedInsideTargetActions_3_runningActionsCount = window.obj55288_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj55288_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_55311();
function switchText_55311() {
	window.obj55288_droppedInsideTargetActions_3_runningActionsCount = obj55288_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55332_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55332_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55332").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55332_content");
			setTimeout(function () {
				window.obj55288_droppedInsideTargetActions_3_runningActionsCount = window.obj55288_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj55332 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55288_droppedInsideTargetActions_3_runningActionsCount = window.obj55288_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj55288_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj55288 
move_55312();
function move_55312() {
	window.obj55288_droppedInsideTargetActions_3_runningActionsCount = obj55288_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj55288");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 87;
	var moveY = 591;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55288_droppedInsideTargetActions_3_runningActionsCount = window.obj55288_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj55288_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_55313();
function runjs_55313() {
	window.obj55288_droppedInsideTargetActions_3_runningActionsCount = obj55288_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55380").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55288_droppedInsideTargetActions_3_runningActionsCount = window.obj55288_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj55288_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_55314();
function runjs_55314() {
	window.obj55288_droppedInsideTargetActions_3_runningActionsCount = obj55288_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55380").css("border-color", "#000000"); $("#obj55380").css("border-width", "1px"); $("#obj55380").css("border-style", "solid"); $("#obj55380").css("border-radius", "15px"); $("#obj55380").css("-webkit-border-radius", "15px"); $("#obj55380").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj55288_droppedInsideTargetActions_3_runningActionsCount = window.obj55288_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj55288_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55315();
function runjs_55315() {
	window.obj55288_droppedInsideTargetActions_3_runningActionsCount = obj55288_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55288").css("border-color", "rgba(0,0,0,0)"); $("#obj55288").css("border-width", "0px"); $("#obj55288").css("border-style", "solid"); $("#obj55288").css("border-radius", "20px"); $("#obj55288").css("-webkit-border-radius", "20px"); $("#obj55288").css("-moz-border-radius", "20px"); $("#obj55288_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj55288_droppedInsideTargetActions_3_runningActionsCount = window.obj55288_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj55288_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_55316();
function switchText_55316() {
	window.obj55288_droppedInsideTargetActions_3_runningActionsCount = obj55288_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55332_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55332_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55332").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55332_content");
			setTimeout(function () {
				window.obj55288_droppedInsideTargetActions_3_runningActionsCount = window.obj55288_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj55332 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55288_droppedInsideTargetActions_3_runningActionsCount = window.obj55288_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj55288_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj55331 
playAudio_55317();
function playAudio_55317() {
	window.obj55288_droppedInsideTargetActions_3_runningActionsCount = obj55288_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj55331")[0];
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
		    window.obj55288_droppedInsideTargetActions_3_runningActionsCount = window.obj55288_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55288_droppedInsideTargetActions_3_runningActionsCount = window.obj55288_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj55288_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj55288_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55299();
function runjs_55299() {
	window.obj55288_droppedInsideTargetActions_2_runningActionsCount = obj55288_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55384").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55288_droppedInsideTargetActions_2_runningActionsCount = window.obj55288_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj55288_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55300();
function runjs_55300() {
	window.obj55288_droppedInsideTargetActions_2_runningActionsCount = obj55288_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55384").css("border-color", "#C00000"); $("#obj55384").css("border-width", "2px"); $("#obj55384").css("border-style", "solid"); $("#obj55384").css("border-radius", "10px"); $("#obj55384").css("-webkit-border-radius", "10px"); $("#obj55384").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55288_droppedInsideTargetActions_2_runningActionsCount = window.obj55288_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj55288_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_55301();
function switchText_55301() {
	window.obj55288_droppedInsideTargetActions_2_runningActionsCount = obj55288_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55332_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55332_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55332").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55332_content");
			setTimeout(function () {
				window.obj55288_droppedInsideTargetActions_2_runningActionsCount = window.obj55288_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj55332 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55288_droppedInsideTargetActions_2_runningActionsCount = window.obj55288_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj55288_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj55288 
move_55302();
function move_55302() {
	window.obj55288_droppedInsideTargetActions_2_runningActionsCount = obj55288_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj55288");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 87;
	var moveY = 591;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55288_droppedInsideTargetActions_2_runningActionsCount = window.obj55288_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj55288_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_55303();
function runjs_55303() {
	window.obj55288_droppedInsideTargetActions_2_runningActionsCount = obj55288_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55384").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55288_droppedInsideTargetActions_2_runningActionsCount = window.obj55288_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj55288_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_55304();
function runjs_55304() {
	window.obj55288_droppedInsideTargetActions_2_runningActionsCount = obj55288_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55384").css("border-color", "#000000"); $("#obj55384").css("border-width", "1px"); $("#obj55384").css("border-style", "solid"); $("#obj55384").css("border-radius", "15px"); $("#obj55384").css("-webkit-border-radius", "15px"); $("#obj55384").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj55288_droppedInsideTargetActions_2_runningActionsCount = window.obj55288_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj55288_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55305();
function runjs_55305() {
	window.obj55288_droppedInsideTargetActions_2_runningActionsCount = obj55288_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55288").css("border-color", "rgba(0,0,0,0)"); $("#obj55288").css("border-width", "0px"); $("#obj55288").css("border-style", "solid"); $("#obj55288").css("border-radius", "20px"); $("#obj55288").css("-webkit-border-radius", "20px"); $("#obj55288").css("-moz-border-radius", "20px"); $("#obj55288_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj55288_droppedInsideTargetActions_2_runningActionsCount = window.obj55288_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj55288_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_55306();
function switchText_55306() {
	window.obj55288_droppedInsideTargetActions_2_runningActionsCount = obj55288_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55332_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55332_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55332").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55332_content");
			setTimeout(function () {
				window.obj55288_droppedInsideTargetActions_2_runningActionsCount = window.obj55288_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj55332 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55288_droppedInsideTargetActions_2_runningActionsCount = window.obj55288_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj55288_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj55331 
playAudio_55307();
function playAudio_55307() {
	window.obj55288_droppedInsideTargetActions_2_runningActionsCount = obj55288_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj55331")[0];
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
		    window.obj55288_droppedInsideTargetActions_2_runningActionsCount = window.obj55288_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55288_droppedInsideTargetActions_2_runningActionsCount = window.obj55288_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj55288_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj55288_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55293();
function runjs_55293() {
	window.obj55288_droppedInsideTargetActions_runningActionsCount = obj55288_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55382").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55288_droppedInsideTargetActions_runningActionsCount = window.obj55288_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj55288_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55294();
function runjs_55294() {
	window.obj55288_droppedInsideTargetActions_runningActionsCount = obj55288_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55382").css("border-color", "#058E3F"); $("#obj55382").css("border-width", "2px"); $("#obj55382").css("border-style", "solid"); $("#obj55382").css("border-radius", "10px"); $("#obj55382").css("-webkit-border-radius", "10px"); $("#obj55382").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55288_droppedInsideTargetActions_runningActionsCount = window.obj55288_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj55288_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55376 
hide_55295();
function hide_55295() {
	var selector = "#obj55376";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55288_droppedInsideTargetActions_runningActionsCount = obj55288_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55288_droppedInsideTargetActions_runningActionsCount = window.obj55288_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55295(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55288_droppedInsideTargetActions_runningActionsCount = window.obj55288_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55288_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_55296();
function switchText_55296() {
	window.obj55288_droppedInsideTargetActions_runningActionsCount = obj55288_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55332_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55332_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55332").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55332_content");
			setTimeout(function () {
				window.obj55288_droppedInsideTargetActions_runningActionsCount = window.obj55288_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj55332 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55288_droppedInsideTargetActions_runningActionsCount = window.obj55288_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
	}
}






};
obj55288_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj55330 
playAudio_55297();
function playAudio_55297() {
	window.obj55288_droppedInsideTargetActions_runningActionsCount = obj55288_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj55330")[0];
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
		    window.obj55288_droppedInsideTargetActions_runningActionsCount = window.obj55288_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55288_droppedInsideTargetActions_runningActionsCount = window.obj55288_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55288_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55288_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55288_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55288_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj55288_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55288_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55288").trigger("obj55288_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55288) {
				console.warn("de-queueing event obj55288." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55288").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55288_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj55248_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj55248");
//	action: dragDrop
//	target: obj55248 
dragDrop_55251();
function dragDrop_55251() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj55248_onTouchDown_runningActionsCount = obj55248_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj55248');
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
	  	containerNode = $('#obj55386');
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
    	window.obj55248_onTouchDown_runningActionsCount = window.obj55248_onTouchDown_runningActionsCount - 1;
if (window.obj55248_onTouchDown_runningActionsCount < 0) {
	window.obj55248_onTouchDown_runningActionsCount = 0;
} else if (window.obj55248_onTouchDown_runningActionsCount == 0) {
	obj55248_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj55384","#obj55380","#obj55382");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_55251 = false;
    	var dropped_id_55251;
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
					dropped_55251 = true;
					dropped_id_55251 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_55251) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj55248").trigger('SCActionDragDrop55251_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj55248_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55248_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj55248 
move_92829();
function move_92829() {
	window.obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_runningActionsCount = obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj55248");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 245;
	var moveY = 591;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_runningActionsCount = window.obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj55248_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55269();
function runjs_55269() {
	window.obj55248_droppedInsideTargetActions_3_runningActionsCount = obj55248_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55382").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55248_droppedInsideTargetActions_3_runningActionsCount = window.obj55248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj55248_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55270();
function runjs_55270() {
	window.obj55248_droppedInsideTargetActions_3_runningActionsCount = obj55248_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55382").css("border-color", "#C00000"); $("#obj55382").css("border-width", "2px"); $("#obj55382").css("border-style", "solid"); $("#obj55382").css("border-radius", "10px"); $("#obj55382").css("-webkit-border-radius", "10px"); $("#obj55382").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55248_droppedInsideTargetActions_3_runningActionsCount = window.obj55248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj55248_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_55271();
function switchText_55271() {
	window.obj55248_droppedInsideTargetActions_3_runningActionsCount = obj55248_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55332_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55332_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55332").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55332_content");
			setTimeout(function () {
				window.obj55248_droppedInsideTargetActions_3_runningActionsCount = window.obj55248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj55332 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55248_droppedInsideTargetActions_3_runningActionsCount = window.obj55248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj55248_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj55248 
move_55272();
function move_55272() {
	window.obj55248_droppedInsideTargetActions_3_runningActionsCount = obj55248_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj55248");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 245;
	var moveY = 591;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55248_droppedInsideTargetActions_3_runningActionsCount = window.obj55248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj55248_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_55273();
function runjs_55273() {
	window.obj55248_droppedInsideTargetActions_3_runningActionsCount = obj55248_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55382").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55248_droppedInsideTargetActions_3_runningActionsCount = window.obj55248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj55248_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_55274();
function runjs_55274() {
	window.obj55248_droppedInsideTargetActions_3_runningActionsCount = obj55248_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55382").css("border-color", "#000000"); $("#obj55382").css("border-width", "1px"); $("#obj55382").css("border-style", "solid"); $("#obj55382").css("border-radius", "15px"); $("#obj55382").css("-webkit-border-radius", "15px"); $("#obj55382").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj55248_droppedInsideTargetActions_3_runningActionsCount = window.obj55248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj55248_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55275();
function runjs_55275() {
	window.obj55248_droppedInsideTargetActions_3_runningActionsCount = obj55248_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55248").css("border-color", "rgba(0,0,0,0)"); $("#obj55248").css("border-width", "0px"); $("#obj55248").css("border-style", "solid"); $("#obj55248").css("border-radius", "20px"); $("#obj55248").css("-webkit-border-radius", "20px"); $("#obj55248").css("-moz-border-radius", "20px"); $("#obj55248_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj55248_droppedInsideTargetActions_3_runningActionsCount = window.obj55248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj55248_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_55276();
function switchText_55276() {
	window.obj55248_droppedInsideTargetActions_3_runningActionsCount = obj55248_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55332_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55332_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55332").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55332_content");
			setTimeout(function () {
				window.obj55248_droppedInsideTargetActions_3_runningActionsCount = window.obj55248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj55332 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55248_droppedInsideTargetActions_3_runningActionsCount = window.obj55248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj55248_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj55331 
playAudio_55277();
function playAudio_55277() {
	window.obj55248_droppedInsideTargetActions_3_runningActionsCount = obj55248_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj55331")[0];
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
		    window.obj55248_droppedInsideTargetActions_3_runningActionsCount = window.obj55248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55248_droppedInsideTargetActions_3_runningActionsCount = window.obj55248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj55248_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj55248_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55259();
function runjs_55259() {
	window.obj55248_droppedInsideTargetActions_2_runningActionsCount = obj55248_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55380").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55248_droppedInsideTargetActions_2_runningActionsCount = window.obj55248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj55248_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55260();
function runjs_55260() {
	window.obj55248_droppedInsideTargetActions_2_runningActionsCount = obj55248_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55380").css("border-color", "#C00000"); $("#obj55380").css("border-width", "2px"); $("#obj55380").css("border-style", "solid"); $("#obj55380").css("border-radius", "10px"); $("#obj55380").css("-webkit-border-radius", "10px"); $("#obj55380").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55248_droppedInsideTargetActions_2_runningActionsCount = window.obj55248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj55248_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_55261();
function switchText_55261() {
	window.obj55248_droppedInsideTargetActions_2_runningActionsCount = obj55248_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55332_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55332_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55332").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55332_content");
			setTimeout(function () {
				window.obj55248_droppedInsideTargetActions_2_runningActionsCount = window.obj55248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj55332 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55248_droppedInsideTargetActions_2_runningActionsCount = window.obj55248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj55248_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj55248 
move_55262();
function move_55262() {
	window.obj55248_droppedInsideTargetActions_2_runningActionsCount = obj55248_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj55248");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 245;
	var moveY = 591;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55248_droppedInsideTargetActions_2_runningActionsCount = window.obj55248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj55248_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_55263();
function runjs_55263() {
	window.obj55248_droppedInsideTargetActions_2_runningActionsCount = obj55248_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55380").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55248_droppedInsideTargetActions_2_runningActionsCount = window.obj55248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj55248_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_55264();
function runjs_55264() {
	window.obj55248_droppedInsideTargetActions_2_runningActionsCount = obj55248_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55380").css("border-color", "#000000"); $("#obj55380").css("border-width", "1px"); $("#obj55380").css("border-style", "solid"); $("#obj55380").css("border-radius", "15px"); $("#obj55380").css("-webkit-border-radius", "15px"); $("#obj55380").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj55248_droppedInsideTargetActions_2_runningActionsCount = window.obj55248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj55248_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55265();
function runjs_55265() {
	window.obj55248_droppedInsideTargetActions_2_runningActionsCount = obj55248_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55248").css("border-color", "rgba(0,0,0,0)"); $("#obj55248").css("border-width", "0px"); $("#obj55248").css("border-style", "solid"); $("#obj55248").css("border-radius", "20px"); $("#obj55248").css("-webkit-border-radius", "20px"); $("#obj55248").css("-moz-border-radius", "20px"); $("#obj55248_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj55248_droppedInsideTargetActions_2_runningActionsCount = window.obj55248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj55248_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_55266();
function switchText_55266() {
	window.obj55248_droppedInsideTargetActions_2_runningActionsCount = obj55248_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55332_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55332_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55332").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55332_content");
			setTimeout(function () {
				window.obj55248_droppedInsideTargetActions_2_runningActionsCount = window.obj55248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj55332 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55248_droppedInsideTargetActions_2_runningActionsCount = window.obj55248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj55248_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj55331 
playAudio_55267();
function playAudio_55267() {
	window.obj55248_droppedInsideTargetActions_2_runningActionsCount = obj55248_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj55331")[0];
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
		    window.obj55248_droppedInsideTargetActions_2_runningActionsCount = window.obj55248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55248_droppedInsideTargetActions_2_runningActionsCount = window.obj55248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj55248_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj55248_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55253();
function runjs_55253() {
	window.obj55248_droppedInsideTargetActions_runningActionsCount = obj55248_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55384").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55248_droppedInsideTargetActions_runningActionsCount = window.obj55248_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj55248_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55254();
function runjs_55254() {
	window.obj55248_droppedInsideTargetActions_runningActionsCount = obj55248_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55384").css("border-color", "#058E3F"); $("#obj55384").css("border-width", "2px"); $("#obj55384").css("border-style", "solid"); $("#obj55384").css("border-radius", "10px"); $("#obj55384").css("-webkit-border-radius", "10px"); $("#obj55384").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55248_droppedInsideTargetActions_runningActionsCount = window.obj55248_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj55248_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55378 
hide_55255();
function hide_55255() {
	var selector = "#obj55378";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55248_droppedInsideTargetActions_runningActionsCount = obj55248_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55248_droppedInsideTargetActions_runningActionsCount = window.obj55248_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55255(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55248_droppedInsideTargetActions_runningActionsCount = window.obj55248_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55248_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_55256();
function switchText_55256() {
	window.obj55248_droppedInsideTargetActions_runningActionsCount = obj55248_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55332_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55332_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55332").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55332_content");
			setTimeout(function () {
				window.obj55248_droppedInsideTargetActions_runningActionsCount = window.obj55248_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj55332 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55248_droppedInsideTargetActions_runningActionsCount = window.obj55248_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
	}
}






};
obj55248_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj55330 
playAudio_55257();
function playAudio_55257() {
	window.obj55248_droppedInsideTargetActions_runningActionsCount = obj55248_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj55330")[0];
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
		    window.obj55248_droppedInsideTargetActions_runningActionsCount = window.obj55248_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55248_droppedInsideTargetActions_runningActionsCount = window.obj55248_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55248_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55248_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55248_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55248_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj55248_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55248_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55248").trigger("obj55248_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55248) {
				console.warn("de-queueing event obj55248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55248_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj68238_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68238_onTap_activeActionGroupIndex = -1;
		$("#obj68238").trigger("obj68238_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68238) {
				console.warn("de-queueing event obj68238." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68238").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68238_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68238 
hide_68241();
function hide_68241() {
	var selector = "#obj68238";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68238_onTap_runningActionsCount = obj68238_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68238_onTap_runningActionsCount = window.obj68238_onTap_runningActionsCount - 1;
if (window.obj68238_onTap_runningActionsCount < 0) {
	window.obj68238_onTap_runningActionsCount = 0;
} else if (window.obj68238_onTap_runningActionsCount == 0) {
	obj68238_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68241(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68238_onTap_runningActionsCount = window.obj68238_onTap_runningActionsCount - 1;
if (window.obj68238_onTap_runningActionsCount < 0) {
	window.obj68238_onTap_runningActionsCount = 0;
} else if (window.obj68238_onTap_runningActionsCount == 0) {
	obj68238_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68244 
stopMovie_68240();
function stopMovie_68240() {
	window.obj68238_onTap_runningActionsCount = obj68238_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68244")[0];
	myVideo.pause();
	window.obj68238_onTap_runningActionsCount = window.obj68238_onTap_runningActionsCount - 1;
if (window.obj68238_onTap_runningActionsCount < 0) {
	window.obj68238_onTap_runningActionsCount = 0;
} else if (window.obj68238_onTap_runningActionsCount == 0) {
	obj68238_onTap_actionGroup1();
}
}
















};
obj68238_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68238_onTap_activeActionGroupIndex = -1;
		$("#obj68238").trigger("obj68238_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68238) {
				console.warn("de-queueing event obj68238." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68238").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68238_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68230
(function(){
	window.obj68238_onTap_runningActionsCount = obj68238_onTap_runningActionsCount + 1;

	var selector = "#obj68230";
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
					window.obj68238_onTap_runningActionsCount = window.obj68238_onTap_runningActionsCount - 1;
if (window.obj68238_onTap_runningActionsCount < 0) {
	window.obj68238_onTap_runningActionsCount = 0;
} else if (window.obj68238_onTap_runningActionsCount == 0) {
	obj68238_onTap_actionGroup2();
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
				window.obj68238_onTap_runningActionsCount = window.obj68238_onTap_runningActionsCount - 1;
if (window.obj68238_onTap_runningActionsCount < 0) {
	window.obj68238_onTap_runningActionsCount = 0;
} else if (window.obj68238_onTap_runningActionsCount == 0) {
	obj68238_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68238_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68238_onTap_activeActionGroupIndex = -1;
		$("#obj68238").trigger("obj68238_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68238) {
				console.warn("de-queueing event obj68238." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68238").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68238_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68244 
move_68243();
function move_68243() {
	window.obj68238_onTap_runningActionsCount = obj68238_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68244");
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
			window.obj68238_onTap_runningActionsCount = window.obj68238_onTap_runningActionsCount - 1;
if (window.obj68238_onTap_runningActionsCount < 0) {
	window.obj68238_onTap_runningActionsCount = 0;
} else if (window.obj68238_onTap_runningActionsCount == 0) {
	obj68238_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68238_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68238_onTap_activeActionGroupIndex = -1;
		$("#obj68238").trigger("obj68238_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68238) {
				console.warn("de-queueing event obj68238." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68238").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68238_onTap_activeActionGroupIndex = 3;
	





















};
obj68230_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68230_onTap_activeActionGroupIndex = -1;
		$("#obj68230").trigger("obj68230_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68230) {
				console.warn("de-queueing event obj68230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68230_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68230 
hide_68233();
function hide_68233() {
	var selector = "#obj68230";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68230_onTap_runningActionsCount = obj68230_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68230_onTap_runningActionsCount = window.obj68230_onTap_runningActionsCount - 1;
if (window.obj68230_onTap_runningActionsCount < 0) {
	window.obj68230_onTap_runningActionsCount = 0;
} else if (window.obj68230_onTap_runningActionsCount == 0) {
	obj68230_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68233(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68230_onTap_runningActionsCount = window.obj68230_onTap_runningActionsCount - 1;
if (window.obj68230_onTap_runningActionsCount < 0) {
	window.obj68230_onTap_runningActionsCount = 0;
} else if (window.obj68230_onTap_runningActionsCount == 0) {
	obj68230_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68244 
playPauseMovie_68232();
function playPauseMovie_68232() {
	window.obj68230_onTap_runningActionsCount = obj68230_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68244")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68230_onTap_runningActionsCount = window.obj68230_onTap_runningActionsCount - 1;
if (window.obj68230_onTap_runningActionsCount < 0) {
	window.obj68230_onTap_runningActionsCount = 0;
} else if (window.obj68230_onTap_runningActionsCount == 0) {
	obj68230_onTap_actionGroup1();
}
}

















};
obj68230_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68230_onTap_activeActionGroupIndex = -1;
		$("#obj68230").trigger("obj68230_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68230) {
				console.warn("de-queueing event obj68230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68230_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68238
(function(){
	window.obj68230_onTap_runningActionsCount = obj68230_onTap_runningActionsCount + 1;

	var selector = "#obj68238";
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
					window.obj68230_onTap_runningActionsCount = window.obj68230_onTap_runningActionsCount - 1;
if (window.obj68230_onTap_runningActionsCount < 0) {
	window.obj68230_onTap_runningActionsCount = 0;
} else if (window.obj68230_onTap_runningActionsCount == 0) {
	obj68230_onTap_actionGroup2();
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
				window.obj68230_onTap_runningActionsCount = window.obj68230_onTap_runningActionsCount - 1;
if (window.obj68230_onTap_runningActionsCount < 0) {
	window.obj68230_onTap_runningActionsCount = 0;
} else if (window.obj68230_onTap_runningActionsCount == 0) {
	obj68230_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68230_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68230_onTap_activeActionGroupIndex = -1;
		$("#obj68230").trigger("obj68230_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68230) {
				console.warn("de-queueing event obj68230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68230_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68244 
move_68235();
function move_68235() {
	window.obj68230_onTap_runningActionsCount = obj68230_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68244");
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
			window.obj68230_onTap_runningActionsCount = window.obj68230_onTap_runningActionsCount - 1;
if (window.obj68230_onTap_runningActionsCount < 0) {
	window.obj68230_onTap_runningActionsCount = 0;
} else if (window.obj68230_onTap_runningActionsCount == 0) {
	obj68230_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68230_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68230_onTap_activeActionGroupIndex = -1;
		$("#obj68230").trigger("obj68230_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68230) {
				console.warn("de-queueing event obj68230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68230_onTap_activeActionGroupIndex = 3;
	





















};
obj89281_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89281_onTap_activeActionGroupIndex = -1;
		$("#obj89281").trigger("obj89281_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89281) {
				console.warn("de-queueing event obj89281." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89281").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89281_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89286 
stopAudio_89283();
function stopAudio_89283() {
	window.obj89281_onTap_runningActionsCount = obj89281_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89286")[0];
	myAudio.pause();
	window.obj89281_onTap_runningActionsCount = window.obj89281_onTap_runningActionsCount - 1;
if (window.obj89281_onTap_runningActionsCount < 0) {
	window.obj89281_onTap_runningActionsCount = 0;
} else if (window.obj89281_onTap_runningActionsCount == 0) {
	obj89281_onTap_actionGroup1();
}
}








};
obj89281_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89281_onTap_activeActionGroupIndex = -1;
		$("#obj89281").trigger("obj89281_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89281) {
				console.warn("de-queueing event obj89281." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89281").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89281_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89281 
hide_89284();
function hide_89284() {
	var selector = "#obj89281";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89281_onTap_runningActionsCount = obj89281_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89281_onTap_runningActionsCount = window.obj89281_onTap_runningActionsCount - 1;
if (window.obj89281_onTap_runningActionsCount < 0) {
	window.obj89281_onTap_runningActionsCount = 0;
} else if (window.obj89281_onTap_runningActionsCount == 0) {
	obj89281_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89284(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89281_onTap_runningActionsCount = window.obj89281_onTap_runningActionsCount - 1;
if (window.obj89281_onTap_runningActionsCount < 0) {
	window.obj89281_onTap_runningActionsCount = 0;
} else if (window.obj89281_onTap_runningActionsCount == 0) {
	obj89281_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89281_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89281_onTap_activeActionGroupIndex = -1;
		$("#obj89281").trigger("obj89281_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89281) {
				console.warn("de-queueing event obj89281." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89281").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89281_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89276
(function(){
	window.obj89281_onTap_runningActionsCount = obj89281_onTap_runningActionsCount + 1;

	var selector = "#obj89276";
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
					window.obj89281_onTap_runningActionsCount = window.obj89281_onTap_runningActionsCount - 1;
if (window.obj89281_onTap_runningActionsCount < 0) {
	window.obj89281_onTap_runningActionsCount = 0;
} else if (window.obj89281_onTap_runningActionsCount == 0) {
	obj89281_onTap_actionGroup3();
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
				window.obj89281_onTap_runningActionsCount = window.obj89281_onTap_runningActionsCount - 1;
if (window.obj89281_onTap_runningActionsCount < 0) {
	window.obj89281_onTap_runningActionsCount = 0;
} else if (window.obj89281_onTap_runningActionsCount == 0) {
	obj89281_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89281_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89281_onTap_activeActionGroupIndex = -1;
		$("#obj89281").trigger("obj89281_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89281) {
				console.warn("de-queueing event obj89281." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89281").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89281_onTap_activeActionGroupIndex = 3;
	





















};
obj89276_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89276_onTap_activeActionGroupIndex = -1;
		$("#obj89276").trigger("obj89276_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89276) {
				console.warn("de-queueing event obj89276." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89276").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89276_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89276 
hide_89278();
function hide_89278() {
	var selector = "#obj89276";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89276_onTap_runningActionsCount = obj89276_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89276_onTap_runningActionsCount = window.obj89276_onTap_runningActionsCount - 1;
if (window.obj89276_onTap_runningActionsCount < 0) {
	window.obj89276_onTap_runningActionsCount = 0;
} else if (window.obj89276_onTap_runningActionsCount == 0) {
	obj89276_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89278(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89276_onTap_runningActionsCount = window.obj89276_onTap_runningActionsCount - 1;
if (window.obj89276_onTap_runningActionsCount < 0) {
	window.obj89276_onTap_runningActionsCount = 0;
} else if (window.obj89276_onTap_runningActionsCount == 0) {
	obj89276_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89276_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89276_onTap_activeActionGroupIndex = -1;
		$("#obj89276").trigger("obj89276_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89276) {
				console.warn("de-queueing event obj89276." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89276").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89276_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89281
(function(){
	window.obj89276_onTap_runningActionsCount = obj89276_onTap_runningActionsCount + 1;

	var selector = "#obj89281";
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
					window.obj89276_onTap_runningActionsCount = window.obj89276_onTap_runningActionsCount - 1;
if (window.obj89276_onTap_runningActionsCount < 0) {
	window.obj89276_onTap_runningActionsCount = 0;
} else if (window.obj89276_onTap_runningActionsCount == 0) {
	obj89276_onTap_actionGroup2();
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
				window.obj89276_onTap_runningActionsCount = window.obj89276_onTap_runningActionsCount - 1;
if (window.obj89276_onTap_runningActionsCount < 0) {
	window.obj89276_onTap_runningActionsCount = 0;
} else if (window.obj89276_onTap_runningActionsCount == 0) {
	obj89276_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89276_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89276_onTap_activeActionGroupIndex = -1;
		$("#obj89276").trigger("obj89276_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89276) {
				console.warn("de-queueing event obj89276." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89276").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89276_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89286 
playAudio_89280();
function playAudio_89280() {
	window.obj89276_onTap_runningActionsCount = obj89276_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89286")[0];
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
		    window.obj89276_onTap_runningActionsCount = window.obj89276_onTap_runningActionsCount - 1;
if (window.obj89276_onTap_runningActionsCount < 0) {
	window.obj89276_onTap_runningActionsCount = 0;
} else if (window.obj89276_onTap_runningActionsCount == 0) {
	obj89276_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89276_onTap_runningActionsCount = window.obj89276_onTap_runningActionsCount - 1;
if (window.obj89276_onTap_runningActionsCount < 0) {
	window.obj89276_onTap_runningActionsCount = 0;
} else if (window.obj89276_onTap_runningActionsCount == 0) {
	obj89276_onTap_actionGroup3();
}
	}
}









};
obj89276_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89276_onTap_activeActionGroupIndex = -1;
		$("#obj89276").trigger("obj89276_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89276) {
				console.warn("de-queueing event obj89276." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89276").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89276_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj55401: Event Touch Down
 *
 */
$("#obj55401").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj55401_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55401_onTap is still running");
	return;
}
var obj55401_onTap_runningActionsCount = 0;
var obj55401_onTap_loopCount = 0;
obj55401_onTap_actionGroup0();
});










/*
 *
 *   obj55398: Event Touch Down
 *
 */
$("#obj55398").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj55398_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55398_onTap is still running");
	return;
}
var obj55398_onTap_runningActionsCount = 0;
var obj55398_onTap_loopCount = 0;
obj55398_onTap_actionGroup0();
});










/*
 *
 *   obj55394: Event Touch Down
 *
 */
$("#obj55394").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj55394_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55394_onTap is still running");
	return;
}
var obj55394_onTap_runningActionsCount = 0;
var obj55394_onTap_loopCount = 0;
obj55394_onTap_actionGroup0();
});































































































































































































/*
 *
 *   obj55334: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj55334");
	var winTarget = document.getElementById("obj55334");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj55334").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj55334_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj55334_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj55334_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55334_onTouchDown is still running");
	return;
}
var obj55334_onTouchDown_runningActionsCount = 0;
var obj55334_onTouchDown_loopCount = 0;
obj55334_onTouchDown_actionGroup0();
});



/*
 *
 *   obj55334: Event SCActionDragDrop55337_droppedOutsideTargetActions
 *
 */
$("#obj55334").bind("SCActionDragDrop55337_droppedOutsideTargetActions", function(event) {
	if (window.obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55334_SCActionDragDrop55337_droppedOutsideTargetActions is still running");
	return;
}
var obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_loopCount = 0;
obj55334_SCActionDragDrop55337_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj55334: Event droppedInsideTargetActions_3
 *
 */
$("#obj55334").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj55334_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55334_droppedInsideTargetActions_3 is still running");
	return;
}
var obj55334_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55334_droppedInsideTargetActions_3_loopCount = 0;
obj55334_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj55334: Event droppedInsideTargetActions_2
 *
 */
$("#obj55334").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj55334_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55334_droppedInsideTargetActions_2 is still running");
	return;
}
var obj55334_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55334_droppedInsideTargetActions_2_loopCount = 0;
obj55334_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj55334: Event droppedInsideTargetActions
 *
 */
$("#obj55334").bind("droppedInsideTargetActions", function(event) {
	if (window.obj55334_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55334_droppedInsideTargetActions is still running");
	return;
}
var obj55334_droppedInsideTargetActions_runningActionsCount = 0;
var obj55334_droppedInsideTargetActions_loopCount = 0;
obj55334_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj55288: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj55288");
	var winTarget = document.getElementById("obj55288");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj55288").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj55288_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj55288_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj55288_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55288_onTouchDown is still running");
	return;
}
var obj55288_onTouchDown_runningActionsCount = 0;
var obj55288_onTouchDown_loopCount = 0;
obj55288_onTouchDown_actionGroup0();
});



/*
 *
 *   obj55288: Event SCActionDragDrop55291_droppedOutsideTargetActions
 *
 */
$("#obj55288").bind("SCActionDragDrop55291_droppedOutsideTargetActions", function(event) {
	if (window.obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55288_SCActionDragDrop55291_droppedOutsideTargetActions is still running");
	return;
}
var obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_loopCount = 0;
obj55288_SCActionDragDrop55291_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj55288: Event droppedInsideTargetActions_3
 *
 */
$("#obj55288").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj55288_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55288_droppedInsideTargetActions_3 is still running");
	return;
}
var obj55288_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55288_droppedInsideTargetActions_3_loopCount = 0;
obj55288_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj55288: Event droppedInsideTargetActions_2
 *
 */
$("#obj55288").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj55288_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55288_droppedInsideTargetActions_2 is still running");
	return;
}
var obj55288_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55288_droppedInsideTargetActions_2_loopCount = 0;
obj55288_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj55288: Event droppedInsideTargetActions
 *
 */
$("#obj55288").bind("droppedInsideTargetActions", function(event) {
	if (window.obj55288_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55288_droppedInsideTargetActions is still running");
	return;
}
var obj55288_droppedInsideTargetActions_runningActionsCount = 0;
var obj55288_droppedInsideTargetActions_loopCount = 0;
obj55288_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj55248: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj55248");
	var winTarget = document.getElementById("obj55248");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj55248").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj55248_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj55248_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj55248_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55248_onTouchDown is still running");
	return;
}
var obj55248_onTouchDown_runningActionsCount = 0;
var obj55248_onTouchDown_loopCount = 0;
obj55248_onTouchDown_actionGroup0();
});



/*
 *
 *   obj55248: Event SCActionDragDrop55251_droppedOutsideTargetActions
 *
 */
$("#obj55248").bind("SCActionDragDrop55251_droppedOutsideTargetActions", function(event) {
	if (window.obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55248_SCActionDragDrop55251_droppedOutsideTargetActions is still running");
	return;
}
var obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_loopCount = 0;
obj55248_SCActionDragDrop55251_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj55248: Event droppedInsideTargetActions_3
 *
 */
$("#obj55248").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj55248_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55248_droppedInsideTargetActions_3 is still running");
	return;
}
var obj55248_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55248_droppedInsideTargetActions_3_loopCount = 0;
obj55248_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj55248: Event droppedInsideTargetActions_2
 *
 */
$("#obj55248").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj55248_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55248_droppedInsideTargetActions_2 is still running");
	return;
}
var obj55248_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55248_droppedInsideTargetActions_2_loopCount = 0;
obj55248_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj55248: Event droppedInsideTargetActions
 *
 */
$("#obj55248").bind("droppedInsideTargetActions", function(event) {
	if (window.obj55248_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55248_droppedInsideTargetActions is still running");
	return;
}
var obj55248_droppedInsideTargetActions_runningActionsCount = 0;
var obj55248_droppedInsideTargetActions_loopCount = 0;
obj55248_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj68238: Event Touch Down
 *
 */
$("#obj68238").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68238_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68238_onTap is still running");
	return;
}
var obj68238_onTap_runningActionsCount = 0;
var obj68238_onTap_loopCount = 0;
obj68238_onTap_actionGroup0();
});










/*
 *
 *   obj68230: Event Touch Down
 *
 */
$("#obj68230").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68230_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68230_onTap is still running");
	return;
}
var obj68230_onTap_runningActionsCount = 0;
var obj68230_onTap_loopCount = 0;
obj68230_onTap_actionGroup0();
});










/*
 *
 *   obj89281: Event Touch Down
 *
 */
$("#obj89281").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89281_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89281_onTap is still running");
	return;
}
var obj89281_onTap_runningActionsCount = 0;
var obj89281_onTap_loopCount = 0;
obj89281_onTap_actionGroup0();
});










/*
 *
 *   obj89276: Event Touch Down
 *
 */
$("#obj89276").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89276_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89276_onTap is still running");
	return;
}
var obj89276_onTap_runningActionsCount = 0;
var obj89276_onTap_loopCount = 0;
obj89276_onTap_actionGroup0();
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
	
$("#obj55417").trigger('SCEventShow');
$("#obj55401").trigger('SCEventShow');
$("#obj55398").trigger('SCEventShow');
$("#obj55394").trigger('SCEventShow');
$("#obj55392").trigger('SCEventShow');
$("#obj55390").trigger('SCEventShow');
$("#obj55388").trigger('SCEventShow');
$("#obj55386").trigger('SCEventShow');
$("#obj55384").trigger('SCEventShow');
$("#obj55382").trigger('SCEventShow');
$("#obj55380").trigger('SCEventShow');
$("#obj55378").trigger('SCEventShow');
$("#obj55376").trigger('SCEventShow');
$("#obj55374").trigger('SCEventShow');
$("#obj55332").trigger('SCEventShow');
$("#obj55331").trigger('SCEventShow');
$("#obj55330").trigger('SCEventShow');
$("#obj55328").trigger('SCEventShow');
$("#obj55246").trigger('SCEventShow');
$("#obj55244").trigger('SCEventShow');
$("#obj55242").trigger('SCEventShow');
$("#obj55419").trigger('SCEventShow');
$("#obj55334").trigger('SCEventShow');
$("#obj55288").trigger('SCEventShow');
$("#obj55248").trigger('SCEventShow');
$("#obj68238").trigger('SCEventShow');
$("#obj68230").trigger('SCEventShow');
$("#obj89281").trigger('SCEventShow');
$("#obj89276").trigger('SCEventShow');
$("#obj89286").trigger('SCEventShow');
$("#obj95029").trigger('SCEventShow');
$("#obj68244").trigger('SCEventShow');
	
});